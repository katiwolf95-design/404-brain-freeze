function Hero({ title, subtitle, ctaText }) {
  return (
    <section>
      <h1>{title || "Hero Title"}</h1>
      <p>{subtitle || "Hero subtitle text"}</p>
      {ctaText && <button>{ctaText}</button>}
    </section>
  );
}

export default Hero;