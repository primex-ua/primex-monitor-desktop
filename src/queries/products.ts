import db from '../drizzle/db';
import { transformData } from '../lib/transformData';
import { getSettings } from './settings';

export async function getProductsSince(since: Date) {
  try {
    const dbSettings = await getSettings();

    const dbData = await db.query.products.findMany({
      where: (products, { gt }) => gt(products.dateTime, since),
    });
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
