import React from "react";

function About() {
  return (
    <div
      style={{ fontFamily: "'open sans', sans-serif" }}
      className=" flex flex-col text-[18px] text-gray-800 items-center justify-center mt-36"
    >
      <p className="">📍Osaka</p>
      <p className="underline mt-6 mb-6">
        <a href="mailto:ginoriops@gmail.com">ginoriops@gmail.com</a>
      </p>
      <p>1 305-923-6920</p>
      <a
        href="https://www.instagram.com/ginoriox"
        className="mt-12 border px-8 py-1 rounded-md"
      >
        Instagram
      </a>
    </div>
  );
}

export default About;
