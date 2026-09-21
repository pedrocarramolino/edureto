import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Activity, ActivityResult, SkillStatus, Stage, SubjectId } from "@/types";

/** One finished game, as it is stored in the "attempts" collection. */
export interface Attempt {
  id: string;
  studentId: string;
  activityId: string;
  activityTitle: string;
  subjectId: SubjectId;
  topic: string;
  stage: Stage;
  correct: boolean;
  correctCount: number;
  totalCount: number;
  isPlacementTest: boolean;
  completedAt: Date | null;
}

export const POINTS_PER_CORRECT = 10;

function toAttempt(id: string, data: Record<string, unknown>): Attempt {
  const completedAt = data.completedAt instanceof Timestamp ? data.completedAt.toDate() : null;
  return {
    id,
    studentId: (data.studentId as string) ?? "",
    activityId: (data.activityId as string) ?? "",
    activityTitle: (data.activityTitle as string) ?? "Actividad",
    subjectId: data.subjectId as SubjectId,
    topic: (data.topic as string) ?? "",
    stage: data.stage as Stage,
    correct: Boolean(data.correct),
    correctCount: (data.correctCount as number) ?? 0,
    totalCount: (data.totalCount as number) ?? 0,
    isPlacementTest: Boolean(data.isPlacementTest),
    completedAt,
  };
}

/**
 * Saves a finished game. Callers should treat a rejection as non-fatal: a lost
 * attempt must never block a student who just finished playing.
 */
export async function recordAttempt({
  studentId,
  activity,
  result,
  isPlacementTest = false,
}: {
  studentId: string;
  activity: Activity;
  result: ActivityResult;
  isPlacementTest?: boolean;
}): Promise<void> {
  await addDoc(collection(db, "attempts"), {
    studentId,
    activityId: activity.id,
    activityTitle: activity.title,
    subjectId: activity.subjectId,
    topic: activity.topic,
    stage: activity.stage,
    correct: result.correct,
    correctCount: result.correctCount,
    totalCount: result.totalCount,
    isPlacementTest,
    completedAt: serverTimestamp(),
  });
}

function byMostRecent(a: Attempt, b: Attempt) {
  return (b.completedAt?.getTime() ?? 0) - (a.completedAt?.getTime() ?? 0);
}

/**
 * Every attempt by one student, newest first. Sorted in the client so the query
 * stays a single-field filter and needs no composite index.
 */
export async function listAttemptsForStudent(studentId: string): Promise<Attempt[]> {
  const snapshot = await getDocs(
    query(collection(db, "attempts"), where("studentId", "==", studentId)),
  );
  return snapshot.docs.map((d) => toAttempt(d.id, d.data())).sort(byMostRecent);
}

/** Latest attempts across every student (teacher view). */
export async function listRecentAttempts(max = 100): Promise<Attempt[]> {
  const snapshot = await getDocs(
    query(collection(db, "attempts"), orderBy("completedAt", "desc"), limit(max)),
  );
  return snapshot.docs.map((d) => toAttempt(d.id, d.data()));
}

export interface SubjectProgress {
  subjectId: SubjectId;
  games: number;
  correctCount: number;
  totalCount: number;
  /** Percentage of right answers, 0-100. */
  accuracy: number;
  status: SkillStatus;
  lastPlayed: Date | null;
}

export function statusFromAccuracy(accuracy: number): SkillStatus {
  if (accuracy >= 80) return "consolidado";
  if (accuracy >= 50) return "en_progreso";
  return "necesita_practicar";
}

export function summarizeBySubject(attempts: Attempt[]): SubjectProgress[] {
  const bySubject = new Map<SubjectId, SubjectProgress>();

  for (const attempt of attempts) {
    if (!attempt.subjectId) continue;
    const current = bySubject.get(attempt.subjectId) ?? {
      subjectId: attempt.subjectId,
      games: 0,
      correctCount: 0,
      totalCount: 0,
      accuracy: 0,
      status: "necesita_practicar" as SkillStatus,
      lastPlayed: null,
    };
    current.games += 1;
    current.correctCount += attempt.correctCount;
    current.totalCount += attempt.totalCount;
    if (attempt.completedAt && (!current.lastPlayed || attempt.completedAt > current.lastPlayed)) {
      current.lastPlayed = attempt.completedAt;
    }
    bySubject.set(attempt.subjectId, current);
  }

  return [...bySubject.values()]
    .map((progress) => {
      const accuracy =
        progress.totalCount === 0
          ? 0
          : Math.round((progress.correctCount / progress.totalCount) * 100);
      return { ...progress, accuracy, status: statusFromAccuracy(accuracy) };
    })
    .sort((a, b) => b.games - a.games);
}

export function totalPoints(attempts: Attempt[]): number {
  return attempts.reduce((sum, attempt) => sum + attempt.correctCount * POINTS_PER_CORRECT, 0);
}

function dayKey(date: Date): string {
  return date.toLocaleDateString("sv-SE"); // YYYY-MM-DD in local time
}

/** Consecutive days played, counting back from today (or from yesterday). */
export function currentStreak(attempts: Attempt[]): number {
  const days = new Set(
    attempts.filter((a) => a.completedAt).map((a) => dayKey(a.completedAt as Date)),
  );
  if (days.size === 0) return 0;

  const cursor = new Date();
  if (!days.has(dayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
    if (!days.has(dayKey(cursor))) return 0;
  }

  let streak = 0;
  while (days.has(dayKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
