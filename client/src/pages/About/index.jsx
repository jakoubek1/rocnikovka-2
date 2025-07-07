import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Realizace from "../../assets/realizace.png";
import Vysledek from "../../assets/vysledek.png";
import Pozadi from "../../assets/pozadi.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${Pozadi})` }}
    >
      <Header />
      <div className="flex flex-col min-h-screen w-full">

        <div className="flex flex-col md:flex-row w-[90%] mx-auto my-10 h-auto md:h-[400px] bg-zinc-900 text-white p-5 rounded-2xl border-2 border-yellow-400">
          <div className="flex-1 flex flex-col justify-center text-left p-5">
            <h1 className="text-4xl font-bold text-[#b58900] mb-4 drop-shadow-md">
              Náš Marvel
            </h1>
            <p className="text-white text-base leading-relaxed">
              Marvel Gym je v Mladé Boleslavi velmi známý pojem. Jedná se o dva kluby, které jsou svým designem i atmosférou zcela jedinečné. Majitel klubu Pavel Lepič je milovník pohybu, ale také velmi dynamický člověk plný energie. Miluje hudbu, společnost, život na plný plyn. Veškerá jeho vášeň je přenesena do klubové kultury. Fitka Marvel Gym jsou od rána do večera narvaná k prasknutí. Potkávají se zde všechny věkové kategorie a dominují mladí, kteří Marvel Gym vnímají jako místo, kde nikdo z okolí Boleslavi nemůže chybět.
              </p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <iframe
              src="https://www.youtube.com/embed/AW6Eq0OjjVY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[90%] h-full rounded-xl object-cover max-h-[400px] transition-transform duration-300 ease-in-out hover:scale-105"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse w-[90%] mx-auto my-10 h-auto md:h-[400px] bg-zinc-900 text-white p-5 rounded-2xl border-2 border-yellow-400">
          <div className="flex-1 flex flex-col justify-center text-left p-5">
            <h1 className="text-4xl font-bold text-[#b58900] mb-4 drop-shadow-md">
              Realizace
            </h1>
            <p className="text-white text-base leading-relaxed">
              Pobočka Marvel Gym, která se nacházela v centru a byla vlajkovou lodí současného řetězce se musela v létě 2022 přesunout. Majitel nemovitosti se rozhodl pro komplexní rekonstrukci budovy a všichni nájemníci museli pronajaté prostory opustit.
              Společnost 3D FITNESS byla požádána, zda-li by mohla pomoci s řešením nové pobočky a zejména zda by zajistila všechny nové stroje a vybavení. Klient měl zcela jasno, že vybavení musí být jen to nejlepší, a to je bezesporu značka Hammer Strength pro celou silovou i funkční / performance zónu. Rovněž se rozšiřovala kardio zóna o běhací pásy, schody, kola a další položky.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <img
              src={Realizace}
              alt="Marvel Gym 1"
              draggable="false"
              className="w-[90%] h-full max-h-[400px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[90%] mx-auto my-10 h-auto md:h-[400px] bg-zinc-900 text-white p-5 rounded-2xl border-2 border-yellow-400">
          <div className="flex-1 flex flex-col justify-center text-left p-5">
            <h1 className="text-4xl font-bold text-[#b58900] mb-4 drop-shadow-md">
              Výsledek
            </h1>
            <p className="text-white text-base leading-relaxed">
              Původní kancelářské prostory a sklepní místnosti byly přeměněny během několika měsíců ve vibrující moderní klub plný úžasné energie. Světelné efekty, motivační hudba, špičkové stroje Hammer Strength a Life Fitness. A hlavně klub plný cvičenců, kde je těžké najít volné místo nebo volný stroj. Špičkově zpracovaný design, usměvaví recepční a zejména nadšení klienti. Klub je od prvního dne v zelených číslech a návštěvnost absolutně předčila očekávání. Majitel Pavel Lepič je nadšený a plánuje další expanzi. A jak říká, vždy pouze se špičkovými stroji z USA.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <img
              src={Vysledek}
              alt="Marvel Gym 2"
              draggable="false"
              className="w-[90%] h-full max-h-[400px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
