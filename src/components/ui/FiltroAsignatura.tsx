"use client";

import { CaretDown } from "@phosphor-icons/react";
import { activities } from "@/data/activities";
import { subjects, getSubject } from "@/data/subjects";
import type { SubjectId } from "@/types";

export type FiltroValor = SubjectId | "all";

/**
 * Filtro por asignatura en una lista desplegable. Con más de veinte
 * asignaturas, una fila de botones ocupaba media pantalla en el móvil; la
 * lista del sistema, además, en una tablet o un móvil se abre como la rueda
 * de siempre, grande y fácil de tocar.
 *
 * Salen todas las asignaturas. Las que aún no tienen actividades van al final,
 * en "Próximamente", y no se pueden elegir: llevarían a una página vacía.
 */
export function FiltroAsignatura({
  valor,
  onCambio,
  estilo = "alumno",
}: {
  valor: FiltroValor;
  onCambio: (valor: FiltroValor) => void;
  estilo?: "alumno" | "profesora";
}) {
  const recuento = new Map<SubjectId, number>();
  for (const activity of activities) {
    recuento.set(activity.subjectId, (recuento.get(activity.subjectId) ?? 0) + 1);
  }
  const conActividades = subjects.filter((subject) => recuento.has(subject.id));
  const proximamente = subjects.filter((subject) => !recuento.has(subject.id));
  const elegida = valor === "all" ? null : getSubject(valor);

  return (
    <div className="w-full sm:max-w-md">
      <label htmlFor="filtro-asignatura" className="mb-1 block text-sm font-semibold text-slate-600">
        Asignatura
      </label>
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-lg"
          style={{ backgroundColor: elegida ? elegida.color : "#e2e8f0" }}
        >
          {elegida?.emoji ?? "📚"}
        </span>
        {/* text-base: con letra más pequeña, el iPhone hace zoom al abrirla. */}
        <select
          id="filtro-asignatura"
          value={valor}
          onChange={(event) => onCambio(event.target.value as FiltroValor)}
          className={`w-full cursor-pointer appearance-none truncate border-[3px] bg-white py-2.5 pl-12 pr-10 text-base font-semibold text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            estilo === "alumno" ? "rounded-clay font-display shadow-clay-sm" : "rounded-xl"
          }`}
          style={{ borderColor: elegida ? elegida.color : "#e2e8f0" }}
        >
          <option value="all">Todas las asignaturas ({activities.length})</option>
          {conActividades.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.emoji} {subject.name} ({recuento.get(subject.id)})
            </option>
          ))}
          {proximamente.length > 0 && (
            <optgroup label="Próximamente">
              {proximamente.map((subject) => (
                <option key={subject.id} value={subject.id} disabled>
                  {subject.emoji} {subject.name}
                </option>
              ))}
            </optgroup>
          )}
        </select>
        <CaretDown
          size={18}
          weight="bold"
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
    </div>
  );
}
