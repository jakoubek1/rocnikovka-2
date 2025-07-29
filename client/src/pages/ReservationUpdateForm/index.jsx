import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateReservation, getReservationById } from "../../models/Reservation";
import Background from "../../assets/pozadi.jpg";

export default function ReservationUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getReservationById(id);
    if (data.status === 404 || data.status === 500) {
      setLoaded(null);
      return;
    }
    if (data.status === 200) {
      setFormData(data.payload);
      setLoaded(true);
    }
  };

  const updateForm = async () => {
    const data = await updateReservation(id, formData);
    if (data.status === 200) return navigate(`/res/${id}`);
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
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-red-600 px-4">
        <p className="text-lg">Rezervace nebyla nalezena</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-yellow-400 px-4">
        <p className="text-lg">Načítání rezervace...</p>
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
          Úprava rezervace
        </h1>
        <form className="space-y-4" onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            required
            placeholder="Jméno"
            onChange={handleChange}
            value={formData.name || ""}
            className="w-full p-3 rounded-md bg-zinc-800 text-yellow-300 border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
            value={formData.email || ""}
            className="w-full p-3 rounded-md bg-zinc-800 text-yellow-300 border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Telefon"
            onChange={handleChange}
            value={formData.phone || ""}
            className="w-full p-3 rounded-md bg-zinc-800 text-yellow-300 border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200"
          />
          <input
            type="number"
            name="people"
            required
            placeholder="Počet osob"
            onChange={handleChange}
            value={formData.people || ""}
            min="1"
            className="w-full p-3 rounded-md bg-zinc-800 text-yellow-300 border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200"
          />
          <input
            type="text"
            name="image"
            required
            placeholder="URL obrázku"
            onChange={handleChange}
            value={formData.image || ""}
            className="w-full p-3 rounded-md bg-zinc-800 text-yellow-300 border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200"
          />
          <textarea
            name="notes"
            placeholder="Poznámky (volitelné)"
            onChange={handleChange}
            value={formData.notes || ""}
            className="w-full p-3 rounded-md bg-zinc-800 text-yellow-300 border-2 border-yellow-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-200"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Uložit změny
          </button>
        </form>

        {info && <p className="mt-4 text-red-500">{info}</p>}

        <Link to="/admin" className="block mt-6 text-yellow-400 hover:underline">
          Admin panel
        </Link>
      </div>
    </div>
  );
}
