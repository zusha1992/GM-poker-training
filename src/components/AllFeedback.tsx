"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { saveFeedbackName, savedFeedbackName, timeAgo, type FeedbackRow } from "@/lib/drill/feedback";
import { feedbackLink } from "@/lib/drill/feedback-links";

/** Every note across every drill, newest thread first, with its replies
 * underneath. Each thread links back to the exact spot it was written on,
 * and can be replied to or deleted right here — so Noam and Uri can work
 * through feedback without opening every drill. */
export function AllFeedback() {
  const [rows, setRows] = useState<FeedbackRow[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/feedback");
      setRows((await res.json()) as FeedbackRow[]);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => void load(), 0);
    return () => clearTimeout(t);
  }, [load]);

  const drills = useMemo(() => [...new Set((rows ?? []).map((r) => r.drill))], [rows]);
  const labelOf = (d: string) => (rows ?? []).find((r) => r.drill === d)?.drillLabel || d;

  /** Top-level notes, newest first (a thread with a new reply counts as new). */
  const threads = useMemo(() => {
    const all = rows ?? [];
    const replies = new Map<string, FeedbackRow[]>();
    for (const r of all) {
      if (!r.parentId) continue;
      const list = replies.get(r.parentId) ?? [];
      list.push(r);
      replies.set(r.parentId, list);
    }
    return all
      .filter((r) => !r.parentId && (!activeFilter || r.drill === activeFilter))
      .map((r) => {
        const rs = (replies.get(r.id) ?? []).sort((a, b) => a.createdAt.localeCompare(b.createdAt));
        const last = rs.length ? rs[rs.length - 1].createdAt : r.createdAt;
        return { note: r, replies: rs, last };
      })
      .sort((a, b) => b.last.localeCompare(a.last));
  }, [rows, activeFilter]);

  async function remove(row: FeedbackRow, replyCount: number) {
    const ask = replyCount ? `Delete this note and its ${replyCount} ${replyCount === 1 ? "reply" : "replies"}?` : "Delete this note?";
    if (!window.confirm(ask)) return;
    await fetch(`/api/feedback/${row.id}`, { method: "DELETE" });
    void load();
  }

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
          <FilterChip on={!activeFilter} onClick={() => setActiveFilter(null)}>
            All
          </FilterChip>
          {drills.map((d) => (
            <FilterChip key={d} on={activeFilter === d} onClick={() => setActiveFilter(d)}>
              {labelOf(d)}
            </FilterChip>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2.5" data-testid="feedback-threads">
        {rows === null && !failed && <Empty text="Loading…" />}
        {failed && <Empty text="Could not load feedback." />}
        {rows !== null && !failed && threads.length === 0 && <Empty text="No feedback yet. Once someone leaves a note on any drill, it shows up here." />}
        {threads.map(({ note, replies }) => (
          <div key={note.id} className="rounded-[14px] border p-3" style={{ borderColor: "var(--line)", background: "var(--panel)" }} data-testid="feedback-thread">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span
                className="min-w-0 truncate rounded-full border px-2 py-0.5 font-[family-name:var(--font-display)] text-[10px] font-bold tracking-[0.04em]"
                style={{ borderColor: "var(--line)", color: "var(--mix)", background: "var(--panel-2)" }}
              >
                {note.drillLabel || note.drill}
              </span>
              <Link href={feedbackLink(note)} className="flex-shrink-0 font-[family-name:var(--font-display)] text-[12px] font-bold" style={{ color: "var(--mix)" }}>
                Open this spot &rarr;
              </Link>
            </div>

            <Note row={note} onDelete={() => void remove(note, replies.length)} />

            {replies.length > 0 && (
              <div className="mt-2 flex flex-col gap-2 border-l-2 pl-3" style={{ borderColor: "var(--line)" }}>
                {replies.map((r) => (
                  <Note key={r.id} row={r} onDelete={() => void remove(r, 0)} />
                ))}
              </div>
            )}

            {replyingTo === note.id ? (
              <ReplyBox
                parent={note}
                onCancel={() => setReplyingTo(null)}
                onSent={() => {
                  setReplyingTo(null);
                  void load();
                }}
              />
            ) : (
              <button
                type="button"
                className="mt-2 h-[34px] w-full cursor-pointer rounded-xl border text-[13px] font-semibold"
                style={{ borderColor: "var(--line)", color: "var(--foreground)" }}
                onClick={() => setReplyingTo(note.id)}
              >
                Reply
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Note({ row, onDelete }: { row: FeedbackRow; onDelete: () => void }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <b className="font-[family-name:var(--font-display)] text-[13px]">{row.author}</b>
        <span className="flex-1 text-[11px]" style={{ color: "var(--muted)" }}>
          {timeAgo(row.createdAt)}
          {row.updatedAt ? " · edited" : ""}
        </span>
        <button type="button" className="cursor-pointer text-[11.5px] font-semibold" style={{ color: "var(--raise)" }} onClick={onDelete} aria-label={`Delete ${row.author}'s note`}>
          Delete
        </button>
      </div>
      <div className="whitespace-pre-wrap text-[14px] leading-[1.45]" dir="auto">
        {row.message}
      </div>
    </div>
  );
}

/** Reply under a thread: remembers the writer's name like the drill's feedback box. */
function ReplyBox({ parent, onCancel, onSent }: { parent: FeedbackRow; onCancel: () => void; onSent: () => void }) {
  const [name, setName] = useState(() => savedFeedbackName());
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  async function send() {
    const author = name.trim();
    const message = text.trim();
    if (!author || !message || sending) return;
    setSending(true);
    saveFeedbackName(author);
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ drill: parent.drill, drillLabel: parent.drillLabel, pageUrl: parent.pageUrl, parentId: parent.id, author, message }),
    });
    onSent();
  }

  const field = "w-full rounded-xl border px-3 py-2 text-[14px]";
  const fieldStyle = { borderColor: "var(--line)", background: "var(--panel-2)", color: "var(--foreground)" };
  return (
    <div className="mt-2 flex flex-col gap-1.5" data-testid="reply-box">
      {!savedFeedbackName() && <input className={field} style={fieldStyle} placeholder="Your name (Uri or Noam)" value={name} onChange={(e) => setName(e.target.value)} />}
      <textarea className={`${field} min-h-[64px]`} style={fieldStyle} placeholder={`Reply to ${parent.author}…`} value={text} onChange={(e) => setText(e.target.value)} autoFocus dir="auto" />
      <div className="flex gap-2">
        <button
          type="button"
          className="h-[38px] flex-[2] cursor-pointer rounded-xl border-0 text-[14px] font-bold disabled:opacity-50"
          style={{ background: "var(--mix)", color: "#2B1C02" }}
          disabled={!name.trim() || !text.trim() || sending}
          onClick={() => void send()}
        >
          {sending ? "Sending…" : "Send reply"}
        </button>
        <button type="button" className="h-[38px] flex-1 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

function FilterChip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border px-2.5 py-1 font-[family-name:var(--font-display)] text-[11px] font-semibold"
      style={{ borderColor: on ? "var(--mix)" : "var(--line)", color: on ? "var(--mix)" : "var(--muted)", background: on ? "var(--panel-2)" : "var(--panel)" }}
    >
      {children}
    </button>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="px-2.5 py-10 text-center text-[13px]" style={{ color: "var(--muted)" }}>
      {text}
    </div>
  );
}
