import fs from 'fs';
import path from 'path';

const TIMESTAMP_FILE_PATH = path.resolve(__dirname, '../../timestamp.json');

export function loadLastTimestamp(): string | null {
  try {
    const data = fs.readFileSync(TIMESTAMP_FILE_PATH, 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData.lastTimestamp || null;
  } catch (error) {
    return null;
  }
}

export function saveLastTimestamp(timestamp: string) {
  try {
    fs.writeFileSync(TIMESTAMP_FILE_PATH, JSON.stringify({ lastTimestamp: timestamp }), 'utf-8');
  } catch (error) {
    console.error('Error saving timestamp:', error);
  }
}
