import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
      >
        <span
          className={`block w-6 h-0.5 bg-[#CC1E36] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#CC1E36] my-1 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#CC1E36] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-gray-700 font-semibold tracking-wider cursor-pointer">
          <li>
            <Link
              className="hover:text-[#CC1E36] transition-colors duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              className="hover:text-[#CC1E36] transition-colors duration-300"
              href="/#about"
            >
              Über uns
            </a>
          </li>
          <li>
            <Link
              className="hover:text-[#CC1E36] transition-colors duration-300"
              to="/ice"
            >
              Beliebte Sorten
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#CC1E36] transition-colors duration-300"
              to="/kontakt"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-10 text-2xl font-semibold text-gray-700 text-center">
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#CC1E36] transition-colors duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#CC1E36] transition-colors duration-300"
              href="/#about"
            >
              Über uns
            </a>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#CC1E36] transition-colors duration-300"
              to="/ice"
            >
              Beliebte Sorten
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-[#CC1E36] transition-colors duration-300"
              to="/kontakt"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;