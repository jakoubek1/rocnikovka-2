import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllItem } from "../../models/Item";
import MainLink from "./MainLink";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../assets/pozadi.jpg";

export default function Main() {
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [searchParams] = useSearchParams();

  const load = async () => {
    const data = await getAllItem(searchParams.get("name"));
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setItem(data.payload);
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
          <h1 className="text-6xl font-bold text-yellow-400 text-center mb-12">
            Co si vybereš?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-center items-start">
            {item.map((item, index) => (
              <MainLink key={index} {...item} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
