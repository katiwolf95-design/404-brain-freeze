import Hero from "../components/hero/Hero";
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
      <About />
      <Testimonials />
    </>
  );
}

export default Home;