import iceData from "../../data/iceData.json";


function IcePreview() {
    return (
        <section className="flex flex-col items-center gap-8 mb-40">
            <h2 className="font-headline text-3xl text-[#CC1E36] text-center ">
                Soft Serve, Hard Crush</h2>
            <div 
            className="
             flex flex-col justify-center items-center gap-3 
             py-6 px-4 w-xs min-h-120
             bg-[#f5e7e4] rounded-4xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">

                {}
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