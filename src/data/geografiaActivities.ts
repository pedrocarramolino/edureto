import type { MissionActivity, MultipleChoiceActivity } from "@/types";

interface Pregunta {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Geografía de España, empezando por lo de casa: lo que un alumno de aquí
// puede reconocer al mirar por la ventana.
const primaria: Pregunta[] = [
  { question: "¿Cuál es la capital de la Comunitat Valenciana?", options: ["Alicante", "València", "Castellón", "Elche"], correctIndex: 1, explanation: "València es la capital y la ciudad más poblada de las tres provincias." },
  { question: "¿Qué mar baña las costas de la Comunitat Valenciana?", options: ["el mar Cantábrico", "el mar Mediterráneo", "el océano Atlántico", "el mar del Norte"], correctIndex: 1, explanation: "Toda la costa valenciana es mediterránea." },
  { question: "¿Qué río pasa por la ciudad de València?", options: ["el Ebro", "el Túria", "el Segura", "el Júcar"], correctIndex: 1, explanation: "El Túria, desviado tras la riada de 1957; su cauce viejo es hoy un jardín." },
  { question: "¿Cuántas provincias tiene la Comunitat Valenciana?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "Castellón, València y Alicante." },
  { question: "¿Qué país está al oeste de España?", options: ["Francia", "Portugal", "Italia", "Marruecos"], correctIndex: 1, explanation: "Portugal comparte con España toda la frontera oeste." },
  { question: "¿Cómo se llama la gran llanura elevada del centro de España?", options: ["la Meseta", "la Marina", "la Albufera", "el Delta"], correctIndex: 0, explanation: "La Meseta ocupa el centro de la península, a unos 600 metros de altura." },
  { question: "¿En qué continente está España?", options: ["África", "Europa", "Asia", "América"], correctIndex: 1, explanation: "España está en el suroeste de Europa." },
  { question: "¿Cómo se llaman las islas españolas del océano Atlántico?", options: ["las Baleares", "las Canarias", "las Cíes", "las Columbretes"], correctIndex: 1, explanation: "Las Canarias están en el Atlántico, frente a la costa de África." },
  { question: "¿Qué estrecho separa España de África?", options: ["el de Gibraltar", "el de Magallanes", "el de Bering", "el de Ormuz"], correctIndex: 0, explanation: "Apenas 14 kilómetros separan Tarifa de Marruecos." },
  { question: "¿Qué comunidad autónoma está al sur de la Comunitat Valenciana?", options: ["Cataluña", "la Región de Murcia", "Aragón", "Castilla-La Mancha"], correctIndex: 1, explanation: "Murcia queda al sur; Cataluña al norte y Aragón y Castilla-La Mancha al oeste." },
  { question: "¿Qué es un archipiélago?", options: ["una montaña rodeada de agua", "un conjunto de islas", "un río muy ancho", "una playa muy larga"], correctIndex: 1, explanation: "Baleares y Canarias son los dos archipiélagos españoles." },
  { question: "¿Qué es un golfo?", options: ["una entrada grande del mar en la tierra", "una montaña junto al mar", "un río que desemboca", "una isla pequeña"], correctIndex: 0, explanation: "El golfo de València es un buen ejemplo." },
];

// Geografía del mundo para la ESO: los récords del planeta y los conceptos
// que se piden en el examen.
const eso: Pregunta[] = [
  { question: "¿Cuál es el río más caudaloso del mundo?", options: ["el Nilo", "el Amazonas", "el Misisipi", "el Yangtsé"], correctIndex: 1, explanation: "El Amazonas lleva más agua que los diez siguientes juntos." },
  { question: "¿Cuál es el océano más extenso?", options: ["el Atlántico", "el Pacífico", "el Índico", "el Ártico"], correctIndex: 1, explanation: "El Pacífico ocupa él solo un tercio de la superficie del planeta." },
  { question: "¿Cuál es la montaña más alta del mundo?", options: ["el K2", "el Everest", "el Mont Blanc", "el Aconcagua"], correctIndex: 1, explanation: "El Everest, en el Himalaya, mide 8.849 metros." },
  { question: "¿Cuál es el desierto cálido más grande del mundo?", options: ["el Gobi", "el Sáhara", "el de Atacama", "el de Kalahari"], correctIndex: 1, explanation: "El Sáhara ocupa el norte de África, casi como Estados Unidos." },
  { question: "¿Qué continente tiene más población?", options: ["África", "Asia", "Europa", "América"], correctIndex: 1, explanation: "En Asia vive más de la mitad de la humanidad." },
  { question: "¿Cuál es el país más extenso del mundo?", options: ["Canadá", "Rusia", "China", "Estados Unidos"], correctIndex: 1, explanation: "Rusia ocupa once husos horarios, de Europa al Pacífico." },
  { question: "¿Qué cordillera recorre América del Sur de norte a sur?", options: ["las Rocosas", "los Andes", "el Himalaya", "los Apalaches"], correctIndex: 1, explanation: "Los Andes son la cordillera más larga del mundo: unos 7.000 km." },
  { question: "¿Cuál es la capital de Portugal?", options: ["Oporto", "Lisboa", "Coímbra", "Braga"], correctIndex: 1, explanation: "Lisboa está junto a la desembocadura del Tajo." },
  { question: "¿Qué es un istmo?", options: ["una franja estrecha de tierra que une dos zonas mayores", "un brazo de mar entre dos islas", "una montaña submarina", "un río subterráneo"], correctIndex: 0, explanation: "El istmo de Panamá une América del Norte con América del Sur." },
  { question: "¿Qué clima predomina en la costa mediterránea española?", options: ["oceánico", "mediterráneo", "continental", "subtropical"], correctIndex: 1, explanation: "Veranos secos y calurosos e inviernos suaves, con lluvias en otoño." },
  { question: "¿Qué canal une el mar Mediterráneo con el mar Rojo?", options: ["el canal de Panamá", "el canal de Suez", "el canal de la Mancha", "el canal de Corinto"], correctIndex: 1, explanation: "El de Suez, en Egipto, ahorra rodear toda África." },
  { question: "¿Cuál es el país más poblado del mundo?", options: ["China", "la India", "Estados Unidos", "Indonesia"], correctIndex: 1, explanation: "La India superó a China en 2023: rondan los 1.400 millones cada uno." },
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
    topic: "Geografía",
    difficulty,
    title: q.question,
    ...q,
  }));
}

export const geografiaQuestions: MultipleChoiceActivity[] = [
  ...aActividades(primaria, "geo-p", "conocimiento_medio", "primaria_superior", 2),
  ...aActividades(eso, "geo-e", "geografia_historia", "eso", 3),
];

export const geografiaMissions: MissionActivity[] = [
  {
    id: "geografia-primaria",
    type: "mission",
    subjectId: "conocimiento_medio",
    stage: "primaria_superior",
    topic: "Geografía",
    difficulty: 2,
    title: "Geografía de España",
    narrative: "Mares, ríos, montañas, islas y provincias, empezando por las de aquí.",
    badge: "🗺️ Te sabes España",
    steps: primaria.map((_, index) => ({
      id: `st-geo-p-${index + 1}`,
      label: `Pregunta ${index + 1}`,
      activityId: `geo-p-${index + 1}`,
    })),
  },
  {
    id: "geografia-eso",
    type: "mission",
    subjectId: "geografia_historia",
    stage: "eso",
    topic: "Geografía",
    difficulty: 3,
    title: "Geografía del mundo",
    narrative: "Océanos, cordilleras, desiertos, países y climas del planeta.",
    badge: "🌍 Te sabes el mundo",
    steps: eso.map((_, index) => ({
      id: `st-geo-e-${index + 1}`,
      label: `Pregunta ${index + 1}`,
      activityId: `geo-e-${index + 1}`,
    })),
  },
];
