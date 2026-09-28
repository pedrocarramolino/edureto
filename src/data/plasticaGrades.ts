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

// Continuación de la parte plástica de Educación Artística, ya como materia
// propia en los cuatro cursos de la ESO.
const grades: GradeDefinition[] = [
  {
    id: "p1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "🖌️ 1º ESO superado",
    questions: [
      { tema: "Lenguaje visual", question: "¿Cuáles son los elementos básicos del lenguaje visual?", options: ["el punto, la línea y el plano", "el papel, el lápiz y la goma", "el marco, el color y el título", "la luz, la sombra y el brillo"], correctIndex: 0, explanation: "Con punto, línea y plano se construye cualquier imagen." },
      { tema: "Color y composición", question: "¿Cuáles son los colores primarios luz?", options: ["rojo, verde y azul", "cian, magenta y amarillo", "rojo, azul y amarillo", "blanco, negro y gris"], correctIndex: 0, explanation: "Las pantallas mezclan rojo, verde y azul (RGB)." },
      { tema: "Dibujo técnico", question: "¿Cómo son dos rectas paralelas?", options: ["se cortan en un punto", "no se cortan nunca", "forman un ángulo recto", "son curvas"], correctIndex: 1, explanation: "Mantienen siempre la misma distancia entre sí." },
      { tema: "Dibujo técnico", question: "¿Qué ángulo forman dos rectas perpendiculares?", options: ["45°", "90°", "180°", "60°"], correctIndex: 1, explanation: "Se cortan formando cuatro ángulos rectos." },
      { tema: "Color y composición", question: "¿Qué son los colores complementarios?", options: ["los que están enfrentados en el círculo cromático", "los que se parecen mucho", "los que tienen blanco", "los que no existen en la naturaleza"], correctIndex: 0, explanation: "Juntos producen el máximo contraste." },
      { tema: "Color y composición", question: "¿Qué es la textura visual?", options: ["la que se nota al tocar", "la que se ve pero no se puede tocar", "el color de fondo", "el tamaño del papel"], correctIndex: 1, explanation: "Está representada en la superficie, como una madera dibujada." },
      { tema: "Color y composición", question: "¿Qué es la simetría axial?", options: ["la que se repite girando", "la que se refleja respecto a un eje", "la que no tiene orden", "la que usa muchos colores"], correctIndex: 1, explanation: "Cada punto tiene su reflejo al otro lado del eje." },
      { tema: "Dibujo técnico", question: "¿Qué significa la escala 2:1?", options: ["el dibujo es el doble de grande que el objeto", "el dibujo es la mitad", "el dibujo es igual", "el objeto mide dos metros"], correctIndex: 0, explanation: "Es una escala de ampliación: se dibuja mayor que la realidad." },
      { tema: "Lenguaje visual", question: "¿Qué técnica da volumen con una gradación de luces y sombras?", options: ["el claroscuro", "el collage", "el puntillismo", "el grabado"], correctIndex: 0, explanation: "Pasando poco a poco de la luz a la sombra la forma parece salir del papel." },
      { tema: "Dibujo técnico", question: "¿Qué es un polígono regular?", options: ["el que tiene todos los lados y ángulos iguales", "el que tiene más de seis lados", "el que tiene lados curvos", "el que cabe en un círculo"], correctIndex: 0, explanation: "El cuadrado y el hexágono regular son ejemplos." },
      { tema: "Dibujo técnico", question: "¿Qué línea divide un ángulo en dos partes iguales?", options: ["la mediatriz", "la bisectriz", "la diagonal", "la altura"], correctIndex: 1, explanation: "La bisectriz parte el ángulo justo por la mitad." },
      { tema: "Color y composición", question: "¿Qué es una gama monocromática?", options: ["la que usa un solo color con sus tonos", "la que usa todos los colores", "la que solo usa blanco y negro", "la que mezcla complementarios"], correctIndex: 0, explanation: "Se trabaja con claros y oscuros de un mismo color." },
      { tema: "Color y composición", question: "¿Cuáles son los colores primarios pigmento que se usan en la impresión?", options: ["rojo, verde y azul", "cian, magenta y amarillo", "blanco y negro", "naranja, verde y violeta"], correctIndex: 1, explanation: "Rojo, verde y azul son los primarios luz; en la impresión se usan cian, magenta y amarillo." },
      { tema: "Color y composición", question: "¿Qué color es el complementario del azul?", options: ["el verde", "el violeta", "el naranja", "el rojo"], correctIndex: 2, explanation: "El azul y el naranja están enfrentados en el círculo cromático." },
      { tema: "Color y composición", question: "¿Qué es el tono o matiz de un color?", options: ["su luminosidad", "su pureza", "su tamaño", "la cualidad que lo distingue: rojo, azul, amarillo..."], correctIndex: 3, explanation: "El tono es el \"nombre\" del color." },
      { tema: "Lenguaje visual", question: "¿Cuál es el elemento gráfico más simple?", options: ["el punto", "la línea", "el plano", "la textura"], correctIndex: 0, explanation: "Con puntos se pueden crear líneas, formas y tonos." },
      { tema: "Lenguaje visual", question: "¿Qué transmiten las líneas horizontales en una imagen?", options: ["movimiento y tensión", "calma y estabilidad", "caída", "ruido"], correctIndex: 1, explanation: "Recuerdan al horizonte o a alguien tumbado: dan sensación de reposo." },
      { tema: "Dibujo técnico", question: "¿Qué instrumento sirve para medir ángulos?", options: ["el compás", "la escuadra", "el transportador", "el cartabón"], correctIndex: 2, explanation: "El transportador de ángulos mide en grados." },
      { tema: "Dibujo técnico", question: "¿Qué es una cuerda en una circunferencia?", options: ["el centro", "una recta tangente", "el perímetro", "un segmento que une dos puntos de la circunferencia"], correctIndex: 3, explanation: "La cuerda más larga es el diámetro, que pasa por el centro." },
      { tema: "Dibujo técnico", question: "¿Cuánto mide cada ángulo de un triángulo equilátero?", options: ["60°", "90°", "45°", "30°"], correctIndex: 0, explanation: "Los tres ángulos son iguales y suman 180°: 60° cada uno." },
    ],
  },
  {
    id: "p2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "🖌️ 2º ESO superado",
    questions: [
      { tema: "Color y composición", question: "¿Qué es la composición en una obra?", options: ["la forma de organizar los elementos en el espacio", "el precio de los materiales", "el tamaño del marco", "la firma del autor"], correctIndex: 0, explanation: "Componer es decidir dónde va cada cosa y con qué peso." },
      { tema: "Color y composición", question: "¿Qué es el equilibrio en una composición?", options: ["el reparto de los pesos visuales", "usar solo colores claros", "dibujar en el centro siempre", "no dejar espacios vacíos"], correctIndex: 0, explanation: "Puede ser simétrico o asimétrico, pero debe sostener la mirada." },
      { tema: "Dibujo técnico", question: "¿Qué es la mediatriz de un segmento?", options: ["la recta perpendicular que pasa por su punto medio", "la línea que lo divide en tres", "una recta paralela", "la diagonal del cuadrado"], correctIndex: 0, explanation: "Todos sus puntos están a la misma distancia de los extremos." },
      { tema: "Dibujo técnico", question: "¿Cuánto suman los ángulos interiores de un triángulo?", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "Siempre suman 180°, sea cual sea el triángulo." },
      { tema: "Dibujo técnico", question: "¿Qué polígono tiene cinco lados?", options: ["el cuadrilátero", "el pentágono", "el hexágono", "el octógono"], correctIndex: 1, explanation: "Penta significa cinco." },
      { tema: "Lenguaje visual", question: "¿Qué caracteriza a la perspectiva cónica?", options: ["usa puntos de fuga", "usa solo líneas paralelas", "no tiene profundidad", "solo se usa en retratos"], correctIndex: 0, explanation: "Las líneas convergen en uno o varios puntos de fuga." },
      { tema: "Dibujo técnico", question: "¿Qué perspectiva mantiene las líneas paralelas sin punto de fuga?", options: ["la cónica frontal", "la axonométrica", "la cónica oblicua", "la aérea"], correctIndex: 1, explanation: "En la axonométrica (isométrica, caballera) las paralelas siguen paralelas." },
      { tema: "Color y composición", question: "¿Qué es el ritmo visual?", options: ["la repetición ordenada de elementos", "la velocidad al dibujar", "el brillo del color", "el tamaño del soporte"], correctIndex: 0, explanation: "La repetición guía la mirada por la imagen." },
      { tema: "Color y composición", question: "¿Qué es el contraste?", options: ["la diferencia clara entre dos elementos", "la mezcla de dos colores", "el borde del dibujo", "la copia de un modelo"], correctIndex: 0, explanation: "Puede ser de color, de tamaño, de forma o de luz." },
      { tema: "Color y composición", question: "¿Qué es el formato de una obra?", options: ["la forma y la proporción del soporte", "la técnica usada", "el tema representado", "el nombre del autor"], correctIndex: 0, explanation: "Vertical, horizontal o cuadrado: condiciona la composición." },
      { tema: "Imagen y audiovisual", question: "¿Qué plano muestra a una persona de cuerpo entero?", options: ["el primer plano", "el plano entero", "el plano detalle", "el plano medio"], correctIndex: 1, explanation: "El plano entero la muestra de la cabeza a los pies; el general, además, la sitúa en su entorno." },
      { tema: "Color y composición", question: "¿Qué es un boceto?", options: ["el dibujo rápido previo a la obra final", "la obra terminada", "el marco de un cuadro", "una copia exacta"], correctIndex: 0, explanation: "Sirve para probar ideas antes de trabajar en serio." },
      { tema: "Color y composición", question: "¿Qué es la saturación de un color?", options: ["su tono", "su pureza o intensidad", "su temperatura", "su textura"], correctIndex: 1, explanation: "Un color muy saturado es vivo; poco saturado, apagado o grisáceo." },
      { tema: "Color y composición", question: "¿Qué es la simetría radial?", options: ["la que se refleja en un eje", "la que no tiene orden", "la que se repite alrededor de un centro", "la de los colores fríos"], correctIndex: 2, explanation: "Una flor o un rosetón de una iglesia tienen simetría radial." },
      { tema: "Dibujo técnico", question: "¿Qué polígono tiene ocho lados?", options: ["el hexágono", "el heptágono", "el decágono", "el octógono"], correctIndex: 3, explanation: "Una señal de STOP tiene forma de octógono." },
      { tema: "Dibujo técnico", question: "¿Qué es una recta tangente a una circunferencia?", options: ["la que la toca en un solo punto", "la que la corta en dos puntos", "la que pasa por el centro", "la que no la toca"], correctIndex: 0, explanation: "La tangente es siempre perpendicular al radio en el punto de contacto." },
      { tema: "Lenguaje visual", question: "¿Qué es la línea del horizonte en una perspectiva?", options: ["el borde del papel", "la línea a la altura de los ojos de quien mira", "una línea vertical", "el suelo"], correctIndex: 1, explanation: "Sobre ella se sitúan los puntos de fuga." },
      { tema: "Lenguaje visual", question: "¿Cuántos puntos de fuga tiene la perspectiva cónica oblicua?", options: ["1", "3", "2", "ninguno"], correctIndex: 2, explanation: "La frontal tiene uno y la oblicua, dos." },
      { tema: "Imagen y audiovisual", question: "¿Qué plano muestra a una persona de la cintura hacia arriba?", options: ["el plano general", "el primer plano", "el plano detalle", "el plano medio"], correctIndex: 3, explanation: "El plano medio corta a la altura de la cintura." },
      { tema: "Imagen y audiovisual", question: "¿Qué es un contrapicado?", options: ["fotografiar desde abajo hacia arriba", "desde arriba hacia abajo", "a la altura de los ojos", "de lado"], correctIndex: 0, explanation: "El contrapicado hace que lo fotografiado parezca más grande y poderoso." },
    ],
  },
  {
    id: "p3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🖌️ 3º ESO superado",
    questions: [
      { tema: "Diseño gráfico", question: "¿De qué se ocupa el diseño gráfico?", options: ["de comunicar mensajes con imágenes y tipografías", "de construir edificios", "de pintar cuadros al óleo", "de esculpir en mármol"], correctIndex: 0, explanation: "Carteles, marcas, señales o webs son diseño gráfico." },
      { tema: "Diseño gráfico", question: "¿Qué es un logotipo?", options: ["el símbolo que identifica a una marca", "el eslogan de un anuncio", "el fondo de un cartel", "el nombre del diseñador"], correctIndex: 0, explanation: "Debe ser sencillo, reconocible y funcionar en pequeño." },
      { tema: "Diseño gráfico", question: "¿Qué es la tipografía?", options: ["el diseño y la elección de las letras", "la técnica de imprimir fotos", "el estudio de los colores", "un tipo de papel"], correctIndex: 0, explanation: "Cada familia tipográfica transmite una sensación distinta." },
      { tema: "Dibujo técnico", question: "¿Cuáles son las tres vistas principales del dibujo técnico?", options: ["alzado, planta y perfil", "frente, lado y sombra", "arriba, abajo y centro", "boceto, esquema y plano"], correctIndex: 0, explanation: "Con esas tres vistas se define cualquier pieza." },
      { tema: "Lenguaje visual", question: "¿Qué vista se obtiene mirando el objeto desde arriba?", options: ["el alzado", "la planta", "el perfil", "la sección"], correctIndex: 1, explanation: "La planta es la proyección vista desde arriba." },
      { tema: "Diseño gráfico", question: "¿Qué es un pictograma?", options: ["un dibujo sencillo que transmite una idea", "un cuadro abstracto", "una letra decorada", "una fotografía retocada"], correctIndex: 0, explanation: "Las señales de tráfico o las de un aeropuerto son pictogramas." },
      { tema: "Lenguaje visual", question: "¿Qué documento dibuja plano a plano una secuencia antes de grabarla?", options: ["el guion literario", "el storyboard", "el cartel", "la ficha técnica"], correctIndex: 1, explanation: "Sirve para prever encuadres y movimientos de cámara." },
      { tema: "Imagen y audiovisual", question: "¿Qué muestra un plano detalle?", options: ["una parte muy cercana de un objeto o del cuerpo", "un paisaje entero", "a dos personas hablando", "el cielo"], correctIndex: 0, explanation: "Sirve para destacar algo pequeño e importante." },
      { tema: "Imagen y audiovisual", question: "¿En qué consiste el montaje audiovisual?", options: ["ordenar y unir los planos grabados", "grabar el sonido", "escribir el guion", "diseñar el cartel"], correctIndex: 0, explanation: "El montaje da ritmo y sentido a la secuencia." },
      { tema: "Diseño gráfico", question: "¿Qué busca la publicidad?", options: ["persuadir al público", "informar sin más", "documentar la historia", "enseñar a dibujar"], correctIndex: 0, explanation: "Usa recursos visuales para convencer de algo." },
      { tema: "Dibujo técnico", question: "¿Qué es la escala de grises?", options: ["la gradación del blanco al negro", "una mezcla de colores cálidos", "un tipo de papel", "una regla de medir"], correctIndex: 0, explanation: "Permite representar la luz sin usar color." },
      { tema: "Dibujo técnico", question: "¿Qué es el sistema diédrico?", options: ["el que representa un objeto proyectándolo sobre dos planos", "el que dibuja en perspectiva cónica", "un tipo de color", "una técnica de pintura"], correctIndex: 0, explanation: "Con los planos horizontal y vertical se obtienen planta y alzado." },
      { tema: "Diseño gráfico", question: "¿Qué es un cartel?", options: ["una novela", "un soporte gráfico que comunica un mensaje de un vistazo", "una escultura", "una canción"], correctIndex: 1, explanation: "Un buen cartel se entiende en pocos segundos." },
      { tema: "Diseño gráfico", question: "¿Qué distingue a una tipografía con serifa?", options: ["es siempre cursiva", "solo tiene mayúsculas", "tiene pequeños remates en los extremos de las letras", "es de color"], correctIndex: 2, explanation: "Times New Roman tiene serifa; Arial no." },
      { tema: "Diseño gráfico", question: "¿Qué es la identidad corporativa?", options: ["la dirección de la empresa", "su plantilla de trabajadores", "sus precios", "los elementos visuales que identifican a una empresa"], correctIndex: 3, explanation: "Logotipo, colores y tipografía forman la identidad de una marca." },
      { tema: "Dibujo técnico", question: "¿Qué es el alzado de un objeto?", options: ["la vista de frente", "la vista desde arriba", "la vista lateral", "la vista desde abajo"], correctIndex: 0, explanation: "El alzado, la planta y el perfil son las tres vistas principales." },
      { tema: "Dibujo técnico", question: "¿Para qué se acota un dibujo técnico?", options: ["para colorearlo", "para indicar sus medidas reales", "para firmarlo", "para borrarlo"], correctIndex: 1, explanation: "Las cotas indican las medidas, aunque el dibujo esté a escala." },
      { tema: "Lenguaje visual", question: "¿Qué es la perspectiva caballera?", options: ["una técnica de pintura al óleo", "un plano de cine", "una perspectiva que da profundidad con líneas oblicuas", "un tipo de color"], correctIndex: 2, explanation: "Se dibuja la cara frontal en verdadera magnitud y la profundidad en oblicuo." },
      { tema: "Imagen y audiovisual", question: "¿Qué es un travelling?", options: ["un plano fijo", "un efecto de sonido", "una transición a negro", "un movimiento en el que la cámara se desplaza"], correctIndex: 3, explanation: "En el travelling la cámara viaja, por ejemplo sobre unos raíles." },
      { tema: "Imagen y audiovisual", question: "¿Qué es el fuera de campo?", options: ["lo que no se ve en el plano pero existe en la escena", "el plano más cercano", "el título de la película", "los créditos"], correctIndex: 0, explanation: "Un sonido de fuera de campo nos hace imaginar lo que no vemos." },
    ],
  },
  {
    id: "p4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🖌️ 4º ESO superado",
    questions: [
      { tema: "Imagen y audiovisual", question: "¿En qué consiste la regla de los tercios?", options: ["dividir la imagen en nueve partes y situar lo importante en las líneas", "poner siempre el motivo en el centro", "usar tres colores como máximo", "dividir la obra en tres capas"], correctIndex: 0, explanation: "Los puntos donde se cruzan las líneas atraen la mirada." },
      { tema: "Imagen y audiovisual", question: "¿Qué indica la resolución de una imagen digital?", options: ["la cantidad de píxeles que contiene", "el peso del papel", "el número de colores del autor", "el tiempo de exposición"], correctIndex: 0, explanation: "A más píxeles, más detalle al ampliar." },
      { tema: "Imagen y audiovisual", question: "¿Qué es una imagen de mapa de bits?", options: ["la formada por píxeles", "la formada por figuras y curvas", "la que solo tiene dos colores", "la que se dibuja a mano"], correctIndex: 0, explanation: "Una foto es un mapa de bits: al ampliarla se ven los píxeles." },
      { tema: "Imagen y audiovisual", question: "¿Qué ventaja tiene una imagen vectorial?", options: ["no pierde calidad al ampliarla", "pesa siempre más", "solo sirve para fotos", "no se puede imprimir"], correctIndex: 0, explanation: "Se define con fórmulas, así que se recalcula a cualquier tamaño." },
      { tema: "Color y composición", question: "¿Qué formato de imagen permite fondo transparente?", options: ["JPG", "PNG", "BMP", "TIFF sin capas"], correctIndex: 1, explanation: "El PNG guarda un canal de transparencia." },
      { tema: "Imagen y audiovisual", question: "¿Dónde se usa el modelo de color RGB?", options: ["en las pantallas", "en la imprenta", "en la pintura al óleo", "en el dibujo a lápiz"], correctIndex: 0, explanation: "Las pantallas emiten luz roja, verde y azul." },
      { tema: "Imagen y audiovisual", question: "¿Dónde se usa el modelo de color CMYK?", options: ["en la impresión", "en las pantallas", "en la fotografía digital", "en el vídeo"], correctIndex: 0, explanation: "Las tintas cian, magenta, amarilla y negra se usan al imprimir." },
      { tema: "Imagen y audiovisual", question: "¿Qué es un fotomontaje?", options: ["combinar varias imágenes en una sola", "ampliar una foto", "imprimir en blanco y negro", "enmarcar una fotografía"], correctIndex: 0, explanation: "Se recortan y unen fragmentos para crear una imagen nueva." },
      { tema: "Arte actual", question: "¿Qué artista convirtió objetos cotidianos en obras de arte (ready-made)?", options: ["Marcel Duchamp", "Claude Monet", "Diego Velázquez", "Auguste Rodin"], correctIndex: 0, explanation: "Duchamp presentó objetos como obras y abrió el arte conceptual." },
      { tema: "Arte actual", question: "¿Qué es el arte urbano?", options: ["el creado en la calle, como el grafiti o los murales", "el que solo se ve en museos", "el arte de la Antigüedad", "la arquitectura de las ciudades"], correctIndex: 0, explanation: "Usa el espacio público como soporte." },
      { tema: "Imagen y audiovisual", question: "¿Cómo se hace una animación en stop motion?", options: ["fotografiando objetos y moviéndolos poco a poco", "dibujando sobre la pantalla", "grabando vídeo a cámara lenta", "con un programa que lo hace solo"], correctIndex: 0, explanation: "Al unir las fotos, los objetos parecen moverse." },
      { tema: "Imagen y audiovisual", question: "¿Qué recoge un guion técnico?", options: ["los planos, los movimientos de cámara y el sonido de cada escena", "solo los diálogos", "el presupuesto", "la lista de actores"], correctIndex: 0, explanation: "Es la traducción del guion literario a decisiones de rodaje." },
      { tema: "Imagen y audiovisual", question: "¿Qué es la profundidad de campo en fotografía?", options: ["el tamaño de la foto", "la zona de la imagen que aparece nítida", "el brillo", "el color dominante"], correctIndex: 1, explanation: "Con poca profundidad de campo, el fondo sale desenfocado." },
      { tema: "Imagen y audiovisual", question: "¿Qué controla el diafragma de una cámara?", options: ["el zoom", "el color", "la cantidad de luz que entra", "el sonido"], correctIndex: 2, explanation: "Cuanto más abierto el diafragma, más luz entra." },
      { tema: "Imagen y audiovisual", question: "¿Qué formato de imagen comprime perdiendo algo de calidad?", options: ["PNG", "SVG", "TIFF sin compresión", "JPG"], correctIndex: 3, explanation: "El JPG reduce mucho el tamaño a cambio de perder algo de calidad." },
      { tema: "Color y composición", question: "¿Qué suele transmitir el color rojo en publicidad?", options: ["energía, pasión o urgencia", "calma", "frío", "tristeza"], correctIndex: 0, explanation: "Por eso se usa tanto en rebajas y ofertas." },
      { tema: "Arte actual", question: "¿Qué artista del arte pop es famoso por las latas de sopa Campbell?", options: ["Salvador Dalí", "Andy Warhol", "Joan Miró", "Frida Kahlo"], correctIndex: 1, explanation: "Andy Warhol convirtió productos de consumo en obras de arte." },
      { tema: "Arte actual", question: "¿Qué es una instalación artística?", options: ["un cuadro pequeño", "una fotografía impresa", "una obra que ocupa y transforma un espacio", "un grabado"], correctIndex: 2, explanation: "El público puede recorrerla y formar parte de ella." },
      { tema: "Arte actual", question: "¿Qué es el arte digital?", options: ["el hecho con los dedos", "el arte prehistórico", "el arte de la Edad Media", "el creado con ordenadores y otros medios tecnológicos"], correctIndex: 3, explanation: "Incluye ilustración digital, animación, videoarte..." },
      { tema: "Arte actual", question: "¿Qué arquitecto valenciano diseñó la Ciudad de las Artes y las Ciencias?", options: ["Santiago Calatrava", "Antoni Gaudí", "Frank Gehry", "Rafael Moneo"], correctIndex: 0, explanation: "Santiago Calatrava, nacido en Benimàmet, la diseñó en el antiguo cauce del Túria." },
    ],
  },
];

export const plasticaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "plastica" as const,
    stage: grade.stage,
    topic: q.tema,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const plasticaGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `plastica-${grade.id}`,
  type: "mission",
  subjectId: "plastica",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Plástica · ${grade.title}`,
  narrative: `Repasa Educación Plástica, Visual y Audiovisual de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-plastica-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
