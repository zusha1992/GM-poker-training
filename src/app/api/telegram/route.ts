// Telegram webhook (Noam 2026-11-16): every message Noam or Uri writes in the "GM Poker Training" group is
// saved as feedback, like a note left in the app. A reply to a note the bot posted is saved under that
// note (its spot). The bot reacts 👍 when a message is saved. Telegram signs each call with the secret
// TELEGRAM_WEBHOOK_SECRET (set when the webhook is registered).
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { drillFeedback } from "@/db/schema";
import { TELEGRAM_GROUP } from "@/lib/telegram";

type TgUser = { id: number; is_bot?: boolean; first_name?: string; last_name?: string };
type TgMessage = {
  message_id: number;
  chat: { id: number };
  from?: TgUser;
  text?: string;
  caption?: string;
  voice?: unknown;
  photo?: unknown;
  reply_to_message?: { reply_markup?: { inline_keyboard?: { url?: string }[][] }; text?: string };
};

export async function POST(request: Request) {
  const { env } = await getCloudflareContext({ async: true });
  const secrets = env as unknown as { TELEGRAM_BOT_TOKEN?: string; TELEGRAM_WEBHOOK_SECRET?: string };
  if (!secrets.TELEGRAM_WEBHOOK_SECRET || request.headers.get("x-telegram-bot-api-secret-token") !== secrets.TELEGRAM_WEBHOOK_SECRET) {
    return new Response("forbidden", { status: 403 });
  }
  const update = (await request.json()) as { message?: TgMessage; edited_message?: TgMessage };
  const m = update.message;
  console.log("telegram update", JSON.stringify({ chat: m?.chat.id, from: m?.from?.first_name, text: !!(m?.text ?? m?.caption), keys: Object.keys(update) }));
  if (!m || m.chat.id !== TELEGRAM_GROUP || !m.from || m.from.is_bot) return Response.json({ ok: true });

  const text = (m.text ?? m.caption ?? "").trim() || (m.voice ? "[voice note in Telegram]" : m.photo ? "[photo in Telegram]" : "");
  if (!text) return Response.json({ ok: true });

  // A reply to a note the bot posted: the note's id is in its "Open this spot" link.
  const db = await getDb();
  const url = m.reply_to_message?.reply_markup?.inline_keyboard?.flat().find((b) => b.url?.includes("note="))?.url;
  const noteId = url ? new URL(url).searchParams.get("note") : null;
  const parent = noteId ? (await db.select().from(drillFeedback).where(eq(drillFeedback.id, noteId)).limit(1))[0] : undefined;

  const first = m.from.first_name ?? "Telegram";
  const author = /^uri/i.test(first) ? "Uri" : /^noam/i.test(first) ? "Noam" : [first, m.from.last_name].filter(Boolean).join(" ");
  await db.insert(drillFeedback).values({
    id: crypto.randomUUID(),
    drill: parent?.drill ?? "telegram:group",
    drillLabel: parent?.drillLabel ?? "Telegram group",
    pageUrl: parent?.pageUrl ?? "/",
    parentId: parent ? (parent.parentId ?? parent.id) : null,
    context: JSON.stringify({ source: "telegram", telegramMessage: m.message_id, ...(m.reply_to_message?.text && !parent ? { replyTo: m.reply_to_message.text.slice(0, 500) } : {}) }),
    author,
    message: text,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  });

  // 👍 = saved.
  if (secrets.TELEGRAM_BOT_TOKEN) {
    await fetch(`https://api.telegram.org/bot${secrets.TELEGRAM_BOT_TOKEN}/setMessageReaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_GROUP, message_id: m.message_id, reaction: [{ type: "emoji", emoji: "👍" }] }),
    }).catch(() => {});
  }
  return Response.json({ ok: true });
}
