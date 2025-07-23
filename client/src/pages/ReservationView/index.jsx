import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteReservation, getReservationById } from "../../models/Reservation";
import { useState, useEffect } from "react";

export default function ReservationView() {
  const { id } = useParams();
  const [reservation, setReservation] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState("");
  const [confirmationText, setConfirmationText] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    try {
      const data = await getReservationById(id);

      if (data.status === 404) {
        setLoaded(null);
      } else if (data.status === 200) {
        setReservation(data.payload);
        setLoaded(true);
      } else {
        setLoaded(null);
        console.error("Neznámá chyba při načítání rezervace:", data);
      }
    } catch (err) {
      console.error("Chyba při načítání rezervace:", err);
      setLoaded(null);
    }
  };

  const handleChange = (e) => {
    setConfirmationText(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (reservation.name === confirmationText) {
      const data = await deleteReservation(id);
      if (data.status === 200) {
        alert("Rezervace byla úspěšně smazána!");
        navigate("/");
      } else {
        setInfo(data.message || "Chyba při mazání.");
      }
    } else {
      setInfo("Zadej přesné jméno rezervace pro potvrzení smazání.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <p className="text-red-600 text-lg">Rezervace nebyla nalezena nebo nastala chyba.</p>
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
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Detail rezervace</h1>

        <div className="space-y-2 mb-6">
          <p><span className="font-semibold">ID:</span> {id}</p>
          <p><span className="font-semibold">Jméno:</span> {reservation.name}</p>
          <p><span className="font-semibold">Email:</span> {reservation.email}</p>
          <p><span className="font-semibold">Datum:</span> {reservation.date?.slice(0, 10)}</p>
          <p><span className="font-semibold">Čas:</span> {reservation.time}</p>
          <p><span className="font-semibold">Poznámka:</span> {reservation.note}</p>
        </div>

        <form className="space-y-4" onSubmit={handleDelete}>
          <input
            type="text"
            required
            placeholder={`Zadej jméno: ${reservation.name}`}
            onChange={handleChange}
            value={confirmationText}
            className="w-full border p-3 rounded-md"
          />
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-500">
            Smazat rezervaci
          </button>
        </form>

        {info && <p className="mt-4 text-red-600">{info}</p>}

        <div className="flex justify-between mt-6 text-sm text-blue-500">
          <Link to={`/update-reservation/${id}`} className="hover:underline">
             Aktualizovat rezervaci
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin panel
          </Link>
        </div>
      </div>
    </div>
  );
}
