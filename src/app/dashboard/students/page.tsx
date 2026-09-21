"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listStudents, calculateAge, type StudentProfile } from "@/lib/students";
import { stageLabel } from "@/data/stages";
import { Card } from "@/components/ui/Card";
import { Chalkboard } from "@/components/ui/Chalkboard";

export default function StudentsPage() {
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    listStudents()
      .then(setStudents)
      .catch(() => setError("No se han podido cargar los alumnos. Inténtalo de nuevo más tarde."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <Chalkboard level="h1" title="Mis alumnos">
        Alumnos registrados en EduReto.
      </Chalkboard>

      {loading ? (
        <p className="text-sm text-slate-500">Cargando alumnos…</p>
      ) : error ? (
        <p className="text-sm text-rose-600">{error}</p>
      ) : students.length === 0 ? (
        <Card>
          <p className="text-sm text-slate-500">
            Todavía no hay alumnos registrados. Cuando alguien cree una cuenta desde{" "}
            <span className="font-medium text-slate-700">/register</span>, aparecerá aquí.
          </p>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => {
            const age = calculateAge(student.birthDate);
            return (
              <Link key={student.uid} href={`/dashboard/students/${student.uid}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {student.avatarEmoji}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800">{student.name}</p>
                      <p className="text-sm text-slate-500">{age !== null ? `${age} años` : "Edad desconocida"}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">{stageLabel(student.stage)}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
