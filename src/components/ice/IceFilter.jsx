
function IceFilter({ selectedTag, setSelectedTag}) {

    const tags = ["All", "Sorbet", "Vegan", "Fruchtig", "Milch", "Süß & Salzig", "Blumig", "Gourmet", "Nuss", "Klassiker", "Schoko", "Trend", "Exotisch"];

    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
               <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`
                    px-4 py-1 rounded-full border transition-transform duration-300
                    ${selectedTag == tag
                        ? "bg-[#CC1E36] text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-[#fee7e3] hover:scale-105"
                    }    
                `}
               >
                    {tag}
               </button>
            ))}
        </div>
    )
}

export default IceFilter; 