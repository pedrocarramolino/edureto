import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "clay" | "clay-secondary";

const variantStyles: Record<Variant, string> = {
  primary: "rounded-xl px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-indigo-700",
  secondary: "rounded-xl px-4 py-2 text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200",
  ghost: "rounded-xl px-4 py-2 text-sm font-medium bg-transparent text-slate-600 hover:bg-slate-100",
  clay: "rounded-clay px-6 py-3 text-base font-display font-semibold border-[3px] border-orange-700/20 bg-accent text-accent-foreground shadow-clay-sm hover:brightness-105 active:translate-y-[3px] active:shadow-clay-pressed",
  "clay-secondary":
    "rounded-clay px-6 py-3 text-base font-display font-semibold border-[3px] border-slate-300 bg-white text-slate-700 shadow-clay-sm hover:bg-slate-50 active:translate-y-[3px] active:shadow-clay-pressed",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`cursor-pointer transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
