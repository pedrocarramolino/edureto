import type { Stage } from "@/types";

export const stageOptions: { value: Stage; label: string }[] = [
  { value: "infantil", label: "Infantil (3-5 años)" },
  { value: "primaria_inicial", label: "Primaria 1º-3º (6-8 años)" },
  { value: "primaria_superior", label: "Primaria 4º-6º (9-11 años)" },
  { value: "eso", label: "ESO 1º-4º (12-15 años)" },
];

export function stageLabel(stage: Stage): string {
  return stageOptions.find((option) => option.value === stage)?.label ?? stage;
}

/**
 * Ages that make sense for each stage, with a year of slack at both ends so a
 * child who repeats or who started early still fits.
 */
const stageAgeRanges: Record<Stage, { min: number; max: number }> = {
  infantil: { min: 3, max: 7 },
  primaria_inicial: { min: 6, max: 10 },
  primaria_superior: { min: 9, max: 13 },
  eso: { min: 11, max: 18 },
};

/** The course a child of this age is normally in. */
export function suggestedStage(age: number): Stage {
  if (age < 6) return "infantil";
  if (age < 9) return "primaria_inicial";
  if (age < 12) return "primaria_superior";
  return "eso";
}

export function stageFitsAge(stage: Stage, age: number): boolean {
  const range = stageAgeRanges[stage];
  return age >= range.min && age <= range.max;
}
