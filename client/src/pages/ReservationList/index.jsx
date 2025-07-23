import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllReservation } from "../../models/Reservation";
import ReservationLink from "./ReservationLink";

export default function ReservationList() {
  const [reservations, setReservations] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllReservation();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setReservations(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return <p className="text-center text-red-600 mt-10">Rezervace nenalezena</p>;
  }

  if (!isLoaded) {
    return <p className="text-center mt-10">Načítání...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Seznam rezervací</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 px-4">
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow max-w-xl w-full mx-auto"
          >
            <ReservationLink {...reservation} />
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
