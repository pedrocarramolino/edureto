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
      { tema: "Materiales y proceso", question: "¿Qué es el proceso tecnológico?", options: ["una máquina moderna", "los pasos ordenados para resolver un problema y crear un objeto", "un programa de ordenador", "un tipo de material"], correctIndex: 1, explanation: "Es el método de trabajo: del problema al objeto terminado." },
      { tema: "Materiales y proceso", question: "¿Cuál es el primer paso del proceso tecnológico?", options: ["construir el objeto", "identificar el problema o la necesidad", "dibujar los planos", "comprar los materiales"], correctIndex: 1, explanation: "Primero hay que saber qué problema se quiere resolver." },
      { tema: "Materiales y proceso", question: "¿Cuál de estos materiales es de origen vegetal?", options: ["el acero", "la madera", "el vidrio", "el aluminio"], correctIndex: 1, explanation: "La madera se obtiene de los árboles." },
      { tema: "Materiales y proceso", question: "¿De qué materia prima se obtiene el papel?", options: ["del petróleo", "de la madera", "de la arena", "del hierro"], correctIndex: 1, explanation: "El papel se fabrica con la celulosa de la madera." },
      { tema: "Materiales y proceso", question: "¿Qué instrumento mide piezas pequeñas con precisión?", options: ["la regla", "el calibre", "la escuadra", "el compás"], correctIndex: 1, explanation: "El calibre o pie de rey mide décimas de milímetro." },
      { tema: "Informática", question: "¿Qué es el software de un ordenador?", options: ["las piezas físicas", "los programas", "la pantalla", "los cables"], correctIndex: 1, explanation: "Software son los programas; hardware, las piezas que se tocan." },
      { tema: "Informática", question: "¿Cuál es un dispositivo de entrada?", options: ["la impresora", "el teclado", "el monitor", "los altavoces"], correctIndex: 1, explanation: "Con el teclado metemos información en el ordenador." },
      { tema: "Informática", question: "¿Qué hace la CPU de un ordenador?", options: ["guarda los archivos", "procesa la información", "muestra la imagen", "conecta a internet"], correctIndex: 1, explanation: "La CPU es el procesador: hace los cálculos y ejecuta las órdenes." },
      { tema: "Internet y seguridad", question: "¿Cómo es una contraseña segura?", options: ["corta y fácil de recordar", "larga y con letras, números y símbolos", "tu fecha de nacimiento", "el nombre de tu mascota"], correctIndex: 1, explanation: "Cuanto más larga y variada, más difícil de adivinar." },
      { tema: "Materiales y proceso", question: "¿Qué hay que hacer antes de usar una herramienta del taller?", options: ["nada especial", "ponerse las protecciones y conocer su uso", "quitarle las protecciones", "probarla deprisa"], correctIndex: 1, explanation: "La seguridad es el primer paso en el taller." },
      { tema: "Materiales y proceso", question: "En un dibujo a escala 1:2, el objeto se dibuja…", options: ["al doble de grande", "a la mitad de grande", "del mismo tamaño", "diez veces más pequeño"], correctIndex: 1, explanation: "La escala 1:2 reduce el objeto a la mitad." },
      { tema: "Informática", question: "¿Cuál de estas extensiones es de un archivo de imagen?", options: [".jpg", ".exe", ".docx", ".mp3"], correctIndex: 0, explanation: ".jpg es una imagen; .mp3 es sonido y .docx un documento." },
      { tema: "Materiales y proceso", question: "¿Qué material se fabrica con arena y se usa en las ventanas?", options: ["el plástico", "el vidrio", "la madera", "el acero"], correctIndex: 1, explanation: "El vidrio se obtiene fundiendo arena de sílice." },
      { tema: "Materiales y proceso", question: "¿Qué propiedad tiene un material que se puede estirar en hilos, como el cobre?", options: ["fragilidad", "dureza", "ductilidad", "opacidad"], correctIndex: 2, explanation: "Los materiales dúctiles se pueden estirar en hilos sin romperse." },
      { tema: "Materiales y proceso", question: "¿De qué material son la mayoría de las botellas de agua?", options: ["vidrio templado", "aluminio", "cartón", "plástico (PET)"], correctIndex: 3, explanation: "El PET es un plástico ligero y reciclable: va al contenedor amarillo." },
      { tema: "Materiales y proceso", question: "¿Qué herramienta se usa para cortar madera?", options: ["la sierra", "el martillo", "el destornillador", "los alicates"], correctIndex: 0, explanation: "La sierra corta; el martillo sirve para clavar." },
      { tema: "Informática", question: "¿Qué es el hardware de un ordenador?", options: ["los programas", "las partes físicas", "internet", "los archivos"], correctIndex: 1, explanation: "El hardware se puede tocar: pantalla, teclado, placa base..." },
      { tema: "Informática", question: "¿Cuál de estos es un dispositivo de salida?", options: ["el ratón", "el teclado", "la impresora", "el micrófono"], correctIndex: 2, explanation: "La impresora saca información del ordenador; los demás la meten." },
      { tema: "Informática", question: "¿Cuántos bytes tiene aproximadamente un kilobyte?", options: ["10", "100", "1.000.000", "1.000"], correctIndex: 3, explanation: "Un kilobyte son unos mil bytes (1.024, para ser exactos)." },
      { tema: "Internet y seguridad", question: "¿Qué debes hacer si un desconocido te pide por internet fotos o datos personales?", options: ["no responder y contárselo a un adulto de confianza", "enviarle lo que pide", "darle tu dirección", "quedar con él"], correctIndex: 0, explanation: "Nunca compartas datos ni fotos con desconocidos: pide ayuda a un adulto." },
    ],
  },
  {
    id: "t2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 2,
    badge: "⚙️ 2º ESO superado",
    questions: [
      { tema: "Estructuras y mecanismos", question: "¿Qué es una estructura?", options: ["un tipo de motor", "el conjunto de elementos que soporta cargas sin romperse", "un programa informático", "una herramienta de corte"], correctIndex: 1, explanation: "La estructura aguanta el peso y mantiene la forma del objeto." },
      { tema: "Estructuras y mecanismos", question: "¿Qué esfuerzo sufre una cuerda cuando tiramos de ella?", options: ["compresión", "tracción", "flexión", "torsión"], correctIndex: 1, explanation: "Estirar un elemento por sus extremos es tracción." },
      { tema: "Estructuras y mecanismos", question: "¿Qué esfuerzo sufre una columna que aguanta un tejado?", options: ["tracción", "compresión", "torsión", "cortadura"], correctIndex: 1, explanation: "El peso la aplasta: trabaja a compresión." },
      { tema: "Estructuras y mecanismos", question: "¿Qué mecanismo convierte el movimiento circular en lineal?", options: ["la polea fija", "el piñón-cremallera", "el engranaje recto", "la biela de dos ruedas"], correctIndex: 1, explanation: "El piñón gira y la cremallera avanza en línea recta." },
      { tema: "Estructuras y mecanismos", question: "¿Para qué sirve una polea?", options: ["para generar electricidad", "para levantar cargas con menos esfuerzo o cambiar la dirección de la fuerza", "para medir ángulos", "para cortar materiales"], correctIndex: 1, explanation: "Las poleas facilitan levantar pesos y redirigen la fuerza." },
      { tema: "Estructuras y mecanismos", question: "Si la rueda motriz es más pequeña que la conducida, la conducida gira…", options: ["más deprisa", "más despacio", "a la misma velocidad", "al revés y más deprisa"], correctIndex: 1, explanation: "La rueda grande da menos vueltas: gira más despacio y con más fuerza." },
      { tema: "Electricidad y electrónica", question: "¿Cómo están conectados los componentes en un circuito en serie?", options: ["uno detrás de otro, en un solo camino", "cada uno en su propio camino", "en paralelo al generador", "sin conexión entre ellos"], correctIndex: 0, explanation: "En serie la corriente recorre un único camino." },
      { tema: "Electricidad y electrónica", question: "En un circuito en serie, si se funde una bombilla…", options: ["las demás siguen encendidas", "se apagan todas", "brillan más", "no pasa nada"], correctIndex: 1, explanation: "Al cortarse el único camino, deja de circular la corriente." },
      { tema: "Electricidad y electrónica", question: "¿Cuál es la unidad de resistencia eléctrica?", options: ["el amperio", "el ohmio", "el voltio", "el vatio"], correctIndex: 1, explanation: "La resistencia se mide en ohmios (Ω)." },
      { tema: "Informática", question: "En una hoja de cálculo, ¿qué es una celda?", options: ["un tipo de gráfico", "la casilla donde se cruzan una fila y una columna", "una hoja entera", "una fórmula"], correctIndex: 1, explanation: "Cada celda tiene una referencia, como A1 o C5." },
      { tema: "Informática", question: "¿Con qué símbolo empieza una fórmula en una hoja de cálculo?", options: ["+", "=", "#", "$"], correctIndex: 1, explanation: "Escribir = le dice al programa que va a calcular algo." },
      { tema: "Programación", question: "En programación, ¿qué hace un bucle?", options: ["guarda un dato", "repite instrucciones", "cierra el programa", "dibuja la pantalla"], correctIndex: 1, explanation: "El bucle repite un bloque de instrucciones varias veces." },
      { tema: "Estructuras y mecanismos", question: "¿Qué esfuerzo sufre una viga que se dobla con un peso encima?", options: ["tracción", "flexión", "torsión", "cortadura"], correctIndex: 1, explanation: "Cuando una pieza se dobla, sufre flexión." },
      { tema: "Estructuras y mecanismos", question: "¿Qué esfuerzo sufre una llave al girarla en la cerradura?", options: ["compresión", "flexión", "torsión", "tracción"], correctIndex: 2, explanation: "Al retorcer una pieza sobre su eje, sufre torsión." },
      { tema: "Estructuras y mecanismos", question: "¿Por qué se usan triángulos en estructuras como las torres eléctricas?", options: ["porque pesan más", "porque son más bonitos", "porque ahorran pintura", "porque son formas que no se deforman"], correctIndex: 3, explanation: "La triangulación hace que la estructura sea rígida." },
      { tema: "Estructuras y mecanismos", question: "¿Qué tipo de palanca es una balanza de platos?", options: ["de primer grado", "de segundo grado", "de tercer grado", "no es una palanca"], correctIndex: 0, explanation: "El punto de apoyo está en el centro, entre las dos fuerzas." },
      { tema: "Electricidad y electrónica", question: "En un circuito en paralelo, ¿qué pasa si se funde una bombilla?", options: ["se apagan todas", "las demás siguen encendidas", "brillan menos", "explota el circuito"], correctIndex: 1, explanation: "Cada bombilla tiene su propio camino, así que las demás siguen funcionando." },
      { tema: "Electricidad y electrónica", question: "¿Qué componente abre o cierra un circuito?", options: ["la pila", "la bombilla", "el interruptor", "el cable"], correctIndex: 2, explanation: "El interruptor deja pasar la corriente o la corta." },
      { tema: "Informática", question: "En una hoja de cálculo, ¿qué hace la fórmula =SUMA(A1:A3)?", options: ["multiplica A1 por A3", "resta A3 de A1", "cuenta las celdas vacías", "suma A1, A2 y A3"], correctIndex: 3, explanation: "Los dos puntos indican un rango: de A1 a A3." },
      { tema: "Programación", question: "En Scratch, ¿qué tipo de bloque hace que algo empiece al pulsar la bandera verde?", options: ["un bloque de eventos", "un bloque de sonido", "un bloque de apariencia", "un bloque de lápiz"], correctIndex: 0, explanation: "Los bloques de eventos ponen en marcha los programas." },
    ],
  },
  {
    id: "t3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "⚙️ 3º ESO superado",
    questions: [
      { tema: "Energía", question: "¿Cuál de estas energías es renovable?", options: ["el carbón", "la eólica", "el petróleo", "el gas natural"], correctIndex: 1, explanation: "El viento no se agota: la energía eólica es renovable." },
      { tema: "Energía", question: "¿Qué transforma un panel fotovoltaico?", options: ["el viento en electricidad", "la luz del sol en electricidad", "el agua en vapor", "el calor en movimiento"], correctIndex: 1, explanation: "Las células fotovoltaicas convierten la luz solar en corriente eléctrica." },
      { tema: "Electricidad y electrónica", question: "¿Qué componente electrónico deja pasar la corriente en un solo sentido?", options: ["la resistencia", "el diodo", "el condensador", "el interruptor"], correctIndex: 1, explanation: "El diodo conduce en un sentido y bloquea en el contrario." },
      { tema: "Electricidad y electrónica", question: "¿Qué componente se opone al paso de la corriente?", options: ["la resistencia", "el diodo", "el cable", "la pila"], correctIndex: 0, explanation: "La resistencia limita la corriente que circula." },
      { tema: "Electricidad y electrónica", question: "¿Qué mide un polímetro?", options: ["solo la tensión", "tensión, intensidad y resistencia", "solo la potencia", "la temperatura"], correctIndex: 1, explanation: "El polímetro reúne voltímetro, amperímetro y óhmetro." },
      { tema: "Programación", question: "¿Qué es un algoritmo?", options: ["un lenguaje de programación", "una secuencia ordenada de pasos para resolver un problema", "un tipo de ordenador", "un error del programa"], correctIndex: 1, explanation: "Antes de programar se diseña el algoritmo." },
      { tema: "Programación", question: "En programación, ¿qué es una variable?", options: ["una orden que se repite", "un espacio donde se guarda un dato que puede cambiar", "un error", "un tipo de bucle"], correctIndex: 1, explanation: "La variable guarda un valor al que se le pone un nombre." },
      { tema: "Programación", question: "¿Qué hace una instrucción condicional (si… entonces)?", options: ["repite acciones sin parar", "ejecuta algo solo si se cumple una condición", "guarda el programa", "borra una variable"], correctIndex: 1, explanation: "Permite que el programa tome decisiones." },
      { tema: "Internet y seguridad", question: "¿Qué es una dirección IP?", options: ["la contraseña del wifi", "el número que identifica un dispositivo en la red", "el nombre de una web", "un tipo de cable"], correctIndex: 1, explanation: "Cada dispositivo conectado tiene su dirección IP." },
      { tema: "Internet y seguridad", question: "¿Qué indica que una web use HTTPS?", options: ["que es gratuita", "que la conexión va cifrada", "que es española", "que no tiene publicidad"], correctIndex: 1, explanation: "La s es de seguro: los datos viajan cifrados." },
      { tema: "Internet y seguridad", question: "¿Qué es el phishing?", options: ["un tipo de virus que borra archivos", "engañar haciéndose pasar por otro para robar datos", "una copia de seguridad", "un buscador de internet"], correctIndex: 1, explanation: "Suele llegar por correo imitando a un banco o una tienda." },
      { tema: "Informática", question: "¿Qué material se usa normalmente en una impresora 3D doméstica?", options: ["acero", "plástico PLA", "vidrio", "madera"], correctIndex: 1, explanation: "El PLA es un plástico de origen vegetal muy usado en impresión 3D." },
      { tema: "Energía", question: "¿Qué transforma un aerogenerador?", options: ["la luz en calor", "la energía del viento en electricidad", "el agua en vapor", "el carbón en gas"], correctIndex: 1, explanation: "Las aspas giran con el viento y mueven un generador." },
      { tema: "Energía", question: "¿Cuál de estas fuentes de energía es un combustible fósil?", options: ["la solar", "la eólica", "el gas natural", "la hidráulica"], correctIndex: 2, explanation: "El gas natural es un combustible fósil: se agota." },
      { tema: "Electricidad y electrónica", question: "¿Qué hace un transistor?", options: ["almacena energía como una pila", "emite luz", "mide la temperatura", "amplifica o conmuta señales eléctricas"], correctIndex: 3, explanation: "Los transistores son la base de todos los chips." },
      { tema: "Electricidad y electrónica", question: "¿Qué componente emite luz cuando la corriente pasa en el sentido correcto?", options: ["el LED", "el condensador", "el relé", "la resistencia"], correctIndex: 0, explanation: "LED significa diodo emisor de luz." },
      { tema: "Programación", question: "¿Qué es Arduino?", options: ["un navegador", "una placa programable para proyectos de electrónica", "un antivirus", "una red social"], correctIndex: 1, explanation: "Con Arduino se programan sensores, luces y motores." },
      { tema: "Programación", question: "¿Qué es un lenguaje de programación?", options: ["un idioma extranjero", "un tipo de cable", "un conjunto de reglas para dar instrucciones a un ordenador", "una red wifi"], correctIndex: 2, explanation: "Python o JavaScript son lenguajes de programación." },
      { tema: "Internet y seguridad", question: "¿Qué es la huella digital en internet?", options: ["una contraseña", "un virus", "una foto del dedo", "el rastro de datos que dejamos al usar la red"], correctIndex: 3, explanation: "Lo que publicamos y buscamos deja rastro, y puede durar años." },
      { tema: "Internet y seguridad", question: "¿Qué es la verificación en dos pasos?", options: ["pedir un segundo código además de la contraseña", "cambiar la contraseña cada día", "usar dos navegadores", "tener dos cuentas"], correctIndex: 0, explanation: "Aunque alguien sepa tu contraseña, sin el segundo código no puede entrar." },
    ],
  },
];

export const tecnologiaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "tecnologia" as const,
    stage: grade.stage,
    topic: q.tema,
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
