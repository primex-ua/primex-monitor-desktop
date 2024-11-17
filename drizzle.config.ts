import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: `file:${process.env.DB_PATH!}`,
  },
  verbose: true,
});
