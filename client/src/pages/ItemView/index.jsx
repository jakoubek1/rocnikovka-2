import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteItem, getItemById } from "../../models/Item";
import { useState, useEffect } from "react";

export default function ItemView() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState("");
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getItemById(id);
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setItem(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (item.name === formData) {
      const data = await deleteItem(id);
      if (data.status === 200) {
        alert("Produkt byl úspěšně smazán!");
        navigate("/");
      } else {
        setInfo(data.message);
      }
    } else {
      setInfo("Zadej přesný název produktu pro potvrzení smazání.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-red-600 text-lg">Auto nebylo nalezeno</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-gray-600 text-lg">Načítání auta...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Detail produktu</h1>

        <div className="space-y-2 mb-6">
          <p><span className="font-semibold">ID:</span> {id}</p>
          <p><span className="font-semibold">Název:</span> {item.name}</p>
          <p><span className="font-semibold">Značka:</span> {item.brand}</p>
          <p><span className="font-semibold">Barva:</span> {item.color}</p>
          <p><span className="font-semibold">Cena:</span> {item.price} Kč</p>
          <p><span className="font-semibold">Image:</span> {item.image}</p>
        </div>

        <form className="space-y-4" onSubmit={handleDelete}>
          <input
            type="text"
            required
            placeholder={`${item.name}`}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-500">
            Smazat item
          </button>
        </form>

        {info && <p className="mt-4 text-red-600">{info}</p>}

        <div className="flex justify-between mt-6 text-sm text-blue-500">
          <Link to={`/update-item/${id}`} className="hover:underline">
            ✏️ Aktualizovat item
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin panel
          </Link>
        </div>
      </div>
    </div>
  );
}
