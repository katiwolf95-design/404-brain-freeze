import IceCard from "./IceCard";

function IceGrid({ iceData }) {

  return (
    <section 
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
     >
        {iceData.map((ice)=> (
            <IceCard 
            key={ ice.slug }
            image={ ice.image }
            name={ ice.name }
            category={ ice.category}
            description={ ice.description }
            />
        ))}

    </section>
  );
}

export default IceGrid;