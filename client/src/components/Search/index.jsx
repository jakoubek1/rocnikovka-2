import React, { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch(`/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Chyba při vyhledávání');
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Vyhledat trenéra nebo produkt..."
          className="border px-3 py-2 rounded w-full max-w-md"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500">
          Hledat
        </button>
      </form>

      {loading && <p>Načítám...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {results && (
        <>
          <h3>Trenéři (Rezervace):</h3>
          {results.reservations.length === 0 && <p>Žádní trenéři nebyli nalezeni.</p>}
          <ul>
            {results.reservations.map(trener => (
              <li key={trener._id}>
                <strong>{trener.name}</strong> – {trener.notes || 'Bez poznámky'}
              </li>
            ))}
          </ul>

          <h3>Produkty:</h3>
          {results.items.length === 0 && <p>Žádné produkty nebyly nalezeny.</p>}
          <ul>
            {results.items.map(item => (
              <li key={item._id}>
                <strong>{item.name}</strong> – {item.brand} – {item.price} Kč
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
