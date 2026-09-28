import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { RequireRole } from "@/components/auth/RequireRole";
import { EmailVerificationNotice } from "@/components/auth/EmailVerificationNotice";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole role="profesora">
      <div className="flex min-h-dvh flex-1 flex-col sm:flex-row">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <EmailVerificationNotice />
          {/* --libre: el alto que queda para la página; lo usa la vista previa de
              los juegos para caber sin hacer scroll. */}
          <main className="flex-1 p-4 [--libre:calc(100dvh_-_6.5rem)] sm:p-6 sm:[--libre:calc(100dvh_-_3rem)] lg:p-8 lg:[--libre:calc(100dvh_-_4rem)] short:p-3 short:[--libre:calc(100dvh_-_1.5rem)]">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
          </main>
        </div>
      </div>
    </RequireRole>
  );
}
