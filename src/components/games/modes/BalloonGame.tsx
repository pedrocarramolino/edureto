"use client";

import { useState } from "react";
import type { ActivityResult } from "@/types";
import { Button } from "@/components/ui/Button";
import { letters, needsLetters, type GameModeProps } from "@/components/games/modes/PenaltyGame";

const colors = ["#ef4444", "#3b82f6", "#22c55e", "#a855f7"];
const RISE_SECONDS = 14;

export function BalloonGame({ questions, onComplete }: GameModeProps) {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [popped, setPopped] = useState<number[]>([]);
  const [missed, setMissed] = useState(false);
  const [escaped, setEscaped] = useState(false);
  const [done, setDone] = useState(false);

  const question = questions[index];
  const byLetter = question ? needsLetters(question.options) : false;
  const finished = index >= questions.length;
  const solved = popped.includes(question?.correctIndex ?? -1);

  function pop(option: number) {
    if (popped.includes(option) || escaped) return;
    setPopped((prev) => [...prev, option]);
    if (option === question.correctIndex) {
      if (!missed) setCorrectCount((prev) => prev + 1);
    } else {
      setMissed(true);
    }
  }

  function next() {
    if (index + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setPopped([]);
    setMissed(false);
    setEscaped(false);
    setIndex((prev) => prev + 1);
  }

  if (finished || done) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {correctCount === questions.length ? "🏆" : "🎈"}
        </p>
        <p className="font-display text-xl font-bold text-slate-800">
          {correctCount} de {questions.length} globos acertados
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
    <div className="space-y-3">
      <div className="flex items-center justify-between font-display text-sm font-bold text-slate-500">
        <span>
          Globo {index + 1} de {questions.length}
        </span>
        <span className="text-accent">🎈 {correctCount}</span>
      </div>

      <p className="text-center font-display text-lg font-bold text-slate-800">
        {question.question}
      </p>

      <div className="relative h-80 w-full overflow-hidden rounded-clay bg-gradient-to-b from-sky-300 to-sky-100 sm:h-96">
        <span className="absolute left-6 top-6 text-3xl opacity-80" aria-hidden="true">
          ☁️
        </span>
        <span className="absolute right-8 top-16 text-2xl opacity-70" aria-hidden="true">
          ☁️
        </span>

        {question.options.map((option, optionIndex) => {
          const isPopped = popped.includes(optionIndex);
          if (isPopped) return null;
          return (
            <button
              key={option}
              onClick={() => pop(optionIndex)}
              aria-label={`Explotar el globo ${option}`}
              onAnimationEnd={() => {
                if (optionIndex === question.correctIndex) setEscaped(true);
              }}
              className="animate-rise absolute flex min-h-14 min-w-14 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-[3px] border-black/10 px-4 py-3 font-display text-lg font-bold text-white shadow-clay-sm"
              style={{
                left: `${15 + optionIndex * 23}%`,
                backgroundColor: colors[optionIndex % colors.length],
                animationDuration: `${RISE_SECONDS + optionIndex * 1.5}s`,
                animationDelay: `${optionIndex * 0.6}s`,
              }}
            >
              {byLetter ? letters[optionIndex] : option}
            </button>
          );
        })}
      </div>

      {byLetter && (
        <ul className="space-y-1 text-sm text-slate-600">
          {question.options.map((option, optionIndex) => (
            <li key={option} className="flex gap-2">
              <span className="font-display font-bold text-slate-400">{letters[optionIndex]}</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}

      <div aria-live="polite" className="min-h-14 text-center">
        {solved ? (
          <>
            <p className="font-display text-lg font-bold text-emerald-600">
              ¡Bien! {question.options[question.correctIndex]}
            </p>
            <div className="mt-2 flex justify-center">
              <Button variant="clay" onClick={next}>
                {index + 1 === questions.length ? "Ver el resultado" : "Siguiente globo"}
              </Button>
            </div>
          </>
        ) : escaped ? (
          <>
            <p className="font-display text-lg font-bold text-rose-600">
              ¡Se ha escapado! Era {question.options[question.correctIndex]}
            </p>
            <div className="mt-2 flex justify-center">
              <Button variant="clay" onClick={next}>
                {index + 1 === questions.length ? "Ver el resultado" : "Siguiente globo"}
              </Button>
            </div>
          </>
        ) : missed ? (
          <p className="text-sm font-semibold text-rose-600">Ese no era. ¡Busca el correcto!</p>
        ) : (
          <p className="text-sm text-slate-500">Explota el globo con la respuesta correcta.</p>
        )}
      </div>
    </div>
  );
}
