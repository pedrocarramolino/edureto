import type { Subject } from "@/types";

export const subjects: Subject[] = [
  {
    id: "lengua",
    name: "Lengua",
    worldName: "Palabrópolis",
    color: "#e11d48",
    emoji: "📖",
    description: "Lectoescritura, comprensión lectora y ortografía.",
    topics: [
      "Lectoescritura",
      "Comprensión lectora",
      "Ortografía",
      "Gramática",
      "Vocabulario",
      "Expresión escrita",
    ],
  },
  {
    id: "matematicas",
    name: "Matemáticas",
    worldName: "Numeralia",
    color: "#2563eb",
    emoji: "🔢",
    description: "Cálculo, problemas y geometría.",
    topics: [
      "Sumas",
      "Restas",
      "Multiplicar",
      "Divisiones",
      "Números y operaciones",
      "Magnitudes y medidas",
      "Geometría",
      "Resolución de problemas",
    ],
  },
  {
    id: "ingles",
    name: "Inglés",
    worldName: "English Town",
    color: "#7c3aed",
    emoji: "🇬🇧",
    description: "Vocabulario, gramática y expresión oral.",
    topics: ["Vocabulario", "Frases simples", "Gramática", "Comprensión oral", "Verbos"],
  },
  {
    id: "ciencias_naturales",
    name: "Ciencias Naturales",
    worldName: "Bioaventura",
    color: "#16a34a",
    emoji: "🌱",
    description: "El cuerpo humano, animales, plantas y el medio ambiente.",
    topics: ["El cuerpo humano", "Animales", "Plantas", "Ecosistemas", "Materia y energía"],
  },
  {
    id: "ciencias_sociales",
    name: "Ciencias Sociales",
    worldName: "Exploralia",
    color: "#d97706",
    emoji: "🌍",
    description: "Geografía, historia y sociedad.",
    topics: ["Geografía de España", "Mapas", "Historia", "Sociedad", "Culturas del mundo"],
  },
  {
    id: "logica",
    name: "Lógica",
    worldName: "CerebroLab",
    color: "#0891b2",
    emoji: "🧠",
    description: "Razonamiento, series y resolución de problemas.",
    topics: ["Series", "Razonamiento", "Puzles", "Memoria", "Resolución de problemas"],
  },
];

export function getSubject(id: string) {
  return subjects.find((s) => s.id === id);
}
