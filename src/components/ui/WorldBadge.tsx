import type { Subject } from "@/types";

const sizes = {
  sm: "h-10 w-10 text-lg border-2",
  md: "h-14 w-14 text-2xl border-[3px]",
  lg: "h-20 w-20 text-4xl border-[3px]",
} as const;

export function WorldBadge({
  subject,
  size = "md",
  onColor = false,
}: {
  subject: Subject;
  size?: keyof typeof sizes;
  /** Set when placed on a surface already tinted with subject.color, so the badge stays visible. */
  onColor?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={subject.worldName}
      className={`flex shrink-0 items-center justify-center rounded-clay shadow-clay-sm ${sizes[size]} ${
        onColor ? "border-white/70 bg-white/25" : "border-white/50"
      }`}
      style={onColor ? undefined : { backgroundColor: subject.color }}
    >
      <span aria-hidden="true">{subject.emoji}</span>
    </div>
  );
}
