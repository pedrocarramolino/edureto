import type { MissionActivity, MultipleChoiceActivity, Stage } from "@/types";

interface GradeQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface GradeDefinition {
  id: string;
  title: string;
  stage: Stage;
  difficulty: 1 | 2 | 3;
  badge: string;
  questions: GradeQuestion[];
}

const grades: GradeDefinition[] = [
  {
    id: "g1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🔢 1º Primaria superado",
    questions: [
      { question: "¿Cuánto es 2 + 3?", options: ["4", "5", "6", "3"], correctIndex: 1, explanation: "2 + 3 = 5." },
      { question: "¿Cuánto es 7 - 2?", options: ["3", "4", "6", "5"], correctIndex: 3, explanation: "7 - 2 = 5." },
      { question: "¿Cuánto es 6 + 3?", options: ["9", "7", "8", "10"], correctIndex: 0, explanation: "6 + 3 = 9." },
      { question: "¿Cuánto es 9 - 4?", options: ["6", "4", "5", "3"], correctIndex: 2, explanation: "9 - 4 = 5." },
      { question: "¿Cuánto es 5 + 5?", options: ["8", "9", "11", "10"], correctIndex: 3, explanation: "5 + 5 = 10." },
      { question: "¿Cuánto es 8 - 3?", options: ["4", "6", "5", "7"], correctIndex: 2, explanation: "8 - 3 = 5." },
      { question: "¿Cuánto es 4 + 4?", options: ["6", "8", "7", "9"], correctIndex: 1, explanation: "4 + 4 = 8." },
      { question: "¿Cuánto es 10 - 6?", options: ["5", "3", "4", "6"], correctIndex: 2, explanation: "10 - 6 = 4." },
    ],
  },
  {
    id: "g2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🔢 2º Primaria superado",
    questions: [
      { question: "¿Cuánto es 27 + 15?", options: ["40", "42", "45", "41"], correctIndex: 1, explanation: "27 + 15 = 42." },
      { question: "¿Cuánto es 84 - 39?", options: ["44", "46", "45", "43"], correctIndex: 2, explanation: "84 - 39 = 45." },
      { question: "¿Cuánto es 46 + 38?", options: ["82", "84", "85", "83"], correctIndex: 1, explanation: "46 + 38 = 84." },
      { question: "¿Cuánto es 90 - 56?", options: ["36", "35", "34", "33"], correctIndex: 2, explanation: "90 - 56 = 34." },
      { question: "¿Cuánto es 63 + 29?", options: ["91", "93", "92", "90"], correctIndex: 2, explanation: "63 + 29 = 92." },
      { question: "¿Cuánto es 71 - 48?", options: ["24", "23", "22", "21"], correctIndex: 1, explanation: "71 - 48 = 23." },
      { question: "¿Cuánto es 35 + 47?", options: ["81", "83", "82", "80"], correctIndex: 2, explanation: "35 + 47 = 82." },
      { question: "¿Cuánto es 92 - 57?", options: ["34", "36", "35", "33"], correctIndex: 2, explanation: "92 - 57 = 35." },
    ],
  },
  {
    id: "g3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "🔢 3º Primaria superado",
    questions: [
      { question: "¿Cuánto es 3 × 4?", options: ["10", "12", "14", "11"], correctIndex: 1, explanation: "3 × 4 = 12." },
      { question: "¿Cuánto es 5 × 6?", options: ["25", "30", "35", "28"], correctIndex: 1, explanation: "5 × 6 = 30." },
      { question: "¿Cuánto es 4 × 4?", options: ["14", "16", "18", "12"], correctIndex: 1, explanation: "4 × 4 = 16." },
      { question: "¿Cuánto es 2 × 9?", options: ["16", "18", "20", "17"], correctIndex: 1, explanation: "2 × 9 = 18." },
      { question: "¿Cuánto es 6 × 5?", options: ["30", "28", "32", "25"], correctIndex: 0, explanation: "6 × 5 = 30." },
      { question: "¿Cuánto es 3 × 8?", options: ["22", "26", "24", "20"], correctIndex: 2, explanation: "3 × 8 = 24." },
      { question: "¿Cuánto es 4 × 6?", options: ["20", "24", "28", "22"], correctIndex: 1, explanation: "4 × 6 = 24." },
      { question: "¿Cuánto es 5 × 8?", options: ["35", "45", "40", "30"], correctIndex: 2, explanation: "5 × 8 = 40." },
    ],
  },
  {
    id: "g4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🔢 4º Primaria superado",
    questions: [
      { question: "¿Cuánto es 7 × 8?", options: ["54", "56", "58", "52"], correctIndex: 1, explanation: "7 × 8 = 56." },
      { question: "¿Cuánto es 9 × 6?", options: ["52", "56", "54", "50"], correctIndex: 2, explanation: "9 × 6 = 54." },
      { question: "¿Cuánto es 56 ÷ 7?", options: ["7", "8", "9", "6"], correctIndex: 1, explanation: "56 ÷ 7 = 8." },
      { question: "¿Cuánto es 63 ÷ 9?", options: ["6", "7", "8", "9"], correctIndex: 1, explanation: "63 ÷ 9 = 7." },
      { question: "¿Cuánto es 8 × 8?", options: ["62", "64", "66", "60"], correctIndex: 1, explanation: "8 × 8 = 64." },
      { question: "¿Cuánto es 72 ÷ 8?", options: ["8", "9", "10", "7"], correctIndex: 1, explanation: "72 ÷ 8 = 9." },
      { question: "¿Cuánto es 9 × 9?", options: ["80", "81", "82", "79"], correctIndex: 1, explanation: "9 × 9 = 81." },
      { question: "¿Cuánto es 48 ÷ 6?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "48 ÷ 6 = 8." },
    ],
  },
  {
    id: "g5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🔢 5º Primaria superado",
    questions: [
      { question: "¿Cuánto es 3,5 + 2,1?", options: ["5,4", "5,6", "5,7", "5,5"], correctIndex: 1, explanation: "3,5 + 2,1 = 5,6." },
      { question: "¿Cuánto es 7,8 - 4,3?", options: ["3,4", "3,6", "3,5", "3,3"], correctIndex: 2, explanation: "7,8 - 4,3 = 3,5." },
      { question: "¿Cuánto es 1/2 + 1/2?", options: ["1/2", "1", "2", "0"], correctIndex: 1, explanation: "Dos mitades forman un entero: 1." },
      { question: "¿Cuánto es 1/4 de 20?", options: ["4", "5", "6", "10"], correctIndex: 1, explanation: "20 ÷ 4 = 5." },
      { question: "¿Cuánto es 0,6 × 10?", options: ["0,6", "6", "60", "0,06"], correctIndex: 1, explanation: "Multiplicar por 10 desplaza la coma: 0,6 × 10 = 6." },
      { question: "¿Cuánto es 2,5 + 1,5?", options: ["3,5", "4", "4,5", "3"], correctIndex: 1, explanation: "2,5 + 1,5 = 4." },
      { question: "¿Cuánto es 1/3 de 9?", options: ["2", "3", "4", "9"], correctIndex: 1, explanation: "9 ÷ 3 = 3." },
      { question: "¿Cuánto es 9,9 - 3,4?", options: ["6,4", "6,5", "6,6", "7,5"], correctIndex: 1, explanation: "9,9 - 3,4 = 6,5." },
    ],
  },
  {
    id: "g6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🔢 6º Primaria superado",
    questions: [
      { question: "¿Cuánto es 4,5 × 2?", options: ["8", "9", "9,5", "10"], correctIndex: 1, explanation: "4,5 × 2 = 9." },
      { question: "¿Cuánto es 9,6 ÷ 4?", options: ["2,2", "2,4", "2,6", "3"], correctIndex: 1, explanation: "9,6 ÷ 4 = 2,4." },
      { question: "¿Cuánto es el 10% de 200?", options: ["10", "20", "30", "200"], correctIndex: 1, explanation: "El 10% de 200 es 20." },
      { question: "¿Cuánto es el 50% de 60?", options: ["20", "30", "40", "50"], correctIndex: 1, explanation: "El 50% es la mitad: 30." },
      { question: "¿Cuánto es el 20% de 150?", options: ["15", "25", "30", "35"], correctIndex: 2, explanation: "El 20% de 150 es 30." },
      { question: "¿Cuánto es 7,25 + 3,75?", options: ["10,5", "11", "11,5", "10"], correctIndex: 1, explanation: "7,25 + 3,75 = 11." },
      { question: "¿Cuánto es 6,4 - 2,9?", options: ["3,4", "3,5", "3,6", "4,5"], correctIndex: 1, explanation: "6,4 - 2,9 = 3,5." },
      { question: "¿Cuánto es el 75% de 40?", options: ["25", "30", "35", "20"], correctIndex: 1, explanation: "El 75% de 40 es 30." },
    ],
  },
  {
    id: "g1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "📐 1º ESO superado",
    questions: [
      { question: "¿Cuánto es -3 + 5?", options: ["1", "2", "3", "-2"], correctIndex: 1, explanation: "-3 + 5 = 2." },
      { question: "¿Cuánto es -7 - 2?", options: ["-9", "-5", "9", "5"], correctIndex: 0, explanation: "-7 - 2 = -9." },
      { question: "¿Cuánto es (-4) × 3?", options: ["12", "-12", "-7", "7"], correctIndex: 1, explanation: "Signo distinto: (-4) × 3 = -12." },
      { question: "¿Cuánto es 2³?", options: ["6", "8", "9", "4"], correctIndex: 1, explanation: "2³ = 2 × 2 × 2 = 8." },
      { question: "¿Cuánto es 3²?", options: ["6", "9", "12", "3"], correctIndex: 1, explanation: "3² = 3 × 3 = 9." },
      { question: "¿Cuánto es -10 + 15?", options: ["-5", "5", "25", "-25"], correctIndex: 1, explanation: "-10 + 15 = 5." },
      { question: "¿Cuánto es (-6) + (-4)?", options: ["-10", "10", "-2", "2"], correctIndex: 0, explanation: "Mismo signo, se suman: (-6) + (-4) = -10." },
      { question: "¿Cuánto es √16?", options: ["2", "4", "8", "16"], correctIndex: 1, explanation: "4 × 4 = 16, así que √16 = 4." },
    ],
  },
  {
    id: "g2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "📐 2º ESO superado",
    questions: [
      { question: "¿Cuánto es 2/3 + 1/3?", options: ["1/3", "2/3", "1", "4/3"], correctIndex: 2, explanation: "2/3 + 1/3 = 3/3 = 1." },
      { question: "¿Cuánto es 3/4 de 20?", options: ["10", "15", "20", "5"], correctIndex: 1, explanation: "20 ÷ 4 × 3 = 15." },
      { question: "Si 2 manzanas cuestan 4€, ¿cuánto cuestan 5 manzanas?", options: ["8€", "10€", "12€", "6€"], correctIndex: 1, explanation: "Cada manzana cuesta 2€, así que 5 cuestan 10€." },
      { question: "Si x + 5 = 12, ¿cuánto vale x?", options: ["6", "7", "8", "5"], correctIndex: 1, explanation: "x = 12 - 5 = 7." },
      { question: "Si x - 4 = 10, ¿cuánto vale x?", options: ["12", "14", "16", "10"], correctIndex: 1, explanation: "x = 10 + 4 = 14." },
      { question: "¿Cuánto es el 40% de 25?", options: ["8", "10", "12", "15"], correctIndex: 1, explanation: "El 40% de 25 es 10." },
      { question: "¿Cuánto es 1/2 × 1/2?", options: ["1/4", "1/3", "1/2", "1"], correctIndex: 0, explanation: "1/2 × 1/2 = 1/4." },
      { question: "Si 3x = 15, ¿cuánto vale x?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "x = 15 ÷ 3 = 5." },
    ],
  },
  {
    id: "g3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "📐 3º ESO superado",
    questions: [
      { question: "Si 2x + 3 = 11, ¿cuánto vale x?", options: ["3", "4", "5", "6"], correctIndex: 1, explanation: "2x = 8, así que x = 4." },
      { question: "¿Cuánto es √49?", options: ["6", "7", "8", "49"], correctIndex: 1, explanation: "7 × 7 = 49, así que √49 = 7." },
      { question: "¿Cuánto es 3² + 4²?", options: ["20", "24", "25", "30"], correctIndex: 2, explanation: "9 + 16 = 25." },
      { question: "Si x/2 = 9, ¿cuánto vale x?", options: ["16", "18", "20", "9"], correctIndex: 1, explanation: "x = 9 × 2 = 18." },
      { question: "Si 5x - 2 = 18, ¿cuánto vale x?", options: ["3", "4", "5", "6"], correctIndex: 1, explanation: "5x = 20, así que x = 4." },
      { question: "¿Cuánto es √81?", options: ["8", "9", "10", "81"], correctIndex: 1, explanation: "9 × 9 = 81, así que √81 = 9." },
      { question: "¿Cuánto es 2³ + 3²?", options: ["15", "16", "17", "18"], correctIndex: 2, explanation: "8 + 9 = 17." },
      { question: "Si x + 2x = 15, ¿cuánto vale x?", options: ["4", "5", "6", "3"], correctIndex: 1, explanation: "3x = 15, así que x = 5." },
    ],
  },
  {
    id: "g4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "📐 4º ESO superado",
    questions: [
      { question: "¿Cuánto es 2⁵?", options: ["16", "24", "32", "64"], correctIndex: 2, explanation: "2⁵ = 2×2×2×2×2 = 32." },
      { question: "¿Cuánto es la raíz cúbica de 27?", options: ["2", "3", "9", "27"], correctIndex: 1, explanation: "3 × 3 × 3 = 27." },
      { question: "Si x² = 36, ¿cuánto vale x (positivo)?", options: ["5", "6", "7", "18"], correctIndex: 1, explanation: "6 × 6 = 36." },
      { question: "¿Cuánto es 5³?", options: ["15", "100", "125", "135"], correctIndex: 2, explanation: "5³ = 5×5×5 = 125." },
      { question: "Si x² - 9 = 0, ¿cuánto vale x (positivo)?", options: ["2", "3", "4", "9"], correctIndex: 1, explanation: "x² = 9, así que x = 3." },
      { question: "¿Cuánto es la raíz cúbica de 64?", options: ["4", "8", "16", "64"], correctIndex: 0, explanation: "4 × 4 × 4 = 64." },
      { question: "Si 2x² = 8, ¿cuánto vale x (positivo)?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "x² = 4, así que x = 2." },
      { question: "¿Cuánto es (3+2)²?", options: ["10", "13", "25", "30"], correctIndex: 2, explanation: "(3+2)² = 5² = 25." },
    ],
  },
];

export const mathGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "matematicas" as const,
    stage: grade.stage,
    topic: grade.title,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const mathGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `math-${grade.id}`,
  type: "mission",
  subjectId: "matematicas",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Matemáticas · ${grade.title}`,
  narrative: `Repasa matemáticas de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-math-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
