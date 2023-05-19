import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Plants",
    description:
      "Sustainable plants which requires less water and soil replacement.",
  },
  {
    _id: uuid(),
    categoryName: "Rugs",
    description:
      "Rugs made up of jutes and  bio colors.",
  },
  {
    _id: uuid(),
    categoryName: "Clothes",
    description:
      "Clothing made with eco-friendly materials such as organic cotton or bamboo.",
  },
];
