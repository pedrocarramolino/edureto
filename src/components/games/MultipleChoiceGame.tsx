"use client";

import { useState } from "react";
import type { ActivityResult, MultipleChoiceActivity } from "@/types";
import { Button } from "@/components/ui/Button";
import { useAutoAdvance } from "@/components/games/useAutoAdvance";

export function MultipleChoiceGame({
  activity,
  onComplete,
}: {
  activity: MultipleChoiceActivity;
  onComplete: (result: ActivityResult) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const isCorrect = selected === activity.correctIndex;
  const resultado = { correct: isCorrect, correctCount: isCorrect ? 1 : 0, totalCount: 1 };
  useAutoAdvance(answered, isCorrect, () => onComplete(resultado));

  // Tocar la respuesta ya contesta, como en el resto de juegos: en los globos
  // o en los penaltis nadie pulsa "Comprobar" después de elegir.
  function responder(index: number) {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
  }

  return (
    <div className="space-y-5">
      <p className="font-display text-lg font-semibold text-slate-800">{activity.question}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {activity.options.map((option, index) => {
          const isSelected = selected === index;
          const showCorrect = answered && index === activity.correctIndex;
          const showWrong = answered && isSelected && !isCorrect;
          return (
            <button
              key={option}
              disabled={answered}
              onClick={() => responder(index)}
              className={`min-h-14 cursor-pointer rounded-clay border-[3px] px-4 py-3 text-left font-medium transition-colors disabled:cursor-not-allowed ${
                showCorrect
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : showWrong
                    ? "border-rose-500 bg-rose-50 text-rose-700"
                    : isSelected
                      ? "border-primary bg-primary-soft text-primary"
                      : "border-slate-200 bg-white hover:border-primary/40"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && activity.explanation && (
        <p className="rounded-clay bg-slate-50 p-3 text-sm text-slate-600">{activity.explanation}</p>
      )}

      {answered && (
        <Button
          variant="clay"
          onClick={() =>
            onComplete({ correct: isCorrect, correctCount: isCorrect ? 1 : 0, totalCount: 1 })
          }
        >
          Continuar
        </Button>
      )}
    </div>
  );
}
