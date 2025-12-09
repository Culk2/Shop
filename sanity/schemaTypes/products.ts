import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Product Name",
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),

  ],
});