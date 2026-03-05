import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import IceList from "../pages/IceList";
import IceDetail from "../pages/IceDetail";
import About from "../pages/About";
import Kontakt from "../pages/Kontakt";



function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ice" element={<IceList />} />
      <Route path="/ice/:slug" element={<IceDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/kontakt" element={<Kontakt />} />
    </Routes>
  );
}

export default AppRouter;