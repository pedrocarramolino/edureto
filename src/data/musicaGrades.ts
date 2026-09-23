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

// En Primaria la música va dentro de Educación Artística; como materia propia
// aparece en los cuatro cursos de la ESO.
const grades: GradeDefinition[] = [
  {
    id: "m1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "🎵 1º ESO superado",
    questions: [
      { tema: "Lenguaje musical", question: "¿Cuántas líneas tiene un pentagrama?", options: ["4", "5", "6", "7"], correctIndex: 1, explanation: "El pentagrama son cinco líneas y cuatro espacios." },
      { tema: "Lenguaje musical", question: "¿Cuántas notas musicales hay?", options: ["5", "7", "8", "12"], correctIndex: 1, explanation: "Do, re, mi, fa, sol, la y si: siete notas." },
      { tema: "Lenguaje musical", question: "¿Qué figura dura más, la blanca o la negra?", options: ["la negra", "la blanca", "duran lo mismo", "depende del compás"], correctIndex: 1, explanation: "La blanca dura dos tiempos y la negra uno." },
      { tema: "Lenguaje musical", question: "En un compás de 4/4, ¿cuántos tiempos dura una redonda?", options: ["1", "2", "4", "8"], correctIndex: 2, explanation: "La redonda ocupa el compás entero: cuatro tiempos." },
      { tema: "Lenguaje musical", question: "¿Qué indica la clave de sol?", options: ["la velocidad de la obra", "dónde está la nota sol en el pentagrama", "la intensidad del sonido", "el número de compases"], correctIndex: 1, explanation: "La clave sitúa las notas: la de sol lo coloca en la segunda línea." },
      { tema: "Lenguaje musical", question: "¿Cuáles son las cualidades del sonido?", options: ["altura, duración, intensidad y timbre", "ritmo, melodía y armonía", "grave, agudo y medio", "fuerte, suave y medio"], correctIndex: 0, explanation: "Esas cuatro cualidades describen cualquier sonido." },
      { tema: "Instrumentos y voces", question: "¿A qué familia pertenece el violín?", options: ["viento", "cuerda", "percusión", "electrónicos"], correctIndex: 1, explanation: "El violín es de cuerda frotada: suena al pasar el arco." },
      { tema: "Instrumentos y voces", question: "¿A qué familia pertenece la flauta?", options: ["cuerda", "viento", "percusión", "teclado"], correctIndex: 1, explanation: "Suena al soplar aire dentro del tubo." },
      { tema: "Lenguaje musical", question: "¿Qué es el ritmo?", options: ["la velocidad de la música", "la organización de los sonidos en el tiempo", "la altura de las notas", "el color del sonido"], correctIndex: 1, explanation: "El ritmo ordena duraciones y acentos." },
      { tema: "Lenguaje musical", question: "¿Qué significa el matiz \"forte\" (f)?", options: ["suave", "fuerte", "rápido", "lento"], correctIndex: 1, explanation: "Forte indica tocar o cantar fuerte; piano, suave." },
      { tema: "Lenguaje musical", question: "¿Cuánto dura el silencio de negra?", options: ["medio tiempo", "un tiempo", "dos tiempos", "cuatro tiempos"], correctIndex: 1, explanation: "Cada silencio dura lo mismo que su figura: la negra, un tiempo." },
      { tema: "Lenguaje musical", question: "¿Qué es una escala musical?", options: ["un instrumento antiguo", "una sucesión ordenada de notas", "un tipo de compás", "una forma de cantar"], correctIndex: 1, explanation: "La escala ordena las notas de grave a agudo." },
    ],
  },
  {
    id: "m2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "🎵 2º ESO superado",
    questions: [
      { tema: "Lenguaje musical", question: "En un compás de 3/4, ¿qué indica el número de arriba?", options: ["la figura que vale un tiempo", "cuántos tiempos tiene cada compás", "la velocidad", "el número de compases"], correctIndex: 1, explanation: "El 3 dice que cada compás tiene tres tiempos." },
      { tema: "Lenguaje musical", question: "¿En qué compás se escribe un vals?", options: ["2/4", "3/4", "4/4", "6/8"], correctIndex: 1, explanation: "El vals es ternario: un tiempo fuerte y dos débiles." },
      { tema: "Lenguaje musical", question: "¿Qué es un intervalo?", options: ["la distancia entre dos notas", "un silencio largo", "un cambio de compás", "el final de una obra"], correctIndex: 0, explanation: "De do a mi hay un intervalo de tercera." },
      { tema: "Lenguaje musical", question: "¿Cuántos sonidos tiene un acorde de tríada?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "La tríada suena con tres notas a la vez." },
      { tema: "Instrumentos y voces", question: "¿Cuál es la voz femenina más aguda?", options: ["contralto", "soprano", "mezzosoprano", "tenor"], correctIndex: 1, explanation: "De aguda a grave: soprano, mezzosoprano y contralto." },
      { tema: "Instrumentos y voces", question: "¿Cuál es la voz masculina más grave?", options: ["tenor", "barítono", "bajo", "contratenor"], correctIndex: 2, explanation: "De aguda a grave: tenor, barítono y bajo." },
      { tema: "Lenguaje musical", question: "¿Qué es la melodía?", options: ["varios sonidos a la vez", "una sucesión de sonidos con sentido musical", "el pulso de la música", "la letra de una canción"], correctIndex: 1, explanation: "La melodía es la línea que se puede cantar o tararear." },
      { tema: "Instrumentos y voces", question: "¿Qué familias forman una orquesta sinfónica?", options: ["solo cuerda", "cuerda, viento y percusión", "viento y voz", "percusión y teclados"], correctIndex: 1, explanation: "Cuerda, viento madera, viento metal y percusión." },
      { tema: "Instrumentos y voces", question: "¿Qué significa el matiz \"piano\" (p)?", options: ["fuerte", "suave", "lento", "rápido"], correctIndex: 1, explanation: "Piano indica tocar con poca intensidad." },
      { tema: "Lenguaje musical", question: "¿Qué es el tempo?", options: ["la velocidad de la música", "la intensidad del sonido", "la duración de la obra", "el tipo de compás"], correctIndex: 0, explanation: "Allegro es rápido y adagio, lento." },
      { tema: "Instrumentos y voces", question: "¿Qué instrumento de percusión tiene afinación determinada?", options: ["el bombo", "el xilófono", "la caja", "el triángulo"], correctIndex: 1, explanation: "El xilófono da notas concretas; el bombo o la caja, no." },
      { tema: "Lenguaje musical", question: "¿Qué indica un calderón sobre una nota?", options: ["que se toca más fuerte", "que se alarga su duración a voluntad", "que se repite", "que se calla"], correctIndex: 1, explanation: "El calderón detiene el pulso y alarga la nota." },
    ],
  },
  {
    id: "m3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🎵 3º ESO superado",
    questions: [
      { tema: "Historia de la música", question: "¿De qué época es el canto gregoriano?", options: ["la Edad Media", "el Barroco", "el Clasicismo", "el Romanticismo"], correctIndex: 0, explanation: "Es el canto de la Iglesia medieval, a una sola voz y sin instrumentos." },
      { tema: "Lenguaje musical", question: "¿Quién compuso \"Las cuatro estaciones\"?", options: ["Bach", "Vivaldi", "Mozart", "Haydn"], correctIndex: 1, explanation: "Antonio Vivaldi, en pleno Barroco italiano." },
      { tema: "Historia de la música", question: "¿A qué periodo pertenece Johann Sebastian Bach?", options: ["Renacimiento", "Barroco", "Clasicismo", "Romanticismo"], correctIndex: 1, explanation: "Bach es la cumbre del Barroco musical." },
      { tema: "Lenguaje musical", question: "¿Quién compuso la Novena Sinfonía, con el Himno de la Alegría?", options: ["Beethoven", "Mozart", "Chopin", "Verdi"], correctIndex: 0, explanation: "Beethoven la estrenó ya sordo, en 1824." },
      { tema: "Historia de la música", question: "¿Qué es una ópera?", options: ["una obra teatral cantada con orquesta", "una danza cortesana", "una pieza para piano solo", "un canto religioso"], correctIndex: 0, explanation: "Une música, teatro, texto y escenografía." },
      { tema: "Historia de la música", question: "¿En qué país nació el jazz?", options: ["Brasil", "Estados Unidos", "Cuba", "Reino Unido"], correctIndex: 1, explanation: "Surgió a comienzos del siglo XX, sobre todo en Nueva Orleans." },
      { tema: "Historia de la música", question: "¿Qué periodo musical viene después del Clasicismo?", options: ["el Barroco", "el Romanticismo", "el Renacimiento", "el Impresionismo"], correctIndex: 1, explanation: "Barroco, Clasicismo, Romanticismo y siglo XX." },
      { tema: "Instrumentos y voces", question: "¿Quién compuso \"La flauta mágica\"?", options: ["Mozart", "Beethoven", "Vivaldi", "Wagner"], correctIndex: 0, explanation: "Mozart la estrenó en 1791, el año de su muerte." },
      { tema: "Instrumentos y voces", question: "¿Qué instrumento de viento es típico de las bandas valencianas?", options: ["la gaita", "la dulzaina", "el acordeón", "el laúd"], correctIndex: 1, explanation: "La dulzaina, junto al tabalet, acompaña las fiestas valencianas." },
      { tema: "Historia de la música", question: "¿Qué es una banda sonora?", options: ["la música compuesta para una película", "la banda del pueblo", "un tipo de orquesta", "un instrumento electrónico"], correctIndex: 0, explanation: "Acompaña la imagen y refuerza lo que cuenta la película." },
      { tema: "Historia de la música", question: "¿Qué es el flamenco?", options: ["un baile de salón europeo", "un arte musical del sur de España, Patrimonio de la Humanidad", "un estilo de jazz", "una danza medieval"], correctIndex: 1, explanation: "Cante, toque y baile; la Unesco lo declaró Patrimonio en 2010." },
      { tema: "Historia de la música", question: "¿Qué es la síncopa?", options: ["acentuar un tiempo débil del compás", "repetir un compás", "cantar sin acompañamiento", "tocar muy despacio"], correctIndex: 0, explanation: "Desplaza el acento y da esa sensación de balanceo del jazz." },
    ],
  },
  {
    id: "m4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🎵 4º ESO superado",
    questions: [
      { tema: "Música actual", question: "¿En qué década nació el rock and roll?", options: ["los años 30", "los años 50", "los años 70", "los años 90"], correctIndex: 1, explanation: "Surgió en Estados Unidos en los años 50, del blues y el country." },
      { tema: "Lenguaje musical", question: "¿Qué grupo de Liverpool marcó la música de los años 60?", options: ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"], correctIndex: 1, explanation: "The Beatles cambiaron la forma de componer y grabar pop." },
      { tema: "Música actual", question: "¿Para qué sirve el MIDI?", options: ["para grabar la voz", "para que los instrumentos electrónicos se comuniquen entre sí", "para comprimir audio", "para afinar la guitarra"], correctIndex: 1, explanation: "Transmite notas y órdenes, no sonido grabado." },
      { tema: "Música actual", question: "¿Qué hace un sampler?", options: ["graba y reproduce fragmentos de sonido", "amplifica la voz", "afina instrumentos", "imprime partituras"], correctIndex: 0, explanation: "Permite reutilizar un fragmento dentro de una nueva pieza." },
      { tema: "Música actual", question: "¿Qué es el formato MP3?", options: ["un tipo de altavoz", "un formato que comprime el audio", "un programa de partituras", "un instrumento digital"], correctIndex: 1, explanation: "Reduce el tamaño del archivo quitando lo que el oído apenas percibe." },
      { tema: "Música actual", question: "¿De dónde procede el reguetón?", options: ["del Caribe", "de Brasil", "de África occidental", "de Estados Unidos"], correctIndex: 0, explanation: "Nació en Panamá y Puerto Rico a finales del siglo XX." },
      { tema: "Música actual", question: "¿Qué protegen los derechos de autor de una canción?", options: ["el precio del disco", "la autoría y el uso de la obra", "el volumen de la grabación", "la portada solamente"], correctIndex: 1, explanation: "Permiten al autor decidir cómo se usa su obra y cobrar por ella." },
      { tema: "Música actual", question: "¿Qué elementos forman la cultura hip hop?", options: ["rap, DJ, breakdance y grafiti", "solo el rap", "rock y punk", "jazz y blues"], correctIndex: 0, explanation: "Nació en los barrios de Nueva York en los años 70." },
      { tema: "Música actual", question: "¿Qué hace un productor musical?", options: ["vende las entradas", "dirige la grabación y decide el sonido final", "escribe siempre la letra", "diseña la portada"], correctIndex: 1, explanation: "Acompaña al artista y da forma al resultado sonoro." },
      { tema: "Música actual", question: "¿Qué es la música electrónica?", options: ["la que se toca con instrumentos de cuerda", "la creada con instrumentos y programas electrónicos", "la música de orquesta", "la música cantada sin instrumentos"], correctIndex: 1, explanation: "Sintetizadores, cajas de ritmos y ordenadores generan el sonido." },
      { tema: "Música actual", question: "¿Qué es escuchar música en streaming?", options: ["descargarla al móvil", "escucharla por internet sin descargarla", "grabarla en un CD", "oírla en la radio"], correctIndex: 1, explanation: "El audio llega en tiempo real desde un servidor." },
      { tema: "Música actual", question: "¿Qué es el pop?", options: ["música popular de estructura sencilla y pegadiza", "música religiosa", "música compuesta para orquesta", "música tradicional de un pueblo"], correctIndex: 0, explanation: "Busca llegar a mucha gente con canciones breves y memorables." },
    ],
  },
];

export const musicaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "musica" as const,
    stage: grade.stage,
    topic: q.tema,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const musicaGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `musica-${grade.id}`,
  type: "mission",
  subjectId: "musica",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Música · ${grade.title}`,
  narrative: `Repasa Música de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-musica-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
