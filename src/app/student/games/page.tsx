"use client";

import { useState } from "react";
import Link from "next/link";
import { activities } from "@/data/activities";
import { getSubject } from "@/data/subjects";
import { Card } from "@/components/ui/Card";
import { FiltroAsignatura, type FiltroValor } from "@/components/ui/FiltroAsignatura";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { Chalkboard } from "@/components/ui/Chalkboard";

export default function GamesZonePage() {
  const [filter, setFilter] = useState<FiltroValor>("all");
  const visibleActivities = activities.filter((a) => filter === "all" || a.subjectId === filter);

  return (
    <div className="space-y-6">
      <Chalkboard level="h1" title="Zona de juegos">
        Juega sin presión, no cuenta para tus retos.
      </Chalkboard>

      <FiltroAsignatura valor={filter} onCambio={setFilter} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleActivities.map((activity) => {
          const subject = getSubject(activity.subjectId);
          if (!subject) return null;
          return (
            <Link key={activity.id} href={`/student/play/${activity.id}`}>
              <Card
                variant="clay"
                className="h-full border-t-4 text-center hover:shadow-clay"
                style={{ borderTopColor: subject.color }}
              >
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
