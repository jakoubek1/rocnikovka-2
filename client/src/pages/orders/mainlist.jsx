import React, { useEffect, useState } from "react";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/order")
      .then((res) => {
        if (!res.ok) throw new Error("Chyba při načítání objednávek");
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Načítám objednávky...</p>;
  if (error) return <p>Chyba: {error}</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-yellow-50 rounded-xl shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-6 text-yellow-700">Objednávky</h1>
      {orders.length === 0 ? (
        <p>Žádné objednávky.</p>
      ) : (
        <table className="w-full border-collapse border border-yellow-300">
          <thead>
            <tr>
              <th className="border border-yellow-300 p-2">Jméno zákazníka</th>
              <th className="border border-yellow-300 p-2">Email</th>
              <th className="border border-yellow-300 p-2">Položky</th>
              <th className="border border-yellow-300 p-2">Celková cena</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border border-yellow-300 p-2">{order.customerName}</td>
                <td className="border border-yellow-300 p-2">{order.email}</td>
                <td className="border border-yellow-300 p-2">
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      {item.name} x {item.quantity} (Cena: {item.price} Kč)
                    </div>
                  ))}
                </td>
                <td className="border border-yellow-300 p-2">{order.total} Kč</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
