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

// Latín es optativa de 4.º de ESO, un solo curso. En lugar de un único juego
// se parte en las dos mitades de la materia: la lengua y la cultura clásica.
const grades: GradeDefinition[] = [
  {
    id: "x4l",
    title: "4º ESO · Lengua",
    stage: "eso",
    difficulty: 3,
    badge: "🏛️ Lengua latina superada",
    questions: [
      { tema: "Vocabulario y etimología", question: "¿Cuántas declinaciones tiene el latín?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "Los sustantivos se agrupan en cinco declinaciones." },
      { tema: "Declinaciones y casos", question: "¿Qué caso latino indica el sujeto?", options: ["el acusativo", "el nominativo", "el dativo", "el ablativo"], correctIndex: 1, explanation: "El nominativo es el caso del sujeto y del atributo." },
      { tema: "Declinaciones y casos", question: "¿Qué caso latino indica el complemento directo?", options: ["el nominativo", "el genitivo", "el acusativo", "el vocativo"], correctIndex: 2, explanation: "El acusativo marca el complemento directo." },
      { tema: "Declinaciones y casos", question: "¿Qué caso se usa para el complemento indirecto?", options: ["el dativo", "el acusativo", "el ablativo", "el genitivo"], correctIndex: 0, explanation: "El dativo indica a quién va dirigida la acción." },
      { tema: "Declinaciones y casos", question: "¿Qué caso expresa posesión, como el \"de\" castellano?", options: ["el genitivo", "el dativo", "el vocativo", "el acusativo"], correctIndex: 0, explanation: "\"Rosae\" en genitivo es \"de la rosa\"." },
      { tema: "Declinaciones y casos", question: "¿A qué declinación pertenece \"rosa, rosae\"?", options: ["a la primera", "a la segunda", "a la tercera", "a la cuarta"], correctIndex: 0, explanation: "El genitivo en -ae señala la primera declinación." },
      { tema: "Vocabulario y etimología", question: "¿Qué significa la palabra latina \"bellum\"?", options: ["belleza", "guerra", "libro", "ciudad"], correctIndex: 1, explanation: "De \"bellum\" viene \"belicoso\", no \"bello\"." },
      { tema: "Vocabulario y etimología", question: "¿De qué palabra latina procede \"acuático\"?", options: ["aqua", "aura", "acus", "ager"], correctIndex: 0, explanation: "\"Aqua\" es agua: acuático, acuario, acueducto." },
      { tema: "Vocabulario y etimología", question: "¿Qué significa \"puer\"?", options: ["padre", "niño", "pueblo", "puerta"], correctIndex: 1, explanation: "De ahí \"pueril\", propio de un niño." },
      { tema: "Vocabulario y etimología", question: "¿Cómo se dice \"y\" en latín?", options: ["et", "ut", "in", "ad"], correctIndex: 0, explanation: "De \"et\" viene el signo &, que era una et unida." },
      { tema: "Vocabulario y etimología", question: "¿Qué significa la expresión \"carpe diem\"?", options: ["recuerda que morirás", "aprovecha el día", "vine, vi, vencí", "así pasa la gloria"], correctIndex: 1, explanation: "Es un verso de Horacio: aprovecha el momento." },
      { tema: "Vocabulario y etimología", question: "¿Cuál de estas lenguas NO procede del latín?", options: ["el francés", "el italiano", "el alemán", "el portugués"], correctIndex: 2, explanation: "El alemán es germánica; las otras son lenguas romances." },
    ],
  },
  {
    id: "x4c",
    title: "4º ESO · Cultura",
    stage: "eso",
    difficulty: 3,
    badge: "🏛️ Cultura clásica superada",
    questions: [
      { tema: "Roma y su historia", question: "¿Quiénes fundaron Roma según la leyenda?", options: ["Eneas y Dido", "Rómulo y Remo", "César y Pompeyo", "Cástor y Pólux"], correctIndex: 1, explanation: "Los gemelos criados por una loba; Rómulo dio nombre a la ciudad." },
      { tema: "Roma y su historia", question: "¿En qué año se fundó Roma según la tradición?", options: ["753 a. C.", "476 d. C.", "44 a. C.", "1000 a. C."], correctIndex: 0, explanation: "El 21 de abril del 753 a. C., según la tradición." },
      { tema: "Roma y su historia", question: "¿Cómo se llamaba la plaza principal de una ciudad romana?", options: ["el ágora", "el foro", "el atrio", "la curia"], correctIndex: 1, explanation: "El foro reunía el mercado, los templos y la política." },
      { tema: "Roma y su historia", question: "¿Qué construían los romanos para llevar agua a las ciudades?", options: ["acueductos", "anfiteatros", "termas", "calzadas"], correctIndex: 0, explanation: "El acueducto de Segovia sigue en pie." },
      { tema: "Roma y su historia", question: "¿Quién fue el primer emperador de Roma?", options: ["Julio César", "Augusto", "Nerón", "Trajano"], correctIndex: 1, explanation: "Octavio recibió el título de Augusto en el 27 a. C." },
      { tema: "Mitología", question: "¿Qué dios romano era el rey de los dioses?", options: ["Marte", "Júpiter", "Neptuno", "Apolo"], correctIndex: 1, explanation: "Júpiter equivale al Zeus griego." },
      { tema: "Mitología", question: "¿Qué diosa romana equivale a la griega Afrodita?", options: ["Juno", "Venus", "Minerva", "Diana"], correctIndex: 1, explanation: "Venus es la diosa del amor y la belleza." },
      { tema: "Roma y su historia", question: "¿Cómo se llamaba la vivienda urbana de las familias ricas?", options: ["la insula", "la domus", "la villa", "la taberna"], correctIndex: 1, explanation: "La domus tenía atrio y peristilo; las insulae eran bloques de pisos." },
      { tema: "Roma y su historia", question: "¿Qué espectáculo se celebraba en el anfiteatro?", options: ["las carreras de carros", "los combates de gladiadores", "las obras de teatro", "las asambleas"], correctIndex: 1, explanation: "Las carreras eran en el circo y el teatro, en el edificio teatral." },
      { tema: "Roma y su historia", question: "¿Qué calzada romana unía Roma con el sur de Italia?", options: ["la Vía Apia", "la Vía Augusta", "la Vía Láctea", "la Vía Domitia"], correctIndex: 0, explanation: "La Vía Apia es la más famosa de las calzadas romanas." },
      { tema: "Roma y su historia", question: "¿Qué ciudad sepultó el Vesubio en el año 79 d. C.?", options: ["Pompeya", "Ostia", "Cartago", "Siracusa"], correctIndex: 0, explanation: "La ceniza conservó la ciudad casi intacta." },
      { tema: "Roma y su historia", question: "¿Qué legado romano es la base de nuestras leyes actuales?", options: ["el derecho romano", "el alfabeto griego", "la filosofía estoica", "el sistema métrico"], correctIndex: 0, explanation: "Buena parte del derecho civil europeo procede de Roma." },
    ],
  },
];

export const latinGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "latin" as const,
    stage: grade.stage,
    topic: q.tema,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const latinGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `latin-${grade.id}`,
  type: "mission",
  subjectId: "latin",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Latín · ${grade.title.replace("4º ESO · ", "")}`,
  narrative: `Repasa ${grade.title.replace("4º ESO · ", "").toLowerCase()} de Latín, en un orden distinto cada vez.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-latin-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
