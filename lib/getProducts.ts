import { client } from "../sanity/lib/client";
import { allProductsQuery } from "./queries";

export async function getProducts() {
  const products = await client.fetch(allProductsQuery);
  return products;
}
