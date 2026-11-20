"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { SEATS, type Seat } from "@/lib/drill/preflop/seats";

/** Noam & Uri 2026-11-20: every exercise opens with a short scene of how we got to the spot, even
 * preflop: the table, the dealer button, the blinds posting, every action up to us, our seat lit.
 * We sit at the bottom; the seats go round the table in their real order. A tap skips. */

export type PreflopStory =
  | { modeKey: "rfi"; heroSeat: Seat }
  | { modeKey: "tb"; heroSeat: Seat; openerSeat: Seat }
  | { modeKey: "fb"; heroSeat: Seat; villainSeat: Seat }
  | { modeKey: "fv"; heroSeat: Seat; openerSeat: Seat };

type Ev = { seat: Seat; act: "post" | "fold" | "open" | "3bet" | "4bet"; text: string };

/** Positions round the oval, from the bottom (us) going clockwise. */
const SPOTS: [number, number][] = [
  [50, 90],
  [12, 70],
  [12, 28],
  [50, 9],
  [88, 28],
  [88, 70],
];
const ACT_TEXT: Record<Ev["act"], string> = { post: "", fold: "Fold", open: "Raise", "3bet": "3-bet", "4bet": "4-bet" };
const COLOR: Record<Ev["act"], string> = { post: "#9DB4C4", fold: "#56626C", open: "#F2564B", "3bet": "#F2564B", "4bet": "#F2564B" };

/** The seats acting between two seats (both left out), in preflop order UTG → BB; from null = from UTG. */
function between(from: Seat | null, to: Seat): Seat[] {
  return SEATS.slice(from ? SEATS.indexOf(from) + 1 : 0, SEATS.indexOf(to));
}

function storyOf(s: PreflopStory): { evs: Ev[]; caption: string } {
  const posts: Ev[] = [
    { seat: "SB", act: "post", text: "SB posts 0.5bb" },
    { seat: "BB", act: "post", text: "BB posts 1bb" },
  ];
  const folds = (xs: Seat[]): Ev[] => xs.map((seat) => ({ seat, act: "fold", text: `${seat} folds` }));
  if (s.modeKey === "rfi") return { evs: [...posts, ...folds(between(null, s.heroSeat))], caption: `Folded to you in the ${s.heroSeat}` };
  if (s.modeKey === "tb")
    return {
      evs: [...posts, ...folds(between(null, s.openerSeat)), { seat: s.openerSeat, act: "open", text: `${s.openerSeat} raises` }, ...folds(between(s.openerSeat, s.heroSeat))],
      caption: `${s.openerSeat} raised. You're in the ${s.heroSeat}`,
    };
  if (s.modeKey === "fb") {
    const after = between(s.heroSeat, s.villainSeat);
    const rest = SEATS.filter((x) => SEATS.indexOf(x) > SEATS.indexOf(s.villainSeat));
    return {
      evs: [
        ...posts,
        ...folds(between(null, s.heroSeat)),
        { seat: s.heroSeat, act: "open", text: `You raise in the ${s.heroSeat}` },
        ...folds(after),
        { seat: s.villainSeat, act: "3bet", text: `${s.villainSeat} 3-bets` },
        ...folds(rest),
      ],
      caption: `${s.villainSeat} 3-bet your raise`,
    };
  }
  const mid = between(s.openerSeat, s.heroSeat);
  const rest = SEATS.filter((x) => SEATS.indexOf(x) > SEATS.indexOf(s.heroSeat));
  return {
    evs: [
      ...posts,
      ...folds(between(null, s.openerSeat)),
      { seat: s.openerSeat, act: "open", text: `${s.openerSeat} raises` },
      ...folds(mid),
      { seat: s.heroSeat, act: "3bet", text: `You 3-bet in the ${s.heroSeat}` },
      ...folds(rest),
      { seat: s.openerSeat, act: "4bet", text: `${s.openerSeat} 4-bets` },
    ],
    caption: `${s.openerSeat} 4-bet your 3-bet`,
  };
}

const STEP = 420;

export function PreflopTrailer({ story, onDone }: { story: PreflopStory; onDone: () => void }) {
  const { evs, caption } = storyOf(story);
  const [step, setStep] = useState(0);
  const done = useRef(false);
  const finish = () => {
    if (done.current) return;
    done.current = true;
    onDone();
  };
  useEffect(() => {
    const ts = evs.map((_, i) => setTimeout(() => setStep(i + 1), 450 + i * STEP));
    const end = setTimeout(finish, 450 + evs.length * STEP + 1500);
    return () => {
      ts.forEach(clearTimeout);
      clearTimeout(end);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hero = story.heroSeat;
  const at = (seat: Seat) => SPOTS[(SEATS.indexOf(seat) - SEATS.indexOf(hero) + 6) % 6];
  const shown = evs.slice(0, step);
  const last = new Map<Seat, Ev>();
  for (const e of shown) last.set(e.seat, e);
  const headline = step >= evs.length ? caption : (shown[shown.length - 1]?.text ?? "6-max · 100bb");
  const [bx, by] = at("BTN");

  return (
    <motion.div
      className="royal fixed inset-0 z-50 mx-auto flex max-w-[460px] cursor-pointer flex-col items-center justify-center gap-4 px-4"
      style={{ background: "var(--background)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={finish}
      data-testid="trailer"
    >
      <div className="relative w-full" style={{ aspectRatio: "1 / 1.15", maxHeight: "62dvh" }}>
        <div className="absolute rounded-[50%]" style={{ inset: "13% 15%", background: "radial-gradient(circle, #1F6B47 0%, #154D34 70%)", border: "6px solid #3B2A1A", boxShadow: "inset 0 0 30px rgba(0,0,0,.45)" }} />
        {/* The dealer button sits next to the BTN. */}
        <span
          className="absolute flex h-[22px] w-[22px] items-center justify-center rounded-full text-[11px] font-bold"
          style={{ left: `${bx + (50 - bx) * 0.3}%`, top: `${by + (50 - by) * 0.3}%`, transform: "translate(-50%,-50%)", background: "#F4EFE4", color: "#0E1A2B" }}
        >
          D
        </span>
        {SEATS.map((seat) => {
          const [x, y] = at(seat);
          const e = last.get(seat);
          const folded = e?.act === "fold";
          const me = seat === hero;
          return (
            <div key={seat} className="absolute flex flex-col items-center gap-1" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", opacity: folded ? 0.38 : 1, transition: "opacity 300ms" }}>
              <div
                className="flex h-[52px] w-[60px] flex-col items-center justify-center rounded-xl"
                style={{ background: me ? "linear-gradient(180deg, #24395A, #14243A)" : "#14243A", border: `2px solid ${me ? "var(--gold)" : "var(--line)"}`, boxShadow: me ? "0 0 14px #C9A55A55" : undefined }}
              >
                <b className="font-[family-name:var(--font-display)] text-[14px]" style={{ color: me ? "var(--gold)" : "var(--foreground)" }}>
                  {seat}
                </b>
                <span className="text-[10px]" style={{ color: "var(--muted)" }}>
                  {me ? "You" : "100bb"}
                </span>
              </div>
              {e && e.act !== "post" && (
                <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-full px-2 py-0.5 text-[11px] font-bold" style={{ background: COLOR[e.act], color: "#fff" }}>
                  {ACT_TEXT[e.act]}
                </motion.span>
              )}
              {e?.act === "post" && (
                <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-full px-2 py-0.5 text-[11px] font-bold" style={{ background: COLOR.post, color: "#0E1A2B" }}>
                  {seat === "SB" ? "0.5bb" : "1bb"}
                </motion.span>
              )}
            </div>
          );
        })}
      </div>
      <motion.b key={headline} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-center font-[family-name:var(--font-brand)] text-[19px] font-bold" data-testid="trailer-headline">
        {headline}
      </motion.b>
      <span className="text-[11.5px]" style={{ color: "var(--muted)" }}>
        Tap to skip
      </span>
    </motion.div>
  );
}
