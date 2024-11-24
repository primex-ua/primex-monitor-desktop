import db from '../drizzle/db';
import { products } from '../drizzle/schema';
import { InsertDbRecord } from '../schemas/dbSchema';

function getRandomNumber(min: number, max: number, decimalPart = 0) {
  const value = Math.random() * (max - min + 1) + min;
  return !decimalPart ? Math.floor(value) : parseFloat(value.toFixed(decimalPart));
}

function generateRandomRecord(): InsertDbRecord {
  return {
    dateTime: new Date(),
    mode: getRandomNumber(1, 2) % 2 === 0 ? 'А' : 'Р',
    mixture: getRandomNumber(50, 1000),
    moistureContent: getRandomNumber(1, 20, 2),
    name: `Рецепт ${getRandomNumber(1, 30)}`,
    Pres: getRandomNumber(1, 10),
    water: getRandomNumber(30, 600),
    weight: getRandomNumber(30, 600),
    component1: getRandomNumber(30, 600, 1),
    component2: getRandomNumber(30, 600, 1),
    component3: getRandomNumber(30, 600, 1),
    component4: getRandomNumber(30, 600, 1),
    component5: getRandomNumber(30, 600, 1),
    component6: getRandomNumber(30, 600, 1),
  };
}

async function seed(length: number = 1) {
  for (let i = 0; i < length; i++) {
    const result = await db
      .insert(products)
      .values({ ...generateRandomRecord(), dateTime: new Date() })
      .returning();

    console.log(`Зроблено новий запис (id=${result[0].id}).`);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

const numberOfRecords = process.argv[2] ? parseInt(process.argv[2]) : 1;

if (isNaN(numberOfRecords) || numberOfRecords < 1 || numberOfRecords > 10) {
  console.log('Кількість записів має бути від 1 до 10');
} else {
  console.log(`Вибрано кількість записів: ${numberOfRecords}`);
  seed(numberOfRecords).catch((e) => console.error(e));
}
