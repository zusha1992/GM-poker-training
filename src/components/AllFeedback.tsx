"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { timeAgo, type FeedbackRow } from "@/lib/drill/feedback";
import { feedbackLink } from "@/lib/drill/feedback-links";

/** Every note across every drill, newest first, each with a deep link
 * back to the page it was written on — so a viewer doesn't have to click
 * through every drill looking for comments. */
export function AllFeedback() {
  const [rows, setRows] = useState<FeedbackRow[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/feedback")
      .then((r) => r.json())
      .then((data) => setRows(data as FeedbackRow[]))
      .catch(() => setFailed(true));
  }, []);

  const byId = useMemo(() => {
    const map = new Map<string, FeedbackRow>();
    (rows ?? []).forEach((r) => map.set(r.id, r));
    return map;
  }, [rows]);

  const drills = useMemo(() => [...new Set((rows ?? []).map((r) => r.drill))], [rows]);
  const labelOf = (d: string) => (rows ?? []).find((r) => r.drill === d)?.drillLabel || d;

  const visible = useMemo(() => {
    const list = activeFilter ? (rows ?? []).filter((r) => r.drill === activeFilter) : rows ?? [];
    return list.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }, [rows, activeFilter]);

  return (
    <div className="mx-auto flex min-h-dvh max-w-[520px] flex-col gap-3 px-4 pb-8 pt-4" style={{ background: "var(--background)", color: "var(--foreground)" }}>
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
        <h1 className="m-0 flex-1 font-[family-name:var(--font-display)] text-[19px] font-bold">All Feedback</h1>
      </div>

      {drills.length >= 2 && (
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className="rounded-full border px-2.5 py-1 font-[family-name:var(--font-display)] text-[11px] font-semibold"
            style={{
              borderColor: activeFilter ? "var(--line)" : "var(--mix)",
              color: activeFilter ? "var(--muted)" : "var(--mix)",
              background: activeFilter ? "var(--panel)" : "var(--panel-2)",
            }}
          >
            All
          </button>
          {drills.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setActiveFilter(d)}
              className="rounded-full border px-2.5 py-1 font-[family-name:var(--font-display)] text-[11px] font-semibold"
              style={{
                borderColor: activeFilter === d ? "var(--mix)" : "var(--line)",
                color: activeFilter === d ? "var(--mix)" : "var(--muted)",
                background: activeFilter === d ? "var(--panel-2)" : "var(--panel)",
              }}
            >
              {labelOf(d)}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2.5">
        {rows === null && !failed && <Empty text="Loading…" />}
        {failed && <Empty text="Could not load feedback." />}
        {rows !== null && !failed && visible.length === 0 && (
          <Empty text="No feedback yet. Once someone leaves a note on any drill, it shows up here." />
        )}
        {visible.map((r) => {
          const parent = r.parentId ? byId.get(r.parentId) : null;
          return (
            <div key={r.id} className="rounded-[14px] border p-3" style={{ borderColor: "var(--line)", background: "var(--panel)" }}>
              <span
                className="mb-2 inline-block rounded-full border px-2 py-0.5 font-[family-name:var(--font-display)] text-[10px] font-bold tracking-[0.04em]"
                style={{ borderColor: "var(--line)", color: "var(--mix)", background: "var(--panel-2)" }}
              >
                {r.drillLabel || r.drill}
              </span>
              {parent && (
                <div className="mb-1 text-[11px]" style={{ color: "var(--muted)" }}>
                  &#8618; replying to {parent.author}: &quot;{parent.message.slice(0, 50)}
                  {parent.message.length > 50 ? "…" : ""}&quot;
                </div>
              )}
              <div className="mb-1 flex items-center gap-2">
                <b className="font-[family-name:var(--font-display)] text-[13px]">{r.author}</b>
                <span className="text-[11px]" style={{ color: "var(--muted)" }}>
                  {timeAgo(r.createdAt)}
                  {r.updatedAt ? " · edited" : ""}
                </span>
              </div>
              <div className="mb-2 whitespace-pre-wrap text-[14px] leading-[1.45]">{r.message}</div>
              <Link href={feedbackLink(r)} className="font-[family-name:var(--font-display)] text-[12px] font-bold" style={{ color: "var(--mix)" }}>
                Open this spot &rarr;
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="px-2.5 py-10 text-center text-[13px]" style={{ color: "var(--muted)" }}>
      {text}
    </div>
  );
}
