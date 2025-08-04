import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Streets from "./pages/Streets";
import Portraits from "./pages/Portraits";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 pb-4 bg-white z-50 ">
      <div className="flex justify-between items-center">
        {/* Desktop Navigation - hidden on mobile */}
        <NavLink
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className="text-gray-800  text-[22px] mt-4 ml-6"
          to="/"
          end
        >
          SG
        </NavLink>
        <nav
          style={{ fontFamily: '"Open Sans", sans-serif' }}
          className="hidden md:flex gap-4 font-open-sans text-black mr-8 mt-4 text-[16px] ml-auto"
        >
          <NavLink
            className={({ isActive }) =>
              `px-3 py-1 ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-1 ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/streets"
          >
            Streets
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-1 ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/portraits"
          >
            Portraits
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-1 ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
        </nav>

        {/* Mobile Menu Button - visible only on mobile */}
        <button
          className="md:hidden mr-6 mt-4 p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-2"
        }`}
        style={{ fontFamily: '"Open Sans", sans-serif' }}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 text-center ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/"
            end
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 text-center ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/streets"
            onClick={closeMobileMenu}
          >
            Streets
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 text-center ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/portraits"
            onClick={closeMobileMenu}
          >
            Portraits
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 text-center ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-200"
              }`
            }
            to="/about"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streets" element={<Streets />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
