import Link from "next/link";
import { activities } from "@/data/activities";
import { getSubject } from "@/data/subjects";
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => {
          const subject = getSubject(activity.subjectId);
          if (!subject) return null;
          return (
            <Card key={activity.id}>
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
                <Link
                  href={`/student/play/${activity.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Previsualizar →
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
