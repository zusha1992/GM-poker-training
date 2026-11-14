"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SpadeMark } from "@/components/SpadeMark";
import { rankChar, type Card } from "@/lib/drill/postflop/line-demo";
import { tone } from "@/lib/drill/sound";
import { SUIT_COLOR, SUIT_GLYPH } from "./drill-ui";

/** The story so far, on its own screen before every flop (Noam 2026-11-11):
 * a 6-max table, the folds, BTN raises, SB folds, BB calls, the bets go into
 * the pot and the flop is dealt and turned over. Then the drill. A tap skips. */

type Seat = "UTG" | "HJ" | "CO" | "BTN" | "SB" | "BB";

/** Seat centers on the table, in % of the table box. BTN (you) at the bottom. */
const SEAT_AT: Record<Seat, [number, number]> = { BTN: [50, 91], SB: [11, 70], BB: [11, 27], UTG: [50, 8], HJ: [89, 27], CO: [89, 70] };
const POT_AT: [number, number] = [50, 36];
/** Where a seat's bet sits: part of the way to the middle. */
const betAt = (s: Seat): [number, number] => {
  const [x, y] = SEAT_AT[s];
  return [x + (50 - x) * 0.4, y + (50 - y) * 0.4];
};

/** The timeline, ms from the start. */
// Noam 2026-11-11: shorter, and a quick hand-over to the drill.
const FLOP_T = { folds: 250, raise: 700, sbFold: 1100, call: 1350, sweep: 1850, deal: 2150, flip: 2450, caption: 3050, out: 3450 };
// Noam 2026-11-12, turn drill: then BTN bets the flop small, BB calls, the bets go in and the turn is dealt.
const TURN_T = { folds: 250, raise: 700, sbFold: 1100, call: 1350, sweep: 1850, deal: 2150, flip: 2450, fbet: 3000, fcall: 3400, fsweep: 3850, tdeal: 4100, tflip: 4350, caption: 4900, out: 5300 };

// Noam 2026-11-14, river drill: then BTN bets the turn (66% or an overbet), BB calls, and the river is dealt.
const RIVER_T = { folds: 250, raise: 700, sbFold: 1100, call: 1350, sweep: 1850, deal: 2150, flip: 2450, fbet: 3000, fcall: 3400, fsweep: 3850, tdeal: 4100, tflip: 4350, tbet: 4850, tcall: 5250, tsweep: 5700, rdeal: 5950, rflip: 6200, caption: 6750, out: 7150 };

type Step = keyof typeof RIVER_T;

export function FlopTrailer({ board, street = "flop", turnBet = 6, onDone }: { board: Card[]; street?: "flop" | "turn" | "river"; turnBet?: number; onDone: () => void }) {
  const T: Partial<Record<Step, number>> = street === "river" ? RIVER_T : street === "turn" ? TURN_T : FLOP_T;
  const ORDER = Object.keys(T) as Step[];
  const [step, setStep] = useState(-1);
  const done = useRef(false);
  const finish = () => {
    if (done.current) return;
    done.current = true;
    onDone();
  };

  useEffect(() => {
    const timers = ORDER.map((k, i) =>
      setTimeout(() => {
        setStep(i);
        if (k === "raise" || k === "call" || k === "fbet" || k === "fcall" || k === "tbet" || k === "tcall") [0, 70, 140].forEach((d) => setTimeout(() => tone(1250 + d, 0.035, "triangle"), d));
        if (k === "sweep" || k === "fsweep" || k === "tsweep") [0, 60, 120, 180].forEach((d) => setTimeout(() => tone(1100 - d, 0.04, "triangle"), d));
        if (k === "flip") [0, 150, 300].forEach((d, n) => setTimeout(() => tone(523 + n * 131, 0.09), d));
        if (k === "tflip") tone(915, 0.1);
        if (k === "rflip") tone(1046, 0.1);
        if (k === "caption") tone(784, 0.14);
      }, T[k]!),
    );
    timers.push(setTimeout(finish, T.out! + 160));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const at = (k: Step) => ORDER.includes(k) && step >= ORDER.indexOf(k);
  const folded: Record<Seat, boolean> = { UTG: at("folds"), HJ: at("folds"), CO: at("folds"), SB: at("sbFold"), BTN: false, BB: false };
  const action: Partial<Record<Seat, string>> = {
    ...(at("folds") ? { UTG: "Fold", HJ: "Fold", CO: "Fold" } : {}),
    ...(at("raise") ? { BTN: "Raise 2.5" } : {}),
    ...(at("sbFold") ? { SB: "Fold" } : {}),
    ...(at("call") ? { BB: "Call" } : {}),
    ...(at("fbet") ? { BTN: "Bet 1.8" } : {}),
    ...(at("fcall") ? { BB: "Call 1.8" } : {}),
    ...(at("tbet") ? { BTN: `Bet ${turnBet}` } : {}),
    ...(at("tcall") ? { BB: `Call ${turnBet}` } : {}),
  };
  const r1 = (x: number) => String(Math.round(x * 10) / 10);
  const stack: Record<Seat, string> = {
    UTG: "100",
    HJ: "100",
    CO: "100",
    SB: "99.5",
    BB: at("tcall") ? r1(95.7 - turnBet) : at("fcall") ? "95.7" : at("call") ? "97.5" : "99",
    BTN: at("tbet") ? r1(95.7 - turnBet) : at("fbet") ? "95.7" : at("raise") ? "97.5" : "100",
  };
  const swept = at("sweep");
  const fswept = at("fsweep");
  const tswept = at("tsweep");
  const pot = at("tcall") ? r1(9.1 + 2 * turnBet) : at("tbet") ? r1(9.1 + turnBet) : at("fcall") ? "9.1" : at("fbet") ? "7.3" : swept ? "5.5" : at("call") ? "5.5" : at("raise") ? "4" : "1.5";

  return (
    <motion.div
      className="royal relative mx-auto flex h-dvh w-full max-w-[460px] flex-col items-center overflow-hidden px-4 py-5"
      style={{ background: "radial-gradient(120% 60% at 50% 45%, #182C47 0%, var(--background) 70%)", color: "var(--foreground)" }}
      animate={at("out") ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.16, ease: "easeIn" }}
      onClick={finish}
      data-testid="trailer"
    >
      <motion.div className="flex flex-col items-center gap-1 text-center" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <b className="font-[family-name:var(--font-brand)] text-[24px] font-bold tracking-[0.05em]" style={{ color: "var(--gold)" }}>
          Single-raised pot
        </b>
        <span className="text-[13px] tracking-[0.12em] uppercase" style={{ color: "var(--muted)" }}>
          {street === "river" ? `Flop bet 1.8 · turn bet ${turnBet} · called` : street === "turn" ? "Flop bet 1.8 · called" : "6-max · 100bb deep"}
        </span>
      </motion.div>

      {/* The table. */}
      <div className="relative my-auto aspect-[3/4] w-full max-w-[380px]">
        <motion.div
          className="absolute rounded-[50%]"
          style={{
            inset: "9% 12%",
            background: "radial-gradient(ellipse at 50% 40%, #1F5A4C 0%, #133B33 62%, #0C2924 100%)",
            border: "10px solid #3A2A1C",
            boxShadow: "0 0 0 2px #C9A55A55, inset 0 0 40px rgba(0,0,0,.55), 0 18px 40px rgba(0,0,0,.5)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.3, 1.2, 0.5, 1] }}
        />
        <div className="absolute flex flex-col items-center opacity-25" style={{ left: "50%", top: "74%", transform: "translate(-50%,-50%)" }}>
          <SpadeMark piece="king" color="var(--ivory)" size={46} />
        </div>

        {/* Pot. */}
        <motion.div
          className="absolute flex flex-col items-center gap-1"
          style={{ left: `${POT_AT[0]}%`, top: `${POT_AT[1]}%`, transform: "translate(-50%,-50%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence>{swept && <Chips key="pot" n={5} color="#C9A55A" />}</AnimatePresence>
          <motion.span
            key={pot}
            className="rounded-full px-2.5 py-0.5 font-[family-name:var(--font-display)] text-[14px] font-bold"
            style={{ background: "rgba(0,0,0,.45)", color: "var(--gold)", border: "1px solid #C9A55A88" }}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            data-testid="trailer-pot"
          >
            Pot {pot}bb
          </motion.span>
        </motion.div>

        {/* The bets: blinds first, then BTN's raise and BB's call; swept into the pot. */}
        <Bet seat="SB" n={1} color="#9DB4C4" show from={false} swept={swept} />
        <Bet seat="BB" n={1} color="#9DB4C4" show from={false} swept={swept} />
        <Bet seat="BB" n={3} color="#35C277" show={at("call")} from swept={swept} />
        <Bet seat="BTN" n={3} color="#F2564B" show={at("raise")} from swept={swept} />
        <Bet seat="BTN" n={2} color="#F2564B" show={at("fbet")} from swept={fswept} />
        <Bet seat="BB" n={2} color="#35C277" show={at("fcall")} from swept={fswept} />
        <Bet seat="BTN" n={4} color="#F2564B" show={at("tbet")} from swept={tswept} />
        <Bet seat="BB" n={4} color="#35C277" show={at("tcall")} from swept={tswept} />

        {/* The flop: three cards land face down, then turn over one by one; the turn after the flop bet and call. */}
        <div className="absolute flex gap-1.5" style={{ left: "50%", top: "53%", transform: "translate(-50%,-50%)" }}>
          {board.map((c, i) =>
            i < 3 ? (
              <TableCard key={i} card={c} i={i} landed={at("deal")} flipped={at("flip")} />
            ) : (
              <TableCard key={i} card={c} i={0} landed={at(i === 3 ? "tdeal" : "rdeal")} flipped={at(i === 3 ? "tflip" : "rflip")} />
            ),
          )}
        </div>

        {(Object.keys(SEAT_AT) as Seat[]).map((s) => (
          <SeatBadge key={s} seat={s} folded={folded[s]} action={action[s]} stack={stack[s]} hero={s === "BTN"} />
        ))}
      </div>

      <div className="flex h-[64px] flex-col items-center justify-center gap-2">
        <AnimatePresence>
          {at("caption") && (
            <motion.b
              className="font-[family-name:var(--font-brand)] text-[19px] font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              data-testid="trailer-caption"
            >
              Your made hands: how many bb?
            </motion.b>
          )}
        </AnimatePresence>
        <span className="text-[11.5px]" style={{ color: "var(--muted)" }}>
          Tap to skip
        </span>
      </div>
    </motion.div>
  );
}

function SeatBadge({ seat, folded, action, stack, hero }: { seat: Seat; folded: boolean; action?: string; stack: string; hero: boolean }) {
  const [x, y] = SEAT_AT[seat];
  const color = action?.startsWith("Raise") || action?.startsWith("Bet") ? "var(--raise)" : action?.startsWith("Call") ? "var(--call)" : "var(--muted)";
  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%`, x: "-50%", y: "-50%" }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: folded ? 0.35 : 1, scale: 1 }}
      transition={{ duration: 0.35, delay: folded ? 0 : 0.15 + Object.keys(SEAT_AT).indexOf(seat) * 0.05 }}
    >
      <div
        className="flex h-[52px] w-[52px] flex-col items-center justify-center rounded-full leading-none"
        style={{
          background: hero ? "linear-gradient(180deg, #24395A, #14243A)" : "#14243A",
          border: `2px solid ${hero ? "var(--gold)" : "var(--line)"}`,
          boxShadow: hero ? "0 0 14px #C9A55A55" : undefined,
        }}
      >
        <b className="font-[family-name:var(--font-display)] text-[13px]" style={{ color: hero ? "var(--gold)" : "var(--foreground)" }}>
          {seat}
        </b>
        <span className="mt-0.5 font-[family-name:var(--font-display)] text-[10px]" style={{ color: "var(--muted)" }}>
          {stack}
        </span>
      </div>
      <AnimatePresence>
        {action && (
          <motion.span
            key={action}
            className="mt-1 rounded-full px-2 py-px font-[family-name:var(--font-display)] text-[11.5px] font-bold"
            style={{ color, background: "rgba(0,0,0,.55)", border: `1px solid ${color}` }}
            initial={{ opacity: 0, y: -6, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
          >
            {action}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** A seat's chips: slide from the seat to its bet spot (`from`), then into the pot once swept. */
function Bet({ seat, n, color, show, from, swept }: { seat: Seat; n: number; color: string; show: boolean; from: boolean; swept: boolean }) {
  if (!show) return null;
  const [sx, sy] = SEAT_AT[seat];
  const [bx, by] = betAt(seat);
  const target = swept ? POT_AT : [bx, by];
  return (
    <motion.div
      className="absolute"
      style={{ x: "-50%", y: "-50%" }}
      initial={from ? { left: `${sx}%`, top: `${sy}%`, opacity: 0 } : { left: `${bx}%`, top: `${by}%`, opacity: 0 }}
      animate={{ left: `${target[0]}%`, top: `${target[1]}%`, opacity: swept ? 0 : 1 }}
      transition={{ duration: swept ? 0.45 : 0.5, ease: swept ? "easeIn" : [0.3, 1.25, 0.5, 1] }}
    >
      <Chips n={n} color={color} />
    </motion.div>
  );
}

/** A small stack of casino chips. */
function Chips({ n, color }: { n: number; color: string }) {
  return (
    <motion.div className="relative h-[22px] w-[26px]" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}>
      {Array.from({ length: n }, (_, i) => (
        <i
          key={i}
          className="absolute left-0 h-[10px] w-[26px] rounded-[50%]"
          style={{ bottom: i * 4, background: color, border: "2px dashed rgba(255,255,255,.8)", boxShadow: "0 1px 0 rgba(0,0,0,.45)" }}
        />
      ))}
    </motion.div>
  );
}

/** A flop card: flies in face down from the dealer, then turns over. */
function TableCard({ card, i, landed, flipped }: { card: Card; i: number; landed: boolean; flipped: boolean }) {
  const w = 46, h = 64;
  const color = SUIT_COLOR[card.s];
  const r = rankChar(card.r);
  if (!landed) return <span style={{ width: w, height: h }} />;
  return (
    <motion.div
      style={{ width: w, height: h, perspective: 500 }}
      initial={{ y: -90, x: 40 - i * 52, opacity: 0, rotate: -12 }}
      animate={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.3, delay: i * 0.07, ease: [0.2, 0.9, 0.3, 1] }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.32, delay: flipped ? i * 0.15 : 0, ease: "easeInOut" }}
      >
        {/* Back: navy with the gold spade. */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-[7px]"
          style={{ backfaceVisibility: "hidden", background: "linear-gradient(160deg, #1B2E48, #0E1A2B)", border: "2px solid #C9A55A", boxShadow: "0 3px 8px rgba(0,0,0,.45)" }}
        >
          <SpadeMark piece="king" color="#C9A55A" size={26} />
        </div>
        {/* Face. */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-[7px] font-[family-name:var(--font-display)] font-bold leading-none"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(180deg, color-mix(in srgb, ${color} 82%, #ffffff) 0%, ${color} 55%)`,
            color: "#fff",
            border: "1px solid rgba(255,255,255,.25)",
            boxShadow: "0 3px 8px rgba(0,0,0,.45)",
            fontSize: 22,
          }}
          data-testid="trailer-card"
        >
          {r === "T" ? "10" : r}
          <em className="mt-0.5 not-italic" style={{ fontSize: 17 }}>
            {SUIT_GLYPH[card.s]}
          </em>
        </div>
      </motion.div>
    </motion.div>
  );
}
