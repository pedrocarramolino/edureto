"use client";

import { useState } from "react";
import type { MissionActivity } from "@/types";
import { getActivity } from "@/data/activities";
import { Button } from "@/components/ui/Button";
import { ActivityPlayer } from "@/components/games/ActivityPlayer";

export function MissionGame({
  activity,
  onComplete,
}: {
  activity: MissionActivity;
  onComplete: (correct: boolean) => void;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [started, setStarted] = useState(false);

  const currentStep = activity.steps[stepIndex];
  const stepActivity = currentStep ? getActivity(currentStep.activityId) : undefined;
  const finished = stepIndex >= activity.steps.length;

  function handleStepComplete(correct: boolean) {
    const nextResults = [...results, correct];
    setResults(nextResults);
    setStepIndex((prev) => prev + 1);
  }

  if (!started) {
    return (
      <div className="space-y-4 text-center">
        <p className="font-display text-lg font-semibold text-slate-800">{activity.narrative}</p>
        <p className="text-sm text-slate-500">{activity.steps.length} retos por completar</p>
        <Button variant="clay" onClick={() => setStarted(true)}>
          Comenzar misión
        </Button>
      </div>
    );
  }

  if (finished) {
    const allCorrect = results.every(Boolean);
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {activity.badge.split(" ")[0]}
        </p>
        <p className="font-display text-lg font-bold text-slate-800">
          {allCorrect ? "¡Misión completada!" : "Misión terminada"}
        </p>
        <p className="text-sm text-slate-500">
          {results.filter(Boolean).length} de {results.length} retos correctos
        </p>
        <Button variant="clay" onClick={() => onComplete(allCorrect)}>
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
      <p className="text-xs font-semibold uppercase text-slate-500">
        Paso {stepIndex + 1} de {activity.steps.length} · {currentStep.label}
      </p>
      <ActivityPlayer activity={stepActivity} onComplete={handleStepComplete} />
    </div>
  );
}
