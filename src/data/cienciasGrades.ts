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
    id: "n1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🌱 1º Primaria superado",
    questions: [
      { question: "¿Con qué sentido oímos los sonidos?", options: ["La vista", "El oído", "El olfato", "El tacto"], correctIndex: 1, explanation: "Los sonidos se perciben con el oído." },
      { question: "¿Qué animal vive en el agua?", options: ["El perro", "El pez", "La gallina", "El caballo"], correctIndex: 1, explanation: "El pez vive en el agua." },
      { question: "¿Qué necesita una planta para vivir?", options: ["Agua", "Chocolate", "Juguetes", "Nada"], correctIndex: 0, explanation: "Las plantas necesitan agua, luz y aire." },
      { question: "¿Cuántas patas tiene un perro?", options: ["2", "4", "6", "8"], correctIndex: 1, explanation: "El perro tiene 4 patas." },
      { question: "¿Qué parte del cuerpo usamos para ver?", options: ["Las orejas", "La nariz", "Los ojos", "La boca"], correctIndex: 2, explanation: "Vemos con los ojos." },
      { question: "¿Qué animal pone huevos?", options: ["La vaca", "La gallina", "El perro", "El gato"], correctIndex: 1, explanation: "La gallina es un ave y pone huevos." },
      { question: "¿Cuál de estos es un ser vivo?", options: ["Una piedra", "Una mesa", "Un árbol", "Un coche"], correctIndex: 2, explanation: "El árbol nace, crece, se alimenta y muere: es un ser vivo." },
      { question: "¿Qué alimento es más sano para comer todos los días?", options: ["Golosinas", "Fruta", "Refrescos", "Patatas fritas"], correctIndex: 1, explanation: "La fruta aporta vitaminas y es muy sana." },
    ],
  },
  {
    id: "n2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🌱 2º Primaria superado",
    questions: [
      { question: "¿Qué parte de la planta está bajo tierra?", options: ["La flor", "La hoja", "La raíz", "El fruto"], correctIndex: 2, explanation: "La raíz está bajo tierra y absorbe el agua." },
      { question: "¿Cuál de estos animales es salvaje?", options: ["El gato", "El león", "La vaca", "El perro"], correctIndex: 1, explanation: "El león vive libre en la naturaleza: es salvaje." },
      { question: "¿En qué estación del año hace más frío?", options: ["Verano", "Primavera", "Otoño", "Invierno"], correctIndex: 3, explanation: "El invierno es la estación más fría." },
      { question: "¿De qué se alimenta un animal herbívoro?", options: ["De carne", "De plantas", "De insectos", "De peces"], correctIndex: 1, explanation: "Los herbívoros comen plantas." },
      { question: "¿Qué parte de la planta suele ser verde y plana?", options: ["La raíz", "El tallo", "La hoja", "La semilla"], correctIndex: 2, explanation: "Las hojas son verdes y planas." },
      { question: "¿Cuál de estos animales es doméstico?", options: ["El tigre", "El gato", "El lobo", "El oso"], correctIndex: 1, explanation: "El gato vive con las personas: es doméstico." },
      { question: "¿Cuál de estos animales es un mamífero?", options: ["La vaca", "El pez", "La serpiente", "La gallina"], correctIndex: 0, explanation: "La vaca tiene pelo y alimenta a sus crías con leche." },
      { question: "¿En qué estación caen las hojas de muchos árboles?", options: ["Primavera", "Verano", "Otoño", "Invierno"], correctIndex: 2, explanation: "En otoño muchos árboles pierden sus hojas." },
    ],
  },
  {
    id: "n3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "🌱 3º Primaria superado",
    questions: [
      { question: "¿Cuál de estos animales es invertebrado?", options: ["El perro", "La araña", "El pez", "El águila"], correctIndex: 1, explanation: "La araña no tiene esqueleto interno: es invertebrado." },
      { question: "¿Cómo se llama el agua en estado sólido?", options: ["Vapor", "Hielo", "Lluvia", "Niebla"], correctIndex: 1, explanation: "El agua sólida es el hielo." },
      { question: "¿Qué grupo de animales tiene plumas?", options: ["Los peces", "Los reptiles", "Las aves", "Los mamíferos"], correctIndex: 2, explanation: "Las aves son los únicos animales con plumas." },
      { question: "¿Dónde empieza la digestión?", options: ["En el estómago", "En la boca", "En el intestino", "En el corazón"], correctIndex: 1, explanation: "La digestión empieza en la boca, al masticar." },
      { question: "¿Qué es el vapor de agua?", options: ["Agua sólida", "Agua líquida", "Agua en estado gaseoso", "Agua con sal"], correctIndex: 2, explanation: "El vapor es agua en estado gaseoso." },
      { question: "¿Cómo respiran los peces?", options: ["Por pulmones", "Por branquias", "Por la piel", "No respiran"], correctIndex: 1, explanation: "Los peces toman el oxígeno del agua con sus branquias." },
      { question: "¿Qué animales tienen la piel cubierta de escamas y reptan o caminan?", options: ["Los reptiles", "Las aves", "Los anfibios", "Los mamíferos"], correctIndex: 0, explanation: "Los reptiles, como el lagarto, tienen escamas." },
      { question: "¿Qué órgano bombea la sangre por el cuerpo?", options: ["Los pulmones", "El cerebro", "El corazón", "El estómago"], correctIndex: 2, explanation: "El corazón bombea la sangre." },
    ],
  },
  {
    id: "n4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🌱 4º Primaria superado",
    questions: [
      { question: "¿Qué órganos filtran la sangre y producen la orina?", options: ["Los pulmones", "Los riñones", "El hígado", "El corazón"], correctIndex: 1, explanation: "Los riñones limpian la sangre y producen orina." },
      { question: "¿Qué aparato se encarga de la respiración?", options: ["El digestivo", "El respiratorio", "El circulatorio", "El excretor"], correctIndex: 1, explanation: "El aparato respiratorio incluye los pulmones." },
      { question: "¿Qué gas tomamos del aire al respirar?", options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Helio"], correctIndex: 1, explanation: "Inspiramos oxígeno y expulsamos dióxido de carbono." },
      { question: "En una cadena alimentaria, ¿qué ser vivo es un productor?", options: ["Una planta", "Un conejo", "Un zorro", "Un águila"], correctIndex: 0, explanation: "Las plantas fabrican su propio alimento: son productores." },
      { question: "¿Qué material conduce bien la electricidad?", options: ["El plástico", "La madera", "El cobre", "El corcho"], correctIndex: 2, explanation: "Los metales como el cobre son buenos conductores." },
      { question: "¿Cuántos huesos tiene aproximadamente una persona adulta?", options: ["50", "106", "206", "500"], correctIndex: 2, explanation: "El esqueleto adulto tiene unos 206 huesos." },
      { question: "¿Qué transporta la sangre por el cuerpo?", options: ["Oxígeno y nutrientes", "Solo agua", "Aire", "Huesos"], correctIndex: 0, explanation: "La sangre lleva oxígeno y nutrientes a todas las células." },
      { question: "¿Cuál de estos materiales es aislante eléctrico?", options: ["El hierro", "El cobre", "El plástico", "El aluminio"], correctIndex: 2, explanation: "El plástico no deja pasar la electricidad: es aislante." },
    ],
  },
  {
    id: "n5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🌱 5º Primaria superado",
    questions: [
      { question: "¿Cuál es la unidad más pequeña de un ser vivo?", options: ["El órgano", "La célula", "El tejido", "El átomo"], correctIndex: 1, explanation: "La célula es la unidad básica de todos los seres vivos." },
      { question: "¿Qué gas liberan las plantas en la fotosíntesis?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Vapor"], correctIndex: 0, explanation: "En la fotosíntesis las plantas liberan oxígeno." },
      { question: "¿Cuál de estas es una fuente de energía renovable?", options: ["El petróleo", "El carbón", "El sol", "El gas natural"], correctIndex: 2, explanation: "La energía solar no se agota: es renovable." },
      { question: "¿Qué órgano coordina y controla todo el cuerpo?", options: ["El corazón", "El cerebro", "El estómago", "Los pulmones"], correctIndex: 1, explanation: "El cerebro dirige el sistema nervioso." },
      { question: "¿Qué parte de la célula contiene la información genética?", options: ["La membrana", "El citoplasma", "El núcleo", "La pared"], correctIndex: 2, explanation: "El núcleo guarda la información genética." },
      { question: "¿Qué seres descomponen los restos de otros seres vivos?", options: ["Los productores", "Los descomponedores", "Los herbívoros", "Los carnívoros"], correctIndex: 1, explanation: "Hongos y bacterias descomponen la materia orgánica." },
      { question: "¿Qué tipo de energía tiene un objeto en movimiento?", options: ["Cinética", "Térmica", "Química", "Eléctrica"], correctIndex: 0, explanation: "La energía del movimiento es la energía cinética." },
      { question: "¿Cuál de estas fuentes de energía NO es renovable?", options: ["El viento", "El agua", "El petróleo", "El sol"], correctIndex: 2, explanation: "El petróleo se agota: es no renovable." },
    ],
  },
  {
    id: "n6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🌱 6º Primaria superado",
    questions: [
      { question: "¿Cuál es el planeta más cercano al Sol?", options: ["Venus", "Mercurio", "Marte", "La Tierra"], correctIndex: 1, explanation: "Mercurio es el planeta más próximo al Sol." },
      { question: "¿Cuántos planetas tiene el Sistema Solar?", options: ["7", "8", "9", "10"], correctIndex: 1, explanation: "El Sistema Solar tiene 8 planetas." },
      { question: "¿Qué fuerza nos mantiene pegados al suelo?", options: ["El magnetismo", "La gravedad", "El rozamiento", "La electricidad"], correctIndex: 1, explanation: "La gravedad atrae los cuerpos hacia la Tierra." },
      { question: "¿En qué unidad se mide la fuerza?", options: ["Metros", "Kilogramos", "Newtons", "Litros"], correctIndex: 2, explanation: "La fuerza se mide en newtons (N)." },
      { question: "¿Qué es la Luna respecto a la Tierra?", options: ["Una estrella", "Un planeta", "Un satélite", "Un cometa"], correctIndex: 2, explanation: "La Luna gira alrededor de la Tierra: es su satélite." },
      { question: "¿Qué necesita un circuito eléctrico para que funcione?", options: ["Estar abierto", "Estar cerrado", "Tener agua", "Ser de madera"], correctIndex: 1, explanation: "La corriente solo circula si el circuito está cerrado." },
      { question: "¿Qué movimiento de la Tierra produce el día y la noche?", options: ["La rotación", "La traslación", "La gravedad", "La órbita lunar"], correctIndex: 0, explanation: "La Tierra gira sobre sí misma (rotación) en 24 horas." },
      { question: "¿Qué movimiento de la Tierra, junto a su inclinación, origina las estaciones?", options: ["La rotación", "La traslación", "Las mareas", "Los terremotos"], correctIndex: 1, explanation: "La vuelta alrededor del Sol (traslación) y la inclinación del eje producen las estaciones." },
    ],
  },
  {
    id: "n1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🔬 1º ESO superado",
    questions: [
      { question: "¿Cuál es la capa más externa de la Tierra?", options: ["El núcleo", "El manto", "La corteza", "El magma"], correctIndex: 2, explanation: "La corteza es la capa más superficial." },
      { question: "¿Qué tipo de roca se forma al enfriarse el magma?", options: ["Sedimentaria", "Magmática o ígnea", "Metamórfica", "Caliza"], correctIndex: 1, explanation: "Las rocas magmáticas se forman al solidificarse el magma." },
      { question: "¿En cuántos reinos se suelen clasificar los seres vivos?", options: ["3", "4", "5", "7"], correctIndex: 2, explanation: "Moneras, protoctistas, hongos, plantas y animales: 5 reinos." },
      { question: "¿A qué reino pertenecen las setas?", options: ["Plantas", "Animales", "Hongos", "Moneras"], correctIndex: 2, explanation: "Las setas son hongos, no plantas." },
      { question: "¿Qué capa de la atmósfera nos protege de los rayos ultravioleta?", options: ["La capa de ozono", "Las nubes", "La troposfera baja", "La hidrosfera"], correctIndex: 0, explanation: "La capa de ozono absorbe gran parte de la radiación ultravioleta." },
      { question: "¿Qué seres vivos son unicelulares y no tienen núcleo definido?", options: ["Los hongos", "Las bacterias", "Las algas", "Los protozoos"], correctIndex: 1, explanation: "Las bacterias son células procariotas, sin núcleo." },
      { question: "¿Qué es la hidrosfera?", options: ["El aire de la Tierra", "El conjunto del agua de la Tierra", "El interior de la Tierra", "Los seres vivos"], correctIndex: 1, explanation: "La hidrosfera incluye océanos, ríos, lagos, hielo y aguas subterráneas." },
      { question: "¿Qué tipo de nutrición tienen las plantas?", options: ["Heterótrofa", "Autótrofa", "Parásita", "Carnívora"], correctIndex: 1, explanation: "Fabrican su propio alimento: nutrición autótrofa." },
    ],
  },
  {
    id: "n2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🔬 2º ESO superado",
    questions: [
      { question: "¿Cuál es la unidad de masa en el Sistema Internacional?", options: ["El gramo", "El kilogramo", "La tonelada", "El litro"], correctIndex: 1, explanation: "La unidad de masa del SI es el kilogramo (kg)." },
      { question: "¿A qué temperatura hierve el agua al nivel del mar?", options: ["0 ºC", "50 ºC", "100 ºC", "200 ºC"], correctIndex: 2, explanation: "A nivel del mar el agua hierve a 100 ºC." },
      { question: "¿Qué es una mezcla homogénea?", options: ["Una mezcla en la que se distinguen sus componentes", "Una mezcla en la que no se distinguen sus componentes", "Una sustancia pura", "Un elemento químico"], correctIndex: 1, explanation: "En una mezcla homogénea, como el agua con sal, no se distinguen los componentes." },
      { question: "¿Cómo se llama el paso de sólido a líquido?", options: ["Fusión", "Solidificación", "Evaporación", "Condensación"], correctIndex: 0, explanation: "Al pasar de sólido a líquido se produce la fusión." },
      { question: "¿Cómo se calcula la velocidad media?", options: ["Tiempo ÷ espacio", "Espacio ÷ tiempo", "Espacio × tiempo", "Masa ÷ volumen"], correctIndex: 1, explanation: "v = espacio recorrido ÷ tiempo empleado." },
      { question: "¿Qué partícula del átomo tiene carga negativa?", options: ["El protón", "El neutrón", "El electrón", "El núcleo"], correctIndex: 2, explanation: "El electrón tiene carga negativa." },
      { question: "¿Cómo se calcula la densidad?", options: ["Masa ÷ volumen", "Volumen ÷ masa", "Masa × volumen", "Peso ÷ tiempo"], correctIndex: 0, explanation: "d = masa ÷ volumen." },
      { question: "¿Cómo se llama el paso de gas a líquido?", options: ["Fusión", "Sublimación", "Condensación", "Vaporización"], correctIndex: 2, explanation: "El paso de gas a líquido es la condensación." },
    ],
  },
  {
    id: "n3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🔬 3º ESO superado",
    questions: [
      { question: "¿Cuál es el símbolo químico del oxígeno?", options: ["Ox", "O", "Og", "Oi"], correctIndex: 1, explanation: "El símbolo del oxígeno es O." },
      { question: "¿Qué indica el número atómico de un elemento?", options: ["Su número de protones", "Su número de neutrones", "Su masa", "Su densidad"], correctIndex: 0, explanation: "El número atómico (Z) es el número de protones." },
      { question: "¿Qué órgano produce la insulina?", options: ["El hígado", "El páncreas", "El riñón", "El estómago"], correctIndex: 1, explanation: "El páncreas produce la insulina, que regula el azúcar en sangre." },
      { question: "¿Cuál es el símbolo químico del sodio?", options: ["S", "So", "Na", "Sd"], correctIndex: 2, explanation: "El sodio se representa con Na (del latín natrium)." },
      { question: "¿Qué células de la sangre defienden al cuerpo de las infecciones?", options: ["Los glóbulos rojos", "Los glóbulos blancos", "Las plaquetas", "Las neuronas"], correctIndex: 1, explanation: "Los glóbulos blancos forman parte del sistema inmunitario." },
      { question: "¿Qué tipo de enlace se forma entre un metal y un no metal?", options: ["Covalente", "Iónico", "Metálico", "De hidrógeno"], correctIndex: 1, explanation: "Metal + no metal forman un enlace iónico, como en la sal (NaCl)." },
      { question: "¿Qué parte del ojo se agranda o se reduce para regular la entrada de luz?", options: ["La retina", "La pupila", "El cristalino", "La córnea"], correctIndex: 1, explanation: "La pupila se dilata o se contrae según la luz." },
      { question: "¿Qué sustancia representa la fórmula H₂O?", options: ["Oxígeno", "Agua", "Hidrógeno", "Sal"], correctIndex: 1, explanation: "H₂O: dos átomos de hidrógeno y uno de oxígeno forman el agua." },
    ],
  },
  {
    id: "n4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🔬 4º ESO superado",
    questions: [
      { question: "¿Qué molécula contiene la información genética?", options: ["El ARN de transferencia", "El ADN", "La glucosa", "La proteína"], correctIndex: 1, explanation: "El ADN almacena la información genética." },
      { question: "¿Quién propuso la teoría de la evolución por selección natural?", options: ["Mendel", "Darwin", "Newton", "Pasteur"], correctIndex: 1, explanation: "Charles Darwin propuso la selección natural." },
      { question: "¿Qué es un gen?", options: ["Un tipo de célula", "Un fragmento de ADN con información para un carácter", "Un órgano", "Una proteína de la sangre"], correctIndex: 1, explanation: "Un gen es un fragmento de ADN que determina un carácter." },
      { question: "¿Qué dice la ley de conservación de la masa?", options: ["La masa aumenta en una reacción", "La masa se destruye al quemar algo", "En una reacción química la masa total se conserva", "La masa depende de la temperatura"], correctIndex: 2, explanation: "Lavoisier: la masa de los reactivos es igual a la de los productos." },
      { question: "¿Cuál es la expresión de la segunda ley de Newton?", options: ["F = m · a", "E = m · c²", "v = e / t", "P = m · g · h"], correctIndex: 0, explanation: "La fuerza es igual a la masa por la aceleración." },
      { question: "¿Qué es la mitosis?", options: ["La unión de dos células", "Una división celular que da dos células iguales", "La muerte celular", "La formación de gametos"], correctIndex: 1, explanation: "La mitosis produce dos células hijas idénticas." },
      { question: "¿Qué pH tiene una sustancia neutra?", options: ["0", "7", "10", "14"], correctIndex: 1, explanation: "pH 7 es neutro; menos es ácido y más es básico." },
      { question: "¿Qué teoría explica el movimiento de los continentes?", options: ["La teoría celular", "La tectónica de placas", "La relatividad", "La evolución"], correctIndex: 1, explanation: "La tectónica de placas explica el desplazamiento de los continentes." },
    ],
  },
];

/**
 * The same content lands in a different subject depending on the stage: in
 * Primaria science is part of Conocimiento del Medio, and in ESO it becomes
 * Biología y Geología.
 */
function subjectFor(stage: Stage) {
  return stage === "eso" ? ("biologia_geologia" as const) : ("conocimiento_medio" as const);
}

export const cienciasGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: subjectFor(grade.stage),
    stage: grade.stage,
    topic: grade.title,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const cienciasGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `ciencias-${grade.id}`,
  type: "mission",
  subjectId: subjectFor(grade.stage),
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Ciencias · ${grade.title}`,
  narrative: `Repasa ciencias de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-ciencias-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
