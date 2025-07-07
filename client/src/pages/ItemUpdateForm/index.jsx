import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateItem, getItemById } from "../../models/Item";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-red-600 text-lg">Item nebylo nalezeno</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-gray-600 text-lg">Načítání Itemu...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Úprava itemu
        </h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Název"
            onChange={handleChange}
            defaultValue={item.name}
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            name="brand"
            required
            placeholder="Značka"
            onChange={handleChange}
            defaultValue={item.brand}
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            name="color"
            required
            placeholder="Barva"
            onChange={handleChange}
            defaultValue={item.color}
            className="w-full border p-3 rounded-md"
          />
          <input
            type="number"
            name="price"
            required
            placeholder="Cena"
            onChange={handleChange}
            defaultValue={item.price}
            className="w-full border p-3 rounded-md"
          />
           <input
            type="text"
            name="image"
            required
            placeholder="Image"
            onChange={handleChange}
            defaultValue={item.image}
            className="w-full border p-3 rounded-md"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500">
            Uložit změny
          </button>
        </form>

        {info && <p className="mt-4 text-red-600">{info}</p>}

        <div className="mt-6 flex justify-between items-center gap-4">
          <Link to={`/item/${id}`} className="text-blue-500 hover:underline">
            ← Zpět na detail itemu
          </Link>
          <Link to="/admin" className="text-blue-500 hover:underline">
            Admin panel
          </Link>
        </div>
      </div>
    </div>
  );
}
