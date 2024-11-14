import 'dotenv/config';

export function getEnvTimestamp() {
  const days = parseInt(process.env.START_FROM_DAYS_AGO ?? '0');

  const date = new Date();
  date.setDate(date.getDate() - days);
  date.setHours(0, 0, 0, 0);

  return date.toLocaleString();
}
