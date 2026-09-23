/**
 * Una necesidad de la mascota. El color avisa de un vistazo, pero nunca va
 * solo: al lado siempre hay una palabra, para quien no distinga los colores.
 */
export function Necesidad({
  icono,
  etiqueta,
  valor,
}: {
  icono: string;
  etiqueta: string;
  valor: number;
}) {
  const bajo = valor < 30;
  const medio = valor < 60;
  const color = bajo ? "#dc2626" : medio ? "#d97706" : "#16a34a";
  const estado = bajo ? "necesita ayuda" : medio ? "regular" : "bien";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-3 text-sm font-semibold text-slate-600">
        <span>
          <span aria-hidden="true">{icono}</span> {etiqueta}
        </span>
        <span style={{ color }}>
          {valor}% · {estado}
        </span>
      </div>
      <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${valor}%`, backgroundColor: color }}
          role="progressbar"
          aria-valuenow={valor}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${etiqueta}: ${valor} por ciento, ${estado}`}
        />
      </div>
    </div>
  );
}
