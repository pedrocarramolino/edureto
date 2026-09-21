"use client";

import { useState } from "react";
import Link from "next/link";
import { activities } from "@/data/activities";
import { subjects, getSubject } from "@/data/subjects";
import type { SubjectId } from "@/types";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { Chalkboard } from "@/components/ui/Chalkboard";

export default function GamesZonePage() {
  const [filter, setFilter] = useState<SubjectId | "all">("all");
  const visibleActivities = activities.filter((a) => filter === "all" || a.subjectId === filter);
  // Only subjects that already have games: a row of empty filters is noise.
  const playable = subjects.filter((subject) => activities.some((a) => a.subjectId === subject.id));

  return (
    <div className="space-y-6">
      <Chalkboard level="h1" title="Zona de juegos">
        Juega sin presión, no cuenta para tus retos.
      </Chalkboard>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`cursor-pointer rounded-clay border-[3px] px-4 py-2 font-display text-sm font-semibold transition-colors ${
            filter === "all" ? "border-slate-800 bg-slate-800 text-white" : "border-slate-200 text-slate-600"
          }`}
        >
          Todos
        </button>
        {playable.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setFilter(subject.id)}
            className="cursor-pointer rounded-clay border-[3px] px-4 py-2 font-display text-sm font-semibold transition-colors"
            style={
              filter === subject.id
                ? { borderColor: subject.color, backgroundColor: subject.color, color: "white" }
                : { borderColor: "#e2e8f0", color: "#475569" }
            }
          >
            {subject.emoji} {subject.name}
          </button>
        ))}
      </div>

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
