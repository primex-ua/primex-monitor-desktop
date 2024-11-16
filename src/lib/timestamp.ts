import fs from 'fs';
import path from 'path';
import { z } from 'zod';

const TIMESTAMP_FILE_PATH = path.resolve(__dirname, '../../timestamp.json');

const dateSchema = z.object({
  lastTimestamp: z
    .string()
    .datetime()
    .transform((dateTime) => new Date(dateTime)),
});

export function loadLastTimestamp() {
  try {
    const data = fs.readFileSync(TIMESTAMP_FILE_PATH, 'utf-8');
    const parsedData = dateSchema.safeParse(data);

    if (!parsedData.success) {
      console.error(parsedData.error);
      return null;
    }

    return parsedData.data.lastTimestamp;
  } catch (error) {
    return null;
  }
}

export function saveLastTimestamp(timestamp: Date) {
  try {
    fs.writeFileSync(TIMESTAMP_FILE_PATH, JSON.stringify({ lastTimestamp: timestamp }), 'utf-8');
  } catch (error) {
    console.error('Error saving timestamp:', error);
  }
}
