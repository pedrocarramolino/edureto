"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth/AuthProvider";

type Estado = "aviso" | "enviando" | "enviado" | "comprobando" | "sin-verificar" | "error";

/**
 * Aviso mientras la cuenta no ha confirmado su correo. No bloquea el uso de la
 * app a propósito: dejar a un niño fuera de clase porque en casa no han abierto
 * el correo hace más daño que bien. Sirve para que la familia lo confirme y
 * para que se note si alguien se registró con un correo que no es suyo.
 */
export function EmailVerificationNotice() {
  const { user, emailVerified, resendVerification, refreshVerification } = useAuth();
  const [estado, setEstado] = useState<Estado>("aviso");

  if (!user || emailVerified) return null;

  async function reenviar() {
    setEstado("enviando");
    try {
      await resendVerification();
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  async function comprobar() {
    setEstado("comprobando");
    try {
      const verificado = await refreshVerification();
      if (!verificado) setEstado("sin-verificar");
    } catch {
      setEstado("error");
    }
  }

  const mensajes: Record<Estado, string> = {
    aviso: `Te hemos enviado un correo a ${user.email ?? "tu dirección"} para confirmar que es tuya.`,
    enviando: "Enviando el correo…",
    enviado: "Correo enviado. Míralo también en la carpeta de spam.",
    comprobando: "Comprobando…",
    "sin-verificar": "Todavía no consta como verificado. Abre el enlace del correo y vuelve a probar.",
    error: "No se ha podido enviar el correo. Inténtalo dentro de un rato.",
  };

  return (
    <div
      role="status"
      className="mx-4 mt-4 flex flex-wrap items-center gap-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 sm:mx-8"
    >
      <span className="flex-1">
        <strong className="font-semibold">Confirma tu correo.</strong> {mensajes[estado]}
      </span>
      <button
        onClick={reenviar}
        disabled={estado === "enviando"}
        className="cursor-pointer rounded-lg border border-amber-300 px-3 py-1.5 font-medium transition-colors hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Reenviar correo
      </button>
      <button
        onClick={comprobar}
        disabled={estado === "comprobando"}
        className="cursor-pointer rounded-lg border border-amber-300 px-3 py-1.5 font-medium transition-colors hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Ya lo he hecho
      </button>
    </div>
  );
}
