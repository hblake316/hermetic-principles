import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconTypes = ['geometric', 'mystical', 'minimal'];

async function generateIcons() {
  for (const type of iconTypes) {
    const svgPath = path.join(__dirname, `../public/icon-${type}.svg`);
    const svgBuffer = fs.readFileSync(svgPath);

    // Generate 192x192 icon
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(__dirname, `../public/icon-${type}-192x192.png`))
      .then(() => console.log(`Generated ${type} 192x192 icon`))
      .catch(err => console.error(`Error generating ${type} 192x192 icon:`, err));

    // Generate 512x512 icon
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(__dirname, `../public/icon-${type}-512x512.png`))
      .then(() => console.log(`Generated ${type} 512x512 icon`))
      .catch(err => console.error(`Error generating ${type} 512x512 icon:`, err));
  }
}

generateIcons(); 