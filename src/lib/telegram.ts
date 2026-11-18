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
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
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
    if (!res.ok) console.log("telegram send failed", res.status, await res.text());
  } catch {
    // The group is a copy; the note is already saved on the site.
  }
}

/** A note, one thing per line (Noam 2026-11-16: easier to read on the phone):
 *  📝 Noam
 *  River: how many big blinds
 *  🃏 8♠ 8♦ 6♣ J♦ 9♦
 *  🎯 Second pair (A9, K9, Q9)
 *  📦 App: 0–5 · Tried: 15–25 (wrong)
 *
 *  the note                                              [Open this spot] */
export function noteToGroup(row: Pick<FeedbackRow, "id" | "drill" | "drillLabel" | "pageUrl" | "author" | "message" | "parentId"> & { context?: string | null }) {
  let c: { drill?: string; spot?: string; focus?: string; app?: string; player?: string } = {};
  try {
    c = row.context ? JSON.parse(row.context) : {};
  } catch {
    // Older notes have no context.
  }
  const [cards, ...rest] = (c.spot ?? "").split(" · ");
  const lines = [
    `${row.parentId ? "↩️ Reply from" : "📝"} <b>${esc(row.author)}</b>`,
    `<i>${esc(c.drill ?? (row.drillLabel || row.drill))}${rest.length ? ` · ${esc(rest.join(" · "))}` : ""}</i>`,
    cards ? `🃏 <b>${esc(cards)}</b>` : "",
    c.focus ? `🎯 ${esc(c.focus)}` : "",
    c.app || c.player ? `📦 ${[c.app && `App: ${c.app}`, c.player && `Tried: ${c.player}`].filter(Boolean).map((x) => esc(x as string)).join(" · ")}` : "",
    "",
    esc(row.message),
  ];
  const html = lines.filter((l, i) => l !== "" || i === 5).join("\n");
  // The note's id rides in the link: a reply to this message in Telegram is saved under the same note.
  const link = feedbackLink(row);
  return sendToGroup(html, [{ text: "Open this spot", url: `${SITE}${link}${link.includes("?") ? "&" : "?"}note=${row.parentId ?? row.id}` }]);
}
