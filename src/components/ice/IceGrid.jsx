import IceCard from "./IceCard";
import iceCreams from "../../data/iceCreams.json"

function IceGrid() {

  return (
    <section 
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12"
     >
        {iceCreams.map((ice)=> (
            <IceCard 
            key={ ice.slug }
            name={ ice.name }
            category={ ice.category}
            description={ ice.description }
            />
        ))}

    </section>
  );
}

export default IceGrid;