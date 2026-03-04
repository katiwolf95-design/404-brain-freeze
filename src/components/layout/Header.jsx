import Navigation from "./Navigation";
import Logo from "./Logo";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-6 px-10 flex justify-between items-center">
      <Logo />  
      <Navigation />
    </header>
  );
}

export default Header;