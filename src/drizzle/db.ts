import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import path from 'path';

const DB_PATH = path.resolve(__dirname, process.env.DB_PATH!);

const client = createClient({ url: DB_PATH });
const db = drizzle(client, { schema });

export default db;
