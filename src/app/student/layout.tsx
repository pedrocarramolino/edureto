import type { ReactNode } from "react";
import { StudentNav } from "@/components/layout/StudentNav";
import { RequireRole } from "@/components/auth/RequireRole";
import { EmailVerificationNotice } from "@/components/auth/EmailVerificationNotice";
import { PlayfulBackground } from "@/components/ui/PlayfulBackground";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole role="alumno">
      <PlayfulBackground />
      <div className="flex min-h-dvh flex-1 flex-col-reverse font-playful sm:flex-row">
        <StudentNav />
        <div className="flex min-w-0 flex-1 flex-col">
          <EmailVerificationNotice />
          {/* --libre es el alto que queda para la página una vez quitados el menú
              y los márgenes: los juegos lo usan para caber sin hacer scroll. */}
          <main className="flex-1 p-4 [--libre:calc(100dvh_-_6.5rem)] sm:p-6 sm:[--libre:calc(100dvh_-_3rem)] lg:p-8 lg:[--libre:calc(100dvh_-_4rem)] short:p-3 short:[--libre:calc(100dvh_-_1.5rem)]">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </main>
        </div>
      </div>
    </RequireRole>
  );
}
