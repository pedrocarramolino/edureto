"use client";

import { useState } from "react";
import type { ActivityResult } from "@/types";
import { Button } from "@/components/ui/Button";
import { useAutoAdvance } from "@/components/games/useAutoAdvance";
import type { GameModeProps } from "@/components/games/modes/PenaltyGame";

/**
 * A race against a rival: every right answer moves the student forward and
 * every wrong one moves the rival, so the track shows at a glance how the
 * game is going.
 */
export function RaceGame({ questions, onComplete }: GameModeProps) {
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);
  const [me, setMe] = useState(0);
  const [rival, setRival] = useState(0);

  const question = questions[index];
  const finished = index >= questions.length;
  const isRight = answered !== null && answered === question?.correctIndex;
  const percent = (steps: number) => (steps / questions.length) * 100;

  useAutoAdvance(answered !== null, isRight, () => next());

  function answer(option: number) {
    setAnswered(option);
    if (option === question.correctIndex) setMe((prev) => prev + 1);
    else setRival((prev) => prev + 1);
  }

  function next() {
    setAnswered(null);
    setIndex((prev) => prev + 1);
  }

  if (finished) {
    const won = me > rival;
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {won ? "🏆" : me === rival ? "🤝" : "💪"}
        </p>
        <p className="font-display text-xl font-bold text-slate-800">
          {won ? "¡Has ganado la carrera!" : me === rival ? "¡Empate!" : "Te ha ganado por poco"}
        </p>
        <p className="text-sm text-slate-500">
          {me} aciertos de {questions.length}
        </p>
        <Button
          variant="clay"
          onClick={() =>
            onComplete({
              correct: me === questions.length,
              correctCount: me,
              totalCount: questions.length,
            } satisfies ActivityResult)
          }
        >
          Continuar
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-display text-sm font-bold text-slate-500">
        <span>
          Tramo {index + 1} de {questions.length}
        </span>
        <span className="text-accent">
          🏃 {me} · 🤖 {rival}
        </span>
      </div>

      <div className="space-y-2 rounded-clay bg-emerald-50 p-4">
        {[
          { icon: "🏃", steps: me, label: "Tú" },
          { icon: "🤖", steps: rival, label: "Rival" },
        ].map((runner) => (
          <div key={runner.label}>
            <div className="relative h-8 rounded-full border-2 border-dashed border-emerald-300 bg-white">
              <span
                className="absolute top-1/2 -translate-y-1/2 text-xl transition-all duration-500"
                style={{ left: `calc(${percent(runner.steps)}% - ${percent(runner.steps) / 100} * 1.75rem)` }}
                aria-hidden="true"
              >
                {runner.icon}
              </span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-sm" aria-hidden="true">
                🏁
              </span>
            </div>
            <p className="sr-only">
              {runner.label}: {runner.steps} de {questions.length}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center font-display text-lg font-bold text-slate-800">
        {question.question}
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option, optionIndex) => {
          const chosen = answered === optionIndex;
          const showRight = answered !== null && optionIndex === question.correctIndex;
          return (
            <button
              key={option}
              disabled={answered !== null}
              onClick={() => answer(optionIndex)}
              className={`min-h-14 cursor-pointer rounded-clay border-[3px] px-4 py-3 text-left font-medium transition-colors disabled:cursor-not-allowed ${
                showRight
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : chosen
                    ? "border-rose-500 bg-rose-50 text-rose-700"
                    : "border-slate-200 bg-white hover:border-primary/40"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered !== null && (
        <div aria-live="polite" className="space-y-2 text-center">
          <p
            className={`font-display text-lg font-bold ${isRight ? "text-emerald-600" : "text-rose-600"}`}
          >
            {isRight ? "¡Avanzas!" : "El rival avanza"}
          </p>
          {question.explanation && <p className="text-sm text-slate-500">{question.explanation}</p>}
          <Button variant="clay" onClick={next}>
            {index + 1 === questions.length ? "Ver quién gana" : "Seguir corriendo"}
          </Button>
        </div>
      )}
    </div>
  );
}
