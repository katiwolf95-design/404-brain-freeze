import heroIce from "../../assets/images/hero-ice.png";

function HeroContent() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-12">
      
      {/* LEFT - IMAGE */}
      <div className="flex justify-center">
        <img
          src={heroIce}
          alt="Ice Cream"
          className="w-80 md:w-96"
        />
      </div>

      {/* RIGHT - TEXT */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Gelato wie in Florenz
        </h1>

        <p className="text-gray-600 text-lg">
          Täglich frisch zubereitet. Mit echten Zutaten.
          Für echte Genussmomente.
        </p>

        <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
          Unsere Sorten entdecken
        </button>
      </div>
    </div>
  );
}

export default HeroContent;