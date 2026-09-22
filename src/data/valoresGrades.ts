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

// En Primaria esta materia se cursa en el último ciclo (5.º o 6.º) y en la ESO
// solo en 4.º, así que no tiene un juego por cada curso.
const grades: GradeDefinition[] = [
  {
    id: "w5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🤝 5º Primaria superado",
    questions: [
      { question: "¿Qué son los derechos de la infancia?", options: ["premios que se ganan por portarse bien", "derechos que tienen todos los niños y niñas por serlo", "normas del colegio", "obligaciones de los padres solamente"], correctIndex: 1, explanation: "No hay que merecerlos: se tienen siempre." },
      { question: "¿Qué es la empatía?", options: ["ponerse en el lugar de otra persona", "tener muchos amigos", "dar siempre la razón", "no discutir nunca"], correctIndex: 0, explanation: "Es entender lo que siente el otro, aunque no te pase a ti." },
      { question: "¿Qué hay que hacer si vemos que acosan a un compañero?", options: ["reírle la gracia al que acosa", "contarlo a un adulto y no seguirle el juego", "grabarlo con el móvil", "no mirar y olvidarlo"], correctIndex: 1, explanation: "Callar deja solo a quien lo sufre; contarlo no es chivarse." },
      { question: "¿Qué significa la igualdad?", options: ["que todos seamos iguales físicamente", "que todas las personas tengan los mismos derechos y oportunidades", "que todos pensemos lo mismo", "que todos tengamos lo mismo"], correctIndex: 1, explanation: "Ser distintos y tener los mismos derechos no se contradice." },
      { question: "¿Cuál es la mejor forma de resolver un conflicto?", options: ["hablando y escuchando a la otra parte", "gritando más fuerte", "dejando de hablarse", "pidiendo a otro que lo haga por ti"], correctIndex: 0, explanation: "El diálogo busca una salida en la que nadie quede humillado." },
      { question: "¿Para qué sirven las normas de convivencia?", options: ["para castigar a los alumnos", "para que podamos convivir respetándonos", "para que mande el profesor", "para hacer más difícil la clase"], correctIndex: 1, explanation: "Son acuerdos que protegen a todos, no castigos." },
      { question: "¿Qué significa respetar una opinión distinta a la tuya?", options: ["escucharla aunque no la compartas", "fingir que estás de acuerdo", "cambiar de tema", "convencer a la otra persona como sea"], correctIndex: 0, explanation: "Respetar no es estar de acuerdo, es escuchar y no despreciar." },
      { question: "¿En qué contenedor se tira el papel y el cartón?", options: ["el amarillo", "el azul", "el verde", "el marrón"], correctIndex: 1, explanation: "Azul para papel, amarillo para envases y verde para vidrio." },
      { question: "¿Qué es ser responsable?", options: ["cumplir lo que te toca y asumir las consecuencias", "hacer siempre lo que dicen los demás", "no equivocarse nunca", "ser el primero en todo"], correctIndex: 0, explanation: "Incluye reconocer los errores y repararlos." },
      { question: "¿Qué es la solidaridad?", options: ["apoyar a quien lo necesita", "compartir solo con los amigos", "dar dinero una vez al año", "ganar siempre en equipo"], correctIndex: 0, explanation: "Va más allá de la amistad: se es solidario también con desconocidos." },
    ],
  },
  {
    id: "w6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🤝 6º Primaria superado",
    questions: [
      { question: "¿Qué es la Constitución española?", options: ["la ley más importante del país", "una ley del colegio", "un tratado con Europa", "una norma de tráfico"], correctIndex: 0, explanation: "Todas las demás leyes tienen que respetarla." },
      { question: "¿En qué año se aprobó la Constitución española?", options: ["1931", "1975", "1978", "1986"], correctIndex: 2, explanation: "Se votó en referéndum el 6 de diciembre de 1978." },
      { question: "¿Qué es la democracia?", options: ["un sistema en el que el pueblo elige a sus representantes", "el gobierno de una sola persona", "un partido político", "una ley europea"], correctIndex: 0, explanation: "El poder reside en la ciudadanía, que vota cada cierto tiempo." },
      { question: "¿Qué son los derechos humanos?", options: ["derechos que tienen todas las personas por el hecho de serlo", "derechos solo de los adultos", "derechos que se compran", "normas de cada país"], correctIndex: 0, explanation: "Son universales: valen para cualquier persona en cualquier lugar." },
      { question: "¿Qué es la discriminación?", options: ["tratar peor a alguien por su origen, su sexo, su religión o su aspecto", "tener opiniones distintas", "elegir a tus amigos", "sacar peores notas"], correctIndex: 0, explanation: "Discriminar es negar a alguien un trato igual sin motivo justo." },
      { question: "¿Qué es el voluntariado?", options: ["ayudar a los demás sin cobrar por ello", "un trabajo con sueldo", "una obligación del colegio", "una asignatura"], correctIndex: 0, explanation: "Se hace libremente y en beneficio de la comunidad." },
      { question: "¿Qué es el consumo responsable?", options: ["comprar solo lo necesario y pensando en su impacto", "comprar siempre lo más barato", "comprar lo que anuncian en la tele", "no comprar nunca nada"], correctIndex: 0, explanation: "Tiene en cuenta cómo se ha fabricado y qué residuos deja." },
      { question: "¿Qué es la huella ecológica?", options: ["la marca que deja nuestra forma de vivir en el planeta", "una huella de animal", "un tipo de contenedor", "una señal de montaña"], correctIndex: 0, explanation: "Mide los recursos que gastamos para mantener nuestro modo de vida." },
      { question: "¿Qué conviene hacer ante un mensaje de odio en redes sociales?", options: ["no difundirlo y denunciarlo", "reenviarlo para que se vea", "responder con otro insulto", "hacer una captura y reírse"], correctIndex: 0, explanation: "Compartirlo lo amplifica, aunque sea para criticarlo." },
      { question: "¿Qué significa que cada derecho lleve asociado un deber?", options: ["que al ejercerlo hay que respetar los derechos de los demás", "que hay que pagar por él", "que solo lo tienen los adultos", "que se pierde si no se usa"], correctIndex: 0, explanation: "Mi libertad termina donde empiezan los derechos de otra persona." },
    ],
  },
  {
    id: "w4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🤝 4º ESO superado",
    questions: [
      { question: "¿De qué se ocupa la ética?", options: ["de reflexionar sobre lo que está bien y lo que está mal", "de estudiar las leyes de cada país", "de las costumbres antiguas", "de la religión"], correctIndex: 0, explanation: "La ética examina los criterios con los que juzgamos las acciones." },
      { question: "¿Cuál es la diferencia entre moral y ética?", options: ["la moral son las normas de un grupo y la ética reflexiona sobre ellas", "son exactamente lo mismo", "la ética es religiosa y la moral no", "la moral solo existe en las leyes"], correctIndex: 0, explanation: "La ética se pregunta por qué una norma moral está o no justificada." },
      { question: "¿Qué es la dignidad humana?", options: ["el valor que tiene toda persona por el hecho de serlo", "el prestigio que se gana trabajando", "el dinero que alguien posee", "el respeto que da un cargo"], correctIndex: 0, explanation: "No depende del mérito ni de la situación: no se pierde." },
      { question: "¿Qué se aprobó en 1948 tras la Segunda Guerra Mundial?", options: ["la Declaración Universal de los Derechos Humanos", "la Constitución española", "el Tratado de Roma", "la Carta Magna"], correctIndex: 0, explanation: "La proclamó la Asamblea General de las Naciones Unidas." },
      { question: "¿Qué significa vivir en un Estado de derecho?", options: ["que todos, también quien gobierna, están sometidos a la ley", "que hay muchas leyes", "que el gobierno cambia la ley cuando quiere", "que solo mandan los jueces"], correctIndex: 0, explanation: "Nadie está por encima de la ley." },
      { question: "¿Qué son los ODS?", options: ["los Objetivos de Desarrollo Sostenible de la Agenda 2030", "unas siglas de la Unión Europea", "un tipo de impuesto", "una organización militar"], correctIndex: 0, explanation: "Son 17 objetivos acordados en la ONU para 2030." },
      { question: "¿Qué es la brecha digital?", options: ["la desigualdad en el acceso y el uso de la tecnología", "un fallo de seguridad informática", "la diferencia entre móviles caros y baratos", "una avería de la red"], correctIndex: 0, explanation: "Deja fuera a quien no tiene medios o formación para usarla." },
      { question: "¿Qué límite tiene la libertad de expresión?", options: ["los derechos de las demás personas, como el honor o la no discriminación", "no tiene ningún límite", "solo se puede opinar de política", "hay que pedir permiso para opinar"], correctIndex: 0, explanation: "El discurso de odio y la calumnia no están amparados." },
      { question: "¿Qué es la desinformación?", options: ["información falsa que se difunde como si fuera verdadera", "no leer las noticias", "un error de imprenta", "una noticia antigua"], correctIndex: 0, explanation: "Se difunde a propósito para confundir o manipular." },
      { question: "¿Qué es la violencia de género?", options: ["la ejercida contra las mujeres por el hecho de serlo", "cualquier pelea entre dos personas", "solo la violencia física", "una discusión familiar"], correctIndex: 0, explanation: "Incluye la violencia física, psicológica, sexual y económica." },
      { question: "¿En qué consiste el pensamiento crítico?", options: ["analizar y contrastar la información antes de aceptarla", "criticar todo lo que dicen los demás", "desconfiar de todo el mundo", "repetir la opinión de un experto"], correctIndex: 0, explanation: "Preguntarse quién lo dice, con qué pruebas y con qué intención." },
      { question: "¿Qué es la corresponsabilidad en el hogar?", options: ["repartir las tareas domésticas y los cuidados entre todos", "que cada uno recoja su cuarto", "que trabajen fuera los adultos", "contratar a alguien que lo haga"], correctIndex: 0, explanation: "Reparte por igual un trabajo que históricamente han hecho las mujeres." },
    ],
  },
];

export const valoresGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "valores" as const,
    stage: grade.stage,
    topic: grade.title,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const valoresGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `valores-${grade.id}`,
  type: "mission",
  subjectId: "valores",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Valores · ${grade.title}`,
  narrative: `Repasa Valores Cívicos y Éticos de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-valores-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
