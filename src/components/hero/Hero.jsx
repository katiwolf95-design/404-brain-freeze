import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section className="relative bg-[#f7f4f2] overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;