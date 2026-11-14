"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { timeAgo, type FeedbackRow } from "@/lib/drill/feedback";
import { feedbackLink } from "@/lib/drill/feedback-links";
import { clickSound } from "@/lib/drill/sound";
import { DrillStartSheet } from "./DrillStartSheet";
import { SpadeMark, type ChessPiece } from "./SpadeMark";

type DrillCard = {
  key: string;
  title: string;
  sub: string;
  meta: string;
  /** Its mark: the logo's spade with this chess piece. */
  piece: ChessPiece;
  section: "Preflop" | "Postflop";
  href: string;
};

const DRILLS: DrillCard[] = [
  { key: "rfi", title: "Raise first in", sub: "Everyone folds to you · 5 positions", meta: "5 spots", piece: "pawn", section: "Preflop", href: "/drills/preflop/rfi" },
  { key: "tb", title: "3-bet", sub: "Facing an open · pick any seats", meta: "15 spots", piece: "knight", section: "Preflop", href: "/drills/preflop/tb" },
  { key: "fb", title: "Facing a 3-bet", sub: "You opened · 4-bet, call or fold", meta: "15 spots", piece: "bishop", section: "Preflop", href: "/drills/preflop/fb" },
  { key: "fv", title: "Facing a 4-bet", sub: "You 3-bet · all in, call or fold", meta: "15 spots", piece: "rook", section: "Preflop", href: "/drills/preflop/fv" },
  // Noam & Uri 2026-11-10: "How many big blinds?" split into a drill per street.
  { key: "flop", title: "Flop: how many bb?", sub: "BTN vs BB · 11 flops · made hands by equity", meta: "New", piece: "bishop", section: "Postflop", href: "/drills/postflop/flop" },
  { key: "turn", title: "Turn: how many bb?", sub: "BTN vs BB · flop bet and call · 33 turns", meta: "New", piece: "rook", section: "Postflop", href: "/drills/postflop/turn" },
  { key: "river", title: "River: how many bb?", sub: "BTN vs BB · flop and turn bet and called · 66 rivers", meta: "New", piece: "queen", section: "Postflop", href: "/drills/postflop/river" },
  { key: "price", title: "Full hand: how many bb?", sub: "The old drill · flop to river in one go", meta: "Old", piece: "king", section: "Postflop", href: "/drills/postflop/price" },
  { key: "line", title: "Flop to river", sub: "BTN vs BB · 20 random hands", meta: "Demo", piece: "queen", section: "Postflop", href: "/drills/postflop/line" },
  { key: "postflop", title: "BTN c-bet vs BB", sub: "K72r · one strategy", meta: "Draft", piece: "pawn", section: "Postflop", href: "/drills/postflop/btn-vs-bb" },
];

const BRAND = "font-[family-name:var(--font-brand)]";

/** The app's home screen: pick a drill. Dressed in the GM brand (Noam
 * 2026-11-08, logo 4A: a spade with a chess king; midnight navy, ivory, gold). */
export function Lobby() {
  const router = useRouter();
  /** The drill whose card was tapped: watch its video or play it. */
  const [chosen, setChosen] = useState<DrillCard | null>(null);

  return (
    <div className="royal h-dvh overflow-y-auto" style={{ background: "radial-gradient(120% 45% at 50% 0%, #182C47 0%, var(--background) 65%)", color: "var(--foreground)" }}>
      <div className="mx-auto flex min-h-full max-w-[460px] flex-col gap-6 px-4 pt-9 pb-7">
        <header className="flex flex-col items-center gap-3 text-center">
          <SpadeMark piece="king" color="var(--ivory)" size={108} label="GM Poker Training logo" />
          <div className="flex flex-col items-center gap-2 leading-none">
            <b className={`${BRAND} text-[46px] font-bold tracking-[0.12em]`} style={{ color: "var(--ivory)" }}>
              GM
            </b>
            <span className={`${BRAND} text-[13px] font-semibold tracking-[0.36em] uppercase`} style={{ color: "var(--gold)" }}>
              Poker Training
            </span>
          </div>
          <Rule glyph="♠" />
        </header>

        {(["Preflop", "Postflop"] as const).map((section) => (
          <section key={section} className="flex flex-col gap-2.5">
            <SectionTitle>{section}</SectionTitle>
            {DRILLS.filter((d) => d.section === section).map((d) => (
              <LobbyCard
                key={d.key}
                testId={`lobby-${d.key}`}
                mark={<SpadeMark piece={d.piece} color="var(--ivory)" size={44} />}
                title={d.title}
                sub={d.sub}
                meta={d.meta}
                onClick={() => {
                  clickSound();
                  setChosen(d);
                }}
              />
            ))}
          </section>
        ))}

        <section className="flex flex-col gap-2.5">
          <SectionTitle>Study</SectionTitle>
          <LobbyCard
            testId="lobby-rulebook"
            mark={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" />
                <path d="M8 7h8M8 11h6" />
              </svg>
            }
            title="Rulebook"
            sub="The rules the drills follow · read and suggest changes"
            onClick={() => {
              clickSound();
              router.push("/rulebook");
            }}
          />
        </section>

        <FeedbackSection />

        <DrillStartSheet drill={chosen} onClose={() => setChosen(null)} onPlay={() => chosen && router.push(chosen.href)} />
        <div className="mt-auto flex flex-col items-center gap-2.5 pt-2 text-[12px]" style={{ color: "var(--muted)" }}>
          <Rule />
          <span>6-max cash · 100bb · proof of concept</span>
        </div>
      </div>
    </div>
  );
}

/** A gold hairline, with an optional glyph in the middle. */
function Rule({ glyph }: { glyph?: string }) {
  return (
    <div className={`flex w-[180px] items-center ${glyph ? "gap-2.5" : ""}`} aria-hidden="true">
      <i className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
      {glyph && (
        <span className="text-[13px] leading-none" style={{ color: "var(--gold)" }}>
          {glyph}
        </span>
      )}
      <i className="h-px flex-1" style={{ background: "linear-gradient(270deg, transparent, var(--gold))" }} />
    </div>
  );
}

function SectionTitle({ children, right }: { children: string; right?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 px-1">
      <h2 className={`${BRAND} m-0 text-[12px] font-semibold tracking-[0.3em] uppercase`} style={{ color: "var(--gold)" }}>
        {children}
      </h2>
      <i className="h-px flex-1" style={{ background: "var(--line)" }} />
      {right}
    </div>
  );
}

function LobbyCard({ mark, title, sub, meta, onClick, testId }: { mark: ReactNode; title: string; sub: string; meta?: string; onClick: () => void; testId: string }) {
  return (
    <button
      type="button"
      className="flex min-h-[74px] cursor-pointer items-center gap-3.5 rounded-2xl border p-3 text-left transition-[transform,border-color] hover:border-[var(--gold)] active:scale-[0.98]"
      style={{ borderColor: "var(--line)", background: "var(--panel)" }}
      onClick={onClick}
      data-testid={testId}
    >
      <span className="flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-xl border" style={{ background: "var(--panel-2)", borderColor: "var(--line)" }}>
        {mark}
      </span>
      <span className="min-w-0 flex-1">
        <b className={`${BRAND} block text-[16.5px] leading-tight font-semibold`} style={{ color: "var(--ivory)" }}>
          {title}
        </b>
        <span className="mt-0.5 block text-[12.5px] leading-snug" style={{ color: "var(--muted)" }}>
          {sub}
        </span>
      </span>
      {meta && (
        <span className="flex-shrink-0 text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: "var(--gold)", fontVariantNumeric: "tabular-nums" }}>
          {meta}
        </span>
      )}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  );
}

/** The latest notes from Noam and Uri, each one a tap away from the exact
 * drill spot it was written on. */
function FeedbackSection() {
  const router = useRouter();
  const [rows, setRows] = useState<FeedbackRow[] | null>(null);

  useEffect(() => {
    fetch("/api/feedback")
      .then((r) => r.json())
      .then((data) => setRows(data as FeedbackRow[]))
      .catch(() => setRows([]));
  }, []);

  const latest = (rows ?? []).slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 3);

  return (
    <section className="flex flex-col gap-2.5" data-testid="lobby-feedback">
      <SectionTitle
        right={
          <Link href="/feedback" className="text-[12.5px] font-semibold" style={{ color: "var(--gold)" }}>
            {rows ? `All ${rows.length} notes →` : "All notes →"}
          </Link>
        }
      >
        Feedback
      </SectionTitle>
      {rows === null && (
        <div className="rounded-2xl border p-3 text-[13px]" style={{ borderColor: "var(--line)", background: "var(--panel)", color: "var(--muted)" }}>
          Loading…
        </div>
      )}
      {rows !== null && latest.length === 0 && (
        <div className="rounded-2xl border p-3 text-[13px]" style={{ borderColor: "var(--line)", background: "var(--panel)", color: "var(--muted)" }}>
          No notes yet. Tap the speech bubble inside any drill to leave one.
        </div>
      )}
      {latest.map((r) => (
        <button
          key={r.id}
          type="button"
          className="flex cursor-pointer flex-col gap-1 rounded-2xl border p-3 text-left transition-[transform,border-color] hover:border-[var(--gold)] active:scale-[0.98]"
          style={{ borderColor: "var(--line)", background: "var(--panel)" }}
          onClick={() => {
            clickSound();
            router.push(feedbackLink(r));
          }}
        >
          <span className="truncate text-[11px] font-semibold tracking-[0.06em] uppercase" style={{ color: "var(--gold)" }}>
            {r.drillLabel || r.drill}
          </span>
          <span className="line-clamp-2 text-[14px] leading-snug" dir="auto">
            {r.message}
          </span>
          <span className="flex items-center justify-between text-[11.5px]" style={{ color: "var(--muted)" }}>
            <span>
              <b style={{ color: "var(--foreground)" }}>{r.author}</b> · {timeAgo(r.createdAt)}
            </span>
            <span style={{ color: "var(--gold)" }}>Open →</span>
          </span>
        </button>
      ))}
    </section>
  );
}
