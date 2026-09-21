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

// Tecnología y Digitalización se cursa en 1.º, 2.º y 3.º de la ESO. En 4.º
// existen como materias propias Tecnología y Digitalización, por separado.
const grades: GradeDefinition[] = [
  {
    id: "t1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "⚙️ 1º ESO superado",
    questions: [
      { question: "¿Qué es el proceso tecnológico?", options: ["una máquina moderna", "los pasos ordenados para resolver un problema y crear un objeto", "un programa de ordenador", "un tipo de material"], correctIndex: 1, explanation: "Es el método de trabajo: del problema al objeto terminado." },
      { question: "¿Cuál es el primer paso del proceso tecnológico?", options: ["construir el objeto", "identificar el problema o la necesidad", "dibujar los planos", "comprar los materiales"], correctIndex: 1, explanation: "Primero hay que saber qué problema se quiere resolver." },
      { question: "¿Cuál de estos materiales es de origen vegetal?", options: ["el acero", "la madera", "el vidrio", "el aluminio"], correctIndex: 1, explanation: "La madera se obtiene de los árboles." },
      { question: "¿De qué materia prima se obtiene el papel?", options: ["del petróleo", "de la madera", "de la arena", "del hierro"], correctIndex: 1, explanation: "El papel se fabrica con la celulosa de la madera." },
      { question: "¿Qué instrumento mide piezas pequeñas con precisión?", options: ["la regla", "el calibre", "la escuadra", "el compás"], correctIndex: 1, explanation: "El calibre o pie de rey mide décimas de milímetro." },
      { question: "¿Qué es el software de un ordenador?", options: ["las piezas físicas", "los programas", "la pantalla", "los cables"], correctIndex: 1, explanation: "Software son los programas; hardware, las piezas que se tocan." },
      { question: "¿Cuál es un dispositivo de entrada?", options: ["la impresora", "el teclado", "el monitor", "los altavoces"], correctIndex: 1, explanation: "Con el teclado metemos información en el ordenador." },
      { question: "¿Qué hace la CPU de un ordenador?", options: ["guarda los archivos", "procesa la información", "muestra la imagen", "conecta a internet"], correctIndex: 1, explanation: "La CPU es el procesador: hace los cálculos y ejecuta las órdenes." },
      { question: "¿Cómo es una contraseña segura?", options: ["corta y fácil de recordar", "larga y con letras, números y símbolos", "tu fecha de nacimiento", "el nombre de tu mascota"], correctIndex: 1, explanation: "Cuanto más larga y variada, más difícil de adivinar." },
      { question: "¿Qué hay que hacer antes de usar una herramienta del taller?", options: ["nada especial", "ponerse las protecciones y conocer su uso", "quitarle las protecciones", "probarla deprisa"], correctIndex: 1, explanation: "La seguridad es el primer paso en el taller." },
      { question: "En un dibujo a escala 1:2, el objeto se dibuja…", options: ["al doble de grande", "a la mitad de grande", "del mismo tamaño", "diez veces más pequeño"], correctIndex: 1, explanation: "La escala 1:2 reduce el objeto a la mitad." },
      { question: "¿Cuál de estas extensiones es de un archivo de imagen?", options: [".jpg", ".exe", ".docx", ".mp3"], correctIndex: 0, explanation: ".jpg es una imagen; .mp3 es sonido y .docx un documento." },
    ],
  },
  {
    id: "t2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "⚙️ 2º ESO superado",
    questions: [
      { question: "¿Qué es una estructura?", options: ["un tipo de motor", "el conjunto de elementos que soporta cargas sin romperse", "un programa informático", "una herramienta de corte"], correctIndex: 1, explanation: "La estructura aguanta el peso y mantiene la forma del objeto." },
      { question: "¿Qué esfuerzo sufre una cuerda cuando tiramos de ella?", options: ["compresión", "tracción", "flexión", "torsión"], correctIndex: 1, explanation: "Estirar un elemento por sus extremos es tracción." },
      { question: "¿Qué esfuerzo sufre una columna que aguanta un tejado?", options: ["tracción", "compresión", "torsión", "cortadura"], correctIndex: 1, explanation: "El peso la aplasta: trabaja a compresión." },
      { question: "¿Qué mecanismo convierte el movimiento circular en lineal?", options: ["la polea fija", "el piñón-cremallera", "el engranaje recto", "la biela de dos ruedas"], correctIndex: 1, explanation: "El piñón gira y la cremallera avanza en línea recta." },
      { question: "¿Para qué sirve una polea?", options: ["para generar electricidad", "para levantar cargas con menos esfuerzo o cambiar la dirección de la fuerza", "para medir ángulos", "para cortar materiales"], correctIndex: 1, explanation: "Las poleas facilitan levantar pesos y redirigen la fuerza." },
      { question: "Si la rueda motriz es más pequeña que la conducida, la conducida gira…", options: ["más deprisa", "más despacio", "a la misma velocidad", "al revés y más deprisa"], correctIndex: 1, explanation: "La rueda grande da menos vueltas: gira más despacio y con más fuerza." },
      { question: "¿Cómo están conectados los componentes en un circuito en serie?", options: ["uno detrás de otro, en un solo camino", "cada uno en su propio camino", "en paralelo al generador", "sin conexión entre ellos"], correctIndex: 0, explanation: "En serie la corriente recorre un único camino." },
      { question: "En un circuito en serie, si se funde una bombilla…", options: ["las demás siguen encendidas", "se apagan todas", "brillan más", "no pasa nada"], correctIndex: 1, explanation: "Al cortarse el único camino, deja de circular la corriente." },
      { question: "¿Cuál es la unidad de resistencia eléctrica?", options: ["el amperio", "el ohmio", "el voltio", "el vatio"], correctIndex: 1, explanation: "La resistencia se mide en ohmios (Ω)." },
      { question: "En una hoja de cálculo, ¿qué es una celda?", options: ["un tipo de gráfico", "la casilla donde se cruzan una fila y una columna", "una hoja entera", "una fórmula"], correctIndex: 1, explanation: "Cada celda tiene una referencia, como A1 o C5." },
      { question: "¿Con qué símbolo empieza una fórmula en una hoja de cálculo?", options: ["+", "=", "#", "$"], correctIndex: 1, explanation: "Escribir = le dice al programa que va a calcular algo." },
      { question: "En programación, ¿qué hace un bucle?", options: ["guarda un dato", "repite instrucciones", "cierra el programa", "dibuja la pantalla"], correctIndex: 1, explanation: "El bucle repite un bloque de instrucciones varias veces." },
    ],
  },
  {
    id: "t3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "⚙️ 3º ESO superado",
    questions: [
      { question: "¿Cuál de estas energías es renovable?", options: ["el carbón", "la eólica", "el petróleo", "el gas natural"], correctIndex: 1, explanation: "El viento no se agota: la energía eólica es renovable." },
      { question: "¿Qué transforma un panel fotovoltaico?", options: ["el viento en electricidad", "la luz del sol en electricidad", "el agua en vapor", "el calor en movimiento"], correctIndex: 1, explanation: "Las células fotovoltaicas convierten la luz solar en corriente eléctrica." },
      { question: "¿Qué componente electrónico deja pasar la corriente en un solo sentido?", options: ["la resistencia", "el diodo", "el condensador", "el interruptor"], correctIndex: 1, explanation: "El diodo conduce en un sentido y bloquea en el contrario." },
      { question: "¿Qué componente se opone al paso de la corriente?", options: ["la resistencia", "el diodo", "el cable", "la pila"], correctIndex: 0, explanation: "La resistencia limita la corriente que circula." },
      { question: "¿Qué mide un polímetro?", options: ["solo la tensión", "tensión, intensidad y resistencia", "solo la potencia", "la temperatura"], correctIndex: 1, explanation: "El polímetro reúne voltímetro, amperímetro y óhmetro." },
      { question: "¿Qué es un algoritmo?", options: ["un lenguaje de programación", "una secuencia ordenada de pasos para resolver un problema", "un tipo de ordenador", "un error del programa"], correctIndex: 1, explanation: "Antes de programar se diseña el algoritmo." },
      { question: "En programación, ¿qué es una variable?", options: ["una orden que se repite", "un espacio donde se guarda un dato que puede cambiar", "un error", "un tipo de bucle"], correctIndex: 1, explanation: "La variable guarda un valor al que se le pone un nombre." },
      { question: "¿Qué hace una instrucción condicional (si… entonces)?", options: ["repite acciones sin parar", "ejecuta algo solo si se cumple una condición", "guarda el programa", "borra una variable"], correctIndex: 1, explanation: "Permite que el programa tome decisiones." },
      { question: "¿Qué es una dirección IP?", options: ["la contraseña del wifi", "el número que identifica un dispositivo en la red", "el nombre de una web", "un tipo de cable"], correctIndex: 1, explanation: "Cada dispositivo conectado tiene su dirección IP." },
      { question: "¿Qué indica que una web use HTTPS?", options: ["que es gratuita", "que la conexión va cifrada", "que es española", "que no tiene publicidad"], correctIndex: 1, explanation: "La s es de seguro: los datos viajan cifrados." },
      { question: "¿Qué es el phishing?", options: ["un tipo de virus que borra archivos", "engañar haciéndose pasar por otro para robar datos", "una copia de seguridad", "un buscador de internet"], correctIndex: 1, explanation: "Suele llegar por correo imitando a un banco o una tienda." },
      { question: "¿Qué material se usa normalmente en una impresora 3D doméstica?", options: ["acero", "plástico PLA", "vidrio", "madera"], correctIndex: 1, explanation: "El PLA es un plástico de origen vegetal muy usado en impresión 3D." },
    ],
  },
];

export const tecnologiaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "tecnologia" as const,
    stage: grade.stage,
    topic: grade.title,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const tecnologiaGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `tecnologia-${grade.id}`,
  type: "mission",
  subjectId: "tecnologia",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Tecnología · ${grade.title}`,
  narrative: `Repasa Tecnología y Digitalización de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-tecnologia-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
