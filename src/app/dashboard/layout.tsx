import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-1">
      <DashboardSidebar />
      <main className="flex-1 p-6 sm:p-8">{children}</main>
    </div>
  );
}
