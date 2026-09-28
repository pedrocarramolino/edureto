"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import type { ActivityResult, MultipleChoiceActivity } from "@/types";
import { Button } from "@/components/ui/Button";
import { HuecoTablero } from "@/components/games/MarcoDeJuego";
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
/** Los fantasmas se mueven una de cada dos vueltas: la mitad de rápido que tú. */
const GHOST_EVERY = 2;
/** Vueltas de margen al empezar y tras cada vida, para colocarse sin agobios. */
const GRACE_TICKS = 12;
/** Lo que hay que arrastrar el dedo para que cuente como deslizar y no como toque. */
const SWIPE_PX = 18;

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

type Dir = "up" | "down" | "left" | "right";

const moves: Record<Dir, Pos> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

/** Hacia dónde mira la boca del comecocos. */
const facing: Record<Dir, string> = {
  right: "none",
  left: "scaleX(-1)",
  up: "rotate(-90deg)",
  down: "rotate(90deg)",
};

function isWall(x: number, y: number): boolean {
  if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return true;
  return MAZE[y][x] === "#";
}

function canGo(from: Pos, dir: Dir): boolean {
  return !isWall(from.x + moves[dir].x, from.y + moves[dir].y);
}

const openCells: Pos[] = MAZE.flatMap((row, y) =>
  [...row].map((cell, x) => ({ cell, x, y })).filter(({ cell }) => cell === ".").map(({ x, y }) => ({ x, y })),
);

/** Las paredes no cambian nunca: se dibujan una vez, de una pieza y sin rendijas. */
const WALLS = (
  <svg
    viewBox={`0 0 ${COLS} ${ROWS}`}
    preserveAspectRatio="none"
    className="absolute inset-0 h-full w-full"
    aria-hidden="true"
  >
    {MAZE.flatMap((row, y) =>
      [...row].map((cell, x) =>
        cell === "#" ? (
          <rect key={`${x}-${y}`} x={x} y={y} width={1.04} height={1.04} fill="#4f46e5" />
        ) : null,
      ),
    )}
  </svg>
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
  /** Vueltas de reloj desde que empezó esta vida. */
  tick: number;
  pac: Pos;
  /** Hacia dónde anda ahora; null mientras está parado. */
  dir: Dir | null;
  ghosts: Pos[];
  answers: Answer[];
  questionIndex: number;
  correctCount: number;
  /** True once a wrong pellet has been eaten on the current question. */
  missed: boolean;
  lives: number;
  status: "playing" | "caught" | "over";
  flash: { text: string; good: boolean } | null;
}

function moveGhost(ghost: Pos, pac: Pos): Pos {
  const options = (Object.keys(moves) as Dir[])
    .map((key) => ({ x: ghost.x + moves[key].x, y: ghost.y + moves[key].y }))
    .filter((cell) => !isWall(cell.x, cell.y));
  if (options.length === 0) return ghost;
  // Mostly chases, sometimes wanders: a ghost that always takes the shortest
  // path is impossible to shake off.
  if (Math.random() < 0.3) return options[Math.floor(Math.random() * options.length)];
  return options.reduce((best, cell) => (distance(cell, pac) < distance(best, pac) ? cell : best));
}

/** Lo que ocupa una casilla, en porcentaje del tablero. */
function cellBox(pos: Pos) {
  return {
    left: `${(pos.x / COLS) * 100}%`,
    top: `${(pos.y / ROWS) * 100}%`,
    width: `${100 / COLS}%`,
    height: `${100 / ROWS}%`,
  };
}

export function PacmanGame({ questions, onComplete }: GameModeProps) {
  const [state, setState] = useState<State | null>(null);
  /** La dirección que ha pedido el jugador; se toma en cuanto el pasillo lo deja. */
  const wantedRef = useRef<Dir | null>(null);
  const touchRef = useRef<{ x: number; y: number; swiped: boolean } | null>(null);
  const mazeRef = useRef<HTMLDivElement>(null);

  const start = useCallback(() => {
    wantedRef.current = null;
    setState({
      tick: 0,
      pac: { ...PAC_START },
      dir: null,
      ghosts: GHOST_STARTS.map((ghost) => ({ ...ghost })),
      answers: placeAnswers(questions[0]),
      questionIndex: 0,
      correctCount: 0,
      missed: false,
      lives: LIVES,
      status: "playing",
      flash: null,
    });
  }, [questions]);

  const steer = useCallback((dir: Dir) => {
    wantedRef.current = dir;
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const keys: Record<string, Dir> = {
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
        const { answers } = current;
        let { pac, ghosts, questionIndex, correctCount, lives, flash, dir } = current;
        const tick = current.tick + 1;

        // Como en el comecocos de verdad: el giro que se pide antes de llegar
        // al cruce se guarda y se hace al llegar, y mientras tanto se sigue
        // recto. Antes, pedir un giro contra una pared lo dejaba clavado.
        const wanted = wantedRef.current;
        if (wanted && canGo(pac, wanted)) dir = wanted;
        if (dir && canGo(pac, dir)) pac = { x: pac.x + moves[dir].x, y: pac.y + moves[dir].y };

        const eaten = answers.find((a) => a.x === pac.x && a.y === pac.y);
        if (eaten && !eaten.correct) {
          // Crossing a wrong answer must not cost the whole question: the
          // pellet disappears, the question counts as failed and the student
          // keeps looking for the right one.
          return {
            ...current,
            tick,
            pac,
            dir,
            answers: answers.filter((a) => a !== eaten),
            missed: true,
            flash: { text: `Esa no: ${eaten.value}`, good: false },
          };
        }
        if (eaten) {
          const isLast = questionIndex + 1 >= questions.length;
          if (!current.missed) correctCount += 1;
          flash = { text: "¡Bien! " + eaten.value, good: true };
          if (isLast) {
            return { ...current, tick, pac, dir, correctCount, questionIndex: questions.length, status: "over", flash };
          }
          questionIndex += 1;
          wantedRef.current = null;
          return {
            ...current,
            tick: 0,
            pac: { ...PAC_START },
            dir: null,
            ghosts: GHOST_STARTS.map((ghost) => ({ ...ghost })),
            answers: placeAnswers(questions[questionIndex]),
            questionIndex,
            correctCount,
            missed: false,
            flash,
          };
        }

        // Los fantasmas esperan al principio y luego van a media velocidad. Si
        // salen a por ti desde el primer instante y corren tanto como tú, con
        // los botones de una tablet no hay forma de escapar.
        if (tick > GRACE_TICKS && tick % GHOST_EVERY === 0) {
          ghosts = ghosts.map((ghost) => moveGhost(ghost, pac));
        }

        if (ghosts.some((ghost) => ghost.x === pac.x && ghost.y === pac.y)) {
          lives -= 1;
          wantedRef.current = null;
          return {
            ...current,
            tick: 0,
            pac: { ...PAC_START },
            dir: null,
            ghosts: GHOST_STARTS.map((ghost) => ({ ...ghost })),
            lives,
            status: lives <= 0 ? "over" : "caught",
            flash: { text: lives <= 0 ? "¡Te han pillado!" : "¡Cuidado, te han pillado!", good: false },
          };
        }

        return { ...current, tick, pac, ghosts, dir, flash };
      });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [state?.status, questions]);

  const atrapado = state?.status === "caught";
  useEffect(() => {
    if (!atrapado) return;
    const reanudar = setTimeout(
      () => setState((s) => (s ? { ...s, tick: 0, status: "playing", flash: null } : s)),
      1600,
    );
    return () => clearTimeout(reanudar);
  }, [atrapado]);

  // En una tablet se juega con el dedo sobre el laberinto: deslizar hacia un
  // lado lo manda hacia allí, y un toque lo manda hacia donde se ha tocado.
  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    touchRef.current = { x: event.clientX, y: event.clientY, swiped: false };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const touch = touchRef.current;
    if (!touch) return;
    const dx = event.clientX - touch.x;
    const dy = event.clientY - touch.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_PX) return;
    steer(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up");
    // Se vuelve a medir desde aquí, para poder encadenar giros sin levantar el dedo.
    touchRef.current = { x: event.clientX, y: event.clientY, swiped: true };
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const touch = touchRef.current;
    touchRef.current = null;
    const maze = mazeRef.current;
    if (!touch || touch.swiped || !maze || !state) return;
    const box = maze.getBoundingClientRect();
    const dx = ((event.clientX - box.left) / box.width) * COLS - (state.pac.x + 0.5);
    const dy = ((event.clientY - box.top) / box.height) * ROWS - (state.pac.y + 0.5);
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 0.5) return;
    steer(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up");
  }

  if (!state) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-5xl" aria-hidden="true">
          👾
        </p>
        <p className="font-display text-lg font-bold text-slate-800">Comecocos</p>
        <p className="mx-auto max-w-sm text-sm text-slate-500">
          Eres la bola amarilla con boca. Cómete la respuesta correcta antes de que te pillen los
          fantasmas; tienes {LIVES} vidas. Muévete deslizando el dedo por el laberinto, con los
          botones o con las flechas del teclado.
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
  const caught = state.status === "caught";

  return (
    <div data-tablero className="flex flex-1 flex-col gap-2 sm:gap-3 short:gap-1.5">
      <div className="flex items-center justify-between font-display text-sm font-bold text-slate-500">
        <span>
          Pregunta {state.questionIndex + 1} de {questions.length}
        </span>
        <span aria-label={`${state.lives} vidas`}>{"❤️".repeat(state.lives)}</span>
      </div>

      <p className="text-center font-display text-lg font-bold leading-snug text-slate-800 short:text-base">
        {question.question}
      </p>

      {byLetter && (
        <ul className="grid gap-x-4 gap-y-0.5 text-sm text-slate-600 sm:grid-cols-2">
          {question.options.map((option, optionIndex) => (
            <li key={option} className="flex gap-2">
              <span className="font-display font-bold text-slate-400">{letters[optionIndex]}</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}

      {/* En vertical, los botones van debajo del laberinto; en horizontal, al
          lado, que es donde queda sitio. */}
      <div className="flex min-h-0 flex-1 flex-col items-center gap-3 landscape:flex-row">
        <HuecoTablero proporcion={COLS / ROWS} className="min-h-44 landscape:self-stretch">
          <div
            ref={mazeRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              touchRef.current = null;
            }}
            className="absolute inset-0 touch-none select-none overflow-hidden rounded-xl bg-slate-900"
          >
            {WALLS}

            {state.answers.map((answer) => (
              <span
                key={answer.value}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full bg-amber-300 px-[0.4em] font-display font-bold leading-none text-slate-900 ring-2 ring-slate-900"
                style={{
                  left: `${((answer.x + 0.5) / COLS) * 100}%`,
                  top: `${((answer.y + 0.5) / ROWS) * 100}%`,
                  minWidth: `${(100 / COLS) * 0.9}%`,
                  height: `${(100 / ROWS) * 0.8}%`,
                  fontSize: "max(10px, 2.6cqw)",
                }}
              >
                {byLetter ? letters[question.options.indexOf(answer.value)] : answer.value}
              </span>
            ))}

            {state.ghosts.map((ghost, index) => (
              <span
                key={index}
                className="absolute flex items-center justify-center transition-all duration-150"
                style={{ ...cellBox(ghost), fontSize: "max(12px, 4.8cqw)" }}
                aria-hidden="true"
              >
                👻
              </span>
            ))}

            {/* El comecocos: con boca, mirando hacia donde anda, para que no se
                confunda con las bolas amarillas de las respuestas. */}
            <span
              className="absolute flex items-center justify-center transition-all duration-150"
              style={cellBox(state.pac)}
              aria-hidden="true"
            >
              <span
                className={`relative block h-[88%] w-[88%] rounded-full bg-yellow-300 shadow-[0_0_8px_rgba(253,224,71,.7)] ${
                  state.dir ? "animate-comer" : "[clip-path:polygon(0_0,100%_0,100%_22%,50%_50%,100%_78%,100%_100%,0_100%)]"
                }`}
                style={{ transform: facing[state.dir ?? "right"] }}
              >
                <span className="absolute left-[48%] top-[18%] h-[16%] w-[16%] rounded-full bg-slate-900" />
              </span>
            </span>

            <div
              aria-live="polite"
              className="pointer-events-none absolute inset-x-0 top-1.5 flex justify-center"
            >
              {state.flash && (
                <span
                  className={`rounded-full px-3 py-1 font-display text-sm font-bold text-white shadow ${
                    state.flash.good ? "bg-emerald-600" : "bg-rose-600"
                  }`}
                >
                  {state.flash.text}
                </span>
              )}
            </div>

            {caught && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/40">
                <span className="rounded-clay bg-white px-4 py-2 text-center font-display text-sm font-bold text-slate-700">
                  Vuelves a empezar en tu sitio…
                </span>
              </div>
            )}
          </div>
        </HuecoTablero>

        <DirectionPad onSteer={steer} disabled={caught} />
      </div>
    </div>
  );
}

const pad: { dir: Dir; label: string; symbol: string; area: string }[] = [
  { dir: "up", label: "Arriba", symbol: "▲", area: "col-start-2 row-start-1" },
  { dir: "left", label: "Izquierda", symbol: "◀", area: "col-start-1 row-start-2" },
  { dir: "right", label: "Derecha", symbol: "▶", area: "col-start-3 row-start-2" },
  { dir: "down", label: "Abajo", symbol: "▼", area: "col-start-2 row-start-3" },
];

/**
 * La cruceta. Responde al apoyar el dedo, no al levantarlo: en un juego que
 * va a trompicones de 190 ms, esperar al clic hace que el giro llegue tarde.
 */
function DirectionPad({ onSteer, disabled }: { onSteer: (dir: Dir) => void; disabled: boolean }) {
  return (
    <div className="grid shrink-0 grid-cols-3 grid-rows-3 gap-1.5 select-none">
      {pad.map(({ dir, label, symbol, area }) => (
        <button
          key={dir}
          type="button"
          aria-label={label}
          disabled={disabled}
          onPointerDown={(event) => {
            event.preventDefault();
            onSteer(dir);
          }}
          onClick={() => onSteer(dir)}
          className={`${area} flex size-12 cursor-pointer items-center justify-center rounded-2xl border-[3px] border-slate-300 bg-white text-lg text-slate-700 shadow-clay-sm transition-transform active:translate-y-[3px] active:shadow-clay-pressed disabled:opacity-40 sm:size-16 sm:text-xl short:size-12`}
        >
          {symbol}
        </button>
      ))}
    </div>
  );
}
