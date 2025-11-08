const fs = require('fs-extra');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const webDir = path.join(projectRoot, 'web');

const STATIC_FILES = ['index.html', 'manifest.json', 'service-worker.js'];

async function build() {
  try {
    await fs.emptyDir(webDir);

    for (const file of STATIC_FILES) {
      const src = path.join(projectRoot, file);
      const dest = path.join(webDir, file);

      if (await fs.pathExists(src)) {
        await fs.copy(src, dest);
        console.log(`Copiado ${file}`);
      } else {
        console.warn(`Advertencia: ${file} no encontrado, omitiendo.`);
      }
    }

    const iconsSrc = path.join(projectRoot, 'icons');
    const iconsDest = path.join(webDir, 'icons');
    if (await fs.pathExists(iconsSrc)) {
      await fs.copy(iconsSrc, iconsDest);
      console.log('Carpeta icons copiada.');
    } else {
      console.warn('Advertencia: carpeta icons/ no encontrada. Añade icon-192.png y icon-512.png.');
    }

    console.log('Build estático completado.');
  } catch (error) {
    console.error('Error durante build:', error);
    process.exit(1);
  }
}

build();
