import React, { useState } from "react";
import "./Přihlášení.css";
import { Link } from "react-router-dom";


const Přihlášení = () => {
  const [email, setEmail] = useState("");
  const [heslo, setHeslo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Přihlašovací údaje:", { email, heslo });
    // TODO: napojit na backend/autentizaci
  };

  return (
    <div className="prihlaseni-container">
      <h2>Přihlášení</h2>
      <form onSubmit={handleSubmit} className="prihlaseni-form">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Heslo"
          value={heslo}
          onChange={(e) => setHeslo(e.target.value)}
          required
        />
        <button type="submit">Přihlásit se</button>
      </form>
      <div className="zpet-domu">
  <Link to="/" className="zpet-link">← Zpět na domovskou stránku</Link>
</div>
    </div>
  );
};

export default Přihlášení;
