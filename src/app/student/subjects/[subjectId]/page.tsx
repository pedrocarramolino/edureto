"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubject } from "@/data/subjects";
import { activitiesBySubject, getPlacementTest } from "@/data/activities";
import { useAuth } from "@/lib/auth/AuthProvider";
import { hasTakenPlacementTest, markPlacementTestTaken } from "@/lib/placementTests";
import { recordAttempt } from "@/lib/attempts";
import type { ActivityResult } from "@/types";
import { Card } from "@/components/ui/Card";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { Chalkboard } from "@/components/ui/Chalkboard";
import { Button } from "@/components/ui/Button";
import { ActivityPlayer } from "@/components/games/ActivityPlayer";

const typeLabels: Record<string, string> = {
  multiple_choice: "Opción múltiple",
  drag_drop: "Arrastra y coloca",
  build_answer: "Construye la respuesta",
  mission: "Misión",
  open_response: "Respuesta abierta",
};

type PlacementStatus = "checking" | "needed" | "resolved";

export default function SubjectWorldPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const { subjectId } = use(params);
  const subject = getSubject(subjectId);
  const { user } = useAuth();
  const placementTest = subject ? getPlacementTest(subject.id) : null;
  const [placementStatus, setPlacementStatus] = useState<PlacementStatus>(
    placementTest ? "checking" : "resolved",
  );
  const [testResult, setTestResult] = useState<ActivityResult | null>(null);

  useEffect(() => {
    if (!subject || !user || !placementTest) return;
    hasTakenPlacementTest(user.uid, subject.id).then((taken) => {
      setPlacementStatus(taken ? "resolved" : "needed");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject?.id, user?.uid]);

  if (!subject) notFound();

  const subjectActivities = activitiesBySubject(subject.id);

  if (placementStatus === "checking") {
    return <p className="text-sm text-slate-500">Cargando…</p>;
  }

  if (placementStatus === "needed" && placementTest) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center gap-4">
          <WorldBadge subject={subject} size="lg" />
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">{subject.worldName}</h1>
            <p className="text-slate-500">Primera vez aquí — vamos a ver por dónde vas.</p>
          </div>
        </div>

        {!testResult && (
          <Chalkboard title="Prueba de nivel">
            {placementTest.narrative} Son {placementTest.steps.length} preguntas rápidas y no
            cuentan como un reto fallado.
          </Chalkboard>
        )}

        <div className="rounded-clay border-[3px] border-black/5 bg-white p-6 shadow-clay-sm">
          {testResult ? (
            <div className="space-y-4 text-center">
              <p className="text-5xl" aria-hidden="true">
                🎯
              </p>
              <p className="font-display text-lg font-bold text-slate-800">¡Prueba completada!</p>
              <p className="text-sm text-slate-500">
                {testResult.correctCount} de {testResult.totalCount} respuestas correctas. Tu
                profesora ya la puede ver.
              </p>
              <Button variant="clay" onClick={() => setPlacementStatus("resolved")}>
                Ver el mundo de {subject.worldName}
              </Button>
            </div>
          ) : (
            <ActivityPlayer
              activity={placementTest}
              onComplete={async (result) => {
                setTestResult(result);
                if (!user) return;
                try {
                  await recordAttempt({
                    studentId: user.uid,
                    activity: placementTest,
                    result,
                    isPlacementTest: true,
                  });
                  await markPlacementTestTaken(user.uid, subject.id);
                } catch (error) {
                  // Not fatal: worst case, the placement test shows again next visit.
                  console.warn("No se ha podido guardar la prueba de nivel", error);
                }
              }}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <WorldBadge subject={subject} size="lg" />
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">{subject.worldName}</h1>
          <p className="text-slate-500">{subject.description}</p>
        </div>
      </div>

      <Chalkboard title="Juegos organizados por temas">
        Elige un tema para practicar — iremos añadiendo más actividades en cada uno.
      </Chalkboard>

      <div className="flex flex-wrap gap-2">
        {subject.topics.map((topic) => {
          const count = subjectActivities.filter((a) => a.topic === topic).length;
          return (
            <span
              key={topic}
              className="rounded-full border-2 px-4 py-2 text-sm font-semibold"
              style={
                count > 0
                  ? { borderColor: subject.color, color: subject.color, backgroundColor: `${subject.color}14` }
                  : { borderColor: "#e2e8f0", color: "#94a3b8" }
              }
            >
              {topic}
              {count === 0 && <span className="ml-1 font-normal">· próximamente</span>}
            </span>
          );
        })}
      </div>

      {subjectActivities.length === 0 ? (
        <p className="text-sm text-slate-500">Todavía no hay actividades en este mundo.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjectActivities.map((activity) => (
            <Link key={activity.id} href={`/student/play/${activity.id}`}>
              <Card
                variant="clay"
                className="h-full border-t-4 hover:shadow-clay"
                style={{ borderTopColor: subject.color }}
              >
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                  {typeLabels[activity.type]}
                </span>
                <p className="mt-3 font-display font-bold text-slate-800">{activity.title}</p>
                <p className="text-sm text-slate-500">{activity.topic}</p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
