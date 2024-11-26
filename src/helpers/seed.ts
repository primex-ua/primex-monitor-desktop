import db from '../drizzle/db';
import { products } from '../drizzle/schema';
import { InsertDbRecord } from '../schemas/dbSchema';

const NAMES = ['Рецепт 1', 'Рецепт 2', 'Рецепт 3', 'Рецепт 4', 'Рецепт 5', 'Без обліку'];
const MIXER_VOULUME = 5; // m^3

function getRandomNumber(min: number, max: number, decimalPart = 0) {
  const value = Math.random() * (max - min + 1) + min;
  return !decimalPart ? Math.floor(value) : parseFloat(value.toFixed(decimalPart));
}

function generateRandomRecord(): InsertDbRecord {
  const index = Math.floor(Math.random() * 6);

  const isBackupRecord = index === 5;

  const name = NAMES[index];

  const components = [
    getRandomNumber(60, 100, 1), // вода
    getRandomNumber(150, 200, 1), // відсів
    getRandomNumber(350, 450, 1), // пісок
    getRandomNumber(150, 200, 1), // щебень
    getRandomNumber(150, 200, 1), // щебень 2
    getRandomNumber(150, 200, 1), // цемент
    getRandomNumber(2, 15, 2), // хім. добавки
  ];

  const totalWeight = parseFloat(components.reduce((acc, value) => acc + value, 0).toFixed(1));

  const newRecord = {
    dateTime: new Date(),
    name,
    mode: !isBackupRecord ? ((getRandomNumber(1, 2) % 2 === 0 ? 'А' : 'Р') as 'А' | 'Р') : null,
    moistureContent: !isBackupRecord ? getRandomNumber(1, 20, 2) : null,
    press: !isBackupRecord ? getRandomNumber(1, 10) : null,
    specificWeight: !isBackupRecord ? getRandomNumber(500, 2500) : null,
    water: components[0] * MIXER_VOULUME,
    component1: components[1] * MIXER_VOULUME,
    component2: components[2] * MIXER_VOULUME,
    component3: components[3] * MIXER_VOULUME,
    component4: components[4] * MIXER_VOULUME,
    component5: components[5] * MIXER_VOULUME,
    component6: components[6] * MIXER_VOULUME,
    totalWeight,
  };

  if (isBackupRecord) console.log(newRecord.mode);

  return newRecord;
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
