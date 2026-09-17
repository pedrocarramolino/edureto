export type Stage = "infantil" | "primaria_inicial" | "primaria_superior";

export type SubjectId =
  | "lengua"
  | "matematicas"
  | "ingles"
  | "ciencias_naturales"
  | "ciencias_sociales"
  | "logica";

export interface Subject {
  id: SubjectId;
  name: string;
  worldName: string;
  color: string;
  emoji: string;
  description: string;
}

export type SkillStatus = "necesita_practicar" | "en_progreso" | "consolidado";

export interface Skill {
  id: string;
  subjectId: SubjectId;
  name: string;
  status: SkillStatus;
}

export interface Student {
  id: string;
  name: string;
  age: number;
  stage: Stage;
  avatarEmoji: string;
  skills: Skill[];
  streakDays: number;
  points: number;
}

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

export type ChallengeStatus = "pendiente" | "en_curso" | "completado";

export interface Challenge {
  id: string;
  studentId: string;
  activityId: string;
  assignedBy: "profesora" | "sistema";
  status: ChallengeStatus;
  dueDate?: string;
}

export interface ActivityAttempt {
  id: string;
  studentId: string;
  activityId: string;
  completedAt: string;
  correct: boolean;
  timeSpentSeconds: number;
}
