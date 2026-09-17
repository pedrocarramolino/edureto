"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, BookOpen, GameController, Trophy } from "@phosphor-icons/react";

const links = [
  { href: "/student", label: "Inicio", Icon: House },
  { href: "/student/subjects", label: "Asignaturas", Icon: BookOpen },
  { href: "/student/games", label: "Juegos", Icon: GameController },
  { href: "/student/progress", label: "Progreso", Icon: Trophy },
];

export function StudentNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-10 flex justify-around border-t-[3px] border-slate-200 bg-white p-2 sm:static sm:w-56 sm:flex-col sm:justify-start sm:gap-2 sm:border-r-[3px] sm:border-t-0 sm:p-4">
      {links.map(({ href, label, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 rounded-clay px-3 py-2 font-display text-xs font-semibold transition-colors sm:flex-row sm:gap-3 sm:text-sm ${
              active ? "bg-accent-soft text-accent" : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            <Icon size={24} weight={active ? "fill" : "regular"} aria-hidden="true" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
