import { z } from 'zod';

export const materialsSchema = z.array(
  z.object({
    name: z.string(),
    value: z.number(),
  }),
);

export const apiEntrySchema = z.object({
  name: z.string(),
  press: z.number(),
  materialsConsumed: materialsSchema,
  moistureContent: z.number(),
  producedRunningMeters: z.number(),
  mode: z.enum(['auto', 'manual']),
  mixedAt: z
    .string()
    .datetime()
    .transform((dateTime) => new Date(dateTime)),
});

export type ApiEntry = z.infer<typeof apiEntrySchema>;

export type Materials = z.infer<typeof materialsSchema>;
