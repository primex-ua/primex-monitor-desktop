import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { products, settings } from '../drizzle/schema';

export const dbRecordSchema = createSelectSchema(products);

export type DbRecord = z.infer<typeof dbRecordSchema>;

export const dbSettingsSchema = createSelectSchema(settings);

export type DbSettings = z.infer<typeof dbSettingsSchema>;
