import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllReservation } from "../../models/Reservation";
import MainLink from "./ResMainLink";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../assets/pozadi.jpg";
import TeamImg from "../../assets/treneri2.jpg";

export default function Main() {
  const [reservation, setReservation] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [searchParams] = useSearchParams();

  const load = async () => {
    const data = await getAllReservation(searchParams.get("name"));
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setReservation(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, [searchParams]);

  if (isLoaded === null) {
    return <p className="text-center text-red-500 mt-20">Chyba při načítání produktů.</p>;
  }

  if (!isLoaded) {
    return <p className="text-center mt-20 text-white">Načítání...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <Header />

      <div
        className="flex flex-col min-h-screen text-white bg-cover bg-center items-center justify-center px-4 py-5"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <main className="flex-grow px-6 md:px-12 lg:px-24 py-20">
      
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mt-0 mb-10 bg-zinc-900 text-white p-6 rounded-2xl border-2 border-yellow-400 shadow-xl">
         
            <div className="md:w-1/2 w-full flex flex-col justify-center text-left p-4">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow-md leading-tight">
                Nevíš kde začít?<br />
                Nevíš si rady?<br />
                Přidej se k nám a my ti všechno ukážem
              </h1>
              <p className="text-white text-lg leading-relaxed">
                Náš tým trenérů ti nabídne profesionální přístup, individuálně sestavené
                tréninkové plány, podporu při dosahování tvých cílů a hlavně motivaci, která tě pošene vpřed.
                Nezáleží na tom, jestli jsi začátečník nebo pokročilý – naši odborníci tě nasměrují tím
                správným směrem, ať už chceš nabrat svaly, zhubnout, zlepšit kondici nebo jen najít
                radost v pohybu.
              </p>
            </div>

            
            <div className="flex-1 flex justify-center items-center p-4 mt-24">
              <img
                src={TeamImg}
                alt="Tým trenérů"
                className="w-[70%] h-full max-h-[450px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                draggable="false"
              />
            </div>
          </div>

         
          <div>
            <h1 className="text-6xl font-bold text-yellow-400 text-center mb-12">
              Koho si vybereš?
            </h1>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-center items-start">
            {reservation.map((reservation, index) => (
              <MainLink key={index} {...reservation} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
