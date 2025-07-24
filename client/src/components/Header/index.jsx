import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import logo from "../../assets/logo.png";  

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "O nás", to: "/About" },
    { name: "Rezervace trenéra", to: "/rezervace" },
    { name: "E-shop", to: "/products" },
  ];

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      fetch(`/search?q=${encodeURIComponent(searchTerm)}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.payload || []);
        })
        .catch((err) => {
          console.error("Search error:", err);
          setSearchResults([]);
        });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearchSelect = (result) => {
    setSearchOpen(false);
    setSearchTerm("");
    setSearchResults([]);

    if (result.type === "item") {
      navigate(`/item/${result._id}`);
    } else if (result.type === "reservation") {
      navigate(`/reservation/${result._id}`);
    }
  };

  return (
    <header className="relative bg-zinc-900 text-gray-300 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 flex-none">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="hidden md:block text-3xl font-extrabold text-white select-none">
            Marvel Gym
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-10 font-medium text-lg">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="relative group px-3 py-1 rounded-md hover:text-yellow-400 transition"
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4 justify-end w-full md:w-auto">
          <div className="flex items-center relative">
            <button
              aria-label="Otevřít vyhledávání"
              onClick={() => setSearchOpen((p) => !p)}
              className={`p-2 rounded-md transition hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                searchOpen ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              <Search className="h-7 w-7" />
            </button>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Hledat…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`bg-zinc-800 placeholder-gray-400 text-gray-100 rounded-md outline-none transition-all duration-300 ease-out
                ${
                  searchOpen
                    ? "w-44 px-3 py-1 opacity-100 ml-2"
                    : "w-0 px-0 py-0 opacity-0 overflow-hidden"
                }
              `}
              onKeyDown={(e) => {
                if (e.key === "Escape") setSearchOpen(false);
              }}
            />
            {searchOpen && searchResults.length > 0 && (
              <ul className="absolute top-full mt-1 left-0 w-56 max-h-60 overflow-auto bg-zinc-800 border border-yellow-400 rounded-md z-50">
                {searchResults.map((result) => (
                  <li
                    key={result._id}
                    onClick={() => handleSearchSelect(result)}
                    className="cursor-pointer px-4 py-2 hover:bg-yellow-400 hover:text-zinc-900 transition"
                  >
                    {result.name} <small>({result.type})</small>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative p-2 rounded-md text-gray-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          >
            <ShoppingCart className="h-7 w-7" />
          </Link>

          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-300 hover:bg-yellow-400 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-zinc-900 text-gray-300 shadow-md overflow-hidden transition-max-height duration-300 ease-in-out ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-3 px-6">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 font-semibold text-lg rounded-md px-3 py-2 hover:text-yellow-400 transition"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
