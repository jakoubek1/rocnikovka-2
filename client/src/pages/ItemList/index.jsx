import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllItem } from "../../models/Item";
import ItemLink from "./ItemLink";
import Background from "../../assets/pozadi.jpg"; 

export default function Home() {
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllItem();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setItem(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return <p className="text-center text-red-500 mt-10">Produkt nenalezen</p>;
  }

  if (!isLoaded) {
    return <p className="text-center text-yellow-400 mt-10">Načítání...</p>;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-10"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Nabídka produktů
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {item.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 bg-opacity-90 border border-yellow-500 text-yellow-200 p-4 rounded-xl shadow-md hover:shadow-yellow-400 transition-shadow"
          >
            <ItemLink {...item} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/admin" className="text-yellow-400 hover:underline text-lg">
          Admin panel
        </Link>
      </div>
    </div>
  );
}
