import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const drillFeedback = sqliteTable("drill_feedback", {
  id: text("id").primaryKey(),
  drill: text("drill").notNull(),
  parentId: text("parent_id"),
  author: text("author").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at"),
});
