const ImageGallery = () => {
  const totalImages = 46;

  return (
    <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 mx-4 sm:mx-8 lg:mx-60 mt-10">
      {Array.from({ length: totalImages }, (_, i) => {
        const imageNumber = i + 1;
        return (
          <div
            key={imageNumber}
            className="flex justify-center items-start mb-8 sm:mb-14"
          >
            <img
              src={`/streets/${imageNumber}.jpg`}
              alt={`Street view ${imageNumber}`}
              className="w-full max-w-full h-auto max-h-[80vh] object-contain"
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
  );
};

export default ImageGallery;
