import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteItem, getItemById } from "../../models/Item";
import { useState, useEffect } from "react";
import Background from "../../assets/pozadi.jpg";

export default function ItemView() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState("");
  const [confirmName, setConfirmName] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getItemById(id);
    if (data.status === 404 || data.status === 500) {
      setLoaded(null);
      return;
    }
    if (data.status === 200) {
      console.log("Načtený item:", data.payload);  
      setItem(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setConfirmName(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (item.name === confirmName) {
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
  }, [id]);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-red-600 px-4">
        <p className="text-lg">Produkt nebyl nalezen.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-yellow-400 px-4">
        <p className="text-lg">Načítání produktu...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-zinc-900 bg-opacity-90 p-8 rounded-2xl shadow-md w-full max-w-xl border border-yellow-400 text-yellow-200">
        <h1 className="text-2xl font-semibold mb-6 text-yellow-400">Detail produktu</h1>

        <div className="space-y-2 mb-6 text-sm">
          <p><span className="font-semibold text-yellow-300">ID:</span> {id}</p>
          <p><span className="font-semibold text-yellow-300">Název:</span> {item.name}</p>
          <p><span className="font-semibold text-yellow-300">Značka:</span> {item.brand}</p>
          <p><span className="font-semibold text-yellow-300">Barva:</span> {item.color}</p>
          <p><span className="font-semibold text-yellow-300">Cena:</span> {item.price} Kč</p>
          <p><span className="font-semibold text-yellow-300">Obrázek:</span> {item.image}</p>
          <p><span className="font-semibold text-yellow-300">Množství na skladě:</span> {item.stockQuantity ?? "Není dostupné"}</p>
        </div>

        <form className="space-y-4" onSubmit={handleDelete}>
          <input
            type="text"
            required
            placeholder={`Pro potvrzení napiš přesný název produktu: ${item.name}`}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-zinc-800 text-yellow-300 border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200"
          />
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-500">
            Smazat produkt
          </button>
        </form>

        {info && <p className="mt-4 text-red-500">{info}</p>}

        <div className="flex justify-between mt-6 text-sm text-yellow-400">
          <Link to={`/update-item/${id}`} className="hover:underline">
            Aktualizovat produkt
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin panel
          </Link>
        </div>
      </div>
    </div>
  );
}
