import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About"
import Rezervace from "../pages/Rezervace/Rezervace";
import Eshop from "../pages/Eshop/Eshop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />            {/* Domovská stránka */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Eshop" element={<Eshop />} />
        <Route path="/Rezervace" element={<Rezervace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
