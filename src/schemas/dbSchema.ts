import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { products, settings } from '../drizzle/schema';

export const dbRecordSchema = createSelectSchema(products);

export type DbRecord = z.infer<typeof dbRecordSchema>;

export const insertDbRecordSchema = createInsertSchema(products).omit({
  dateTime: true,
  id: true,
});

export type InsertDbRecord = z.infer<typeof insertDbRecordSchema>;

export const dbSettingsSchema = createSelectSchema(settings);

export type DbSettings = z.infer<typeof dbSettingsSchema>;
