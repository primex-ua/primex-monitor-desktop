import { z } from 'zod';
import db from '../lib/db';
import { dbSettingsSchema } from '../schemas/dbSchema';

export async function getSettings() {
  const sql = `SELECT NameInComp1, NameInComp2, NameInComp3, NameInComp4, NameInComp5, NameInComp6 FROM НастройкиПрограммы`;

  const rawSettings = await db.query(sql);

  const dbSettings = z.array(dbSettingsSchema).parse(rawSettings)[0];

  return dbSettings;
}
