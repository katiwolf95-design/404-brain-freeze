import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-[#CC1E36] hover:bg-[#a8182b] text-white
        shadow-lg
        transition-all duration-300
        cursor-pointer

        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}

        hover:scale-110 hover:shadow-xl
      `}
    >
      ↑
    </button>
  );
}