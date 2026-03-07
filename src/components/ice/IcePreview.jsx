import iceData from "../../data/iceData.json";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";



function IcePreview() {
    return (
        <section 
         className="flex flex-col items-center gap-8 mb-20 w-full max-w-7xl mx-auto px-6 "
        >
            <SectionTitle title={"Soft Serve, Hard Crush"}/>

            <div 
            className="
             grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-6
             bg-[#f5e7e4] rounded-4xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">

                {iceData
                    .filter((ice) => ice.favorite === true)
                    .slice(0, 3)
                    .map((ice) => (
                    <div 
                     key={ice.slug} 
                     className="flex flex-col items-center gap-2"
                    >
                        <div className="w-full sm:h-48 md:h-80 flex items-center justify-center">
                            <img src={ice.image} alt="" className="h-full object-contain hover:scale-110
                            transition-transform duration-300" />
                        </div>
                        <h4 className="sm:text-md md:text-xl tracking-widest text-gray-700">{ice.name}</h4>
                    </div>
                ))}
            </div>
            <Button to={"/ice"}>Alle Sorten entdecken</Button>
        </section>
    )
}

export default IcePreview;
