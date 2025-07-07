import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DeliveryImage from "../../assets/pozadi.jpg";

export default function Doprava() {
  return (
    <div
      className="flex flex-col min-h-screen text-white"
      style={{
        backgroundImage: `url(${DeliveryImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
          Doprava
        </h1>

        
        <section
          className="rounded-xl p-8 shadow-lg text-gray-300"
          style={{
            backgroundColor: "rgba(17, 17, 17, 0.85)", 
            border: "2px solid #FFD700",
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Možnosti dopravy</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Standardní doprava – doručení do 3–5 pracovních dnů</li>
            <li>Expresní doprava – doručení do 1–2 pracovních dnů</li>
            <li>Osobní odběr – možnost vyzvednutí na naší pobočce</li>
          </ul>
        </section>

        
        <section
          className="rounded-xl p-8 shadow-lg mt-8 text-gray-300"
          style={{
            backgroundColor: "rgba(17, 17, 17, 0.85)",
            border: "2px solid #FFD700",
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Cena dopravy</h2>
          <p>
            Cena dopravy se liší podle vybrané metody a hodnoty objednávky. Pro
            objednávky nad 1500 Kč je doprava zdarma.
          </p>
        </section>

      
        <section
          className="rounded-xl p-8 shadow-lg mt-8 text-gray-300"
          style={{
            backgroundColor: "rgba(17, 17, 17, 0.85)",
            border: "2px solid #FFD700",
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Doprava po celé ČR</h2>
          <p>Zajišťujeme rychlé a spolehlivé doručení po celé České republice.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
