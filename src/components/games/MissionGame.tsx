"use client";

import { useState } from "react";
import type { ActivityResult, MissionActivity, MultipleChoiceActivity } from "@/types";
import { getActivity } from "@/data/activities";
import { shuffle } from "@/lib/shuffle";
import { Button } from "@/components/ui/Button";
import { ActivityPlayer } from "@/components/games/ActivityPlayer";
import { PenaltyGame } from "@/components/games/modes/PenaltyGame";
import { QuizShowGame } from "@/components/games/modes/QuizShowGame";
import { PacmanGame } from "@/components/games/modes/PacmanGame";
import { BalloonGame } from "@/components/games/modes/BalloonGame";
import { RaceGame } from "@/components/games/modes/RaceGame";
import { PairsGame } from "@/components/games/modes/PairsGame";

type Mode = "preguntas" | "globos" | "parejas" | "penaltis" | "carrera" | "comecocos" | "concurso";

const modeCards: { id: Mode; emoji: string; label: string; hint: string; arcade: boolean }[] = [
  { id: "preguntas", emoji: "📝", label: "Preguntas", hint: "Una detrás de otra", arcade: false },
  { id: "globos", emoji: "🎈", label: "Globos", hint: "Explota el correcto", arcade: true },
  { id: "parejas", emoji: "🃏", label: "Parejas", hint: "Une pregunta y respuesta", arcade: true },
  { id: "penaltis", emoji: "⚽", label: "Penaltis", hint: "Chuta a la esquina", arcade: true },
  { id: "carrera", emoji: "🏃", label: "Carrera", hint: "Corre contra el rival", arcade: true },
  { id: "comecocos", emoji: "👾", label: "Comecocos", hint: "Cómete la respuesta", arcade: true },
  { id: "concurso", emoji: "🎬", label: "Concurso", hint: "Con comodines", arcade: true },
];

/** Younger children get the playful modes first; ESO gets the quiz ones. */
function orderedModes(stage: string) {
  const primaria = stage !== "eso";
  return [...modeCards].sort((a, b) => {
    const rank = (m: (typeof modeCards)[number]) =>
      primaria ? (m.id === "preguntas" ? 9 : 0) : m.id === "globos" || m.id === "comecocos" ? 9 : 0;
    return rank(a) - rank(b);
  });
}

/**
 * Los temas de un curso salen del "topic" de cada pregunta. Mientras una
 * asignatura no tenga las preguntas repartidas por temas, todas comparten el
 * del curso y aquí sale un único grupo: entonces no se pregunta nada y se
 * juega el curso entero, como antes.
 */
function temasDe(activity: MissionActivity) {
  const grupos = new Map<string, MissionActivity["steps"]>();
  for (const step of activity.steps) {
    const tema = getActivity(step.activityId)?.topic ?? activity.topic;
    grupos.set(tema, [...(grupos.get(tema) ?? []), step]);
  }
  return grupos;
}

/** The arcade modes need every step to be a question with options. */
function questionsOf(steps: MissionActivity["steps"]): MultipleChoiceActivity[] {
  const activities = steps
    .map((step) => getActivity(step.activityId))
    .filter((a): a is MultipleChoiceActivity => a?.type === "multiple_choice");
  return activities.length === steps.length ? activities : [];
}

export function MissionGame({
  activity,
  onComplete,
  onlyQuestions = false,
}: {
  activity: MissionActivity;
  onComplete: (result: ActivityResult) => void;
  /** Sin elegir cómo jugar: la prueba de nivel se hace a secas, con preguntas. */
  onlyQuestions?: boolean;
}) {
  const temas = temasDe(activity);
  const porTemas = temas.size > 1 && !onlyQuestions;
  // Sin temas que elegir se entra directamente al curso entero.
  const [tema, setTema] = useState<string | null>(porTemas ? null : "todo");
  const pasosDelTema = tema && tema !== "todo" ? (temas.get(tema) ?? activity.steps) : activity.steps;

  const [steps, setSteps] = useState(() =>
    onlyQuestions ? shuffle(activity.steps) : activity.steps,
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [results, setResults] = useState<ActivityResult[]>([]);
  const [mode, setMode] = useState<Mode | null>(onlyQuestions ? "preguntas" : null);
  const [questions, setQuestions] = useState<MultipleChoiceActivity[]>([]);

  const currentStep = steps[stepIndex];
  const stepActivity = currentStep ? getActivity(currentStep.activityId) : undefined;
  const finished = stepIndex >= steps.length;

  function handleStepComplete(result: ActivityResult) {
    setResults((prev) => [...prev, result]);
    setStepIndex((prev) => prev + 1);
  }

  const stepsCorrect = results.filter((r) => r.correct).length;

  function start(nextMode: Mode) {
    setSteps(shuffle(pasosDelTema));
    setQuestions(shuffle(questionsOf(pasosDelTema)));
    setMode(nextMode);
  }

  if (tema === null) {
    return (
      <div className="space-y-5 text-center">
        <p className="font-display text-lg font-semibold text-slate-800">{activity.narrative}</p>
        <div>
          <p className="mb-3 font-display text-sm font-bold uppercase text-slate-400">
            ¿Qué quieres repasar?
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[...temas.entries()].map(([nombre, pasos]) => (
              <button
                key={nombre}
                onClick={() => setTema(nombre)}
                className="cursor-pointer rounded-clay border-[3px] border-slate-200 bg-white p-4 text-left shadow-clay-sm transition-all hover:border-accent hover:bg-accent-soft active:translate-y-[3px] active:shadow-clay-pressed"
              >
                <p className="font-display font-bold text-slate-800">{nombre}</p>
                <p className="text-xs text-slate-500">
                  {pasos.length} {pasos.length === 1 ? "pregunta" : "preguntas"}
                </p>
              </button>
            ))}
          </div>
          <button
            onClick={() => setTema("todo")}
            className="mt-3 cursor-pointer rounded-clay border-[3px] border-dashed border-slate-300 px-5 py-3 font-display font-bold text-slate-600 transition-colors hover:border-accent hover:text-accent"
          >
            Todo el curso · {activity.steps.length} preguntas
          </button>
        </div>
      </div>
    );
  }

  if (mode === null) {
    const arcadeAvailable = questionsOf(pasosDelTema).length > 0;
    return (
      <div className="space-y-5 text-center">
        <p className="font-display text-lg font-semibold text-slate-800">
          {tema === "todo" ? activity.narrative : tema}
        </p>
        <p className="text-sm text-slate-500">
          {pasosDelTema.length} {pasosDelTema.length === 1 ? "reto" : "retos"} por completar
          {porTemas && (
            <button
              onClick={() => setTema(null)}
              className="ml-2 cursor-pointer font-semibold text-primary hover:underline"
            >
              cambiar de tema
            </button>
          )}
        </p>

        <div>
          <p className="mb-3 font-display text-sm font-bold uppercase text-slate-400">
            ¿Cómo quieres jugar?
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {orderedModes(activity.stage)
              .filter((card) => !card.arcade || arcadeAvailable)
              .map((card) => (
                <button
                  key={card.id}
                  onClick={() => start(card.id)}
                  className="cursor-pointer rounded-clay border-[3px] border-slate-200 bg-white p-3 shadow-clay-sm transition-all hover:border-accent hover:bg-accent-soft active:translate-y-[3px] active:shadow-clay-pressed"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <p className="font-display font-bold text-slate-800">{card.label}</p>
                  <p className="text-xs text-slate-500">{card.hint}</p>
                </button>
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (mode === "globos") {
    return <BalloonGame questions={questions} onComplete={onComplete} />;
  }

  if (mode === "parejas") {
    return <PairsGame questions={questions} onComplete={onComplete} />;
  }

  if (mode === "carrera") {
    return <RaceGame questions={questions} onComplete={onComplete} />;
  }

  if (mode === "penaltis") {
    return <PenaltyGame questions={questions} onComplete={onComplete} />;
  }

  if (mode === "concurso") {
    return <QuizShowGame questions={questions} onComplete={onComplete} />;
  }

  if (mode === "comecocos") {
    return <PacmanGame questions={questions} onComplete={onComplete} />;
  }

  if (finished) {
    const allCorrect = stepsCorrect === results.length;
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {activity.badge.split(" ")[0]}
        </p>
        <p className="font-display text-lg font-bold text-slate-800">
          {allCorrect ? "¡Misión completada!" : "Misión terminada"}
        </p>
        <p className="text-sm text-slate-500">
          {stepsCorrect} de {results.length} retos correctos
        </p>
        <Button
          variant="clay"
          onClick={() =>
            onComplete({
              correct: allCorrect,
              correctCount: results.reduce((sum, r) => sum + r.correctCount, 0),
              totalCount: results.reduce((sum, r) => sum + r.totalCount, 0),
            })
          }
        >
          Continuar
        </Button>
      </div>
    );
  }

  if (!stepActivity) {
    return <p className="text-sm text-rose-600">No se encontró el reto de este paso.</p>;
  }

  return (
    <div className="space-y-4">
      {/* Only the step number: a step's label is often the answer itself. */}
      <p className="text-xs font-semibold uppercase text-slate-500">
        Paso {stepIndex + 1} de {steps.length}
      </p>
      <ActivityPlayer key={currentStep.id} activity={stepActivity} onComplete={handleStepComplete} />
    </div>
  );
}
