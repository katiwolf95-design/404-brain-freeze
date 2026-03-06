export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto py-20 px-6">

      <h2 className="text-[#CC1E36] text-3xl font-semibold text-center mb-12">
        Über uns
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/gelato-maker.png"
          alt="Gelato Herstellung"
          className="rounded-xl shadow-lg"
        />

        <div className="space-y-6">

          <p className="text-lg">
            Seit über 20 Jahren steht die Gelateria Fiorentina für echtes
            italienisches Gelato – frisch hergestellt und mit viel Leidenschaft.
          </p>

          <p className="text-lg">
            Unsere Eissorten entstehen täglich in unserer eigenen Gelato-Küche.
            Dabei kombinieren wir traditionelle Rezepturen mit hochwertigen Zutaten.
          </p>

          <div className="space-y-2 mt-6">
            <p>🌱 vegane Sorten verfügbar</p>
          </div>

        </div>
      </div>
      
      <div className="mt-32">
        <h2 className="text-[#CC1E36] text-3xl font-semibold mt-20 mb-12 text-center">
          Unsere Philosophie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl">🍦</div>
            <h3 className="text-xl font-semibold">Frisch</h3>
            <p className="text-gray-600">Täglich vor Ort hergestellt.</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl">🇮🇹</div>
            <h3 className="text-xl font-semibold">Tradition</h3>
            <p className="text-gray-600">Original italienische Rezepturen.</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl">❤️</div>
            <h3 className="text-xl font-semibold">Familie</h3>
            <p className="text-gray-600">Ein familiengeführter Betrieb.</p>
          </div>
        </div>
      </div>
    </section>

    );


    
  
}

  