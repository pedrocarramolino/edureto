import Link from "next/link";
import { subjects } from "@/data/subjects";
import { activities } from "@/data/activities";
import { WorldBadge } from "@/components/ui/WorldBadge";
import { Logo } from "@/components/ui/Logo";
import { Chalkboard } from "@/components/ui/Chalkboard";
import { PlayfulBackground } from "@/components/ui/PlayfulBackground";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <PlayfulBackground />
      <div className="space-y-4">
        <Logo size="xl" withWordmark={false} className="justify-center" />
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Refuerzo escolar con retos y juegos
        </p>
        <h1 className="sr-only">EduReto</h1>
        <p className="mx-auto max-w-xl text-slate-600">
          Una plataforma para aprender y repasar cualquier asignatura, con actividades adaptadas
          a cada alumno y un panel para que la profesora organice el refuerzo.
        </p>
      </div>

      <Link
        href="/login"
        className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-indigo-700"
      >
        Iniciar sesión
      </Link>

      <Chalkboard title="Un mundo por asignatura" className="w-full text-left">
        Cada asignatura tiene su propio mundo, con retos y juegos pensados para su nivel.
      </Chalkboard>

      <div className="grid w-full gap-3 sm:grid-cols-3">
        {subjects
          .filter((subject) => activities.some((a) => a.subjectId === subject.id))
          .slice(0, 6)
          .map((subject) => (
            <div
              key={subject.id}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left"
            >
              <WorldBadge subject={subject} size="sm" />
              <div>
                <p className="font-heading font-semibold text-slate-800">{subject.worldName}</p>
                <p className="text-xs text-slate-500">{subject.name}</p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
