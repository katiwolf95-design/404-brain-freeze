import feature1 from "../../assets/images/feature-image1.png";
import feature2 from "../../assets/images/feature-image2.png";
import feature3 from "../../assets/images/feature-image3.png";

function HeroFeatures() {
  return (
    <div className="mt-24 max-w-5xl mx-auto relative">

      {/* Images row */}
     <div className="absolute -top-14 left-0 w-full px-10">
  <div className="grid md:grid-cols-3 place-items-center">
    <img src={feature1} alt="" className="w-28 h-28 object-cover rounded-full shadow-lg" />
    <img src={feature2} alt="" className="w-28 h-28 object-cover rounded-full shadow-lg" />
    <img src={feature3} alt="" className="w-28 h-28 object-cover rounded-full shadow-lg" />
  </div>
</div>


     {/* Pink box */}
<div className="bg-[#f1e7e2] rounded-3xl px-10 pt-20 pb-10 shadow-sm">
  <div className="grid md:grid-cols-3 gap-10">
    
    <div className="flex justify-center">
      <p className="font-medium text-gray-700 text-center max-w-45">
        Handgemacht täglich
      </p>
    </div>

    <div className="flex justify-center">
      <p className="font-medium text-gray-700 text-center max-w-55">
        Vegane & klassische Sorten
      </p>
    </div>

    <div className="flex justify-center">
      <p className="font-medium text-gray-700 text-center max-w-50">
        Italienische Rezepturen
      </p>
    </div>

  </div>
</div>

    </div>
  );
}

export default HeroFeatures;