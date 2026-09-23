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

// Preguntes i explicacions en valencià, seguint la normativa de l'AVL.
const grades: GradeDefinition[] = [
  {
    id: "v1p",
    title: "1º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🟡 1º Primaria superado",
    questions: [
      { tema: "Lectoescriptura", question: "Per quina lletra comença la paraula \"casa\"?", options: ["S", "C", "K", "A"], correctIndex: 1, explanation: "\"Casa\" comença per la lletra C." },
      { tema: "Lectoescriptura", question: "Quantes síl·labes té la paraula \"pilota\"?", options: ["2", "3", "4", "1"], correctIndex: 1, explanation: "Pi-lo-ta: té 3 síl·labes." },
      { tema: "Gramàtica", question: "Quin article va davant de \"xiquet\"?", options: ["la", "el", "les", "una"], correctIndex: 1, explanation: "Diem \"el xiquet\", perquè és masculí i singular." },
      { tema: "Vocabulari", question: "Com es diu \"perro\" en valencià?", options: ["gat", "gos", "ocell", "peix"], correctIndex: 1, explanation: "\"Perro\" en valencià es diu \"gos\"." },
      { tema: "Vocabulari", question: "Quin és el contrari de \"gran\"?", options: ["alt", "menut", "llarg", "ample"], correctIndex: 1, explanation: "El contrari de \"gran\" és \"menut\"." },
      { tema: "Vocabulari", question: "Quina d'estes paraules és un color?", options: ["taula", "roig", "córrer", "pa"], correctIndex: 1, explanation: "\"Roig\" és un color." },
      { tema: "Lectoescriptura", question: "Quantes lletres té la paraula \"sol\"?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "S-o-l: té 3 lletres." },
      { tema: "Vocabulari", question: "Com es diu \"hoy\" en valencià?", options: ["ahir", "hui", "demà", "prompte"], correctIndex: 1, explanation: "\"Hoy\" en valencià es diu \"hui\"." },
    ],
  },
  {
    id: "v2p",
    title: "2º Primaria",
    stage: "primaria_inicial",
    difficulty: 1,
    badge: "🟡 2º Primaria superado",
    questions: [
      { tema: "Gramàtica", question: "Quin és el plural de \"casa\"?", options: ["casas", "cases", "casses", "casa"], correctIndex: 1, explanation: "En valencià, les paraules acabades en -a fan el plural en -es: cases." },
      { tema: "Gramàtica", question: "Quin és el femení de \"xiquet\"?", options: ["xiqueta", "xiquets", "xiqueto", "xiquetes"], correctIndex: 0, explanation: "El femení singular de \"xiquet\" és \"xiqueta\"." },
      { tema: "Gramàtica", question: "Quina d'estes paraules és un verb?", options: ["taula", "menjar", "roig", "casa"], correctIndex: 1, explanation: "\"Menjar\" és una acció, per tant és un verb." },
      { tema: "Vocabulari", question: "Com es diu \"ventana\" en valencià?", options: ["porta", "finestra", "cadira", "paret"], correctIndex: 1, explanation: "\"Ventana\" en valencià es diu \"finestra\"." },
      { tema: "Vocabulari", question: "Quin és el contrari de \"brut\"?", options: ["fosc", "net", "vell", "dur"], correctIndex: 1, explanation: "El contrari de \"brut\" és \"net\"." },
      { tema: "Lectoescriptura", question: "Quantes síl·labes té \"papallona\"?", options: ["3", "4", "5", "2"], correctIndex: 1, explanation: "Pa-pa-llo-na: té 4 síl·labes." },
      { tema: "Vocabulari", question: "Quin dia ve després de dilluns?", options: ["diumenge", "dimarts", "dijous", "dissabte"], correctIndex: 1, explanation: "Després de dilluns ve dimarts." },
      { tema: "Vocabulari", question: "Com es diu \"otoño\" en valencià?", options: ["primavera", "estiu", "tardor", "hivern"], correctIndex: 2, explanation: "\"Otoño\" en valencià es diu \"tardor\"." },
    ],
  },
  {
    id: "v3p",
    title: "3º Primaria",
    stage: "primaria_inicial",
    difficulty: 2,
    badge: "🟡 3º Primaria superado",
    questions: [
      { tema: "Ortografia", question: "Quina d'estes paraules és aguda?", options: ["casa", "camí", "arbre", "taula"], correctIndex: 1, explanation: "\"Camí\" té la síl·laba forta al final: ca-MÍ." },
      { tema: "Vocabulari", question: "Quin és un sinònim de \"content\"?", options: ["trist", "alegre", "cansat", "enfadat"], correctIndex: 1, explanation: "\"Content\" i \"alegre\" volen dir el mateix." },
      { tema: "Vocabulari", question: "Quin és el contrari de \"clar\"?", options: ["fosc", "blanc", "llarg", "prim"], correctIndex: 0, explanation: "El contrari de \"clar\" és \"fosc\"." },
      { tema: "Gramàtica", question: "Quin temps expressa el verb \"cantava\"?", options: ["present", "passat", "futur", "condicional"], correctIndex: 1, explanation: "\"Cantava\" és una acció que ja ha passat." },
      { tema: "Ortografia", question: "Quina d'estes paraules està ben escrita?", options: ["keixal", "queixal", "cueixal", "kueixal"], correctIndex: 1, explanation: "Davant de e i de i, el so /k/ s'escriu amb \"qu\": queixal." },
      { tema: "Lectoescriptura", question: "Quantes vocals té l'abecedari?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "Les vocals són a, e, i, o, u: cinc." },
      { tema: "Vocabulari", question: "Com es diu \"cuchara\" en valencià?", options: ["forqueta", "cullera", "ganivet", "got"], correctIndex: 1, explanation: "\"Cuchara\" en valencià es diu \"cullera\"." },
      { tema: "Gramàtica", question: "Quin és el plural de \"peix\"?", options: ["peixs", "peixos", "peixes", "peix"], correctIndex: 1, explanation: "Les paraules acabades en -x fan el plural en -os: peixos." },
    ],
  },
  {
    id: "v4p",
    title: "4º Primaria",
    stage: "primaria_superior",
    difficulty: 2,
    badge: "🟡 4º Primaria superado",
    questions: [
      { tema: "Ortografia", question: "Com s'escriu correctament l'article davant de \"home\"?", options: ["el home", "l'home", "la home", "el' home"], correctIndex: 1, explanation: "Davant de paraula que comença per vocal, l'article s'apostrofa: l'home." },
      { tema: "Gramàtica", question: "Quin és el masculí de \"gallina\"?", options: ["gallet", "gall", "pollastre", "gallino"], correctIndex: 1, explanation: "El masculí de \"gallina\" és \"gall\"." },
      { tema: "Ortografia", question: "Quina paraula és esdrúixola?", options: ["música", "camí", "taula", "paper"], correctIndex: 0, explanation: "En \"música\" la síl·laba forta és l'antepenúltima: MÚ-si-ca." },
      { tema: "Gramàtica", question: "Quin temps expressa \"cantaré\"?", options: ["present", "passat", "futur", "imperatiu"], correctIndex: 2, explanation: "\"Cantaré\" és una acció que encara no ha passat." },
      { tema: "Vocabulari", question: "Quin és un sinònim de \"començar\"?", options: ["acabar", "iniciar", "parar", "tancar"], correctIndex: 1, explanation: "\"Començar\" i \"iniciar\" volen dir el mateix." },
      { tema: "Vocabulari", question: "Com es diu \"espejo\" en valencià?", options: ["espill", "finestra", "cadira", "got"], correctIndex: 0, explanation: "En valencià, \"espejo\" es diu \"espill\"." },
      { tema: "Gramàtica", question: "Quin és el diminutiu de \"casa\"?", options: ["casassa", "caseta", "casota", "cases"], correctIndex: 1, explanation: "El diminutiu es forma amb -eta: caseta." },
      { tema: "Lectoescriptura", question: "Quantes síl·labes té \"ordinador\"?", options: ["3", "4", "5", "2"], correctIndex: 1, explanation: "Or-di-na-dor: té 4 síl·labes." },
    ],
  },
  {
    id: "v5p",
    title: "5º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🟡 5º Primaria superado",
    questions: [
      { tema: "Ortografia", question: "Quina paraula és plana?", options: ["taula", "camí", "música", "paper"], correctIndex: 0, explanation: "En \"taula\" la síl·laba forta és la penúltima: TAU-la." },
      { tema: "Gramàtica", question: "Quin és el subjecte de \"Els xiquets juguen al pati\"?", options: ["juguen", "al pati", "els xiquets", "pati"], correctIndex: 2, explanation: "El subjecte és qui fa l'acció: els xiquets." },
      { tema: "Vocabulari", question: "Quin és el contrari de \"generós\"?", options: ["amable", "egoista", "alegre", "valent"], correctIndex: 1, explanation: "Qui no és generós és egoista." },
      { tema: "Gramàtica", question: "Quina d'estes paraules és un adjectiu?", options: ["córrer", "alt", "taula", "ràpidament"], correctIndex: 1, explanation: "\"Alt\" diu com és una cosa, per tant és un adjectiu." },
      { tema: "Gramàtica", question: "Quin temps expressa \"havia menjat\"?", options: ["present", "passat", "futur", "imperatiu"], correctIndex: 1, explanation: "\"Havia menjat\" és una acció acabada en el passat." },
      { tema: "Vocabulari", question: "Com es diu \"llave\" en valencià?", options: ["clau", "pany", "porta", "clavell"], correctIndex: 0, explanation: "\"Llave\" en valencià es diu \"clau\"." },
      { tema: "Vocabulari", question: "Quin és el gentilici de València?", options: ["valencià", "valentí", "valencian", "valència"], correctIndex: 0, explanation: "Qui és de València és valencià o valenciana." },
      { tema: "Gramàtica", question: "Quina d'estes paraules és un nom propi?", options: ["ciutat", "Alacant", "riu", "muntanya"], correctIndex: 1, explanation: "Els noms propis s'escriuen amb majúscula: Alacant." },
    ],
  },
  {
    id: "v6p",
    title: "6º Primaria",
    stage: "primaria_superior",
    difficulty: 3,
    badge: "🟡 6º Primaria superado",
    questions: [
      { tema: "Gramàtica", question: "Quin és el plural de \"llapis\"?", options: ["llapis", "llapissos", "llapises", "llapiss"], correctIndex: 0, explanation: "\"Llapis\" no canvia en plural: un llapis, dos llapis." },
      { tema: "Gramàtica", question: "Quina categoria és \"ràpidament\" en \"Corre ràpidament\"?", options: ["adjectiu", "adverbi", "nom", "verb"], correctIndex: 1, explanation: "Diu com es fa l'acció, per tant és un adverbi." },
      { tema: "Literatura", question: "Quin gènere literari s'escriu en vers?", options: ["la novel·la", "la poesia", "el teatre", "el conte"], correctIndex: 1, explanation: "La poesia s'escriu en vers." },
      { tema: "Vocabulari", question: "Quin és el contrari de \"antic\"?", options: ["vell", "modern", "ample", "fosc"], correctIndex: 1, explanation: "El contrari d'\"antic\" és \"modern\"." },
      { tema: "Ortografia", question: "Quina paraula porta dièresi?", options: ["pingui", "pingüí", "pinguí", "pïngui"], correctIndex: 1, explanation: "La dièresi damunt de la u indica que es pronuncia: pingüí." },
      { tema: "Ortografia", question: "Quina d'estes frases està ben escrita?", options: ["hia una taula", "hi ha una taula", "i ha una taula", "hiha una taula"], correctIndex: 1, explanation: "S'escriu \"hi ha\", en dos paraules i amb h." },
      { tema: "Vocabulari", question: "Què és un sinònim?", options: ["una paraula amb el significat contrari", "una paraula amb un significat pareixent", "una paraula amb accent", "una paraula composta"], correctIndex: 1, explanation: "Els sinònims volen dir pràcticament el mateix." },
      { tema: "Gramàtica", question: "Quin temps expressa \"hauria cantat\"?", options: ["present", "futur", "condicional", "imperatiu"], correctIndex: 2, explanation: "\"Hauria cantat\" és una forma del condicional." },
    ],
  },
  {
    id: "v1e",
    title: "1º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🟡 1º ESO superado",
    questions: [
      { tema: "Gramàtica", question: "Quina categoria gramatical és \"ràpid\"?", options: ["nom", "adjectiu", "verb", "adverbi"], correctIndex: 1, explanation: "Diu com és una cosa, per tant és un adjectiu." },
      { tema: "Gramàtica", question: "Quin és el nucli del sintagma \"el gos negre\"?", options: ["el", "gos", "negre", "el gos"], correctIndex: 1, explanation: "El nucli d'un sintagma nominal és el nom: gos." },
      { tema: "Gramàtica", question: "Què és un diftong?", options: ["dos vocals en síl·labes distintes", "dos vocals en la mateixa síl·laba", "dos consonants seguides", "una vocal amb accent"], correctIndex: 1, explanation: "En un diftong, dos vocals es pronuncien en un sol colp de veu." },
      { tema: "Gramàtica", question: "En quina paraula hi ha un hiat?", options: ["cau", "dia", "aigua", "reina"], correctIndex: 1, explanation: "\"Dia\" es pronuncia di-a: les vocals van en síl·labes distintes." },
      { tema: "Tipus de text", question: "Quin tipus de text explica com fer alguna cosa?", options: ["narratiu", "instructiu", "descriptiu", "argumentatiu"], correctIndex: 1, explanation: "Una recepta o un manual són textos instructius." },
      { tema: "Gramàtica", question: "Quin temps verbal és \"havia arribat\"?", options: ["present", "plusquamperfet", "futur", "imperatiu"], correctIndex: 1, explanation: "Expressa una acció anterior a una altra del passat." },
      { tema: "Gramàtica", question: "Quin és el masculí plural de \"blanca\"?", options: ["blanques", "blancs", "blanc", "blancos"], correctIndex: 1, explanation: "Blanc, blanca, blancs, blanques." },
      { tema: "Gramàtica", question: "Què indica el subjecte d'una oració?", options: ["on passa l'acció", "qui fa l'acció", "quan passa l'acció", "com passa l'acció"], correctIndex: 1, explanation: "El subjecte és qui realitza l'acció del verb." },
    ],
  },
  {
    id: "v2e",
    title: "2º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🟡 2º ESO superado",
    questions: [
      { tema: "Gramàtica", question: "Què fa el complement directe?", options: ["indica el lloc", "rep directament l'acció del verb", "diu quan passa l'acció", "acompanya el subjecte"], correctIndex: 1, explanation: "El CD és allò sobre el que recau l'acció del verb." },
      { tema: "Literatura", question: "A quin gènere literari pertany el conte?", options: ["narrativa", "poesia", "teatre", "assaig"], correctIndex: 0, explanation: "El conte és un text narratiu breu." },
      { tema: "Gramàtica", question: "Quin pronom feble substituïx \"una poma\" en \"Menge una poma\"?", options: ["li", "la", "hi", "en"], correctIndex: 1, explanation: "És un complement directe determinat: \"La menge\"." },
      { tema: "Literatura", question: "Què és una metàfora?", options: ["repetir un so", "identificar una cosa amb una altra per semblança", "exagerar una idea", "preguntar sense esperar resposta"], correctIndex: 1, explanation: "\"Dents de perla\" identifica les dents amb perles." },
      { tema: "Gramàtica", question: "Quin temps verbal és \"cantaria\"?", options: ["futur", "condicional", "passat", "present"], correctIndex: 1, explanation: "\"Cantaria\" expressa una acció possible: és condicional." },
      { tema: "Gramàtica", question: "Quina paraula és composta?", options: ["paraigua", "taula", "córrer", "alegre"], correctIndex: 0, explanation: "\"Paraigua\" es forma amb \"para\" i \"aigua\"." },
      { tema: "Tipus de text", question: "Què fa un text argumentatiu?", options: ["conta una història", "defén una opinió amb raons", "explica com és una cosa", "dona instruccions"], correctIndex: 1, explanation: "L'argumentació busca convéncer amb raons." },
      { tema: "Gramàtica", question: "Quin és el participi del verb \"escriure\"?", options: ["escriut", "escrit", "escrivit", "escriurat"], correctIndex: 1, explanation: "El participi d'escriure és irregular: escrit." },
    ],
  },
  {
    id: "v3e",
    title: "3º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🟡 3º ESO superado",
    questions: [
      { tema: "Gramàtica", question: "Quin és el complement indirecte de \"He donat un llibre a Maria\"?", options: ["un llibre", "a Maria", "he donat", "jo"], correctIndex: 1, explanation: "El CI indica a qui va destinada l'acció: a Maria." },
      { tema: "Gramàtica", question: "Quin pronom feble substituïx \"a Maria\" en eixa oració?", options: ["la", "li", "hi", "en"], correctIndex: 1, explanation: "El complement indirecte singular es substituïx per \"li\": li he donat un llibre." },
      { tema: "Gramàtica", question: "Què és una oració subordinada?", options: ["una oració independent", "una oració que depén d'una altra", "una oració sense verb", "una oració interrogativa"], correctIndex: 1, explanation: "La subordinada fa una funció dins de l'oració principal." },
      { tema: "Literatura", question: "Qui va escriure \"Tirant lo Blanc\"?", options: ["Ausiàs March", "Joanot Martorell", "Jordi de Sant Jordi", "Roís de Corella"], correctIndex: 1, explanation: "Joanot Martorell, valencià, la va escriure al segle XV." },
      { tema: "Literatura", question: "Quin segle és el Segle d'Or de les lletres valencianes?", options: ["el segle XIII", "el segle XV", "el segle XVIII", "el segle XX"], correctIndex: 1, explanation: "El segle XV és el Segle d'Or, amb March, Martorell i Roís de Corella." },
      { tema: "Literatura", question: "Quina figura retòrica repetix sons semblants?", options: ["la metàfora", "l'al·literació", "la hipèrbole", "la comparació"], correctIndex: 1, explanation: "L'al·literació repetix sons per crear un efecte sonor." },
      { tema: "Llengua i societat", question: "Quan usem un registre formal?", options: ["amb els amics", "en situacions oficials o serioses", "en un missatge de mòbil", "a casa"], correctIndex: 1, explanation: "El registre formal s'usa en contextos oficials, acadèmics o amb desconeguts." },
      { tema: "Llengua i societat", question: "Quina és la varietat del valencià que es parla a Alacant?", options: ["valencià septentrional", "valencià meridional", "valencià apitxat", "valencià nord-occidental"], correctIndex: 1, explanation: "A les comarques del sud es parla el valencià meridional." },
    ],
  },
  {
    id: "v4e",
    title: "4º ESO",
    stage: "eso",
    difficulty: 3,
    badge: "🟡 4º ESO superado",
    questions: [
      { tema: "Literatura", question: "Quin poeta valencià del segle XV és autor dels \"Cants d'amor\"?", options: ["Ausiàs March", "Joanot Martorell", "Vicent Andrés Estellés", "Joan Fuster"], correctIndex: 0, explanation: "Ausiàs March, de Gandia, és el gran poeta del segle XV." },
      { tema: "Llengua i societat", question: "Quina institució fixa la normativa del valencià?", options: ["la Real Acadèmia Espanyola", "l'Acadèmia Valenciana de la Llengua", "la Generalitat", "la Universitat de València"], correctIndex: 1, explanation: "L'AVL és la institució normativa del valencià des de 1998." },
      { tema: "Llengua i societat", question: "Què estudia la sociolingüística?", options: ["l'origen de les paraules", "la relació entre la llengua i la societat", "els sons de la llengua", "les regles d'ortografia"], correctIndex: 1, explanation: "Estudia com s'usa la llengua segons el context social." },
      { tema: "Gramàtica", question: "Quina d'estes oracions és passiva?", options: ["Maria va llegir el llibre", "El llibre va ser llegit per Maria", "Maria llig molt", "El llibre és interessant"], correctIndex: 1, explanation: "En la passiva, el subjecte rep l'acció: el llibre va ser llegit." },
      { tema: "Literatura", question: "Quin poeta de Burjassot va escriure el \"Llibre de meravelles\"?", options: ["Joan Fuster", "Vicent Andrés Estellés", "Ausiàs March", "Enric Valor"], correctIndex: 1, explanation: "Vicent Andrés Estellés és el gran poeta valencià del segle XX." },
      { tema: "Llengua i societat", question: "Què és un dialecte?", options: ["una llengua inventada", "una varietat geogràfica d'una llengua", "una llengua morta", "una manera d'escriure"], correctIndex: 1, explanation: "És la forma que pren una llengua en un territori concret." },
      { tema: "Literatura", question: "Quina figura retòrica és \"dents de perla\"?", options: ["comparació", "metàfora", "hipèrbole", "ironia"], correctIndex: 1, explanation: "Identifica les dents amb perles sense dir \"com\": és una metàfora." },
      { tema: "Vocabulari", question: "Què és el lèxic d'una llengua?", options: ["les regles de gramàtica", "el conjunt de paraules", "els sons", "els signes de puntuació"], correctIndex: 1, explanation: "El lèxic és el vocabulari, el conjunt de paraules d'una llengua." },
    ],
  },
];

export const valencianoGradeQuestions: MultipleChoiceActivity[] = grades.flatMap((grade) =>
  grade.questions.map((q, index) => ({
    id: `${grade.id}-${index + 1}`,
    type: "multiple_choice" as const,
    subjectId: "valenciano" as const,
    stage: grade.stage,
    topic: q.tema,
    difficulty: grade.difficulty,
    title: q.question,
    ...q,
  })),
);

export const valencianoGradeMissions: MissionActivity[] = grades.map((grade) => ({
  id: `valenciano-${grade.id}`,
  type: "mission",
  subjectId: "valenciano",
  stage: grade.stage,
  topic: grade.title,
  difficulty: grade.difficulty,
  title: `Valencià · ${grade.title}`,
  narrative: `Repassa valencià de ${grade.title}, en un orde distint cada vegada.`,
  badge: grade.badge,
  steps: grade.questions.map((_, index) => ({
    id: `st-valenciano-${grade.id}-${index + 1}`,
    label: `Pregunta ${index + 1}`,
    activityId: `${grade.id}-${index + 1}`,
  })),
}));
