import LogoImg from "../../assets/images/logo-image.png";
function Logo() {
  return (
    <div className="flex items-center gap-2"> 
      <img src={LogoImg} alt="Logo" className="w-10 h-10" />
      <h1 className="text-18px font-bold text-[#CC1E36]"> 
        Gelato Fiorentina
      </h1>
    </div>
  );
}
export default Logo;