import 'dotenv/config';
import { ApiEntry } from '../schemas/apiSchema';

export async function postData(data: ApiEntry[]) {
  const url = 'https://primex-monitor.vercel.app/api/products';
  const apiKey = process.env.API_KEY!;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
        cookie: `X-API-KEY=${apiKey}`,
      },
    });

    if (!response.ok) {
      const { error } = (await response.json()) as { error: string };
      console.log(error);

      return false;
    }

    console.log('Дані успішно відправлено');

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
