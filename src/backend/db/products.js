import { v4 as uuid } from "uuid";

import { categories } from "./categories";


export const products = [
  {
    id: uuid(),
    categoryId: categories[0]._id,
    categoryName: "Home",
    description: "Reusable bamboo toothbrush",
    price: "5.99",
    name: "Bamboo Toothbrush",
    imageSrc: "path/to/bamboo-toothbrush.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[0]._id,
    categoryName: "Home",
    description: "Eco-friendly laundry detergent",
    price: "12.99",
    name: "Natural Laundry Detergent",
    imageSrc: "path/to/laundry-detergent.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[0]._id,
    categoryName: "Home",
    description: "Recycled paper notebook",
    price: "7.99",
    name: "Recycled Paper Notebook",
    imageSrc: "path/to/recycled-notebook.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[0]._id,
    categoryName: "Home",
    description: "Soy wax scented candles",
    price: "9.99",
    name: "Soy Wax Candles",
    imageSrc: "path/to/soy-wax-candles.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[0]._id,
    categoryName: "Home",
    description: "Reusable food storage bags",
    price: "14.99",
    name: "Reusable Food Storage Bags",
    imageSrc: "path/to/food-storage-bags.jpg",
  },
  // Add more products in the Home category

  // Fashion category
  {
    id: uuid(),
    categoryId: categories[1]._id,
    categoryName: "Fashion",
    description: "Organic cotton t-shirt",
    price: "19.99",
    name: "Organic Cotton T-Shirt",
    imageSrc: "path/to/organic-tshirt.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[1]._id,
    categoryName: "Fashion",
    description: "Recycled denim jeans",
    price: "49.99",
    name: "Recycled Denim Jeans",
    imageSrc: "path/to/recycled-jeans.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[1]._id,
    categoryName: "Fashion",
    description: "Bamboo sunglasses",
    price: "29.99",
    name: "Bamboo Sunglasses",
    imageSrc: "path/to/bamboo-sunglasses.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[1]._id,
    categoryName: "Fashion",
    description: "Fair trade organic cotton socks",
    price: "8.99",
    name: "Organic Cotton Socks",
    imageSrc: "path/to/organic-socks.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[1]._id,
    categoryName: "Fashion",
    description: "Handmade vegan leather wallet",
    price: "34.99",
    name: "Vegan Leather Wallet",
    imageSrc: "path/to/vegan-wallet.jpg",
  },
  // Add more products in the Fashion category

  // Beauty category
  {
    id: uuid(),
    categoryId: categories[2]._id,
    categoryName: "Beauty" ,
    description: "Natural and vegan lip balm",
    price: "8.99",
    name: "Natural Lip Balm",
    imageSrc: "path/to/lip-balm.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[2]._id,
    categoryName: "Beauty" ,
    description: "Organic facial cleanser",
    price: "17.99",
    name: "Organic Facial Cleanser",
    imageSrc: "path/to/facial-cleanser.jpg",
  },
  // Add more products in the Beauty category

  // Kitchen category
  {
    id: uuid(),
    categoryId: categories[3]._id,
    categoryName: "Kitchen",
    description: "Eco-friendly kitchen supplies and utensils",
    price: "14.99",
    name: "Eco-friendly Kitchen Set",
    imageSrc: "path/to/kitchen-set.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[3]._id,
    categoryName: "Kitchen",
    description: "Reusable silicone food storage bags",
    price: "9.99",
    name: "Silicone Food Storage Bags",
    imageSrc: "path/to/silicone-food-bags.jpg",
  },
  // Add more products in the Kitchen category

  // Plants category
  {
    id: uuid(),
    categoryId: categories[4]._id,
    categoryName: "Plants" ,
    description: "Indoor potted succulent plant",
    price: "12.99",
    name: "Potted Succulent",
    imageSrc: "path/to/potted-succulent.jpg",
  },
  {
    id: uuid(),
    categoryId: categories[4]._id,
    categoryName: "Plants" ,
    description: "Hanging planters for indoor plants",
    price: "19.99",
    name: "Hanging Planters",
    imageSrc: "path/to/hanging-planters.jpg",
  },
  // Add more products in the Plants category

  // Add more categories and products here if needed
];
