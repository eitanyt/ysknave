import fs from 'fs';
import path from 'path';

export default function generateImagesJson() {
  return {
    name: 'generate-images-json', // שם התוסף
    generateBundle(options, bundle) {
      const imagesDir = path.resolve(__dirname, 'public/images');
      const outputPath = path.resolve(__dirname, 'public/images.json');
      const imageFiles = [];

      // סרוק את תיקיית התמונות
      fs.readdirSync(imagesDir).forEach(file => {
        if (file.match(/\.(jpg|jpeg|png|gif)$/)) {
          imageFiles.push(`/images/${file}`);
        }
      });

      // כתוב את הנתיבים לקובץ JSON
      fs.writeFileSync(outputPath, JSON.stringify(imageFiles, null, 2));
    }
  };
}
