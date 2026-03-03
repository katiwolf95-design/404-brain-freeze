import HeroContent from "./HeroContent";
import HeroFeatures from "./HeroFeatures";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <HeroContent />
      <HeroFeatures />
    </section>
  );
}

export default Hero;