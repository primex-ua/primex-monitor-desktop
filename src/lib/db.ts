import 'dotenv/config';
import ADODB from 'node-adodb';

console.log(`З'єднання з базою даних`);

if (!process.env.DB_PATH) throw new Error('Шлях до бази даних не вказаний.\nВкажіть його в .env');
if (!process.env.DB_PASSWORD) throw new Error('Пароль від бази даних не вказаний.\nВкажіть його в .env');

console.log('Шлях:', process.env.DB_PATH);
// console.log('Пароль:', process.env.DB_PASSWORD);

const db = ADODB.open(
  `Provider=Microsoft.Jet.OLEDB.4.0;
   Data Source='${process.env.DB_PATH}';
   Jet OLEDB:Database Password='${process.env.DB_PASSWORD}';`,
);

export default db;
