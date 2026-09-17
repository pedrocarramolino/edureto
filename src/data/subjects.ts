import type { Subject } from "@/types";

export const subjects: Subject[] = [
  {
    id: "lengua",
    name: "Lengua",
    worldName: "Palabrópolis",
    color: "#e11d48",
    emoji: "📖",
    description: "Lectoescritura, comprensión lectora y ortografía.",
  },
  {
    id: "matematicas",
    name: "Matemáticas",
    worldName: "Numeralia",
    color: "#2563eb",
    emoji: "🔢",
    description: "Cálculo, problemas y geometría.",
  },
  {
    id: "ingles",
    name: "Inglés",
    worldName: "English Town",
    color: "#7c3aed",
    emoji: "🇬🇧",
    description: "Vocabulario, gramática y expresión oral.",
  },
  {
    id: "ciencias_naturales",
    name: "Ciencias Naturales",
    worldName: "Bioaventura",
    color: "#16a34a",
    emoji: "🌱",
    description: "El cuerpo humano, animales, plantas y el medio ambiente.",
  },
  {
    id: "ciencias_sociales",
    name: "Ciencias Sociales",
    worldName: "Exploralia",
    color: "#d97706",
    emoji: "🌍",
    description: "Geografía, historia y sociedad.",
  },
  {
    id: "logica",
    name: "Lógica",
    worldName: "CerebroLab",
    color: "#0891b2",
    emoji: "🧠",
    description: "Razonamiento, series y resolución de problemas.",
  },
];

export function getSubject(id: string) {
  return subjects.find((s) => s.id === id);
}
