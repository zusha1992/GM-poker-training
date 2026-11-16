"use client";

import { motion } from "motion/react";
import { actShort, endOf, potsOf, type StreetLine } from "@/lib/drill/postflop/lines";

/** The line so far, always in view (Noam 2026-11-16: "very important what's the line, what's the spot we're in").
 * One chip per street with each action, then the pot, the stack behind and the SPR, big.
 * `upTo` (trailer): how many actions to show so far; the rest stay empty. `compact` (the question screen): one row
 * of chips, without the preflop chip and BB's checks. */
export function LineBar({ line, upTo, compact = false }: { line: StreetLine[]; upTo?: number; compact?: boolean }) {
  const { before } = potsOf(line);
  const end = endOf(line);
  let n = 0;
  const shown = (k: number) => upTo === undefined || k < upTo;
  const total = line.reduce((s, x) => s + x.acts.length, 0);
  return (
    <div className="flex w-full flex-col items-center gap-1" data-testid="line-bar">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {!compact && <Chip label="Pre" text="BTN 2.5 · BB call" />}
        {line.map((s, si) => (
          <Chip
            key={s.street}
            label={s.street === "flop" ? "Flop" : "Turn"}
            text={s.acts
              .map((a, ai) => {
                const k = n++;
                // Compact (the question screen): BB's checks before BTN's bets are left out.
                if (compact && a.who === "BB" && a.act === "check") return "";
                return shown(k) ? `${a.who === "BB" && a.act === "check" ? "BB check" : a.act === "call" ? "call" : actShort(a, before[si][ai])}` : "";
              })
              .filter(Boolean)
              .join(" · ")}
            dim={!s.acts.some((_, ai) => shown(before.slice(0, si).flat().length + ai))}
          />
        ))}
      </div>
      {(upTo === undefined || upTo >= total) && (
        <motion.div
          className={`flex items-baseline gap-2 font-[family-name:var(--font-display)] ${compact ? "text-[13px]" : "text-[15px]"}`}
          initial={upTo === undefined ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          data-testid="line-pot"
        >
          <b className="rounded-full px-2.5 py-0.5" style={{ color: "#2B1C02", background: "var(--gold)" }}>
            Pot {end.pot}bb
          </b>
          <span style={{ color: "var(--foreground)" }}>{end.behind}bb behind</span>
          <span style={{ color: "var(--muted)" }}>SPR {end.spr}</span>
        </motion.div>
      )}
    </div>
  );
}

function Chip({ label, text, dim = false }: { label: string; text: string; dim?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[8px] border px-2 py-0.5 text-[12px]"
      style={{ borderColor: "var(--line)", background: "var(--panel)", opacity: dim ? 0.4 : 1 }}
    >
      <b className="text-[10.5px] tracking-[0.08em] uppercase" style={{ color: "var(--gold)" }}>
        {label}
      </b>
      <span style={{ color: "var(--foreground)" }}>{text || "…"}</span>
    </span>
  );
}
