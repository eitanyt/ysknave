import fs from 'fs';
import path from 'path';

const imagesDir = './public/images';
const outputPath = './public/images.json';

try {
  const files = fs.readdirSync(imagesDir);
  
  const imageFiles = files
    .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
    .map(file => `/images/${file}`);

  if (imageFiles.length > 0) {
    fs.writeFileSync(outputPath, JSON.stringify(imageFiles, null, 2));
    console.log(`נוצר קובץ images.json עם ${imageFiles.length} תמונות`);
  }

} catch (error) {
  console.error('שגיאה:', error.message);
}
