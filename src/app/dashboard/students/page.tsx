import Link from "next/link";
import { students } from "@/data/students";
import { challengesForStudent } from "@/data/challenges";
import { Card } from "@/components/ui/Card";

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-slate-900">Mis alumnos</h1>
        <p className="text-slate-500">Gestiona el nivel y los retos de cada alumno.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => {
          const pending = challengesForStudent(student.id).filter((c) => c.status !== "completado").length;
          return (
            <Link key={student.id} href={`/dashboard/students/${student.id}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{student.avatarEmoji}</span>
                  <div>
                    <p className="font-semibold text-slate-800">{student.name}</p>
                    <p className="text-sm text-slate-500">{student.age} años</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-slate-500">{pending} retos pendientes</span>
                  <span className="font-medium text-primary">{student.points} pts</span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
