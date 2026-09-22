"use client";

import { useState } from "react";
import type { ActivityResult, OpenResponseActivity } from "@/types";
import { Button } from "@/components/ui/Button";
import { useAutoAdvance } from "@/components/games/useAutoAdvance";

export function OpenResponseGame({
  activity,
  onComplete,
}: {
  activity: OpenResponseActivity;
  onComplete: (result: ActivityResult) => void;
}) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  useAutoAdvance(submitted, true, () => onComplete({ correct: true, correctCount: 1, totalCount: 1 }));

  return (
    <div className="space-y-4">
      <p className="font-display text-lg font-semibold text-slate-800">{activity.prompt}</p>
      <p className="text-sm text-slate-500">{activity.guidance}</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitted}
        rows={6}
        className="w-full rounded-clay border-[3px] border-slate-200 p-3 text-base focus:border-primary focus:outline-none disabled:bg-slate-50"
        placeholder="Escribe aquí tu respuesta…"
      />
      {submitted ? (
        <>
          <p className="rounded-clay bg-amber-50 p-3 text-sm text-amber-700">
            Tu respuesta se ha guardado. La profesora la revisará y te dará su valoración.
          </p>
          <Button
            variant="clay"
            onClick={() => onComplete({ correct: true, correctCount: 1, totalCount: 1 })}
          >
            Continuar
          </Button>
        </>
      ) : (
        <Button variant="clay" disabled={text.trim().length === 0} onClick={() => setSubmitted(true)}>
          Enviar respuesta
        </Button>
      )}
    </div>
  );
}
