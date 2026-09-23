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

const grades: GradeDefinition[] = [
  {
    id: "l1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "📖 1º Primaria superado",
    questions: [
      { tema: "Lectoescritura", question: "¿Por qué letra empieza la palabra \"casa\"?", options: ["S", "C", "K", "A"], correctIndex: 1, explanation: "\"Casa\" empieza por la letra C." },
      { tema: "Lectoescritura", question: "¿Cuántas sílabas tiene la palabra \"pelota\"?", options: ["2", "3", "4", "1"], correctIndex: 1, explanation: "Pe-lo-ta: tiene 3 sílabas." },
      { tema: "Lectoescritura", question: "¿Cuántas sílabas tiene la palabra \"sol\"?", options: ["1", "2", "3", "4"], correctIndex: 0, explanation: "\"Sol\" se dice de una sola vez: 1 sílaba." },
      { tema: "Lectoescritura", question: "¿Qué vocal falta en \"c_sa\"?", options: ["e", "i", "a", "o"], correctIndex: 2, explanation: "La palabra completa es \"casa\"." },
      { tema: "Literatura", question: "¿Qué palabra rima con \"gato\"?", options: ["perro", "pato", "casa", "sol"], correctIndex: 1, explanation: "\"Gato\" y \"pato\" terminan igual: -ato." },
      { tema: "Lectoescritura", question: "¿Cuántas letras tiene la palabra \"mesa\"?", options: ["3", "4", "5", "6"], correctIndex: 1, explanation: "M-e-s-a: son 4 letras." },
      { tema: "Lectoescritura", question: "¿Cuál de estas palabras empieza por M?", options: ["nube", "mano", "pan", "luz"], correctIndex: 1, explanation: "\"Mano\" empieza por M." },
      { tema: "Lectoescritura", question: "¿Cuántas vocales hay en la palabra \"oso\"?", options: ["1", "2", "3", "0"], correctIndex: 1, explanation: "En \"oso\" hay dos vocales: o, o." },
    ],
  },
  {
    id: "l2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "📖 2º Primaria superado",
    questions: [
      { tema: "Gramática", question: "¿Cuál es el plural de \"lápiz\"?", options: ["lápizs", "lápices", "lápizes", "lápiz"], correctIndex: 1, explanation: "Las palabras acabadas en -z hacen el plural en -ces: lápices." },
      { tema: "Ortografía", question: "¿Qué signo se pone al final de una oración?", options: ["La coma", "El punto", "El guion", "Nada"], correctIndex: 1, explanation: "Las oraciones terminan con un punto." },
      { tema: "Ortografía", question: "¿Con qué letra se escriben los nombres propios?", options: ["Con mayúscula", "Con minúscula", "Con tilde", "Da igual"], correctIndex: 0, explanation: "Los nombres propios, como Ana o Madrid, van con mayúscula." },
      { tema: "Gramática", question: "¿Qué artículo acompaña a \"casa\"?", options: ["el", "la", "los", "un"], correctIndex: 1, explanation: "\"Casa\" es femenino singular: la casa." },
      { tema: "Gramática", question: "¿Cuál es el plural de \"pez\"?", options: ["pezes", "peces", "pezs", "pez"], correctIndex: 1, explanation: "Pez pasa a peces en plural." },
      { tema: "Lectoescritura", question: "¿Cuántas sílabas tiene \"mariposa\"?", options: ["3", "4", "5", "2"], correctIndex: 1, explanation: "Ma-ri-po-sa: 4 sílabas." },
      { tema: "Ortografía", question: "¿Cuál de estas palabras está bien escrita?", options: ["bizicleta", "bicicleta", "vicicleta", "bicicletta"], correctIndex: 1, explanation: "Se escribe \"bicicleta\", con c." },
      { tema: "Gramática", question: "¿Cuál es el femenino de \"niño\"?", options: ["niñas", "niña", "niñe", "nena"], correctIndex: 1, explanation: "El femenino de niño es niña." },
    ],
  },
  {
    id: "l3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "📖 3º Primaria superado",
    questions: [
      { tema: "Gramática", question: "¿Qué tipo de palabra es \"correr\"?", options: ["Un sustantivo", "Un verbo", "Un adjetivo", "Un artículo"], correctIndex: 1, explanation: "\"Correr\" expresa una acción, por eso es un verbo." },
      { tema: "Vocabulario", question: "¿Cuál es un sinónimo de \"bonito\"?", options: ["feo", "hermoso", "grande", "lento"], correctIndex: 1, explanation: "Bonito y hermoso significan lo mismo." },
      { tema: "Vocabulario", question: "¿Cuál es el antónimo de \"grande\"?", options: ["enorme", "alto", "pequeño", "ancho"], correctIndex: 2, explanation: "El contrario de grande es pequeño." },
      { tema: "Gramática", question: "¿Cuál de estas palabras es un adjetivo?", options: ["mesa", "alto", "saltar", "el"], correctIndex: 1, explanation: "\"Alto\" describe cómo es algo: es un adjetivo." },
      { tema: "Gramática", question: "En \"El perro ladra\", ¿cuál es el sustantivo?", options: ["El", "perro", "ladra", "ninguno"], correctIndex: 1, explanation: "\"Perro\" nombra a un ser: es el sustantivo." },
      { tema: "Lectoescritura", question: "¿Cuántas sílabas tiene \"murciélago\"?", options: ["3", "4", "5", "2"], correctIndex: 1, explanation: "Mur-cié-la-go: 4 sílabas." },
      { tema: "Vocabulario", question: "¿Cuál es un sinónimo de \"rápido\"?", options: ["veloz", "lento", "pesado", "tranquilo"], correctIndex: 0, explanation: "Rápido y veloz significan lo mismo." },
      { tema: "Gramática", question: "En \"La casa es grande\", ¿cuál es el adjetivo?", options: ["La", "casa", "es", "grande"], correctIndex: 3, explanation: "\"Grande\" dice cómo es la casa: es el adjetivo." },
    ],
  },
  {
    id: "l4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "📖 4º Primaria superado",
    questions: [
      { tema: "Gramática", question: "El verbo \"comí\" está en tiempo...", options: ["presente", "pasado", "futuro", "ninguno"], correctIndex: 1, explanation: "\"Comí\" indica algo que ya ocurrió: pasado." },
      { tema: "Gramática", question: "El verbo \"jugaremos\" está en tiempo...", options: ["presente", "pasado", "futuro", "ninguno"], correctIndex: 2, explanation: "\"Jugaremos\" indica algo que va a ocurrir: futuro." },
      { tema: "Ortografía", question: "¿Cuál de estas palabras lleva tilde?", options: ["camion", "mesa", "papel", "reloj"], correctIndex: 0, explanation: "Se escribe \"camión\", con tilde en la o." },
      { tema: "Vocabulario", question: "¿Cuál es el antónimo de \"claro\"?", options: ["blanco", "oscuro", "limpio", "brillante"], correctIndex: 1, explanation: "El contrario de claro es oscuro." },
      { tema: "Ortografía", question: "¿Cuál de estas palabras es aguda?", options: ["casa", "reloj", "lápiz", "árbol"], correctIndex: 1, explanation: "En \"reloj\" la fuerza recae en la última sílaba: es aguda." },
      { tema: "Gramática", question: "¿Cuál es el diminutivo de \"perro\"?", options: ["perrazo", "perrito", "perruno", "perrera"], correctIndex: 1, explanation: "El diminutivo se forma con -ito: perrito." },
      { tema: "Gramática", question: "¿Qué tipo de palabra es \"rápidamente\"?", options: ["sustantivo", "adjetivo", "adverbio", "verbo"], correctIndex: 2, explanation: "Dice cómo se hace la acción: es un adverbio." },
      { tema: "Gramática", question: "En \"Los niños juegan\", ¿cuál es el sujeto?", options: ["juegan", "Los niños", "niños juegan", "no tiene"], correctIndex: 1, explanation: "El sujeto es quien realiza la acción: los niños." },
    ],
  },
  {
    id: "l5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "📖 5º Primaria superado",
    questions: [
      { tema: "Ortografía", question: "¿Cómo se clasifica la palabra \"árbol\" por su acento?", options: ["aguda", "llana", "esdrújula", "sobresdrújula"], correctIndex: 1, explanation: "La fuerza está en la penúltima sílaba (ár-bol): es llana." },
      { tema: "Ortografía", question: "¿Cómo se clasifica la palabra \"médico\"?", options: ["aguda", "llana", "esdrújula", "sobresdrújula"], correctIndex: 2, explanation: "La fuerza está en la antepenúltima sílaba (mé-di-co): es esdrújula." },
      { tema: "Gramática", question: "En \"Mi hermana canta canciones\", ¿cuál es el predicado?", options: ["Mi hermana", "canta canciones", "canciones", "Mi"], correctIndex: 1, explanation: "El predicado es lo que se dice del sujeto: canta canciones." },
      { tema: "Ortografía", question: "¿Cuál de estas palabras es esdrújula?", options: ["pájaro", "cantar", "camino", "papel"], correctIndex: 0, explanation: "Pá-ja-ro lleva la fuerza en la antepenúltima sílaba." },
      { tema: "Gramática", question: "¿Qué pronombre personal corresponde a la 1ª persona del plural?", options: ["yo", "nosotros", "vosotros", "ellos"], correctIndex: 1, explanation: "\"Nosotros\" es la 1ª persona del plural." },
      { tema: "Vocabulario", question: "¿Cuál es un sinónimo de \"comenzar\"?", options: ["terminar", "empezar", "seguir", "parar"], correctIndex: 1, explanation: "Comenzar y empezar significan lo mismo." },
      { tema: "Gramática", question: "¿De qué verbo viene la forma \"había\"?", options: ["hacer", "haber", "hablar", "hallar"], correctIndex: 1, explanation: "\"Había\" es una forma del verbo haber." },
      { tema: "Vocabulario", question: "¿Cuál es el antónimo de \"generoso\"?", options: ["amable", "tacaño", "alegre", "valiente"], correctIndex: 1, explanation: "El contrario de generoso es tacaño." },
    ],
  },
  {
    id: "l6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "📖 6º Primaria superado",
    questions: [
      { tema: "Gramática", question: "En \"Ana compró un libro\", ¿cuál es el complemento directo?", options: ["Ana", "compró", "un libro", "no tiene"], correctIndex: 2, explanation: "Lo comprado es \"un libro\": complemento directo." },
      { tema: "Ortografía", question: "¿Qué forma es correcta: \"Voy ___ qué pasa\"?", options: ["haber", "a ver", "haver", "aver"], correctIndex: 1, explanation: "Se escribe \"a ver\" cuando significa mirar o comprobar." },
      { tema: "Gramática", question: "¿Qué tipo de oración es \"¡Qué alegría!\"?", options: ["enunciativa", "interrogativa", "exclamativa", "imperativa"], correctIndex: 2, explanation: "Expresa emoción y lleva signos de exclamación." },
      { tema: "Ortografía", question: "¿Cuál está bien escrita?", options: ["ubo", "hubo", "huvo", "uvo"], correctIndex: 1, explanation: "Del verbo haber: \"hubo\", con h y con b." },
      { tema: "Gramática", question: "En \"El coche rojo corre\", ¿cuál es el núcleo del sujeto?", options: ["El", "coche", "rojo", "corre"], correctIndex: 1, explanation: "El núcleo del sujeto es el sustantivo: coche." },
      { tema: "Vocabulario", question: "¿Cuál es un sinónimo de \"sin embargo\"?", options: ["además", "no obstante", "porque", "entonces"], correctIndex: 1, explanation: "Ambas expresan contraste entre dos ideas." },
      { tema: "Ortografía", question: "¿Se escribe con B o con V el animal \"___urro\"?", options: ["burro", "vurro", "bhurro", "vhurro"], correctIndex: 0, explanation: "Se escribe \"burro\", con b." },
      { tema: "Literatura", question: "¿Qué figura literaria hay en \"sus ojos son dos luceros\"?", options: ["comparación", "metáfora", "hipérbole", "rima"], correctIndex: 1, explanation: "Identifica una cosa con otra sin usar \"como\": es una metáfora." },
    ],
  },
  {
    id: "l1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "✒️ 1º ESO superado",
    questions: [
      { tema: "Textos y comprensión", question: "¿Qué tipo de texto cuenta hechos que les ocurren a unos personajes?", options: ["descriptivo", "narrativo", "instructivo", "argumentativo"], correctIndex: 1, explanation: "Un texto que narra hechos es narrativo." },
      { tema: "Gramática", question: "En \"Luis estudia mucho\", ¿cuál es el verbo?", options: ["Luis", "estudia", "mucho", "no hay"], correctIndex: 1, explanation: "El verbo es \"estudia\"." },
      { tema: "Gramática", question: "¿Qué tipo de palabra es \"muy\" en \"muy alto\"?", options: ["adjetivo", "adverbio", "sustantivo", "determinante"], correctIndex: 1, explanation: "\"Muy\" modifica al adjetivo: es un adverbio." },
      { tema: "Textos y comprensión", question: "¿Qué tipo de texto es una receta de cocina?", options: ["narrativo", "instructivo", "argumentativo", "lírico"], correctIndex: 1, explanation: "Da instrucciones paso a paso: es instructivo." },
      { tema: "Gramática", question: "En \"esta casa\", ¿cuál es el determinante?", options: ["esta", "casa", "los dos", "ninguno"], correctIndex: 0, explanation: "\"Esta\" es un determinante demostrativo." },
      { tema: "Literatura", question: "¿Qué figura literaria es \"blanco como la nieve\"?", options: ["metáfora", "comparación", "hipérbole", "personificación"], correctIndex: 1, explanation: "Usa \"como\" para comparar: es una comparación o símil." },
      { tema: "Gramática", question: "En \"Juan leyó el periódico\", ¿cuál es el complemento directo?", options: ["Juan", "leyó", "el periódico", "no tiene"], correctIndex: 2, explanation: "Lo leído es \"el periódico\"." },
      { tema: "Vocabulario", question: "¿Qué significa el prefijo \"in-\" en \"incapaz\"?", options: ["repetición", "negación", "tamaño", "cantidad"], correctIndex: 1, explanation: "\"In-\" niega: incapaz es \"no capaz\"." },
    ],
  },
  {
    id: "l2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "✒️ 2º ESO superado",
    questions: [
      { tema: "Gramática", question: "En \"Le di un regalo a María\", ¿cuál es el complemento indirecto?", options: ["un regalo", "a María", "Le di", "no tiene"], correctIndex: 1, explanation: "Quien recibe la acción es \"a María\": complemento indirecto." },
      { tema: "Textos y comprensión", question: "¿Qué tipo de texto defiende una opinión con razones?", options: ["narrativo", "descriptivo", "argumentativo", "instructivo"], correctIndex: 2, explanation: "Un texto que argumenta una postura es argumentativo." },
      { tema: "Gramática", question: "En \"Estudio en la biblioteca\", ¿cuál es el complemento circunstancial de lugar?", options: ["Estudio", "en la biblioteca", "la", "no tiene"], correctIndex: 1, explanation: "Indica dónde ocurre la acción." },
      { tema: "Gramática", question: "¿Qué caracteriza a una oración impersonal?", options: ["No tiene verbo", "No tiene sujeto", "No tiene predicado", "Siempre es negativa"], correctIndex: 1, explanation: "Las impersonales, como \"Llueve\", carecen de sujeto." },
      { tema: "Vocabulario", question: "¿Cuál es el antónimo de \"efímero\"?", options: ["breve", "duradero", "pequeño", "rápido"], correctIndex: 1, explanation: "Efímero es lo que dura poco; su contrario es duradero." },
      { tema: "Literatura", question: "¿Qué figura literaria es \"la luna me sonríe\"?", options: ["metáfora", "personificación", "hipérbole", "comparación"], correctIndex: 1, explanation: "Atribuye una acción humana a algo que no lo es." },
      { tema: "Vocabulario", question: "¿Qué relación hay entre \"casa\" y \"hogar\"?", options: ["son antónimos", "son sinónimos", "son homófonos", "no hay relación"], correctIndex: 1, explanation: "Significan algo muy parecido: son sinónimos." },
      { tema: "Gramática", question: "¿Cuál es el sujeto de la oración \"Llueve mucho\"?", options: ["Llueve", "mucho", "él", "no tiene sujeto"], correctIndex: 3, explanation: "Es una oración impersonal: no tiene sujeto." },
    ],
  },
  {
    id: "l3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "✒️ 3º ESO superado",
    questions: [
      { tema: "Gramática", question: "¿Qué tipo de oración subordinada hay en \"Dijo que vendría\"?", options: ["sustantiva", "adjetiva", "adverbial", "coordinada"], correctIndex: 0, explanation: "\"Que vendría\" funciona como complemento directo: subordinada sustantiva." },
      { tema: "Literatura", question: "¿Qué género literario está escrito para ser representado?", options: ["lírico", "narrativo", "dramático", "ensayo"], correctIndex: 2, explanation: "El teatro pertenece al género dramático." },
      { tema: "Literatura", question: "¿Qué expresa principalmente el género lírico?", options: ["hechos", "sentimientos", "instrucciones", "noticias"], correctIndex: 1, explanation: "La lírica expresa sentimientos y emociones." },
      { tema: "Literatura", question: "¿Qué figura literaria repite sonidos para crear un efecto?", options: ["metáfora", "aliteración", "hipérbole", "elipsis"], correctIndex: 1, explanation: "La aliteración repite sonidos semejantes." },
      { tema: "Vocabulario", question: "¿Qué significa \"elocuente\"?", options: ["que habla bien", "que escucha", "que escribe mal", "que calla"], correctIndex: 0, explanation: "Elocuente es quien se expresa con facilidad y convence." },
      { tema: "Textos y comprensión", question: "Si el narrador cuenta la historia diciendo \"yo\", el narrador es...", options: ["en 1ª persona", "en 3ª persona", "omnisciente", "externo"], correctIndex: 0, explanation: "Cuando el narrador habla de sí mismo es narrador en 1ª persona." },
      { tema: "Vocabulario", question: "¿Cuál es un sinónimo de \"sucinto\"?", options: ["extenso", "breve", "confuso", "lento"], correctIndex: 1, explanation: "Sucinto significa breve y conciso." },
      { tema: "Literatura", question: "¿Qué recurso se usa en \"Verde que te quiero verde\"?", options: ["hipérbole", "repetición", "elipsis", "metonimia"], correctIndex: 1, explanation: "Repite la palabra \"verde\" con intención expresiva." },
    ],
  },
  {
    id: "l4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "✒️ 4º ESO superado",
    questions: [
      { tema: "Literatura", question: "¿Quién escribió \"Don Quijote de la Mancha\"?", options: ["Lope de Vega", "Miguel de Cervantes", "Federico García Lorca", "Antonio Machado"], correctIndex: 1, explanation: "El Quijote es obra de Miguel de Cervantes." },
      { tema: "Literatura", question: "¿A qué grupo literario pertenece Federico García Lorca?", options: ["Generación del 98", "Generación del 27", "Romanticismo", "Siglo de Oro"], correctIndex: 1, explanation: "Lorca es uno de los poetas de la Generación del 27." },
      { tema: "Gramática", question: "¿Qué tipo de subordinada es \"que compré\" en \"El libro que compré\"?", options: ["sustantiva", "adjetiva o de relativo", "adverbial", "coordinada"], correctIndex: 1, explanation: "Complementa al sustantivo \"libro\": es adjetiva o de relativo." },
      { tema: "Gramática", question: "¿Qué nexo es típico de una oración coordinada adversativa?", options: ["y", "pero", "o", "porque"], correctIndex: 1, explanation: "\"Pero\" une dos ideas que se contraponen." },
      { tema: "Literatura", question: "¿Quién escribió \"La casa de Bernarda Alba\"?", options: ["Federico García Lorca", "Cervantes", "Quevedo", "Bécquer"], correctIndex: 0, explanation: "Es una de las grandes obras teatrales de Lorca." },
      { tema: "Literatura", question: "¿Qué caracteriza al Romanticismo?", options: ["la razón por encima de todo", "la exaltación de los sentimientos", "el realismo social", "la crítica científica"], correctIndex: 1, explanation: "El Romanticismo del siglo XIX exalta el sentimiento y la libertad." },
      { tema: "Literatura", question: "¿Qué figura literaria es \"llevo mil años esperándote\"?", options: ["metáfora", "hipérbole", "aliteración", "personificación"], correctIndex: 1, explanation: "Exagera la realidad: es una hipérbole." },
      { tema: "Gramática", question: "¿Qué es una perífrasis verbal?", options: ["un verbo solo", "un verbo auxiliar más otro verbo", "dos sustantivos juntos", "un adverbio"], correctIndex: 1, explanation: "Por ejemplo \"tengo que ir\": auxiliar + verbo principal." },
    ],
  },
];

export const lenguaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "lengua" as const,
    stage: grade.stage,
    topic: q.tema,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const lenguaGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `lengua-${grade.id}`,
  type: "mission",
  subjectId: "lengua",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Lengua · ${grade.title}`,
  narrative: `Repasa lengua de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-lengua-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
