import ImageGalleryPortraits from "../components/Portraits-images";

function Portraits() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="mb-8 font-open-sans text-[34px] text-gray-800">
        Camera Roll
      </h2>
      <div className="flex">
        <ImageGalleryPortraits />
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
