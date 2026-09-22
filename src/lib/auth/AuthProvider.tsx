"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendEmailVerification,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import type { Stage } from "@/types";

export type Role = "profesora" | "alumno";

export interface NewStudentProfile {
  name: string;
  birthDate: string;
  stage: Stage;
  avatarEmoji: string;
}

interface AuthState {
  user: User | null;
  role: Role | null;
  loading: boolean;
  /** Whether the account's email address has been confirmed. */
  emailVerified: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, profile: NewStudentProfile) => Promise<void>;
  signOutUser: () => Promise<void>;
  resendVerification: () => Promise<void>;
  /** Re-reads the account from Firebase; returns the fresh verified state. */
  refreshVerification: () => Promise<boolean>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setEmailVerified(firebaseUser?.emailVerified ?? false);
      if (firebaseUser) {
        const snap = await getDoc(doc(db, "users", firebaseUser.uid));
        setRole((snap.data()?.role as Role) ?? "alumno");
      } else {
        setRole(null);
      }
      setLoading(false);
    });
  }, []);

  async function signIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function signUp(email: string, password: string, profile: NewStudentProfile) {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", credential.user.uid), {
      role: "alumno",
      ...profile,
      createdAt: serverTimestamp(),
    });
    try {
      await sendEmailVerification(credential.user);
    } catch {
      // Si el correo de verificación no sale, la cuenta ya está creada: se
      // puede reenviar desde el aviso, así que no se corta el registro.
    }
  }

  async function resendVerification() {
    if (auth.currentUser) await sendEmailVerification(auth.currentUser);
  }

  async function refreshVerification() {
    if (!auth.currentUser) return false;
    await auth.currentUser.reload();
    const verified = auth.currentUser.emailVerified;
    setEmailVerified(verified);
    return verified;
  }

  async function signOutUser() {
    await firebaseSignOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
        emailVerified,
        signIn,
        signUp,
        signOutUser,
        resendVerification,
        refreshVerification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
