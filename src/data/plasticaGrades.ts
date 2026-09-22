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
      { question: "¿Cuáles son los elementos básicos del lenguaje visual?", options: ["el punto, la línea y el plano", "el papel, el lápiz y la goma", "el marco, el color y el título", "la luz, la sombra y el brillo"], correctIndex: 0, explanation: "Con punto, línea y plano se construye cualquier imagen." },
      { question: "¿Cuáles son los colores primarios luz?", options: ["rojo, verde y azul", "cian, magenta y amarillo", "rojo, azul y amarillo", "blanco, negro y gris"], correctIndex: 0, explanation: "Las pantallas mezclan rojo, verde y azul (RGB)." },
      { question: "¿Cómo son dos rectas paralelas?", options: ["se cortan en un punto", "no se cortan nunca", "forman un ángulo recto", "son curvas"], correctIndex: 1, explanation: "Mantienen siempre la misma distancia entre sí." },
      { question: "¿Qué ángulo forman dos rectas perpendiculares?", options: ["45°", "90°", "180°", "60°"], correctIndex: 1, explanation: "Se cortan formando cuatro ángulos rectos." },
      { question: "¿Qué son los colores complementarios?", options: ["los que están enfrentados en el círculo cromático", "los que se parecen mucho", "los que tienen blanco", "los que no existen en la naturaleza"], correctIndex: 0, explanation: "Juntos producen el máximo contraste." },
      { question: "¿Qué es la textura visual?", options: ["la que se nota al tocar", "la que se ve pero no se puede tocar", "el color de fondo", "el tamaño del papel"], correctIndex: 1, explanation: "Está representada en la superficie, como una madera dibujada." },
      { question: "¿Qué es la simetría axial?", options: ["la que se repite girando", "la que se refleja respecto a un eje", "la que no tiene orden", "la que usa muchos colores"], correctIndex: 1, explanation: "Cada punto tiene su reflejo al otro lado del eje." },
      { question: "¿Qué significa la escala 2:1?", options: ["el dibujo es el doble de grande que el objeto", "el dibujo es la mitad", "el dibujo es igual", "el objeto mide dos metros"], correctIndex: 0, explanation: "Es una escala de ampliación: se dibuja mayor que la realidad." },
      { question: "¿Qué técnica da volumen con una gradación de luces y sombras?", options: ["el claroscuro", "el collage", "el puntillismo", "el grabado"], correctIndex: 0, explanation: "Pasando poco a poco de la luz a la sombra la forma parece salir del papel." },
      { question: "¿Qué es un polígono regular?", options: ["el que tiene todos los lados y ángulos iguales", "el que tiene más de seis lados", "el que tiene lados curvos", "el que cabe en un círculo"], correctIndex: 0, explanation: "El cuadrado y el hexágono regular son ejemplos." },
      { question: "¿Qué línea divide un ángulo en dos partes iguales?", options: ["la mediatriz", "la bisectriz", "la diagonal", "la altura"], correctIndex: 1, explanation: "La bisectriz parte el ángulo justo por la mitad." },
      { question: "¿Qué es una gama monocromática?", options: ["la que usa un solo color con sus tonos", "la que usa todos los colores", "la que solo usa blanco y negro", "la que mezcla complementarios"], correctIndex: 0, explanation: "Se trabaja con claros y oscuros de un mismo color." },
    ],
  },
  {
    id: "p2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "🖌️ 2º ESO superado",
    questions: [
      { question: "¿Qué es la composición en una obra?", options: ["la forma de organizar los elementos en el espacio", "el precio de los materiales", "el tamaño del marco", "la firma del autor"], correctIndex: 0, explanation: "Componer es decidir dónde va cada cosa y con qué peso." },
      { question: "¿Qué es el equilibrio en una composición?", options: ["el reparto de los pesos visuales", "usar solo colores claros", "dibujar en el centro siempre", "no dejar espacios vacíos"], correctIndex: 0, explanation: "Puede ser simétrico o asimétrico, pero debe sostener la mirada." },
      { question: "¿Qué es la mediatriz de un segmento?", options: ["la recta perpendicular que pasa por su punto medio", "la línea que lo divide en tres", "una recta paralela", "la diagonal del cuadrado"], correctIndex: 0, explanation: "Todos sus puntos están a la misma distancia de los extremos." },
      { question: "¿Cuánto suman los ángulos interiores de un triángulo?", options: ["90°", "180°", "270°", "360°"], correctIndex: 1, explanation: "Siempre suman 180°, sea cual sea el triángulo." },
      { question: "¿Qué polígono tiene cinco lados?", options: ["el cuadrilátero", "el pentágono", "el hexágono", "el octógono"], correctIndex: 1, explanation: "Penta significa cinco." },
      { question: "¿Qué caracteriza a la perspectiva cónica?", options: ["usa puntos de fuga", "usa solo líneas paralelas", "no tiene profundidad", "solo se usa en retratos"], correctIndex: 0, explanation: "Las líneas convergen en uno o varios puntos de fuga." },
      { question: "¿Qué perspectiva mantiene las líneas paralelas sin punto de fuga?", options: ["la cónica frontal", "la axonométrica", "la cónica oblicua", "la aérea"], correctIndex: 1, explanation: "En la axonométrica (isométrica, caballera) las paralelas siguen paralelas." },
      { question: "¿Qué es el ritmo visual?", options: ["la repetición ordenada de elementos", "la velocidad al dibujar", "el brillo del color", "el tamaño del soporte"], correctIndex: 0, explanation: "La repetición guía la mirada por la imagen." },
      { question: "¿Qué es el contraste?", options: ["la diferencia clara entre dos elementos", "la mezcla de dos colores", "el borde del dibujo", "la copia de un modelo"], correctIndex: 0, explanation: "Puede ser de color, de tamaño, de forma o de luz." },
      { question: "¿Qué es el formato de una obra?", options: ["la forma y la proporción del soporte", "la técnica usada", "el tema representado", "el nombre del autor"], correctIndex: 0, explanation: "Vertical, horizontal o cuadrado: condiciona la composición." },
      { question: "¿Qué plano muestra a una persona de cuerpo entero?", options: ["el primer plano", "el plano general", "el plano detalle", "el plano medio"], correctIndex: 1, explanation: "El general sitúa a la figura en su entorno." },
      { question: "¿Qué es un boceto?", options: ["el dibujo rápido previo a la obra final", "la obra terminada", "el marco de un cuadro", "una copia exacta"], correctIndex: 0, explanation: "Sirve para probar ideas antes de trabajar en serio." },
    ],
  },
  {
    id: "p3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🖌️ 3º ESO superado",
    questions: [
      { question: "¿De qué se ocupa el diseño gráfico?", options: ["de comunicar mensajes con imágenes y tipografías", "de construir edificios", "de pintar cuadros al óleo", "de esculpir en mármol"], correctIndex: 0, explanation: "Carteles, marcas, señales o webs son diseño gráfico." },
      { question: "¿Qué es un logotipo?", options: ["el símbolo que identifica a una marca", "el eslogan de un anuncio", "el fondo de un cartel", "el nombre del diseñador"], correctIndex: 0, explanation: "Debe ser sencillo, reconocible y funcionar en pequeño." },
      { question: "¿Qué es la tipografía?", options: ["el diseño y la elección de las letras", "la técnica de imprimir fotos", "el estudio de los colores", "un tipo de papel"], correctIndex: 0, explanation: "Cada familia tipográfica transmite una sensación distinta." },
      { question: "¿Cuáles son las tres vistas principales del dibujo técnico?", options: ["alzado, planta y perfil", "frente, lado y sombra", "arriba, abajo y centro", "boceto, esquema y plano"], correctIndex: 0, explanation: "Con esas tres vistas se define cualquier pieza." },
      { question: "¿Qué vista se obtiene mirando el objeto desde arriba?", options: ["el alzado", "la planta", "el perfil", "la sección"], correctIndex: 1, explanation: "La planta es la proyección vista desde arriba." },
      { question: "¿Qué es un pictograma?", options: ["un dibujo sencillo que transmite una idea", "un cuadro abstracto", "una letra decorada", "una fotografía retocada"], correctIndex: 0, explanation: "Las señales de tráfico o las de un aeropuerto son pictogramas." },
      { question: "¿Qué documento dibuja plano a plano una secuencia antes de grabarla?", options: ["el guion literario", "el storyboard", "el cartel", "la ficha técnica"], correctIndex: 1, explanation: "Sirve para prever encuadres y movimientos de cámara." },
      { question: "¿Qué muestra un plano detalle?", options: ["una parte muy cercana de un objeto o del cuerpo", "un paisaje entero", "a dos personas hablando", "el cielo"], correctIndex: 0, explanation: "Sirve para destacar algo pequeño e importante." },
      { question: "¿En qué consiste el montaje audiovisual?", options: ["ordenar y unir los planos grabados", "grabar el sonido", "escribir el guion", "diseñar el cartel"], correctIndex: 0, explanation: "El montaje da ritmo y sentido a la secuencia." },
      { question: "¿Qué busca la publicidad?", options: ["persuadir al público", "informar sin más", "documentar la historia", "enseñar a dibujar"], correctIndex: 0, explanation: "Usa recursos visuales para convencer de algo." },
      { question: "¿Qué es la escala de grises?", options: ["la gradación del blanco al negro", "una mezcla de colores cálidos", "un tipo de papel", "una regla de medir"], correctIndex: 0, explanation: "Permite representar la luz sin usar color." },
      { question: "¿Qué es el sistema diédrico?", options: ["el que representa un objeto proyectándolo sobre dos planos", "el que dibuja en perspectiva cónica", "un tipo de color", "una técnica de pintura"], correctIndex: 0, explanation: "Con los planos horizontal y vertical se obtienen planta y alzado." },
    ],
  },
  {
    id: "p4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🖌️ 4º ESO superado",
    questions: [
      { question: "¿En qué consiste la regla de los tercios?", options: ["dividir la imagen en nueve partes y situar lo importante en las líneas", "poner siempre el motivo en el centro", "usar tres colores como máximo", "dividir la obra en tres capas"], correctIndex: 0, explanation: "Los puntos donde se cruzan las líneas atraen la mirada." },
      { question: "¿Qué indica la resolución de una imagen digital?", options: ["la cantidad de píxeles que contiene", "el peso del papel", "el número de colores del autor", "el tiempo de exposición"], correctIndex: 0, explanation: "A más píxeles, más detalle al ampliar." },
      { question: "¿Qué es una imagen de mapa de bits?", options: ["la formada por píxeles", "la formada por figuras y curvas", "la que solo tiene dos colores", "la que se dibuja a mano"], correctIndex: 0, explanation: "Una foto es un mapa de bits: al ampliarla se ven los píxeles." },
      { question: "¿Qué ventaja tiene una imagen vectorial?", options: ["no pierde calidad al ampliarla", "pesa siempre más", "solo sirve para fotos", "no se puede imprimir"], correctIndex: 0, explanation: "Se define con fórmulas, así que se recalcula a cualquier tamaño." },
      { question: "¿Qué formato de imagen permite fondo transparente?", options: ["JPG", "PNG", "BMP", "TIFF sin capas"], correctIndex: 1, explanation: "El PNG guarda un canal de transparencia." },
      { question: "¿Dónde se usa el modelo de color RGB?", options: ["en las pantallas", "en la imprenta", "en la pintura al óleo", "en el dibujo a lápiz"], correctIndex: 0, explanation: "Las pantallas emiten luz roja, verde y azul." },
      { question: "¿Dónde se usa el modelo de color CMYK?", options: ["en la impresión", "en las pantallas", "en la fotografía digital", "en el vídeo"], correctIndex: 0, explanation: "Las tintas cian, magenta, amarilla y negra se usan al imprimir." },
      { question: "¿Qué es un fotomontaje?", options: ["combinar varias imágenes en una sola", "ampliar una foto", "imprimir en blanco y negro", "enmarcar una fotografía"], correctIndex: 0, explanation: "Se recortan y unen fragmentos para crear una imagen nueva." },
      { question: "¿Qué artista convirtió objetos cotidianos en obras de arte (ready-made)?", options: ["Marcel Duchamp", "Claude Monet", "Diego Velázquez", "Auguste Rodin"], correctIndex: 0, explanation: "Duchamp presentó objetos como obras y abrió el arte conceptual." },
      { question: "¿Qué es el arte urbano?", options: ["el creado en la calle, como el grafiti o los murales", "el que solo se ve en museos", "el arte de la Antigüedad", "la arquitectura de las ciudades"], correctIndex: 0, explanation: "Usa el espacio público como soporte." },
      { question: "¿Cómo se hace una animación en stop motion?", options: ["fotografiando objetos y moviéndolos poco a poco", "dibujando sobre la pantalla", "grabando vídeo a cámara lenta", "con un programa que lo hace solo"], correctIndex: 0, explanation: "Al unir las fotos, los objetos parecen moverse." },
      { question: "¿Qué recoge un guion técnico?", options: ["los planos, los movimientos de cámara y el sonido de cada escena", "solo los diálogos", "el presupuesto", "la lista de actores"], correctIndex: 0, explanation: "Es la traducción del guion literario a decisiones de rodaje." },
    ],
  },
];

export const plasticaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "plastica" as const,
    stage: grade.stage,
    topic: grade.title,
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
