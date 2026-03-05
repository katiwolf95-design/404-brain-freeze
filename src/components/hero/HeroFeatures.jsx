import feature1 from "../../assets/images/feature-image1.png";
import feature2 from "../../assets/images/feature-image2.png";
import feature3 from "../../assets/images/feature-image3.png";

function HeroFeatures() {
  return (
    <div className="mt-24 max-w-5xl mx-auto px-6">

      {/* Pink Box */}
      <div className="bg-[#f9ece9] rounded-3xl px-8 pt-16 lg:pt-24 pb-10 shadow-sm relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center relative z-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <img
              src={feature1}
              alt="Hausgemacht täglich"
              className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg lg:-mt-32 mb-4"
            />
            <p className="font-medium text-gray-700 max-w-40 mx-auto">
              täglich hausgemacht
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <img
              src={feature2}
              alt="Vegane & klassische Sorten"
              className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg lg:-mt-32 mb-4"
            />
            <p className="font-medium text-gray-700 max-w-50 mx-auto">
              vegane & klassische Sorten
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <img
              src={feature3}
              alt="Italienische Rezepturen"
              className="w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg lg:-mt-32 mb-4"
            />
            <p className="font-medium text-gray-700 max-w-42.5 mx-auto">
              italienische Rezepturen
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroFeatures;