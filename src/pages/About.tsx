function About() {
  return (
    <div
      style={{ fontFamily: "'open sans', sans-serif" }}
      className="flex flex-col justify-center items-center mt-36 text-[18px] text-gray-800"
    >
      <p className="">📍Osaka</p>
      <p className="mt-6 mb-6 underline">
        <a href="mailto:ginoriops@gmail.com">ginoriops@gmail.com</a>
      </p>
      <p>1 305-923-6920</p>
      <a
        href="https://www.instagram.com/ginoriox"
        className="mt-12 px-8 py-1 border rounded-md"
      >
        Instagram
      </a>
    </div>
  );
}

export default About;
