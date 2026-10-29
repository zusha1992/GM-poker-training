"use client";

import { rankChar, STREETS, type Card } from "@/lib/drill/postflop/line-demo";
import { Tetromino } from "./SortPiece";

/** Small building blocks shared by the postflop drills (flop to river, how many big blinds). */

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex h-dvh w-full max-w-[460px] flex-col gap-1.5 overflow-hidden px-4 py-2" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {children}
    </div>
  );
}

export function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <b className="font-[family-name:var(--font-display)]">{label}</b>
      <span style={{ color: "var(--muted)" }}>{text}</span>
    </div>
  );
}

export function StreetTrack({ current, done }: { current: number; done: boolean }) {
  return (
    <div className="flex items-center gap-1 text-[10.5px]">
      {STREETS.map((s, i) => {
        const state = done || i < current ? "done" : i === current ? "now" : "next";
        return (
          <span key={s} className="flex items-center gap-1">
            <span style={{ color: state === "now" ? "var(--mix)" : state === "done" ? "var(--foreground)" : "var(--muted)", fontWeight: state === "now" ? 700 : 500 }}>
              {state === "done" ? "✓ " : ""}
              {s[0].toUpperCase() + s.slice(1)}
            </span>
            {i < STREETS.length - 1 && <span style={{ color: "var(--line)" }}>›</span>}
          </span>
        );
      })}
    </div>
  );
}

const SUIT_GLYPH: Record<string, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };

/** A board card in the top panel; `fresh` = just dealt (flip-in + glow). */
export function BoardCard({ card, fresh = false }: { card: Card; fresh?: boolean }) {
  const red = card.s === "h" || card.s === "d";
  const r = rankChar(card.r);
  return (
    <span
      className="flex h-9 w-[26px] flex-shrink-0 flex-col items-center justify-center rounded-[4px] font-[family-name:var(--font-display)] text-[12px] font-bold leading-none"
      style={{
        background: "#F7F4EC",
        color: red ? "#C62F28" : "#16191C",
        boxShadow: fresh ? "0 0 0 2px var(--mix), 0 1px 0 rgba(0,0,0,.4)" : "0 1px 0 rgba(0,0,0,.4)",
        animation: fresh ? "ldDeal 520ms cubic-bezier(.3,1.4,.5,1) both" : undefined,
      }}
    >
      {r === "T" ? "10" : r}
      <em className="mt-px text-[11px] not-italic">{SUIT_GLYPH[card.s]}</em>
    </span>
  );
}

/** What a tapped piece shows: its name, what's in it, and its hands. */
export type InspectablePiece = {
  key: string;
  shape?: string;
  label: string;
  color: string;
  desc: string;
  pct: number;
  partMark: string;
  entries: { hand: string; part: number }[];
};

/** "What's in this piece": the hands of a tapped piece, while the matrix
 * above lights them up. Partial squares are marked (e.g. ♥ = only the
 * both-hearts combo, "some" = only part of the square). */
export function InspectPanel({ piece, onBack, backLabel = "Back to sorting" }: { piece: InspectablePiece; onBack: () => void; backLabel?: string }) {
  return (
    <div className="flex h-full w-full flex-col gap-1.5 p-2.5" style={{ animation: "rdIn 200ms ease-out both" }} data-testid="inspect-panel">
      <div className="flex items-center gap-2.5">
        <Tetromino kind={piece.shape ?? piece.key} color={piece.color} block={11} />
        <div className="min-w-0 flex-1">
          <b className="font-[family-name:var(--font-display)] text-[15px]">
            {piece.label} <span style={{ color: "var(--muted)", fontWeight: 500 }}>· {piece.pct}% of the range</span>
          </b>
          <p className="m-0 text-[11px] leading-tight" style={{ color: "var(--muted)" }}>
            {piece.desc}
          </p>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-wrap content-start gap-1 overflow-y-auto">
        {piece.entries.map(({ hand, part }) => (
          <span
            key={hand}
            className="rounded-md px-1.5 py-0.5 font-[family-name:var(--font-display)] text-[11.5px] font-semibold"
            style={{ background: part >= 0.99 ? piece.color : "transparent", color: part >= 0.99 ? "#10161B" : piece.color, border: `1px solid ${piece.color}` }}
          >
            {hand}
            {part < 0.99 && <span className="ml-0.5 text-[9.5px] font-medium">{piece.partMark}</span>}
          </span>
        ))}
      </div>
      <button type="button" className="h-[36px] flex-shrink-0 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onBack}>
        {backLabel}
      </button>
    </div>
  );
}

export function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-1.5 p-3" style={{ animation: "rdIn 220ms ease-out both" }} data-testid="line-panel">
      {children}
    </div>
  );
}

export function Verdict({ ok, title, color }: { ok: boolean; title: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
        style={{ background: ok ? "var(--call)" : "var(--raise)", color: "#10161B" }}
        aria-label={ok ? "Correct" : "Not quite"}
      >
        {ok ? "✓" : "✕"}
      </span>
      <b className="font-[family-name:var(--font-display)] text-[16px]" style={{ color }}>
        {title}
      </b>
    </div>
  );
}

export function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" className="h-[44px] flex-[2] cursor-pointer rounded-xl border-0 text-[14.5px] font-bold active:scale-[0.98]" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={onClick}>
      {children}
    </button>
  );
}

export function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-[9px] border" style={{ borderColor: "var(--line)", background: "var(--panel)" }} aria-label={label} type="button" onClick={onClick}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </button>
  );
}
