import { useState } from "react";

import IceGrid from "../components/ice/IceGrid";
import IceFilter from "../components/ice/IceFilter";
import iceData from "../data/iceData.json";

function IceList() {

    const [selectedTag, setSelectedTag] = useState("All");

    const filteredIce = selectedTag ==="All"
      ? iceData
      : iceData.filter(ice => ice.category.includes(selectedTag));

    return (
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="font-headline text-4xl text-[#CC1E36] mb-8 self-start">Unsere Sorten</h1>
      <IceFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
      <IceGrid iceData={filteredIce}/>
    </div>
  );
}

export default IceList;