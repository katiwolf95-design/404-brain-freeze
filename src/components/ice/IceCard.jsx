function IceCard({ image, name, category = [], description }) {
  return (
    <article
     className="
     flex flex-col justify-center items-center gap-3 
     py-6 px-4 w-xs min-h-105
     bg-[#f5e7e4] rounded-4xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
     hover:scale-105 hover:shadow-[8px_8px_12px_rgba(0,0,0,0.25)] transition transform
     "> 
        <div className="w-full h-52 flex items-center justify-center">
            <img src={image} alt="" className="max-h-full object-contain"/>
        </div>
        <h3
         className="font-body text-xl tracking-wider"
        >
            {name || "Ice Name"}
        </h3>
        <div className="flex flex-row gap-2 flex-wrap">
            {category.map((category) => (
                <span
                 key={category}
                 className="bg-red-400 font-body text-white px-3 py-1 rounded-full text-md shadow-[2px_2px_4px_rgba(0,0,0,0.25)]"
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