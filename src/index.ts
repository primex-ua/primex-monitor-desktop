import 'dotenv/config';
import cron from 'node-cron';
import { postData } from './api/postData';
import { getEnvTimestamp } from './lib/getEnvTimestamp';
import { loadLastTimestamp, saveLastTimestamp } from './lib/timestamp';
import { getProductsSince } from './queries/products';

async function main() {
  const timestamp = (await loadLastTimestamp()) ?? getEnvTimestamp();

  console.log('\nПеревіряю наявність нових записів з', timestamp);

  const products = await getProductsSince(timestamp);

  console.log(`Знайдено ${products.length} нових записів`);

  if (!products.length) return;

  const isSuccess = await postData(products);

  if (!isSuccess) return;

  await saveLastTimestamp(products[products.length - 1].mixedAt);
}

main();

cron.schedule('*/15 * * * * *', main);
