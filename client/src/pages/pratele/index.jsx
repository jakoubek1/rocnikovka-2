import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HonzaImg from "../../assets/Jiruse.png";
import JanImg from "../../assets/Krasincky.png";
import BackgroundImg from "../../assets/pozadi.jpg"; 

export default function PrateleMarvel() {
  return (
    <div
      className="flex flex-col min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
         Marvel Gym – Swag Lift
        </h1>

        <section className="bg-zinc-800 bg-opacity-80 rounded-xl p-8 shadow-lg text-gray-300 border-2 border-yellow-400">

          <p className="text-lg mb-6">
            Každý rok, už několik let, k nám do našeho fitka přijíždí celý tým
            Swag Lift. Společně u nás každoročně pořádají akci pro veřejnost,
            kde si návštěvníci mohou vyzkoušet různé disciplíny, jako je mrtvý
            tah, benchpress a další. Během tohoto dne si u nás mohou také
            zakoupit různé produkty od Swag Liftu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col items-center">
              <img
                src={HonzaImg}
                alt="Honza Jiruš"
                className="rounded-xl shadow-md w-full max-w-sm"
              />
              <p className="mt-4 font-semibold text-white">Honza Jiruš</p>
              <p className="text-sm text-gray-400">Nejsilnější muž v ČR</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={JanImg}
                alt="Jan Krasinský"
                className="rounded-xl shadow-md w-full max-w-sm"
                draggable="false"
              />
              <p className="mt-4 font-semibold text-white">Jan Krasinský</p>
              <p className="text-sm text-gray-400">Člen týmu Swag Lift</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
