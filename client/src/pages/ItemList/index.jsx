import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllItem } from "../../models/Item";
import ItemLink from "./ItemLink";

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
    return <p className="text-center text-red-600 mt-10">Item not found</p>;
  }

  if (!isLoaded) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Products List</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 px-4">
        {item.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow max-w-sm w-full mx-auto"
          >
            <ItemLink {...item} />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to={"/admin"} className="text-blue-500 hover:underline">
          <p>Admin panel</p>
        </Link>
      </div>
    </div>
  );
}
