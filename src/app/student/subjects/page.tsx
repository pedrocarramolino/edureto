import Link from "next/link";
import { subjects } from "@/data/subjects";
import { activitiesBySubject } from "@/data/activities";
import { WorldBadge } from "@/components/ui/WorldBadge";

export default function SubjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Mis asignaturas</h1>
        <p className="text-slate-500">Elige un mundo para empezar a jugar.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const count = activitiesBySubject(subject.id).length;
          return (
            <Link key={subject.id} href={`/student/subjects/${subject.id}`}>
              <div
                className="flex h-full flex-col justify-between rounded-clay border-[3px] border-black/10 p-5 text-white shadow-clay transition-transform hover:-translate-y-1"
                style={{ backgroundColor: subject.color }}
              >
                <div className="flex items-center gap-3">
                  <WorldBadge subject={subject} size="md" onColor />
                  <div>
                    <p className="font-display text-lg font-bold">{subject.worldName}</p>
                    <p className="text-sm opacity-90">{subject.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs opacity-80">
                  {count === 0
                    ? "Sin actividades todavía"
                    : count === 1
                      ? "1 actividad disponible"
                      : `${count} actividades disponibles`}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
