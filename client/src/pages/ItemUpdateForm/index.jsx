import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateItem, getItemById } from "../../models/Item";
import Background from "../../assets/pozadi.jpg";

export default function ItemUpdateForm() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState();
  const [info, setInfo] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const load = async () => {
    const data = await getItemById(id);
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setItem(data.payload);
      setFormData(data.payload);
      setLoaded(true);
    }
  };

  const updateForm = async () => {
    const data = await updateItem(id, formData);
    if (data.status === 200) return navigate(`/item/${id}`);
    setInfo(data.message);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-red-600 px-4">
        <p className="text-lg">Item nebyl nalezen</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-yellow-400 px-4">
        <p className="text-lg">Načítání Itemu...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-zinc-900 bg-opacity-90 p-8 rounded-2xl shadow-md w-full max-w-xl border border-yellow-400 text-yellow-200">
        <h1 className="text-2xl font-semibold mb-6 text-yellow-400">
          Úprava produktu
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          {["name", "brand", "color", "price", "image"].map((field) => (
            <input
              key={field}
              type={field === "price" ? "number" : "text"}
              name={field}
              required
              placeholder={field[0].toUpperCase() + field.slice(1)}
              onChange={handleChange}
              defaultValue={item[field]}
              className="w-full border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200 p-3 rounded-md bg-zinc-800 text-yellow-300"
            />
          ))}

          
          <input
            type="number"
            name="stockQuantity"
            required
            min="0"
            placeholder="Množství na skladě"
            onChange={handleChange}
            defaultValue={item.stockQuantity}
            className="w-full border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200 p-3 rounded-md bg-zinc-800 text-yellow-300"
          />

          <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-300 transition">
            Uložit změny
          </button>
        </form>

        {info && <p className="mt-4 text-red-500">{info}</p>}

        <div className="mt-6 flex justify-between items-center gap-4 text-yellow-400 text-sm">
          <Link to={`/item/${id}`} className="hover:underline">
            ← Zpět na detail produktu
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin panel
          </Link>
        </div>
      </div>
    </div>
  );
}
