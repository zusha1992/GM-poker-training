// Telegram group for Noam and Uri (2026-11-16): every note left in the app is posted to the group by
// @GMPokerCoachBot, with a button that opens the exact spot. The bot's key is the Worker secret
// TELEGRAM_BOT_TOKEN (never in the code).
import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { FeedbackRow } from "./drill/feedback";
import { feedbackLink } from "./drill/feedback-links";

/** The "GM Poker Training" group. */
export const TELEGRAM_GROUP = -5563852260;
export const SITE = "https://gm-poker-training-app.noamshochat18.workers.dev";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Sends an HTML message to the group, with link buttons. Never throws: a note is saved either way. */
export async function sendToGroup(html: string, buttons: { text: string; url: string }[] = []) {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const token = (env as unknown as { TELEGRAM_BOT_TOKEN?: string }).TELEGRAM_BOT_TOKEN;
    if (!token) return;
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_GROUP,
        text: html,
        parse_mode: "HTML",
        link_preview_options: { is_disabled: true },
        reply_markup: buttons.length ? { inline_keyboard: [buttons] } : undefined,
      }),
    });
  } catch {
    // The group is a copy; the note is already saved on the site.
  }
}

/** "📝 Noam · River · 8♠ 8♦ 6♣ J♦ 9♦ · Second pair" + the note + [Open this spot]. */
export function noteToGroup(row: Pick<FeedbackRow, "id" | "drill" | "drillLabel" | "pageUrl" | "author" | "message" | "parentId"> & { context?: string | null }) {
  let where = row.drillLabel || row.drill;
  try {
    const c = row.context ? (JSON.parse(row.context) as { spot?: string; focus?: string }) : {};
    if (c.spot) where = `${row.drillLabel?.split(" · ")[0] ?? ""} · ${c.spot}`.replace(/^ · /, "");
    if (c.focus) where += ` · ${c.focus}`;
  } catch {
    // Older notes have no context.
  }
  const head = row.parentId ? "↩️" : "📝";
  const html = `${head} <b>${esc(row.author)}</b> · ${esc(where)}\n\n${esc(row.message)}`;
  // The note's id rides in the link: a reply to this message in Telegram is saved under the same note.
  const link = feedbackLink(row);
  return sendToGroup(html, [{ text: "Open this spot", url: `${SITE}${link}${link.includes("?") ? "&" : "?"}note=${row.parentId ?? row.id}` }]);
}
