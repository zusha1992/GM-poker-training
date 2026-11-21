"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SpadeMark } from "@/components/SpadeMark";
import { rankChar, type Card } from "@/lib/drill/postflop/line-demo";
import { actLong, lineFor, type StreetLine } from "@/lib/drill/postflop/lines";
import { potsOf } from "@/lib/drill/postflop/lines";
import { tone } from "@/lib/drill/sound";
import { SUIT_COLOR, SUIT_GLYPH } from "./drill-ui";
import { LineBar } from "./LineBar";

/** The story so far, on its own screen before every spot (Noam 2026-11-11): a 6-max table, the folds,
 * BTN raises, SB folds, BB calls, the bets go into the pot and the flop is dealt and turned over.
 * Noam 2026-11-16: the line very clear, each bet and the pot. Every action of the line comes one at a
 * time, announced big; the pot grows; a line bar fills in at the bottom. A tap skips. */

export type Seat = "UTG" | "HJ" | "CO" | "BTN" | "SB" | "BB";

/** Seat centers on the table, in % of the table box. BTN (you) at the bottom. */
const SEAT_AT: Record<Seat, [number, number]> = { BTN: [50, 91], SB: [11, 70], BB: [11, 27], UTG: [50, 8], HJ: [89, 27], CO: [89, 70] };
const POT_AT: [number, number] = [50, 36];
/** Where a seat's bet sits: part of the way to the middle. */
const betAt = (s: Seat): [number, number] => {
  const [x, y] = SEAT_AT[s];
  return [x + (50 - x) * 0.4, y + (50 - y) * 0.4];
};

type Ev =
  | { k: "folds" | "raise" | "sbFold" | "call" | "sweep" | "deal" | "flip" | "caption" | "out" }
  | { k: "act"; si: number; ai: number }
  | { k: "ssweep" | "sdeal" | "sflip"; si: number };

/** The timeline, ms from the start: preflop and the flop, then each action of the line, the bets swept in
 * and the next card dealt. */
function timeline(line: StreetLine[], openLast = false): { ev: Ev; at: number }[] {
  const out: { ev: Ev; at: number }[] = [
    { ev: { k: "folds" }, at: 250 },
    { ev: { k: "raise" }, at: 700 },
    { ev: { k: "sbFold" }, at: 1100 },
    { ev: { k: "call" }, at: 1350 },
    { ev: { k: "sweep" }, at: 1850 },
    { ev: { k: "deal" }, at: 2150 },
    { ev: { k: "flip" }, at: 2450 },
  ];
  let t = 3150;
  line.forEach((s, si) => {
    s.acts.forEach((_, ai) => {
      out.push({ ev: { k: "act", si, ai }, at: t });
      t += 850;
    });
    // The street being asked (defend: BB checks, BTN bets): its bets stay out, no next card.
    if (openLast && si === line.length - 1) return;
    out.push({ ev: { k: "ssweep", si }, at: t });
    out.push({ ev: { k: "sdeal", si }, at: t + 300 });
    out.push({ ev: { k: "sflip", si }, at: t + 550 });
    t += 1250;
  });
  out.push({ ev: { k: "caption" }, at: t }, { ev: { k: "out" }, at: t + (line.length ? 1500 : 400) });
  return out;
}

const STREET_NAME = ["Turn", "River"];
const cardText = (c: Card) => `${rankChar(c.r)}${SUIT_GLYPH[c.s]}`;
const r1 = (x: number) => String(Math.round(x * 10) / 10);

export function FlopTrailer({
  board,
  street = "flop",
  turnBet = 6,
  line: lineProp,
  openLast = false,
  hero = "BTN",
  caption = "Your made hands: how many bb?",
  onDone,
}: {
  board: Card[];
  street?: "flop" | "turn" | "river";
  turnBet?: number;
  line?: StreetLine[];
  /** The last street of `line` is the one being asked: its actions play, its bets stay in front of the seats. */
  openLast?: boolean;
  /** Our seat, lit in gold (Noam & Uri 2026-11-20: the defend drill sits in the BB). */
  hero?: Seat;
  /** The question, shown once the line has played. */
  caption?: string;
  onDone: () => void;
}) {
  // Noam 2026-11-16: a spot can come with its own line (turn 75 / 150 / 200%, checks).
  const line = lineProp ?? lineFor(street, turnBet);
  const TL = timeline(line, openLast);
  const [step, setStep] = useState(-1);
  const done = useRef(false);
  const finish = () => {
    if (done.current) return;
    done.current = true;
    onDone();
  };

  useEffect(() => {
    const chips = () => [0, 70, 140].forEach((d) => setTimeout(() => tone(1250 + d, 0.035, "triangle"), d));
    const timers = TL.map(({ ev, at }, i) =>
      setTimeout(() => {
        setStep(i);
        if (ev.k === "raise" || ev.k === "call") chips();
        if (ev.k === "act") {
          if (line[ev.si].acts[ev.ai].act === "check") [0, 120].forEach((d) => setTimeout(() => tone(330, 0.05, "triangle"), d));
          else chips();
        }
        if (ev.k === "sweep" || ev.k === "ssweep") [0, 60, 120, 180].forEach((d) => setTimeout(() => tone(1100 - d, 0.04, "triangle"), d));
        if (ev.k === "flip") [0, 150, 300].forEach((d, n) => setTimeout(() => tone(523 + n * 131, 0.09), d));
        if (ev.k === "sflip") tone(915 + ev.si * 131, 0.1);
        if (ev.k === "caption") tone(784, 0.14);
      }, at),
    );
    timers.push(setTimeout(finish, TL[TL.length - 1].at + 160));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const past = TL.slice(0, step + 1).map((x) => x.ev);
  const at = (k: Ev["k"], si?: number) => past.some((e) => e.k === k && (si === undefined || ("si" in e && e.si === si)));
  const actsDone = past.filter((e): e is Extract<Ev, { k: "act" }> => e.k === "act");
  const actOf = (e: { si: number; ai: number }) => line[e.si].acts[e.ai];
  const { before } = potsOf(line);

  // The street being played: its actions sit by the seats until its bets are swept.
  const cur = actsDone.length ? actsDone[actsDone.length - 1].si : -1;
  const curOpen = cur >= 0 && !at("ssweep", cur);
  const action: Partial<Record<Seat, string>> = {
    ...(at("folds") ? { UTG: "Fold", HJ: "Fold", CO: "Fold" } : {}),
    ...(at("raise") && !at("sweep") ? { BTN: "Raise 2.5" } : {}),
    ...(at("sbFold") ? { SB: "Fold" } : {}),
    ...(at("call") && !at("sweep") ? { BB: "Call" } : {}),
  };
  if (curOpen)
    for (const e of actsDone.filter((x) => x.si === cur)) {
      const a = actOf(e);
      action[a.who] = a.act === "bet" ? `Bet ${a.bb}` : a.act === "call" ? `Call ${a.bb}` : "Check";
    }
  const folded: Record<Seat, boolean> = { UTG: at("folds"), HJ: at("folds"), CO: at("folds"), SB: at("sbFold"), BTN: false, BB: false };
  const put = (who: "BTN" | "BB") => actsDone.reduce((s, e) => (actOf(e).who === who ? s + (actOf(e).bb ?? 0) : s), 0);
  const stack: Record<Seat, string> = {
    UTG: "100",
    HJ: "100",
    CO: "100",
    SB: "99.5",
    BB: at("call") ? r1(97.5 - put("BB")) : "99",
    BTN: at("raise") ? r1(97.5 - put("BTN")) : "100",
  };
  const swept = at("sweep");
  const pot = r1(at("call") ? 5.5 + put("BTN") + put("BB") : at("raise") ? 4 : 1.5);

  // The big line in the middle: the last thing that happened.
  const lastEv = [...past].reverse().find((e) => e.k === "sflip" || e.k === "act" || e.k === "flip" || e.k === "call" || e.k === "raise");
  const lastAct = lastEv?.k === "act" ? actOf(lastEv) : undefined;
  const headline =
    lastEv?.k === "sflip"
      ? board[3 + lastEv.si]
        ? `${STREET_NAME[lastEv.si]}: ${cardText(board[3 + lastEv.si])}`
        : `The ${STREET_NAME[lastEv.si].toLowerCase()} card…` // card drills: the question is the card itself
      : lastEv?.k === "act"
        ? actLong(lastAct!, before[lastEv.si][lastEv.ai])
        : lastEv?.k === "flip"
          ? `Flop: ${board.slice(0, 3).map(cardText).join(" ")}`
          : lastEv?.k === "call"
            ? "BB calls"
            : lastEv?.k === "raise"
              ? "BTN raises 2.5bb"
              : "";
  const headColor = lastAct?.act === "bet" ? "var(--raise)" : lastAct?.act === "call" || lastEv?.k === "call" ? "var(--call)" : lastEv?.k === "raise" ? "var(--raise)" : "var(--foreground)";

  return (
    <motion.div
      className="royal relative mx-auto flex h-dvh w-full max-w-[460px] flex-col items-center overflow-hidden px-4 py-4"
      style={{ background: "radial-gradient(120% 60% at 50% 45%, #182C47 0%, var(--background) 70%)", color: "var(--foreground)" }}
      animate={at("out") ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.16, ease: "easeIn" }}
      onClick={finish}
      data-testid="trailer"
    >
      <motion.div className="flex flex-col items-center gap-1 text-center" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <b className="font-[family-name:var(--font-brand)] text-[22px] font-bold tracking-[0.05em]" style={{ color: "var(--gold)" }}>
          Single-raised pot
        </b>
        <span className="text-[12px] tracking-[0.12em] uppercase" style={{ color: "var(--muted)" }}>
          6-max · 100bb deep · BTN vs BB
        </span>
      </motion.div>

      {/* What just happened, big. */}
      <div className="flex h-[46px] items-center justify-center">
        <AnimatePresence mode="wait">
          {headline && (
            <motion.b
              key={headline}
              className="rounded-[10px] px-3 py-1 text-center font-[family-name:var(--font-display)] text-[19px] font-bold"
              style={{ color: headColor, background: "rgba(0,0,0,.35)" }}
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              data-testid="trailer-headline"
            >
              {headline}
            </motion.b>
          )}
        </AnimatePresence>
      </div>

      {/* The table. */}
      <div className="relative my-auto aspect-[3/4] w-full max-w-[350px]">
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

        {/* Pot: big, and it grows with each bet. */}
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
            className="rounded-full px-3 py-0.5 font-[family-name:var(--font-display)] text-[18px] font-bold"
            style={{ background: "rgba(0,0,0,.55)", color: "var(--gold)", border: "1.5px solid #C9A55A" }}
            initial={{ scale: 1.35 }}
            animate={{ scale: 1 }}
            data-testid="trailer-pot"
          >
            Pot {pot}bb
          </motion.span>
        </motion.div>

        {/* The bets: blinds, BTN's raise and BB's call, then each bet and call of the line, swept in after its street. */}
        <Bet seat="SB" n={1} color="#9DB4C4" show from={false} swept={swept} />
        <Bet seat="BB" n={1} color="#9DB4C4" show from={false} swept={swept} />
        <Bet seat="BB" n={3} color="#35C277" show={at("call")} from swept={swept} />
        <Bet seat="BTN" n={3} color="#F2564B" show={at("raise")} from swept={swept} />
        {actsDone.map((e) => {
          const a = actOf(e);
          if (!a.bb) return null;
          return <Bet key={`${e.si}-${e.ai}`} seat={a.who} n={Math.min(5, 1 + Math.round(a.bb / 4))} color={a.act === "bet" ? "#F2564B" : "#35C277"} show from swept={at("ssweep", e.si)} />;
        })}

        {/* The flop lands face down and turns over; each later card after its street's bets go in. */}
        <div className="absolute flex gap-1.5" style={{ left: "50%", top: "53%", transform: "translate(-50%,-50%)" }}>
          {board.map((c, i) =>
            i < 3 ? (
              <TableCard key={i} card={c} i={i} landed={at("deal")} flipped={at("flip")} />
            ) : (
              <TableCard key={i} card={c} i={0} landed={at("sdeal", i - 3)} flipped={at("sflip", i - 3)} />
            ),
          )}
        </div>

        {(Object.keys(SEAT_AT) as Seat[]).map((s) => (
          <SeatBadge key={s} seat={s} folded={folded[s]} action={action[s]} stack={stack[s]} hero={s === hero} />
        ))}
      </div>

      {/* The line so far, filling in. */}
      {line.length > 0 && (
        <div className="w-full pb-1">
          <LineBar line={line} upTo={actsDone.length} />
        </div>
      )}

      <div className="flex h-[50px] flex-col items-center justify-center gap-1.5">
        <AnimatePresence>
          {at("caption") && (
            <motion.b
              className="font-[family-name:var(--font-brand)] text-[18px] font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              data-testid="trailer-caption"
            >
              {caption}
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
  const color = action?.startsWith("Raise") || action?.startsWith("Bet") ? "var(--raise)" : action?.startsWith("Call") ? "var(--call)" : action === "Check" ? "var(--foreground)" : "var(--muted)";
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
            className="mt-1 rounded-full px-2 py-px font-[family-name:var(--font-display)] text-[12.5px] font-bold"
            style={{ color, background: "rgba(0,0,0,.6)", border: `1px solid ${color}` }}
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

/** A board card: flies in face down from the dealer, then turns over. */
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
