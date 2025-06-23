import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllItem } from "../../models/items";
import MainLink from "./MainLink";

export default function Main() {
  const [items, setItems] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [searchParams] = useSearchParams();

  const load = async () => {
    const data = await getAllItem(searchParams.get("name") || "");
    if (data.status === 404 || data.status === 500) {
      setLoaded(null);
      return;
    }
    if (data.status === 200) {
      setItems(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, [searchParams]);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen text-white flex justify-center items-center">
        <p>Produkt nenalezen.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-12 pt-12 pb-12">
      <h1 className="text-3xl font-semibold text-white text-center mb-12">
        NAŠE PRODUKTY
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 justify-center items-start">
        {items.map((item, index) => (
          <MainLink key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
