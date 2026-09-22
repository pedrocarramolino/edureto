import type { Activity, ActivityResult } from "@/types";
import { MultipleChoiceGame } from "@/components/games/MultipleChoiceGame";
import { DragDropGame } from "@/components/games/DragDropGame";
import { BuildAnswerGame } from "@/components/games/BuildAnswerGame";
import { MissionGame } from "@/components/games/MissionGame";
import { OpenResponseGame } from "@/components/games/OpenResponseGame";

export function ActivityPlayer({
  activity,
  onComplete,
  onlyQuestions = false,
}: {
  activity: Activity;
  onComplete: (result: ActivityResult) => void;
  /** Se usa en la prueba de nivel: sin elegir modo de juego. */
  onlyQuestions?: boolean;
}) {
  switch (activity.type) {
    case "multiple_choice":
      return <MultipleChoiceGame activity={activity} onComplete={onComplete} />;
    case "drag_drop":
      return <DragDropGame activity={activity} onComplete={onComplete} />;
    case "build_answer":
      return <BuildAnswerGame activity={activity} onComplete={onComplete} />;
    case "mission":
      return (
        <MissionGame activity={activity} onComplete={onComplete} onlyQuestions={onlyQuestions} />
      );
    case "open_response":
      return <OpenResponseGame activity={activity} onComplete={onComplete} />;
  }
}
