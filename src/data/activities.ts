import type { Activity, MissionActivity, MultipleChoiceActivity, SubjectId } from "@/types";

const tabla7Facts: { factor: number; options: string[]; correctIndex: number }[] = [
  { factor: 1, options: ["7", "14", "17", "1"], correctIndex: 0 },
  { factor: 2, options: ["12", "14", "21", "16"], correctIndex: 1 },
  { factor: 3, options: ["18", "24", "21", "14"], correctIndex: 2 },
  { factor: 4, options: ["24", "28", "32", "21"], correctIndex: 1 },
  { factor: 5, options: ["30", "40", "35", "42"], correctIndex: 2 },
  { factor: 6, options: ["36", "42", "48", "49"], correctIndex: 1 },
  { factor: 7, options: ["42", "47", "49", "56"], correctIndex: 2 },
  { factor: 8, options: ["54", "56", "63", "48"], correctIndex: 1 },
  { factor: 9, options: ["56", "63", "69", "72"], correctIndex: 1 },
  { factor: 10, options: ["60", "77", "70", "100"], correctIndex: 2 },
];

const tabla7Activities: MultipleChoiceActivity[] = tabla7Facts.map(({ factor, options, correctIndex }) => ({
  id: `a1-${factor}`,
  type: "multiple_choice",
  subjectId: "matematicas",
  stage: "primaria_inicial",
  topic: "Tabla del 7",
  difficulty: 1,
  title: `7 × ${factor}`,
  question: `¿Cuánto es 7 × ${factor}?`,
  options,
  correctIndex,
  explanation: `7 × ${factor} = ${7 * factor}.`,
}));

export const activities: Activity[] = [
  {
    id: "a1",
    type: "mission",
    subjectId: "matematicas",
    stage: "primaria_inicial",
    topic: "Multiplicaciones",
    difficulty: 1,
    title: "La tabla del 7",
    narrative: "Repasa las 10 multiplicaciones de la tabla del 7, en un orden distinto cada vez.",
    badge: "🔢 Maestro del 7",
    steps: tabla7Facts.map(({ factor }) => ({
      id: `st-a1-${factor}`,
      label: `7 × ${factor}`,
      activityId: `a1-${factor}`,
    })),
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
      { id: "st2", label: "Responde una multiplicación", activityId: "a1-6" },
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

// Individual multiplication facts aren't shown in the library on their own —
// they only exist as steps inside the "La tabla del 7" mission.
const hiddenActivities: Activity[] = tabla7Activities;

export function getActivity(id: string) {
  return activities.find((a) => a.id === id) ?? hiddenActivities.find((a) => a.id === id);
}

export function activitiesBySubject(subjectId: string) {
  return activities.filter((a) => a.subjectId === subjectId);
}

const PLACEMENT_TEST_MAX_QUESTIONS = 5;

/**
 * Builds a one-off "prueba de nivel" mission for a subject, from the
 * easiest activities available (approximating "basic, previous-year"
 * content — our data model doesn't track a per-grade curriculum yet).
 * Missions are excluded as source questions to avoid nesting one mission
 * inside another. Returns null when there's nothing suitable yet.
 */
export function getPlacementTest(subjectId: SubjectId): MissionActivity | null {
  const candidates = [...activities, ...hiddenActivities]
    .filter((a): a is Exclude<Activity, MissionActivity> => a.type !== "mission" && a.subjectId === subjectId)
    .sort((a, b) => a.difficulty - b.difficulty)
    .slice(0, PLACEMENT_TEST_MAX_QUESTIONS);

  if (candidates.length === 0) return null;

  return {
    id: `placement-${subjectId}`,
    type: "mission",
    subjectId,
    stage: candidates[0].stage,
    topic: "Prueba de nivel",
    difficulty: 1,
    title: "Prueba de nivel",
    narrative: "Antes de empezar, responde estas preguntas para ver por dónde vas.",
    badge: "🎯 Primeros pasos",
    steps: candidates.map((activity, index) => ({
      id: `placement-${subjectId}-${index}`,
      label: activity.title,
      activityId: activity.id,
    })),
  };
}
