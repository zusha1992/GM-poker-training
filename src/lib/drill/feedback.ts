export type FeedbackRow = {
  id: string;
  drill: string;
  drillLabel: string | null;
  pageUrl: string | null;
  parentId: string | null;
  /** JSON of a FeedbackContext, or null (older notes, replies). */
  context?: string | null;
  author: string;
  message: string;
  createdAt: string;
  updatedAt: string | null;
};

/** Exactly where a note was written, so Noam and Uri (and Claude, reading
 * the notes later) know what it's about without guessing. Plain strings so
 * every drill can fill it its own way. */
export type FeedbackContext = {
  /** e.g. "How many big blinds" */
  drill: string;
  /** e.g. "A♣ 7♦ 2♠ 6♦ · Turn (dynamic)" */
  spot: string;
  /** The hand group on screen, e.g. "AT–A8 · Top pair, medium kicker" */
  focus?: string;
  /** The app's answer for it, e.g. "~20% of stack" */
  app?: string;
  /** What the writer last tried for it, e.g. "~50% of stack (wrong)" */
  player?: string;
};

export function parseContext(row: Pick<FeedbackRow, "context">): FeedbackContext | null {
  if (!row.context) return null;
  try {
    return JSON.parse(row.context) as FeedbackContext;
  } catch {
    return null;
  }
}

export const FEEDBACK_NAME_KEY = "gmpt_feedback_name";

export function timeAgo(iso: string): string {
  const diffSeconds = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diffSeconds < 60) return "just now";
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
  const d = new Date(iso);
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
}

export function savedFeedbackName(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(FEEDBACK_NAME_KEY) ?? "";
  } catch {
    return "";
  }
}

export function saveFeedbackName(name: string) {
  try {
    localStorage.setItem(FEEDBACK_NAME_KEY, name);
  } catch {
    // ignore
  }
}

export function isMine(row: { author: string }, myName: string): boolean {
  return !!myName && row.author.trim().toLowerCase() === myName.trim().toLowerCase();
}
