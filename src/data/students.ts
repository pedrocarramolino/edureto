import type { Student } from "@/types";

export const students: Student[] = [
  {
    id: "s1",
    name: "Pablo",
    age: 9,
    stage: "primaria_inicial",
    avatarEmoji: "🦊",
    streakDays: 4,
    points: 320,
    skills: [
      { id: "sk1", subjectId: "lengua", name: "Comprensión lectora", status: "necesita_practicar" },
      { id: "sk2", subjectId: "matematicas", name: "Multiplicaciones", status: "en_progreso" },
      { id: "sk3", subjectId: "ingles", name: "Vocabulario básico", status: "consolidado" },
    ],
  },
  {
    id: "s2",
    name: "María",
    age: 8,
    stage: "primaria_inicial",
    avatarEmoji: "🐱",
    streakDays: 9,
    points: 540,
    skills: [
      { id: "sk4", subjectId: "matematicas", name: "Sumas y restas", status: "en_progreso" },
      { id: "sk5", subjectId: "ciencias_naturales", name: "Clasificación de animales", status: "en_progreso" },
    ],
  },
  {
    id: "s3",
    name: "Hugo",
    age: 11,
    stage: "primaria_superior",
    avatarEmoji: "🐢",
    streakDays: 1,
    points: 120,
    skills: [
      { id: "sk6", subjectId: "lengua", name: "Análisis gramatical", status: "necesita_practicar" },
      { id: "sk7", subjectId: "matematicas", name: "Fracciones", status: "necesita_practicar" },
      { id: "sk8", subjectId: "ciencias_sociales", name: "Geografía de España", status: "consolidado" },
    ],
  },
];

export function getStudent(id: string) {
  return students.find((s) => s.id === id);
}
