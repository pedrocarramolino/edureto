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

// Educación Artística reúne plástica y música, así que cada curso mezcla las
// dos. En la ESO se separan en Música y Educación Plástica.
const grades: GradeDefinition[] = [
  {
    id: "e1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🎨 1º Primaria superado",
    questions: [
      { tema: "El color", question: "¿Cuáles son los tres colores primarios?", options: ["rojo, azul y amarillo", "verde, naranja y morado", "blanco, negro y gris", "rosa, azul y verde"], correctIndex: 0, explanation: "Con el rojo, el azul y el amarillo se forman los demás." },
      { tema: "El color", question: "¿Qué color sale al mezclar azul y amarillo?", options: ["naranja", "verde", "morado", "marrón"], correctIndex: 1, explanation: "Azul + amarillo = verde." },
      { tema: "El color", question: "¿Qué color sale al mezclar rojo y amarillo?", options: ["verde", "naranja", "morado", "gris"], correctIndex: 1, explanation: "Rojo + amarillo = naranja." },
      { tema: "El color", question: "¿Qué color sale al mezclar rojo y azul?", options: ["verde", "naranja", "morado", "amarillo"], correctIndex: 2, explanation: "Rojo + azul = morado." },
      { tema: "Dibujo y formas", question: "¿Qué figura tiene tres lados?", options: ["el cuadrado", "el triángulo", "el círculo", "el rectángulo"], correctIndex: 1, explanation: "El triángulo tiene tres lados y tres vértices." },
      { tema: "Música", question: "¿Qué instrumento se toca golpeándolo?", options: ["la guitarra", "el tambor", "la flauta", "el violín"], correctIndex: 1, explanation: "El tambor es de percusión: suena al golpearlo." },
      { tema: "Dibujo y formas", question: "¿Cuántas notas musicales aprendemos a cantar?", options: ["5", "7", "8", "10"], correctIndex: 1, explanation: "Do, re, mi, fa, sol, la y si." },
      { tema: "Música", question: "¿Cómo se llama un sonido muy flojito?", options: ["fuerte", "suave", "largo", "agudo"], correctIndex: 1, explanation: "Un sonido flojo es suave; uno que suena mucho, fuerte." },
      { tema: "Dibujo y formas", question: "¿Con qué pintamos mojándolo en pintura?", options: ["el pincel", "la regla", "la tijera", "la goma"], correctIndex: 0, explanation: "El pincel recoge la pintura y la lleva al papel." },
      { tema: "Dibujo y formas", question: "¿Cómo se llama el dibujo de la cara de una persona?", options: ["paisaje", "retrato", "bodegón", "mural"], correctIndex: 1, explanation: "Un retrato representa a una persona." },
    ],
  },
  {
    id: "e2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🎨 2º Primaria superado",
    questions: [
      { tema: "El color", question: "¿Cuáles son los colores secundarios?", options: ["rojo, azul y amarillo", "verde, naranja y morado", "blanco y negro", "marrón y gris"], correctIndex: 1, explanation: "Salen de mezclar dos primarios entre sí." },
      { tema: "Dibujo y formas", question: "¿Qué línea no tiene ninguna curva?", options: ["la línea recta", "la línea ondulada", "la espiral", "la línea quebrada"], correctIndex: 0, explanation: "La recta va siempre en la misma dirección." },
      { tema: "Música", question: "¿Qué instrumento tiene cuerdas y se toca con los dedos?", options: ["el tambor", "la guitarra", "la flauta", "el triángulo"], correctIndex: 1, explanation: "Las cuerdas de la guitarra suenan al pulsarlas." },
      { tema: "Dibujo y formas", question: "¿Qué figura tiene cuatro lados iguales?", options: ["el rectángulo", "el cuadrado", "el triángulo", "el óvalo"], correctIndex: 1, explanation: "El cuadrado tiene los cuatro lados de la misma medida." },
      { tema: "Música", question: "¿Qué es el pulso de una canción?", options: ["los golpes regulares, como los latidos", "la letra", "el instrumento que suena", "el final de la canción"], correctIndex: 0, explanation: "El pulso es el latido constante que marcamos con el pie." },
      { tema: "El color", question: "¿Qué colores son fríos?", options: ["el rojo y el naranja", "el azul y el verde", "el amarillo y el rojo", "el marrón y el naranja"], correctIndex: 1, explanation: "Los fríos recuerdan al agua y al hielo." },
      { tema: "Dibujo y formas", question: "¿Cómo se llama hacer figuras con barro o plastilina?", options: ["pintar", "modelar", "recortar", "pegar"], correctIndex: 1, explanation: "Modelar es dar forma a un material blando." },
      { tema: "Música", question: "¿Qué instrumento suena al soplar y tiene agujeros?", options: ["la flauta", "el violín", "el piano", "la pandereta"], correctIndex: 0, explanation: "Tapando y destapando los agujeros salen notas distintas." },
      { tema: "Arte y artistas", question: "¿Qué es un mural?", options: ["un dibujo muy pequeño", "una pintura grande hecha en una pared", "una escultura de barro", "una canción de grupo"], correctIndex: 1, explanation: "Los murales se pintan directamente sobre el muro." },
      { tema: "El color", question: "¿Qué pasa si mezclamos un color con blanco?", options: ["se aclara", "se oscurece", "no cambia", "se vuelve negro"], correctIndex: 0, explanation: "El blanco aclara y el negro oscurece." },
    ],
  },
  {
    id: "e3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "🎨 3º Primaria superado",
    questions: [
      { tema: "El color", question: "¿Qué colores son cálidos?", options: ["el azul y el violeta", "el rojo, el naranja y el amarillo", "el verde y el azul", "el gris y el negro"], correctIndex: 1, explanation: "Los cálidos recuerdan al sol y al fuego." },
      { tema: "El color", question: "¿Qué ocurre si mezclamos un color con negro?", options: ["se aclara", "se oscurece", "se vuelve blanco", "no cambia"], correctIndex: 1, explanation: "Añadir negro apaga y oscurece el color." },
      { tema: "Dibujo y formas", question: "¿Qué es la simetría?", options: ["cuando las dos mitades son iguales", "cuando el dibujo es muy grande", "cuando usamos muchos colores", "cuando el dibujo está torcido"], correctIndex: 0, explanation: "Una mitad es el reflejo de la otra." },
      { tema: "Música", question: "¿Cuántas rayas tiene el pentagrama?", options: ["4", "5", "6", "7"], correctIndex: 1, explanation: "Cinco líneas donde se escriben las notas." },
      { tema: "Dibujo y formas", question: "¿Con qué se toca el violín?", options: ["con un arco", "con baquetas", "soplando", "con un pedal"], correctIndex: 0, explanation: "El arco frota las cuerdas y las hace sonar." },
      { tema: "Música", question: "¿Cómo se llama la velocidad de una música?", options: ["el timbre", "el tempo", "el silencio", "el matiz"], correctIndex: 1, explanation: "Hay músicas de tempo rápido y de tempo lento." },
      { tema: "Música", question: "¿Qué es un silencio en música?", options: ["un momento en el que no suena nada", "una nota muy larga", "un instrumento roto", "el final de la canción"], correctIndex: 0, explanation: "Los silencios también se escriben y se cuentan." },
      { tema: "Técnicas y materiales", question: "¿Qué técnica consiste en pegar papeles y recortes?", options: ["el collage", "la acuarela", "el modelado", "el grabado"], correctIndex: 0, explanation: "En el collage se compone con materiales pegados." },
      { tema: "Dibujo y formas", question: "¿Qué herramienta sirve para trazar círculos?", options: ["la escuadra", "el compás", "la regla", "el transportador"], correctIndex: 1, explanation: "El compás gira alrededor de un punto fijo." },
      { tema: "Arte y artistas", question: "¿Qué es un paisaje en pintura?", options: ["el retrato de una persona", "la representación de un lugar natural", "un dibujo de objetos", "una figura de barro"], correctIndex: 1, explanation: "Los paisajes representan campos, montañas, mar o ciudades." },
    ],
  },
  {
    id: "e4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🎨 4º Primaria superado",
    questions: [
      { tema: "El color", question: "¿Qué es el círculo cromático?", options: ["un esquema con los colores ordenados", "un pincel redondo", "una figura geométrica", "una escala musical"], correctIndex: 0, explanation: "Coloca los colores en rueda y ayuda a combinarlos." },
      { tema: "El color", question: "¿Cuál es el color complementario del rojo?", options: ["el azul", "el verde", "el naranja", "el amarillo"], correctIndex: 1, explanation: "Están enfrentados en el círculo cromático y contrastan mucho." },
      { tema: "Música", question: "¿Qué figura musical dura dos tiempos?", options: ["la redonda", "la blanca", "la negra", "la corchea"], correctIndex: 1, explanation: "La redonda dura cuatro; la blanca, dos; la negra, uno." },
      { tema: "Música", question: "¿Qué es un coro?", options: ["un grupo de personas que cantan juntas", "una orquesta de cuerda", "un instrumento de viento", "un tipo de baile"], correctIndex: 0, explanation: "En el coro se canta a varias voces." },
      { tema: "Música", question: "¿Qué instrumento tiene teclas blancas y negras?", options: ["el arpa", "el piano", "el clarinete", "el violonchelo"], correctIndex: 1, explanation: "Al pulsar la tecla, un martillo golpea la cuerda." },
      { tema: "Dibujo y formas", question: "¿Qué está en primer plano en un dibujo?", options: ["lo que está más lejos", "lo que está más cerca de quien mira", "el fondo del cielo", "el marco"], correctIndex: 1, explanation: "El primer plano se dibuja más grande y con más detalle." },
      { tema: "Dibujo y formas", question: "¿Qué es la textura en plástica?", options: ["el tamaño de la obra", "cómo se ve o se nota la superficie", "el color principal", "el precio del material"], correctIndex: 1, explanation: "Hay texturas suaves, rugosas, brillantes o ásperas." },
      { tema: "Música", question: "¿Qué es una partitura?", options: ["el papel donde se escribe la música", "la funda del instrumento", "el nombre del grupo", "un tipo de tambor"], correctIndex: 0, explanation: "Recoge las notas, el ritmo y las indicaciones." },
      { tema: "El color", question: "¿Qué crea el claroscuro en un dibujo?", options: ["zonas de luz y de sombra", "líneas rectas", "colores primarios", "figuras geométricas"], correctIndex: 0, explanation: "El contraste entre luces y sombras da volumen." },
      { tema: "Arte y artistas", question: "¿Qué es un bodegón?", options: ["un retrato de grupo", "una pintura de objetos, frutas o flores", "un paisaje de montaña", "una escultura grande"], correctIndex: 1, explanation: "El bodegón representa objetos colocados sobre una mesa." },
    ],
  },
  {
    id: "e5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🎨 5º Primaria superado",
    questions: [
      { tema: "Dibujo y formas", question: "¿Para qué sirve la perspectiva en un dibujo?", options: ["para dar sensación de profundidad", "para usar más colores", "para dibujar más rápido", "para hacerlo más pequeño"], correctIndex: 0, explanation: "Hace que se vea qué está cerca y qué está lejos." },
      { tema: "Dibujo y formas", question: "¿Cómo se llama el punto donde se juntan las líneas de la perspectiva?", options: ["el punto de fuga", "el centro del papel", "el eje de simetría", "el primer plano"], correctIndex: 0, explanation: "Las líneas parecen encontrarse en el horizonte." },
      { tema: "Música", question: "¿Qué es el timbre de un sonido?", options: ["lo que hace que reconozcamos cada instrumento", "lo fuerte que suena", "lo largo que dura", "lo agudo que es"], correctIndex: 0, explanation: "Por el timbre distinguimos una flauta de un violín en la misma nota." },
      { tema: "Música", question: "¿Qué signo indica dónde está la nota sol en el pentagrama?", options: ["el calderón", "la clave de sol", "el silencio", "la ligadura"], correctIndex: 1, explanation: "La clave de sol se dibuja al principio del pentagrama." },
      { tema: "Arte y artistas", question: "¿En qué museo de Madrid se puede ver \"Las meninas\"?", options: ["el Museo del Prado", "el Museo Reina Sofía", "el Louvre", "el Museo de Bellas Artes de València"], correctIndex: 0, explanation: "El Prado guarda la gran pintura española, con Velázquez y Goya." },
      { tema: "Dibujo y formas", question: "¿Qué pintor valenciano es famoso por sus playas llenas de luz?", options: ["Sorolla", "Velázquez", "El Greco", "Murillo"], correctIndex: 0, explanation: "Joaquín Sorolla, de València, pintó el mar y la luz mediterránea." },
      { tema: "Música", question: "¿Cuántos tiempos tiene el compás de un vals?", options: ["2", "3", "4", "6"], correctIndex: 1, explanation: "Un tiempo fuerte y dos débiles: un, dos, tres." },
      { tema: "Música", question: "¿Qué instrumentos acompañan las fiestas tradicionales valencianas?", options: ["la gaita y el bombo", "la dulzaina y el tabalet", "el violín y el piano", "la guitarra y el cajón"], correctIndex: 1, explanation: "La dulzaina y el tabalet suenan en las fiestas de los pueblos." },
      { tema: "Arte y artistas", question: "¿Qué es un autorretrato?", options: ["un retrato que el artista hace de sí mismo", "un retrato de dos personas", "una foto de familia", "un paisaje con figuras"], correctIndex: 0, explanation: "El artista se pinta o se dibuja a sí mismo." },
      { tema: "Arte y artistas", question: "¿Qué son las artes escénicas?", options: ["las que se representan ante el público, como el teatro y la danza", "las que se cuelgan en un museo", "las que se escuchan en la radio", "las que se hacen con barro"], correctIndex: 0, explanation: "Necesitan un escenario y un público." },
    ],
  },
  {
    id: "e6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🎨 6º Primaria superado",
    questions: [
      { tema: "Arte y artistas", question: "¿Quién pintó el Guernica?", options: ["Dalí", "Picasso", "Miró", "Goya"], correctIndex: 1, explanation: "Pablo Picasso lo pintó en 1937; está en el Museo Reina Sofía." },
      { tema: "Arte y artistas", question: "¿Qué movimiento artístico creó Picasso junto a Braque?", options: ["el impresionismo", "el cubismo", "el romanticismo", "el realismo"], correctIndex: 1, explanation: "El cubismo descompone las figuras en formas geométricas." },
      { tema: "Arte y artistas", question: "¿Qué es el arte abstracto?", options: ["el que no representa cosas reconocibles", "el que copia la realidad", "el que solo usa blanco y negro", "el que se hace con barro"], correctIndex: 0, explanation: "Trabaja con formas, colores y líneas sin representar objetos." },
      { tema: "Imagen y cine", question: "¿Qué es un storyboard?", options: ["los dibujos que planifican una película", "la portada de un disco", "una escultura moderna", "el guion escrito"], correctIndex: 0, explanation: "Dibuja plano a plano lo que se va a grabar." },
      { tema: "Imagen y cine", question: "¿Qué es el encuadre en fotografía?", options: ["lo que decidimos que entra en la imagen", "el marco que se pone después", "el color de la foto", "el tamaño del papel"], correctIndex: 0, explanation: "Al encuadrar elegimos qué se ve y qué se deja fuera." },
      { tema: "Imagen y cine", question: "¿Qué es un cortometraje?", options: ["una película de poca duración", "una película muda", "un anuncio de radio", "un documental largo"], correctIndex: 0, explanation: "Suele durar menos de treinta minutos." },
      { tema: "Música", question: "¿Qué es un pasodoble?", options: ["una música y un baile muy presentes en las fiestas españolas", "un instrumento de cuerda", "un cuadro famoso", "un paso de danza clásica"], correctIndex: 0, explanation: "Las bandas lo tocan en fiestas y desfiles." },
      { tema: "Música", question: "¿Cuántos tiempos tiene un compás de 4/4?", options: ["2", "3", "4", "8"], correctIndex: 2, explanation: "Cuatro tiempos por compás, el más usado en la música actual." },
      { tema: "Técnicas y materiales", question: "¿Qué es el reciclaje creativo en plástica?", options: ["usar materiales ya usados para crear obras nuevas", "tirar los materiales sobrantes", "copiar una obra famosa", "pintar solo con colores nuevos"], correctIndex: 0, explanation: "Da una segunda vida a cartones, botellas o telas." },
      { tema: "Arte y artistas", question: "¿Qué hace un escenógrafo en una obra de teatro?", options: ["diseña el espacio y los decorados", "escribe el texto", "vende las entradas", "dirige a los músicos"], correctIndex: 0, explanation: "Crea el lugar donde ocurre la historia." },
    ],
  },
];

export const artisticaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "educacion_artistica" as const,
    stage: grade.stage,
    topic: q.tema,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const artisticaGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `artistica-${grade.id}`,
  type: "mission",
  subjectId: "educacion_artistica",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Arte y música · ${grade.title}`,
  narrative: `Repasa plástica y música de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-artistica-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
