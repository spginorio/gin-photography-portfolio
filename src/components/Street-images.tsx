import { motion } from "framer-motion";

interface ImageGalleryProps {
  openModal: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ openModal }) => {
  const totalImages = 46;

  return (
    <div className="">
      <div className="gap-6 lg:gap-10 space-y-8 sm:space-y-8 lg:space-y-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-10 p-5 sm:p-6 md:p-6 lg:pt-15 lg:pr-15 lg:pl-15 sp-4">
        {Array.from({ length: totalImages }, (_, i) => {
          const imageNumber = i + 1;
          const imageUrl = `/streets/${imageNumber}.jpg`;
          return (
            <motion.div
              key={imageNumber}
              className="group break-inside-avoid cursor-pointer"
              onClick={() => openModal(imageUrl)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={imageUrl}
                alt={`Street view ${imageNumber}`}
                className="w-135 object-cover transition-transform duration-300 transform hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.jpg";
                  e.currentTarget.alt = "Failed to load image";
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
