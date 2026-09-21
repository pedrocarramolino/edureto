"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listStudents, calculateAge, type StudentProfile } from "@/lib/students";
import { listRecentAttempts, type Attempt } from "@/lib/attempts";
import { Card } from "@/components/ui/Card";
import { Chalkboard } from "@/components/ui/Chalkboard";

export default function DashboardHome() {
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [attemptsThisWeek, setAttemptsThisWeek] = useState(0);

  useEffect(() => {
    listStudents()
      .then(setStudents)
      .catch(() => setError("No se han podido cargar los alumnos. Inténtalo de nuevo más tarde."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    listRecentAttempts(50)
      .then((recentAttempts) => {
        setAttempts(recentAttempts);
        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        setAttemptsThisWeek(
          recentAttempts.filter((a) => a.completedAt && a.completedAt.getTime() >= weekAgo).length,
        );
      })
      .catch(() => {
        // The dashboard still works without the activity feed.
      });
  }, []);
  const studentName = (uid: string) =>
    students.find((s) => s.uid === uid)?.name ?? "Alumno";

  const recent = [...students]
    .sort((a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0))
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <Chalkboard level="h1" title="¡Bienvenida de nuevo!">
        Vista rápida de tus alumnos.
      </Chalkboard>

      <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
        <Card>
          <p className="text-sm text-slate-500">Alumnos registrados</p>
          <p className="text-3xl font-bold text-slate-900">
            {loading ? "…" : error ? "—" : students.length}
          </p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Partidas en los últimos 7 días</p>
          <p className="text-3xl font-bold text-slate-900">{attemptsThisWeek}</p>
        </Card>
      </div>

      <Card>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">Altas recientes</h2>
        {loading ? (
          <p className="text-sm text-slate-500">Cargando…</p>
        ) : error ? (
          <p className="text-sm text-rose-600">{error}</p>
        ) : recent.length === 0 ? (
          <p className="text-sm text-slate-500">
            Todavía no hay alumnos registrados. Cuando alguien cree una cuenta desde{" "}
            <span className="font-medium text-slate-700">/register</span>, aparecerá aquí.
          </p>
        ) : (
          <div className="space-y-3">
            {recent.map((student) => {
              const age = calculateAge(student.birthDate);
              return (
                <Link
                  key={student.uid}
                  href={`/dashboard/students/${student.uid}`}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">
                      {student.avatarEmoji}
                    </span>
                    <div>
                      <p className="font-medium text-slate-800">{student.name}</p>
                      <p className="text-sm text-slate-500">
                        {age !== null ? `${age} años` : "Edad desconocida"}
                      </p>
                    </div>
                  </div>
                  {student.createdAt && (
                    <span className="text-xs text-slate-400">
                      {student.createdAt.toLocaleDateString("es-ES")}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </Card>

      <Card>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">
          Actividad reciente
        </h2>
        {attempts.length === 0 ? (
          <p className="text-sm text-slate-500">
            Todavía no hay partidas registradas. Aparecerán aquí en cuanto tus alumnos jueguen.
          </p>
        ) : (
          <div className="space-y-2">
            {attempts.slice(0, 8).map((attempt) => (
              <Link
                key={attempt.id}
                href={`/dashboard/students/${attempt.studentId}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3 text-sm hover:bg-slate-50"
              >
                <div>
                  <p className="font-medium text-slate-800">{studentName(attempt.studentId)}</p>
                  <p className="text-slate-500">
                    {attempt.activityTitle}
                    {attempt.isPlacementTest ? " (prueba de nivel)" : ""}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      attempt.correct
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {attempt.correctCount}/{attempt.totalCount}
                  </span>
                  <p className="mt-1 text-xs text-slate-400">
                    {attempt.completedAt ? attempt.completedAt.toLocaleDateString("es-ES") : "—"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
