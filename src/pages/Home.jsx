import Hero from "../components/hero/Hero";
import IcePreview from "../components/ice/IcePreview";
import Testimonials from "../components/testimonials/Testimonial";
import About from "../components/about/About";

function Home() {
  return (
    <>
      <Hero
        title="Gelateria Fiorentina"
        subtitle="Authentic Italian ice cream"
        ctaText="Discover flavors"
      />
      <IcePreview />
      <About />
      <Testimonials />
    </>
  );
}

export default Home;