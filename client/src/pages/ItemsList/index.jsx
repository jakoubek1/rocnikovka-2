import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllItems } from "../../models/items";
import ItemLink from "./ItemsLink";

export default function ItemsList() {
  const [items, setItems] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllItems();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setItems(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return <p>Items not found</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold text-gray-900">Items list</h1>

        <div className="font-light w-full">
          {items.map((item, index) => (
            <ItemLink key={index} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-[8px] w-full">
          <Link to="/admin" className="w-full">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold w-full">
              Go back
            </button>
          </Link>
          <Link to="/" className="w-full">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold w-full">
              Main Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
