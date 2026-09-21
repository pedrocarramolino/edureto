import Link from "next/link";
import { notFound } from "next/navigation";
import { getActivity } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { ActivityAnswerKey } from "@/components/games/ActivityAnswerKey";

const typeLabels: Record<string, string> = {
  multiple_choice: "Opción múltiple",
  drag_drop: "Arrastra y coloca",
  build_answer: "Construye la respuesta",
  mission: "Misión",
  open_response: "Respuesta abierta",
};

export default async function ActivityReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const activity = getActivity(id);
  if (!activity) notFound();

  const subject = getSubject(activity.subjectId);
  if (!subject) notFound();

  return (
    <div className="space-y-6">
      <Link href="/dashboard/activities" className="text-sm font-medium text-primary hover:underline">
        ← Volver a la biblioteca
      </Link>

      <div className="flex items-center gap-4">
        <WorldBadge subject={subject} size="lg" />
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">{activity.title}</h1>
          <p className="text-slate-500">
            {subject.name} · {activity.topic} · {typeLabels[activity.type]}
          </p>
        </div>
        <Link
          href={`/dashboard/activities/${activity.id}/probar`}
          className="ml-auto rounded-xl border-2 border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Probar el juego
        </Link>
      </div>

      <Card className="border-t-4" style={{ borderTopColor: subject.color }}>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">
          Preguntas y respuestas correctas
        </h2>
        <ActivityAnswerKey activity={activity} />
      </Card>
    </div>
  );
}
