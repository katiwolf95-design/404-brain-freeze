import HeroFeatures from "./HeroFeatures";
import HeroImage from "./HeroImages";
import ButtonHero from "../ui/ButtonHero";

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
        <ButtonHero to={"/ice"}>Unsere Sorten entdecken</ButtonHero>
        <HeroFeatures />
      </div>
    </div>
  );
}

export default HeroContent;