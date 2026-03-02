import Hero from "../ components/hero/Hero";
import Testimonials from "../ components/testimonials/Testimonial";

function Home() {
  return (
    <>
      <Hero
        title="Gelateria Fiorentina"
        subtitle="Authentic Italian ice cream"
        ctaText="Discover flavors"
      />
      <Testimonials />
    </>
  );
}

export default Home;