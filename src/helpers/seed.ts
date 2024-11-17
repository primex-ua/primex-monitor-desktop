import db from '../drizzle/db';
import { products } from '../drizzle/schema';
import { InsertDbRecord } from '../schemas/dbSchema';

function getRandomNumber(min: number, max: number, isInteger = true) {
  const value = Math.random() * (max - min + 1) + min;
  return isInteger ? Math.floor(value) : parseFloat(value.toFixed(3));
}

function generateRandomRecord(): InsertDbRecord {
  return {
    dateTime: new Date(),
    mode: getRandomNumber(1, 2) % 2 === 0 ? 'А' : 'Р',
    mixture: getRandomNumber(50, 1000),
    moistureContent: getRandomNumber(1, 20, false),
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
  await db.insert(products).values(generateRandomRecord());
}

seed().catch((e) => console.error(e));
