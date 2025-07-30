import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Shirt, Home, List } from "lucide-react";
import Background from "../../assets/pozadi.jpg";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const session = sessionStorage.getItem("adminLoggedIn");
    if (session === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "kuba") {
      sessionStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Nesprávné heslo!");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-lg max-w-sm w-full border-2 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
            Přihlášení do admin panelu
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Heslo"
              className="w-full p-3 rounded-md bg-yellow-50 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-400 transition"
            >
              Přihlásit se
            </button>
          </form>
        </div>
      </div>
    );
  }

  const panels = [
    { to: "/add-item", icon: <ShoppingBag className="h-6 w-6 text-yellow-500" />, title: "Vytvořit produkt" },
    { to: "/view-item", icon: <Shirt className="h-6 w-6 text-yellow-600" />, title: "Zobrazit produkty" },
    { to: "/add-reservation", icon: <ShoppingBag className="h-6 w-6 text-yellow-500" />, title: "Vytvořit rezervaci" },
    { to: "/view-reservation", icon: <ShoppingBag className="h-6 w-6 text-yellow-500" />, title: "Zobrazit rezervace" },
    { to: "/orders", icon: <List className="h-6 w-6 text-yellow-500" />, title: "Objednávky" },
    {
      to: "/",
      icon: <Home className="h-6 w-6 text-yellow-500" />,
      title: "Hlavní stránka",
      onClick: handleLogout,  
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-black bg-opacity-70 p-10 rounded-2xl shadow-xl max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 text-center w-full">
            Admin Panel
          </h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {panels.map((panel, index) => (
            <Link
              key={index}
              to={panel.to}
              onClick={panel.onClick ? panel.onClick : undefined}
              className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl p-6 shadow-lg border-2 border-yellow-400 hover:shadow-yellow-300 transition-transform hover:scale-105 flex items-center space-x-4"
            >
              {panel.icon}
              <span className="text-yellow-800 font-semibold">{panel.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
