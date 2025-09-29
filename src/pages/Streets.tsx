import ImageGallery from "../components/Street-images";

interface StreetsProps {
  openModal: (imageUrls: string[], index: number) => void;
  images: string[];
  setImages: (images: string[]) => void;
}

function Streets({ openModal, images, setImages }: StreetsProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="mb-6 font-open-sans text-[32px] text-gray-800">
        Camera Roll
      </h2>
      <div className="flex">
        <ImageGallery openModal={openModal} images={images} setImages={setImages} />
      </div>
      <a
        href="https://www.instagram.com/ginoriox"
        className="mt-12 mb-16 px-8 py-1 border rounded-md text-gray-700"
      >
        Instagram
      </a>
    </div>
  );
}

export default Streets;
