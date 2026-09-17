import Link from "next/link";
import { subjects } from "@/data/subjects";
import { WorldBadge } from "@/components/ui/WorldBadge";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Refuerzo escolar con retos y juegos
        </p>
        <h1 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">EduReto</h1>
        <p className="mx-auto max-w-xl text-slate-600">
          Una plataforma para aprender y repasar cualquier asignatura, con actividades adaptadas
          a cada alumno y un panel para que la profesora organice el refuerzo.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/dashboard"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-indigo-700"
        >
          Entrar como profesora
        </Link>
        <Link
          href="/student"
          className="rounded-clay border-[3px] border-slate-200 bg-white px-6 py-3 font-display text-sm font-semibold text-slate-700 shadow-clay-sm transition-colors hover:bg-slate-50"
        >
          Entrar como alumno
        </Link>
      </div>

      <div className="grid w-full gap-3 sm:grid-cols-3">
        {subjects.slice(0, 6).map((subject) => (
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
