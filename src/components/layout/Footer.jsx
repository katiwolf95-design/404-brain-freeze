import Container from "./Container";
import instagramIcon from "../../assets/icons/Instagram.svg";
import tiktokIcon from "../../assets/icons/TikTok.svg";

function Footer() {
  return (
    <footer className="bg-[#f9ece9] text-[#D11F37]">
      <Container>
        <div className="h-50 flex items-center">
          
          {/* Left */}
          <div className="flex-1">
            <p>© 2026 Gelato Fiorentina</p>
          </div>

          {/* Center */}
          <div className="flex-1 flex justify-center gap-6">
            <img src={instagramIcon} alt="Instagram"   className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity duration-200"/>
            <img src={tiktokIcon} alt="TikTok"   className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity duration-200"/>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-end gap-6">
            <a href="/datenschutz">Datenschutz</a>
            <a href="/impressum">Impressum</a>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;