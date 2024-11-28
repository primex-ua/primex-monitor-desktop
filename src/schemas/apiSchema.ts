import { z } from 'zod';

export const materialsSchema = z.array(
  z.object({
    name: z.string(),
    value: z.number(),
    units: z.string().optional(),
    decimalPart: z.number().optional(),
  }),
);

export const apiEntrySchema = z.object({
  name: z.string(),
  press: z.number().nullable(),
  materialsConsumed: materialsSchema,
  totalWeight: z.number(),
  moistureContent: z.number().nullable(),
  producedRunningMeters: z.number().nullable(),
  mode: z.enum(['auto', 'manual']).nullable(),
  mixedAt: z
    .string()
    .datetime()
    .transform((dateTime) => new Date(dateTime)),
});

export type ApiEntry = z.infer<typeof apiEntrySchema>;

export type Materials = z.infer<typeof materialsSchema>;
