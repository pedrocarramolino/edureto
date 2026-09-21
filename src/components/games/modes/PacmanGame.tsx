"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ActivityResult, MultipleChoiceActivity } from "@/types";
import { Button } from "@/components/ui/Button";
import { letters, needsLetters, type GameModeProps } from "@/components/games/modes/PenaltyGame";

const MAZE = [
  "###############",
  "#.....#.#.....#",
  "#.###.#.#.###.#",
  "#.#...........#",
  "#.#.###.###.#.#",
  "#...#.....#...#",
  "###.#.###.#.###",
  "#...#.....#...#",
  "#.#.###.###.#.#",
  "#.#...........#",
  "#.###.#.#.###.#",
  "#.....#.#.....#",
  "###############",
];

const COLS = MAZE[0].length;
const ROWS = MAZE.length;
const TICK_MS = 190;
const LIVES = 3;

const PAC_START = { x: 7, y: 3 };
const GHOST_STARTS = [
  { x: 1, y: 1 },
  { x: 13, y: 11 },
  { x: 1, y: 11 },
];

interface Pos {
  x: number;
  y: number;
}

interface Answer extends Pos {
  value: string;
  correct: boolean;
}

type Dir = "up" | "down" | "left" | "right" | null;

const moves: Record<Exclude<Dir, null>, Pos> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

function isWall(x: number, y: number): boolean {
  if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return true;
  return MAZE[y][x] === "#";
}

const openCells: Pos[] = MAZE.flatMap((row, y) =>
  [...row].map((cell, x) => ({ cell, x, y })).filter(({ cell }) => cell === ".").map(({ x, y }) => ({ x, y })),
);

function distance(a: Pos, b: Pos): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

/** Spreads the four options around the maze, away from where Pac-Man starts. */
function placeAnswers(question: MultipleChoiceActivity): Answer[] {
  const taken: Pos[] = [];
  return question.options.map((value, index) => {
    const candidates = openCells.filter(
      (cell) =>
        distance(cell, PAC_START) > 3 &&
        taken.every((used) => distance(used, cell) > 3) &&
        GHOST_STARTS.every((ghost) => distance(ghost, cell) > 1),
    );
    const pool = candidates.length > 0 ? candidates : openCells;
    const cell = pool[Math.floor(Math.random() * pool.length)];
    taken.push(cell);
    return { ...cell, value, correct: index === question.correctIndex };
  });
}

interface State {
  pac: Pos;
  dir: Dir;
  ghosts: Pos[];
  answers: Answer[];
  questionIndex: number;
  correctCount: number;
  lives: number;
  status: "playing" | "caught" | "over";
  flash: { text: string; good: boolean } | null;
}

function moveGhost(ghost: Pos, pac: Pos): Pos {
  const options = (Object.keys(moves) as Exclude<Dir, null>[])
    .map((key) => ({ ...moves[key] }))
    .map((step) => ({ x: ghost.x + step.x, y: ghost.y + step.y }))
    .filter((cell) => !isWall(cell.x, cell.y));
  if (options.length === 0) return ghost;
  // Mostly chases, sometimes wanders: a ghost that always takes the shortest
  // path is impossible to shake off.
  if (Math.random() < 0.3) return options[Math.floor(Math.random() * options.length)];
  return options.reduce((best, cell) => (distance(cell, pac) < distance(best, pac) ? cell : best));
}

export function PacmanGame({ questions, onComplete }: GameModeProps) {
  const [state, setState] = useState<State | null>(null);
  const dirRef = useRef<Dir>(null);

  const start = useCallback(() => {
    dirRef.current = null;
    setState({
      pac: { ...PAC_START },
      dir: null,
      ghosts: GHOST_STARTS.map((ghost) => ({ ...ghost })),
      answers: placeAnswers(questions[0]),
      questionIndex: 0,
      correctCount: 0,
      lives: LIVES,
      status: "playing",
      flash: null,
    });
  }, [questions]);

  const steer = useCallback((dir: Exclude<Dir, null>) => {
    dirRef.current = dir;
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const keys: Record<string, Exclude<Dir, null>> = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
        w: "up",
        s: "down",
        a: "left",
        d: "right",
      };
      const dir = keys[event.key];
      if (!dir) return;
      event.preventDefault();
      steer(dir);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [steer]);

  useEffect(() => {
    if (state?.status !== "playing") return;
    const timer = setInterval(() => {
      setState((current) => {
        if (!current || current.status !== "playing") return current;
        let { pac, ghosts, answers, questionIndex, correctCount, lives, flash } = current;
        const dir = dirRef.current;

        if (dir) {
          const next = { x: pac.x + moves[dir].x, y: pac.y + moves[dir].y };
          if (!isWall(next.x, next.y)) pac = next;
        }

        const eaten = answers.find((a) => a.x === pac.x && a.y === pac.y);
        if (eaten) {
          const isLast = questionIndex + 1 >= questions.length;
          if (eaten.correct) correctCount += 1;
          flash = eaten.correct
            ? { text: "¡Bien! " + eaten.value, good: true }
            : { text: `Esa no: ${eaten.value}`, good: false };
          if (isLast) {
            return { ...current, pac, correctCount, questionIndex: questions.length, status: "over", flash };
          }
          questionIndex += 1;
          answers = placeAnswers(questions[questionIndex]);
          pac = { ...PAC_START };
          ghosts = GHOST_STARTS.map((ghost) => ({ ...ghost }));
          dirRef.current = null;
          return { ...current, pac, ghosts, answers, questionIndex, correctCount, flash };
        }

        ghosts = ghosts.map((ghost) => moveGhost(ghost, pac));

        if (ghosts.some((ghost) => ghost.x === pac.x && ghost.y === pac.y)) {
          lives -= 1;
          dirRef.current = null;
          return {
            ...current,
            pac: { ...PAC_START },
            ghosts: GHOST_STARTS.map((ghost) => ({ ...ghost })),
            lives,
            status: lives <= 0 ? "over" : "caught",
            flash: { text: lives <= 0 ? "¡Te han pillado!" : "¡Cuidado, te han pillado!", good: false },
          };
        }

        return { ...current, pac, ghosts, dir, flash };
      });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [state?.status, questions]);

  if (!state) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          👾
        </p>
        <p className="font-display text-lg font-bold text-slate-800">Comecocos</p>
        <p className="mx-auto max-w-sm text-sm text-slate-500">
          Muévete por el laberinto y cómete la respuesta correcta antes de que te pillen los
          fantasmas. Tienes {LIVES} vidas. Con las flechas del teclado o los botones de abajo.
        </p>
        <Button variant="clay" onClick={start}>
          Empezar
        </Button>
      </div>
    );
  }

  if (state.status === "over") {
    const won = state.correctCount === questions.length;
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          {won ? "🏆" : state.lives <= 0 ? "👻" : "👾"}
        </p>
        <p className="font-display text-xl font-bold text-slate-800">
          {state.correctCount} de {questions.length} respuestas correctas
        </p>
        {state.lives <= 0 && (
          <p className="text-sm text-slate-500">Te quedaste sin vidas, pero lo jugado cuenta.</p>
        )}
        <Button
          variant="clay"
          onClick={() =>
            onComplete({
              correct: won,
              correctCount: state.correctCount,
              totalCount: questions.length,
            } satisfies ActivityResult)
          }
        >
          Continuar
        </Button>
      </div>
    );
  }

  const question = questions[state.questionIndex];
  const byLetter = needsLetters(question.options);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between font-display text-sm font-bold text-slate-500">
        <span>
          Pregunta {state.questionIndex + 1} de {questions.length}
        </span>
        <span aria-label={`${state.lives} vidas`}>{"❤️".repeat(state.lives)}</span>
      </div>

      <p className="text-center font-display text-lg font-bold text-slate-800">
        {question.question}
      </p>

      <div className="relative w-full overflow-hidden rounded-clay bg-slate-900 p-1" style={{ aspectRatio: `${COLS} / ${ROWS}` }}>
        <div
          className="grid h-full w-full"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
        >
          {MAZE.flatMap((row, y) =>
            [...row].map((cell, x) => (
              <div
                key={`${x}-${y}`}
                className={cell === "#" ? "rounded-[2px] bg-indigo-600" : "bg-transparent"}
              />
            )),
          )}
        </div>

        {state.answers.map((answer) => (
          <span
            key={answer.value}
            className="absolute flex items-center justify-center rounded-full bg-amber-300 font-display text-[10px] font-bold text-slate-900 sm:text-sm"
            style={{
              left: `${(answer.x / COLS) * 100}%`,
              top: `${(answer.y / ROWS) * 100}%`,
              width: `${100 / COLS}%`,
              height: `${100 / ROWS}%`,
            }}
          >
            {byLetter ? letters[question.options.indexOf(answer.value)] : answer.value}
          </span>
        ))}

        {state.ghosts.map((ghost, index) => (
          <span
            key={index}
            className="absolute flex items-center justify-center text-[11px] transition-all duration-150 sm:text-lg"
            style={{
              left: `${(ghost.x / COLS) * 100}%`,
              top: `${(ghost.y / ROWS) * 100}%`,
              width: `${100 / COLS}%`,
              height: `${100 / ROWS}%`,
            }}
            aria-hidden="true"
          >
            👻
          </span>
        ))}

        <span
          className="absolute flex items-center justify-center text-[11px] transition-all duration-150 sm:text-lg"
          style={{
            left: `${(state.pac.x / COLS) * 100}%`,
            top: `${(state.pac.y / ROWS) * 100}%`,
            width: `${100 / COLS}%`,
            height: `${100 / ROWS}%`,
          }}
          aria-hidden="true"
        >
          🟡
        </span>
      </div>

      {byLetter && (
        <ul className="space-y-1 text-sm text-slate-600">
          {question.options.map((option, optionIndex) => (
            <li key={option} className="flex gap-2">
              <span className="font-display font-bold text-slate-400">{letters[optionIndex]}</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}

      <div aria-live="polite" className="min-h-6 text-center text-sm font-semibold">
        {state.flash && (
          <span className={state.flash.good ? "text-emerald-600" : "text-rose-600"}>
            {state.flash.text}
          </span>
        )}
      </div>

      {state.status === "caught" ? (
        <div className="flex justify-center">
          <Button
            variant="clay"
            onClick={() => setState((s) => (s ? { ...s, status: "playing", flash: null } : s))}
          >
            Seguir jugando
          </Button>
        </div>
      ) : (
        <div className="mx-auto grid w-40 grid-cols-3 gap-1">
          <span />
          <Button variant="clay-secondary" className="!px-0 !py-2" onClick={() => steer("up")} aria-label="Arriba">
            ▲
          </Button>
          <span />
          <Button variant="clay-secondary" className="!px-0 !py-2" onClick={() => steer("left")} aria-label="Izquierda">
            ◀
          </Button>
          <span />
          <Button variant="clay-secondary" className="!px-0 !py-2" onClick={() => steer("right")} aria-label="Derecha">
            ▶
          </Button>
          <span />
          <Button variant="clay-secondary" className="!px-0 !py-2" onClick={() => steer("down")} aria-label="Abajo">
            ▼
          </Button>
          <span />
        </div>
      )}
    </div>
  );
}
