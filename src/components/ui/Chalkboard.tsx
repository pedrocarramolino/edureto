import type { ReactNode } from "react";

export function Chalkboard({
  title,
  children,
  className = "",
  level = "h2",
}: {
  title: string;
  children?: ReactNode;
  className?: string;
  /** Use "h1" when this is the page's primary heading. */
  level?: "h1" | "h2";
}) {
  const Heading = level;
  return (
    <div
      className={`rounded-clay border-[6px] border-[color:var(--color-chalkboard-frame)] bg-[color:var(--color-chalkboard)] p-4 shadow-clay sm:border-8 sm:p-6 short:p-3 ${className}`}
    >
      <Heading className="font-chalk text-2xl text-white sm:text-3xl">{title}</Heading>
      {children && <div className="mt-2 font-chalk text-base text-white/80 sm:text-lg">{children}</div>}
    </div>
  );
}
