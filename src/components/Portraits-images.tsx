import React from "react";

const ImageGalleryPortraits = () => {
  const totalImages = 60;

  return (
    <div className="p-4">
      <div className="gap-6 lg:gap-10 space-y-8 sm:space-y-8 lg:space-y-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:p-6 md:p-6 lg:pt-15 lg:pr-15 lg:pl-15">
        {Array.from({ length: totalImages }, (_, i) => {
          const imageNumber = i + 1;
          return (
            <div key={imageNumber} className="group break-inside-avoid">
              <img
                src={`/portraits/${imageNumber}.jpg`}
                alt={`Portrait ${imageNumber}`}
                className="w-135 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.jpg";
                  e.currentTarget.alt = "Failed to load image";
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGalleryPortraits;
