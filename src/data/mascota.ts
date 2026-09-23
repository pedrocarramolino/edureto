/**
 * La mascota que cuidan los alumnos. Está aquí sola, en un único sitio, para
 * poder cambiarla entera sin tocar la lógica del juego.
 *
 * De momento es un huevo: la mascota de verdad está por decidir.
 */
export interface Mascota {
  tipo: string;
  nombre: string;
  /** Cara según cómo se encuentre. */
  feliz: string;
  normal: string;
  triste: string;
  dormida: string;
  comiendo: string;
  color: string;
}

export const mascota: Mascota = {
  tipo: "huevo",
  nombre: "Huevo",
  feliz: "🥚",
  normal: "🥚",
  triste: "🥚",
  dormida: "🥚",
  comiendo: "🥚",
  color: "#f59e0b",
};

/** Lo que cuesta cada cuidado, en monedas ganadas jugando. */
export const precios = { comida: 20, juego: 10, dormir: 0 } as const;
