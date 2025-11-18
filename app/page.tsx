import { getProducts } from "@/lib/getProducts";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
  description?: string;
}

export default async function HomePage() {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Naši izdelki</h1>
          <p className="text-lg text-gray-600">Trenutno ni na voljo nobenega izdelka.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
          Naši izdelki
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product: Product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              {/* Slika z navadnim <img> – deluje brez next.config.js */}
              {product.imageUrl ? (
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={`${product.imageUrl}?w=800&h=800&fit=crop&auto=format`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy" // dodan lazy loading za boljšo učinkovitost
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full aspect-square flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">Brez slike</span>
                </div>
              )}

              {/* Vsebina kartice */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h2>

                {product.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4">
                  <span className="text-3xl font-bold text-indigo-600">
                    {product.price.toFixed(2)} €
                  </span>

                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm">
                    V košarico
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}