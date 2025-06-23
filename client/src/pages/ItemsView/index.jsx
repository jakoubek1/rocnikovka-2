import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteItem, getItemById } from "../../models/items";
import { useState, useEffect } from "react";

export default function ItemsView() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getItemById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setItem(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const data = await deleteItem(id, password);
    if (data.status === 200) {
      alert("Item deleted successfully!");
      navigate(`/admin`);
    } else {
      setInfo(data.message);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) return <p>Item not found</p>;
  if (!isLoaded) return <p>Item is loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-6 ">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          Item Detail
        </h1>

        <div className="space-y-2 text-base text-gray-700">
          <p><span className="font-semibold">ID:</span> {id}</p>
          <p><span className="font-semibold">Name:</span> {item.name}</p>
          <p><span className="font-semibold">Material:</span> {item.material}</p>
          <p><span className="font-semibold">Gram:</span> {item.gram}</p>
          <p><span className="font-semibold">Delivery:</span> {item.delivery}</p>
          <p><span className="font-semibold">Color:</span> {item.color}</p>
          <p><span className="font-semibold">Price:</span> {item.price}</p>
          <p><span className="font-semibold">Image URL:</span> {item.image}</p>
        </div>

        <form onSubmit={handleDelete} className="flex flex-col gap-3 w-full">
          <input
            type="password"
            required
            placeholder="Admin password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete Item
          </button>

          <p className="text-center text-sm text-red-500">{info}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link to={`/items/update/${id}`}>
              <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold ">
                Update Item
              </button>
            </Link>
            <Link to="/items">
              <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold">
                Go back
              </button>
            </Link>
            <Link to="/">
              <button className="w-full border rounded-lg py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 transition font-semibold">
                Main Page
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
