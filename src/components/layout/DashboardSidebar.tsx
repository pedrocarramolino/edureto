"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, UsersThree, BookOpen } from "@phosphor-icons/react";

const links = [
  { href: "/dashboard", label: "Resumen", Icon: House },
  { href: "/dashboard/students", label: "Mis alumnos", Icon: UsersThree },
  { href: "/dashboard/activities", label: "Biblioteca de actividades", Icon: BookOpen },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col gap-1 border-r border-slate-200 bg-white p-4">
      <Link href="/" className="mb-6 px-2 font-heading text-xl font-bold text-primary">
        EduReto
      </Link>
      {links.map(({ href, label, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
              active ? "bg-primary-soft text-primary" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Icon size={20} weight={active ? "duotone" : "regular"} aria-hidden="true" />
            {label}
          </Link>
        );
      })}
    </aside>
  );
}
