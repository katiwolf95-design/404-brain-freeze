function ButtonHero({ children }) {
  return (
    <button
      className="
    bg-[#7EA705] text-white text-lg tracking-wide 
     px-10 py-3 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,0.25)] 
     hover:scale-105 hover:bg-[#6B8F04]
     transition-transform "
    >
      {children || "Button"}
    </button>
  );
}

export default ButtonHero;