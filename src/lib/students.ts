import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Stage } from "@/types";

export interface StudentProfile {
  uid: string;
  name: string;
  birthDate: string;
  stage: Stage;
  avatarEmoji: string;
  email?: string;
  createdAt?: Date;
}

function toStudentProfile(uid: string, data: Record<string, unknown>): StudentProfile {
  const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate() : undefined;
  return {
    uid,
    name: (data.name as string) ?? "Sin nombre",
    birthDate: (data.birthDate as string) ?? "",
    stage: (data.stage as Stage) ?? "primaria_inicial",
    avatarEmoji: (data.avatarEmoji as string) ?? "🦊",
    email: data.email as string | undefined,
    createdAt,
  };
}

export async function listStudents(): Promise<StudentProfile[]> {
  const q = query(collection(db, "users"), where("role", "==", "alumno"));
  const snapshot = await getDocs(q);
  return snapshot.docs
    .map((d) => toStudentProfile(d.id, d.data()))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getStudentProfile(uid: string): Promise<StudentProfile | null> {
  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) return null;
  return toStudentProfile(snap.id, snap.data());
}

/** Corrects a student's school year. Only a "profesora" is allowed to do this. */
export async function updateStudentStage(uid: string, stage: Stage): Promise<void> {
  await updateDoc(doc(db, "users", uid), { stage });
}

export function calculateAge(birthDate: string): number | null {
  if (!birthDate) return null;
  const birth = new Date(birthDate);
  if (Number.isNaN(birth.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
