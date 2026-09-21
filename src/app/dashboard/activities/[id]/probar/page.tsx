import Link from "next/link";
import { notFound } from "next/navigation";
import { getActivity } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { PlayScreen } from "@/components/games/PlayScreen";
import { WorldBadge } from "@/components/ui/WorldBadge";

export default async function TryActivityPage({
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
    <div className="mx-auto max-w-2xl space-y-6">
      <Link
        href={`/dashboard/activities/${activity.id}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        ← Volver a la actividad
      </Link>

      <div className="flex items-center gap-3">
        <WorldBadge subject={subject} size="md" />
        <div>
          <h1 className="font-heading text-xl font-bold text-slate-900">{activity.title}</h1>
          <p className="text-sm text-slate-500">
            {subject.name} · {activity.topic}
          </p>
        </div>
      </div>

      <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
        Estás viendo el juego tal y como lo ve un alumno. Es una vista previa: no se guarda
        ninguna partida.
      </p>

      <div className="rounded-clay border-[3px] border-black/5 bg-white p-6 font-playful shadow-clay-sm">
        <PlayScreen activity={activity} preview />
      </div>
    </div>
  );
}
