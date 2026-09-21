"use client";

import { useState } from "react";
import type { ActivityResult, MissionActivity } from "@/types";
import { getActivity } from "@/data/activities";
import { shuffle } from "@/lib/shuffle";
import { Button } from "@/components/ui/Button";
import { ActivityPlayer } from "@/components/games/ActivityPlayer";

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
  const [started, setStarted] = useState(false);

  const currentStep = steps[stepIndex];
  const stepActivity = currentStep ? getActivity(currentStep.activityId) : undefined;
  const finished = stepIndex >= steps.length;

  function handleStepComplete(result: ActivityResult) {
    setResults((prev) => [...prev, result]);
    setStepIndex((prev) => prev + 1);
  }

  const stepsCorrect = results.filter((r) => r.correct).length;

  if (!started) {
    return (
      <div className="space-y-4 text-center">
        <p className="font-display text-lg font-semibold text-slate-800">{activity.narrative}</p>
        <p className="text-sm text-slate-500">{steps.length} retos por completar</p>
        <Button
          variant="clay"
          onClick={() => {
            setSteps(shuffle(activity.steps));
            setStarted(true);
          }}
        >
          Comenzar misión
        </Button>
      </div>
    );
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
