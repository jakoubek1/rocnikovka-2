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
              Marvel Gym je v Mladé Boleslavi dobře známým pojmem. Jde o dva kluby, které se odlišují svým jedinečným designem a nezaměnitelnou atmosférou. Majitel Pavel Lepič je vášnivý sportovec a energický člověk, který miluje hudbu, společnost a život naplno. Svou energii a nadšení přenáší přímo do klubové kultury. Marvel Gymy praskají od rána do večera ve švech – setkávají se tu lidé všech věkových kategorií, přičemž dominují mladí, kteří vnímají Marvel Gym jako místo, které prostě nemůžou vynechat.
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
              Původní pobočka Marvel Gym, která sídlila přímo v centru Mladé Boleslavi, se musela v létě 2022 přestěhovat kvůli plánované celkové rekonstrukci budovy. Všichni nájemníci tak byli nuceni prostory opustit. Společnost 3D FITNESS byla následně oslovena s žádostí o spolupráci na návrhu nové pobočky a také o zajištění veškerého vybavení. Klient měl od počátku jasno – cílem bylo špičkové vybavení, a proto padla volba na značku Hammer Strength, která pokrývá jak silovou, tak funkční zónu. Kardio zóna se navíc výrazně rozšířila – najdete v ní běžecké pásy, schodišťové trenažéry, kola a další moderní stroje.
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
             Z původních kancelářských a sklepních prostor během několika měsíců vyrostl moderní fitness klub plný energie, pohybu a motivace. Interiér ožívá díky promyšlenému nasvícení, dynamické hudbě a špičkovému vybavení značek Hammer Strength a Life Fitness.
             Marvel Gym si velmi rychle získal popularitu – stroje jsou prakticky neustále v provozu, atmosféra je živá a tréninková zóna doslova pulzuje životem. Prostor je designově precizně zpracovaný, obsluhu zajišťují usměvaví recepční a návštěvníci odcházejí spokojení a plní energie.
             Od samotného otevření klub generuje zisk a návštěvnost předčila očekávání. Majitel Pavel Lepič neskrývá nadšení a již plánuje další rozšíření. Jak sám říká – vždy jedině se špičkovým americkým vybavením.  
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
