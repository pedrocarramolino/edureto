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
    id: "i1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🇬🇧 1º Primaria superado",
    questions: [
      { question: "¿Cómo se dice \"perro\" en inglés?", options: ["cat", "dog", "bird", "fish"], correctIndex: 1, explanation: "Perro se dice \"dog\"." },
      { question: "¿Cómo se dice \"rojo\" en inglés?", options: ["blue", "green", "red", "yellow"], correctIndex: 2, explanation: "Rojo se dice \"red\"." },
      { question: "¿Qué significa \"cat\"?", options: ["perro", "gato", "pájaro", "vaca"], correctIndex: 1, explanation: "\"Cat\" significa gato." },
      { question: "¿Cómo se dice \"uno\" en inglés?", options: ["two", "three", "one", "four"], correctIndex: 2, explanation: "Uno se dice \"one\"." },
      { question: "¿Qué significa \"blue\"?", options: ["azul", "rojo", "verde", "negro"], correctIndex: 0, explanation: "\"Blue\" significa azul." },
      { question: "¿Cómo se dice \"casa\" en inglés?", options: ["horse", "house", "mouse", "hand"], correctIndex: 1, explanation: "Casa se dice \"house\"." },
      { question: "¿Qué significa \"book\"?", options: ["mesa", "libro", "silla", "puerta"], correctIndex: 1, explanation: "\"Book\" significa libro." },
      { question: "¿Cómo se saluda por la mañana en inglés?", options: ["Good night", "Good morning", "Goodbye", "Good luck"], correctIndex: 1, explanation: "Por la mañana se dice \"Good morning\"." },
    ],
  },
  {
    id: "i2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🇬🇧 2º Primaria superado",
    questions: [
      { question: "¿Cómo se dice \"madre\" en inglés?", options: ["father", "mother", "sister", "brother"], correctIndex: 1, explanation: "Madre se dice \"mother\"." },
      { question: "¿Qué significa \"brother\"?", options: ["hermana", "hermano", "primo", "abuelo"], correctIndex: 1, explanation: "\"Brother\" significa hermano." },
      { question: "¿Cómo se dice \"diez\" en inglés?", options: ["nine", "eleven", "ten", "twelve"], correctIndex: 2, explanation: "Diez se dice \"ten\"." },
      { question: "Completa: I ___ a student.", options: ["is", "am", "are", "be"], correctIndex: 1, explanation: "Con \"I\" se usa \"am\": I am a student." },
      { question: "¿Qué significa \"green\"?", options: ["gris", "verde", "marrón", "rosa"], correctIndex: 1, explanation: "\"Green\" significa verde." },
      { question: "¿Cómo se dice \"gracias\" en inglés?", options: ["please", "sorry", "thank you", "hello"], correctIndex: 2, explanation: "Gracias se dice \"thank you\"." },
      { question: "¿Qué significa \"school\"?", options: ["colegio", "parque", "tienda", "cocina"], correctIndex: 0, explanation: "\"School\" significa colegio o escuela." },
      { question: "Completa: She ___ my sister.", options: ["am", "are", "is", "be"], correctIndex: 2, explanation: "Con \"she\" se usa \"is\": She is my sister." },
    ],
  },
  {
    id: "i3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "🇬🇧 3º Primaria superado",
    questions: [
      { question: "¿Cuál es el plural de \"book\"?", options: ["bookes", "books", "bookies", "book"], correctIndex: 1, explanation: "El plural normal se forma añadiendo -s: books." },
      { question: "Completa: I ___ got a bike.", options: ["has", "have", "is", "am"], correctIndex: 1, explanation: "Con \"I\" se usa \"have got\"." },
      { question: "¿Qué significa \"hand\"?", options: ["pie", "mano", "cabeza", "brazo"], correctIndex: 1, explanation: "\"Hand\" significa mano." },
      { question: "¿Cuál es el plural de \"box\"?", options: ["boxs", "boxes", "boxies", "box"], correctIndex: 1, explanation: "Las palabras acabadas en -x añaden -es: boxes." },
      { question: "Completa: ___ is my pen (señalando algo cercano).", options: ["That", "This", "Those", "These"], correctIndex: 1, explanation: "Para algo cercano y en singular se usa \"this\"." },
      { question: "¿Qué significa \"head\"?", options: ["cabeza", "mano", "pierna", "boca"], correctIndex: 0, explanation: "\"Head\" significa cabeza." },
      { question: "¿Cómo se dice \"jugar\" en inglés?", options: ["play", "run", "read", "eat"], correctIndex: 0, explanation: "Jugar se dice \"play\"." },
      { question: "Completa: He ___ got a dog.", options: ["have", "has", "is", "are"], correctIndex: 1, explanation: "Con he/she/it se usa \"has got\"." },
    ],
  },
  {
    id: "i4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🇬🇧 4º Primaria superado",
    questions: [
      { question: "Completa: She ___ football every day.", options: ["play", "plays", "playing", "played"], correctIndex: 1, explanation: "En present simple, con she se añade -s: plays." },
      { question: "¿Qué día viene después de \"Monday\"?", options: ["Sunday", "Tuesday", "Friday", "Saturday"], correctIndex: 1, explanation: "Después del lunes (Monday) viene el martes (Tuesday)." },
      { question: "Completa: ___ do you live? (¿dónde?)", options: ["What", "When", "Where", "Who"], correctIndex: 2, explanation: "\"Where\" pregunta por el lugar." },
      { question: "¿Qué significa \"always\"?", options: ["nunca", "siempre", "a veces", "casi nunca"], correctIndex: 1, explanation: "\"Always\" significa siempre." },
      { question: "Completa: They ___ TV at night.", options: ["watches", "watch", "watching", "is watching"], correctIndex: 1, explanation: "Con \"they\" el verbo no lleva -s: watch." },
      { question: "¿Cómo se dice \"desayuno\" en inglés?", options: ["lunch", "dinner", "breakfast", "snack"], correctIndex: 2, explanation: "Desayuno se dice \"breakfast\"." },
      { question: "Completa: ___ you like pizza?", options: ["Does", "Do", "Is", "Are"], correctIndex: 1, explanation: "Con \"you\" se pregunta con \"Do\"." },
      { question: "¿Qué significa \"never\"?", options: ["siempre", "nunca", "a menudo", "hoy"], correctIndex: 1, explanation: "\"Never\" significa nunca." },
    ],
  },
  {
    id: "i5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🇬🇧 5º Primaria superado",
    questions: [
      { question: "Completa: I ___ reading a book now.", options: ["is", "am", "are", "be"], correctIndex: 1, explanation: "Present continuous con \"I\": I am reading." },
      { question: "¿Cuál es el comparativo de \"big\"?", options: ["more big", "bigger", "biger", "biggest"], correctIndex: 1, explanation: "Se dobla la consonante y se añade -er: bigger." },
      { question: "Completa: Yesterday I ___ football.", options: ["play", "plays", "played", "playing"], correctIndex: 2, explanation: "Pasado regular: played." },
      { question: "¿Qué significa \"listening\"?", options: ["hablando", "escuchando", "leyendo", "escribiendo"], correctIndex: 1, explanation: "\"Listening\" significa escuchando." },
      { question: "¿Cuál es el pasado de \"go\"?", options: ["goed", "gone", "went", "going"], correctIndex: 2, explanation: "\"Go\" es irregular: su pasado es \"went\"." },
      { question: "Completa: She is ___ than me. (tall)", options: ["tall", "taller", "tallest", "more tall"], correctIndex: 1, explanation: "Comparativo de superioridad: taller than." },
      { question: "¿Qué significa \"cheap\"?", options: ["caro", "barato", "grande", "nuevo"], correctIndex: 1, explanation: "\"Cheap\" significa barato." },
      { question: "Completa: They ___ watching TV.", options: ["is", "am", "are", "be"], correctIndex: 2, explanation: "Con \"they\" se usa \"are\"." },
    ],
  },
  {
    id: "i6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🇬🇧 6º Primaria superado",
    questions: [
      { question: "¿Cuál es el pasado de \"eat\"?", options: ["eated", "ate", "eaten", "eating"], correctIndex: 1, explanation: "\"Eat\" es irregular: su pasado simple es \"ate\"." },
      { question: "¿Cuál es el superlativo de \"good\"?", options: ["the goodest", "the better", "the best", "the most good"], correctIndex: 2, explanation: "Good - better - the best (irregular)." },
      { question: "Completa: I'm going ___ visit my grandma.", options: ["for", "to", "at", "of"], correctIndex: 1, explanation: "El futuro con \"going to\" siempre lleva \"to\"." },
      { question: "¿Cuál es el pasado de \"buy\"?", options: ["buyed", "bought", "brought", "buying"], correctIndex: 1, explanation: "\"Buy\" es irregular: su pasado es \"bought\"." },
      { question: "¿Qué significa \"borrow\"?", options: ["prestar", "pedir prestado", "comprar", "vender"], correctIndex: 1, explanation: "\"Borrow\" es pedir prestado; prestar es \"lend\"." },
      { question: "Completa: He ___ to school yesterday.", options: ["go", "goes", "went", "going"], correctIndex: 2, explanation: "Con \"yesterday\" se usa pasado: went." },
      { question: "¿Cuál es el superlativo de \"big\"?", options: ["the bigger", "the biggest", "the most big", "the bigest"], correctIndex: 1, explanation: "Big - bigger - the biggest." },
      { question: "¿Qué significa \"usually\"?", options: ["nunca", "normalmente", "ayer", "ahora"], correctIndex: 1, explanation: "\"Usually\" significa normalmente o habitualmente." },
    ],
  },
  {
    id: "i1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🗣️ 1º ESO superado",
    questions: [
      { question: "Completa: There ___ three books on the table.", options: ["is", "are", "have", "has"], correctIndex: 1, explanation: "Con plural se usa \"there are\"." },
      { question: "Completa: I have ___ to London twice.", options: ["be", "been", "went", "being"], correctIndex: 1, explanation: "Present perfect: have + participio (been)." },
      { question: "¿Cuál es el participio de \"see\"?", options: ["saw", "seen", "seed", "seeing"], correctIndex: 1, explanation: "See - saw - seen." },
      { question: "Completa: She ___ finished her homework.", options: ["have", "has", "is", "are"], correctIndex: 1, explanation: "Con \"she\" el present perfect usa \"has\"." },
      { question: "¿Qué significa \"already\"?", options: ["todavía", "ya", "nunca", "casi"], correctIndex: 1, explanation: "\"Already\" significa ya (algo que ha ocurrido antes de lo esperado)." },
      { question: "Completa: How ___ water do you drink?", options: ["many", "much", "lot", "some"], correctIndex: 1, explanation: "\"Water\" es incontable, así que se usa \"much\"." },
      { question: "¿Qué significa \"enough\"?", options: ["demasiado", "suficiente", "poco", "casi"], correctIndex: 1, explanation: "\"Enough\" significa suficiente." },
      { question: "Completa: There ___ a cat in the garden.", options: ["are", "is", "have", "be"], correctIndex: 1, explanation: "Con singular se usa \"there is\"." },
    ],
  },
  {
    id: "i2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🗣️ 2º ESO superado",
    questions: [
      { question: "Completa: While I ___ TV, the phone rang.", options: ["watch", "watched", "was watching", "am watching"], correctIndex: 2, explanation: "Past continuous para la acción en desarrollo: was watching." },
      { question: "Completa: If it rains, I ___ stay at home.", options: ["would", "will", "was", "am"], correctIndex: 1, explanation: "Primer condicional: if + presente, will + infinitivo." },
      { question: "¿Qué expresa el verbo \"should\"?", options: ["obligación fuerte", "un consejo", "una prohibición", "una posibilidad remota"], correctIndex: 1, explanation: "\"Should\" se usa para dar consejos: deberías." },
      { question: "Completa: You ___ wear a helmet. (es obligatorio)", options: ["can", "might", "must", "could"], correctIndex: 2, explanation: "\"Must\" expresa obligación." },
      { question: "¿Cuál es el comparativo de \"good\"?", options: ["gooder", "better", "best", "more good"], correctIndex: 1, explanation: "Good - better - the best." },
      { question: "¿Qué significa \"although\"?", options: ["aunque", "porque", "además", "entonces"], correctIndex: 0, explanation: "\"Although\" significa aunque." },
      { question: "Completa: They were ___ when I arrived. (sleep)", options: ["sleep", "slept", "sleeping", "sleeps"], correctIndex: 2, explanation: "Past continuous: were + verbo en -ing." },
      { question: "¿Qué tipo de condicional es \"If I study, I will pass\"?", options: ["cero", "primero", "segundo", "tercero"], correctIndex: 1, explanation: "Presente + will = primer condicional (algo posible)." },
    ],
  },
  {
    id: "i3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🗣️ 3º ESO superado",
    questions: [
      { question: "Completa: I have lived here ___ 2010.", options: ["for", "since", "from", "ago"], correctIndex: 1, explanation: "\"Since\" se usa con un momento concreto del pasado." },
      { question: "Completa: If I ___ rich, I would travel the world.", options: ["am", "was", "were", "will be"], correctIndex: 2, explanation: "Segundo condicional: if + past simple (were), would + infinitivo." },
      { question: "¿Cuál es la voz pasiva de \"They built the house\"?", options: ["The house builds", "The house was built", "The house is building", "The house has build"], correctIndex: 1, explanation: "Pasiva en pasado: was/were + participio." },
      { question: "En \"for three years\", ¿qué significa \"for\"?", options: ["desde", "durante", "hace", "para"], correctIndex: 1, explanation: "\"For\" indica la duración: durante tres años." },
      { question: "Completa: She has ___ eaten. (ya, en afirmativa)", options: ["yet", "already", "still", "ever"], correctIndex: 1, explanation: "En frases afirmativas se usa \"already\"." },
      { question: "¿Qué tiempo verbal es \"I was working\"?", options: ["past simple", "past continuous", "present perfect", "future"], correctIndex: 1, explanation: "Was + verbo en -ing es past continuous." },
      { question: "Completa: The book ___ written by Cervantes.", options: ["is", "was", "has", "were"], correctIndex: 1, explanation: "Pasiva en pasado y sujeto singular: was written." },
      { question: "¿Qué significa \"unless\"?", options: ["a menos que", "aunque", "mientras", "porque"], correctIndex: 0, explanation: "\"Unless\" significa a menos que (si no)." },
    ],
  },
  {
    id: "i4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🗣️ 4º ESO superado",
    questions: [
      { question: "Estilo indirecto de: He said \"I am tired\".", options: ["He said he is tired", "He said he was tired", "He says he was tired", "He said I am tired"], correctIndex: 1, explanation: "En reported speech el presente pasa a pasado: was tired." },
      { question: "Completa: If I had studied, I ___ have passed.", options: ["will", "would", "was", "had"], correctIndex: 1, explanation: "Tercer condicional: would have + participio." },
      { question: "¿Qué significa el phrasal verb \"give up\"?", options: ["rendirse", "devolver", "levantarse", "regalar"], correctIndex: 0, explanation: "\"Give up\" significa rendirse o abandonar algo." },
      { question: "¿Qué expresa \"used to\" en \"I used to play tennis\"?", options: ["una acción futura", "un hábito del pasado", "una obligación", "una acción en curso"], correctIndex: 1, explanation: "\"Used to\" expresa un hábito pasado que ya no se hace." },
      { question: "Completa: She asked me where I ___.", options: ["live", "lived", "will live", "living"], correctIndex: 1, explanation: "En estilo indirecto el presente pasa a pasado: lived." },
      { question: "¿Qué significa \"look forward to\"?", options: ["mirar atrás", "esperar con ilusión", "buscar algo", "cuidar de alguien"], correctIndex: 1, explanation: "\"Look forward to\" es esperar algo con ganas." },
      { question: "¿Qué tipo de condicional es \"If I had known, I would have come\"?", options: ["primero", "segundo", "tercero", "cero"], correctIndex: 2, explanation: "Habla de un pasado imposible de cambiar: tercer condicional." },
      { question: "¿Qué significa el phrasal verb \"put off\"?", options: ["posponer", "apagar", "ponerse ropa", "quitar"], correctIndex: 0, explanation: "\"Put off\" significa posponer o aplazar." },
    ],
  },
];

export const inglesGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "ingles" as const,
    stage: grade.stage,
    topic: grade.title,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const inglesGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `ingles-${grade.id}`,
  type: "mission",
  subjectId: "ingles",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Inglés · ${grade.title}`,
  narrative: `Repasa inglés de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-ingles-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
