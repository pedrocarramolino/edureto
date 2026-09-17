"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/AuthProvider";

export default function RedirectingPage() {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    router.replace(role === "profesora" ? "/dashboard" : "/student");
  }, [loading, user, role, router]);

  return (
    <main className="flex flex-1 items-center justify-center">
      <p className="text-slate-500">Entrando…</p>
    </main>
  );
}
