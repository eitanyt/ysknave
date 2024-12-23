import { useState, useEffect } from 'react';
import ImageModal from '../components/ImageModal';
import LazyImage from '../components/LazyImage';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // טעינת רשימת התמונות מה-JSON
    fetch('/images.json')
      .then(response => response.json())
      .then(images => setImageList(images))
      .catch(error => console.error('Error loading images:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">גלריית תמונות</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageList.map((imagePath, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          >
            <LazyImage
              src={imagePath}
              alt=""
              className="w-full h-full object-cover"
              onClick={() => setSelectedImage(imagePath)}
            />
          </div>
        ))}
      </div>

      <ImageModal 
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
