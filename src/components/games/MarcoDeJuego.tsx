import type { CSSProperties, ReactNode } from "react";

/**
 * El marco de un juego: la cabecera y la tarjeta blanca donde se juega.
 *
 * Ocupa el alto libre de la pantalla (--libre, lo pone el layout) para que los
 * juegos con tablero —comecocos, globos, penaltis— crezcan hasta llenarla sin
 * empujar los botones fuera de la vista, esté la tablet en vertical o en
 * horizontal. Esos juegos se marcan con data-tablero; los demás no, y la
 * tarjeta mide lo que su contenido.
 *
 * En un móvil, mientras hay un tablero en juego, la cabecera se esconde: ahí
 * cada centímetro cuenta y el título ya se vio al entrar.
 */
export function MarcoDeJuego({
  cabecera,
  className = "",
  children,
}: {
  cabecera: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className="group/juego mx-auto flex min-h-(--libre) w-full max-w-3xl flex-col gap-4 short:gap-2">
      <div className="space-y-4 max-sm:group-has-[[data-tablero]]/juego:hidden short:group-has-[[data-tablero]]/juego:hidden">
        {cabecera}
      </div>
      <div
        className={`flex flex-col rounded-clay border-[3px] border-black/5 bg-white p-4 shadow-clay-sm has-[[data-tablero]]:flex-1 sm:p-6 short:p-3 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * El hueco donde va un tablero. Con proporción, el tablero se hace tan grande
 * como quepa sin deformarse; sin ella, lo llena entero.
 *
 * className sirve sobre todo para el alto mínimo (por defecto, min-h-44).
 *
 * La capa de dentro va en posición absoluta a propósito: así su tamaño sale
 * del hueco ya repartido y no de un primer cálculo del flex en el que aún mide
 * cero (en vertical, el laberinto salía invisible por eso).
 */
export function HuecoTablero({
  proporcion,
  className = "",
  children,
}: {
  proporcion?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`relative w-full flex-1 ${className || "min-h-44"}`}>
      {proporcion ? (
        <div className="hueco-tablero absolute inset-0 flex items-center justify-center">
          <div
            className="tablero relative @container"
            style={{ "--proporcion": proporcion } as CSSProperties}
          >
            {children}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0">{children}</div>
      )}
    </div>
  );
}
