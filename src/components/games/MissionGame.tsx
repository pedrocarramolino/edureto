"use client";

import { useState } from "react";
import type { ActivityResult, MissionActivity, MultipleChoiceActivity } from "@/types";
import { getActivity } from "@/data/activities";
import { shuffle } from "@/lib/shuffle";
import { Button } from "@/components/ui/Button";
import { ActivityPlayer } from "@/components/games/ActivityPlayer";
import { PenaltyGame } from "@/components/games/modes/PenaltyGame";
import { QuizShowGame } from "@/components/games/modes/QuizShowGame";

type Mode = "preguntas" | "penaltis" | "concurso";

/** The arcade modes need every step to be a question with options. */
function questionsOf(activity: MissionActivity): MultipleChoiceActivity[] {
  const activities = activity.steps
    .map((step) => getActivity(step.activityId))
    .filter((a): a is MultipleChoiceActivity => a?.type === "multiple_choice");
  return activities.length === activity.steps.length ? activities : [];
}

export function MissionGame({
  activity,
  onComplete,
}: {
  activity: MissionActivity;
  onComplete: (result: ActivityResult) => void;
}) {
  const [steps, setSteps] = useState(activity.steps);
  const [stepIndex, setStepIndex] = useState(0);
  const [results, setResults] = useState<ActivityResult[]>([]);
  const [mode, setMode] = useState<Mode | null>(null);
  const [questions, setQuestions] = useState<MultipleChoiceActivity[]>([]);

  const currentStep = steps[stepIndex];
  const stepActivity = currentStep ? getActivity(currentStep.activityId) : undefined;
  const finished = stepIndex >= steps.length;

  function handleStepComplete(result: ActivityResult) {
    setResults((prev) => [...prev, result]);
    setStepIndex((prev) => prev + 1);
  }

  const stepsCorrect = results.filter((r) => r.correct).length;

  function start(nextMode: Mode) {
    setSteps(shuffle(activity.steps));
    setQuestions(shuffle(questionsOf(activity)));
    setMode(nextMode);
  }

  if (mode === null) {
    const arcadeAvailable = questionsOf(activity).length > 0;
    return (
      <div className="space-y-5 text-center">
        <p className="font-display text-lg font-semibold text-slate-800">{activity.narrative}</p>
        <p className="text-sm text-slate-500">{activity.steps.length} retos por completar</p>

        <div>
          <p className="mb-3 font-display text-sm font-bold uppercase text-slate-400">
            ¿Cómo quieres jugar?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="clay" onClick={() => start("preguntas")}>
              📝 Preguntas
            </Button>
            {arcadeAvailable && (
              <>
                <Button variant="clay-secondary" onClick={() => start("penaltis")}>
                  ⚽ Penaltis
                </Button>
                <Button variant="clay-secondary" onClick={() => start("concurso")}>
                  🎬 Concurso
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (mode === "penaltis") {
    return <PenaltyGame questions={questions} onComplete={onComplete} />;
  }

  if (mode === "concurso") {
    return <QuizShowGame questions={questions} onComplete={onComplete} />;
  }

  if (finished) {
    const allCorrect = stepsCorrect === results.length;
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {activity.badge.split(" ")[0]}
        </p>
        <p className="font-display text-lg font-bold text-slate-800">
          {allCorrect ? "¡Misión completada!" : "Misión terminada"}
        </p>
        <p className="text-sm text-slate-500">
          {stepsCorrect} de {results.length} retos correctos
        </p>
        <Button
          variant="clay"
          onClick={() =>
            onComplete({
              correct: allCorrect,
              correctCount: results.reduce((sum, r) => sum + r.correctCount, 0),
              totalCount: results.reduce((sum, r) => sum + r.totalCount, 0),
            })
          }
        >
          Continuar
        </Button>
      </div>
    );
  }

  if (!stepActivity) {
    return <p className="text-sm text-rose-600">No se encontró el reto de este paso.</p>;
  }

  return (
    <div className="space-y-4">
      {/* Only the step number: a step's label is often the answer itself. */}
      <p className="text-xs font-semibold uppercase text-slate-500">
        Paso {stepIndex + 1} de {steps.length}
      </p>
      <ActivityPlayer key={currentStep.id} activity={stepActivity} onComplete={handleStepComplete} />
    </div>
  );
}
