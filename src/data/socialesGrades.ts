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
    id: "s1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🌍 1º Primaria superado",
    questions: [
      { question: "¿Quién cura a las personas enfermas?", options: ["El bombero", "El médico", "El cartero", "El panadero"], correctIndex: 1, explanation: "El médico cuida de nuestra salud." },
      { question: "¿Qué medio de transporte va por el aire?", options: ["El tren", "El barco", "El avión", "El autobús"], correctIndex: 2, explanation: "El avión viaja por el aire." },
      { question: "¿A dónde vamos a aprender?", options: ["Al colegio", "Al supermercado", "Al hospital", "A la playa"], correctIndex: 0, explanation: "En el colegio aprendemos." },
      { question: "¿Quién apaga los incendios?", options: ["El policía", "El bombero", "El profesor", "El médico"], correctIndex: 1, explanation: "Los bomberos apagan los incendios." },
      { question: "¿De qué color tiene que estar el semáforo de los peatones para cruzar?", options: ["Rojo", "Amarillo", "Verde", "Azul"], correctIndex: 2, explanation: "Cruzamos cuando el semáforo está en verde." },
      { question: "¿Quién es el padre de tu padre?", options: ["Tu tío", "Tu abuelo", "Tu primo", "Tu hermano"], correctIndex: 1, explanation: "El padre de tu padre es tu abuelo." },
      { question: "¿Qué medio de transporte va por el mar?", options: ["El barco", "La bicicleta", "El coche", "El helicóptero"], correctIndex: 0, explanation: "El barco navega por el mar." },
      { question: "¿Quién reparte las cartas?", options: ["El cartero", "El cocinero", "El pintor", "El granjero"], correctIndex: 0, explanation: "El cartero reparte el correo." },
    ],
  },
  {
    id: "s2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🌍 2º Primaria superado",
    questions: [
      { question: "¿Cuántos días tiene una semana?", options: ["5", "6", "7", "10"], correctIndex: 2, explanation: "La semana tiene 7 días." },
      { question: "¿Cuántos meses tiene un año?", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "El año tiene 12 meses." },
      { question: "Normalmente, ¿qué tiene más habitantes?", options: ["Un pueblo", "Una ciudad", "Una aldea", "Una granja"], correctIndex: 1, explanation: "Las ciudades suelen tener muchos más habitantes que los pueblos." },
      { question: "¿Por dónde deben cruzar la calle los peatones?", options: ["Por cualquier sitio", "Por el paso de cebra", "Por el centro de la calle", "Entre los coches"], correctIndex: 1, explanation: "Los peatones cruzan por el paso de cebra." },
      { question: "¿Qué mes va después de enero?", options: ["Marzo", "Febrero", "Diciembre", "Abril"], correctIndex: 1, explanation: "Después de enero viene febrero." },
      { question: "¿Dónde está un paisaje de costa?", options: ["En lo alto de una montaña", "Junto al mar", "En el desierto", "En el centro de una ciudad"], correctIndex: 1, explanation: "La costa es la zona que está junto al mar." },
      { question: "¿Quién dirige el ayuntamiento de un pueblo o ciudad?", options: ["El rey", "El alcalde o la alcaldesa", "El director del colegio", "El médico"], correctIndex: 1, explanation: "El alcalde o la alcaldesa dirige el ayuntamiento." },
      { question: "¿Qué día de la semana va después del viernes?", options: ["Jueves", "Domingo", "Sábado", "Lunes"], correctIndex: 2, explanation: "Después del viernes viene el sábado." },
    ],
  },
  {
    id: "s3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "🌍 3º Primaria superado",
    questions: [
      { question: "¿Cuántos puntos cardinales hay?", options: ["2", "3", "4", "6"], correctIndex: 2, explanation: "Norte, sur, este y oeste: 4 puntos cardinales." },
      { question: "¿Por qué punto cardinal sale el Sol?", options: ["Norte", "Sur", "Este", "Oeste"], correctIndex: 2, explanation: "El Sol sale por el este." },
      { question: "¿Qué es un río?", options: ["Una montaña con nieve", "Una corriente de agua que desemboca en el mar, en un lago o en otro río", "Agua salada quieta", "Un lago muy grande"], correctIndex: 1, explanation: "Un río es una corriente continua de agua." },
      { question: "¿Qué es una montaña?", options: ["Una gran elevación del terreno", "Un terreno llano", "Un río", "Un valle"], correctIndex: 0, explanation: "Una montaña es una gran elevación del terreno." },
      { question: "¿Qué es un mapa?", options: ["Una foto de una persona", "La representación de un lugar visto desde arriba y en pequeño", "Un libro de cuentos", "Un dibujo de animales"], correctIndex: 1, explanation: "Un mapa representa un territorio a escala, visto desde arriba." },
      { question: "¿Qué institución gobierna un municipio?", options: ["El ayuntamiento", "El colegio", "El hospital", "La biblioteca"], correctIndex: 0, explanation: "El ayuntamiento gobierna el municipio." },
      { question: "¿Qué es una isla?", options: ["Tierra rodeada de agua por todas partes", "Una montaña muy alta", "Un río muy largo", "Una ciudad grande"], correctIndex: 0, explanation: "Una isla está rodeada de agua por todas partes." },
      { question: "¿Por qué punto cardinal se pone el Sol?", options: ["Norte", "Sur", "Este", "Oeste"], correctIndex: 3, explanation: "El Sol se pone por el oeste." },
    ],
  },
  {
    id: "s4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🌍 4º Primaria superado",
    questions: [
      { question: "¿Cuántas comunidades autónomas tiene España?", options: ["15", "17", "19", "50"], correctIndex: 1, explanation: "España tiene 17 comunidades autónomas, además de Ceuta y Melilla." },
      { question: "¿Cuál es la capital de España?", options: ["Barcelona", "Sevilla", "Madrid", "Valencia"], correctIndex: 2, explanation: "Madrid es la capital de España." },
      { question: "¿Cómo se llama el periodo anterior a la invención de la escritura?", options: ["Edad Media", "Prehistoria", "Edad Moderna", "Edad Antigua"], correctIndex: 1, explanation: "La Prehistoria termina con la invención de la escritura." },
      { question: "¿Qué es una península?", options: ["Tierra rodeada de agua por todas partes", "Tierra rodeada de agua por todas partes menos por una", "Una montaña", "Un mar pequeño"], correctIndex: 1, explanation: "Una península está unida al continente por una parte, como la ibérica." },
      { question: "¿Cuál es el río más largo de la península ibérica?", options: ["El Ebro", "El Tajo", "El Duero", "El Guadalquivir"], correctIndex: 1, explanation: "El Tajo es el río más largo de la península ibérica." },
      { question: "¿En qué mar están las islas Baleares?", options: ["Mar Cantábrico", "Océano Atlántico", "Mar Mediterráneo", "Mar Rojo"], correctIndex: 2, explanation: "Las Baleares están en el mar Mediterráneo." },
      { question: "¿Qué océano baña la costa de Galicia?", options: ["El Atlántico", "El Pacífico", "El Índico", "El Ártico"], correctIndex: 0, explanation: "Galicia está bañada por el océano Atlántico." },
      { question: "¿Qué indica la escala de un mapa?", options: ["La temperatura", "La relación entre la distancia real y la del mapa", "La altura de las montañas", "El número de habitantes"], correctIndex: 1, explanation: "La escala indica cuántas veces se ha reducido la realidad." },
    ],
  },
  {
    id: "s5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🌍 5º Primaria superado",
    questions: [
      { question: "¿Cuál es la montaña más alta de España?", options: ["El Mulhacén", "El Teide", "El Aneto", "El Veleta"], correctIndex: 1, explanation: "El Teide, en Tenerife, mide unos 3.715 metros." },
      { question: "¿En qué año se aprobó la Constitución española actual?", options: ["1975", "1978", "1982", "1992"], correctIndex: 1, explanation: "La Constitución se aprobó en 1978." },
      { question: "¿Qué forma de gobierno tiene España?", options: ["República", "Monarquía parlamentaria", "Dictadura", "Monarquía absoluta"], correctIndex: 1, explanation: "España es una monarquía parlamentaria." },
      { question: "¿Qué cordillera separa España de Francia?", options: ["Los Pirineos", "Sierra Nevada", "Los Alpes", "El Sistema Central"], correctIndex: 0, explanation: "Los Pirineos forman la frontera con Francia." },
      { question: "¿Qué río pasa por Sevilla?", options: ["El Tajo", "El Ebro", "El Guadalquivir", "El Miño"], correctIndex: 2, explanation: "Sevilla está a orillas del Guadalquivir." },
      { question: "¿Qué etapa histórica empieza con la caída del Imperio romano de Occidente?", options: ["La Edad Media", "La Prehistoria", "La Edad Contemporánea", "La Edad Moderna"], correctIndex: 0, explanation: "La caída de Roma en el año 476 marca el inicio de la Edad Media." },
      { question: "¿Qué gran llanura elevada ocupa el centro de la península?", options: ["La Meseta Central", "El valle del Ebro", "La depresión del Guadalquivir", "Los Pirineos"], correctIndex: 0, explanation: "La Meseta Central ocupa el centro peninsular." },
      { question: "¿Qué institución elabora y aprueba las leyes en España?", options: ["El Gobierno", "Las Cortes Generales", "Los ayuntamientos", "El Tribunal Supremo"], correctIndex: 1, explanation: "Las Cortes Generales (Congreso y Senado) tienen el poder legislativo." },
    ],
  },
  {
    id: "s6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🌍 6º Primaria superado",
    questions: [
      { question: "¿En qué año llegó Colón a América?", options: ["1392", "1492", "1592", "1512"], correctIndex: 1, explanation: "Cristóbal Colón llegó a América en 1492." },
      { question: "¿Cuál es el continente más grande?", options: ["África", "América", "Asia", "Europa"], correctIndex: 2, explanation: "Asia es el continente más grande y más poblado." },
      { question: "¿Qué moneda se usa en España?", options: ["La peseta", "El euro", "El dólar", "La libra"], correctIndex: 1, explanation: "Desde 2002 en España se usa el euro." },
      { question: "¿En qué año entró España en la Comunidad Económica Europea?", options: ["1978", "1986", "1992", "2002"], correctIndex: 1, explanation: "España ingresó en 1986, junto con Portugal." },
      { question: "¿Qué es la Unión Europea?", options: ["Un país de Europa", "Una asociación de países europeos que cooperan en economía y política", "Un equipo de fútbol", "Una empresa"], correctIndex: 1, explanation: "La UE reúne a países europeos que comparten normas, mercado y, muchos, moneda." },
      { question: "¿Cuál es el océano más grande del planeta?", options: ["El Atlántico", "El Índico", "El Pacífico", "El Ártico"], correctIndex: 2, explanation: "El Pacífico es el océano más extenso." },
      { question: "¿Qué etapa histórica viene después de la Edad Media?", options: ["La Prehistoria", "La Edad Antigua", "La Edad Moderna", "La Edad del Bronce"], correctIndex: 2, explanation: "Tras la Edad Media llega la Edad Moderna." },
      { question: "¿Quiénes fueron los Reyes Católicos?", options: ["Felipe II y Carlos I", "Isabel I de Castilla y Fernando II de Aragón", "Alfonso X y Jaime I", "Juan Carlos I y Sofía"], correctIndex: 1, explanation: "Isabel y Fernando unieron las coronas de Castilla y Aragón." },
    ],
  },
  {
    id: "s1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🏛️ 1º ESO superado",
    questions: [
      { question: "¿En qué periodo de la Prehistoria aparecen la agricultura y la ganadería?", options: ["Paleolítico", "Neolítico", "Edad de los Metales", "Edad Media"], correctIndex: 1, explanation: "En el Neolítico el ser humano empieza a cultivar y criar animales." },
      { question: "¿Qué río fue fundamental para la civilización egipcia?", options: ["El Tigris", "El Nilo", "El Éufrates", "El Danubio"], correctIndex: 1, explanation: "Las crecidas del Nilo hacían fértiles las tierras de Egipto." },
      { question: "¿Qué forma de gobierno surgió en la antigua Atenas?", options: ["La monarquía absoluta", "La democracia", "El feudalismo", "El imperio"], correctIndex: 1, explanation: "La democracia nació en Atenas en el siglo V a. C." },
      { question: "¿En qué región surgió la escritura cuneiforme?", options: ["Egipto", "Grecia", "Mesopotamia", "Roma"], correctIndex: 2, explanation: "La escritura cuneiforme nació en Mesopotamia." },
      { question: "¿Cómo llamaban los romanos a la península ibérica?", options: ["Galia", "Hispania", "Iberia Magna", "Lusitania"], correctIndex: 1, explanation: "Los romanos la llamaron Hispania." },
      { question: "¿Qué eran las pirámides de Egipto?", options: ["Palacios", "Tumbas de faraones", "Templos griegos", "Murallas"], correctIndex: 1, explanation: "Las pirámides eran monumentos funerarios de los faraones." },
      { question: "¿Qué dos coordenadas sirven para localizar un punto en la Tierra?", options: ["Altura y anchura", "Latitud y longitud", "Norte y sur", "Escala y leyenda"], correctIndex: 1, explanation: "La latitud y la longitud son las coordenadas geográficas." },
      { question: "¿Qué lengua hablaban los antiguos romanos?", options: ["El griego", "El latín", "El árabe", "El castellano"], correctIndex: 1, explanation: "Los romanos hablaban latín, origen del castellano." },
    ],
  },
  {
    id: "s2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🏛️ 2º ESO superado",
    questions: [
      { question: "¿En qué año comenzó la conquista musulmana de la península ibérica?", options: ["476", "711", "1085", "1492"], correctIndex: 1, explanation: "En el año 711 los musulmanes cruzaron el estrecho." },
      { question: "¿Cómo se llamó el territorio de la península bajo dominio musulmán?", options: ["Hispania", "Al-Ándalus", "Castilla", "Aragón"], correctIndex: 1, explanation: "Se llamó Al-Ándalus." },
      { question: "¿En qué año terminó la Reconquista con la toma de Granada?", options: ["1212", "1492", "1512", "1609"], correctIndex: 1, explanation: "Los Reyes Católicos tomaron Granada en 1492." },
      { question: "¿En qué se basaba el feudalismo?", options: ["En elecciones democráticas", "En relaciones de vasallaje entre señores y vasallos", "En el comercio con América", "En la industria"], correctIndex: 1, explanation: "El feudalismo se basaba en la fidelidad del vasallo a cambio de protección y tierras." },
      { question: "¿Qué estilo artístico usa arcos de medio punto y muros muy gruesos?", options: ["El gótico", "El románico", "El barroco", "El renacentista"], correctIndex: 1, explanation: "El románico tiene arcos de medio punto y muros gruesos con pocas ventanas." },
      { question: "¿Qué estilo artístico usa arcos apuntados y grandes vidrieras?", options: ["El gótico", "El románico", "El neoclásico", "El mudéjar"], correctIndex: 0, explanation: "El gótico busca altura y luz con arcos apuntados y vidrieras." },
      { question: "¿Qué mide la tasa de natalidad?", options: ["Las muertes por cada mil habitantes", "Los nacimientos por cada mil habitantes", "La edad media de la población", "Los emigrantes"], correctIndex: 1, explanation: "La tasa de natalidad mide los nacimientos por cada mil habitantes en un año." },
      { question: "¿Quién fundó el islam?", options: ["Mahoma", "Abderramán III", "Almanzor", "Averroes"], correctIndex: 0, explanation: "El islam fue fundado por Mahoma en el siglo VII." },
    ],
  },
  {
    id: "s3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🏛️ 3º ESO superado",
    questions: [
      { question: "¿A qué sector económico pertenece la agricultura?", options: ["Primario", "Secundario", "Terciario", "Cuaternario"], correctIndex: 0, explanation: "El sector primario obtiene recursos de la naturaleza." },
      { question: "¿A qué sector económico pertenece la industria?", options: ["Primario", "Secundario", "Terciario", "Ninguno"], correctIndex: 1, explanation: "El sector secundario transforma materias primas." },
      { question: "¿A qué sector económico pertenece el turismo?", options: ["Primario", "Secundario", "Terciario", "Industrial"], correctIndex: 2, explanation: "El turismo es un servicio: sector terciario." },
      { question: "¿Qué movimiento cultural de los siglos XV y XVI recuperó la cultura clásica?", options: ["El Renacimiento", "El Romanticismo", "El Barroco", "La Ilustración"], correctIndex: 0, explanation: "El Renacimiento se inspiró en la Antigüedad grecorromana." },
      { question: "¿Quién inició la Reforma protestante?", options: ["Calvino", "Martín Lutero", "Carlos V", "Erasmo"], correctIndex: 1, explanation: "Lutero inició la Reforma en 1517." },
      { question: "¿Quién pintó \"Las Meninas\"?", options: ["Goya", "Velázquez", "El Greco", "Murillo"], correctIndex: 1, explanation: "Las Meninas es una obra de Diego Velázquez." },
      { question: "¿Qué es la globalización?", options: ["El aislamiento de los países", "La creciente interdependencia económica y cultural entre países", "Un tipo de clima", "Una forma de gobierno"], correctIndex: 1, explanation: "La globalización conecta economías y culturas a escala mundial." },
      { question: "¿Qué dinastía reinó en España durante los siglos XVI y XVII?", options: ["Los Borbones", "Los Austrias", "Los Trastámara", "Los Omeyas"], correctIndex: 1, explanation: "Los Austrias reinaron desde Carlos I hasta Carlos II." },
    ],
  },
  {
    id: "s4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🏛️ 4º ESO superado",
    questions: [
      { question: "¿En qué año comenzó la Revolución Francesa?", options: ["1776", "1789", "1808", "1848"], correctIndex: 1, explanation: "Comenzó en 1789 con la toma de la Bastilla." },
      { question: "¿En qué país comenzó la Revolución Industrial?", options: ["Francia", "Alemania", "Gran Bretaña", "España"], correctIndex: 2, explanation: "La Revolución Industrial empezó en Gran Bretaña en el siglo XVIII." },
      { question: "¿Qué invento fue clave en la Revolución Industrial?", options: ["El ordenador", "La máquina de vapor", "El avión", "La radio"], correctIndex: 1, explanation: "La máquina de vapor impulsó fábricas, trenes y barcos." },
      { question: "¿En qué año comenzó la Primera Guerra Mundial?", options: ["1904", "1914", "1918", "1939"], correctIndex: 1, explanation: "La Primera Guerra Mundial empezó en 1914." },
      { question: "¿En qué año terminó la Segunda Guerra Mundial?", options: ["1939", "1942", "1945", "1950"], correctIndex: 2, explanation: "La Segunda Guerra Mundial terminó en 1945." },
      { question: "¿Entre qué años tuvo lugar la Guerra Civil española?", options: ["1914-1918", "1931-1936", "1936-1939", "1939-1975"], correctIndex: 2, explanation: "La Guerra Civil duró de 1936 a 1939." },
      { question: "¿Cómo se llama el proceso que llevó a España a la democracia tras la muerte de Franco?", options: ["La Reconquista", "La Transición", "La Ilustración", "La Restauración"], correctIndex: 1, explanation: "La Transición culminó con la Constitución de 1978." },
      { question: "¿Qué fue la Guerra Fría?", options: ["Una guerra en el Polo Norte", "El enfrentamiento entre EE. UU. y la URSS sin guerra directa entre ellos", "Una guerra medieval", "La Primera Guerra Mundial"], correctIndex: 1, explanation: "Fue una rivalidad política, militar e ideológica entre dos bloques." },
    ],
  },
];

/**
 * In Primaria the social part belongs to Conocimiento del Medio; in ESO it is
 * its own subject, Geografía e Historia.
 */
function subjectFor(stage: Stage) {
  return stage === "eso" ? ("geografia_historia" as const) : ("conocimiento_medio" as const);
}

export const socialesGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
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

export const socialesGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `sociales-${grade.id}`,
  type: "mission",
  subjectId: subjectFor(grade.stage),
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `${grade.stage === "eso" ? "Geografía e Historia" : "Medio social"} · ${grade.title}`,
  narrative: `Repasa ciencias sociales de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-sociales-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
