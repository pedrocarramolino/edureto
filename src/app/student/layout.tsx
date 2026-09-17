import type { ReactNode } from "react";
import { StudentNav } from "@/components/layout/StudentNav";
import { RequireRole } from "@/components/auth/RequireRole";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole role="alumno">
      <div className="flex min-h-screen flex-1 flex-col-reverse font-playful sm:flex-row">
        <StudentNav />
        <main className="flex-1 p-6 sm:p-8">{children}</main>
      </div>
    </RequireRole>
  );
}
