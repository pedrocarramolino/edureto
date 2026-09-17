"use client";

import { useState } from "react";
import Link from "next/link";
import type { Activity } from "@/types";
import { ActivityPlayer } from "@/components/games/ActivityPlayer";
import { Button } from "@/components/ui/Button";

export function PlayScreen({ activity }: { activity: Activity }) {
  const [result, setResult] = useState<boolean | null>(null);

  if (result !== null) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {result ? "🎉" : "💪"}
        </p>
        <p className="font-display text-lg font-bold text-slate-800">
          {result ? "¡Muy bien!" : "¡Casi! Sigue practicando"}
        </p>
        <div className="flex justify-center gap-3">
          <Button variant="clay-secondary" onClick={() => setResult(null)}>
            Jugar de nuevo
          </Button>
          <Link href="/student">
            <Button variant="clay">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <ActivityPlayer activity={activity} onComplete={setResult} />;
}
