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
    moistureContent: getRandomNumber(1, 20, 1),
    name: `Рецепт ${getRandomNumber(1, 30)}`,
    Pres: getRandomNumber(1, 10),
    water: getRandomNumber(30, 600),
    weight: getRandomNumber(30, 600),
    component1: getRandomNumber(30, 600),
    component2: getRandomNumber(30, 600),
    component3: getRandomNumber(30, 600),
    component4: getRandomNumber(30, 600),
    component5: getRandomNumber(30, 600),
    component6: getRandomNumber(30, 600),
  };
}

async function seed() {
  const result = await db.insert(products).values(generateRandomRecord()).returning();

  console.log(`Зроблено новий запис (id=${result[0].id}).`);
}

seed().catch((e) => console.error(e));
