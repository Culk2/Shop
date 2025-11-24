// app/lib/cart.ts
import { createClient } from '@sanity/client'
import { currentUser } from '@clerk/nextjs/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // za pisanje mora biti false
  token: process.env.SANITY_WRITE_TOKEN, // dodaj ta token v Vercel (read+write)
})

// Dodaj/posodobi izdelek v košarici (server action)
export async function addToCart(product: any, quantity = 1) {
  const user = await currentUser()
  if (!user) {
    // Neprijavljen → uporabi localStorage (kasneje)
    return false
  }

  const cartDoc = {
    _type: 'cart',
    userId: user.id,
    items: [
      {
        _key: product._id,
        productId: product._id,
        slug: product.slug.current,
        name: product.name,
        price: product.price,
        quantity,
        image: product.mainImage,
      },
    ],
  }

  // Če košarica že obstaja → patch, sicer createIfNotExists
  await client
    .patch(user.id)
    .setIfMissing({ items: [] })
    .append('items', cartDoc.items)
    .commit()

  return true
}

// Pridobi košarico za trenutnega uporabnika
export async function getCart() {
  const user = await currentUser()
  if (!user) return null

  const cart = await client.getDocument(user.id)
  return cart || { items: [] }
}