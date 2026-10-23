import { getDb } from "@/db";
import { drillFeedback } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const body = (await request.json()) as { message?: string };
  const message = (body.message ?? "").trim();
  if (!message) {
    return Response.json({ error: "message is required" }, { status: 400 });
  }

  const db = await getDb();
  const updatedAt = new Date().toISOString();
  await db
    .update(drillFeedback)
    .set({ message, updatedAt })
    .where(eq(drillFeedback.id, id));

  return Response.json({ id, message, updatedAt });
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const db = await getDb();
  await db.delete(drillFeedback).where(eq(drillFeedback.parentId, id));
  await db.delete(drillFeedback).where(eq(drillFeedback.id, id));
  return new Response(null, { status: 204 });
}
