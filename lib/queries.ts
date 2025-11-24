export const allProductsQuery = `*[_type == "product"]{
  _id,
  name,
  price,
  description,
  "slug": slug.current,
  "imageUrl": image.asset->url
}`;