import { doc, getDoc, setDoc, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { mascotas } from "@/data/mascota";
import { entre0y100, type EstadoMascota } from "@/lib/petState";

const AL_ADOPTAR = { saciedad: 80, felicidad: 80, energia: 80, gastadas: 0 };

/** Devuelve null mientras el alumno no haya adoptado ninguna. */
export async function leerMascota(uid: string): Promise<EstadoMascota | null> {
  const snap = await getDoc(doc(db, "mascotas", uid));
  if (!snap.exists()) return null;
  const d = snap.data();
  return {
    tipo: (d.tipo as string) ?? mascotas[0].tipo,
    nombre: (d.nombre as string) ?? "",
    saciedad: (d.saciedad as number) ?? 80,
    felicidad: (d.felicidad as number) ?? 80,
    energia: (d.energia as number) ?? 80,
    gastadas: (d.gastadas as number) ?? 0,
    ultimaVisita: d.ultimaVisita instanceof Timestamp ? d.ultimaVisita.toDate() : null,
  };
}

export async function adoptar(uid: string, tipo: string, nombre: string): Promise<EstadoMascota> {
  await setDoc(doc(db, "mascotas", uid), {
    ownerId: uid,
    tipo,
    nombre,
    ...AL_ADOPTAR,
    ultimaVisita: serverTimestamp(),
  });
  return { tipo, nombre, ...AL_ADOPTAR, ultimaVisita: new Date() };
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
