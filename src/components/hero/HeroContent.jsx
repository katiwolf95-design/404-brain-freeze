import HeroFeatures from "./HeroFeatures";
import HeroImage from "./HeroImages";

function HeroContent() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-16">
      
      {/* LEFT - IMAGE */}
      <div className="flex justify-center md:justify-start">
        <HeroImage />
      </div>

      {/* RIGHT - TEXT */}
      <div className="space-y-6">
       <h1 className="text-[#CC1E36] font-headline font-bold italic text-5xl md:text-6xl lg:text-[36px] leading-[1.1] mb-4">
        Gelato wie in Florenz
        </h1>

        <p className="text-gray-600 text-lg max-w-md">
          Täglich frisch zubereitet. Mit echten Zutaten.  
          Für echte Genussmomente.
        </p>

        <button className="bg-[#57974D] text-white text-xs px-7 py-3 rounded-full font-medium hover:bg-green-700 transition shadow-md">
          Unsere Sorten entdecken
        </button>
         <HeroFeatures />
      </div>
    </div>
  );
}

export default HeroContent;