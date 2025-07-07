import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../assets/pozadi.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 py-20 bg-black/60">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 max-w-4xl select-none">
          Vítejte na Marvel gym stránce prostor pro sílu a zdraví
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-300">
          Profesionální fitness centrum s moderním vybavením. <br /> Rezervujte si svého trenéra a vybavte se v našem eshopu.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <Link
            to="/Rezervace"
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;
