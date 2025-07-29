import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllReservation } from "../../models/Reservation";
import ReservationLink from "./ReservationLink";
import Background from "../../assets/pozadi.jpg";

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
    return (
      <p className="text-center text-red-600 mt-10">
        Rezervace nenalezena
      </p>
    );
  }

  if (!isLoaded) {
    return (
      <p className="text-center text-yellow-400 mt-10">
        Načítání rezervací...
      </p>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Seznam rezervací
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className="bg-zinc-900 bg-opacity-90 border border-yellow-500 text-yellow-200 p-4 rounded-xl shadow-md hover:shadow-yellow-400 transition-shadow"
          >
            <ReservationLink {...reservation} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/admin" className="text-yellow-400 hover:underline text-lg">
          Admin panel
        </Link>
      </div>
    </div>
  );
}
