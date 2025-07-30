import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createItem } from "../../models/Item";
import React from "react";
import Background from "../../assets/pozadi.jpg";

export default function CarCreateForm() {
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const postForm = async () => {
    const car = await createItem(formData);
    if (car.status === 201) return navigate("/view-item");
    setInfo(car.message);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    setFormData({ 
      ...formData, 
      [name]: type === "number" ? Number(value) : value 
    });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const inputClass = `
    w-full 
    border-2 
    border-yellow-700 
    focus:border-yellow-400 
    focus:ring-2 
    focus:ring-yellow-300 
    focus:outline-none 
    transition 
    duration-200 
    p-3 
    rounded-md
    bg-zinc-900 
    text-yellow-400
  `;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-zinc-900 bg-opacity-90 p-8 rounded-2xl shadow-md w-full max-w-xl border border-yellow-400">
        <h1 className="text-2xl font-semibold mb-6 text-yellow-400">
          Vytvoření produktu
        </h1>

        <form onSubmit={handlePost} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="brand"
            required
            placeholder="Brand"
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="color"
            required
            placeholder="Color"
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="number"
            name="price"
            required
            placeholder="Price"
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="image"
            required
            placeholder="Enter image URL"
            onChange={handleChange}
            className={inputClass}
          />
          
          <input
            type="number"
            name="stockQuantity"
            required
            placeholder="Množství na skladě"
            min="0"
            onChange={handleChange}
            className={inputClass}
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Přidat produkt
          </button>
        </form>

        {info && <p className="mt-4 text-red-600">{info}</p>}

        <Link to="/admin" className="block mt-6 text-yellow-400 hover:underline">
           Zpět do admin panelu
        </Link>
      </div>
    </div>
  );
}
