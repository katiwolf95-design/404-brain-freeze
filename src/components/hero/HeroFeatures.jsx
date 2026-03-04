import feature1 from "../../assets/images/feature-image1.png";
import feature2 from "../../assets/images/feature-image2.png";
import feature3 from "../../assets/images/feature-image3.png";

function HeroFeatures() {
  return (
    <div className="mt-24 max-w-5xl mx-auto relative">

      {/* Images row */}
      <div className="absolute -top-14 left-0 w-full grid md:grid-cols-3 place-items-center">
        <img src={feature1} alt="" className="w-28 h-28 object-cover rounded-full shadow-lg" />
        <img src={feature2} alt="" className="w-28 h-28 object-cover rounded-full shadow-lg" />
        <img src={feature3} alt="" className="w-28 h-28 object-cover rounded-full shadow-lg" />
      </div>

      {/* Pink box */}
      <div className="bg-[#f1e7e2] rounded-3xl px-10 pt-20 pb-10 text-center shadow-sm">
        <div className="grid md:grid-cols-3 gap-10">
          <p className="font-medium text-gray-700">
            Handgemacht täglich
          </p>
          <p className="font-medium text-gray-700">
            Vegane & klassische Sorten
          </p>
          <p className="font-medium text-gray-700">
            Italienische Rezepturen
          </p>
        </div>
      </div>

    </div>
  );
}

export default HeroFeatures;