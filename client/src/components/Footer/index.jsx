import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Toaster, toast } from "sonner";

export default function Footer() {
  
  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Díky za přihlášení k newsletteru!");
    e.target.reset();
  }

  return (
    <footer className="bg-zinc-900 text-gray-300 py-12 px-6 md:px-20">
      
      <Toaster position="bottom-right" richColors />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Marvel Gym</h3>
          <p className="text-sm leading-relaxed">
            Moderní posilovna a fitness centrum. Rezervuj si trenéra a vybav se
            v našem e-shopu.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/marvelgym11?locale=cs_CZ"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-400 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/marvel_gym?igsh=NHQ1cmh6YzZxank1"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-400 transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@marvelgym"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="hover:text-yellow-400 transition"
            >
              <SiTiktok size={24} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Rychlé odkazy</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/treneri" className="hover:text-yellow-400 transition">
                Rezervace trenérů
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-400 transition">
                E-shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                O nás
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Informace</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/cas" className="hover:text-yellow-400 transition">
                Otevírací doba
              </a>
            </li>
            <li>
              <a href="/mista" className="hover:text-yellow-400 transition">
                Kde se nacházíme
              </a>
            </li>
            <li>
              <a href="/Doprava" className="hover:text-yellow-400 transition">
                Doprava
              </a>
            </li>
            <li>
              <a href="/Pratele" className="hover:text-yellow-400 transition">
                Přátelé
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <MapPin size={20} />
              <span>Praha 1, Česká republika</span>
            </li>
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <Phone size={20} />
              <a href="tel:+420123456789" className="hover:text-yellow-400 transition">
                +420 123 456 789
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <Mail size={20} />
              <a href="mailto:info@marvelgym.cz" className="hover:text-yellow-400 transition">
                info@marvelgym.cz
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-6 max-w-xs">
            Přihlas se k odběru novinek a získej speciální nabídky.
          </p>
          <form
            className="flex flex-col md:flex-row items-center md:items-stretch gap-3 w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Tvůj e-mail"
className="w-full md:w-[230px] rounded-full bg-zinc-800 border border-gray-700 px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition -ml-[28px]"

              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black text-sm font-semibold rounded-full px-5 py-2 hover:bg-yellow-500 transition-shadow shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Přihlásit se
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-xs text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Marvel Gym. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
