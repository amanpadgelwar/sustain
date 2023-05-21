import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    categoryName: "Home",
    description: "Reusable bamboo toothbrush",
    price: "5.99",
    name: "Bamboo Toothbrush",
    imageSrc: "path/to/bamboo-toothbrush.jpg",
  },
  {
    id: uuid(),
    categoryName: "Home",
    description: "Eco-friendly laundry detergent",
    price: "12.99",
    name: "Natural Laundry Detergent",
    imageSrc: "path/to/laundry-detergent.jpg",
  },
  {
    id: uuid(),
    categoryName: "Home",
    description: "Recycled paper notebook",
    price: "7.99",
    name: "Recycled Paper Notebook",
    imageSrc: "path/to/recycled-notebook.jpg",
  },
  {
    id: uuid(),
    categoryName: "Home",
    description: "Soy wax scented candles",
    price: "9.99",
    name: "Soy Wax Candles",
    imageSrc: "path/to/soy-wax-candles.jpg",
  },
  {
    id: uuid(),
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
    categoryName: "Fashion",
    description: "Organic cotton t-shirt",
    price: "19.99",
    name: "Organic Cotton T-Shirt",
    imageSrc: "path/to/organic-tshirt.jpg",
  },
  {
    id: uuid(),
    categoryName: "Fashion",
    description: "Recycled denim jeans",
    price: "49.99",
    name: "Recycled Denim Jeans",
    imageSrc: "path/to/recycled-jeans.jpg",
  },
  {
    id: uuid(),
    categoryName: "Fashion",
    description: "Bamboo sunglasses",
    price: "29.99",
    name: "Bamboo Sunglasses",
    imageSrc: "path/to/bamboo-sunglasses.jpg",
  },
  {
    id: uuid(),
    categoryName: "Fashion",
    description: "Fair trade organic cotton socks",
    price: "8.99",
    name: "Organic Cotton Socks",
    imageSrc: "path/to/organic-socks.jpg",
  },
  {
    id: uuid(),
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
    categoryName: "Beauty",
    description: "Natural and vegan lip balm",
    price: "8.99",
    name: "Natural Lip Balm",
    imageSrc: "path/to/lip-balm.jpg",
  },
  {
    id: uuid(),
    categoryName: "Beauty",
    description: "Organic facial cleanser",
    price: "17.99",
    name: "Organic Facial Cleanser",
    imageSrc: "path/to "
  }
]