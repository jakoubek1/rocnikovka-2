import { getItemById } from "@/models/Item";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Toaster, toast } from "sonner";

export default function CartItem(props) {
  useEffect(() => {
    load();
  }, []);

  const [item, setItem] = useState();

  const load = async () => {
    const data = await getItemById(props.id);

    if (data.status === 200) setItem(data.payload);
    
  };

  const removeItemFromCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(props.index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Položka byla odebrána z košíku.");
    window.dispatchEvent(new Event("cartReload"));
  };

  return (
    <>
      <div className="bg-zinc-900 text-white p-5 rounded-2xl border-2 border-yellow-400 mb-4">
        {item ? (
          <div className="flex items-center gap-4 relative">
            <Link to={`/product/${props.id}`}>
              <img
                className="h-24 rounded-[4px]"
                src={item.image}
                draggable={false}
              />
            </Link>
            <div>
              <p className="text-xl">{item.name}</p>
              <p>{item.price},-</p>
              <p>Velikost: {props.size}</p>
              <p>{props.count}x</p>
            </div>
            <X className="absolute top-0 right-0 cursor-pointer" onClick={removeItemFromCart} />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <svg
              className="mr-3 -ml-1 size-12 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
