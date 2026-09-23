/**
 * Las mascotas que puede adoptar un alumno. El ánimo no se dibuja cambiando de
 * animal, lo cuenta su habitación, así que añadir una mascota nueva es una
 * línea más en esta lista.
 */
export interface Mascota {
  tipo: string;
  especie: string;
  emoji: string;
  color: string;
}

export const mascotas: Mascota[] = [
  { tipo: "perro", especie: "Perro", emoji: "🐶", color: "#f59e0b" },
  { tipo: "gato", especie: "Gato", emoji: "🐱", color: "#a855f7" },
  { tipo: "conejo", especie: "Conejo", emoji: "🐰", color: "#ec4899" },
  { tipo: "dragon", especie: "Dragón", emoji: "🐲", color: "#16a34a" },
  { tipo: "pinguino", especie: "Pingüino", emoji: "🐧", color: "#0ea5e9" },
  { tipo: "dinosaurio", especie: "Dinosaurio", emoji: "🦖", color: "#84cc16" },
  { tipo: "panda", especie: "Panda", emoji: "🐼", color: "#64748b" },
  { tipo: "zorro", especie: "Zorro", emoji: "🦊", color: "#ea580c" },
];

export function mascotaPorTipo(tipo: string): Mascota {
  return mascotas.find((m) => m.tipo === tipo) ?? mascotas[0];
}

/** Lo que cuesta cada cuidado, en monedas ganadas jugando. */
export const precios = { comida: 20, juego: 10, dormir: 0 } as const;

export const MAX_NOMBRE = 20;
