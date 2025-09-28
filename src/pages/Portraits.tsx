import ImageGalleryPortraits from "../components/Portraits-images";

interface PortraitsProps {
  openModal: (imageUrl: string) => void;
}

function Portraits({ openModal }: PortraitsProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="mb-4 font-open-sans text-[32px] text-gray-800">
        Camera Roll
      </h2>
      <div className="flex">
        <ImageGalleryPortraits openModal={openModal} />
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

export default Portraits;
