export default function ImageModal({ isOpen, image, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
        <button 
          className="absolute top-2 right-2 text-white bg-gray-600 p-2"
          onClick={onClose}
        >
          X
        </button>
      <div className="relative max-w-4xl max-h-[90vh]">
        <img 
          src={image} 
          alt="" 
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}