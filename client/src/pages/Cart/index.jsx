import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import CartItem from "./item";
import Image from "../../assets/pozadi.jpg";
import { getItemById } from "@/models/Item";

export default function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const cartReload = () => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  useEffect(() => {
    window.addEventListener("cartReload", cartReload);
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = async () => {
      let total = 0;

      for (const cartItem of cart) {
        const data = await getItemById(cartItem.id);
        if (data.status === 200) {
          const item = data.payload;
          total += item.price * cartItem.count;
        }
      }

      setTotalPrice(total);
    };

    calculateTotal();
  }, [cart]);

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center w-full pt-4 relative"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="container mx-auto h-full">
          {cart && cart.length > 0 ? (
            <>
              {cart.map((value, index) => (
                <CartItem
                  key={`${value.id}-${index}`}
                  index={index}
                  {...value}
                />
              ))}
              <div className="flex justify-between">
                <p className="text-white text-2xl">Celková cena: {totalPrice},-</p>
                <button className="bg-yellow-400 text-black font-bold py-3 rounded-xl transition-all px-4">
                  Pokračovat
                </button>
              </div>
            </>
          ) : (
            <div className="h-full text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-md leading-tight text-center py-4">
              Nemáte nic v košíku
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
