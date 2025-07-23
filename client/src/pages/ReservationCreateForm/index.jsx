import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createReservation } from "../../models/Reservation";
import React from "react";

export default function ReservationCreateForm() {
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const postForm = async () => {
    const reservation = await createReservation(formData);
    if (reservation.status === 201) return navigate("/view-reservation");
    setInfo(reservation.message);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Vytvoření rezervace</h1>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Jméno"
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Telefon"
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
          
          
          <input
            type="number"
            name="people"
            required
            placeholder="Počet osob"
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            min="1"
          />
           <input type="text" name="image" required placeholder="Enter image URL" onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <textarea
            name="notes"
            placeholder="Poznámky (volitelné)"
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />
          <button
            onClick={handlePost}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500"
          >
            Přidat rezervaci
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
