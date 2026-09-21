"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Flame, Star, ArrowRight } from "@phosphor-icons/react";
import { getActivity } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { useAuth } from "@/lib/auth/AuthProvider";
import { getStudentProfile, type StudentProfile } from "@/lib/students";
import {
  listAttemptsForStudent,
  totalPoints,
  currentStreak,
  type Attempt,
} from "@/lib/attempts";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";

/** The last few different games played, newest first. */
function recentActivities(attempts: Attempt[], max: number) {
  const seen = new Set<string>();
  const result: Attempt[] = [];
  for (const attempt of attempts) {
    if (seen.has(attempt.activityId)) continue;
    seen.add(attempt.activityId);
    result.push(attempt);
    if (result.length === max) break;
  }
  return result;
}

export default function StudentHome() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    Promise.all([getStudentProfile(user.uid), listAttemptsForStudent(user.uid)])
      .then(([studentProfile, studentAttempts]) => {
        setProfile(studentProfile);
        setAttempts(studentAttempts);
      })
      .catch(() => {
        // The home screen still works without the summary numbers.
      })
      .finally(() => setLoading(false));
  }, [user]);

  const keepPlaying = recentActivities(attempts, 3);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <span className="text-5xl" aria-hidden="true">
          {profile?.avatarEmoji ?? "👋"}
        </span>
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">
            ¡Hola{profile ? `, ${profile.name.split(" ")[0]}` : ""}!
          </h1>
          <p className="flex items-center gap-3 text-slate-500">
            <span className="flex items-center gap-1">
              <Flame size={18} weight="fill" className="text-accent" />
              {loading ? "…" : currentStreak(attempts)} días de racha
            </span>
            <span className="flex items-center gap-1">
              <Star size={18} weight="fill" className="text-amber-400" />
              {loading ? "…" : totalPoints(attempts)} puntos
            </span>
          </p>
        </div>
      </div>

      <Card variant="clay">
        <h2 className="mb-4 font-display text-lg font-bold text-slate-800">Sigue practicando</h2>
        {loading ? (
          <p className="text-sm text-slate-500">Cargando…</p>
        ) : keepPlaying.length === 0 ? (
          <p className="text-sm text-slate-500">
            Todavía no has jugado a nada. ¡Entra en una asignatura y empieza!
          </p>
        ) : (
          <div className="space-y-3">
            {keepPlaying.map((attempt) => {
              const activity = getActivity(attempt.activityId);
              const subject = getSubject(attempt.subjectId);
              if (!activity || !subject) return null;
              return (
                <Link
                  key={attempt.id}
                  href={`/student/play/${activity.id}`}
                  className="flex items-center justify-between rounded-2xl border-2 border-slate-100 p-3 transition-colors hover:border-primary-soft hover:bg-primary-soft/40"
                >
                  <div className="flex items-center gap-3">
                    <WorldBadge subject={subject} size="sm" />
                    <div>
                      <p className="font-semibold text-slate-800">{activity.title}</p>
                      <p className="text-xs text-slate-500">
                        {subject.worldName} · última vez {attempt.correctCount}/{attempt.totalCount}
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                    Repetir <ArrowRight size={16} weight="bold" />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link href="/student/subjects">
          <Card variant="clay" className="h-full hover:shadow-clay">
            <p className="font-display font-bold text-slate-800">📚 Mis asignaturas</p>
            <p className="text-sm text-slate-500">Explora cada mundo y sus temas.</p>
          </Card>
        </Link>
        <Link href="/student/games">
          <Card variant="clay" className="h-full hover:shadow-clay">
            <p className="font-display font-bold text-slate-800">🎮 Zona de juegos</p>
            <p className="text-sm text-slate-500">Juega sin presión, a tu ritmo.</p>
          </Card>
        </Link>
        <Link href="/student/progress">
          <Card variant="clay" className="h-full hover:shadow-clay">
            <p className="font-display font-bold text-slate-800">🏆 Mi progreso</p>
            <p className="text-sm text-slate-500">Mira tus aciertos y tu racha.</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
