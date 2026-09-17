"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, type Role } from "@/lib/auth/AuthProvider";

export function RequireRole({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const { user, role: currentRole, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    if (currentRole !== role) {
      router.replace(currentRole === "profesora" ? "/dashboard" : "/student");
    }
  }, [loading, user, currentRole, role, router]);

  if (loading || !user || currentRole !== role) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <p className="text-slate-500">Cargando…</p>
      </main>
    );
  }

  return <>{children}</>;
}
