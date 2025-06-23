import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";


const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={() => setMenu("Home")}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <ul className="navbar-list">
        <li className={menu === "Home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("Home")}>Home</Link>
        </li>
        <li className={menu === "About" ? "active" : ""}>
          <Link to="/About" onClick={() => setMenu("About")}>About</Link>
        </li>
        <li className={menu === "Rezervace" ? "active" : ""}>
          <Link to="/Rezervace" onClick={() => setMenu("Rezervace")}>Rezervace</Link>
        </li>
        <li className={menu === "Eshop" ? "active" : ""}>
          <Link to="/Eshop" onClick={() => setMenu("Eshop")}>Eshop</Link>
        </li>
      </ul>

      <ul className="navbar-list-right">
        <li>
          <Link to="/Přihlášení" className="btn" onClick={() => setMenu("Login")}>Přihlášení</Link>
        </li>
        <li>
          <Link to="/Registrace" className="btn" onClick={() => setMenu("Register")}>Registrace</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
