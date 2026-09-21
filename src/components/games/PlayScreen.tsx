"use client";

import { useState } from "react";
import Link from "next/link";
import type { Activity, ActivityResult } from "@/types";
import { useAuth } from "@/lib/auth/AuthProvider";
import { recordAttempt } from "@/lib/attempts";
import { ActivityPlayer } from "@/components/games/ActivityPlayer";
import { Button } from "@/components/ui/Button";

export function PlayScreen({ activity }: { activity: Activity }) {
  const { user } = useAuth();
  const [result, setResult] = useState<ActivityResult | null>(null);

  async function handleComplete(activityResult: ActivityResult) {
    setResult(activityResult);
    if (!user) return;
    try {
      await recordAttempt({ studentId: user.uid, activity, result: activityResult });
    } catch (error) {
      // Saving the attempt is best-effort: the student has already finished
      // playing and must never be blocked by a failed write.
      console.warn("No se ha podido guardar la partida", error);
    }
  }

  if (result !== null) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {result.correct ? "🎉" : "💪"}
        </p>
        <p className="font-display text-lg font-bold text-slate-800">
          {result.correct ? "¡Muy bien!" : "¡Casi! Sigue practicando"}
        </p>
        {result.totalCount > 1 && (
          <p className="text-sm text-slate-500">
            {result.correctCount} de {result.totalCount} respuestas correctas
          </p>
        )}
        <div className="flex justify-center gap-3">
          <Button variant="clay-secondary" onClick={() => setResult(null)}>
            Jugar de nuevo
          </Button>
          <Link href="/student/progress">
            <Button variant="clay">Ver mi progreso</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <ActivityPlayer activity={activity} onComplete={handleComplete} />;
}
