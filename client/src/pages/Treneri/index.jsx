import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HanaImg from "../../assets/Hana.jpg";
import JanImg from "../../assets/Kadlec.jpg";
import BackgroundImg from "../../assets/pozadi.jpg";
import TeamImg from "../../assets/Treneri.jpg";
import DavidImg from "../../assets/David.jpg";
import ValerieImg from "../../assets/Valerie.jpg";
import stepankaImg from "../../assets/stepanka.jpg";
import LepicImg from "../../assets/Lepic.jpg";

const treneri = [
  { id: 1, jmeno: "Jan Kadlec", specializace: "Fitness Trenér", obrazek: JanImg },
  { id: 2, jmeno: "Hana Vacková", specializace: "Fitness Trenérka", obrazek: HanaImg },
  { id: 3, jmeno: "David Urban", specializace: "Fitness Trenér", obrazek: DavidImg },
  { id: 4, jmeno: "Valerie Velemanová", specializace: "Fitness Trenérka", obrazek: ValerieImg },
  { id: 5, jmeno: "Štěpanka Trnková", specializace: "Fitness Trenérka", obrazek: stepankaImg },
  { id: 6, jmeno: "Pavel Lepič", specializace: "Fitness Trenér", obrazek: LepicImg },
];

export default function Treneri() {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      
    

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        
        <div className="flex flex-col md:flex-row w-[90%] mx-auto my-10 bg-zinc-900 text-white p-6 rounded-2xl border-2 border-yellow-400">
          
          <div className="md:w-1/2 w-full flex flex-col justify-center text-left p-4">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4 drop-shadow-md">
              Nevíš kde začít?<br></br>
              Nevíš si rady?<br></br>
              Přidej se k nám a mi ti všechno ukážem
              <br></br>
            </h1>
            <p className="text-white text-base leading-relaxed">
              Náš tým trenérů ti nabídne profesionální přístup, individuálně sestavené tréninkové
              plány, podporu při dosahování tvých cílů a hlavně motivaci, která tě požene vpřed.
              Nezáleží na tom, jestli jsi začátečník nebo pokročilý – naši odborníci tě nasměrují tím
              správným směrem, ať už chceš nabrat svaly, zhubnout, zlepšit kondici nebo jen najít
              radost v pohybu.
            </p>
          </div>

          
          <div className="flex-1 flex justify-center items-center p-4">
            <img
              src={TeamImg}
              alt="Tým trenérů"
              className="w-[70%] h-full max-h-[450px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105 "
              draggable="false"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-10 text-yellow-400 text-center">
          Ke komu se přidáš?
        </h1>


        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 px-6 pb-20">
          {treneri.map((trener) => (
            <Link
              key={trener.id}
              to={`/trener/${trener.id}`}
              className="bg-black/80 border-2 border-yellow-400 px-6 py-6 rounded-xl text-white shadow-lg flex flex-col items-center w-72 h-96 mx-auto transition duration-300 transform hover:scale-105 hover:brightness-125 hover:border-yellow-300"
              
            >
              <img
                src={trener.obrazek}
                alt={trener.jmeno}
                className="w-full h-48 object-cover rounded-xl mb-4"
                draggable="false"
              />
              <div className="mt-8 text-center">
                <h2 className="text-xl font-bold mb-1">{trener.jmeno}</h2>
                <p>{trener.specializace}</p>
              </div>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
