"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { subjects as allSubjects, subjectsForStage } from "@/data/subjects";
import { activitiesBySubject } from "@/data/activities";
import { useAuth } from "@/lib/auth/AuthProvider";
import { getStudentProfile } from "@/lib/students";
import type { Stage, Subject } from "@/types";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { Chalkboard } from "@/components/ui/Chalkboard";

function SubjectCard({ subject, count }: { subject: Subject; count: number }) {
  return (
    <Link href={`/student/subjects/${subject.id}`}>
      <div
        className={`flex h-full flex-col justify-between rounded-clay border-[3px] border-black/10 p-5 text-white shadow-clay transition-transform hover:-translate-y-1 ${
          count === 0 ? "opacity-70" : ""
        }`}
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
            ? "Próximamente"
            : count === 1
              ? "1 actividad disponible"
              : `${count} actividades disponibles`}
        </p>
      </div>
    </Link>
  );
}

export default function SubjectsPage() {
  const { user } = useAuth();
  const [stage, setStage] = useState<Stage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getStudentProfile(user.uid)
      .then((profile) => setStage(profile?.stage ?? null))
      .catch(() => {
        // Without the profile we simply show every subject.
      })
      .finally(() => setLoading(false));
  }, [user]);

  // Until we know the course, show everything rather than the wrong list.
  const visible = stage ? subjectsForStage(stage) : allSubjects;
  const withCount = visible.map((subject) => ({
    subject,
    count: activitiesBySubject(subject.id).length,
  }));
  const ready = withCount.filter((item) => item.count > 0);
  const soon = withCount.filter((item) => item.count === 0);

  return (
    <div className="space-y-6">
      <Chalkboard level="h1" title="Mis asignaturas">
        Elige un mundo para empezar a jugar.
      </Chalkboard>

      {loading ? (
        <p className="text-sm text-slate-500">Cargando tus asignaturas…</p>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ready.map(({ subject, count }) => (
              <SubjectCard key={subject.id} subject={subject} count={count} />
            ))}
          </div>

          {soon.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-lg font-bold text-slate-700">Próximamente</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {soon.map(({ subject, count }) => (
                  <SubjectCard key={subject.id} subject={subject} count={count} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
