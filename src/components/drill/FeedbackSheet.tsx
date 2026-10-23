"use client";

import { useCallback, useEffect, useState } from "react";
import { Sheet } from "@/components/ui/Sheet";
import styles from "./FeedbackSheet.module.css";
import {
  isMine,
  saveFeedbackName,
  savedFeedbackName,
  timeAgo,
  type FeedbackRow,
} from "@/lib/drill/feedback";

type FeedbackSheetProps = {
  open: boolean;
  onClose: () => void;
  drillTag: string;
  drillLabel: string;
  pageUrl: string;
};

/** Per-drill feedback thread: a flat list of top-level notes with one
 * level of replies, backed by /api/feedback (D1). Anyone can edit/delete
 * their own messages (matched by name, not auth — this is a two-person
 * tool for Noam and Uri, not a public comment system). */
export function FeedbackSheet({ open, onClose, drillTag, drillLabel, pageUrl }: FeedbackSheetProps) {
  const [rows, setRows] = useState<FeedbackRow[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [replyTo, setReplyTo] = useState<{ id: string; snippet: string } | null>(null);
  const [editing, setEditing] = useState<{ id: string; value: string } | null>(null);

  const load = useCallback(async () => {
    setFailed(false);
    try {
      const res = await fetch(`/api/feedback?drill=${encodeURIComponent(drillTag)}`);
      setRows(await res.json());
    } catch {
      setFailed(true);
    }
  }, [drillTag]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      setName(savedFeedbackName());
      setReplyTo(null);
      setEditing(null);
      setMessage("");
      void load();
    }, 0);
    return () => clearTimeout(t);
  }, [open, load]);

  async function send() {
    const author = name.trim();
    const text = message.trim();
    if (!author || !text) return;
    saveFeedbackName(author);
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ drill: drillTag, drillLabel, pageUrl, parentId: replyTo?.id ?? null, author, message: text }),
    });
    setMessage("");
    setReplyTo(null);
    void load();
  }

  async function saveEdit() {
    if (!editing) return;
    const text = editing.value.trim();
    if (!text) return;
    await fetch(`/api/feedback/${editing.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });
    setEditing(null);
    void load();
  }

  async function doDelete(id: string) {
    if (typeof window !== "undefined" && !window.confirm("Delete this note?")) return;
    await fetch(`/api/feedback/${id}`, { method: "DELETE" });
    void load();
  }

  const byParent = new Map<string, FeedbackRow[]>();
  (rows ?? []).filter((r) => r.parentId).forEach((r) => {
    const list = byParent.get(r.parentId!) ?? [];
    list.push(r);
    byParent.set(r.parentId!, list);
  });
  const topLevel = (rows ?? []).filter((r) => !r.parentId);

  function renderMessage(row: FeedbackRow, isReply: boolean) {
    const mine = isMine(row, name);
    const isEditing = editing?.id === row.id;
    return (
      <div key={row.id} className={`${styles.msg} ${isReply ? styles.reply : ""}`}>
        <div className={styles.head}>
          <b>{row.author}</b>
          <span>
            {timeAgo(row.createdAt)}
            {row.updatedAt ? " · edited" : ""}
          </span>
        </div>
        {isEditing ? (
          <textarea
            className={styles.textarea}
            style={{ minHeight: 46 }}
            value={editing.value}
            onChange={(e) => setEditing({ id: row.id, value: e.target.value })}
            autoFocus
          />
        ) : (
          <div className={styles.text}>{row.message}</div>
        )}
        <div className={styles.actions}>
          {isEditing ? (
            <>
              <button type="button" onClick={saveEdit}>
                Save
              </button>
              <button type="button" onClick={() => setEditing(null)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              {!isReply && (
                <button type="button" onClick={() => setReplyTo({ id: row.id, snippet: row.message.slice(0, 40) })}>
                  Reply
                </button>
              )}
              {mine && (
                <>
                  <button type="button" onClick={() => setEditing({ id: row.id, value: row.message })}>
                    Edit
                  </button>
                  <button type="button" onClick={() => void doDelete(row.id)}>
                    Delete
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()} title={`Feedback · ${drillLabel}`}>
      <div className={styles.wrap}>
        <div className={styles.list}>
          {rows === null && !failed && <div className={styles.empty}>Loading…</div>}
          {failed && <div className={styles.empty}>Could not load feedback.</div>}
          {rows !== null && !failed && topLevel.length === 0 && (
            <div className={styles.empty}>No notes yet on this drill.</div>
          )}
          {topLevel.map((row) => (
            <div key={row.id}>
              {renderMessage(row, false)}
              {(byParent.get(row.id) ?? []).map((r) => renderMessage(r, true))}
            </div>
          ))}
        </div>
        <div className={styles.compose}>
          {replyTo && (
            <div className={styles.replyTo}>
              Replying to: {replyTo.snippet}
              <button type="button" onClick={() => setReplyTo(null)}>
                cancel
              </button>
            </div>
          )}
          <input
            className={styles.nameInput}
            placeholder="Your name (Uri or Noam)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className={styles.textarea}
            placeholder="Write a note…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="h-[52px] rounded-2xl border-0 text-[16px] font-bold"
            style={{ background: "var(--mix)", color: "#2B1C02" }}
            onClick={() => void send()}
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </Sheet>
  );
}
