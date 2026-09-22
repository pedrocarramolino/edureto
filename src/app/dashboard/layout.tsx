import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { RequireRole } from "@/components/auth/RequireRole";
import { EmailVerificationNotice } from "@/components/auth/EmailVerificationNotice";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <RequireRole role="profesora">
      <div className="flex min-h-screen flex-1 flex-col sm:flex-row">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <EmailVerificationNotice />
          <main className="flex-1 p-4 sm:p-8">{children}</main>
        </div>
      </div>
    </RequireRole>
  );
}
