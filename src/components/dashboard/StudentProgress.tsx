"use client";

import { useEffect, useState } from "react";
import { getSubject } from "@/data/subjects";
import { listAttemptsForStudent, summarizeBySubject, type Attempt } from "@/lib/attempts";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

function formatDate(date: Date | null) {
  if (!date) return "—";
  return date.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
}

export function StudentProgress({ studentId }: { studentId: string }) {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    listAttemptsForStudent(studentId)
      .then(setAttempts)
      .catch(() => setError("No se ha podido cargar el progreso de este alumno."));
  }, [studentId]);

  if (error) {
    return (
      <Card>
        <h2 className="mb-2 font-heading text-lg font-semibold text-slate-800">Progreso</h2>
        <p className="text-sm text-rose-600">{error}</p>
      </Card>
    );
  }

  if (attempts === null) {
    return (
      <Card>
        <h2 className="mb-2 font-heading text-lg font-semibold text-slate-800">Progreso</h2>
        <p className="text-sm text-slate-500">Cargando partidas…</p>
      </Card>
    );
  }

  if (attempts.length === 0) {
    return (
      <Card>
        <h2 className="mb-2 font-heading text-lg font-semibold text-slate-800">Progreso</h2>
        <p className="text-sm text-slate-500">
          Este alumno todavía no ha terminado ningún juego. En cuanto juegue, aquí verás sus
          aciertos por asignatura.
        </p>
      </Card>
    );
  }

  const progress = summarizeBySubject(attempts);
  const correctCount = attempts.reduce((sum, a) => sum + a.correctCount, 0);
  const totalCount = attempts.reduce((sum, a) => sum + a.totalCount, 0);
  const accuracy = totalCount === 0 ? 0 : Math.round((correctCount / totalCount) * 100);
  const placementTests = attempts.filter((a) => a.isPlacementTest);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Juegos terminados</p>
          <p className="text-3xl font-bold text-slate-900">{attempts.length}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Respuestas acertadas</p>
          <p className="text-3xl font-bold text-slate-900">
            {correctCount}
            <span className="text-base font-medium text-slate-400"> / {totalCount}</span>
          </p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Última partida</p>
          <p className="text-lg font-semibold text-slate-900">
            {formatDate(attempts[0].completedAt)}
          </p>
        </Card>
      </div>

      <Card>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">
          Progreso por asignatura{" "}
          <span className="text-sm font-normal text-slate-400">({accuracy}% global)</span>
        </h2>
        <div className="space-y-4">
          {progress.map((item) => {
            const subject = getSubject(item.subjectId);
            if (!subject) return null;
            return (
              <div key={item.subjectId}>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-800">
                    <span aria-hidden="true">{subject.emoji}</span> {subject.name}
                  </p>
                  <StatusBadge status={item.status} />
                </div>
                <ProgressBar value={item.accuracy} color={subject.color} />
                <p className="mt-1 text-sm text-slate-500">
                  {item.correctCount} de {item.totalCount} respuestas · {item.games}{" "}
                  {item.games === 1 ? "juego" : "juegos"} · último {formatDate(item.lastPlayed)}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {placementTests.length > 0 && (
        <Card>
          <h2 className="mb-2 font-heading text-lg font-semibold text-slate-800">
            Pruebas de nivel
          </h2>
          <p className="mb-3 text-sm text-slate-500">
            Resultado de la primera vez que entró en cada asignatura.
          </p>
          <div className="space-y-2">
            {placementTests.map((attempt) => {
              const subject = getSubject(attempt.subjectId);
              return (
                <div
                  key={attempt.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3 text-sm"
                >
                  <span className="font-medium text-slate-800">
                    {subject ? `${subject.emoji} ${subject.name}` : attempt.activityTitle}
                  </span>
                  <span className="text-slate-500">
                    {attempt.correctCount} de {attempt.totalCount} ·{" "}
                    {formatDate(attempt.completedAt)}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      <Card>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">Últimas partidas</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-slate-400">
              <tr>
                <th className="pb-2 font-medium">Juego</th>
                <th className="pb-2 font-medium">Tema</th>
                <th className="pb-2 font-medium">Aciertos</th>
                <th className="pb-2 font-medium">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {attempts.slice(0, 15).map((attempt) => {
                const subject = getSubject(attempt.subjectId);
                return (
                  <tr key={attempt.id}>
                    <td className="py-2 pr-3 font-medium text-slate-800">
                      {attempt.activityTitle}
                      {attempt.isPlacementTest && (
                        <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">
                          prueba de nivel
                        </span>
                      )}
                    </td>
                    <td className="py-2 pr-3 text-slate-500">
                      {subject ? `${subject.name} · ` : ""}
                      {attempt.topic}
                    </td>
                    <td className="py-2 pr-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          attempt.correct
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {attempt.correctCount}/{attempt.totalCount}
                      </span>
                    </td>
                    <td className="py-2 text-slate-500">{formatDate(attempt.completedAt)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
