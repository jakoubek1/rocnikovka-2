import { PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm({ totalPrice }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      const response = await fetch("http://localhost:3000/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: customerName || "Neuvedeno",
          email: customerEmail || "neuvedeno@example.com",
          items: cartItems.map((item) => ({
            id: item.id,
            count: item.count,
            size: item.size,
          })),
          total: totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Nepodařilo se uložit objednávku");
      }
    } catch (err) {
      setMessage("Chyba při ukládání objednávky: " + err.message);
      setIsProcessing(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else if (error) {
      setMessage("Neočekávaná chyba při platbě.");
    }

    setIsProcessing(false);

  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-yellow-50 rounded-xl mt-12 shadow-lg"
    >
      <div className="flex flex-col mb-3">
        <label className="stripe_label" htmlFor="customer-name">
          Jméno
        </label>
        <input
          className="stripe_input"
          type="text"
          id="customer-name"
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label className="stripe_label" htmlFor="customer-email">
          E-mail
        </label>
        <input
          className="stripe_input"
          type="email"
          id="customer-email"
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
      </div>
      <PaymentElement id="payment-element" />
      {message && <div className="text-red-600 mt-4">{message}</div>}
      <div className="flex justify-between items-center mt-6">
        <p className="text-black text-2xl font-semibold">
          Celková cena: {totalPrice},- Kč
        </p>
        <button
          className="bg-yellow-400 text-black font-bold py-3 rounded-xl transition-all px-4"
          disabled={isProcessing || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isProcessing ? "Zpracovává se..." : "Zaplatit"}
          </span>
        </button>
      </div>
    </form>
  );
}
