import type { MissionActivity, MultipleChoiceActivity, Stage } from "@/types";

interface GradeQuestion {
  /** Bloque de contenido dentro del curso. */
  tema: string;
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
      { tema: "La materia", question: "¿Qué es la materia?", options: ["Todo lo que se puede ver", "Todo lo que tiene masa y ocupa un volumen", "Todo lo que pesa mucho", "Todo lo que es sólido"], correctIndex: 1, explanation: "Materia es todo lo que tiene masa y ocupa un volumen." },
      { tema: "La materia", question: "¿En qué estado están las partículas más juntas y ordenadas?", options: ["sólido", "líquido", "gaseoso", "en los tres igual"], correctIndex: 0, explanation: "En el sólido las partículas están muy juntas y apenas vibran en su sitio." },
      { tema: "Medida y método", question: "¿Cuál es la unidad de masa en el Sistema Internacional?", options: ["el gramo", "el kilogramo", "el litro", "el newton"], correctIndex: 1, explanation: "La unidad de masa del SI es el kilogramo (kg)." },
      { tema: "Medida y método", question: "¿Cuál es la unidad de temperatura en el Sistema Internacional?", options: ["el grado Celsius", "el kelvin", "el grado Fahrenheit", "la caloría"], correctIndex: 1, explanation: "El SI mide la temperatura en kelvin (K)." },
      { tema: "La materia", question: "¿Cómo se llama el paso de líquido a gas?", options: ["condensación", "vaporización", "fusión", "sublimación"], correctIndex: 1, explanation: "De líquido a gas es vaporización; al revés, condensación." },
      { tema: "La materia", question: "¿Cómo se llama el paso de sólido a líquido?", options: ["fusión", "solidificación", "evaporación", "sublimación"], correctIndex: 0, explanation: "El hielo que se derrite es un ejemplo de fusión." },
      { tema: "La materia", question: "¿Qué método separa la arena del agua?", options: ["la destilación", "la filtración", "la evaporación", "el imán"], correctIndex: 1, explanation: "La arena no se disuelve, así que se separa con un filtro." },
      { tema: "La materia", question: "¿Cómo se obtiene la sal del agua del mar?", options: ["filtrando el agua", "evaporando el agua", "congelando el agua", "con un imán"], correctIndex: 1, explanation: "Al evaporarse el agua, la sal disuelta se queda." },
      { tema: "La materia", question: "¿Cuál de estos es un cambio químico?", options: ["fundir hielo", "quemar papel", "hervir agua", "romper un vaso"], correctIndex: 1, explanation: "Al quemar aparecen sustancias nuevas: es un cambio químico." },
      { tema: "La materia", question: "¿Cómo se calcula la densidad?", options: ["masa por volumen", "masa entre volumen", "volumen entre masa", "masa más volumen"], correctIndex: 1, explanation: "Densidad = masa / volumen." },
      { tema: "Medida y método", question: "¿Qué mide un termómetro?", options: ["el calor", "la temperatura", "la masa", "la presión"], correctIndex: 1, explanation: "El termómetro mide la temperatura, no el calor." },
      { tema: "Medida y método", question: "¿Cuál es el primer paso del método científico?", options: ["sacar conclusiones", "observar y hacerse una pregunta", "hacer el experimento", "publicar los resultados"], correctIndex: 1, explanation: "Todo empieza observando algo y preguntándose por qué ocurre." },
      { tema: "La materia", question: "¿Cómo se llama el paso de gas a líquido?", options: ["sublimación", "condensación", "fusión", "solidificación"], correctIndex: 1, explanation: "Cuando el vapor se enfría y forma gotas, se condensa." },
      { tema: "La materia", question: "¿Cómo se llama el paso directo de sólido a gas?", options: ["fusión", "evaporación", "sublimación", "condensación"], correctIndex: 2, explanation: "El hielo seco sublima: pasa de sólido a gas sin fundirse." },
      { tema: "La materia", question: "¿Cuál de estas es una sustancia pura?", options: ["el agua del mar", "el aire", "la leche", "el agua destilada"], correctIndex: 3, explanation: "El agua destilada solo tiene agua; las demás son mezclas." },
      { tema: "La materia", question: "¿Qué mezcla es heterogénea?", options: ["agua con aceite", "agua con sal disuelta", "el aire", "el vinagre"], correctIndex: 0, explanation: "En una mezcla heterogénea se distinguen sus componentes, como el aceite flotando sobre el agua." },
      { tema: "La materia", question: "¿A qué temperatura hierve el agua al nivel del mar?", options: ["0 °C", "100 °C", "50 °C", "212 °C"], correctIndex: 1, explanation: "A nivel del mar el agua hierve a 100 °C; en lo alto de una montaña, a menos." },
      { tema: "Medida y método", question: "¿Cuántos metros son 3,5 km?", options: ["350", "35", "3.500", "35.000"], correctIndex: 2, explanation: "1 km son 1.000 m: 3,5 × 1.000 = 3.500 m." },
      { tema: "Medida y método", question: "¿Qué instrumento mide el volumen de un líquido en el laboratorio?", options: ["la balanza", "el termómetro", "el cronómetro", "la probeta"], correctIndex: 3, explanation: "La probeta es un tubo graduado para medir volúmenes." },
      { tema: "Medida y método", question: "¿Qué es una hipótesis en el método científico?", options: ["una posible explicación que se comprueba con experimentos", "una ley ya demostrada", "el resultado final", "un instrumento"], correctIndex: 0, explanation: "La hipótesis se pone a prueba con la experimentación." },
    ],
  },
  {
    id: "q3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "⚗️ 3º ESO superado",
    questions: [
      { tema: "Química", question: "¿Qué partícula del átomo tiene carga negativa?", options: ["el protón", "el electrón", "el neutrón", "el núcleo"], correctIndex: 1, explanation: "El electrón tiene carga negativa; el protón, positiva; el neutrón, ninguna." },
      { tema: "Química", question: "¿Dónde se concentra casi toda la masa de un átomo?", options: ["en la corteza", "en el núcleo", "repartida por igual", "en los electrones"], correctIndex: 1, explanation: "Protones y neutrones están en el núcleo y son mucho más pesados que los electrones." },
      { tema: "Química", question: "¿Qué indica el número atómico de un elemento?", options: ["el número de neutrones", "el número de protones", "la masa del átomo", "el número de enlaces"], correctIndex: 1, explanation: "El número atómico (Z) es el número de protones del núcleo." },
      { tema: "Química", question: "¿Cuál es el símbolo químico del sodio?", options: ["So", "Na", "Sd", "S"], correctIndex: 1, explanation: "El sodio es Na, del latín natrium." },
      { tema: "La materia", question: "El agua (H₂O) es…", options: ["un elemento", "un compuesto", "una mezcla", "un átomo"], correctIndex: 1, explanation: "Está formada por dos elementos unidos químicamente: es un compuesto." },
      { tema: "Química", question: "¿Qué dice la ley de conservación de la masa?", options: ["la masa aumenta en las reacciones", "la masa total no cambia en una reacción", "la masa disminuye al quemar", "la masa depende de la temperatura"], correctIndex: 1, explanation: "Ley de Lavoisier: la masa de los reactivos es igual a la de los productos." },
      { tema: "Química", question: "¿Qué representa la fórmula CO₂?", options: ["dos átomos de carbono y uno de oxígeno", "un átomo de carbono y dos de oxígeno", "carbono más oxígeno mezclados", "dos moléculas de carbono"], correctIndex: 1, explanation: "El subíndice acompaña al átomo que le precede: C y dos O." },
      { tema: "Química", question: "¿Cómo ordena los elementos la tabla periódica?", options: ["por orden alfabético", "por número atómico creciente", "por su peso en gramos", "por su color"], correctIndex: 1, explanation: "Se ordenan de menor a mayor número atómico." },
      { tema: "Electricidad", question: "¿Cuál es la unidad de intensidad de corriente?", options: ["el voltio", "el amperio", "el ohmio", "el vatio"], correctIndex: 1, explanation: "La intensidad se mide en amperios (A)." },
      { tema: "Electricidad", question: "¿Qué expresa la ley de Ohm?", options: ["V = I · R", "V = I / R", "I = V · R", "R = V · I"], correctIndex: 0, explanation: "El voltaje es igual a la intensidad por la resistencia." },
      { tema: "Física", question: "¿Cómo se calcula la velocidad media?", options: ["espacio por tiempo", "espacio entre tiempo", "tiempo entre espacio", "espacio más tiempo"], correctIndex: 1, explanation: "Velocidad = espacio recorrido / tiempo empleado." },
      { tema: "Química", question: "¿Qué es una disolución?", options: ["una mezcla heterogénea", "una mezcla homogénea de soluto y disolvente", "un compuesto puro", "un cambio químico"], correctIndex: 1, explanation: "En una disolución no se distinguen sus componentes: es homogénea." },
      { tema: "Química", question: "¿Qué partícula del átomo no tiene carga eléctrica?", options: ["el protón", "el neutrón", "el electrón", "el ion"], correctIndex: 1, explanation: "Los neutrones son neutros; están en el núcleo junto a los protones." },
      { tema: "Química", question: "¿Qué es un ion?", options: ["un tipo de molécula", "un elemento radiactivo", "un átomo que ha ganado o perdido electrones", "un gas noble"], correctIndex: 2, explanation: "Si pierde electrones queda positivo (catión); si los gana, negativo (anión)." },
      { tema: "Química", question: "¿Cuál es el símbolo químico del hierro?", options: ["H", "Hi", "I", "Fe"], correctIndex: 3, explanation: "Fe viene del latín \"ferrum\"." },
      { tema: "Química", question: "¿Qué son los isótopos?", options: ["átomos del mismo elemento con distinto número de neutrones", "elementos distintos", "moléculas de agua", "iones negativos"], correctIndex: 0, explanation: "El carbono-12 y el carbono-14 son isótopos del carbono." },
      { tema: "Química", question: "¿Qué se forma al reaccionar un ácido con una base?", options: ["oxígeno", "una sal y agua", "un metal", "un gas noble"], correctIndex: 1, explanation: "Es una reacción de neutralización." },
      { tema: "Electricidad", question: "¿Qué partículas se mueven por un cable cuando hay corriente eléctrica?", options: ["los protones", "los neutrones", "los electrones", "los átomos enteros"], correctIndex: 2, explanation: "La corriente es un movimiento de electrones." },
      { tema: "Electricidad", question: "Una bombilla está conectada a 6 V y tiene una resistencia de 3 Ω. ¿Qué intensidad circula?", options: ["18 A", "0,5 A", "9 A", "2 A"], correctIndex: 3, explanation: "Por la ley de Ohm: I = V / R = 6 / 3 = 2 A." },
      { tema: "Física", question: "¿Qué es la aceleración?", options: ["el cambio de velocidad por unidad de tiempo", "la distancia recorrida", "la masa de un cuerpo", "la fuerza de la gravedad"], correctIndex: 0, explanation: "Se mide en m/s²." },
    ],
  },
  {
    id: "q4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "⚗️ 4º ESO superado",
    questions: [
      { tema: "Física", question: "¿Qué dice la segunda ley de Newton?", options: ["F = m · a", "F = m / a", "a = F · m", "F = m + a"], correctIndex: 0, explanation: "La fuerza es igual a la masa por la aceleración." },
      { tema: "Física", question: "¿Cómo se llama la primera ley de Newton?", options: ["principio de acción y reacción", "principio de inercia", "ley de gravitación", "ley de Ohm"], correctIndex: 1, explanation: "Sin fuerza neta, un cuerpo sigue parado o con velocidad constante." },
      { tema: "Física", question: "¿Qué afirma la tercera ley de Newton?", options: ["toda acción tiene una reacción igual y de sentido contrario", "la fuerza es masa por aceleración", "los cuerpos caen a la misma velocidad", "la energía se conserva"], correctIndex: 0, explanation: "Si A empuja a B, B empuja a A con la misma fuerza en sentido contrario." },
      { tema: "Física", question: "¿Cuál es la unidad de fuerza en el Sistema Internacional?", options: ["el julio", "el newton", "el kilogramo", "el pascal"], correctIndex: 1, explanation: "La fuerza se mide en newtons (N)." },
      { tema: "Física", question: "¿En qué unidad se miden el trabajo y la energía?", options: ["en newtons", "en julios", "en vatios", "en pascales"], correctIndex: 1, explanation: "Trabajo y energía se miden en julios (J)." },
      { tema: "Física", question: "¿De qué depende la energía cinética de un cuerpo?", options: ["solo de su masa", "de su masa y su velocidad", "solo de su altura", "de su temperatura"], correctIndex: 1, explanation: "Ec = ½ · m · v²: depende de la masa y de la velocidad." },
      { tema: "Química", question: "¿Cuántas partículas hay en un mol?", options: ["1.000", "6,022 · 10²³", "100.000", "6,022 · 10¹²"], correctIndex: 1, explanation: "Es el número de Avogadro: 6,022 · 10²³ partículas." },
      { tema: "Química", question: "Una disolución con pH 3 es…", options: ["ácida", "neutra", "básica", "salada"], correctIndex: 0, explanation: "Por debajo de 7 es ácida; 7 es neutra; por encima, básica." },
      { tema: "Química", question: "¿Qué enlace se forma entre dos no metales?", options: ["iónico", "covalente", "metálico", "de hidrógeno"], correctIndex: 1, explanation: "Dos no metales comparten electrones: enlace covalente." },
      { tema: "Química", question: "¿Cuál es la fórmula del metano?", options: ["CH₄", "C₂H₆", "CO₂", "CH₃"], correctIndex: 0, explanation: "El metano es CH₄: un carbono y cuatro hidrógenos." },
      { tema: "Física", question: "¿Cuál es la unidad de presión en el Sistema Internacional?", options: ["el newton", "el pascal", "la atmósfera", "el bar"], correctIndex: 1, explanation: "La presión se mide en pascales (Pa), que son N/m²." },
      { tema: "La materia", question: "En un movimiento rectilíneo uniformemente acelerado, ¿qué es constante?", options: ["la velocidad", "la aceleración", "el espacio", "el tiempo"], correctIndex: 1, explanation: "En el MRUA la aceleración es constante y la velocidad cambia." },
      { tema: "Física", question: "¿Cuánto vale aproximadamente la aceleración de la gravedad en la Tierra?", options: ["3,0 m/s²", "9,8 m/s²", "98 m/s²", "1 m/s²"], correctIndex: 1, explanation: "g ≈ 9,8 m/s²: cada segundo de caída la velocidad aumenta 9,8 m/s." },
      { tema: "Física", question: "¿Qué dice el principio de Arquímedes?", options: ["la energía se conserva", "toda acción tiene una reacción", "un cuerpo sumergido recibe un empuje igual al peso del líquido que desaloja", "la presión es fuerza por superficie"], correctIndex: 2, explanation: "Por eso flotan los barcos." },
      { tema: "Física", question: "¿Qué energía tiene un cuerpo por estar a cierta altura?", options: ["cinética", "térmica", "química", "potencial gravitatoria"], correctIndex: 3, explanation: "Ep = m · g · h: depende de la masa y de la altura." },
      { tema: "Física", question: "¿Qué dice el principio de conservación de la energía?", options: ["la energía no se crea ni se destruye, solo se transforma", "la energía siempre aumenta", "la energía desaparece con el rozamiento", "la energía solo existe en movimiento"], correctIndex: 0, explanation: "El rozamiento no la destruye: la transforma en calor." },
      { tema: "Química", question: "¿Qué enlace une un metal y un no metal, como en la sal común?", options: ["covalente", "iónico", "metálico", "de hidrógeno"], correctIndex: 1, explanation: "En el NaCl, el sodio cede un electrón al cloro y se atraen como iones." },
      { tema: "Química", question: "¿Cuál es la masa molar del agua (H = 1, O = 16)?", options: ["17 g/mol", "16 g/mol", "18 g/mol", "34 g/mol"], correctIndex: 2, explanation: "H₂O: 2 · 1 + 16 = 18 g/mol." },
      { tema: "Química", question: "¿Qué es una combustión?", options: ["la disolución de sal en agua", "la fusión del hielo", "una oxidación sin oxígeno", "la reacción de una sustancia con oxígeno que desprende energía"], correctIndex: 3, explanation: "Al quemar gas, madera o gasolina se libera energía y se forma CO₂." },
      { tema: "Química", question: "¿Qué elemento es la base de la química orgánica?", options: ["el carbono", "el hierro", "el sodio", "el helio"], correctIndex: 0, explanation: "Los compuestos orgánicos están formados sobre todo por carbono e hidrógeno." },
    ],
  },
];

export const fisicaQuimicaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "fisica_quimica" as const,
    stage: grade.stage,
    topic: q.tema,
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
