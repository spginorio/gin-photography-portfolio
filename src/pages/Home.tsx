import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-black">
      <h1
        style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "1px" }}
        className="text-5xl mt-50 mb-6 text-gray-800"
      >
        SIMON GINORIO
      </h1>
      <h3
        style={{ fontFamily: "'open sans', sans-serif" }}
        className="text-2xl text-gray-800"
      >
        PORTFOLIO
      </h3>
      <div className="roboto-mono flex gap-20 text-2xl mt-38 mb-10 text-gray-800">
        <NavLink to="/streets">Streets</NavLink>
        <NavLink to="/portraits">Portraits</NavLink>
      </div>
    </div>
  );
}

export default Home;
