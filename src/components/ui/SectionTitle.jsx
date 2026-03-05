function SectionTitle({ title }) {
  return (
    <h2 className="font-headline text-3xl text-[#CC1E36] text-center tracking-wide">
      {title || "Section Title"}
    </h2>
  );
}

export default SectionTitle;