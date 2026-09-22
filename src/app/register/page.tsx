"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/lib/auth/AuthProvider";
import type { Stage } from "@/types";
import { stageOptions, stageLabel, stageFitsAge, suggestedStage } from "@/data/stages";
import { calculateAge } from "@/lib/students";
import { avatarOptions } from "@/data/avatars";
import { Button } from "@/components/ui/Button";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { Logo } from "@/components/ui/Logo";
import { PlayfulBackground } from "@/components/ui/PlayfulBackground";

const errorMessages: Record<string, string> = {
  "auth/email-already-in-use": "Ya existe una cuenta con ese correo.",
  "auth/invalid-email": "Ese correo no es válido.",
  "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
};

const today = new Date().toISOString().split("T")[0];

export default function RegisterPage() {
  const { signUp } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [stage, setStage] = useState<Stage | "">("");
  const [avatarEmoji, setAvatarEmoji] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [guardianConsent, setGuardianConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Picking the birth date fills in the course that matches the age, so the
  // usual case is right without thinking about it. It can still be changed by
  // hand: a student who repeats or works at another level is normal here.
  function handleBirthDate(value: string) {
    setBirthDate(value);
    const nextAge = calculateAge(value);
    setAge(nextAge);
    if (nextAge !== null) setStage(suggestedStage(nextAge));
  }

  const stageMismatch = age !== null && stage !== "" && !stageFitsAge(stage, age);
  // La política de privacidad ya dice que a los menores de 14 los registra un
  // adulto: el RGPD y la LOPDGDD no admiten su consentimiento por sí solos.
  const needsGuardian = age !== null && age < 14;
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const canSubmit =
    name.trim().length > 0 &&
    birthDate.length > 0 &&
    stage !== "" &&
    avatarEmoji !== "" &&
    passwordsMatch &&
    acceptedTerms &&
    (!needsGuardian || guardianConsent);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    setSubmitting(true);
    try {
      await signUp(email, password, { name: name.trim(), birthDate, stage, avatarEmoji });
      router.push("/redirigiendo");
    } catch (err) {
      const code = err instanceof FirebaseError ? err.code : "";
      setError(errorMessages[code] ?? "No se ha podido crear la cuenta. Inténtalo de nuevo.");
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
        <p className="mt-1 text-slate-500">Crea tu cuenta</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Nombre completo
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="birthDate" className="mb-1 block text-sm font-medium text-slate-700">
              Fecha de nacimiento
            </label>
            <input
              id="birthDate"
              type="date"
              max={today}
              required
              value={birthDate}
              onChange={(e) => handleBirthDate(e.target.value)}
              className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm focus:border-primary focus:outline-none"
            />
            {age !== null && (
              <p className="mt-1 text-xs text-slate-500">{age} años</p>
            )}
          </div>

          <div>
            <label htmlFor="stage" className="mb-1 block text-sm font-medium text-slate-700">
              Curso
            </label>
            <select
              id="stage"
              required
              value={stage}
              onChange={(e) => setStage(e.target.value as Stage)}
              className="w-full rounded-xl border-2 border-slate-200 p-2 text-sm focus:border-primary focus:outline-none"
            >
              <option value="" disabled>
                Elige…
              </option>
              {stageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {stageMismatch && age !== null && (
          <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
            Con {age} años lo normal sería <strong>{stageLabel(suggestedStage(age))}</strong>.
            Puedes dejar este curso si repite o si trabaja en otro nivel.
          </p>
        )}

        <div>
          <span className="mb-1 block text-sm font-medium text-slate-700">Avatar</span>
          <div className="flex flex-wrap gap-2">
            {avatarOptions.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setAvatarEmoji(emoji)}
                aria-pressed={avatarEmoji === emoji}
                aria-label={`Elegir avatar ${emoji}`}
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border-2 text-xl transition-colors ${
                  avatarEmoji === emoji
                    ? "border-primary bg-primary-soft"
                    : "border-slate-200 bg-white hover:border-primary/40"
                }`}
              >
                <span aria-hidden="true">{emoji}</span>
              </button>
            ))}
          </div>
        </div>

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

        <div>
          <PasswordInput
            label="Confirmar contraseña"
            autoComplete="new-password"
            minLength={6}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword.length > 0 && !passwordsMatch && (
            <p className="mt-1 text-sm text-rose-600">Las contraseñas no coinciden.</p>
          )}
        </div>

        {needsGuardian && (
          <label className="flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
            <input
              type="checkbox"
              checked={guardianConsent}
              onChange={(e) => setGuardianConsent(e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-amber-600"
            />
            <span>
              Con {age} años, la cuenta la tiene que crear un adulto. Soy su padre, madre o tutor
              legal (o la profesora con permiso de la familia) y autorizo el registro y el
              tratamiento de sus datos.
            </span>
          </label>
        )}

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

        <Button type="submit" disabled={submitting || !canSubmit} className="w-full justify-center">
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
