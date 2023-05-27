import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../backend/db/products";
import { CategoryList } from "../components/CategoryList";

export default function Category() {
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchDataFromServer = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategoriesData(data.categories);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const getProductByCategory = (categoryId) => {
    return products.filter((product) => product.categoryId === categoryId);
  }
  
 


  return (
    <>
      <h1>Categories</h1>
      {categoriesData.map((category) => (
        <div key={category._id}>
          <h1>{category.categoryName}</h1>
          <h3>{category.description}</h3>
          <h3>{category.imageSrc}</h3>
          
          <CategoryList filteredCategory={getProductByCategory(category.id)} noDetail />
          
         
        </div>
      ))}
      <Link to="/ProductDetails">See All Products</Link>
    </>
  );
  
      }