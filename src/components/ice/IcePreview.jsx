import iceData from "../../data/iceData.json";


function IcePreview() {
    return (
        <section className="flex flex-col items-center gap-8 mb-20">
            <h2 className="font-headline text-3xl text-[#CC1E36] text-center ">
                Soft Serve, Hard Crush</h2>
            <div 
            className="
             grid grid-cols-3
             justify-evenly items-center
             py-6 px-10 w-full min-h-110 max-w-7xl
             bg-[#f5e7e4] rounded-4xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">

                {iceData
                    .filter((ice) => ice.favorite === true)
                    .slice(0, 3)
                    .map((ice) => (
                    <div 
                     key={ice.slug} 
                     className="flex flex-col items-center gap-2"
                    >
                        <div className="w-full h-80 flex items-center justify-center">
                            <img src={ice.image} alt="" className="h-72 object-contain hover:scale-110
                            transition-transform duration-300" />
                        </div>
                        <h4 className="text-xl tracking-widest text-gray-700">{ice.name}</h4>
                    </div>
                ))}
            </div>
            <button
             className="bg-[#85B37E] text-white text-md tracking-wide px-10 py-2 rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.25)] hover:scale-105 hover:bg-[#55854d]"
            >
                Jetzt alle Sorten entdecken
            </button>
        </section>
    )
}

export default IcePreview;