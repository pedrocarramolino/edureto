import type {
  Activity,
  BuildAnswerActivity,
  DragDropActivity,
  MissionActivity,
  MultipleChoiceActivity,
  SubjectId,
} from "@/types";
import { mathGradeMissions, mathGradeQuestions } from "@/data/mathGrades";
import { lenguaGradeMissions, lenguaGradeQuestions } from "@/data/lenguaGrades";
import { inglesGradeMissions, inglesGradeQuestions } from "@/data/inglesGrades";
import { cienciasGradeMissions, cienciasGradeQuestions } from "@/data/cienciasGrades";

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

const frasesFacts: { sentence: string[]; pieces: string[] }[] = [
  { sentence: ["I", "have", "a", "dog"], pieces: ["dog", "I", "a", "have"] },
  { sentence: ["She", "likes", "cats"], pieces: ["cats", "She", "likes"] },
  { sentence: ["We", "play", "football"], pieces: ["football", "We", "play"] },
  { sentence: ["He", "is", "happy"], pieces: ["happy", "He", "is"] },
  { sentence: ["They", "eat", "apples"], pieces: ["apples", "They", "eat"] },
  { sentence: ["I", "can", "swim"], pieces: ["swim", "I", "can"] },
  { sentence: ["You", "are", "my", "friend"], pieces: ["friend", "are", "You", "my"] },
  { sentence: ["It", "is", "sunny", "today"], pieces: ["today", "is", "It", "sunny"] },
  { sentence: ["We", "go", "to", "school"], pieces: ["school", "to", "We", "go"] },
  { sentence: ["She", "has", "a", "red", "car"], pieces: ["car", "has", "red", "She", "a"] },
];

const frasesActivities: BuildAnswerActivity[] = frasesFacts.map(({ sentence, pieces }, index) => ({
  id: `a3-${index + 1}`,
  type: "build_answer",
  subjectId: "ingles",
  stage: "primaria_inicial",
  topic: "Frases simples",
  difficulty: 1,
  title: sentence.join(" "),
  instructions: "Ordena las piezas para formar una frase correcta.",
  pieces,
  correctOrder: sentence,
}));

const ecosistemaQuestions: Omit<MultipleChoiceActivity, "id" | "type" | "subjectId" | "stage" | "topic" | "difficulty">[] = [
  {
    title: "La fotosíntesis",
    question: "¿Qué necesitan las plantas para hacer la fotosíntesis?",
    options: ["Agua y sal", "Luz solar, agua y dióxido de carbono", "Solo tierra", "Luz de luna"],
    correctIndex: 1,
    explanation: "Las plantas usan la luz del sol, el agua y el CO2 del aire para fabricar su alimento.",
  },
  {
    title: "Qué es un ecosistema",
    question: "¿Qué es un ecosistema?",
    options: ["Un tipo de roca", "El conjunto de seres vivos y el lugar donde viven", "Una especie de animal", "Un instrumento de medición"],
    correctIndex: 1,
    explanation: "Un ecosistema es la comunidad de seres vivos junto con el medio físico en el que viven.",
  },
  {
    title: "Animales herbívoros",
    question: "¿Cuál de estos animales es herbívoro?",
    options: ["León", "Tiburón", "Vaca", "Águila"],
    correctIndex: 2,
    explanation: "La vaca se alimenta solo de plantas, por eso es herbívora.",
  },
  {
    title: "Materiales reciclables",
    question: "¿Cuál de estos materiales se puede reciclar?",
    options: ["Papel", "Vidrio", "Plástico", "Todos los anteriores"],
    correctIndex: 3,
    explanation: "El papel, el vidrio y el plástico se pueden reciclar si los separamos bien.",
  },
  {
    title: "Contenedor del papel",
    question: "¿De qué color es el contenedor para el papel y el cartón?",
    options: ["Verde", "Amarillo", "Azul", "Marrón"],
    correctIndex: 2,
    explanation: "El contenedor azul es para el papel y el cartón.",
  },
  {
    title: "Cadena alimentaria",
    question: "¿Qué es una cadena alimentaria?",
    options: ["El orden en que unos seres vivos se alimentan de otros", "Una cadena de metal", "Un tipo de planta", "El ciclo del agua"],
    correctIndex: 0,
    explanation: "En una cadena alimentaria, cada ser vivo se alimenta del anterior.",
  },
  {
    title: "Gas de la fotosíntesis",
    question: "¿Qué gas producen las plantas durante la fotosíntesis?",
    options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
    correctIndex: 1,
    explanation: "Las plantas liberan oxígeno como resultado de la fotosíntesis.",
  },
  {
    title: "Contaminación del agua",
    question: "¿Qué puede pasar si contaminamos los ríos?",
    options: ["Nada cambia", "El agua sabe mejor", "Los peces y otros seres vivos pueden morir", "Los peces crecen más rápido"],
    correctIndex: 2,
    explanation: "La contaminación del agua daña a los seres vivos que dependen de ella.",
  },
];

const ecosistemaActivities: MultipleChoiceActivity[] = ecosistemaQuestions.map((q, index) => ({
  id: `a4-mc-${index + 1}`,
  type: "multiple_choice",
  subjectId: "ciencias_naturales",
  stage: "primaria_superior",
  topic: "Ecosistemas",
  difficulty: 2,
  ...q,
}));

const cadenaAlimentariaActivity: DragDropActivity = {
  id: "a4-dd-1",
  type: "drag_drop",
  subjectId: "ciencias_naturales",
  stage: "primaria_superior",
  topic: "Ecosistemas",
  difficulty: 2,
  title: "La cadena alimentaria",
  instructions: "Arrastra cada ser vivo a su lugar en la cadena alimentaria.",
  zones: [
    { id: "z1", label: "Productor" },
    { id: "z2", label: "Consumidor primario" },
    { id: "z3", label: "Consumidor secundario" },
  ],
  items: [
    { id: "i1", label: "Hierba", targetZoneId: "z1" },
    { id: "i2", label: "Roble", targetZoneId: "z1" },
    { id: "i3", label: "Conejo", targetZoneId: "z2" },
    { id: "i4", label: "Saltamontes", targetZoneId: "z2" },
    { id: "i5", label: "Zorro", targetZoneId: "z3" },
    { id: "i6", label: "Búho", targetZoneId: "z3" },
  ],
};

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
      { id: "z3", label: "Adjetivos" },
    ],
    items: [
      { id: "i1", label: "correr", targetZoneId: "z2" },
      { id: "i2", label: "montaña", targetZoneId: "z1" },
      { id: "i3", label: "saltar", targetZoneId: "z2" },
      { id: "i4", label: "escuela", targetZoneId: "z1" },
      { id: "i5", label: "comer", targetZoneId: "z2" },
      { id: "i6", label: "perro", targetZoneId: "z1" },
      { id: "i7", label: "dormir", targetZoneId: "z2" },
      { id: "i8", label: "libro", targetZoneId: "z1" },
      { id: "i9", label: "alto", targetZoneId: "z3" },
      { id: "i10", label: "rápido", targetZoneId: "z3" },
      { id: "i11", label: "feliz", targetZoneId: "z3" },
      { id: "i12", label: "azul", targetZoneId: "z3" },
    ],
  },
  {
    id: "a3",
    type: "mission",
    subjectId: "ingles",
    stage: "primaria_inicial",
    topic: "Frases simples",
    difficulty: 1,
    title: "Construye la frase",
    narrative: "Ordena las piezas para formar 10 frases sencillas en inglés.",
    badge: "🇬🇧 Constructor de frases",
    steps: frasesFacts.map((_, index) => ({
      id: `st-a3-${index + 1}`,
      label: `Frase ${index + 1}`,
      activityId: `a3-${index + 1}`,
    })),
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
      { id: "st-a4-dd-1", label: "Ordena la cadena alimentaria", activityId: "a4-dd-1" },
      ...ecosistemaActivities.map((activity, index) => ({
        id: `st-a4-mc-${index + 1}`,
        label: activity.title,
        activityId: activity.id,
      })),
    ],
  },
  ...mathGradeMissions,
  ...lenguaGradeMissions,
  ...inglesGradeMissions,
  ...cienciasGradeMissions,
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

// These only exist as steps inside their parent missions, not as standalone
// library entries.
const hiddenActivities: Activity[] = [
  ...tabla7Activities,
  ...frasesActivities,
  ...ecosistemaActivities,
  cadenaAlimentariaActivity,
  ...mathGradeQuestions,
  ...lenguaGradeQuestions,
  ...inglesGradeQuestions,
  ...cienciasGradeQuestions,
];

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
