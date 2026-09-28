"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSubject } from "@/data/subjects";
import { useAuth } from "@/lib/auth/AuthProvider";
import {
  listAttemptsForStudent,
  summarizeBySubject,
  totalPoints,
  currentStreak,
  type Attempt,
} from "@/lib/attempts";
import { withTimeout } from "@/lib/withTimeout";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { Button } from "@/components/ui/Button";

export default function ProgressPage() {
  const { user } = useAuth();
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    withTimeout(listAttemptsForStudent(user.uid))
      .then(setAttempts)
      .catch(() => setError("No hemos podido cargar tu progreso. Inténtalo de nuevo más tarde."));
  }, [user]);

  if (error) {
    return <p className="text-sm text-rose-600">{error}</p>;
  }

  if (attempts === null) {
    return <p className="text-sm text-slate-500">Cargando tu progreso…</p>;
  }

  const progress = summarizeBySubject(attempts);
  const points = totalPoints(attempts);
  const streak = currentStreak(attempts);
  const recent = attempts.slice(0, 8);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Mi progreso</h1>
        <p className="text-slate-500">Así vas en cada asignatura.</p>
      </div>

      {attempts.length === 0 ? (
        <Card variant="clay" className="text-center">
          <p className="text-5xl" aria-hidden="true">
            🚀
          </p>
          <p className="mt-3 font-display font-bold text-slate-800">Todavía no has jugado nada</p>
          <p className="mt-1 text-sm text-slate-500">
            En cuanto termines tu primer juego, aquí verás tus aciertos.
          </p>
          <div className="mt-4 flex justify-center">
            <Link href="/student/games">
              <Button variant="clay">Ir a la zona de juegos</Button>
            </Link>
          </div>
        </Card>
      ) : (
        <>
          {/* Tres cifras cortas: caben en una fila también en el móvil. */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {[
              { label: "Juegos terminados", value: attempts.length },
              { label: "Puntos", value: points },
              { label: "Días seguidos", value: streak },
            ].map((stat) => (
              <Card key={stat.label} variant="clay" className="!p-3 text-center sm:!p-5 sm:text-left">
                <p className="text-xs text-slate-500 sm:text-sm">{stat.label}</p>
                <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  {stat.value}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {progress.map((item) => {
              const subject = getSubject(item.subjectId);
              if (!subject) return null;
              return (
                <Card key={item.subjectId} variant="clay">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <WorldBadge subject={subject} size="sm" />
                      <p className="font-semibold text-slate-800">{subject.name}</p>
                    </div>
                    <StatusBadge status={item.status} />
                  </div>
                  <ProgressBar value={item.accuracy} color={subject.color} />
                  <p className="mt-2 text-sm text-slate-500">
                    {item.correctCount} de {item.totalCount} respuestas correctas ·{" "}
                    {item.games} {item.games === 1 ? "juego" : "juegos"}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card variant="clay">
            <h2 className="mb-4 font-display text-lg font-bold text-slate-800">Últimas partidas</h2>
            <div className="space-y-2">
              {recent.map((attempt) => {
                const subject = getSubject(attempt.subjectId);
                return (
                  <div
                    key={attempt.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border-2 border-slate-100 p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {subject && <WorldBadge subject={subject} size="sm" />}
                      <div>
                        <p className="font-semibold text-slate-800">{attempt.activityTitle}</p>
                        <p className="text-xs text-slate-500">
                          {attempt.isPlacementTest ? "Prueba de nivel · " : ""}
                          {attempt.completedAt
                            ? attempt.completedAt.toLocaleDateString("es-ES")
                            : "—"}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                        attempt.correct
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {attempt.correctCount}/{attempt.totalCount}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
