// app/cart/page.tsx
import { getCart } from '@/lib/cart'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { urlFor } from '@/sanity/lib/image'

export default async function CartPage() {
  const cart = await getCart()

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Tvoja košarica</h1>

      <SignedIn>
        {cart?.items?.length ? (
          <div>
            {cart.items.map((item: any) => (
              <div key={item._key} className="flex gap-4 border-b py-4">
                <img src={urlFor(item.image).width(100).url()} alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.quantity} × {item.price} €</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Košarica je prazna</p>
        )}
      </SignedIn>

      <SignedOut>
        <p>Prijavi se, da vidiš svojo shranjeno košarico!</p>
      </SignedOut>
    </div>
  )
}