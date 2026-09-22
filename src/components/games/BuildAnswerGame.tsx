"use client";

import { useState } from "react";
import type { ActivityResult, BuildAnswerActivity } from "@/types";
import { Button } from "@/components/ui/Button";
import { useAutoAdvance } from "@/components/games/useAutoAdvance";

export function BuildAnswerGame({
  activity,
  onComplete,
}: {
  activity: BuildAnswerActivity;
  onComplete: (result: ActivityResult) => void;
}) {
  const [built, setBuilt] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [availableIndexes, setAvailableIndexes] = useState<number[]>(
    activity.pieces.map((_, i) => i),
  );

  function addPiece(piece: string, pieceIndex: number) {
    setBuilt((prev) => [...prev, piece]);
    setAvailableIndexes((prev) => prev.filter((i) => i !== pieceIndex));
  }

  function reset() {
    setBuilt([]);
    setAvailableIndexes(activity.pieces.map((_, i) => i));
    setChecked(false);
  }

  const isCorrect = built.join(" ") === activity.correctOrder.join(" ");
  useAutoAdvance(checked, isCorrect, () =>
    onComplete({ correct: isCorrect, correctCount: isCorrect ? 1 : 0, totalCount: 1 }),
  );

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">{activity.instructions}</p>

      <div className="flex min-h-16 flex-wrap items-center gap-2 rounded-clay border-[3px] border-slate-200 bg-slate-50 p-3">
        {built.length === 0 && <span className="text-sm text-slate-400">Toca las piezas en orden…</span>}
        {built.map((piece, i) => (
          <span key={i} className="rounded-clay bg-primary-soft px-3 py-1.5 font-medium text-primary">
            {piece}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {availableIndexes.map((index) => (
          <button
            key={index}
            onClick={() => addPiece(activity.pieces[index], index)}
            className="min-h-11 cursor-pointer rounded-clay border-[3px] border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition-colors hover:border-primary/40"
          >
            {activity.pieces[index]}
          </button>
        ))}
      </div>

      {checked && (
        <p className={`text-sm font-medium ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}>
          {isCorrect ? "¡Correcto!" : `Correcto: "${activity.correctOrder.join(" ")}"`}
        </p>
      )}

      <div className="flex gap-3">
        {!checked ? (
          <>
            <Button variant="clay" disabled={availableIndexes.length > 0} onClick={() => setChecked(true)}>
              Comprobar
            </Button>
            <Button variant="clay-secondary" onClick={reset}>
              Reiniciar
            </Button>
          </>
        ) : (
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
    </div>
  );
}
