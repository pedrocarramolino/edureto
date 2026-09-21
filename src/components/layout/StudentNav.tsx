"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { House, BookOpen, GameController, Trophy, SignOut } from "@phosphor-icons/react";
import { useAuth } from "@/lib/auth/AuthProvider";

const links = [
  { href: "/student", label: "Inicio", Icon: House },
  { href: "/student/subjects", label: "Asignaturas", Icon: BookOpen },
  { href: "/student/games", label: "Juegos", Icon: GameController },
  { href: "/student/progress", label: "Progreso", Icon: Trophy },
];

export function StudentNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { signOutUser } = useAuth();

  return (
    <nav className="sticky bottom-0 z-10 flex justify-around border-t-[3px] border-white/60 bg-white/80 p-2 backdrop-blur-md sm:static sm:w-56 sm:flex-col sm:justify-start sm:gap-2 sm:border-r-[3px] sm:border-t-0 sm:p-4">
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

      <button
        onClick={async () => {
          await signOutUser();
          router.replace("/login");
        }}
        className="flex cursor-pointer flex-col items-center gap-0.5 rounded-clay px-3 py-2 font-display text-xs font-semibold text-slate-400 transition-colors hover:bg-slate-50 sm:mt-auto sm:flex-row sm:gap-3 sm:text-sm"
      >
        <SignOut size={24} aria-hidden="true" />
        Salir
      </button>
    </nav>
  );
}
