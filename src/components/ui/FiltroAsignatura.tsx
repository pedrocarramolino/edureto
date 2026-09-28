"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { CaretDown, Check } from "@phosphor-icons/react";
import { activities } from "@/data/activities";
import { subjects } from "@/data/subjects";
import type { SubjectId } from "@/types";

export type FiltroValor = SubjectId | "all";

interface Opcion {
  valor: FiltroValor;
  nombre: string;
  emoji: string;
  color: string;
  cuantas: number;
}

/** Sin tildes ni mayúsculas, para buscar tecleando la primera letra. */
const sinTildes = (texto: string) =>
  texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/**
 * Filtro por asignatura en una lista desplegable hecha a medida. La lista
 * del sistema no se deja decorar: en Windows salía con letra enorme y cortaba
 * los nombres largos. Esta se abre debajo del botón, con el color y el dibujo
 * de cada asignatura y cuántas actividades tiene.
 *
 * Salen todas las asignaturas. Las que aún no tienen actividades van al final,
 * en "Próximamente", y no se pueden elegir: llevarían a una página vacía.
 *
 * Se maneja también con el teclado: flechas, Inicio/Fin, Intro para elegir,
 * Escape para cerrar y una letra para saltar a la asignatura que empieza así.
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
  const id = useId();
  const [abierta, setAbierta] = useState(false);
  /** La opción marcada con el teclado o el ratón, antes de elegirla. */
  const [activa, setActiva] = useState(0);
  const raiz = useRef<HTMLDivElement>(null);
  const lista = useRef<HTMLUListElement>(null);
  const boton = useRef<HTMLButtonElement>(null);

  const recuento = new Map<SubjectId, number>();
  for (const activity of activities) {
    recuento.set(activity.subjectId, (recuento.get(activity.subjectId) ?? 0) + 1);
  }
  const elegibles: Opcion[] = [
    { valor: "all", nombre: "Todas las asignaturas", emoji: "📚", color: "#e2e8f0", cuantas: activities.length },
    ...subjects
      .filter((subject) => recuento.has(subject.id))
      .map((subject) => ({
        valor: subject.id,
        nombre: subject.name,
        emoji: subject.emoji,
        color: subject.color,
        cuantas: recuento.get(subject.id) ?? 0,
      })),
  ];
  const proximamente = subjects.filter((subject) => !recuento.has(subject.id));
  const elegida = elegibles.find((opcion) => opcion.valor === valor) ?? elegibles[0];

  // Abierta: el foco pasa a la lista y un toque fuera la cierra.
  useEffect(() => {
    if (!abierta) return;
    lista.current?.focus();
    function fuera(event: PointerEvent) {
      if (!raiz.current?.contains(event.target as Node)) setAbierta(false);
    }
    document.addEventListener("pointerdown", fuera);
    return () => document.removeEventListener("pointerdown", fuera);
  }, [abierta]);

  // La opción marcada siempre a la vista, aunque la lista haga scroll.
  useEffect(() => {
    if (abierta) document.getElementById(`${id}-${activa}`)?.scrollIntoView({ block: "nearest" });
  }, [abierta, activa, id]);

  function abrir() {
    setActiva(Math.max(0, elegibles.indexOf(elegida)));
    setAbierta(true);
  }

  function cerrar() {
    setAbierta(false);
    boton.current?.focus();
  }

  function elegir(opcion: Opcion) {
    onCambio(opcion.valor);
    cerrar();
  }

  function teclasBoton(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      abrir();
    }
  }

  function teclasLista(event: KeyboardEvent<HTMLUListElement>) {
    const ultima = elegibles.length - 1;
    const mover: Record<string, number> = {
      ArrowDown: Math.min(activa + 1, ultima),
      ArrowUp: Math.max(activa - 1, 0),
      Home: 0,
      End: ultima,
    };
    if (event.key in mover) {
      event.preventDefault();
      setActiva(mover[event.key]);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      elegir(elegibles[activa]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      cerrar();
    } else if (event.key === "Tab") {
      setAbierta(false);
    } else if (event.key.length === 1) {
      // Una letra: a la siguiente asignatura que empiece por ella.
      const letra = sinTildes(event.key);
      const orden = [...elegibles.keys()].map((i) => (activa + 1 + i) % elegibles.length);
      const encontrada = orden.find((i) => sinTildes(elegibles[i].nombre).startsWith(letra));
      if (encontrada !== undefined) setActiva(encontrada);
    }
  }

  const alumno = estilo === "alumno";

  return (
    <div ref={raiz} className="relative w-full sm:max-w-md">
      <span id={`${id}-etiqueta`} className="mb-1 block text-sm font-semibold text-slate-600">
        Asignatura
      </span>

      <button
        ref={boton}
        id={`${id}-boton`}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={abierta}
        aria-controls={`${id}-lista`}
        aria-labelledby={`${id}-etiqueta ${id}-boton`}
        onClick={() => (abierta ? setAbierta(false) : abrir())}
        onKeyDown={teclasBoton}
        className={`flex w-full cursor-pointer items-center gap-3 border-[3px] bg-white py-2 pl-2 pr-3 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          alumno ? "rounded-clay font-display shadow-clay-sm" : "rounded-xl"
        }`}
        style={{ borderColor: elegida.valor === "all" ? "#e2e8f0" : elegida.color }}
      >
        <Emoji opcion={elegida} />
        <span className="min-w-0 flex-1 truncate font-semibold text-slate-800">{elegida.nombre}</span>
        <Cuantas n={elegida.cuantas} />
        <CaretDown
          size={18}
          weight="bold"
          aria-hidden="true"
          className={`shrink-0 text-slate-500 transition-transform ${abierta ? "rotate-180" : ""}`}
        />
      </button>

      {abierta && (
        <ul
          ref={lista}
          id={`${id}-lista`}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-etiqueta`}
          aria-activedescendant={`${id}-${activa}`}
          onKeyDown={teclasLista}
          className={`absolute inset-x-0 z-30 mt-2 max-h-[min(26rem,60dvh)] overflow-y-auto overscroll-contain border border-slate-200 bg-white p-1.5 shadow-xl focus:outline-none ${
            alumno ? "rounded-clay font-display" : "rounded-2xl"
          }`}
        >
          {elegibles.map((opcion, i) => {
            const marcada = opcion.valor === elegida.valor;
            return (
              <li
                key={opcion.valor}
                id={`${id}-${i}`}
                role="option"
                aria-selected={marcada}
                onClick={() => elegir(opcion)}
                onPointerMove={() => setActiva(i)}
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1.5 ${
                  i === activa ? "bg-primary-soft" : ""
                }`}
              >
                <Emoji opcion={opcion} />
                <span
                  className={`min-w-0 flex-1 text-sm leading-snug ${
                    marcada ? "font-bold text-slate-900" : "font-medium text-slate-700"
                  }`}
                >
                  {opcion.nombre}
                </span>
                <Cuantas n={opcion.cuantas} />
                <Check
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className={`shrink-0 text-primary ${marcada ? "" : "invisible"}`}
                />
              </li>
            );
          })}

          {proximamente.length > 0 && (
            <li role="presentation" className="mt-1 border-t border-slate-100 pt-1">
              <span
                id={`${id}-pronto`}
                className="block px-2 pb-1 pt-2 text-xs font-bold uppercase tracking-wide text-slate-400"
              >
                Próximamente
              </span>
              <ul role="group" aria-labelledby={`${id}-pronto`}>
                {proximamente.map((subject) => (
                  <li
                    key={subject.id}
                    role="option"
                    aria-selected={false}
                    aria-disabled="true"
                    className="flex items-center gap-3 rounded-xl px-2 py-1.5 opacity-50"
                  >
                    <Emoji opcion={{ emoji: subject.emoji, color: subject.color }} />
                    <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-slate-600">
                      {subject.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

function Emoji({ opcion }: { opcion: Pick<Opcion, "emoji" | "color"> }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-8 shrink-0 items-center justify-center rounded-lg text-base"
      style={{ backgroundColor: opcion.color }}
    >
      {opcion.emoji}
    </span>
  );
}

function Cuantas({ n }: { n: number }) {
  return (
    <span
      className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500"
      aria-label={`${n} ${n === 1 ? "actividad" : "actividades"}`}
    >
      {n}
    </span>
  );
}
