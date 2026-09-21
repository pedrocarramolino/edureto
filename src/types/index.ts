export type Stage = "infantil" | "primaria_inicial" | "primaria_superior" | "eso";

/**
 * The subjects of the Valencian curriculum (LOMLOE) that the app covers, plus
 * "logica", which is not a school subject but a reinforcement world.
 */
export type SubjectId =
  // Primaria y ESO
  | "lengua"
  | "valenciano"
  | "matematicas"
  | "ingles"
  | "educacion_fisica"
  | "valores"
  | "religion"
  // Solo Primaria
  | "conocimiento_medio"
  | "educacion_artistica"
  // Solo ESO
  | "geografia_historia"
  | "biologia_geologia"
  | "fisica_quimica"
  | "tecnologia"
  | "musica"
  | "plastica"
  | "digitalizacion"
  | "economia"
  | "expresion_artistica"
  | "fopp"
  | "latin"
  | "segunda_lengua"
  | "tecnologia_4"
  | "optativas"
  | "tutoria"
  // Refuerzo, fuera del currículo
  | "logica";

export interface Subject {
  id: SubjectId;
  name: string;
  worldName: string;
  color: string;
  emoji: string;
  description: string;
  /** Sub-category breakdown shown on the subject's world page (e.g. "Sumas", "Restas"). */
  topics: string[];
  /** School stages where this subject is taught. */
  stages: Stage[];
  /** Shown next to the name, e.g. "Solo 4.º de ESO". */
  note?: string;
}

export type SkillStatus = "necesita_practicar" | "en_progreso" | "consolidado";

export type ActivityType =
  | "multiple_choice"
  | "drag_drop"
  | "build_answer"
  | "mission"
  | "open_response";

export interface BaseActivity {
  id: string;
  type: ActivityType;
  subjectId: SubjectId;
  stage: Stage;
  topic: string;
  difficulty: 1 | 2 | 3;
  title: string;
}

export interface MultipleChoiceActivity extends BaseActivity {
  type: "multiple_choice";
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface DragDropItem {
  id: string;
  label: string;
  targetZoneId: string;
}

export interface DragDropZone {
  id: string;
  label: string;
}

export interface DragDropActivity extends BaseActivity {
  type: "drag_drop";
  instructions: string;
  zones: DragDropZone[];
  items: DragDropItem[];
}

export interface BuildAnswerActivity extends BaseActivity {
  type: "build_answer";
  instructions: string;
  pieces: string[];
  correctOrder: string[];
}

export interface MissionStep {
  id: string;
  label: string;
  activityId: string;
}

export interface MissionActivity extends BaseActivity {
  type: "mission";
  narrative: string;
  steps: MissionStep[];
  badge: string;
}

export interface OpenResponseActivity extends BaseActivity {
  type: "open_response";
  prompt: string;
  guidance: string;
}

export type Activity =
  | MultipleChoiceActivity
  | DragDropActivity
  | BuildAnswerActivity
  | MissionActivity
  | OpenResponseActivity;

/** What a game hands back to whoever is playing it when the student finishes. */
export interface ActivityResult {
  /** True only when everything in the activity was right. */
  correct: boolean;
  correctCount: number;
  totalCount: number;
}
