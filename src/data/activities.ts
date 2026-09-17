import type { Activity } from "@/types";

export const activities: Activity[] = [
  {
    id: "a1",
    type: "multiple_choice",
    subjectId: "matematicas",
    stage: "primaria_inicial",
    topic: "Multiplicaciones",
    difficulty: 1,
    title: "La tabla del 7",
    question: "¿Cuánto es 6 × 7?",
    options: ["36", "42", "48", "49"],
    correctIndex: 1,
    explanation: "6 grupos de 7 suman 42.",
  },
  {
    id: "a2",
    type: "drag_drop",
    subjectId: "lengua",
    stage: "primaria_superior",
    topic: "Gramática",
    difficulty: 2,
    title: "Clasifica las palabras",
    instructions: "Arrastra cada palabra a su categoría correcta.",
    zones: [
      { id: "z1", label: "Sustantivos" },
      { id: "z2", label: "Verbos" },
    ],
    items: [
      { id: "i1", label: "correr", targetZoneId: "z2" },
      { id: "i2", label: "montaña", targetZoneId: "z1" },
      { id: "i3", label: "saltar", targetZoneId: "z2" },
      { id: "i4", label: "escuela", targetZoneId: "z1" },
    ],
  },
  {
    id: "a3",
    type: "build_answer",
    subjectId: "ingles",
    stage: "primaria_inicial",
    topic: "Frases simples",
    difficulty: 1,
    title: "Construye la frase",
    instructions: "Ordena las piezas para formar una frase correcta.",
    pieces: ["I", "have", "a", "dog"],
    correctOrder: ["I", "have", "a", "dog"],
  },
  {
    id: "a4",
    type: "mission",
    subjectId: "ciencias_naturales",
    stage: "primaria_superior",
    topic: "Ecosistemas",
    difficulty: 2,
    title: "Misión: salvar el planeta",
    narrative: "El bosque necesita tu ayuda. Completa los retos para restaurar el ecosistema.",
    badge: "🌍 Guardián del planeta",
    steps: [
      { id: "st1", label: "Ordena la cadena alimentaria", activityId: "a2" },
      { id: "st2", label: "Responde sobre el reciclaje", activityId: "a1" },
    ],
  },
  {
    id: "a5",
    type: "open_response",
    subjectId: "lengua",
    stage: "primaria_superior",
    topic: "Expresión escrita",
    difficulty: 3,
    title: "Cuenta tu historia",
    prompt: "Escribe un breve cuento sobre un viaje inesperado.",
    guidance: "Incluye un inicio, un problema y una solución. Mínimo 5 frases.",
  },
];

export function getActivity(id: string) {
  return activities.find((a) => a.id === id);
}

export function activitiesBySubject(subjectId: string) {
  return activities.filter((a) => a.subjectId === subjectId);
}
