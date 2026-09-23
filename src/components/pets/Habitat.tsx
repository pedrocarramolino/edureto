import type { Humor } from "@/lib/petState";
import type { Mascota } from "@/data/mascota";

/**
 * La habitación de la mascota. El cielo de la ventana dice cómo está antes de
 * leer ningún número: sol si está contenta, gris si está triste, noche si
 * duerme. Es lo único llamativo de la pantalla, a propósito.
 */
const cielos: Record<Humor, { fondo: string; astro: string; nota: string }> = {
  feliz: { fondo: "linear-gradient(180deg,#7dd3fc 0%,#e0f2fe 100%)", astro: "#fbbf24", nota: "¡Qué bien se está hoy!" },
  normal: { fondo: "linear-gradient(180deg,#bae6fd 0%,#f1f5f9 100%)", astro: "#fcd34d", nota: "¿Jugamos un rato?" },
  triste: { fondo: "linear-gradient(180deg,#94a3b8 0%,#e2e8f0 100%)", astro: "#cbd5e1", nota: "Tengo hambre…" },
  dormida: { fondo: "linear-gradient(180deg,#1e1b4b 0%,#4338ca 100%)", astro: "#e2e8f0", nota: "Zzz… estoy agotado" },
};

export function Habitat({
  animal,
  humor,
  saltando,
  premio,
}: {
  animal: Mascota;
  humor: Humor;
  /** Da un brinco justo después de comer o de jugar. */
  saltando: boolean;
  /** Texto que sube y se desvanece, por ejemplo "+25 🍎". */
  premio: string | null;
}) {
  const cielo = cielos[humor];
  const noche = humor === "dormida";

  return (
    <div
      className="relative mx-auto h-64 w-full max-w-lg overflow-hidden rounded-clay border-[3px] border-black/10 shadow-clay sm:h-72"
      style={{ background: cielo.fondo }}
    >
      {/* sol o luna */}
      <div
        className="absolute right-8 top-6 h-12 w-12 rounded-full blur-[1px]"
        style={{ backgroundColor: cielo.astro, opacity: noche ? 0.9 : 1 }}
        aria-hidden="true"
      />
      {noche &&
        [
          { left: "12%", top: "18%" },
          { left: "28%", top: "9%" },
          { left: "68%", top: "26%" },
          { left: "82%", top: "12%" },
        ].map((e) => (
          <span
            key={e.left}
            className="absolute h-1.5 w-1.5 rounded-full bg-white"
            style={e}
            aria-hidden="true"
          />
        ))}

      {/* suelo */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 rounded-t-[50%]"
        style={{ backgroundColor: noche ? "#312e81" : `${animal.color}55` }}
        aria-hidden="true"
      />

      {/* la mascota, con su sombra */}
      <div className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-4 text-center">
        <span className="relative mx-auto mb-1 block w-max max-w-[15rem] rounded-clay bg-white/95 px-4 py-2 font-display text-sm font-bold text-slate-700 shadow-clay-sm">
          {cielo.nota}
          <span
            className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white/95"
            aria-hidden="true"
          />
        </span>

        {premio && (
          <span className="animate-premio absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-lg font-bold text-emerald-600">
            {premio}
          </span>
        )}
        {humor === "dormida" && (
          <span className="animate-zzz absolute -top-2 right-0 text-2xl" aria-hidden="true">
            💤
          </span>
        )}
        <span
          className={`block text-8xl sm:text-9xl ${saltando ? "animate-pet-jump" : "animate-pet-bob"}`}
          aria-hidden="true"
        >
          {animal.emoji}
        </span>
        <span
          className="mx-auto block h-2 w-16 rounded-full bg-black/20 blur-[2px]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
