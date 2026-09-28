"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { House, BookOpen, GameController, Trophy, PawPrint, SignOut } from "@phosphor-icons/react";
import { useAuth } from "@/lib/auth/AuthProvider";

const links = [
  { href: "/student", label: "Inicio", Icon: House },
  { href: "/student/subjects", label: "Asignaturas", Icon: BookOpen },
  { href: "/student/games", label: "Juegos", Icon: GameController },
  { href: "/student/mascota", label: "Mascota", Icon: PawPrint },
  { href: "/student/progress", label: "Progreso", Icon: Trophy },
];

/**
 * Tres formas según la pantalla:
 * - móvil en vertical: barra abajo con las cinco secciones ("Salir" está en
 *   Inicio, porque seis no caben en un móvil estrecho);
 * - tablet en vertical o móvil en horizontal: una columna estrecha de iconos;
 * - tablet en horizontal y ordenador: la columna ancha con los nombres al lado.
 */
export function StudentNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { signOutUser } = useAuth();

  return (
    <nav className="sticky bottom-0 z-10 flex border-t-[3px] border-white/60 bg-white/80 px-1 py-1.5 backdrop-blur-md sm:sticky sm:top-0 sm:h-dvh sm:w-24 sm:shrink-0 sm:flex-col sm:gap-1 sm:overflow-y-auto sm:border-r-[3px] sm:border-t-0 sm:px-2 sm:py-3 lg:w-56 lg:p-4 short:w-16 short:py-2">
      {links.map(({ href, label, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-clay px-1 py-1.5 font-display text-[11px] font-semibold transition-colors sm:flex-none sm:py-2 lg:flex-row lg:gap-3 lg:px-3 lg:text-sm ${
              active ? "bg-accent-soft text-accent" : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            <Icon size={24} weight={active ? "fill" : "regular"} aria-hidden="true" className="shrink-0" />
            <span className="max-w-full truncate short:sr-only">{label}</span>
          </Link>
        );
      })}

      <button
        onClick={async () => {
          await signOutUser();
          router.replace("/login");
        }}
        className="hidden cursor-pointer flex-col items-center gap-0.5 rounded-clay px-1 py-2 font-display text-[11px] font-semibold text-slate-400 transition-colors hover:bg-slate-50 sm:mt-auto sm:flex lg:flex-row lg:gap-3 lg:px-3 lg:text-sm"
      >
        <SignOut size={24} aria-hidden="true" className="shrink-0" />
        <span className="short:sr-only">Salir</span>
      </button>
    </nav>
  );
}
