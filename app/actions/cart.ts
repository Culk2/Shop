'use server'

import { addToCart } from '@/lib/cart'
import { revalidatePath } from 'next/cache'

export async function addToCartAction(formData: FormData) {
  const rawProduct = formData.get('product')
  if (!rawProduct) return

  const product = JSON.parse(rawProduct as string)

  await addToCart(product)
  revalidatePath('/cart')
  revalidatePath('/shop')
}