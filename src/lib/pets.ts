import { doc, getDoc, setDoc, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { mascota, precios } from "@/data/mascota";

export interface EstadoMascota {
  tipo: string;
  nombre: string;
  /** 0 es muerto de hambre, 100 es lleno. */
  saciedad: number;
  felicidad: number;
  energia: number;
  /** Monedas ya gastadas; las disponibles se calculan con los aciertos. */
  gastadas: number;
  ultimaVisita: Date | null;
}

const INICIAL: Omit<EstadoMascota, "ultimaVisita"> = {
  tipo: mascota.tipo,
  nombre: mascota.nombre,
  saciedad: 80,
  felicidad: 80,
  energia: 80,
  gastadas: 0,
};

/** Lo que baja cada necesidad por hora sin jugar. */
const POR_HORA = { saciedad: 4, felicidad: 3, energia: 2 };

const entre0y100 = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

/**
 * Aplica el paso del tiempo: la mascota tiene hambre y se aburre mientras el
 * alumno no está. Se calcula al abrir, no hace falta nada en el servidor.
 */
export function conElPasoDelTiempo(estado: EstadoMascota, ahora = new Date()): EstadoMascota {
  if (!estado.ultimaVisita) return estado;
  const horas = (ahora.getTime() - estado.ultimaVisita.getTime()) / 3_600_000;
  if (horas <= 0) return estado;
  return {
    ...estado,
    saciedad: entre0y100(estado.saciedad - horas * POR_HORA.saciedad),
    felicidad: entre0y100(estado.felicidad - horas * POR_HORA.felicidad),
    energia: entre0y100(estado.energia - horas * POR_HORA.energia),
  };
}

export async function leerMascota(uid: string): Promise<EstadoMascota> {
  const snap = await getDoc(doc(db, "mascotas", uid));
  if (!snap.exists()) {
    await setDoc(doc(db, "mascotas", uid), {
      ownerId: uid,
      ...INICIAL,
      ultimaVisita: serverTimestamp(),
    });
    return { ...INICIAL, ultimaVisita: new Date() };
  }
  const d = snap.data();
  return {
    tipo: (d.tipo as string) ?? mascota.tipo,
    nombre: (d.nombre as string) ?? mascota.nombre,
    saciedad: (d.saciedad as number) ?? 80,
    felicidad: (d.felicidad as number) ?? 80,
    energia: (d.energia as number) ?? 80,
    gastadas: (d.gastadas as number) ?? 0,
    ultimaVisita: d.ultimaVisita instanceof Timestamp ? d.ultimaVisita.toDate() : null,
  };
}

export async function guardarMascota(uid: string, estado: EstadoMascota): Promise<void> {
  await updateDoc(doc(db, "mascotas", uid), {
    saciedad: entre0y100(estado.saciedad),
    felicidad: entre0y100(estado.felicidad),
    energia: entre0y100(estado.energia),
    gastadas: estado.gastadas,
    nombre: estado.nombre,
    tipo: estado.tipo,
    ultimaVisita: serverTimestamp(),
  });
}

export function darDeComer(estado: EstadoMascota): EstadoMascota {
  return {
    ...estado,
    saciedad: entre0y100(estado.saciedad + 25),
    felicidad: entre0y100(estado.felicidad + 5),
    gastadas: estado.gastadas + precios.comida,
  };
}

export function jugarConElla(estado: EstadoMascota): EstadoMascota {
  return {
    ...estado,
    felicidad: entre0y100(estado.felicidad + 20),
    energia: entre0y100(estado.energia - 10),
    saciedad: entre0y100(estado.saciedad - 5),
    gastadas: estado.gastadas + precios.juego,
  };
}

export function dormir(estado: EstadoMascota): EstadoMascota {
  return { ...estado, energia: entre0y100(estado.energia + 30), saciedad: entre0y100(estado.saciedad - 5) };
}

export type Humor = "feliz" | "normal" | "triste" | "dormida";

export function humorDe(estado: EstadoMascota): Humor {
  if (estado.energia < 20) return "dormida";
  if (estado.saciedad < 30 || estado.felicidad < 30) return "triste";
  if (estado.saciedad > 60 && estado.felicidad > 60) return "feliz";
  return "normal";
}
