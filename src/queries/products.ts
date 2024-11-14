import { z } from 'zod';
import { transformData } from '../lib/transformData';
import { dbRecordSchema, dbSettingsSchema } from '../schemas/dbSchema';
import db from '../lib/db';
import { getSettings } from './settings';
import { formatDateToAccessDate } from '../lib/formatDate';

export async function getProductsSince(since: string) {
  const sql = `
  SELECT ДатаВремя, Pres, НаименованиеРецепта, Компонент1_Получено, Компонент2_Получено, Компонент3_Получено,
  Компонент4_Получено, Компонент5_Получено, Компонент6_Получено, Вода_Получено, Смесь_Получено, ВлажСмеси_Получено,
  PytomaVaga, РежимИсполнения
  FROM Продукция 
  WHERE ДатаВремя > #${formatDateToAccessDate(since)}#
  `;

  try {
    const dbSettings = await getSettings();

    const rawData = await db.query(sql);
    const dbData = z.array(dbRecordSchema).parse(rawData);
    // console.log('DB DATA\n', dbData[0]);

    const apiData = transformData(dbData, dbSettings);
    // console.log('API DATA\n', apiData[0]);
    // console.log('API Materials\n', apiData[0]?.materialsConsumed);

    return apiData;
  } catch (error) {
    console.error('Error querying database:', error);
    return [];
  }
}
