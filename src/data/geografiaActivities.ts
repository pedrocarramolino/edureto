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
  { question: "¿Cuál es la capital de la Comunitat Valenciana?", options: ["València", "Alicante", "Castellón", "Elche"], correctIndex: 0, explanation: "València es la capital y la ciudad más poblada de las tres provincias." },
  { question: "¿Qué mar baña las costas de la Comunitat Valenciana?", options: ["el mar Cantábrico", "el mar Mediterráneo", "el océano Atlántico", "el mar del Norte"], correctIndex: 1, explanation: "Toda la costa valenciana es mediterránea." },
  { question: "¿Qué río pasa por la ciudad de València?", options: ["el Ebro", "el Segura", "el Túria", "el Júcar"], correctIndex: 2, explanation: "El Túria, desviado tras la riada de 1957; su cauce viejo es hoy un jardín." },
  { question: "¿Cuántas provincias tiene la Comunitat Valenciana?", options: ["2", "5", "4", "3"], correctIndex: 3, explanation: "Castellón, València y Alicante." },
  { question: "¿Qué país está al oeste de España?", options: ["Portugal", "Francia", "Italia", "Marruecos"], correctIndex: 0, explanation: "Portugal comparte con España toda la frontera oeste." },
  { question: "¿Qué dos ciudades españolas están en el norte de África?", options: ["Tánger y Rabat", "Ceuta y Melilla", "Orán y Argel", "Túnez y Trípoli"], correctIndex: 1, explanation: "Ceuta y Melilla son ciudades autónomas españolas en la costa africana." },
  { question: "¿En qué continente está España?", options: ["África", "Asia", "Europa", "América"], correctIndex: 2, explanation: "España está en el suroeste de Europa." },
  { question: "¿Cómo se llaman las islas españolas del océano Atlántico?", options: ["las Baleares", "las Columbretes", "las Cíes", "las Canarias"], correctIndex: 3, explanation: "Las Canarias están en el Atlántico, frente a la costa de África." },
  { question: "¿Qué estrecho separa España de África?", options: ["el de Gibraltar", "el de Magallanes", "el de Bering", "el de Ormuz"], correctIndex: 0, explanation: "Apenas 14 kilómetros separan Tarifa de Marruecos." },
  { question: "¿Qué comunidad autónoma está al sur de la Comunitat Valenciana?", options: ["Cataluña", "la Región de Murcia", "Aragón", "Castilla-La Mancha"], correctIndex: 1, explanation: "Murcia queda al sur; Cataluña al norte y Aragón y Castilla-La Mancha al oeste." },
  { question: "¿Qué es un archipiélago?", options: ["una montaña rodeada de agua", "un río muy ancho", "un conjunto de islas", "una playa muy larga"], correctIndex: 2, explanation: "Baleares y Canarias son los dos archipiélagos españoles." },
  { question: "¿Qué es un golfo?", options: ["una isla pequeña", "una montaña junto al mar", "un río que desemboca", "una entrada grande del mar en la tierra"], correctIndex: 3, explanation: "El golfo de València es un buen ejemplo." },
  { question: "¿Cuál es el pico más alto de la península ibérica?", options: ["el Mulhacén", "el Teide", "el Aneto", "el Veleta"], correctIndex: 0, explanation: "El Mulhacén, en Sierra Nevada, mide 3.479 m. El Teide es más alto, pero está en Canarias." },
  { question: "¿En qué ciudad desemboca el río Júcar?", options: ["en Valencia", "en Cullera", "en Alicante", "en Castellón"], correctIndex: 1, explanation: "El Júcar llega al Mediterráneo en Cullera." },
  { question: "¿Qué gran laguna rodeada de arrozales está al sur de la ciudad de Valencia?", options: ["el mar Menor", "el lago de Sanabria", "la Albufera", "el embalse de Tous"], correctIndex: 2, explanation: "La Albufera es un parque natural: agua, arrozales y muchísimas aves." },
  { question: "¿Qué pequeña isla habitada está frente a Santa Pola, en Alicante?", options: ["Mallorca", "Ibiza", "Lanzarote", "Tabarca"], correctIndex: 3, explanation: "Tabarca es la única isla habitada de la Comunitat Valenciana." },
  { question: "¿Cuál es la capital de las islas Baleares?", options: ["Palma", "Ibiza", "Mahón", "Ciudadela"], correctIndex: 0, explanation: "Palma, en la isla de Mallorca." },
  { question: "¿Qué río pasa por Madrid?", options: ["el Tajo", "el Manzanares", "el Ebro", "el Duero"], correctIndex: 1, explanation: "El Manzanares atraviesa Madrid y desemboca en el Jarama." },
  { question: "¿En qué comunidad autónoma está la ciudad de Bilbao?", options: ["Cantabria", "Navarra", "el País Vasco", "Asturias"], correctIndex: 2, explanation: "Bilbao es la ciudad más poblada del País Vasco." },
  { question: "¿Qué mar baña el norte de España?", options: ["el Mediterráneo", "el Caribe", "el Báltico", "el Cantábrico"], correctIndex: 3, explanation: "El mar Cantábrico baña Galicia, Asturias, Cantabria y el País Vasco." },
];

// Geografía del mundo para la ESO: los récords del planeta y los conceptos
// que se piden en el examen.
const eso: Pregunta[] = [
  { question: "¿Cuál es el río más caudaloso del mundo?", options: ["el Amazonas", "el Nilo", "el Misisipi", "el Yangtsé"], correctIndex: 0, explanation: "El Amazonas lleva más agua que los diez siguientes juntos." },
  { question: "¿Cuál es el océano más extenso?", options: ["el Atlántico", "el Pacífico", "el Índico", "el Ártico"], correctIndex: 1, explanation: "El Pacífico ocupa él solo un tercio de la superficie del planeta." },
  { question: "¿Cuál es la montaña más alta del mundo?", options: ["el K2", "el Mont Blanc", "el Everest", "el Aconcagua"], correctIndex: 2, explanation: "El Everest, en el Himalaya, mide 8.849 metros." },
  { question: "¿Cuál es el desierto cálido más grande del mundo?", options: ["el Gobi", "el de Kalahari", "el de Atacama", "el Sáhara"], correctIndex: 3, explanation: "El Sáhara ocupa el norte de África, casi como Estados Unidos." },
  { question: "¿Qué continente tiene más población?", options: ["Asia", "África", "Europa", "América"], correctIndex: 0, explanation: "En Asia vive más de la mitad de la humanidad." },
  { question: "¿Cuál es el país más extenso del mundo?", options: ["Canadá", "Rusia", "China", "Estados Unidos"], correctIndex: 1, explanation: "Rusia ocupa once husos horarios, de Europa al Pacífico." },
  { question: "¿Qué cordillera recorre América del Sur de norte a sur?", options: ["las Rocosas", "el Himalaya", "los Andes", "los Apalaches"], correctIndex: 2, explanation: "Los Andes son la cordillera más larga del mundo: unos 7.000 km." },
  { question: "¿Cuál es la capital de Portugal?", options: ["Oporto", "Braga", "Coímbra", "Lisboa"], correctIndex: 3, explanation: "Lisboa está junto a la desembocadura del Tajo." },
  { question: "¿Qué es un istmo?", options: ["una franja estrecha de tierra que une dos zonas mayores", "un brazo de mar entre dos islas", "una montaña submarina", "un río subterráneo"], correctIndex: 0, explanation: "El istmo de Panamá une América del Norte con América del Sur." },
  { question: "¿Qué clima predomina en la costa mediterránea española?", options: ["oceánico", "mediterráneo", "continental", "subtropical"], correctIndex: 1, explanation: "Veranos secos y calurosos e inviernos suaves, con lluvias en otoño." },
  { question: "¿Qué canal une el mar Mediterráneo con el mar Rojo?", options: ["el canal de Panamá", "el canal de la Mancha", "el canal de Suez", "el canal de Corinto"], correctIndex: 2, explanation: "El de Suez, en Egipto, ahorra rodear toda África." },
  { question: "¿Cuál es el país más poblado del mundo?", options: ["China", "Indonesia", "Estados Unidos", "la India"], correctIndex: 3, explanation: "La India superó a China en 2023: rondan los 1.400 millones cada uno." },
  { question: "¿Cuál es el río más largo de Europa?", options: ["el Volga", "el Danubio", "el Rin", "el Sena"], correctIndex: 0, explanation: "El Volga, en Rusia, mide unos 3.500 km y desemboca en el mar Caspio." },
  { question: "¿Qué país ocupa una franja larga y estrecha junto al Pacífico, en América del Sur?", options: ["Argentina", "Chile", "Paraguay", "Brasil"], correctIndex: 1, explanation: "Chile mide más de 4.000 km de norte a sur y menos de 200 de ancho." },
  { question: "¿Qué línea imaginaria marca los 0° de longitud?", options: ["el ecuador", "el trópico de Capricornio", "el meridiano de Greenwich", "el círculo polar ártico"], correctIndex: 2, explanation: "El meridiano de Greenwich pasa por Londres... y también por Castellón." },
  { question: "¿Qué es la latitud de un lugar?", options: ["la distancia al meridiano de Greenwich", "la altura sobre el nivel del mar", "la temperatura media", "la distancia al ecuador, medida en grados"], correctIndex: 3, explanation: "La latitud va de 0° en el ecuador a 90° en los polos." },
  { question: "¿Qué clima tiene calor y lluvias todo el año, como la selva del Amazonas?", options: ["el ecuatorial", "el mediterráneo", "el polar", "el desértico"], correctIndex: 0, explanation: "Cerca del ecuador hace calor y llueve casi a diario." },
  { question: "¿Cuál es la capital de Japón?", options: ["Pekín", "Tokio", "Seúl", "Osaka"], correctIndex: 1, explanation: "Tokio es además una de las ciudades más pobladas del mundo." },
  { question: "¿Qué es un delta?", options: ["un tipo de montaña", "una isla volcánica", "una llanura que forma un río en su desembocadura con sus sedimentos", "un glaciar"], correctIndex: 2, explanation: "El delta del Ebro es el mayor de la península." },
  { question: "¿Qué país de la Unión Europea tiene más habitantes?", options: ["Francia", "Italia", "España", "Alemania"], correctIndex: 3, explanation: "Alemania supera los 80 millones de habitantes." },
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
