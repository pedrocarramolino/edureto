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

const grades: GradeDefinition[] = [
  {
    id: "r1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🧠 1º Primaria superado",
    questions: [
      { question: "¿Qué número sigue? 1, 2, 3, 4, ...", options: ["6", "5", "4", "3"], correctIndex: 1, explanation: "Cada número es uno más que el anterior: 5." },
      { question: "¿Qué número sigue? 2, 4, 6, ...", options: ["7", "10", "8", "9"], correctIndex: 2, explanation: "Vamos sumando 2: 6 + 2 = 8." },
      { question: "¿Qué color sigue? rojo, azul, rojo, azul, ...", options: ["verde", "rojo", "azul", "amarillo"], correctIndex: 1, explanation: "Se repiten rojo y azul: toca rojo." },
      { question: "¿Cuál no pertenece al grupo? manzana, pera, plátano, coche", options: ["manzana", "pera", "plátano", "coche"], correctIndex: 3, explanation: "Las demás son frutas; el coche no." },
      { question: "Si hoy es lunes, ¿qué día es mañana?", options: ["Domingo", "Martes", "Miércoles", "Viernes"], correctIndex: 1, explanation: "Después del lunes viene el martes." },
      { question: "¿Qué animal es el más grande?", options: ["ratón", "gato", "elefante", "perro"], correctIndex: 2, explanation: "El elefante es el más grande de todos." },
      { question: "¿Qué forma sigue? círculo, cuadrado, círculo, cuadrado, ...", options: ["triángulo", "cuadrado", "círculo", "estrella"], correctIndex: 2, explanation: "Se alternan círculo y cuadrado: toca círculo." },
      { question: "¿Qué número sigue? 10, 9, 8, 7, ...", options: ["6", "8", "5", "9"], correctIndex: 0, explanation: "Vamos restando 1: 7 - 1 = 6." },
    ],
  },
  {
    id: "r2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🧠 2º Primaria superado",
    questions: [
      { question: "¿Qué número sigue? 5, 10, 15, 20, ...", options: ["21", "30", "25", "22"], correctIndex: 2, explanation: "Vamos sumando 5: 20 + 5 = 25." },
      { question: "¿Cuál no pertenece al grupo? perro, gato, vaca, mesa", options: ["perro", "gato", "vaca", "mesa"], correctIndex: 3, explanation: "Los demás son animales; la mesa no." },
      { question: "Ana es más alta que Luis y Luis es más alto que Pedro. ¿Quién es el más bajo?", options: ["Ana", "Luis", "Pedro", "Son iguales"], correctIndex: 2, explanation: "Si Pedro es más bajo que Luis, también lo es que Ana." },
      { question: "¿Qué número sigue? 1, 3, 5, 7, ...", options: ["8", "9", "10", "11"], correctIndex: 1, explanation: "Son los números impares: después del 7 va el 9." },
      { question: "Si ayer fue martes, ¿qué día es hoy?", options: ["Lunes", "Miércoles", "Jueves", "Martes"], correctIndex: 1, explanation: "El día después del martes es el miércoles." },
      { question: "¿Qué número sigue? 20, 18, 16, 14, ...", options: ["13", "10", "12", "15"], correctIndex: 2, explanation: "Vamos restando 2: 14 - 2 = 12." },
      { question: "Tengo 3 caramelos, me dan 2 más y me como 1. ¿Cuántos tengo?", options: ["4", "5", "6", "3"], correctIndex: 0, explanation: "3 + 2 = 5, y 5 - 1 = 4." },
      { question: "¿Cuál no pertenece al grupo? rojo, verde, azul, silla", options: ["rojo", "verde", "azul", "silla"], correctIndex: 3, explanation: "Los demás son colores; la silla no." },
    ],
  },
  {
    id: "r3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "🧠 3º Primaria superado",
    questions: [
      { question: "¿Qué número sigue? 3, 6, 9, 12, ...", options: ["13", "14", "15", "18"], correctIndex: 2, explanation: "Vamos sumando 3: 12 + 3 = 15." },
      { question: "¿Qué número sigue? 1, 2, 4, 8, ...", options: ["10", "12", "16", "14"], correctIndex: 2, explanation: "Cada número es el doble del anterior: 8 × 2 = 16." },
      { question: "Todos los gatos tienen bigotes. Misi es un gato. ¿Tiene Misi bigotes?", options: ["Sí", "No", "No se puede saber", "Solo a veces"], correctIndex: 0, explanation: "Si todos los gatos tienen bigotes, Misi también." },
      { question: "¿Qué número sigue? 100, 90, 80, 70, ...", options: ["65", "60", "50", "69"], correctIndex: 1, explanation: "Vamos restando 10: 70 - 10 = 60." },
      { question: "¿Qué número falta? 2, 5, 8, __, 14", options: ["10", "11", "12", "9"], correctIndex: 1, explanation: "Vamos sumando 3: 8 + 3 = 11, y 11 + 3 = 14." },
      { question: "Un reloj marca las 3 en punto. Pasan 2 horas. ¿Qué hora es?", options: ["Las 4", "Las 5", "Las 6", "Las 1"], correctIndex: 1, explanation: "3 + 2 = 5: son las 5." },
      { question: "¿Qué letra sigue? A, C, E, G, ...", options: ["H", "I", "J", "K"], correctIndex: 1, explanation: "Se salta una letra cada vez: después de G (saltando H) va la I." },
      { question: "Tengo el doble de canicas que Juan. Juan tiene 6. ¿Cuántas tengo yo?", options: ["8", "10", "12", "3"], correctIndex: 2, explanation: "El doble de 6 es 12." },
    ],
  },
  {
    id: "r4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🧠 4º Primaria superado",
    questions: [
      { question: "¿Qué número sigue? 1, 4, 9, 16, ...", options: ["20", "24", "25", "32"], correctIndex: 2, explanation: "Son los cuadrados: 1², 2², 3², 4²... el siguiente es 5² = 25." },
      { question: "¿Qué número sigue? 2, 6, 18, 54, ...", options: ["108", "162", "72", "216"], correctIndex: 1, explanation: "Cada número se multiplica por 3: 54 × 3 = 162." },
      { question: "Si mañana es sábado, ¿qué día fue ayer?", options: ["Miércoles", "Jueves", "Viernes", "Domingo"], correctIndex: 1, explanation: "Si mañana es sábado, hoy es viernes y ayer fue jueves." },
      { question: "¿Cuál no pertenece al grupo? triángulo, cuadrado, círculo, cubo", options: ["triángulo", "cuadrado", "círculo", "cubo"], correctIndex: 3, explanation: "El cubo es un cuerpo con volumen; los demás son figuras planas." },
      { question: "¿Qué letra sigue? Z, Y, X, W, ...", options: ["U", "V", "T", "A"], correctIndex: 1, explanation: "Es el abecedario al revés: después de W va la V." },
      { question: "Un número multiplicado por 4 da 36. ¿Cuál es ese número?", options: ["8", "9", "32", "40"], correctIndex: 1, explanation: "9 × 4 = 36." },
      { question: "En una fila de 5 niños, Ana está justo en el centro. ¿Cuántos niños tiene a su izquierda?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "En el centro de 5 quedan 2 a cada lado." },
      { question: "¿Qué número sigue? 1, 1, 2, 3, 5, 8, ...", options: ["11", "12", "13", "16"], correctIndex: 2, explanation: "Cada número es la suma de los dos anteriores: 5 + 8 = 13." },
    ],
  },
  {
    id: "r5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🧠 5º Primaria superado",
    questions: [
      { question: "¿Qué número sigue? 2, 3, 5, 7, 11, ...", options: ["12", "13", "15", "17"], correctIndex: 1, explanation: "Son los números primos: después del 11 va el 13." },
      { question: "¿Qué número sigue? 3, 7, 15, 31, ...", options: ["47", "62", "63", "64"], correctIndex: 2, explanation: "Cada número es el doble más uno: 31 × 2 + 1 = 63." },
      { question: "Ningún pez vuela. Nemo es un pez. Entonces...", options: ["Nemo vuela", "Nemo no vuela", "Nemo es un pájaro", "No se puede saber"], correctIndex: 1, explanation: "Si ningún pez vuela y Nemo es un pez, Nemo no vuela." },
      { question: "¿Qué número sigue? 1, 8, 27, 64, ...", options: ["81", "100", "125", "128"], correctIndex: 2, explanation: "Son los cubos: 1³, 2³, 3³, 4³... el siguiente es 5³ = 125." },
      { question: "Un padre tiene 40 años y su hijo 10. ¿Cuántas veces mayor es el padre?", options: ["3", "4", "5", "30"], correctIndex: 1, explanation: "40 ÷ 10 = 4 veces." },
      { question: "Si 4 → 16 y 5 → 25, ¿a qué número corresponde el 6?", options: ["30", "32", "36", "12"], correctIndex: 2, explanation: "Cada número se multiplica por sí mismo: 6 × 6 = 36." },
      { question: "¿Qué letra sigue? B, E, H, K, ...", options: ["L", "M", "N", "O"], correctIndex: 2, explanation: "Se avanza de 3 en 3 letras: K, L, M, N." },
      { question: "Si 3 lápices cuestan 6 €, ¿cuánto cuestan 7 lápices?", options: ["12 €", "14 €", "18 €", "21 €"], correctIndex: 1, explanation: "Cada lápiz cuesta 2 €: 7 × 2 = 14 €." },
    ],
  },
  {
    id: "r6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🧠 6º Primaria superado",
    questions: [
      { question: "¿Qué número sigue? 81, 27, 9, 3, ...", options: ["0", "1", "2", "6"], correctIndex: 1, explanation: "Cada número se divide entre 3: 3 ÷ 3 = 1." },
      { question: "¿Qué número sigue? 2, 5, 10, 17, 26, ...", options: ["35", "36", "37", "38"], correctIndex: 2, explanation: "Se suma +3, +5, +7, +9, +11: 26 + 11 = 37." },
      { question: "Todos los A son B y todos los B son C. Entonces...", options: ["Todos los C son A", "Todos los A son C", "Ningún A es C", "No se puede saber"], correctIndex: 1, explanation: "Si los A están dentro de B y los B dentro de C, los A están dentro de C." },
      { question: "Una madre tiene 3 hijas y cada hija tiene un hermano. ¿Cuántos hijos tiene en total?", options: ["4", "6", "7", "3"], correctIndex: 0, explanation: "Las 3 hijas comparten el mismo hermano: 3 + 1 = 4." },
      { question: "¿Qué número sigue? 1, 2, 6, 24, ...", options: ["48", "72", "96", "120"], correctIndex: 3, explanation: "Se multiplica por 2, 3, 4 y luego por 5: 24 × 5 = 120." },
      { question: "¿Cuántos cuadraditos de 1×1 hay en un cuadrado de 3×3?", options: ["6", "9", "12", "3"], correctIndex: 1, explanation: "3 filas × 3 columnas = 9." },
      { question: "En una carrera adelantas al que va segundo. ¿En qué posición vas ahora?", options: ["Primero", "Segundo", "Tercero", "Último"], correctIndex: 1, explanation: "Ocupas su lugar: vas segundo." },
      { question: "¿Qué número sigue? 10, 11, 13, 16, 20, ...", options: ["24", "25", "26", "30"], correctIndex: 1, explanation: "Se suma +1, +2, +3, +4, +5: 20 + 5 = 25." },
    ],
  },
  {
    id: "r1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🧩 1º ESO superado",
    questions: [
      { question: "¿Qué número sigue? 2, 4, 12, 48, ...", options: ["96", "192", "240", "144"], correctIndex: 2, explanation: "Se multiplica por 2, 3, 4 y luego por 5: 48 × 5 = 240." },
      { question: "Si A > B y B > C, ¿qué es seguro?", options: ["C > A", "A > C", "A = C", "B > A"], correctIndex: 1, explanation: "La relación \"mayor que\" es transitiva: A > C." },
      { question: "Un tren sale a las 10:45 y el viaje dura 1 h 30 min. ¿A qué hora llega?", options: ["11:75", "12:05", "12:15", "12:45"], correctIndex: 2, explanation: "10:45 + 1 h = 11:45; + 30 min = 12:15." },
      { question: "¿Cuántas veces aparece la cifra 1 al escribir los números del 1 al 20?", options: ["10", "11", "12", "13"], correctIndex: 2, explanation: "1, 10, 11 (dos veces) y del 12 al 19 (ocho): 1 + 1 + 2 + 8 = 12." },
      { question: "¿Qué número sigue? 3, 5, 9, 17, 33, ...", options: ["49", "64", "65", "66"], correctIndex: 2, explanation: "Cada número es el doble menos uno: 33 × 2 - 1 = 65." },
      { question: "Si hoy es miércoles, ¿qué día será dentro de 10 días?", options: ["Viernes", "Sábado", "Domingo", "Miércoles"], correctIndex: 1, explanation: "10 días = 1 semana + 3 días; miércoles + 3 = sábado." },
      { question: "Juan es mayor que Pedro, Pedro mayor que Luis y Luis mayor que Ana. ¿Quién es el segundo más joven?", options: ["Ana", "Luis", "Pedro", "Juan"], correctIndex: 1, explanation: "De más joven a mayor: Ana, Luis, Pedro, Juan." },
      { question: "¿Qué número sigue? 1, 4, 10, 22, 46, ...", options: ["92", "94", "96", "70"], correctIndex: 1, explanation: "Cada número es el doble más dos: 46 × 2 + 2 = 94." },
    ],
  },
  {
    id: "r2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🧩 2º ESO superado",
    questions: [
      { question: "Todos los estudiantes de la clase aprobaron. Marta no aprobó. Entonces...", options: ["Marta aprobó", "Marta no es de esa clase", "Marta es estudiante de esa clase", "No se puede saber nada"], correctIndex: 1, explanation: "Si fuera de esa clase habría aprobado; por tanto, no lo es." },
      { question: "¿Qué número sigue? 1, 3, 6, 10, 15, ...", options: ["18", "20", "21", "25"], correctIndex: 2, explanation: "Se suma +2, +3, +4, +5, +6: 15 + 6 = 21." },
      { question: "Un grifo llena un depósito en 6 horas. ¿Qué parte llena en 2 horas?", options: ["1/2", "1/3", "1/4", "2/3"], correctIndex: 1, explanation: "2 de 6 horas es 2/6 = 1/3." },
      { question: "¿Cuál es la negación de \"Todos los perros ladran\"?", options: ["Ningún perro ladra", "Algún perro no ladra", "Todos los perros callan", "Algún perro ladra"], correctIndex: 1, explanation: "Basta con que un perro no ladre para que la frase sea falsa." },
      { question: "¿Qué número sigue? 2, 3, 5, 8, 12, 17, ...", options: ["22", "23", "24", "25"], correctIndex: 1, explanation: "Se suma +1, +2, +3, +4, +5, +6: 17 + 6 = 23." },
      { question: "4 personas se dan la mano todas con todas una sola vez. ¿Cuántos apretones hay?", options: ["4", "6", "8", "12"], correctIndex: 1, explanation: "3 + 2 + 1 = 6 apretones." },
      { question: "Un ladrillo pesa 1 kg más medio ladrillo. ¿Cuánto pesa un ladrillo?", options: ["1 kg", "1,5 kg", "2 kg", "3 kg"], correctIndex: 2, explanation: "Si medio ladrillo pesa 1 kg, el ladrillo entero pesa 2 kg." },
      { question: "¿Qué número sigue? 7, 14, 28, 56, ...", options: ["84", "100", "112", "70"], correctIndex: 2, explanation: "Cada número es el doble del anterior: 56 × 2 = 112." },
    ],
  },
  {
    id: "r3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🧩 3º ESO superado",
    questions: [
      { question: "¿De cuántas formas distintas se pueden ordenar las letras A, B y C?", options: ["3", "6", "9", "27"], correctIndex: 1, explanation: "3 × 2 × 1 = 6 ordenaciones." },
      { question: "\"Si llueve, el suelo se moja.\" El suelo no está mojado. ¿Qué podemos deducir?", options: ["Ha llovido", "No ha llovido", "Va a llover", "Nada"], correctIndex: 1, explanation: "Si hubiera llovido, el suelo estaría mojado: no ha llovido." },
      { question: "¿Qué número sigue? 0, 1, 1, 2, 3, 5, 8, 13, ...", options: ["18", "20", "21", "26"], correctIndex: 2, explanation: "Sucesión de Fibonacci: 8 + 13 = 21." },
      { question: "Se lanza una moneda dos veces. ¿Qué probabilidad hay de sacar dos caras?", options: ["1/2", "1/3", "1/4", "2/3"], correctIndex: 2, explanation: "1/2 × 1/2 = 1/4." },
      { question: "5 personas se dan la mano todas con todas una sola vez. ¿Cuántos apretones hay?", options: ["5", "10", "20", "25"], correctIndex: 1, explanation: "4 + 3 + 2 + 1 = 10 apretones." },
      { question: "¿Qué número sigue? 2, 6, 12, 20, 30, ...", options: ["40", "42", "44", "36"], correctIndex: 1, explanation: "Son 1×2, 2×3, 3×4, 4×5, 5×6... el siguiente es 6×7 = 42." },
      { question: "Un caracol sube 3 m de día y resbala 2 m de noche en un pozo de 10 m. ¿En cuántos días sale?", options: ["7", "8", "9", "10"], correctIndex: 1, explanation: "Avanza 1 m por día; al empezar el día 8 está a 7 m y ese día sube 3 m y sale." },
      { question: "Una clave tiene 3 cifras, cada una del 0 al 9. ¿Cuántas claves distintas hay?", options: ["30", "100", "729", "1000"], correctIndex: 3, explanation: "10 × 10 × 10 = 1000 combinaciones." },
    ],
  },
  {
    id: "r4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🧩 4º ESO superado",
    questions: [
      { question: "¿De cuántas formas se pueden colocar 4 libros distintos en una estantería?", options: ["16", "24", "12", "8"], correctIndex: 1, explanation: "4 × 3 × 2 × 1 = 24." },
      { question: "Al lanzar un dado, ¿qué probabilidad hay de sacar un número par?", options: ["1/6", "1/3", "1/2", "2/3"], correctIndex: 2, explanation: "Hay 3 pares (2, 4, 6) de 6 resultados: 3/6 = 1/2." },
      { question: "¿Cuál es el contrarrecíproco de \"Si es un cuadrado, entonces es un rectángulo\"?", options: ["Si es un rectángulo, es un cuadrado", "Si no es un cuadrado, no es un rectángulo", "Si no es un rectángulo, no es un cuadrado", "Todo rectángulo es un cuadrado"], correctIndex: 2, explanation: "El contrarrecíproco niega e invierte: si no es rectángulo, no es cuadrado." },
      { question: "¿Cuántos grupos distintos de 2 personas se pueden formar con 5 personas?", options: ["10", "20", "25", "5"], correctIndex: 0, explanation: "Combinaciones de 5 tomadas de 2 en 2: (5 × 4) ÷ 2 = 10." },
      { question: "¿Qué número sigue? 1, 4, 27, 256, ...", options: ["625", "1024", "3125", "512"], correctIndex: 2, explanation: "Son 1¹, 2², 3³, 4⁴... el siguiente es 5⁵ = 3125." },
      { question: "Una bolsa tiene 3 bolas rojas y 2 azules. ¿Qué probabilidad hay de sacar una roja?", options: ["2/5", "3/5", "1/2", "3/2"], correctIndex: 1, explanation: "3 rojas de 5 bolas en total: 3/5." },
      { question: "¿Qué proposición es siempre verdadera, sea cual sea p?", options: ["p y no p", "p o no p", "p", "no p"], correctIndex: 1, explanation: "\"p o no p\" es una tautología: una de las dos siempre se cumple." },
      { question: "Si 5 máquinas hacen 5 piezas en 5 minutos, ¿cuánto tardan 100 máquinas en hacer 100 piezas?", options: ["100 minutos", "20 minutos", "5 minutos", "1 minuto"], correctIndex: 2, explanation: "Cada máquina hace una pieza en 5 minutos, trabajen cuantas trabajen." },
    ],
  },
];

export const logicaGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "logica" as const,
    stage: grade.stage,
    topic: grade.title,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const logicaGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `logica-${grade.id}`,
  type: "mission",
  subjectId: "logica",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Lógica · ${grade.title}`,
  narrative: `Pon a prueba tu razonamiento de ${grade.title}, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-logica-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
