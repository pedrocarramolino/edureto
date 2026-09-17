import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubject } from "@/data/subjects";
import { activitiesBySubject } from "@/data/activities";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";

const typeLabels: Record<string, string> = {
  multiple_choice: "Opción múltiple",
  drag_drop: "Arrastra y coloca",
  build_answer: "Construye la respuesta",
  mission: "Misión",
  open_response: "Respuesta abierta",
};

export default async function SubjectWorldPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const { subjectId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();

  const subjectActivities = activitiesBySubject(subject.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <WorldBadge subject={subject} size="lg" />
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">{subject.worldName}</h1>
          <p className="text-slate-500">{subject.description}</p>
        </div>
      </div>

      {subjectActivities.length === 0 ? (
        <p className="text-sm text-slate-500">Todavía no hay actividades en este mundo.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjectActivities.map((activity) => (
            <Link key={activity.id} href={`/student/play/${activity.id}`}>
              <Card variant="clay" className="h-full hover:shadow-clay">
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                  {typeLabels[activity.type]}
                </span>
                <p className="mt-3 font-display font-bold text-slate-800">{activity.title}</p>
                <p className="text-sm text-slate-500">{activity.topic}</p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
