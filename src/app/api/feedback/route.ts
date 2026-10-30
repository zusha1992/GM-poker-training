import { getDb } from "@/db";
import { drillFeedback } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const drill = searchParams.get("drill");

  const db = await getDb();
  const rows = drill
    ? await db
        .select()
        .from(drillFeedback)
        .where(eq(drillFeedback.drill, drill))
        .orderBy(asc(drillFeedback.createdAt))
    : await db
        .select()
        .from(drillFeedback)
        .orderBy(asc(drillFeedback.createdAt));

  return Response.json(rows);
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    drill?: string;
    drillLabel?: string;
    pageUrl?: string;
    parentId?: string | null;
    author?: string;
    message?: string;
    /** What was on screen (FeedbackContext); stored as JSON. */
    context?: unknown;
  };

  const message = (body.message ?? "").trim();
  if (!message) {
    return Response.json({ error: "message is required" }, { status: 400 });
  }

  const db = await getDb();
  const drill = (body.drill ?? "unknown").trim() || "unknown";
  const row = {
    id: crypto.randomUUID(),
    drill,
    drillLabel: (body.drillLabel ?? "").trim() || drill,
    pageUrl: (body.pageUrl ?? "").trim() || "/",
    parentId: body.parentId ?? null,
    context: body.context ? JSON.stringify(body.context).slice(0, 4000) : null,
    author: (body.author ?? "Uri").trim() || "Uri",
    message,
    createdAt: new Date().toISOString(),
    updatedAt: null as string | null,
  };

  await db.insert(drillFeedback).values(row);

  return Response.json(row);
}
