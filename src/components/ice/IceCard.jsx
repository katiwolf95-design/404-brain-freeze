import mango from "../../assets/images/mango.png"


function IceCard({ name, category = [], description }) {
  return (
    <article
     className="flex flex-col justify-center items-center gap-3 rounded-4xl bg-[#FFF3F1] py-4 px-8 w-xs h-110 shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"
    >
        <img src={mango} alt="" className="w-1/2"/>
        <h3
         className="font-body text-xl font-semibold tracking-wide"
        >
            {name || "Ice Name"}
        </h3>
        <div className="flex flex-row gap-2 flex-wrap">
            {category.map((category) => (
                <span
                 key={category}
                 className="bg-red-400 font-body text-white px-3 py-1 rounded-full text-md"
                >
                    {category || ""}
                </span>
            ))}
        </div>
        <p className="font-body text-center text-md">{description || "Description"}</p>
    </article>
   
  );
}

export default IceCard;