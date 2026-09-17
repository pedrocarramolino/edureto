import type { ReactNode } from "react";

const variantStyles = {
  default: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
  clay: "rounded-clay border-[3px] border-black/5 bg-white p-5 shadow-clay-sm",
};

export function Card({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantStyles;
}) {
  return <div className={`${variantStyles[variant]} ${className}`}>{children}</div>;
}
