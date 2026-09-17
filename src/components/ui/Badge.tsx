import type { SkillStatus } from "@/types";

const statusStyles: Record<SkillStatus, string> = {
  necesita_practicar: "bg-rose-100 text-rose-700",
  en_progreso: "bg-amber-100 text-amber-700",
  consolidado: "bg-emerald-100 text-emerald-700",
};

const statusLabels: Record<SkillStatus, string> = {
  necesita_practicar: "Necesita practicar",
  en_progreso: "En progreso",
  consolidado: "Consolidado",
};

export function StatusBadge({ status }: { status: SkillStatus }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}
