"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/AuthProvider";
import { listAttemptsForStudent, totalPoints } from "@/lib/attempts";
import { withTimeout } from "@/lib/withTimeout";
import { mascota, precios } from "@/data/mascota";
import {
  leerMascota,
  guardarMascota,
  conElPasoDelTiempo,
  darDeComer,
  jugarConElla,
  dormir,
  humorDe,
  type EstadoMascota,
} from "@/lib/pets";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";

const frases: Record<string, string> = {
  feliz: "¡Está contenta! Se nota que la cuidas.",
  normal: "Está bien, pero agradecería un rato contigo.",
  triste: "No está muy allá: tiene hambre o se aburre.",
  dormida: "Está agotada. Necesita dormir un rato.",
};

export default function MascotaPage() {
  const { user } = useAuth();
  const [estado, setEstado] = useState<EstadoMascota | null>(null);
  const [ganadas, setGanadas] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    withTimeout(Promise.all([leerMascota(user.uid), listAttemptsForStudent(user.uid)]))
      .then(([m, partidas]) => {
        setEstado(conElPasoDelTiempo(m));
        setGanadas(totalPoints(partidas));
      })
      .catch(() => setError("No hemos podido despertar a tu mascota. Inténtalo más tarde."));
  }, [user]);

  if (error) return <p className="text-sm text-rose-600">{error}</p>;
  if (!estado) return <p className="text-sm text-slate-500">Cargando tu mascota…</p>;

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
    guardarMascota(user.uid, siguiente).catch(() => {
      setAviso("No se ha podido guardar. Revisa la conexión.");
    });
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
          className="mx-auto flex h-48 w-full max-w-sm items-center justify-center rounded-clay"
          style={{ backgroundColor: `${mascota.color}22` }}
        >
          <span className="text-8xl" aria-hidden="true">
            {mascota[humor === "dormida" ? "dormida" : humor]}
          </span>
        </div>
        <p className="mt-3 font-display text-xl font-bold text-slate-800">{estado.nombre}</p>
        <p className="text-sm text-slate-500">{frases[humor]}</p>

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
          🎾 Jugar con ella · {precios.juego}
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
          Las monedas se ganan jugando: <strong>10 por cada respuesta acertada</strong>. Has ganado{" "}
          {ganadas} en total y has gastado {estado.gastadas} cuidándola.
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
