"use client";

import { useState } from "react";
import type { DragDropActivity } from "@/types";
import { Button } from "@/components/ui/Button";

export function DragDropGame({
  activity,
  onComplete,
}: {
  activity: DragDropActivity;
  onComplete: (correct: boolean) => void;
}) {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const unplacedItems = activity.items.filter((item) => !(item.id in placements));
  const allPlaced = unplacedItems.length === 0;

  function placeItem(itemId: string, zoneId: string) {
    setPlacements((prev) => ({ ...prev, [itemId]: zoneId }));
  }

  function isCorrectPlacement(itemId: string) {
    const item = activity.items.find((i) => i.id === itemId);
    return item ? placements[itemId] === item.targetZoneId : false;
  }

  const allCorrect = activity.items.every((item) => isCorrectPlacement(item.id));

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">{activity.instructions}</p>

      <div className="flex flex-wrap gap-2">
        {unplacedItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`min-h-11 cursor-pointer rounded-clay border-[3px] px-4 py-2 font-medium transition-colors ${
              activeItem === item.id
                ? "border-primary bg-primary-soft text-primary"
                : "border-slate-300 bg-white text-slate-700 hover:border-primary/40"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {activity.zones.map((zone) => {
          const placedItems = activity.items.filter((i) => placements[i.id] === zone.id);
          return (
            <button
              key={zone.id}
              onClick={() => activeItem && placeItem(activeItem, zone.id)}
              className="min-h-28 cursor-pointer rounded-clay border-[3px] border-dashed border-slate-300 p-3 text-left transition-colors hover:border-primary/40"
            >
              <p className="mb-2 text-xs font-semibold uppercase text-slate-500">{zone.label}</p>
              <div className="flex flex-wrap gap-2">
                {placedItems.map((item) => (
                  <span
                    key={item.id}
                    className={`rounded-lg px-2 py-1 text-xs font-medium ${
                      checked
                        ? isCorrectPlacement(item.id)
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {!checked ? (
        <Button variant="clay" disabled={!allPlaced} onClick={() => setChecked(true)}>
          Comprobar
        </Button>
      ) : (
        <Button variant="clay" onClick={() => onComplete(allCorrect)}>
          Continuar
        </Button>
      )}
    </div>
  );
}
