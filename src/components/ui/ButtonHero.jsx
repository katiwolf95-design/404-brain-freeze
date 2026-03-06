import { Link } from "react-router-dom";

function ButtonHero({ children, to, onClick, className }) {

  const btnStyle = "bg-[#7EA705] text-white text-lg tracking-wide px-10 py-3 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,0.25)] hover:scale-105 hover:bg-[#6B8F04 transition-transform"

  if (to) {
    return (
      <Link to={to} className={`${btnStyle} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className= {`${btnStyle} ${className}`}>
      {children}
    </button>
  );
}

export default ButtonHero;