import Navigation from "./Navigation";
import Logo from "./Logo";
import Container from "./Container";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-6 pt-12">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default Header;