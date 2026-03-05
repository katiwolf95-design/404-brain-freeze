import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8 text-gray-800 font-semibold cursor-pointer">
        <li>
          <Link className="hover:text-[#CC1E36] transition-colors" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#CC1E36] transition-colors" to="/about">
            Über uns
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#CC1E36] transition-colors" to="/ice">
            Beliebte Sorten
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#CC1E36] transition-colors" to="/kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;