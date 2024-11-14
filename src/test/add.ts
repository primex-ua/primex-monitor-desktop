import db from '../lib/db';
import { formatDateToAccessDate } from '../lib/formatDate';

function getRandomNumber(min: number, max: number, isInteger = true) {
  const value = Math.random() * (max - min + 1) + min;
  return isInteger ? Math.floor(value) : parseFloat(value.toFixed(3));
}

async function addDataToDb() {
  const dataTime = formatDateToAccessDate(new Date());

  const sql = `
  INSERT INTO Продукция (ДатаВремя, Pres, НаименованиеРецепта, Компонент1_Получено, Компонент2_Получено,
                         Компонент3_Получено, Компонент4_Получено, Компонент5_Получено, Компонент6_Получено,
                         Вода_Получено, Смесь_Получено, ВлажСмеси_Получено, PytomaVaga, РежимИсполнения)
  VALUES (#${dataTime}#, ${getRandomNumber(1, 10)}, 'Рецепт ${getRandomNumber(1, 20)}', ${getRandomNumber(50, 700)}, ${getRandomNumber(50, 700)}, ${getRandomNumber(50, 700)}, ${getRandomNumber(50, 700)}, ${getRandomNumber(50, 700)}, ${getRandomNumber(50, 700)}, ${getRandomNumber(50, 700)}, ${getRandomNumber(50, 700)}, ${getRandomNumber(1, 20, false)}, ${getRandomNumber(50, 700)}, '${getRandomNumber(1, 2) % 2 === 1 ? 'А' : 'Р'}')
  `;

  try {
    await db.execute(sql);

    console.log('Дані успішно додано');
  } catch (e) {
    console.error(e);
  }
}

addDataToDb();
