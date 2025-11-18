export const allProductsQuery = `*[_type == "product"]{
  _id,
  name,
  price,
  "imageUrl": image.asset->url
}`;
