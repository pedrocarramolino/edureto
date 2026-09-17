"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/lib/auth/AuthProvider";
import { Button } from "@/components/ui/Button";
import { PasswordInput } from "@/components/ui/PasswordInput";

const errorMessages: Record<string, string> = {
  "auth/email-already-in-use": "Ya existe una cuenta con ese correo.",
  "auth/invalid-email": "Ese correo no es válido.",
  "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
};

export default function RegisterPage() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!acceptedTerms) return;
    setError(null);
    setSubmitting(true);
    try {
      await signUp(email, password);
      router.push("/redirigiendo");
    } catch (err) {
      const code = err instanceof FirebaseError ? err.code : "";
      setError(errorMessages[code] ?? "No se ha podido crear la cuenta. Inténtalo de nuevo.");
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-6 px-6 py-16">
      <div className="text-center">
        <Link href="/" className="font-heading text-2xl font-bold text-primary">
          EduReto
        </Link>
        <p className="mt-1 text-slate-500">Crea tu cuenta</p>
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
          autoComplete="new-password"
          minLength={6}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="flex items-start gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
            className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
          />
          <span>
            He leído y acepto los{" "}
            <Link href="/terminos" target="_blank" className="font-medium text-primary hover:underline">
              Términos de uso
            </Link>{" "}
            y la{" "}
            <Link href="/privacidad" target="_blank" className="font-medium text-primary hover:underline">
              Política de privacidad
            </Link>
            .
          </span>
        </label>

        {error && (
          <p role="alert" className="text-sm text-rose-600">
            {error}
          </p>
        )}

        <Button type="submit" disabled={submitting || !acceptedTerms} className="w-full justify-center">
          {submitting ? "Creando cuenta…" : "Crear cuenta"}
        </Button>

        <p className="text-center text-sm text-slate-500">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Inicia sesión
          </Link>
        </p>
      </form>
    </main>
  );
}
