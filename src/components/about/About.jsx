import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="max-w-300 mx-auto py-20 px-6">

      <SectionTitle title={"Über uns"}/>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-8 mb-20">

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
      <div>
        <SectionTitle title={"Unsere Philosophie"}/>
  
        <div className="grid md:grid-cols-3 gap-10 mt-12 justify-items-center">

          <div className="space-y-4">
            <div className="text-4xl">🍦</div>
            <h3 className="text-xl font-semibold">Frisch</h3>
            <p>Täglich vor Ort hergestellt.</p>
          </div>

          <div className="space-y-4">
            <div className="text-4xl">🇮🇹</div>
            <h3 className="text-xl font-semibold">Tradition</h3>
            <p>Original italienische Rezepturen.</p>
          </div>

          <div className="space-y-4">
            <div className="text-4xl">❤️</div>
            <h3 className="text-xl font-semibold">Familie</h3>
            <p>Ein familiengeführter Betrieb.</p>
          </div>
        </div>
      </div>
    </section>

    );


    
  
}

  