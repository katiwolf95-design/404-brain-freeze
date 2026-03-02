function TestimonialCard({ name, text }) {
  return (
    <article>
      <p>{text || "Customer testimonial text"}</p>
      <strong>{name || "Customer Name"}</strong>
    </article>
  );
}

export default TestimonialCard;