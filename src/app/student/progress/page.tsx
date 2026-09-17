import { students } from "@/data/students";
import { getSubject } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { WorldBadge } from "@/components/ui/WorldBadge";

const statusValue = { necesita_practicar: 25, en_progreso: 60, consolidado: 100 } as const;

export default function ProgressPage() {
  const student = students[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Mi progreso</h1>
        <p className="text-slate-500">Así vas en cada asignatura.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {student.skills.map((skill) => {
          const subject = getSubject(skill.subjectId);
          if (!subject) return null;
          return (
            <Card key={skill.id} variant="clay">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <WorldBadge subject={subject} size="sm" />
                  <p className="font-semibold text-slate-800">{skill.name}</p>
                </div>
                <StatusBadge status={skill.status} />
              </div>
              <ProgressBar value={statusValue[skill.status]} color={subject.color} />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
