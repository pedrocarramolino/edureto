import Link from "next/link";
import { Flame, Star, ArrowRight } from "@phosphor-icons/react/ssr";
import { students } from "@/data/students";
import { challengesForStudent } from "@/data/challenges";
import { getActivity } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";

export default function StudentHome() {
  const student = students[0];
  const challenges = challengesForStudent(student.id).filter((c) => c.status !== "completado");

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <span className="text-5xl" aria-hidden="true">
          {student.avatarEmoji}
        </span>
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">¡Hola, {student.name}!</h1>
          <p className="flex items-center gap-3 text-slate-500">
            <span className="flex items-center gap-1">
              <Flame size={18} weight="fill" className="text-accent" />
              {student.streakDays} días de racha
            </span>
            <span className="flex items-center gap-1">
              <Star size={18} weight="fill" className="text-amber-400" />
              {student.points} puntos
            </span>
          </p>
        </div>
      </div>

      <Card variant="clay">
        <h2 className="mb-4 font-display text-lg font-bold text-slate-800">Mis retos</h2>
        {challenges.length === 0 ? (
          <p className="text-sm text-slate-500">No tienes retos pendientes. ¡Explora la zona de juegos!</p>
        ) : (
          <div className="space-y-3">
            {challenges.map((challenge) => {
              const activity = getActivity(challenge.activityId);
              if (!activity) return null;
              const subject = getSubject(activity.subjectId);
              if (!subject) return null;
              return (
                <Link
                  key={challenge.id}
                  href={`/student/play/${activity.id}`}
                  className="flex items-center justify-between rounded-2xl border-2 border-slate-100 p-3 transition-colors hover:border-primary-soft hover:bg-primary-soft/40"
                >
                  <div className="flex items-center gap-3">
                    <WorldBadge subject={subject} size="sm" />
                    <div>
                      <p className="font-semibold text-slate-800">{activity.title}</p>
                      <p className="text-xs text-slate-500">{subject.worldName}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                    Jugar <ArrowRight size={16} weight="bold" />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/student/subjects">
          <Card variant="clay" className="h-full hover:shadow-clay">
            <p className="font-display font-bold text-slate-800">📚 Mis asignaturas</p>
            <p className="text-sm text-slate-500">Explora cada mundo y sus temas.</p>
          </Card>
        </Link>
        <Link href="/student/games">
          <Card variant="clay" className="h-full hover:shadow-clay">
            <p className="font-display font-bold text-slate-800">🎮 Zona de juegos</p>
            <p className="text-sm text-slate-500">Juega sin presión, a tu ritmo.</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
