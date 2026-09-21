"use client";

import { useState } from "react";
import type { ActivityResult } from "@/types";
import { Button } from "@/components/ui/Button";
import type { GameModeProps } from "@/components/games/modes/PenaltyGame";

const letters = ["A", "B", "C", "D"];

/** Each question is worth a bit more than the one before. */
function prizeFor(step: number): number {
  return (step + 1) * 100;
}

export function QuizShowGame({ questions, onComplete }: GameModeProps) {
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [hidden, setHidden] = useState<number[]>([]);
  const [usedFifty, setUsedFifty] = useState(false);
  const [audience, setAudience] = useState<number[] | null>(null);
  const [usedAudience, setUsedAudience] = useState(false);

  const question = questions[index];
  const finished = index >= questions.length;
  const isRight = answered !== null && answered === question?.correctIndex;

  function useFifty() {
    setUsedFifty(true);
    const wrong = question.options
      .map((_, i) => i)
      .filter((i) => i !== question.correctIndex)
      .sort(() => Math.random() - 0.5);
    setHidden(wrong.slice(0, 2));
  }

  function useAudience() {
    setUsedAudience(true);
    // The audience is usually right, but not always: it is a hint, not the answer.
    const votes = question.options.map((_, i) =>
      i === question.correctIndex ? 45 + Math.random() * 25 : Math.random() * 20,
    );
    const total = votes.reduce((sum, v) => sum + v, 0);
    setAudience(votes.map((v) => Math.round((v / total) * 100)));
  }

  function answer(option: number) {
    setAnswered(option);
    if (option === question.correctIndex) {
      setCorrectCount((previous) => previous + 1);
      setPoints((previous) => previous + prizeFor(index));
    }
  }

  function next() {
    setAnswered(null);
    setHidden([]);
    setAudience(null);
    setIndex((previous) => previous + 1);
  }

  if (finished) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {correctCount === questions.length ? "🏆" : "🎬"}
        </p>
        <p className="font-display text-xl font-bold text-slate-800">{points} puntos</p>
        <p className="text-sm text-slate-500">
          {correctCount} de {questions.length} respuestas correctas
        </p>
        <Button
          variant="clay"
          onClick={() =>
            onComplete({
              correct: correctCount === questions.length,
              correctCount,
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
      {/* Prize ladder: how far up the student has climbed. */}
      <div className="flex flex-wrap items-center justify-center gap-1">
        {questions.map((_, step) => (
          <span
            key={step}
            title={`Pregunta ${step + 1}`}
            className={`h-2.5 w-6 rounded-full ${
              step < index ? "bg-emerald-500" : step === index ? "bg-accent" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between font-display text-sm font-bold text-slate-500">
        <span>
          Pregunta {index + 1} de {questions.length}
        </span>
        <span className="text-accent">⭐ {points} puntos</span>
      </div>

      <div className="rounded-clay border-[3px] border-indigo-900/10 bg-gradient-to-b from-indigo-900 to-indigo-700 p-5 text-center">
        <p className="font-display text-xl font-bold text-white">{question.question}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option, optionIndex) => {
          if (hidden.includes(optionIndex)) {
            return <div key={option} className="min-h-14 rounded-clay bg-slate-50" />;
          }
          const chosen = answered === optionIndex;
          const showRight = answered !== null && optionIndex === question.correctIndex;
          return (
            <button
              key={option}
              disabled={answered !== null}
              onClick={() => answer(optionIndex)}
              className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-clay border-[3px] px-4 py-3 text-left font-medium transition-colors disabled:cursor-not-allowed ${
                showRight
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : chosen
                    ? "border-rose-500 bg-rose-50 text-rose-700"
                    : "border-slate-200 bg-white hover:border-primary/40"
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 font-display font-bold text-slate-600">
                {letters[optionIndex]}
              </span>
              <span className="flex-1">{option}</span>
              {audience && (
                <span className="text-xs font-semibold text-slate-400">{audience[optionIndex]}%</span>
              )}
            </button>
          );
        })}
      </div>

      {answered === null ? (
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="clay-secondary" disabled={usedFifty} onClick={useFifty}>
            50:50
          </Button>
          <Button variant="clay-secondary" disabled={usedAudience} onClick={useAudience}>
            👥 Público
          </Button>
        </div>
      ) : (
        <div aria-live="polite" className="space-y-3 text-center">
          <p
            className={`font-display text-lg font-bold ${isRight ? "text-emerald-600" : "text-rose-600"}`}
          >
            {isRight
              ? `¡Correcto! +${prizeFor(index)} puntos`
              : "No era esa, pero sigues en el concurso"}
          </p>
          {question.explanation && <p className="text-sm text-slate-500">{question.explanation}</p>}
          <Button variant="clay" onClick={next}>
            {index + 1 === questions.length ? "Ver el resultado" : "Siguiente pregunta"}
          </Button>
        </div>
      )}
    </div>
  );
}
