"use client";

import { useRef, useState } from "react";
import type { ActivityResult, MultipleChoiceActivity } from "@/types";
import { shuffle } from "@/lib/shuffle";
import { Button } from "@/components/ui/Button";
import type { GameModeProps } from "@/components/games/modes/PenaltyGame";

const MAX_PAIRS = 6;
/** Beyond this, a card holds a sentence rather than a word or a number. */
const LONG_TEXT = 40;
const BACK_COLORS = ["#4f46e5", "#ea580c", "#16a34a", "#0891b2", "#db2777", "#ca8a04"];

interface Card {
  key: string;
  pair: number;
  kind: "pregunta" | "respuesta";
  text: string;
}

/**
 * Deals the deck. With long texts — ESO questions can be a whole sentence —
 * it deals fewer, wider cards, so nothing ends up cramped.
 */
function buildDeck(questions: MultipleChoiceActivity[]): { cards: Card[]; compact: boolean } {
  const sample = shuffle(questions).slice(0, MAX_PAIRS);
  const longest = Math.max(
    ...sample.flatMap((q) => [q.question.length, q.options[q.correctIndex].length]),
  );
  const compact = longest <= LONG_TEXT;
  const chosen = compact ? sample : sample.slice(0, 4);
  const cards = chosen.flatMap((q, pair) => [
    { key: `q-${pair}`, pair, kind: "pregunta" as const, text: q.question },
    { key: `a-${pair}`, pair, kind: "respuesta" as const, text: q.options[q.correctIndex] },
  ]);
  return { cards: shuffle(cards), compact };
}

export function PairsGame({ questions, onComplete }: GameModeProps) {
  const [{ cards, compact }] = useState(() => buildDeck(questions));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [failedPairs, setFailedPairs] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const locked = useRef(false);

  const pairs = cards.length / 2;
  const finished = matched.length === cards.length;

  function flip(index: number) {
    if (locked.current || flipped.includes(index) || matched.includes(index)) return;

    const next = [...flipped, index];
    setFlipped(next);
    if (next.length < 2) return;

    setAttempts((previous) => previous + 1);
    const [first, second] = next.map((i) => cards[i]);

    if (first.pair === second.pair && first.kind !== second.kind) {
      setMatched((previous) => [...previous, ...next]);
      setFlipped([]);
      return;
    }

    // A wrong try marks both questions, so the score reflects what the
    // student knew, not only that they ended up turning every card over.
    setFailedPairs((previous) => [...new Set([...previous, first.pair, second.pair])]);
    locked.current = true;
    setTimeout(() => {
      setFlipped([]);
      locked.current = false;
    }, 1100);
  }

  if (finished) {
    const correctCount = pairs - failedPairs.length;
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {correctCount === pairs ? "🏆" : "🃏"}
        </p>
        <p className="font-display text-xl font-bold text-slate-800">
          ¡Todas las parejas encontradas!
        </p>
        <p className="text-sm text-slate-500">
          {correctCount} de {pairs} a la primera · {attempts} intentos
        </p>
        <Button
          variant="clay"
          onClick={() =>
            onComplete({
              correct: correctCount === pairs,
              correctCount,
              totalCount: pairs,
            } satisfies ActivityResult)
          }
        >
          Continuar
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-display text-sm font-bold text-slate-500">
        <span>
          Parejas {matched.length / 2} de {pairs}
        </span>
        <span className="text-accent">🃏 {attempts} intentos</span>
      </div>

      <p className="text-center text-sm text-slate-500">
        Busca cada pregunta y su respuesta correcta.
      </p>

      <div
        className={`grid gap-2 sm:gap-3 ${
          compact ? "grid-cols-3 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-4"
        }`}
      >
        {cards.map((card, index) => {
          const isUp = flipped.includes(index) || matched.includes(index);
          const isMatched = matched.includes(index);
          return (
            <button
              key={card.key}
              onClick={() => flip(index)}
              disabled={isMatched}
              aria-label={isUp ? `${card.kind}: ${card.text}` : "Carta boca abajo"}
              className={`flex cursor-pointer items-center justify-center overflow-hidden rounded-clay border-[3px] p-2 text-center font-semibold leading-tight break-words transition-all duration-200 disabled:cursor-default ${
                compact ? "min-h-24 text-xs sm:min-h-28 sm:text-sm" : "min-h-32 text-[11px] sm:min-h-36 sm:text-xs"
              } ${
                isMatched
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                  : isUp
                    ? "scale-105 border-slate-300 bg-white text-slate-800"
                    : "border-black/10 text-white shadow-clay-sm hover:brightness-110"
              }`}
              style={isUp ? undefined : { backgroundColor: BACK_COLORS[index % BACK_COLORS.length] }}
            >
              {isUp ? (
                <span>
                  {card.kind === "pregunta" && (
                    <span className="mb-1 block text-[10px] font-bold uppercase text-slate-400">
                      Pregunta
                    </span>
                  )}
                  {card.text}
                </span>
              ) : (
                <span className="text-2xl" aria-hidden="true">
                  ?
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
