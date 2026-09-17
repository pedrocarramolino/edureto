import type { CSSProperties, ReactNode } from "react";

const variantStyles = {
  default: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
  clay: "rounded-clay border-[3px] border-black/5 bg-white p-5 shadow-clay-sm",
};

export function Card({
  children,
  className = "",
  variant = "default",
  style,
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantStyles;
  style?: CSSProperties;
}) {
  return (
    <div className={`${variantStyles[variant]} ${className}`} style={style}>
      {children}
    </div>
  );
}
