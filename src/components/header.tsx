import React from "react";

const Header = () => {
  return (
    <div
      style={{ fontFamily: '"Open Sans", sans-serif' }}
      className="flex float-end h-6 gap-4  text-black text-[18px] mr-8 mt-5"
    >
      <button>Home</button>
      <button>Streets</button>
      <button>Portraits</button>
      <button>About</button>
    </div>
  );
};

export default Header;
