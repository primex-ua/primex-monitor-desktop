import db from '../drizzle/db';

export async function getSettings() {
  const dbSettings = await db.query.settings.findFirst();

  if (!dbSettings) throw new Error('Не вдалося отримати дані з НастройкиПрограммы');

  return dbSettings;
}
