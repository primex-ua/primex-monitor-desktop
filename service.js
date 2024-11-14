const path = require('path');
const Service = require('node-windows').Service;
const { exec } = require('child_process');

const svc = new Service({
  name: 'Primex Monitor Desktop',
  description: 'Застосунок для синхронізації локальної бази даних з сервером',
  script: path.join(__dirname, './dist/index.js'),
  env: {
    name: 'NODE_ENV',
    value: 'production',
  },
});

const isUninstall = process.argv.includes('uninstall');

if (isUninstall) {
  svc.on('uninstall', function () {
    console.log(`${svc.name} сервіс видалено.`);
  });

  svc.uninstall();
} else {
  console.log('Проект компілюється...');

  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`Сталася помилка: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Застереження: ${stderr}`);
    }

    console.log(`Готово`);

    console.log('Встановлюється сервіс...');

    svc.on('install', () => {
      svc.start();
      console.log(`${svc.name} сервіс встановлено та розпочато успішно.`);
    });

    svc.install();
  });
}
