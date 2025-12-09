// lib/getProducts.ts   ← NOVO IME DATOTEKE, ČISTO NA NOVO
import { client } from "../sanity/lib/client";

export async function getProducts() {
  return await client.fetch(`*[_type == "product"] {
    _id,
    name,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`);
}