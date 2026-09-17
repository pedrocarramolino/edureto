import type { Challenge } from "@/types";

export const challenges: Challenge[] = [
  { id: "c1", studentId: "s1", activityId: "a1", assignedBy: "profesora", status: "pendiente" },
  { id: "c2", studentId: "s1", activityId: "a3", assignedBy: "sistema", status: "en_curso" },
  { id: "c3", studentId: "s2", activityId: "a4", assignedBy: "profesora", status: "pendiente" },
  { id: "c4", studentId: "s3", activityId: "a2", assignedBy: "profesora", status: "completado" },
  { id: "c5", studentId: "s3", activityId: "a5", assignedBy: "sistema", status: "pendiente" },
];

export function challengesForStudent(studentId: string) {
  return challenges.filter((c) => c.studentId === studentId);
}
