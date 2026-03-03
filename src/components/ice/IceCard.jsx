function IceCard({ name, category, description }) {
  return (
    <article>
      <h3>{name || "Ice Name"}</h3>
      <span>{category || "Category"}</span>
      <p>{description || "Description"}</p>
    </article>
  );
}

export default IceCard;