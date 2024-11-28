import { ApiEntry, Materials } from '../schemas/apiSchema';
import { DbRecord, DbSettings } from '../schemas/dbSchema';

export function transformData(data: DbRecord[], dbSettings: DbSettings) {
  const apiData: ApiEntry[] = data.map((d) => {
    const materialsConsumed: Materials = [];

    if (dbSettings.NameInComp1 && d.component1)
      materialsConsumed.push({ name: dbSettings.NameInComp1, value: d.component1 });
    if (dbSettings.NameInComp2 && d.component2)
      materialsConsumed.push({ name: dbSettings.NameInComp2, value: d.component2 });
    if (dbSettings.NameInComp3 && d.component3)
      materialsConsumed.push({ name: dbSettings.NameInComp3, value: d.component3 });
    if (dbSettings.NameInComp4 && d.component4)
      materialsConsumed.push({ name: dbSettings.NameInComp4, value: d.component4 });
    if (dbSettings.NameInComp5 && d.component5)
      materialsConsumed.push({ name: dbSettings.NameInComp5, value: d.component5 });
    if (dbSettings.NameInComp6 && d.component6)
      materialsConsumed.push({ name: dbSettings.NameInComp6, value: d.component6, decimalPart: 2 });

    materialsConsumed.push({ name: 'Вода', value: d.water, units: 'л' });

    return {
      name: d.name,
      mixedAt: d.dateTime,
      press: d.press,
      mode: d.mode ? ((d.mode === 'А' ? 'auto' : 'manual') as ApiEntry['mode']) : null,
      totalWeight: d.totalWeight,
      moistureContent: d.moistureContent,
      producedRunningMeters: d.specificWeight !== null ? d.totalWeight / d.specificWeight : null,
      materialsConsumed,
    };
  });

  return apiData;
}
