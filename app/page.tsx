'use client';

import Link from 'next/link';
import { useState } from 'react';

// Preproste SVG-ikone (namesto lucide-react)
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

export default function ShopPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Naša ponudba</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Odkrijte širok izbor oblačil za moške, ženske in otroke. Kakovost in stil na enem mestu.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">

        {/* Gornja vrstica – iskanje + gumb za filtre */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Mobilni gumb za filtre */}
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow hover:shadow-md transition"
            >
              <FilterIcon /> Filtri
            </button>

            {/* Iskalno polje */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Poišči oblačilo..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Desktop gumb za filtre */}
          <button
            onClick={() => setShowFilters(true)}
            className="hidden lg:flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow hover:shadow-md transition"
          >
            <FilterIcon /> Filtri
          </button>
        </div>

        {/* Glavni del – placeholder za izdelke */}
        <div className="text-center py-20">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
            <p className="text-2xl text-gray-500">Izdelki se bodo prikazali tukaj</p>
          </div>
          <p className="mt-6 text-gray-600">
            Uporabite iskalno vrstico ali filtre, da poiščete želene izdelke.
          </p>
        </div>

        {/* Mobilni filtri (popup) */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center lg:hidden">
            <aside className="bg-white w-full max-w-md p-6 rounded-t-xl animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FilterIcon /> Filtri
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Primer filtrov – lahko jih razširiš kasneje */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Kategorija</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Vsi</option>
                    <option>Moški</option>
                    <option>Ženske</option>
                    <option>Otroci</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cena</label>
                  <input type="range" min="0" max="200" className="w-full" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0 €</span>
                    <span>200 €</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                Uporabi filtre
              </button>
            </aside>
          </div>
        )}

      </div>
    </div>
  );
}