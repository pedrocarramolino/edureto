"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listStudents, calculateAge, type StudentProfile } from "@/lib/students";
import { Card } from "@/components/ui/Card";

export default function DashboardHome() {
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    listStudents()
      .then(setStudents)
      .catch(() => setError("No se han podido cargar los alumnos. Inténtalo de nuevo más tarde."))
      .finally(() => setLoading(false));
  }, []);

  const recent = [...students]
    .sort((a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0))
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-slate-900">Resumen</h1>
        <p className="text-slate-500">Vista rápida de tus alumnos.</p>
      </div>

      <Card className="max-w-xs">
        <p className="text-sm text-slate-500">Alumnos registrados</p>
        <p className="text-3xl font-bold text-slate-900">{loading ? "…" : error ? "—" : students.length}</p>
      </Card>

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
    </div>
  );
}
