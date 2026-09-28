import { notFound } from "next/navigation";
import { getActivity } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { PlayScreen } from "@/components/games/PlayScreen";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { MarcoDeJuego } from "@/components/games/MarcoDeJuego";

export default async function PlayActivityPage({
  params,
}: {
  params: Promise<{ activityId: string }>;
}) {
  const { activityId } = await params;
  const activity = getActivity(activityId);
  if (!activity) notFound();

  const subject = getSubject(activity.subjectId);
  if (!subject) notFound();

  return (
    <MarcoDeJuego
      cabecera={
        <div className="flex items-center gap-3">
          <WorldBadge subject={subject} size="md" />
          <div className="min-w-0">
            <h1 className="font-display text-xl font-bold text-slate-900 short:text-lg">
              {activity.title}
            </h1>
            <p className="text-sm text-slate-500 short:hidden">
              {subject.worldName} · {activity.topic}
            </p>
          </div>
        </div>
      }
    >
      <PlayScreen activity={activity} />
    </MarcoDeJuego>
  );
}
