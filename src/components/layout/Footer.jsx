import Container from "./Container";
import instagramIcon from "../../assets/icons/Instagram.svg";
import tiktokIcon from "../../assets/icons/TikTok.svg";

function Footer() {
  return (
    <footer className="bg-[#f9ece9] text-[#D11F37]">
      <Container>
        <div className="h-50 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-center md:text-left">

          {/* Copyright */}
          <div>
            <p>© 2026 Gelato Fiorentina</p>
          </div>

          {/* Social icons */}
          <div className="flex gap-6">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src={tiktokIcon}
              alt="TikTok"
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="/datenschutz" className="hover:underline">
              Datenschutz
            </a>
            <a href="/impressum" className="hover:underline">
              Impressum
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;