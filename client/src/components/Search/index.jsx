import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

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
        .catch(() => {
          setSearchResults([]);
        });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearchSelect = (result) => {
    setSearchOpen(false);
    setSearchTerm("");
    setSearchResults([]);

    if (result.type === "item") {
      navigate(`/product/${result._id}`);
    } else if (result.type === "reservation") {
      navigate(`/rezervace/${result._id}`);
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        aria-label="Otevřít vyhledávání"
        onClick={() => setSearchOpen((open) => !open)}
        className={`p-2 rounded-md transition hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
          searchOpen ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        <SearchIcon size={20} />
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
  );
}
