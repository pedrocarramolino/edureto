"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { House, UsersThree, BookOpen, SignOut } from "@phosphor-icons/react";
import { useAuth } from "@/lib/auth/AuthProvider";
import { Logo } from "@/components/ui/Logo";

// "short" es el nombre en la barra del móvil, donde el largo no cabe.
const links = [
  { href: "/dashboard", label: "Resumen", short: "Resumen", Icon: House },
  { href: "/dashboard/students", label: "Mis alumnos", short: "Alumnos", Icon: UsersThree },
  { href: "/dashboard/activities", label: "Biblioteca de actividades", short: "Actividades", Icon: BookOpen },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { signOutUser } = useAuth();

  return (
    // On a phone the sidebar becomes a bar across the top; from sm it is the
    // usual column on the left.
    <aside className="sticky top-0 z-10 flex w-full shrink-0 flex-row items-center gap-1 overflow-x-auto border-b border-slate-200 bg-white p-2 sm:h-dvh sm:w-64 sm:flex-col sm:items-stretch sm:gap-1 sm:overflow-y-auto sm:border-b-0 sm:border-r sm:p-4">
      {/* The wrapping spans own the responsive display: putting "hidden" on the
          Logo itself fights with the display class the component sets. */}
      <Link href="/" className="shrink-0 px-2 sm:mb-6">
        <span className="sm:hidden">
          <Logo size="sm" withWordmark={false} />
        </span>
        <span className="hidden sm:block">
          <Logo size="sm" />
        </span>
      </Link>
      {links.map(({ href, label, short, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex shrink-0 flex-col items-center gap-0.5 whitespace-nowrap rounded-xl px-2.5 py-1.5 text-[11px] font-medium transition-colors sm:flex-row sm:gap-3 sm:px-3 sm:py-2 sm:text-sm ${
              active ? "bg-primary-soft text-primary" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Icon size={20} weight={active ? "duotone" : "regular"} aria-hidden="true" />
            <span className="sm:hidden">{short}</span>
            <span className="hidden sm:inline">{label}</span>
          </Link>
        );
      })}

      <button
        onClick={async () => {
          await signOutUser();
          router.replace("/login");
        }}
        aria-label="Cerrar sesión"
        className="ml-auto flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl px-2.5 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 sm:ml-0 sm:mt-auto sm:gap-3 sm:px-3"
      >
        <SignOut size={20} aria-hidden="true" />
        <span className="hidden sm:inline">Cerrar sesión</span>
      </button>
    </aside>
  );
}
