import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Shirt, Home } from "lucide-react";

export default function Admin() {
  const panels = [
    {
      to: "/add-item",
      icon: <ShoppingBag className="h-6 w-6 text-green-600" />,
      title: "Vytvořit produkt",
      color: "from-green-100 to-green-50",
    },
    {
      to: "/view-item",
      icon: <Shirt className="h-6 w-6 text-yellow-600" />,
      title: "Zobrazit produkty",
      color: "from-yellow-100 to-yellow-50",
    },
    {
      to: "/",
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "Main Page",
      color: "from-blue-100 to-blue-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {panels.map((panel, index) => (
          <Link to={panel.to} key={index} className="group">
            <div className={`bg-gradient-to-br ${panel.color} p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:rotate-6 transition-transform">
                  {panel.icon}
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{panel.title}</p>
                  <p className="text-sm text-gray-500 group-hover:underline">Přejít do {panel.title}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
