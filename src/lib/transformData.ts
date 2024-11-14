import { ApiEntry, Materials } from '../schemas/apiSchema';
import { DbRecord, DbSettings } from '../schemas/dbSchema';

export function transformData(data: DbRecord[], dbSettings: DbSettings) {
  const apiData: ApiEntry[] = data.map((d) => {
    const materialsConsumed: Materials = [];

    if (dbSettings.NameInComp1) materialsConsumed.push({ name: dbSettings.NameInComp1, value: d.Компонент1_Получено });
    if (dbSettings.NameInComp2) materialsConsumed.push({ name: dbSettings.NameInComp2, value: d.Компонент2_Получено });
    if (dbSettings.NameInComp3) materialsConsumed.push({ name: dbSettings.NameInComp3, value: d.Компонент3_Получено });
    if (dbSettings.NameInComp4) materialsConsumed.push({ name: dbSettings.NameInComp4, value: d.Компонент4_Получено });
    if (dbSettings.NameInComp5) materialsConsumed.push({ name: dbSettings.NameInComp5, value: d.Компонент5_Получено });
    if (dbSettings.NameInComp6) materialsConsumed.push({ name: dbSettings.NameInComp6, value: d.Компонент6_Получено });

    return {
      name: d.НаименованиеРецепта,
      mixedAt: d.ДатаВремя.toLocaleString(),
      press: d.Pres,
      mode: (d.РежимИсполнения === 'А' ? 'auto' : 'manual') as ApiEntry['mode'],
      moistureContent: d.ВлажСмеси_Получено,
      producedRunningMeters: d.Смесь_Получено, // Це має якось вираховуватись
      materialsConsumed,
    };
  });

  return apiData;
}
