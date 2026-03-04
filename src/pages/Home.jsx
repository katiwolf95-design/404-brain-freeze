import Hero from "../components/hero/Hero";
import IcePreview from "../components/ice/IcePreview";
import Testimonials from "../components/testimonials/Testimonial";

function Home() {
  return (
    <>
      <Hero
        title="Gelateria Fiorentina"
        subtitle="Authentic Italian ice cream"
        ctaText="Discover flavors"
      />
      <IcePreview />
      <Testimonials />
    </>
  );
}

export default Home;