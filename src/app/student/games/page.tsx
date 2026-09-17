import Link from "next/link";
import { activities } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";

export default function GamesZonePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Zona de juegos</h1>
        <p className="text-slate-500">Juega sin presión, no cuenta para tus retos.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => {
          const subject = getSubject(activity.subjectId);
          if (!subject) return null;
          return (
            <Link key={activity.id} href={`/student/play/${activity.id}`}>
              <Card variant="clay" className="h-full text-center hover:shadow-clay">
                <div className="flex justify-center">
                  <WorldBadge subject={subject} size="md" />
                </div>
                <p className="mt-2 font-display font-bold text-slate-800">{activity.title}</p>
                <p className="text-sm text-slate-500">{subject.worldName}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
