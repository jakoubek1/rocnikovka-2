import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Menu");

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-red-600 text-white shadow-md z-50">
      <ul className="flex justify-center space-x-8 py-4">
        <li className={menu === "Home" ? "underline underline-offset-4" : ""}>
          <Link to="/" onClick={() => setMenu("Home")}>Home</Link>
        </li>
        <li className={menu === "About" ? "underline underline-offset-4" : ""}>
          <Link to="/About" onClick={() => setMenu("About")}>About</Link>
        </li>
        <li className={menu === "Rezervace" ? "underline underline-offset-4" : ""}>
          <Link to="/Rezervace" onClick={() => setMenu("Rezervace")}>Rezervace</Link>
        </li>
        <li className={menu === "Eshop" ? "underline underline-offset-4" : ""}>
          <Link to="/Eshop" onClick={() => setMenu("Eshop")}>Eshop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

