CREATE TABLE `Продукция` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ДатаВремя` integer NOT NULL,
	`Pres` integer NOT NULL,
	`НаименованиеРецепта` text NOT NULL,
	`Компонент1_Получено` real,
	`Компонент2_Получено` real,
	`Компонент3_Получено` real,
	`Компонент4_Получено` real,
	`Компонент5_Получено` real,
	`Компонент6_Получено` real,
	`Вода_Получено` real NOT NULL,
	`Смесь_Получено` real NOT NULL,
	`PytomaVaga` real NOT NULL,
	`РежимИсполнения` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `НастройкиПрограммы` (
	`NameInComp1` text,
	`NameInComp2` text,
	`NameInComp3` text,
	`NameInComp4` text,
	`NameInComp5` text,
	`NameInComp6` text
);
