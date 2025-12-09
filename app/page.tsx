// app/page.tsx (ali app/shop/page.tsx)
import { getProducts } from "@/lib/getProducts";
import { addToCartAction } from './actions/cart';
import ProductCard from './components/ProductCard'; // nova client komponenta

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
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}