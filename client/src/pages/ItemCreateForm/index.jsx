import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createItem } from "../../models/Item";
import React from 'react';

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Vytvoření produktu</h1>
        <form className="space-y-4">
          <input type="text" name="name" required placeholder="Name" onChange={handleChange} className="w-full border p-3 rounded-md" />
          <input type="text" name="brand" required placeholder="Brand" onChange={handleChange} className="w-full border p-3 rounded-md" />
          <input type="text" name="color" required placeholder="Color" onChange={handleChange} className="w-full border p-3 rounded-md" />
          <input type="number" name="price" required placeholder="Price" onChange={handleChange} className="w-full border p-3 rounded-md" />
          <input type="text" name="image" required placeholder="Enter image URL" onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <button onClick={handlePost} className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500">
            Přidat produkt
          </button>
        </form>
        {info && <p className="mt-4 text-red-600">{info}</p>}
        <Link to="/admin" className="block mt-6 text-blue-500 hover:underline">Admin panel</Link>
      </div>
    </div>
  );
}
