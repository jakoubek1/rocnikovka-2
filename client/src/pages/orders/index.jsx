import React, { useEffect, useState } from "react";
import Background from "../../assets/pozadi.jpg";
import NameQuantity from "./NameQuantity";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Chyba při načítání objednávek:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center mt-10">Načítání objednávek...</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
        Seznam objednávek
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md border border-yellow-300">
          <thead className="bg-yellow-100">
            <tr>
              <th className="py-2 px-4 border">Zákazník</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Položky</th>
              <th className="py-2 px-4 border">Celkem</th>
              <th className="py-2 px-4 border">Stav</th>
              <th className="py-2 px-4 border">Datum</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="text-sm text-gray-800">
                <td className="py-2 px-4 border">{order.customerName}</td>
                <td className="py-2 px-4 border">{order.email}</td>
                <td className="py-2 px-4 border">
                  {order.items.map((item, idx) => {
                    return <NameQuantity key={idx} {...item} />;
                  })}
                </td>
                <td className="py-2 px-4 border">{order.total} Kč</td>
                <td className="py-2 px-4 border">{order.status}</td>
                <td className="py-2 px-4 border">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
