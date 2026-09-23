import type { MissionActivity, MultipleChoiceActivity } from "@/types";

interface Pregunta {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Mapas para Primaria: orientarse, leer la leyenda y entender los colores.
const primaria: Pregunta[] = [
  { question: "¿Qué instrumento nos indica dónde está el norte?", options: ["el termómetro", "la brújula", "el reloj", "la regla"], correctIndex: 1, explanation: "La aguja de la brújula siempre señala el norte." },
  { question: "Si te pones mirando al norte, ¿qué tienes a la derecha?", options: ["el sur", "el este", "el oeste", "otra vez el norte"], correctIndex: 1, explanation: "Mirando al norte: el este a la derecha y el oeste a la izquierda." },
  { question: "¿Para qué sirve la leyenda de un mapa?", options: ["para contar su historia", "para saber qué significan sus símbolos y colores", "para medir el tiempo", "para ponerle título"], correctIndex: 1, explanation: "Sin leyenda no sabrías qué es cada dibujo del mapa." },
  { question: "En un mapa físico, ¿qué indica el color verde?", options: ["los bosques", "las tierras llanas y bajas", "los ríos", "las ciudades"], correctIndex: 1, explanation: "El verde son las llanuras; según sube el terreno pasa a amarillo y a marrón." },
  { question: "En un mapa físico, ¿qué indica el color marrón?", options: ["el desierto", "las montañas", "el mar", "las carreteras"], correctIndex: 1, explanation: "Cuanto más oscuro es el marrón, más alta es la montaña." },
  { question: "¿De qué color se dibuja el agua en los mapas?", options: ["verde", "azul", "gris", "amarillo"], correctIndex: 1, explanation: "Ríos, lagos y mares van siempre en azul." },
  { question: "¿Qué muestra un mapa político?", options: ["las montañas y los ríos", "los países, las provincias y las ciudades", "el tiempo que hará", "las estrellas"], correctIndex: 1, explanation: "El político dibuja las fronteras; el físico, el relieve." },
  { question: "¿Qué es un plano?", options: ["el dibujo de un sitio pequeño visto desde arriba", "una foto hecha desde un avión", "un mapa de todo el mundo", "un tipo de brújula"], correctIndex: 0, explanation: "El plano de tu colegio o de tu barrio se dibuja mirando desde arriba." },
  { question: "¿Qué nos dice la escala de un mapa?", options: ["cuánto se ha reducido la realidad", "cuántos colores tiene", "quién lo ha dibujado", "de qué año es"], correctIndex: 0, explanation: "Gracias a la escala se pueden medir distancias de verdad." },
  { question: "¿Qué punto cardinal está justo enfrente del sur?", options: ["el este", "el norte", "el oeste", "el noreste"], correctIndex: 1, explanation: "Norte y sur son opuestos, igual que este y oeste." },
  { question: "¿Qué mapa usarías para ir en coche de un pueblo a otro?", options: ["un mapa del tiempo", "un mapa de carreteras", "un mapa de estrellas", "un plano del colegio"], correctIndex: 1, explanation: "Los mapas de carreteras dibujan las vías y las distancias entre pueblos." },
  { question: "¿Cómo se llama el dibujo que marca los puntos cardinales en un mapa?", options: ["la rosa de los vientos", "la flor del mapa", "la brújula de papel", "la escala"], correctIndex: 0, explanation: "La rosa de los vientos señala hacia dónde cae cada punto cardinal." },
];

// Mapas para la ESO: coordenadas, escalas, proyecciones y mapas digitales.
const eso: Pregunta[] = [
  { question: "¿Qué mide la latitud?", options: ["la distancia al ecuador en grados", "la distancia a Greenwich", "la altura sobre el mar", "la temperatura media"], correctIndex: 0, explanation: "Va de 0° en el ecuador a 90° en cada polo, norte o sur." },
  { question: "¿Qué mide la longitud?", options: ["la distancia al ecuador", "la distancia al meridiano de Greenwich en grados", "el largo de un país", "la distancia a la costa"], correctIndex: 1, explanation: "Va de 0° en Greenwich hasta 180°, hacia el este o hacia el oeste." },
  { question: "¿Cómo se llaman las líneas paralelas al ecuador?", options: ["los meridianos", "los paralelos", "las isobaras", "las curvas de nivel"], correctIndex: 1, explanation: "Los paralelos marcan la latitud; los meridianos, la longitud." },
  { question: "¿Qué trópico está en el hemisferio norte?", options: ["el de Capricornio", "el de Cáncer", "el círculo polar ártico", "el ecuador"], correctIndex: 1, explanation: "Cáncer al norte y Capricornio al sur." },
  { question: "¿Qué es una proyección cartográfica?", options: ["la forma de representar la Tierra esférica en un plano", "la sombra de una montaña", "un tipo de escala", "una foto de satélite"], correctIndex: 0, explanation: "Aplanar una esfera siempre deforma algo: la forma, el tamaño o la distancia." },
  { question: "¿Qué deforma sobre todo la proyección de Mercator?", options: ["el tamaño de las zonas cercanas a los polos", "la forma de los ríos", "el color del mar", "la posición del ecuador"], correctIndex: 0, explanation: "Por eso Groenlandia parece tan grande como África sin serlo." },
  { question: "En un mapa a escala 1:50.000, ¿a cuánto equivale 1 cm?", options: ["50 m", "500 m", "5 km", "50 km"], correctIndex: 1, explanation: "1 cm son 50.000 cm en la realidad, es decir, 500 metros." },
  { question: "Si las curvas de nivel salen muy juntas, el terreno es…", options: ["llano", "muy empinado", "un río", "una ciudad"], correctIndex: 1, explanation: "Cuanto más juntas, más rápido cambia la altura: más pendiente." },
  { question: "¿En cuántos husos horarios se divide la Tierra?", options: ["12", "24", "36", "60"], correctIndex: 1, explanation: "Uno por cada 15° de longitud: 24 en total." },
  { question: "¿Qué representa un mapa temático?", options: ["un solo asunto, como la población o el clima", "todos los países del mundo", "solo el relieve", "las calles de una ciudad"], correctIndex: 0, explanation: "Los mapas de población, de lluvias o de terremotos son temáticos." },
  { question: "¿Cómo sabe un GPS dónde estás?", options: ["por la brújula del móvil", "con las señales de varios satélites a la vez", "por la antena de tu casa", "midiendo la presión del aire"], correctIndex: 1, explanation: "Calcula tu posición cruzando las señales de varios satélites." },
  { question: "¿Qué es un SIG (sistema de información geográfica)?", options: ["un programa que une mapas con datos para analizarlos", "un tipo de brújula digital", "una escala muy grande", "un satélite español"], correctIndex: 0, explanation: "Permite cruzar un mapa con datos: población, rutas o riesgos." },
];

function aActividades(
  lista: Pregunta[],
  prefijo: string,
  subjectId: MultipleChoiceActivity["subjectId"],
  stage: MultipleChoiceActivity["stage"],
  difficulty: 1 | 2 | 3,
): MultipleChoiceActivity[] {
  return lista.map((q, index) => ({
    id: `${prefijo}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId,
    stage,
    topic: "Mapas",
    difficulty,
    title: q.question,
    ...q,
  }));
}

export const mapasQuestions: MultipleChoiceActivity[] = [
  ...aActividades(primaria, "mapa-p", "conocimiento_medio", "primaria_superior", 2),
  ...aActividades(eso, "mapa-e", "geografia_historia", "eso", 3),
];

export const mapasMissions: MissionActivity[] = [
  {
    id: "mapas-primaria",
    type: "mission",
    subjectId: "conocimiento_medio",
    stage: "primaria_superior",
    topic: "Mapas",
    difficulty: 2,
    title: "Mapas y orientación",
    narrative: "Aprende a leer un mapa: la brújula, la leyenda, los colores y la escala.",
    badge: "🧭 Sabes orientarte",
    steps: primaria.map((_, index) => ({
      id: `st-mapa-p-${index + 1}`,
      label: `Pregunta ${index + 1}`,
      activityId: `mapa-p-${index + 1}`,
    })),
  },
  {
    id: "mapas-eso",
    type: "mission",
    subjectId: "geografia_historia",
    stage: "eso",
    topic: "Mapas",
    difficulty: 3,
    title: "Mapas del mundo",
    narrative: "Coordenadas, escalas, proyecciones y mapas digitales.",
    badge: "🗺️ Cartógrafo",
    steps: eso.map((_, index) => ({
      id: `st-mapa-e-${index + 1}`,
      label: `Pregunta ${index + 1}`,
      activityId: `mapa-e-${index + 1}`,
    })),
  },
];
