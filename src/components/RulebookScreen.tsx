"use client";

import { useState } from "react";
import Link from "next/link";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import styles from "./RulebookScreen.module.css";

type Section = { title: string; html: string };

/** The rulebook, one section per card. Rules change through Uri and Noam's
 * notes ("Suggest a change" on any section), which Claude then applies to
 * the rulebook and the drill — so the page and the drill never disagree. */
export function RulebookScreen({ introHtml, sections }: { introHtml: string; sections: Section[] }) {
  const [suggesting, setSuggesting] = useState<Section | null>(null);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="mx-auto flex min-h-dvh max-w-[560px] flex-col gap-3 px-4 pb-10 pt-4" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="flex items-center gap-2.5">
        <Link
          href="/"
          aria-label="Lobby"
          className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] border"
          style={{ borderColor: "var(--line)", background: "var(--panel)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 11l8-7 8 7" />
            <path d="M6 10v10h12V10" />
          </svg>
        </Link>
        <h1 className="m-0 flex-1 font-[family-name:var(--font-display)] text-[19px] font-bold">Rulebook · How many big blinds?</h1>
      </div>

      <div className={styles.md} dangerouslySetInnerHTML={{ __html: introHtml }} />

      <p className="m-0 rounded-xl border p-2.5 text-[12.5px] leading-snug" style={{ borderColor: "var(--mix)", color: "var(--muted)", background: "var(--panel)" }}>
        Want to change a rule? Tap <b style={{ color: "var(--mix)" }}>Suggest a change</b> on its section. Claude reads the notes, updates the rulebook and the
        drill together, and replies in the thread.
      </p>

      {sections.map((s) => {
        const isOpen = open[s.title] ?? true;
        return (
          <section key={s.title} className="rounded-[14px] border" style={{ borderColor: "var(--line)", background: "var(--panel)" }} data-testid="rulebook-section">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center gap-2 p-3 text-left"
              onClick={() => setOpen((o) => ({ ...o, [s.title]: !isOpen }))}
              aria-expanded={isOpen}
            >
              <b className="flex-1 font-[family-name:var(--font-display)] text-[15.5px]">{s.title}</b>
              <span style={{ color: "var(--muted)" }}>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <div className="flex flex-col gap-2 px-3 pb-3">
                <div className={styles.md} dangerouslySetInnerHTML={{ __html: s.html }} />
                <button
                  type="button"
                  className="h-[36px] cursor-pointer self-start rounded-xl border px-3 text-[12.5px] font-semibold"
                  style={{ borderColor: "var(--mix)", color: "var(--mix)" }}
                  onClick={() => setSuggesting(s)}
                >
                  Suggest a change
                </button>
              </div>
            )}
          </section>
        );
      })}

      <FeedbackSheet
        open={!!suggesting}
        onClose={() => setSuggesting(null)}
        drillTag={`rulebook:${suggesting?.title ?? ""}`}
        drillLabel={`Rulebook · ${suggesting?.title ?? ""}`}
        pageUrl="/rulebook"
        context={suggesting ? { drill: "Rulebook", spot: suggesting.title } : undefined}
      />
    </div>
  );
}
