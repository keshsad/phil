import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entriesTable = sqliteTable("entries_table", {
  id: int().primaryKey({ autoIncrement: true }),
  content: text().notNull(),
  date: text().notNull().unique(),
});

export type Entry = typeof entriesTable.$inferSelect
