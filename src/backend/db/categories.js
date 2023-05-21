import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Home",
    description: "Sustainable products for your home.",
    imageSrc: "path/to/home-category.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Fashion",
    description: "Eco-friendly fashion and accessories.",
    imageSrc: "path/to/fashion-category.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Beauty",
    description: "Natural and sustainable beauty products.",
    imageSrc: "path/to/beauty-category.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kitchen",
    description: "Eco-friendly kitchen supplies and utensils.",
    imageSrc: "path/to/kitchen-category.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Plants",
    description: "Sustainable plants which require less water and soil replacement.",
    imageSrc: "path/to/plants-category.jpg",
  },];