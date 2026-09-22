import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { RequireRole } from "@/components/auth/RequireRole";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole role="profesora">
      <div className="flex min-h-screen flex-1 flex-col sm:flex-row">
        <DashboardSidebar />
        <main className="min-w-0 flex-1 p-4 sm:p-8">{children}</main>
      </div>
    </RequireRole>
  );
}
