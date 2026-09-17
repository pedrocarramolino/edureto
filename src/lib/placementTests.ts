import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { SubjectId } from "@/types";

export async function hasTakenPlacementTest(uid: string, subjectId: SubjectId): Promise<boolean> {
  const snap = await getDoc(doc(db, "users", uid));
  const taken = snap.data()?.placementTestsTaken as string[] | undefined;
  return taken?.includes(subjectId) ?? false;
}

export async function markPlacementTestTaken(uid: string, subjectId: SubjectId): Promise<void> {
  await updateDoc(doc(db, "users", uid), {
    placementTestsTaken: arrayUnion(subjectId),
  });
}
