import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudent } from "@/data/students";
import { challengesForStudent } from "@/data/challenges";
import { getActivity } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = getStudent(id);
  if (!student) notFound();

  const challenges = challengesForStudent(student.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-4xl">{student.avatarEmoji}</span>
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">{student.name}</h1>
          <p className="text-slate-500">
            {student.age} años · {student.streakDays} días de racha · {student.points} puntos
          </p>
        </div>
        <Link
          href="/dashboard/activities"
          className="ml-auto rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-indigo-700"
        >
          Asignar actividad
        </Link>
      </div>

      <Card>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">Habilidades</h2>
        <div className="space-y-3">
          {student.skills.map((skill) => {
            const subject = getSubject(skill.subjectId);
            return (
              <div key={skill.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <span>{subject?.emoji}</span>
                  <span className="text-slate-500">{subject?.name}</span>
                  <span className="font-medium text-slate-800">{skill.name}</span>
                </div>
                <StatusBadge status={skill.status} />
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">Retos asignados</h2>
        <div className="space-y-2">
          {challenges.map((challenge) => {
            const activity = getActivity(challenge.activityId);
            if (!activity) return null;
            return (
              <div
                key={challenge.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
              >
                <div>
                  <p className="font-medium text-slate-800">{activity.title}</p>
                  <p className="text-xs text-slate-500">
                    Asignado por {challenge.assignedBy === "profesora" ? "ti" : "el sistema"}
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">
                  {challenge.status.replace("_", " ")}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
