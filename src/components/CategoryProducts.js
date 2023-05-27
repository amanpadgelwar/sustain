import React, { useState, useEffect } from 'react';

export default function CategoryProducts({ categoryId }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();

        // Filter the products based on the categoryId
        const categoryName = getCategoryNameById(data.categories, categoryId);
        const categoryProducts = data.products.filter(
          (product) => product.categoryName.toLowerCase() === categoryName.toLowerCase()
        );

        setFilteredProducts(categoryProducts);
      } catch (error) {
        console.error(error);
        setFilteredProducts([]);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const getCategoryNameById = (categories, categoryId) => {
    const category = categories.find((category) => category._id === categoryId);
    return category ? category.categoryName : '';
  };

  return (
    <>
      <h1>Filtered Products</h1>
      {filteredProducts.length > 0 ? (
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
      ) : (
        <p>No products found for the selected category.</p>
      )}
    </>
  );
}
