import { z } from 'zod';

export const dbRecordSchema = z.object({
  ДатаВремя: z.string().transform((dateString) => new Date(dateString)),
  Pres: z.preprocess((value) => value ?? 0, z.number()),
  НаименованиеРецепта: z.string(),
  // Компонент1_Задано: z.preprocess((value) => value ?? 0, z.number()),
  // Компонент2_Задано: z.preprocess((value) => value ?? 0, z.number()),
  // Компонент3_Задано: z.preprocess((value) => value ?? 0, z.number()),
  // Компонент4_Задано: z.preprocess((value) => value ?? 0, z.number()),
  // Компонент5_Задано: z.preprocess((value) => value ?? 0, z.number()),
  // Компонент6_Задано: z.preprocess((value) => value ?? 0, z.number()),
  // ВодаПервичная_Задано: z.preprocess((value) => value ?? 0, z.number()),
  // ВлажСмеси_Задано: z.preprocess((value) => value ?? 0, z.number()),
  Компонент1_Получено: z.preprocess((value) => value ?? 0, z.number()),
  Компонент2_Получено: z.preprocess((value) => value ?? 0, z.number()),
  Компонент3_Получено: z.preprocess((value) => value ?? 0, z.number()),
  Компонент4_Получено: z.preprocess((value) => value ?? 0, z.number()),
  Компонент5_Получено: z.preprocess((value) => value ?? 0, z.number()),
  Компонент6_Получено: z.preprocess((value) => value ?? 0, z.number()),
  Вода_Получено: z.preprocess((value) => value ?? 0, z.number()),
  Смесь_Получено: z.preprocess((value) => value ?? 0, z.number()),
  ВлажСмеси_Получено: z.preprocess((value) => value ?? 0, z.number()),
  // Ploschad: z.preprocess((value) => value ?? 0, z.number()),
  // C_U1: z.preprocess((value) => value ?? 0, z.number()),
  // C_U2: z.preprocess((value) => value ?? 0, z.number()),
  PytomaVaga: z.preprocess((value) => value ?? 0, z.number()),
  РежимИсполнения: z.enum(['Р', 'А']),
  // Count1: z.number().nullable(),
  // Count2: z.number().nullable(),
  // Count3: z.number().nullable(),
  // Count4: z.number().nullable(),
  // Count5: z.number().nullable(),
  // Count6: z.number().nullable(),
  // CountPres1: z.number().nullable(),
  // CountPres2: z.number().nullable(),
  // Tot1: z.number().nullable(),
  // Tot2: z.number().nullable(),
  // Tot3: z.number().nullable(),
  // Tot4: z.number().nullable(),
  // Tot5: z.number().nullable(),
  // Tot6: z.number().nullable(),
  // TotU: z.number().nullable(),
  // Примечание: z.preprocess((value) => value ?? '', z.string()),
});

export type DbRecord = z.infer<typeof dbRecordSchema>;

export const dbSettingsSchema = z.object({
  NameInComp1: z.string().nullable().optional(),
  NameInComp2: z.string().nullable().optional(),
  NameInComp3: z.string().nullable().optional(),
  NameInComp4: z.string().nullable().optional(),
  NameInComp5: z.string().nullable().optional(),
  NameInComp6: z.string().nullable().optional(),
});

export type DbSettings = z.infer<typeof dbSettingsSchema>;
