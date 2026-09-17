import Link from "next/link";
import { students } from "@/data/students";
import { challengesForStudent } from "@/data/challenges";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";

export default function DashboardHome() {
  const totalPending = students.reduce(
    (acc, s) => acc + challengesForStudent(s.id).filter((c) => c.status !== "completado").length,
    0,
  );
  const needsPractice = students.flatMap((s) =>
    s.skills.filter((sk) => sk.status === "necesita_practicar").map((sk) => ({ student: s, skill: sk })),
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-slate-900">Resumen</h1>
        <p className="text-slate-500">Vista rápida de tus alumnos y sus retos.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Alumnos activos</p>
          <p className="text-3xl font-bold text-slate-900">{students.length}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Retos pendientes</p>
          <p className="text-3xl font-bold text-slate-900">{totalPending}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Habilidades a reforzar</p>
          <p className="text-3xl font-bold text-slate-900">{needsPractice.length}</p>
        </Card>
      </div>

      <Card>
        <h2 className="mb-4 font-heading text-lg font-semibold text-slate-800">
          Necesitan refuerzo ahora
        </h2>
        <div className="space-y-3">
          {needsPractice.map(({ student, skill }) => (
            <Link
              key={skill.id}
              href={`/dashboard/students/${student.id}`}
              className="flex items-center justify-between rounded-xl border border-slate-100 p-3 hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{student.avatarEmoji}</span>
                <div>
                  <p className="font-medium text-slate-800">{student.name}</p>
                  <p className="text-sm text-slate-500">{skill.name}</p>
                </div>
              </div>
              <StatusBadge status={skill.status} />
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
