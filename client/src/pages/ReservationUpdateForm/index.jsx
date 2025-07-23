import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateReservation, getReservationById } from "../../models/Reservation";

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-red-600 text-lg">Rezervace nebyla nalezena</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-gray-600 text-lg">Načítání rezervace...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
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
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
            value={formData.email || ""}
            className="w-full border p-3 rounded-md"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Telefon"
            onChange={handleChange}
            value={formData.phone || ""}
            className="w-full border p-3 rounded-md"
          />
          <input
            type="number"
            name="people"
            required
            placeholder="Počet osob"
            onChange={handleChange}
            value={formData.people || ""}
            min="1"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            name="image"
            required
            placeholder="Enter image URL"
            onChange={handleChange}
            value={formData.image || ""}
            className="p-3 border rounded-lg w-full"
          />
          <textarea
            name="notes"
            placeholder="Poznámky (volitelné)"
            onChange={handleChange}
            value={formData.notes || ""}
            className="w-full border p-3 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500"
          >
            Uložit změny
          </button>
        </form>

        {info && <p className="mt-4 text-red-600">{info}</p>}

        <Link to="/admin" className="block mt-6 text-blue-500 hover:underline">
          Admin panel
        </Link>
      </div>
    </div>
  );
}
