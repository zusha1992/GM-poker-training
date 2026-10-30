import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const drillFeedback = sqliteTable("drill_feedback", {
  id: text("id").primaryKey(),
  drill: text("drill").notNull(),
  /** Human-readable label for the drill/spot (e.g. "Raise first in — UTG"), shown in the all-feedback overview. Nullable: rows written before this column existed don't have one. */
  drillLabel: text("drill_label"),
  /** Relative URL (page + query params) that deep-links back to where this was written. Nullable, same reason. */
  pageUrl: text("page_url"),
  /** JSON (FeedbackContext): exactly what was on screen when the note was
   * written — board and street, the hand group being asked, the app's answer,
   * the writer's last try. Nullable: older rows and replies don't have one. */
  context: text("context"),
  parentId: text("parent_id"),
  author: text("author").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at"),
});
