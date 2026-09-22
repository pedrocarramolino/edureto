"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  getStudentProfile,
  updateStudentStage,
  calculateAge,
  type StudentProfile,
} from "@/lib/students";
import { stageOptions, stageLabel, stageFitsAge, suggestedStage } from "@/data/stages";
import { withTimeout } from "@/lib/withTimeout";
import type { Stage } from "@/types";
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
  const [stageStatus, setStageStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    withTimeout(getStudentProfile(id))
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
  const stage = stageLabel(student.stage);
  const stageMismatch = age !== null && !stageFitsAge(student.stage, age);

  // The course is saved as soon as it is picked; on failure the old one comes
  // back, so what is on screen always matches what is stored.
  async function changeStage(next: Stage) {
    const previous = student as StudentProfile;
    setStudent({ ...previous, stage: next });
    setStageStatus("saving");
    try {
      await updateStudentStage(previous.uid, next);
      setStageStatus("saved");
    } catch {
      setStudent(previous);
      setStageStatus("error");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-4xl" aria-hidden="true">
          {student.avatarEmoji}
        </span>
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">{student.name}</h1>
          <p className="text-slate-500">
            {age !== null ? `${age} años` : "Edad desconocida"} · {stage}
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
          <div>
            <dt className="text-slate-500">
              <label htmlFor="stage">Curso</label>
            </dt>
            <dd className="mt-1 flex items-center gap-2">
              <select
                id="stage"
                value={student.stage}
                disabled={stageStatus === "saving"}
                onChange={(e) => changeStage(e.target.value as Stage)}
                className="rounded-xl border-2 border-slate-200 p-2 text-sm focus:border-primary focus:outline-none disabled:opacity-60"
              >
                {stageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {stageStatus === "saving" && <span className="text-xs text-slate-400">Guardando…</span>}
              {stageStatus === "saved" && <span className="text-xs text-emerald-600">Guardado</span>}
            </dd>
          </div>
        </dl>

        {stageStatus === "error" && (
          <p role="alert" className="mt-3 text-sm text-rose-600">
            No se ha podido guardar el curso. Inténtalo de nuevo.
          </p>
        )}

        {stageMismatch && age !== null && (
          <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
            Con {age} años lo normal sería <strong>{stageLabel(suggestedStage(age))}</strong>.
            Puedes dejar este curso si repite o si trabaja en otro nivel.
          </p>
        )}
      </Card>

      <StudentProgress studentId={student.uid} />
    </div>
  );
}
