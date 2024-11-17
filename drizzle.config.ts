import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import path from 'path';

const DB_PATH = path.resolve(__dirname, process.env.DB_PATH!);

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: DB_PATH,
  },
});
