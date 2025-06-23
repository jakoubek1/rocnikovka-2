  import React, { useState } from "react";
import "./Registrace.css"; // Můžeš vytvořit CSS pro vzhled

const Registrace = () => {
  const [formData, setFormData] = useState({
    jmeno: "",
    email: "",
    heslo: "",
    potvrzeniHesla: "",
  });

  const [zprava, setZprava] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.heslo !== formData.potvrzeniHesla) {
      setZprava("Hesla se neshodují.");
      return;
    }
    // Zde by byl request na backend (např. axios.post)
    console.log("Data odeslána:", formData);
    setZprava("Registrace úspěšná!");
  };

  return (
    <div className="registrace-container">
      <h2>Registrace</h2>
      <form onSubmit={handleSubmit} className="registrace-form">
        <input
          type="text"
          name="jmeno"
          placeholder="Jméno"
          value={formData.jmeno}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="heslo"
          placeholder="Heslo"
          value={formData.heslo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="potvrzeniHesla"
          placeholder="Potvrdit heslo"
          value={formData.potvrzeniHesla}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrovat</button>
      </form>
      {zprava && <p className="zprava">{zprava}</p>}
    </div>
  );
};

export default Registrace;
