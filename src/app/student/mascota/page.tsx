"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/AuthProvider";
import { listAttemptsForStudent, totalPoints } from "@/lib/attempts";
import { withTimeout } from "@/lib/withTimeout";
import { mascotas, mascotaPorTipo, caras, precios, MAX_NOMBRE } from "@/data/mascota";
import { leerMascota, adoptar, guardarMascota } from "@/lib/pets";
import {
  conElPasoDelTiempo,
  darDeComer,
  jugarConElla,
  dormir,
  humorDe,
  type EstadoMascota,
} from "@/lib/petState";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";

const frases: Record<string, string> = {
  feliz: "¡Está contento! Se nota que lo cuidas.",
  normal: "Está bien, pero agradecería un rato contigo.",
  triste: "No está muy allá: tiene hambre o se aburre.",
  dormida: "Está agotado. Necesita dormir un rato.",
};

export default function MascotaPage() {
  const { user } = useAuth();
  const [estado, setEstado] = useState<EstadoMascota | null>(null);
  const [cargando, setCargando] = useState(true);
  const [ganadas, setGanadas] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [elegida, setElegida] = useState(mascotas[0].tipo);
  const [nombre, setNombre] = useState("");
  const [renombrando, setRenombrando] = useState(false);

  useEffect(() => {
    if (!user) return;
    withTimeout(Promise.all([leerMascota(user.uid), listAttemptsForStudent(user.uid)]))
      .then(([m, partidas]) => {
        setEstado(m ? conElPasoDelTiempo(m) : null);
        setGanadas(totalPoints(partidas));
      })
      .catch(() => setError("No hemos podido cargar tu mascota. Inténtalo más tarde."))
      .finally(() => setCargando(false));
  }, [user]);

  if (error) return <p className="text-sm text-rose-600">{error}</p>;
  if (cargando) return <p className="text-sm text-slate-500">Cargando tu mascota…</p>;

  // Mientras no haya adoptado ninguna, la pantalla es la de elegir.
  if (!estado) {
    const puedeAdoptar = nombre.trim().length > 0;
    return (
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Elige tu mascota</h1>
          <p className="text-slate-500">Vivirá contigo y la cuidarás con lo que ganes jugando.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {mascotas.map((m) => (
            <button
              key={m.tipo}
              onClick={() => setElegida(m.tipo)}
              aria-pressed={elegida === m.tipo}
              className={`cursor-pointer rounded-clay border-[3px] p-4 text-center transition-all ${
                elegida === m.tipo
                  ? "border-accent bg-accent-soft shadow-clay"
                  : "border-slate-200 bg-white shadow-clay-sm hover:border-accent/40"
              }`}
            >
              <span className="text-5xl" aria-hidden="true">
                {m.emoji}
              </span>
              <p className="mt-1 font-display font-bold text-slate-800">{m.especie}</p>
            </button>
          ))}
        </div>

        <Card variant="clay">
          <label htmlFor="nombre" className="mb-1 block font-display font-bold text-slate-800">
            ¿Cómo se va a llamar?
          </label>
          <input
            id="nombre"
            value={nombre}
            maxLength={MAX_NOMBRE}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe su nombre…"
            className="w-full rounded-clay border-[3px] border-slate-200 p-3 text-base focus:border-primary focus:outline-none"
          />
          <div className="mt-4">
            <Button
              variant="clay"
              disabled={!puedeAdoptar}
              onClick={() => {
                if (!user || !puedeAdoptar) return;
                adoptar(user.uid, elegida, nombre.trim())
                  .then(setEstado)
                  .catch(() => setAviso("No se ha podido guardar. Revisa la conexión."));
              }}
            >
              Adoptar
            </Button>
          </div>
          {aviso && <p className="mt-3 text-sm text-rose-600">{aviso}</p>}
        </Card>
      </div>
    );
  }

  const animal = mascotaPorTipo(estado.tipo);
  const monedas = Math.max(0, ganadas - estado.gastadas);
  const humor = humorDe(estado);

  function cuidar(accion: (e: EstadoMascota) => EstadoMascota, coste: number) {
    if (!estado || !user) return;
    if (coste > monedas) {
      setAviso("No te llegan las monedas. ¡Juega una partida para ganar más!");
      return;
    }
    const siguiente = accion(estado);
    setEstado(siguiente);
    setAviso(null);
    guardarMascota(user.uid, siguiente).catch(() =>
      setAviso("No se ha podido guardar. Revisa la conexión."),
    );
  }

  function renombrar(nuevo: string) {
    if (!estado || !user) return;
    const siguiente = { ...estado, nombre: nuevo.trim().slice(0, MAX_NOMBRE) };
    setEstado(siguiente);
    setRenombrando(false);
    guardarMascota(user.uid, siguiente).catch(() => setAviso("No se ha podido guardar el nombre."));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-slate-900">Mi mascota</h1>
        <span className="rounded-full bg-amber-100 px-4 py-2 font-display font-bold text-amber-800">
          🪙 {monedas}
        </span>
      </div>

      <Card variant="clay" className="text-center">
        <div
          className="mx-auto flex h-48 w-full max-w-sm items-center justify-center gap-2 rounded-clay"
          style={{ backgroundColor: `${animal.color}22` }}
        >
          <span className="text-8xl" aria-hidden="true">
            {animal.emoji}
          </span>
          <span className="text-4xl" aria-hidden="true">
            {caras[humor]}
          </span>
        </div>

        {renombrando ? (
          <form
            className="mt-3 flex justify-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const valor = new FormData(e.currentTarget).get("nuevo");
              if (typeof valor === "string" && valor.trim()) renombrar(valor);
            }}
          >
            <input
              name="nuevo"
              defaultValue={estado.nombre}
              maxLength={MAX_NOMBRE}
              className="rounded-clay border-[3px] border-slate-200 p-2 text-center"
            />
            <Button type="submit" variant="clay">
              Guardar
            </Button>
          </form>
        ) : (
          <p className="mt-3 font-display text-xl font-bold text-slate-800">
            {estado.nombre}{" "}
            <button
              onClick={() => setRenombrando(true)}
              className="cursor-pointer text-sm font-semibold text-primary hover:underline"
            >
              cambiar nombre
            </button>
          </p>
        )}
        <p className="text-sm text-slate-500">
          {animal.especie} · {frases[humor]}
        </p>

        <div className="mt-5 space-y-3 text-left">
          {[
            { etiqueta: "🍽️ Comida", valor: estado.saciedad, color: "#f97316" },
            { etiqueta: "😀 Ánimo", valor: estado.felicidad, color: "#22c55e" },
            { etiqueta: "⚡ Energía", valor: estado.energia, color: "#3b82f6" },
          ].map((b) => (
            <div key={b.etiqueta}>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>{b.etiqueta}</span>
                <span>{b.valor}%</span>
              </div>
              <ProgressBar value={b.valor} color={b.color} />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-3">
        <Button variant="clay" onClick={() => cuidar(darDeComer, precios.comida)}>
          🍎 Darle de comer · {precios.comida}
        </Button>
        <Button variant="clay-secondary" onClick={() => cuidar(jugarConElla, precios.juego)}>
          🎾 Jugar con él · {precios.juego}
        </Button>
        <Button variant="clay-secondary" onClick={() => cuidar(dormir, precios.dormir)}>
          😴 Que duerma · gratis
        </Button>
      </div>

      {aviso && (
        <p role="status" className="rounded-clay bg-amber-50 p-3 text-center text-sm text-amber-800">
          {aviso}
        </p>
      )}

      <Card variant="clay">
        <p className="text-sm text-slate-600">
          Las monedas se ganan jugando: <strong>10 por cada respuesta acertada</strong>. Llevas{" "}
          {ganadas} ganadas y {estado.gastadas} gastadas en cuidarlo.
        </p>
        <div className="mt-3">
          <Link href="/student/subjects">
            <Button variant="clay">Ir a jugar y ganar monedas</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
