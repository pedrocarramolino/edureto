/**
 * Las mascotas que puede adoptar un alumno. El ánimo no se dibuja con otro
 * animal, sino con una carita al lado: así vale para cualquier mascota y se
 * pueden añadir más sin tocar nada más.
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

/** La carita que acompaña a la mascota según cómo se encuentre. */
export const caras = { feliz: "😄", normal: "🙂", triste: "😢", dormida: "😴" } as const;

/** Lo que cuesta cada cuidado, en monedas ganadas jugando. */
export const precios = { comida: 20, juego: 10, dormir: 0 } as const;

export const MAX_NOMBRE = 20;
