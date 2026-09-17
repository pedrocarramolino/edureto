"use client";

import { useState } from "react";
import Link from "next/link";
import { subjects } from "@/data/subjects";
import type { SubjectId } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const activityTypes = [
  { value: "multiple_choice", label: "Opción múltiple" },
  { value: "drag_drop", label: "Arrastra y coloca" },
  { value: "build_answer", label: "Construye la respuesta" },
  { value: "mission", label: "Misión" },
  { value: "open_response", label: "Respuesta abierta" },
];

export default function NewActivityPage() {
  const [subjectId, setSubjectId] = useState<SubjectId>(subjects[0].id);
  const [type, setType] = useState(activityTypes[0].value);
  const [topic, setTopic] = useState("");
  const [instructions, setInstructions] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/dashboard/activities" className="text-sm text-primary hover:underline">
          ← Volver a la biblioteca
        </Link>
        <h1 className="mt-2 font-heading text-2xl font-bold text-slate-900">Nueva actividad</h1>
        <p className="text-slate-500">
          Describe qué quieres trabajar y genera una actividad adaptada. Más adelante esto se
          conectará con un generador por IA que propondrá el contenido automáticamente.
        </p>
      </div>

      {submitted ? (
        <Card>
          <p className="font-medium text-emerald-700">
            Actividad guardada como borrador (pendiente de conectar con la base de datos).
          </p>
          <Link href="/dashboard/activities" className="mt-3 inline-block text-sm text-primary hover:underline">
            Volver a la biblioteca
          </Link>
        </Card>
      ) : (
        <Card
          className="space-y-4"
        >
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Asignatura</label>
              <select
                value={subjectId}
                onChange={(e) => setSubjectId(e.target.value as SubjectId)}
                className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.emoji} {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Tipo de actividad</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm"
              >
                {activityTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Tema</label>
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ej: Multiplicaciones de una cifra"
                className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Instrucciones para generar el contenido
              </label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                rows={4}
                placeholder="Ej: 10 preguntas de comprensión lectora para un alumno de 9 años con dificultades para identificar la idea principal"
                className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm"
              />
            </div>

            <Button type="submit" disabled={topic.trim().length === 0}>
              Guardar actividad
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}
