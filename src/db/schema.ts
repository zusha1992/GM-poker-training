import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const drillFeedback = sqliteTable("drill_feedback", {
  id: text("id").primaryKey(),
  drill: text("drill").notNull(),
  /** Human-readable label for the drill/spot (e.g. "Raise first in — UTG"), shown in the all-feedback overview. Nullable: rows written before this column existed don't have one. */
  drillLabel: text("drill_label"),
  /** Relative URL (page + query params) that deep-links back to where this was written. Nullable, same reason. */
  pageUrl: text("page_url"),
  parentId: text("parent_id"),
  author: text("author").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at"),
});
