import { notFound } from "next/navigation";
import { getActivity } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { PlayScreen } from "@/components/games/PlayScreen";
import { WorldBadge } from "@/components/ui/WorldBadge";

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
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center gap-3">
        <WorldBadge subject={subject} size="md" />
        <div>
          <h1 className="font-display text-xl font-bold text-slate-900">{activity.title}</h1>
          <p className="text-sm text-slate-500">
            {subject.worldName} · {activity.topic}
          </p>
        </div>
      </div>

      <div className="rounded-clay border-[3px] border-black/5 bg-white p-6 shadow-clay-sm">
        <PlayScreen activity={activity} />
      </div>
    </div>
  );
}
