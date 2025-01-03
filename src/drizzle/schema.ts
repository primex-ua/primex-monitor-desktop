import { sql } from 'drizzle-orm';
import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('Продукция', {
  id: int().primaryKey({ autoIncrement: true }),
  dateTime: int('ДатаВремя', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  press: int('Pres'),
  name: text('НаименованиеРецепта').notNull(),
  component1: real('Компонент1_Получено'),
  component2: real('Компонент2_Получено'),
  component3: real('Компонент3_Получено'),
  component4: real('Компонент4_Получено'),
  component5: real('Компонент5_Получено'),
  component6: real('Компонент6_Получено'),
  water: real('Вода_Получено').notNull(),
  totalWeight: real('Смесь_Получено').notNull(),
  specificWeight: real('PytomaVaga'),
  moistureContent: real('ВлажСмеси_Получено'),
  mode: text('РежимИсполнения', { enum: ['Р', 'А'] }),
  // Ploschad: real('Ploschad').notNull(),
  // C_U1: real('C_U1'),
  // C_U2: real('C_U2'),
  // Count1: int('Count1'),
  // Count2: int('Count2'),
  // Count3: int('Count3'),
  // Count4: int('Count4'),
  // Count5: int('Count5'),
  // Count6: int('Count6'),
  // CountPres1: int('CountPres1'),
  // CountPres2: int('CountPres2'),
  // Tot1: real('Tot1'),
  // Tot2: real('Tot2'),
  // Tot3: real('Tot3'),
  // Tot4: real('Tot4'),
  // Tot5: real('Tot5'),
  // Tot6: real('Tot6'),
  // TotU: real('TotU'),
  // Примечание: text('Примечание'),
});

export const settings = sqliteTable('НастройкиПрограммы', {
  NameInComp1: text('NameInComp1'),
  NameInComp2: text('NameInComp2'),
  NameInComp3: text('NameInComp3'),
  NameInComp4: text('NameInComp4'),
  NameInComp5: text('NameInComp5'),
  NameInComp6: text('NameInComp6'),
});
