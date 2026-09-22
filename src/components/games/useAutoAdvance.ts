import { useEffect } from "react";

/**
 * Pasa de pantalla solo cuando la respuesta ya está dada. Los botones de
 * "Continuar" se quedan por si alguien quiere ir más rápido, pero nadie tiene
 * que buscarlos: parar a pulsar rompe el ritmo, sobre todo en una tablet.
 *
 * Cuando la respuesta es correcta se espera poco; cuando está mal se espera
 * más, porque ahí abajo hay una explicación que conviene leer.
 */
export function useAutoAdvance(listo: boolean, acierto: boolean, seguir: () => void) {
  useEffect(() => {
    if (!listo) return;
    const salto = setTimeout(seguir, acierto ? 1800 : 3800);
    return () => clearTimeout(salto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listo, acierto]);
}
