"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/lib/auth/AuthProvider";
import { Button } from "@/components/ui/Button";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { Logo } from "@/components/ui/Logo";
import { PlayfulBackground } from "@/components/ui/PlayfulBackground";

const errorMessages: Record<string, string> = {
  "auth/invalid-credential": "Correo o contraseña incorrectos.",
  "auth/invalid-email": "Ese correo no es válido.",
  "auth/user-disabled": "Esta cuenta está deshabilitada.",
  "auth/too-many-requests": "Demasiados intentos. Prueba de nuevo en unos minutos.",
};

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await signIn(email, password);
      router.push("/redirigiendo");
    } catch (err) {
      const code = err instanceof FirebaseError ? err.code : "";
      setError(errorMessages[code] ?? "No se ha podido iniciar sesión. Inténtalo de nuevo.");
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-6 px-6 py-16">
      <PlayfulBackground />
      <div className="flex flex-col items-center text-center">
        <Link href="/">
          <Logo size="lg" withWordmark={false} />
        </Link>
        <p className="mt-1 text-slate-500">Inicia sesión para continuar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Correo
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>

        <PasswordInput
          label="Contraseña"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p role="alert" className="text-sm text-rose-600">
            {error}
          </p>
        )}

        <Button type="submit" disabled={submitting} className="w-full justify-center">
          {submitting ? "Entrando…" : "Entrar"}
        </Button>

        <p className="text-center text-sm text-slate-500">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Regístrate
          </Link>
        </p>
      </form>
    </main>
  );
}
