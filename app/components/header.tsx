'use client';

import Link from 'next/link';
import { ShoppingBag, Search } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const cartCount = 3;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="OblačilaShop logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="flex items-center gap-10">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition">
              Domov
            </Link>
            <Link href="/shop?category=moški" className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition">
              Moški
            </Link>
            <Link href="/shop?category=ženske" className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition">
              Ženske
            </Link>
            <Link href="/shop?category=otroci" className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition">
              Otroci
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Poišči oblačilo..."
                className="w-80 pl-12 pr-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
              />
              <Search className="absolute left-4 top-3.5 w-6 h-6 text-gray-400" />
            </div>

            <Link href="/cart" className="relative">
              <ShoppingBag className="w-8 h-8 text-gray-700 hover:text-indigo-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}