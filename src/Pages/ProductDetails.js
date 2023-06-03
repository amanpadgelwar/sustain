import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryName, setCategoryName] = useState();

  const datafromServer = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      
      setProducts(data.products);
      
    
    } catch (e) {
      console.error(e);
    }
  };
  

  const filteredProductsByPrice = () => {
    if (products && products.length > 0) {
      const filteredProduct = products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      setFilteredProducts(filteredProduct);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleCategoryChange = (event) => {
    if (event && event.target) {
      setSelectedCategory(event.target.value);
      const categoryValue = event.target.value;
      const filteredProduct =
        categoryValue === "all"
          ? products
          : products.filter((product) => product.categoryName  === categoryValue);
      setFilteredProducts(filteredProduct);
    }
  };
  

  useEffect(() => {
    datafromServer();
  }, []);

  useEffect(() => {
    filteredProductsByPrice();
  }, [minPrice, maxPrice, products]);

  useEffect(() => {
    // Get unique category names
    const uniqueCategories = Array.from(new Set(products.map((product) => product.categoryName)));

    // Set the first category as the selected category
    setSelectedCategory(uniqueCategories.length > 0 ? uniqueCategories[0] : "all");

    // Set the unique category names
    setCategoryName(uniqueCategories);
  }, [products]);

  if (products.length === 0) {
    return <div>Loading...</div>; // or any other loading indicator
  }
  return (
    <>
      <h1>Products</h1>
      <div>
      <h2>Filters</h2>
        <label htmlFor="priceRange">Price Range:Minimum</label>
        <input
          type="range"
          id="priceRange"
          min={0}
          max={100}
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
        />
      </div>
      <div>
     
        <label htmlFor="priceRange">Price Range:Maximum</label>
        <input
          type="range"
          id="priceRange"
          min={0}
          max={100}
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
        />
      </div>
      
      <div>
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e)}>
          <option value="all">All</option>
          {categoryName.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>CategoryName: {product.categoryName}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Image: {product.imageSrc}</p>
          </div>
        ))}
      </ul>
    </>
  );
}
