"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getStudentProfile, calculateAge, type StudentProfile } from "@/lib/students";
import { stageOptions } from "@/data/stages";
import { Card } from "@/components/ui/Card";
import { StudentProgress } from "@/components/dashboard/StudentProgress";

export default function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [student, setStudent] = useState<StudentProfile | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getStudentProfile(id)
      .then(setStudent)
      .catch(() => setError("No se ha podido cargar este alumno. Inténtalo de nuevo más tarde."));
  }, [id]);

  if (error) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-rose-600">{error}</p>
        <Link href="/dashboard/students" className="text-sm font-medium text-primary hover:underline">
          ← Volver a mis alumnos
        </Link>
      </div>
    );
  }

  if (student === undefined) {
    return <p className="text-sm text-slate-500">Cargando…</p>;
  }

  if (student === null) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-500">No se ha encontrado este alumno.</p>
        <Link href="/dashboard/students" className="text-sm font-medium text-primary hover:underline">
          ← Volver a mis alumnos
        </Link>
      </div>
    );
  }

  const age = calculateAge(student.birthDate);
  const stageLabel = stageOptions.find((s) => s.value === student.stage)?.label ?? student.stage;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-4xl" aria-hidden="true">
          {student.avatarEmoji}
        </span>
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">{student.name}</h1>
          <p className="text-slate-500">
            {age !== null ? `${age} años` : "Edad desconocida"} · {stageLabel}
          </p>
        </div>
        <Link
          href="/dashboard/activities"
          className="ml-auto rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-indigo-700"
        >
          Ver biblioteca de actividades
        </Link>
      </div>

      <Card>
        <h2 className="mb-2 font-heading text-lg font-semibold text-slate-800">Datos</h2>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-slate-500">Correo</dt>
            <dd className="font-medium text-slate-800">{student.email ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Fecha de nacimiento</dt>
            <dd className="font-medium text-slate-800">{student.birthDate || "—"}</dd>
          </div>
          <div>
            <dt className="text-slate-500">De alta desde</dt>
            <dd className="font-medium text-slate-800">
              {student.createdAt ? student.createdAt.toLocaleDateString("es-ES") : "—"}
            </dd>
          </div>
        </dl>
      </Card>

      <StudentProgress studentId={student.uid} />
    </div>
  );
}
