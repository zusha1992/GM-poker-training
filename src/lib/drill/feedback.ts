export type FeedbackRow = {
  id: string;
  drill: string;
  drillLabel: string | null;
  pageUrl: string | null;
  parentId: string | null;
  author: string;
  message: string;
  createdAt: string;
  updatedAt: string | null;
};

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
