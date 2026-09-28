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
      { tema: "Lenguaje musical", question: "¿Cuántas negras caben en una blanca?", options: ["4", "2", "1", "8"], correctIndex: 1, explanation: "La blanca dura dos tiempos y la negra uno." },
      { tema: "Lenguaje musical", question: "¿Qué figura dura la mitad que una negra?", options: ["la blanca", "la redonda", "la corchea", "la semicorchea"], correctIndex: 2, explanation: "Dos corcheas duran lo mismo que una negra." },
      { tema: "Lenguaje musical", question: "¿Qué hace un puntillo a la derecha de una nota?", options: ["la hace más aguda", "la silencia", "la repite", "le suma la mitad de su duración"], correctIndex: 3, explanation: "Una blanca con puntillo dura 2 + 1 = 3 tiempos." },
      { tema: "Lenguaje musical", question: "¿Qué nota va después de mi en la escala de do?", options: ["fa", "sol", "re", "la"], correctIndex: 0, explanation: "Do, re, mi, fa, sol, la, si." },
      { tema: "Instrumentos y voces", question: "¿A qué familia pertenece la trompeta?", options: ["viento madera", "viento metal", "cuerda", "percusión"], correctIndex: 1, explanation: "La trompeta es de metal y suena al vibrar los labios en la boquilla." },
      { tema: "Instrumentos y voces", question: "¿Cómo produce el sonido un tambor?", options: ["frotando una cuerda", "soplando", "golpeando una membrana", "con electricidad"], correctIndex: 2, explanation: "Es un instrumento de percusión de membrana o parche." },
      { tema: "Instrumentos y voces", question: "¿Cómo se clasifica el piano?", options: ["viento", "percusión de parche", "cuerda frotada", "cuerda percutida"], correctIndex: 3, explanation: "Al pulsar una tecla, un macillo golpea las cuerdas." },
      { tema: "Lenguaje musical", question: "¿Qué indica un crescendo?", options: ["que el sonido aumenta de intensidad poco a poco", "que la música se acelera", "que la música se para", "que la nota baja"], correctIndex: 0, explanation: "El crescendo es un aumento progresivo de volumen." },
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
      { tema: "Lenguaje musical", question: "¿Cuántas semicorcheas caben en una negra?", options: ["2", "4", "8", "16"], correctIndex: 1, explanation: "Una negra = dos corcheas = cuatro semicorcheas." },
      { tema: "Lenguaje musical", question: "¿Qué alteración sube una nota medio tono?", options: ["el bemol", "el becuadro", "el sostenido", "el puntillo"], correctIndex: 2, explanation: "El sostenido (♯) sube; el bemol (♭) baja." },
      { tema: "Lenguaje musical", question: "¿Qué alteración anula a las demás?", options: ["el sostenido", "el bemol", "la ligadura", "el becuadro"], correctIndex: 3, explanation: "El becuadro devuelve la nota a su sonido natural." },
      { tema: "Lenguaje musical", question: "¿Qué hace una ligadura de prolongación?", options: ["une dos notas iguales y suma su duración", "separa dos compases", "indica silencio", "sube la nota"], correctIndex: 0, explanation: "Las dos notas suenan como una sola más larga." },
      { tema: "Instrumentos y voces", question: "¿Cuál es la voz femenina más grave?", options: ["soprano", "contralto", "mezzosoprano", "tenor"], correctIndex: 1, explanation: "De aguda a grave: soprano, mezzosoprano y contralto." },
      { tema: "Instrumentos y voces", question: "¿Cuál es la voz masculina más aguda?", options: ["barítono", "bajo", "tenor", "contralto"], correctIndex: 2, explanation: "De aguda a grave: tenor, barítono y bajo." },
      { tema: "Instrumentos y voces", question: "¿Qué instrumento de cuerda es el más grave de la orquesta?", options: ["el violín", "la viola", "el violonchelo", "el contrabajo"], correctIndex: 3, explanation: "El contrabajo es el más grande y el más grave de la familia." },
      { tema: "Instrumentos y voces", question: "¿Quién dirige una orquesta?", options: ["el director o la directora", "siempre el primer violín", "el pianista", "el público"], correctIndex: 0, explanation: "Con la batuta marca el tempo, las entradas y los matices." },
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
      { tema: "Instrumentos y voces", question: "¿Qué instrumento de viento tradicional acompaña al tabalet en las fiestas valencianas?", options: ["la gaita", "la dulzaina", "el acordeón", "el laúd"], correctIndex: 1, explanation: "La dulzaina y el tabalet acompañan muchas fiestas, pasacalles y la muixeranga." },
      { tema: "Historia de la música", question: "¿Qué es una banda sonora?", options: ["la música compuesta para una película", "la banda del pueblo", "un tipo de orquesta", "un instrumento electrónico"], correctIndex: 0, explanation: "Acompaña la imagen y refuerza lo que cuenta la película." },
      { tema: "Historia de la música", question: "¿Qué es el flamenco?", options: ["un baile de salón europeo", "un arte musical del sur de España, Patrimonio de la Humanidad", "un estilo de jazz", "una danza medieval"], correctIndex: 1, explanation: "Cante, toque y baile; la Unesco lo declaró Patrimonio en 2010." },
      { tema: "Historia de la música", question: "¿Qué es la síncopa?", options: ["acentuar un tiempo débil del compás", "repetir un compás", "cantar sin acompañamiento", "tocar muy despacio"], correctIndex: 0, explanation: "Desplaza el acento y da esa sensación de balanceo del jazz." },
      { tema: "Historia de la música", question: "¿Qué compositor se quedó sordo y siguió componiendo?", options: ["Mozart", "Beethoven", "Bach", "Vivaldi"], correctIndex: 1, explanation: "Beethoven compuso su Novena Sinfonía estando completamente sordo." },
      { tema: "Historia de la música", question: "¿Qué compositor, nacido en Sagunto, escribió el \"Concierto de Aranjuez\"?", options: ["Manuel de Falla", "Isaac Albéniz", "Joaquín Rodrigo", "Enrique Granados"], correctIndex: 2, explanation: "Joaquín Rodrigo lo compuso en 1939 para guitarra y orquesta." },
      { tema: "Historia de la música", question: "¿Qué era un trovador?", options: ["un instrumento barroco", "un tipo de ópera", "un director de orquesta", "un poeta y músico de la Edad Media"], correctIndex: 3, explanation: "Los trovadores componían y cantaban poemas, muchas veces de amor." },
      { tema: "Historia de la música", question: "¿A qué periodo pertenecen Haydn y Mozart?", options: ["al Clasicismo", "al Barroco", "a la Edad Media", "al Romanticismo"], correctIndex: 0, explanation: "El Clasicismo va aproximadamente de 1750 a 1820." },
      { tema: "Historia de la música", question: "¿Qué es la polifonía?", options: ["una sola melodía", "varias melodías que suenan a la vez", "música sin ritmo", "música electrónica"], correctIndex: 1, explanation: "La polifonía combina varias voces independientes." },
      { tema: "Historia de la música", question: "¿De qué país era Chopin?", options: ["de Alemania", "de Italia", "de Polonia", "de Francia"], correctIndex: 2, explanation: "Frédéric Chopin, gran pianista romántico, nació en Polonia." },
      { tema: "Historia de la música", question: "¿Qué es el cant d'estil?", options: ["un tipo de ópera italiana", "un instrumento", "un baile moderno", "un canto tradicional valenciano, con letra improvisada"], correctIndex: 3, explanation: "Se canta acompañado de guitarras, guitarró y dulzaina, y la letra suele improvisarse." },
      { tema: "Historia de la música", question: "¿Quién compuso la música del himno de la Comunitat Valenciana?", options: ["José Serrano", "Joaquín Rodrigo", "Manuel Palau", "Vicente Martín y Soler"], correctIndex: 0, explanation: "José Serrano lo compuso para la Exposición Regional de 1909." },
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
      { tema: "Música actual", question: "¿Qué es un videoclip?", options: ["un tipo de micrófono", "un vídeo corto que acompaña a una canción", "un estilo de rock", "una aplicación de música"], correctIndex: 1, explanation: "Los videoclips se popularizaron en los años 80 con la televisión musical." },
      { tema: "Música actual", question: "¿Qué hace un DJ?", options: ["toca el violín en una orquesta", "afina pianos", "mezcla y pincha música grabada", "escribe partituras clásicas"], correctIndex: 2, explanation: "El DJ encadena y mezcla canciones grabadas en directo." },
      { tema: "Música actual", question: "¿Qué es un \"cover\" o versión?", options: ["un disco de oro", "un concierto gratuito", "un tipo de altavoz", "una canción interpretada por alguien distinto del artista original"], correctIndex: 3, explanation: "Muchos grupos empiezan tocando versiones de otros." },
      { tema: "Música actual", question: "¿Qué son los festivales de música?", options: ["eventos con muchos artistas durante uno o varios días", "clases de solfeo", "tiendas de discos", "emisoras de radio"], correctIndex: 0, explanation: "En la Comunitat Valenciana se celebran algunos muy conocidos." },
      { tema: "Música actual", question: "¿Qué estilo nació en Jamaica y tuvo a Bob Marley como gran figura?", options: ["el tango", "el reggae", "el blues", "el flamenco"], correctIndex: 1, explanation: "El reggae nació en Jamaica a finales de los años 60." },
      { tema: "Música actual", question: "¿Qué es el autotune?", options: ["un instrumento de viento", "un tipo de concierto", "un programa que corrige o modifica la afinación de la voz", "un auricular"], correctIndex: 2, explanation: "Se usa para afinar la voz o como efecto, muy típico del pop y el trap." },
      { tema: "Música actual", question: "¿Qué indica el \"bpm\" de una canción?", options: ["su volumen", "su duración", "el número de instrumentos", "los pulsos por minuto, es decir, su velocidad"], correctIndex: 3, explanation: "Una canción de baile suele ir a unos 120 bpm." },
      { tema: "Música actual", question: "¿Qué permite una licencia Creative Commons?", options: ["compartir una obra con ciertas condiciones", "prohíbe copiarla siempre", "es un premio musical", "es un contrato de trabajo"], correctIndex: 0, explanation: "El autor decide, por ejemplo, si se puede usar citándole o sin fines comerciales." },
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
