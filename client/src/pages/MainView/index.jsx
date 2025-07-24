import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItemById } from "../../models/Item";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Toaster, toast } from "sonner";

export default function MainView() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getItemById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setItem(data.payload);
      setLoaded(true);
    }
  };

  const addToCart = () => {
    if (!selectedSize) return toast.error("Zvolte nejdříve velikost");

    const newCartItem = {
      id: item._id,
      count: 1,
      size: selectedSize,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.id === newCartItem.id && cartItem.size === selectedSize
    );

    if (itemIndex !== -1) {
      cart[itemIndex].count += 1;
    } else {
      cart.push(newCartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Položka byla přidána do košíku!");
  };

  useEffect(() => {
    load();
  }, [id]);

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-black">
        <p>Produkt nenalezen.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-black">
        <p>Načítání produktu...</p>
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white relative">
      <Header />

      <Toaster position="bottom-right" richColors />

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        <div className="flex flex-col items-center mt-12">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-2xl w-full max-w-md shadow-2xl object-cover"
            draggable="false"
            style={{ imageRendering: "auto" }}
          />
          <p className="text-sm text-gray-400 mt-4 text-center max-w-md">
            Oversized střih. 100% bavlna. Inspirace pouliční kulturou.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold uppercase mt-1 flex items-center gap-4">
            {item.name}
            <span className="bg-yellow-400 text-black text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg select-none">
              Nová kolekce
            </span>
          </h1>

          <div className="text-lg space-y-2">
            <div className="flex items-center gap-2 text-yellow-400 text-sm">
              ⭐⭐⭐⭐⭐ <span className="text-gray-400">(48 recenzí)</span>
            </div>
            <p>
              <span className="font-semibold">Cena: </span>
              <span className="line-through text-gray-500 mr-2">
                {Math.floor(item.price * 1.5)} Kč
              </span>
              <span className="font-bold text-white">{item.price} Kč</span>
              <span className="bg-white text-black text-sm font-bold px-3 py-1 rounded-full ml-2">
                -33%
              </span>
            </p>
          </div>

          <div>
            <label htmlFor="size" className="block text-sm font-semibold mb-2">
              Velikost:
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-zinc-900 border border-white rounded-full px-4 py-2 text-white w-full hover:border-gray-400 focus:outline-none shadow-sm transition"
            >
              <option value="" disabled>
                Zvol velikost
              </option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <button
              className="bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-300 transition-all"
              onClick={addToCart}
            >
              Přidat do košíku
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
