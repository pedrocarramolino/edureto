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

// Física y Química solo se cursa en 2.º, 3.º y 4.º de la ESO, así que esta
// asignatura tiene tres juegos y no diez como las que se dan desde Primaria.
const grades: GradeDefinition[] = [
  {
    id: "q2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "⚗️ 2º ESO superado",
    questions: [
      { question: "¿Qué es la materia?", options: ["Todo lo que se puede ver", "Todo lo que tiene masa y ocupa un volumen", "Todo lo que pesa mucho", "Todo lo que es sólido"], correctIndex: 1, explanation: "Materia es todo lo que tiene masa y ocupa un volumen." },
      { question: "¿En qué estado están las partículas más juntas y ordenadas?", options: ["sólido", "líquido", "gaseoso", "en los tres igual"], correctIndex: 0, explanation: "En el sólido las partículas están muy juntas y apenas vibran en su sitio." },
      { question: "¿Cuál es la unidad de masa en el Sistema Internacional?", options: ["el gramo", "el kilogramo", "el litro", "el newton"], correctIndex: 1, explanation: "La unidad de masa del SI es el kilogramo (kg)." },
      { question: "¿Cuál es la unidad de temperatura en el Sistema Internacional?", options: ["el grado Celsius", "el kelvin", "el grado Fahrenheit", "la caloría"], correctIndex: 1, explanation: "El SI mide la temperatura en kelvin (K)." },
      { question: "¿Cómo se llama el paso de líquido a gas?", options: ["condensación", "vaporización", "fusión", "sublimación"], correctIndex: 1, explanation: "De líquido a gas es vaporización; al revés, condensación." },
      { question: "¿Cómo se llama el paso de sólido a líquido?", options: ["fusión", "solidificación", "evaporación", "sublimación"], correctIndex: 0, explanation: "El hielo que se derrite es un ejemplo de fusión." },
      { question: "¿Qué método separa la arena del agua?", options: ["la destilación", "la filtración", "la evaporación", "el imán"], correctIndex: 1, explanation: "La arena no se disuelve, así que se separa con un filtro." },
      { question: "¿Cómo se obtiene la sal del agua del mar?", options: ["filtrando el agua", "evaporando el agua", "congelando el agua", "con un imán"], correctIndex: 1, explanation: "Al evaporarse el agua, la sal disuelta se queda." },
      { question: "¿Cuál de estos es un cambio químico?", options: ["fundir hielo", "quemar papel", "hervir agua", "romper un vaso"], correctIndex: 1, explanation: "Al quemar aparecen sustancias nuevas: es un cambio químico." },
      { question: "¿Cómo se calcula la densidad?", options: ["masa por volumen", "masa entre volumen", "volumen entre masa", "masa más volumen"], correctIndex: 1, explanation: "Densidad = masa / volumen." },
      { question: "¿Qué mide un termómetro?", options: ["el calor", "la temperatura", "la masa", "la presión"], correctIndex: 1, explanation: "El termómetro mide la temperatura, no el calor." },
      { question: "¿Cuál es el primer paso del método científico?", options: ["sacar conclusiones", "observar y hacerse una pregunta", "hacer el experimento", "publicar los resultados"], correctIndex: 1, explanation: "Todo empieza observando algo y preguntándose por qué ocurre." },
    ],
  },
  {
    id: "q3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "⚗️ 3º ESO superado",
    questions: [
      { question: "¿Qué partícula del átomo tiene carga negativa?", options: ["el protón", "el electrón", "el neutrón", "el núcleo"], correctIndex: 1, explanation: "El electrón tiene carga negativa; el protón, positiva; el neutrón, ninguna." },
      { question: "¿Dónde se concentra casi toda la masa de un átomo?", options: ["en la corteza", "en el núcleo", "repartida por igual", "en los electrones"], correctIndex: 1, explanation: "Protones y neutrones están en el núcleo y son mucho más pesados que los electrones." },
      { question: "¿Qué indica el número atómico de un elemento?", options: ["el número de neutrones", "el número de protones", "la masa del átomo", "el número de enlaces"], correctIndex: 1, explanation: "El número atómico (Z) es el número de protones del núcleo." },
      { question: "¿Cuál es el símbolo químico del sodio?", options: ["So", "Na", "Sd", "S"], correctIndex: 1, explanation: "El sodio es Na, del latín natrium." },
      { question: "El agua (H₂O) es…", options: ["un elemento", "un compuesto", "una mezcla", "un átomo"], correctIndex: 1, explanation: "Está formada por dos elementos unidos químicamente: es un compuesto." },
      { question: "¿Qué dice la ley de conservación de la masa?", options: ["la masa aumenta en las reacciones", "la masa total no cambia en una reacción", "la masa disminuye al quemar", "la masa depende de la temperatura"], correctIndex: 1, explanation: "Ley de Lavoisier: la masa de los reactivos es igual a la de los productos." },
      { question: "¿Qué representa la fórmula CO₂?", options: ["dos átomos de carbono y uno de oxígeno", "un átomo de carbono y dos de oxígeno", "carbono más oxígeno mezclados", "dos moléculas de carbono"], correctIndex: 1, explanation: "El subíndice acompaña al átomo que le precede: C y dos O." },
      { question: "¿Cómo ordena los elementos la tabla periódica?", options: ["por orden alfabético", "por número atómico creciente", "por su peso en gramos", "por su color"], correctIndex: 1, explanation: "Se ordenan de menor a mayor número atómico." },
      { question: "¿Cuál es la unidad de intensidad de corriente?", options: ["el voltio", "el amperio", "el ohmio", "el vatio"], correctIndex: 1, explanation: "La intensidad se mide en amperios (A)." },
      { question: "¿Qué expresa la ley de Ohm?", options: ["V = I · R", "V = I / R", "I = V · R", "R = V · I"], correctIndex: 0, explanation: "El voltaje es igual a la intensidad por la resistencia." },
      { question: "¿Cómo se calcula la velocidad media?", options: ["espacio por tiempo", "espacio entre tiempo", "tiempo entre espacio", "espacio más tiempo"], correctIndex: 1, explanation: "Velocidad = espacio recorrido / tiempo empleado." },
      { question: "¿Qué es una disolución?", options: ["una mezcla heterogénea", "una mezcla homogénea de soluto y disolvente", "un compuesto puro", "un cambio químico"], correctIndex: 1, explanation: "En una disolución no se distinguen sus componentes: es homogénea." },
    ],
  },
  {
    id: "q4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "⚗️ 4º ESO superado",
    questions: [
      { question: "¿Qué dice la segunda ley de Newton?", options: ["F = m · a", "F = m / a", "a = F · m", "F = m + a"], correctIndex: 0, explanation: "La fuerza es igual a la masa por la aceleración." },
      { question: "¿Cómo se llama la primera ley de Newton?", options: ["principio de acción y reacción", "principio de inercia", "ley de gravitación", "ley de Ohm"], correctIndex: 1, explanation: "Sin fuerza neta, un cuerpo sigue parado o con velocidad constante." },
      { question: "¿Qué afirma la tercera ley de Newton?", options: ["toda acción tiene una reacción igual y de sentido contrario", "la fuerza es masa por aceleración", "los cuerpos caen a la misma velocidad", "la energía se conserva"], correctIndex: 0, explanation: "Si A empuja a B, B empuja a A con la misma fuerza en sentido contrario." },
      { question: "¿Cuál es la unidad de fuerza en el Sistema Internacional?", options: ["el julio", "el newton", "el kilogramo", "el pascal"], correctIndex: 1, explanation: "La fuerza se mide en newtons (N)." },
      { question: "¿En qué unidad se miden el trabajo y la energía?", options: ["en newtons", "en julios", "en vatios", "en pascales"], correctIndex: 1, explanation: "Trabajo y energía se miden en julios (J)." },
      { question: "¿De qué depende la energía cinética de un cuerpo?", options: ["solo de su masa", "de su masa y su velocidad", "solo de su altura", "de su temperatura"], correctIndex: 1, explanation: "Ec = ½ · m · v²: depende de la masa y de la velocidad." },
      { question: "¿Cuántas partículas hay en un mol?", options: ["1.000", "6,022 · 10²³", "100.000", "6,022 · 10¹²"], correctIndex: 1, explanation: "Es el número de Avogadro: 6,022 · 10²³ partículas." },
      { question: "Una disolución con pH 3 es…", options: ["ácida", "neutra", "básica", "salada"], correctIndex: 0, explanation: "Por debajo de 7 es ácida; 7 es neutra; por encima, básica." },
      { question: "¿Qué enlace se forma entre dos no metales?", options: ["iónico", "covalente", "metálico", "de hidrógeno"], correctIndex: 1, explanation: "Dos no metales comparten electrones: enlace covalente." },
      { question: "¿Cuál es la fórmula del metano?", options: ["CH₄", "C₂H₆", "CO₂", "CH₃"], correctIndex: 0, explanation: "El metano es CH₄: un carbono y cuatro hidrógenos." },
      { question: "¿Cuál es la unidad de presión en el Sistema Internacional?", options: ["el newton", "el pascal", "la atmósfera", "el bar"], correctIndex: 1, explanation: "La presión se mide en pascales (Pa), que son N/m²." },
      { question: "En un movimiento rectilíneo uniformemente acelerado, ¿qué es constante?", options: ["la velocidad", "la aceleración", "el espacio", "el tiempo"], correctIndex: 1, explanation: "En el MRUA la aceleración es constante y la velocidad cambia." },
    ],
  },
];

export const fisicaQuimicaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "fisica_quimica" as const,
    stage: grade.stage,
    topic: grade.title,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const fisicaQuimicaGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `fisicaquimica-${grade.id}`,
  type: "mission",
  subjectId: "fisica_quimica",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Física y Química · ${grade.title}`,
  narrative: `Repasa Física y Química de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-fisicaquimica-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
