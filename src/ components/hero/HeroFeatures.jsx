function HeroFeatures() {
  return (
    <div className="mt-16 bg-gray-50 rounded-3xl p-10 grid md:grid-cols-3 gap-8 text-center">
      
      <div className="space-y-4">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full"></div>
        <p className="font-medium">Handgemacht täglich</p>
      </div>

      <div className="space-y-4">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full"></div>
        <p className="font-medium">Vegane & klassische Sorten</p>
      </div>

      <div className="space-y-4">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full"></div>
        <p className="font-medium">Italienische Rezepturen</p>
      </div>

    </div>
  );
}

export default HeroFeatures;