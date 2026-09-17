"use client";

import { useState } from "react";
import Link from "next/link";
import { activities } from "@/data/activities";
import { subjects, getSubject } from "@/data/subjects";
import type { SubjectId } from "@/types";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";

const typeLabels: Record<string, string> = {
  multiple_choice: "Opción múltiple",
  drag_drop: "Arrastra y coloca",
  build_answer: "Construye la respuesta",
  mission: "Misión",
  open_response: "Respuesta abierta",
};

export default function ActivitiesLibraryPage() {
  const [filter, setFilter] = useState<SubjectId | "all">("all");
  const visibleActivities = activities.filter((a) => filter === "all" || a.subjectId === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">Biblioteca de actividades</h1>
          <p className="text-slate-500">Reutiliza o crea actividades para tus alumnos.</p>
        </div>
        <Link
          href="/dashboard/activities/new"
          className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-indigo-700"
        >
          + Nueva actividad
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
            filter === "all" ? "border-slate-800 bg-slate-800 text-white" : "border-slate-200 text-slate-600"
          }`}
        >
          Todas
        </button>
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setFilter(subject.id)}
            className="cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors"
            style={
              filter === subject.id
                ? { borderColor: subject.color, backgroundColor: subject.color, color: "white" }
                : { borderColor: "#e2e8f0", color: "#475569" }
            }
          >
            {subject.emoji} {subject.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleActivities.map((activity) => {
          const subject = getSubject(activity.subjectId);
          if (!subject) return null;
          return (
            <Link key={activity.id} href={`/dashboard/activities/${activity.id}`}>
              <Card className="h-full border-t-4 transition-shadow hover:shadow-md" style={{ borderTopColor: subject.color }}>
                <div className="flex items-start justify-between">
                  <WorldBadge subject={subject} size="sm" />
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                    {typeLabels[activity.type]}
                  </span>
                </div>
                <p className="mt-3 font-semibold text-slate-800">{activity.title}</p>
                <p className="text-sm text-slate-500">
                  {subject.name} · {activity.topic}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Dificultad {activity.difficulty}/3</span>
                  <span className="text-sm font-medium text-primary">Ver preguntas →</span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
