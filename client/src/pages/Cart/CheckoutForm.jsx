import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error")
      setMessage(error.message);
    else setMessage("An unexpected error occured.");

    setIsProcessing(false);
  };
  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        {message && <div className="text-white mt-4">{message}</div>}
        <div className="flex justify-between items-center">
          <p className="text-white text-2xl">
            Celková cena: {props.totalPrice},-
          </p>
          <button
            className="bg-yellow-400 text-black font-bold py-3 rounded-xl transition-all px-4 mt-4"
            disabled={isProcessing || !stripe || !elements}
            id="submit"
          >
            <span id="button-text">
              {isProcessing ? "Zpracovává se... " : "Zaplatit"}
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
