import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getReservationById } from "../../models/Reservation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Toaster, toast } from "sonner";

export default function MainView() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const load = async () => {
    try {
      const data = await getReservationById(id);
      if (!data || data.status === 500 || data.status === 404) {
        setLoaded(null);
        return;
      }
      if (data.status === 200) {
        setItem(data.payload);
        setLoaded(true);
      }
    } catch (error) {
      console.error("Chyba při načítání rezervace:", error);
      setLoaded(null);
      toast.error("Došlo k chybě při načítání rezervace.");
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 2); 
    return today.toISOString().split("T")[0]; 
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime || !fullName.trim() || !phone.trim()) {
      toast.error("Vyplňte prosím všechny požadované údaje: datum, čas, jméno a telefon.");
      return;
    }

    const hour = parseInt(selectedTime.split(":")[0], 10);
    if (hour < 8 || hour >= 21) {
      toast.error("Čas rezervace musí být mezi 08:00 a 20:59.");
      return;
    }

    toast.success("Rezervace byla úspěšně potvrzena!");
  };

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-black">
        <p>Rezervace nenalezena.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-black">
        <p>Načítání rezervace...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white relative">
      <Header />
      <Toaster position="bottom-right" richColors />

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        <div className="flex flex-col items-center">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-2xl w-full max-w-md shadow-2xl object-cover mt-8"
            draggable="false"
          />
          <p className="text-sm text-gray-400 mt-4 text-center max-w-md">
Trenéři vidí váš zájem o rezervaci v daném čase, proto se vám do dvou dnů ozvou na telefonní číslo, které jste zadali, a zkonzultují s vámi čas, cenu a vaše požadavky. Sdělte jim, co si přejete, aby pro vás trenér zařídil. Těšíme se na vás!          </p>
        </div>

        <div className="flex flex-col justify-start gap-6">
          <h1 className="text-5xl font-bold uppercase mt-0 text-yellow-400">
            {item.name}
          </h1>

          <p className="text-lg text-white font-semibold">
            Naši trenéři jsou ti nejlepší – díky odbornosti, individuálnímu
            přístupu a motivaci vás dovedou k vašim cílům rychle a efektivně.
            Jsou tu, aby vás podpořili na cestě ke zdraví, síle a sebevědomí.
          </p>

          <div>
            <label htmlFor="fullname" className="block text-sm font-semibold mb-2">
              Jméno a příjmení:
            </label>
            <input
              type="text"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Zadejte své jméno a příjmení"
              className="bg-zinc-900 border border-white rounded-full px-4 py-2 text-white w-full hover:border-gray-400 focus:outline-none shadow-sm transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Telefonní číslo:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+420 123 456 789"
              className="bg-zinc-900 border border-white rounded-full px-4 py-2 text-white w-full hover:border-gray-400 focus:outline-none shadow-sm transition"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-semibold mb-2">
              Vyber datum:
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={getMinDate()}
              className="bg-zinc-900 border border-white rounded-full px-4 py-2 text-white w-full hover:border-gray-400 focus:outline-none shadow-sm transition"
            />
            <p className="text-xs text-gray-400 mt-1">
              * Rezervace je možná nejdříve 2 dny dopředu
            </p>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-semibold mb-2">
              Vyber čas:
            </label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="bg-zinc-900 border border-yellow rounded-full px-4 py-2 text-white w-full hover:border-gray-400 focus:outline-none shadow-sm transition"
            />
            <p className="text-xs text-gray-400 mt-1">
              * Povolený čas: 08:00 – 20:59
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <button
              onClick={handleConfirm}
              className="bg-yellow-400 text-black font-bold py-3 rounded-xl transition-all"
            >
              Potvrdit Rezervaci
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
