import type { Activity } from "@/types";
import { getActivity } from "@/data/activities";
import { Check, X } from "@phosphor-icons/react/ssr";

export function ActivityAnswerKey({ activity }: { activity: Activity }) {
  switch (activity.type) {
    case "multiple_choice":
      return (
        <div className="space-y-3">
          <p className="font-medium text-slate-800">{activity.question}</p>
          <ul className="space-y-1.5">
            {activity.options.map((option, index) => {
              const isCorrect = index === activity.correctIndex;
              return (
                <li
                  key={option}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                    isCorrect
                      ? "border-emerald-300 bg-emerald-50 font-semibold text-emerald-800"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {isCorrect ? (
                    <Check size={16} weight="bold" className="text-emerald-600" aria-hidden="true" />
                  ) : (
                    <span className="w-4" aria-hidden="true" />
                  )}
                  {option}
                </li>
              );
            })}
          </ul>
          {activity.explanation && <p className="text-sm text-slate-500">{activity.explanation}</p>}
        </div>
      );

    case "drag_drop":
      return (
        <div className="space-y-3">
          <p className="text-sm text-slate-600">{activity.instructions}</p>
          <ul className="space-y-1.5">
            {activity.items.map((item) => {
              const zone = activity.zones.find((z) => z.id === item.targetZoneId);
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-800">{item.label}</span>
                  <span className="text-slate-500">→ {zone?.label ?? "?"}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );

    case "build_answer":
      return (
        <div className="space-y-3">
          <p className="text-sm text-slate-600">{activity.instructions}</p>
          <p className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">
            {activity.correctOrder.join(" ")}
          </p>
        </div>
      );

    case "open_response":
      return (
        <div className="space-y-2">
          <p className="font-medium text-slate-800">{activity.prompt}</p>
          <p className="text-sm text-slate-500">{activity.guidance}</p>
          <p className="flex items-center gap-1.5 text-xs text-amber-600">
            <X size={14} weight="bold" aria-hidden="true" />
            Respuesta abierta: no tiene solución fija, la corriges tú.
          </p>
        </div>
      );

    case "mission":
      return (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">{activity.narrative}</p>
          <div className="space-y-4">
            {activity.steps.map((step, index) => {
              const stepActivity = getActivity(step.activityId);
              return (
                <div key={step.id} className="rounded-xl border border-slate-100 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase text-slate-400">
                    Paso {index + 1} · {step.label}
                  </p>
                  {stepActivity ? (
                    <ActivityAnswerKey activity={stepActivity} />
                  ) : (
                    <p className="text-sm text-rose-600">No se encontró esta actividad.</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
  }
}
