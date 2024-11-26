PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_Продукция` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ДатаВремя` integer NOT NULL,
	`Pres` integer,
	`НаименованиеРецепта` text NOT NULL,
	`Компонент1_Получено` real,
	`Компонент2_Получено` real,
	`Компонент3_Получено` real,
	`Компонент4_Получено` real,
	`Компонент5_Получено` real,
	`Компонент6_Получено` real,
	`Вода_Получено` real NOT NULL,
	`Смесь_Получено` real NOT NULL,
	`PytomaVaga` real,
	`ВлажСмеси_Получено` real,
	`РежимИсполнения` text
);
--> statement-breakpoint
INSERT INTO `__new_Продукция`("id", "ДатаВремя", "Pres", "НаименованиеРецепта", "Компонент1_Получено", "Компонент2_Получено", "Компонент3_Получено", "Компонент4_Получено", "Компонент5_Получено", "Компонент6_Получено", "Вода_Получено", "Смесь_Получено", "PytomaVaga", "ВлажСмеси_Получено", "РежимИсполнения") SELECT "id", "ДатаВремя", "Pres", "НаименованиеРецепта", "Компонент1_Получено", "Компонент2_Получено", "Компонент3_Получено", "Компонент4_Получено", "Компонент5_Получено", "Компонент6_Получено", "Вода_Получено", "Смесь_Получено", "PytomaVaga", "ВлажСмеси_Получено", "РежимИсполнения" FROM `Продукция`;--> statement-breakpoint
DROP TABLE `Продукция`;--> statement-breakpoint
ALTER TABLE `__new_Продукция` RENAME TO `Продукция`;--> statement-breakpoint
PRAGMA foreign_keys=ON;