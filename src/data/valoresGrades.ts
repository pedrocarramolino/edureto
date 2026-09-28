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
      { tema: "Derechos y ciudadanía", question: "¿Qué son los derechos de la infancia?", options: ["premios que se ganan por portarse bien", "derechos que tienen todos los niños y niñas por serlo", "normas del colegio", "obligaciones de los padres solamente"], correctIndex: 1, explanation: "No hay que merecerlos: se tienen siempre." },
      { tema: "Convivencia y respeto", question: "¿Qué es la empatía?", options: ["ponerse en el lugar de otra persona", "tener muchos amigos", "dar siempre la razón", "no discutir nunca"], correctIndex: 0, explanation: "Es entender lo que siente el otro, aunque no te pase a ti." },
      { tema: "Convivencia y respeto", question: "¿Qué hay que hacer si vemos que acosan a un compañero?", options: ["reírle la gracia al que acosa", "contarlo a un adulto y no seguirle el juego", "grabarlo con el móvil", "no mirar y olvidarlo"], correctIndex: 1, explanation: "Callar deja solo a quien lo sufre; contarlo no es chivarse." },
      { tema: "Convivencia y respeto", question: "¿Qué significa la igualdad?", options: ["que todos seamos iguales físicamente", "que todas las personas tengan los mismos derechos y oportunidades", "que todos pensemos lo mismo", "que todos tengamos lo mismo"], correctIndex: 1, explanation: "Ser distintos y tener los mismos derechos no se contradice." },
      { tema: "Convivencia y respeto", question: "¿Cuál es la mejor forma de resolver un conflicto?", options: ["hablando y escuchando a la otra parte", "gritando más fuerte", "dejando de hablarse", "pidiendo a otro que lo haga por ti"], correctIndex: 0, explanation: "El diálogo busca una salida en la que nadie quede humillado." },
      { tema: "Convivencia y respeto", question: "¿Para qué sirven las normas de convivencia?", options: ["para castigar a los alumnos", "para que podamos convivir respetándonos", "para que mande el profesor", "para hacer más difícil la clase"], correctIndex: 1, explanation: "Son acuerdos que protegen a todos, no castigos." },
      { tema: "Convivencia y respeto", question: "¿Qué significa respetar una opinión distinta a la tuya?", options: ["escucharla aunque no la compartas", "fingir que estás de acuerdo", "cambiar de tema", "convencer a la otra persona como sea"], correctIndex: 0, explanation: "Respetar no es estar de acuerdo, es escuchar y no despreciar." },
      { tema: "Medio ambiente y consumo", question: "¿En qué contenedor se tira el papel y el cartón?", options: ["el amarillo", "el azul", "el verde", "el marrón"], correctIndex: 1, explanation: "Azul para papel, amarillo para envases y verde para vidrio." },
      { tema: "Convivencia y respeto", question: "¿Qué es ser responsable?", options: ["cumplir lo que te toca y asumir las consecuencias", "hacer siempre lo que dicen los demás", "no equivocarse nunca", "ser el primero en todo"], correctIndex: 0, explanation: "Incluye reconocer los errores y repararlos." },
      { tema: "Convivencia y respeto", question: "¿Qué es la solidaridad?", options: ["apoyar a quien lo necesita", "compartir solo con los amigos", "dar dinero una vez al año", "ganar siempre en equipo"], correctIndex: 0, explanation: "Va más allá de la amistad: se es solidario también con desconocidos." },
      { tema: "Derechos y ciudadanía", question: "¿Qué documento recoge los derechos de todos los niños del mundo?", options: ["el Código Penal", "la Convención sobre los Derechos del Niño", "el reglamento del colegio", "el horario escolar"], correctIndex: 1, explanation: "La aprobó la ONU en 1989 y casi todos los países la han firmado." },
      { tema: "Derechos y ciudadanía", question: "¿Cuál de estos es un derecho de todos los niños y niñas?", options: ["conducir", "votar", "jugar y descansar", "trabajar en una fábrica"], correctIndex: 2, explanation: "El juego y el descanso son derechos de la infancia." },
      { tema: "Derechos y ciudadanía", question: "¿Qué es un deber?", options: ["un regalo", "un juego", "un premio", "algo que tenemos la obligación de hacer"], correctIndex: 3, explanation: "Estudiar o respetar a los demás son deberes." },
      { tema: "Convivencia y respeto", question: "¿Qué es ser asertivo?", options: ["decir lo que piensas con respeto, sin agredir y sin callarte", "gritar para tener razón", "no hablar nunca", "hacer siempre lo que dicen los demás"], correctIndex: 0, explanation: "La asertividad ayuda a defender tus ideas sin hacer daño." },
      { tema: "Convivencia y respeto", question: "¿Qué es el ciberacoso?", options: ["jugar en línea con amigos", "molestar o humillar a alguien por internet o el móvil de forma repetida", "enviar felicitaciones", "buscar información"], correctIndex: 1, explanation: "Si lo sufres o lo ves, cuéntaselo a un adulto de confianza." },
      { tema: "Convivencia y respeto", question: "¿Qué podemos hacer si un compañero nuevo está solo en el patio?", options: ["reírnos de él", "ignorarlo", "invitarlo a jugar", "contar mentiras sobre él"], correctIndex: 2, explanation: "Un gesto amable ayuda a que se sienta parte del grupo." },
      { tema: "Convivencia y respeto", question: "¿Qué es la tolerancia?", options: ["hacer siempre lo que quieras", "no escuchar", "enfadarse", "respetar a las personas aunque piensen o sean diferentes"], correctIndex: 3, explanation: "Ser tolerante es aceptar la diversidad." },
      { tema: "Medio ambiente y consumo", question: "¿Qué podemos hacer para ahorrar energía en casa?", options: ["apagar las luces que no usamos", "dejar la tele encendida", "abrir la nevera muchas veces", "poner la calefacción con las ventanas abiertas"], correctIndex: 0, explanation: "Cada luz apagada ahorra energía y dinero." },
      { tema: "Medio ambiente y consumo", question: "¿Qué significa reutilizar?", options: ["comprar más", "volver a usar un objeto en lugar de tirarlo", "quemar la basura", "tirar todo al mismo contenedor"], correctIndex: 1, explanation: "Un bote de cristal puede servir de lapicero." },
      { tema: "Medio ambiente y consumo", question: "¿Por qué es mejor ir andando o en bici cuando se puede?", options: ["porque es más caro", "porque hace más ruido", "porque contamina menos y es sano", "porque gasta gasolina"], correctIndex: 2, explanation: "No contamina y además hacemos ejercicio." },
    ],
  },
  {
    id: "w6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🤝 6º Primaria superado",
    questions: [
      { tema: "Derechos y ciudadanía", question: "¿Qué es la Constitución española?", options: ["la ley más importante del país", "una ley del colegio", "un tratado con Europa", "una norma de tráfico"], correctIndex: 0, explanation: "Todas las demás leyes tienen que respetarla." },
      { tema: "Derechos y ciudadanía", question: "¿En qué año se aprobó la Constitución española?", options: ["1931", "1975", "1978", "1986"], correctIndex: 2, explanation: "Se votó en referéndum el 6 de diciembre de 1978." },
      { tema: "Derechos y ciudadanía", question: "¿Qué es la democracia?", options: ["un sistema en el que el pueblo elige a sus representantes", "el gobierno de una sola persona", "un partido político", "una ley europea"], correctIndex: 0, explanation: "El poder reside en la ciudadanía, que vota cada cierto tiempo." },
      { tema: "Derechos y ciudadanía", question: "¿Qué son los derechos humanos?", options: ["derechos que tienen todas las personas por el hecho de serlo", "derechos solo de los adultos", "derechos que se compran", "normas de cada país"], correctIndex: 0, explanation: "Son universales: valen para cualquier persona en cualquier lugar." },
      { tema: "Convivencia y respeto", question: "¿Qué es la discriminación?", options: ["tratar peor a alguien por su origen, su sexo, su religión o su aspecto", "tener opiniones distintas", "elegir a tus amigos", "sacar peores notas"], correctIndex: 0, explanation: "Discriminar es negar a alguien un trato igual sin motivo justo." },
      { tema: "Derechos y ciudadanía", question: "¿Qué es el voluntariado?", options: ["ayudar a los demás sin cobrar por ello", "un trabajo con sueldo", "una obligación del colegio", "una asignatura"], correctIndex: 0, explanation: "Se hace libremente y en beneficio de la comunidad." },
      { tema: "Medio ambiente y consumo", question: "¿Qué es el consumo responsable?", options: ["comprar solo lo necesario y pensando en su impacto", "comprar siempre lo más barato", "comprar lo que anuncian en la tele", "no comprar nunca nada"], correctIndex: 0, explanation: "Tiene en cuenta cómo se ha fabricado y qué residuos deja." },
      { tema: "Medio ambiente y consumo", question: "¿Qué es la huella ecológica?", options: ["la marca que deja nuestra forma de vivir en el planeta", "una huella de animal", "un tipo de contenedor", "una señal de montaña"], correctIndex: 0, explanation: "Mide los recursos que gastamos para mantener nuestro modo de vida." },
      { tema: "Vida digital", question: "¿Qué conviene hacer ante un mensaje de odio en redes sociales?", options: ["no difundirlo y denunciarlo", "reenviarlo para que se vea", "responder con otro insulto", "hacer una captura y reírse"], correctIndex: 0, explanation: "Compartirlo lo amplifica, aunque sea para criticarlo." },
      { tema: "Derechos y ciudadanía", question: "¿Qué significa que cada derecho lleve asociado un deber?", options: ["que al ejercerlo hay que respetar los derechos de los demás", "que hay que pagar por él", "que solo lo tienen los adultos", "que se pierde si no se usa"], correctIndex: 0, explanation: "Mi libertad termina donde empiezan los derechos de otra persona." },
      { tema: "Derechos y ciudadanía", question: "¿Qué institución aprueba las leyes de la Comunitat Valenciana?", options: ["el ayuntamiento", "Les Corts Valencianes", "el Senado", "la ONU"], correctIndex: 1, explanation: "Les Corts son el parlamento valenciano: los diputados los eligen los ciudadanos." },
      { tema: "Derechos y ciudadanía", question: "¿Qué significa la separación de poderes?", options: ["que el rey decide todo", "que no hay leyes", "que quien hace las leyes, quien gobierna y quien juzga son distintos", "que solo vota el gobierno"], correctIndex: 2, explanation: "Legislativo, ejecutivo y judicial se controlan entre sí." },
      { tema: "Derechos y ciudadanía", question: "¿Qué es una ONG?", options: ["un partido político", "una empresa", "un banco", "una organización sin ánimo de lucro que ayuda a los demás"], correctIndex: 3, explanation: "Cruz Roja o Médicos Sin Fronteras son ONG." },
      { tema: "Convivencia y respeto", question: "¿Qué es un estereotipo?", options: ["una idea fija y simplificada sobre un grupo de personas", "un tipo de música", "una ley", "un deporte"], correctIndex: 0, explanation: "\"A las chicas no les gusta el fútbol\" es un estereotipo." },
      { tema: "Convivencia y respeto", question: "¿Qué es la igualdad de género?", options: ["que todos se vistan igual", "que mujeres y hombres tengan los mismos derechos y oportunidades", "que solo trabajen los hombres", "que las chicas no hagan deporte"], correctIndex: 1, explanation: "Nadie debe tener menos oportunidades por ser chica o chico." },
      { tema: "Medio ambiente y consumo", question: "¿Qué es el comercio justo?", options: ["comprar lo más barato", "comprar solo en rebajas", "comprar pagando un precio digno a quien produce", "no comprar nunca"], correctIndex: 2, explanation: "Garantiza un sueldo digno y condiciones de trabajo justas." },
      { tema: "Medio ambiente y consumo", question: "¿Qué es un producto de kilómetro cero?", options: ["el que es gratis", "el que viene de muy lejos", "el que no tiene envase", "el que se produce cerca de donde se vende"], correctIndex: 3, explanation: "Como las naranjas valencianas compradas aquí: menos transporte, menos contaminación." },
      { tema: "Vida digital", question: "¿Qué información no debes compartir en internet?", options: ["tu dirección, tu teléfono o tus contraseñas", "tu color favorito", "tu libro favorito", "lo que te gusta dibujar"], correctIndex: 0, explanation: "Los datos personales pueden usarse para engañarte o hacerte daño." },
      { tema: "Vida digital", question: "¿Qué es un bulo?", options: ["un videojuego", "una noticia falsa que se difunde como si fuera cierta", "una red social", "un tipo de foto"], correctIndex: 1, explanation: "Antes de reenviar algo, comprueba si es verdad." },
      { tema: "Vida digital", question: "¿Qué es la netiqueta?", options: ["una marca de ropa", "una etiqueta de precio", "las normas de buena educación en internet", "un virus"], correctIndex: 2, explanation: "Por ejemplo: no escribir todo en mayúsculas, que parece que gritas." },
    ],
  },
  {
    id: "w4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🤝 4º ESO superado",
    questions: [
      { tema: "Ética", question: "¿De qué se ocupa la ética?", options: ["de reflexionar sobre lo que está bien y lo que está mal", "de estudiar las leyes de cada país", "de las costumbres antiguas", "de la religión"], correctIndex: 0, explanation: "La ética examina los criterios con los que juzgamos las acciones." },
      { tema: "Ética", question: "¿Cuál es la diferencia entre moral y ética?", options: ["la moral son las normas de un grupo y la ética reflexiona sobre ellas", "son exactamente lo mismo", "la ética es religiosa y la moral no", "la moral solo existe en las leyes"], correctIndex: 0, explanation: "La ética se pregunta por qué una norma moral está o no justificada." },
      { tema: "Ética", question: "¿Qué es la dignidad humana?", options: ["el valor que tiene toda persona por el hecho de serlo", "el prestigio que se gana trabajando", "el dinero que alguien posee", "el respeto que da un cargo"], correctIndex: 0, explanation: "No depende del mérito ni de la situación: no se pierde." },
      { tema: "Convivencia y respeto", question: "¿Qué se aprobó en 1948 tras la Segunda Guerra Mundial?", options: ["la Declaración Universal de los Derechos Humanos", "la Constitución española", "el Tratado de Roma", "la Carta Magna"], correctIndex: 0, explanation: "La proclamó la Asamblea General de las Naciones Unidas." },
      { tema: "Derechos y ciudadanía", question: "¿Qué significa vivir en un Estado de derecho?", options: ["que todos, también quien gobierna, están sometidos a la ley", "que hay muchas leyes", "que el gobierno cambia la ley cuando quiere", "que solo mandan los jueces"], correctIndex: 0, explanation: "Nadie está por encima de la ley." },
      { tema: "Medio ambiente y consumo", question: "¿Qué son los ODS?", options: ["los Objetivos de Desarrollo Sostenible de la Agenda 2030", "unas siglas de la Unión Europea", "un tipo de impuesto", "una organización militar"], correctIndex: 0, explanation: "Son 17 objetivos acordados en la ONU para 2030." },
      { tema: "Vida digital", question: "¿Qué es la brecha digital?", options: ["la desigualdad en el acceso y el uso de la tecnología", "un fallo de seguridad informática", "la diferencia entre móviles caros y baratos", "una avería de la red"], correctIndex: 0, explanation: "Deja fuera a quien no tiene medios o formación para usarla." },
      { tema: "Derechos y ciudadanía", question: "¿Qué límite tiene la libertad de expresión?", options: ["los derechos de las demás personas, como el honor o la no discriminación", "no tiene ningún límite", "solo se puede opinar de política", "hay que pedir permiso para opinar"], correctIndex: 0, explanation: "El discurso de odio y la calumnia no están amparados." },
      { tema: "Vida digital", question: "¿Qué es la desinformación?", options: ["información falsa que se difunde como si fuera verdadera", "no leer las noticias", "un error de imprenta", "una noticia antigua"], correctIndex: 0, explanation: "Se difunde a propósito para confundir o manipular." },
      { tema: "Convivencia y respeto", question: "¿Qué es la violencia de género?", options: ["la ejercida contra las mujeres por el hecho de serlo", "cualquier pelea entre dos personas", "solo la violencia física", "una discusión familiar"], correctIndex: 0, explanation: "Incluye la violencia física, psicológica, sexual y económica." },
      { tema: "Vida digital", question: "¿En qué consiste el pensamiento crítico?", options: ["analizar y contrastar la información antes de aceptarla", "criticar todo lo que dicen los demás", "desconfiar de todo el mundo", "repetir la opinión de un experto"], correctIndex: 0, explanation: "Preguntarse quién lo dice, con qué pruebas y con qué intención." },
      { tema: "Convivencia y respeto", question: "¿Qué es la corresponsabilidad en el hogar?", options: ["repartir las tareas domésticas y los cuidados entre todos", "que cada uno recoja su cuarto", "que trabajen fuera los adultos", "contratar a alguien que lo haga"], correctIndex: 0, explanation: "Reparte por igual un trabajo que históricamente han hecho las mujeres." },
      { tema: "Ética", question: "¿Qué es un dilema moral?", options: ["un problema de matemáticas", "una situación en la que hay que elegir entre valores que chocan", "una ley", "un juego"], correctIndex: 1, explanation: "¿Decir la verdad y hacer daño, o callar para proteger a alguien?" },
      { tema: "Ética", question: "¿Qué es la autonomía moral?", options: ["obedecer siempre por miedo al castigo", "hacer lo que hace la mayoría", "decidir según normas que uno mismo entiende y asume", "no tener normas"], correctIndex: 2, explanation: "Se actúa bien por convicción, no por miedo ni por presión." },
      { tema: "Ética", question: "¿A qué filósofo griego se atribuye la frase \"Solo sé que no sé nada\"?", options: ["Aristóteles", "Platón", "Pitágoras", "Sócrates"], correctIndex: 3, explanation: "Sócrates defendía reconocer la propia ignorancia para empezar a pensar." },
      { tema: "Convivencia y respeto", question: "¿Qué es la mediación en un conflicto?", options: ["la ayuda de una persona neutral para que las partes lleguen a un acuerdo", "castigar a los dos", "ignorar el problema", "dar la razón al más fuerte"], correctIndex: 0, explanation: "Muchos institutos tienen alumnado mediador." },
      { tema: "Derechos y ciudadanía", question: "¿Qué es la ciudadanía?", options: ["tener mucho dinero", "pertenecer a una comunidad política, con derechos y deberes", "vivir en una ciudad grande", "ser mayor de edad"], correctIndex: 1, explanation: "Ser ciudadano es participar en la vida común." },
      { tema: "Derechos y ciudadanía", question: "¿Qué es el sufragio universal?", options: ["el voto solo de los ricos", "el voto solo de los hombres", "el derecho de todas las personas adultas a votar", "la elección del rey"], correctIndex: 2, explanation: "En España las mujeres votaron por primera vez en unas elecciones generales en 1933." },
      { tema: "Medio ambiente y consumo", question: "¿Qué es la economía circular?", options: ["comprar y tirar", "producir sin límite", "una moneda nueva", "reutilizar y reciclar los recursos para no generar residuos"], correctIndex: 3, explanation: "Lo que antes era basura se convierte en materia prima." },
      { tema: "Vida digital", question: "¿Qué es el derecho al olvido en internet?", options: ["pedir que se borren datos personales que ya no son pertinentes", "olvidar las contraseñas", "no usar internet", "borrar los juegos"], correctIndex: 0, explanation: "Se puede pedir a los buscadores que dejen de mostrar cierta información personal." },
    ],
  },
];

export const valoresGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "valores" as const,
    stage: grade.stage,
    topic: q.tema,
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
