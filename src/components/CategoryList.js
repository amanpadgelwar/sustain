import React from "react";
import { Link } from "react-router-dom";
import CategoryProducts from "../Pages/CategoryProducts";
import { ProductCard } from "./ProductCard";

export function CategoryList({ filteredCategory, noDetail }) {
  return (
    <ul>
      {filteredCategory.map((category) => (
        <li key={category.id}>
          <h2>{category.categoryName}</h2>
          <h3>{category.description}</h3>
          <h3>{category.imageSrc}</h3>
          
        
        </li>
        

      ))}
   
    </ul>
  );
  <CategoryProducts/>
}

