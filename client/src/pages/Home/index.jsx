import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import MainBgImage from "../../assets/pozadi.jpg";
import SectionBgImage from "../../assets/uvod.png";
import SponsorLarge from "../../assets/sponzor.png";
import Puma from "../../assets/Puma.jpg";
import Logo from "../../assets/logo.png";
import Life from "../../assets/LEPŠÍ.png";
import puma from "../../assets/puma.png";
import video from "../../assets/video.mp4";

import Slider1 from "../../assets/obrazek1.jpg";
import Slider2 from "../../assets/obrazek2.jpg";
import Slider3 from "../../assets/obrazek3.jpg";
import Slider4 from "../../assets/obrazek4.jpg";
import Slider5 from "../../assets/obrazek5.jpg";
import Slider6 from "../../assets/obrazek6.jpg";
import Slider7 from "../../assets/obrazek7.jpg";
import Slider8 from "../../assets/obrazek8.jpg";
import Slider9 from "../../assets/obrazek9.jpg";
import Slider10 from "../../assets/obrazek10.jpg";

import { useState } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
    Slider8,
    Slider9,
    Slider10,
  ];

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${MainBgImage})` }}
    >
      <div className="absolute inset-0 bg-black/10 z-0" />
      <Header />

      <main className="relative flex items-center justify-center text-center px-6 md:px-12 lg:px-24 min-h-[60vh] overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${SectionBgImage})` }}
        />
        <div className="absolute inset-0 bg-black opacity-30 z-0" />
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 select-none text-yellow-500">
            Vítejte v Marvel gym
          </h1>

          <div className="flex gap-6 justify-center flex-wrap mb-8">
            <Link
              to="/treneri"
              className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition"
            >
              Rezervace trenéra
            </Link>
            <Link
              to="/products"
              className="border border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Eshop
            </Link>
          </div>

          <p className="text-gray-100 text-lg">
            Profesionální fitness centrum v srdci Mladé Boleslavi. Síla, styl a
            komunita na jednom místě.
          </p>
        </div>
      </main>

      
      <div className="flex flex-col md:flex-row w-[90%] mx-auto my-12 h-auto md:h-[450px] bg-zinc-900 text-white p-8 rounded-2xl border-2 border-yellow-400">
        <div className="flex-1 flex flex-col justify-center text-left p-6">
          <h1 className="text-5xl font-bold text-yellow-400 mb-6 drop-shadow-md">
            Co u nás najdeš
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Naše posilovny patří mezi ty nejlepší v Mladé Boleslavi! Nabízíme
            špičkové vybavení v obou našich provozovnách... Tak na co čekáš?
            Přijď si zacvičit – tvé nové já začíná u nás!
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center p-6n  border-yellow-500">
          <img
            src={Logo}
            alt="Fitness gym"
            className="max-w-full max-h-[380px] rounded-xl object-cover"
          />
        </div>
      </div>

      
      <div className="w-[90%] mx-auto my-10 max-w-4xl relative">
        <h2 className="text-5xl font-bold text-yellow-400 mb-4 text-center">
          Jak to u nás vypadá
        </h2>

        <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-400 h-[600px] flex items-center justify-center bg-black">
          <img
            src={sliderImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500"
            loading="lazy"
            draggable="false"
          />
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-yellow-500 transition"
            aria-label="Previous Slide"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-yellow-500 transition"
            aria-label="Next Slide"
          >
            ›
          </button>
        </div>
      </div>

      
     <div className="w-[90%] mx-auto my-10 p-6 bg-zinc-900 text-white rounded-2xl border-2 border-yellow-500 flex flex-col md:flex-row items-stretch gap-8">
  
  <div className="md:flex-1 flex flex-col items-center md:items-start text-left space-y-6">
    <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full flex justify-center md:justify-start ml-24">
      <img
        src={SponsorLarge}
        alt="Puma sponzor"
        className="rounded-xl object-cover w-[440px] h-[320px]"
        draggable="false"
      />
    </div>
    <h2 className="text-5xl font-bold text-yellow-400 ml-14">
      Marvel Gym & Puma
    </h2>
    <div className="text-base md:text-lg max-w-[520px] space-y-4 ml-14">
      <p>Puma je významným sponzorem Marvel Gymu, díky čemuž můžeme našim členům nabídnout špičkové sportovní vybavení a oblečení.
      Spolupráce s touto světovou značkou nám umožňuje přinášet inovativní technologie a stylové produkty.
      Tyto produkty podporují výkon a motivaci při tréninku.
      Puma a Marvel Gym společně vytvářejí prostředí, kde síla, kvalita a design jdou ruku v ruce.
      Tato spolupráce pomáhá našim sportovcům dosahovat nejlepších výsledků.</p>
    </div>
  </div>

  
  <div className="md:flex-1 flex flex-col items-center md:items-start text-left space-y-6">
    
    <h2 className="text-5xl font-bold text-yellow-400">
      Hammer Strength & Life Fitness
    </h2>
    <div className="text-base md:text-lg max-w-[520px] space-y-4">
      <p>Majitel Marvel Gymu si dal záležet na tom, aby vybavení posilovny odpovídalo nejvyšším světovým standardům.
      Proto padla volba na špičkové americké značky Hammer Strength a Life Fitness.
      Tyto značky dnes patří mezi absolutní elitu v oblasti fitness vybavení.
      Díky jejich podpoře a technologiím najdeš v Marvel Gymu profesionální stroje, které využívají i vrcholoví sportovci po celém světě.
      Spojením s těmito značkami potvrzujeme náš závazek poskytovat maximální kvalitu, výkon a bezpečnost při každém tréninku.</p>
    </div>
    <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full flex justify-start ml-10">

      <img
        src={Puma} 
        alt="Hammer Strength a Life Fitness"
        className="rounded-xl object-cover w-[440px] h-[320px]"
        draggable="false"
      />
    </div>
  </div>
</div>


      
      <div className="flex gap-6 justify-center items-center mt-8">
        <div
          onClick={() =>
            window.open("https://eu.puma.com/cz/en/home", "_blank")
          }
          className="border-2 border-yellow-500 p-4 rounded-xl bg-zinc-800 shadow-md hover:shadow-yellow-500/30 transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
          <img
            src={puma}
            alt="Puma logo"
            className="h-24 w-auto object-contain"
            draggable="false"
          />
        </div>
        <div
          onClick={() =>
            window.open("https://www.lifefitness.cz/brands/hammer-strength/", "_blank")
          }
          className="border-2 border-yellow-500 p-4 rounded-xl bg-zinc-800 shadow-md hover:shadow-yellow-500/30 transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
          <img
            src={Life}
            alt="Life Fitness logo"
            className="h-24 w-auto object-contain"
            draggable="false"
          />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row w-[90%] mx-auto my-12 h-auto md:h-[450px] bg-zinc-900 text-white p-8 rounded-2xl border-2 border-yellow-400">
        <div className="flex-1 flex flex-col justify-center text-left p-6">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow-md">
            Velká novinka
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            S radostí oznamujeme, že Marvel Gym rozšiřuje své působení a otevírá třetí posilovnu v Mladé Boleslavi. Těšit se můžete na špičkové vybavení, moderní prostředí a prvotřídní zázemí.
Otevření plánujeme přibližně na říjen 2025 – sledujte nás pro více informací!
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center p-6">
          <video
            src={video}
            controls
            autoPlay
           
            playsInline
            className="w-full h-[320px] md:h-[400px] rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
