"use client";

import { useState } from "react";
import type { ActivityResult, MultipleChoiceActivity } from "@/types";
import { Button } from "@/components/ui/Button";

export interface GameModeProps {
  questions: MultipleChoiceActivity[];
  onComplete: (result: ActivityResult) => void;
}

/** Where each option sits inside the goal, as a percentage of the box. */
const corners = [
  { x: 24, y: 30, label: "arriba a la izquierda" },
  { x: 76, y: 30, label: "arriba a la derecha" },
  { x: 24, y: 58, label: "abajo a la izquierda" },
  { x: 76, y: 58, label: "abajo a la derecha" },
];

type Phase = "aiming" | "shot";

export const letters = ["A", "B", "C", "D"];

/** Long answers do not fit in a corner or a maze cell, so those use letters. */
export function needsLetters(options: string[]): boolean {
  return options.some((option) => option.length > 10);
}

export function PenaltyGame({ questions, onComplete }: GameModeProps) {
  const [index, setIndex] = useState(0);
  const [goals, setGoals] = useState(0);
  const [phase, setPhase] = useState<Phase>("aiming");
  const [shotAt, setShotAt] = useState<number | null>(null);

  const question = questions[index];
  const finished = index >= questions.length;
  const byLetter = question ? needsLetters(question.options) : false;
  const scored = shotAt !== null && shotAt === question?.correctIndex;

  // The keeper dives at the ball when the answer is wrong, and the wrong way
  // when it is right.
  const keeperCorner =
    shotAt === null
      ? null
      : scored
        ? corners[(shotAt + 2) % corners.length]
        : corners[shotAt];

  function shoot(option: number) {
    setShotAt(option);
    setPhase("shot");
    if (option === question.correctIndex) setGoals((previous) => previous + 1);
  }

  function next() {
    setShotAt(null);
    setPhase("aiming");
    setIndex((previous) => previous + 1);
  }

  if (finished) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {goals === questions.length ? "🏆" : goals >= questions.length / 2 ? "⚽" : "💪"}
        </p>
        <p className="font-display text-xl font-bold text-slate-800">
          {goals} {goals === 1 ? "gol" : "goles"} de {questions.length}
        </p>
        <Button
          variant="clay"
          onClick={() =>
            onComplete({
              correct: goals === questions.length,
              correctCount: goals,
              totalCount: questions.length,
            })
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
          Penalti {index + 1} de {questions.length}
        </span>
        <span className="text-accent">⚽ {goals}</span>
      </div>

      <p className="text-center font-display text-xl font-bold text-slate-800">
        {question.question}
      </p>

      {/* The goal. Each option is one of the four corners to shoot at. */}
      <div className="relative aspect-[4/3] max-h-96 min-h-64 w-full overflow-hidden rounded-clay bg-gradient-to-b from-sky-300 to-sky-100">
        {/* Grass, then the goal with its net on top of it. */}
        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-emerald-500" />
        <div className="absolute inset-x-0 bottom-[30%] h-1 bg-white/70" />
        <div className="absolute inset-x-[10%] top-[16%] bottom-[30%] rounded-t-md border-[8px] border-b-0 border-white bg-white/15 shadow-[inset_0_0_30px_rgba(0,0,0,.08)] [background-image:linear-gradient(to_right,rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:12px_12px]" />

        <div
          className="absolute text-4xl transition-all duration-500 sm:text-5xl"
          style={{
            left: `${keeperCorner ? keeperCorner.x : 50}%`,
            top: `${keeperCorner ? keeperCorner.y : 48}%`,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden="true"
        >
          🧤
        </div>

        <div
          className="absolute text-3xl transition-all duration-500 ease-out sm:text-4xl"
          style={{
            left: `${shotAt !== null ? corners[shotAt].x : 50}%`,
            top: `${shotAt !== null ? corners[shotAt].y : 86}%`,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden="true"
        >
          ⚽
        </div>

        {question.options.map((option, optionIndex) => {
          const corner = corners[optionIndex] ?? corners[0];
          const isShot = shotAt === optionIndex;
          const isRight = optionIndex === question.correctIndex;
          return (
            <button
              key={option}
              disabled={phase === "shot"}
              onClick={() => shoot(optionIndex)}
              aria-label={`Chutar ${corner.label}: ${option}`}
              className={`absolute min-h-11 min-w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-clay border-[3px] px-3 py-2 font-display text-lg font-bold shadow-clay-sm transition-colors disabled:cursor-not-allowed ${
                phase === "shot" && isRight
                  ? "border-emerald-600 bg-emerald-500 text-white"
                  : phase === "shot" && isShot
                    ? "border-rose-600 bg-rose-500 text-white"
                    : "border-white bg-white/90 text-slate-800 hover:bg-white"
              }`}
              style={{ left: `${corner.x}%`, top: `${corner.y}%` }}
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
        {phase === "aiming" ? (
          <p className="text-sm text-slate-500">
            {byLetter
              ? "Chuta a la esquina con la letra de la respuesta correcta."
              : "Chuta a la esquina con el resultado correcto."}
          </p>
        ) : (
          <>
            <p
              className={`font-display text-lg font-bold ${scored ? "text-emerald-600" : "text-rose-600"}`}
            >
              {scored ? "¡GOOOL!" : "¡Parada del portero!"}
            </p>
            {!scored && (
              <p className="text-sm text-slate-500">{question.explanation ?? ""}</p>
            )}
          </>
        )}
      </div>

      {phase === "shot" && (
        <div className="flex justify-center">
          <Button variant="clay" onClick={next}>
            {index + 1 === questions.length ? "Ver el resultado" : "Siguiente penalti"}
          </Button>
        </div>
      )}
    </div>
  );
}
