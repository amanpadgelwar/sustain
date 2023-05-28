import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';



export default function Category() {
  
  const [categoriesData, setCategoriesData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  const fetchCategoryData = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategoriesData(data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await fetch(`/api/products?categoryId=${categoryId}`);
      const data = await response.json();
      const lowerCaseCategoryId = categoryId.toLowerCase();
      const categoryProducts = data.products.filter(
        (product) => product.categoryName.toLowerCase() === lowerCaseCategoryId
      );
      setFilteredProducts(categoryProducts);
    } catch (error) {
      console.error(error);
      setFilteredProducts([]);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  useEffect(() => {
    if (categoryId) {
      fetchProductsByCategory(categoryId);
    } else {
      setFilteredProducts([]);
    }
  }, [categoryId]);

  const getCategoryById = (id) => {
    return categoriesData.find((category) => category._id === id);
  };
 
 
  return (
    <>
      <h1>Categories</h1>
      {categoryId ? (
        <>
          <Link to="/category">Return to All Categories</Link>
          {categoriesData.length > 0 && (
            <>
              <h1>{getCategoryById(categoryId)?.categoryName}</h1>
              <h3>{getCategoryById(categoryId)?.description}</h3>
              {filteredProducts ? (
                filteredProducts.length > 0 ? (
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
                )
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        </>
      ) : (
        categoriesData.map((category) => (
          <div key={category._id}>
            <h1>{category.categoryName}</h1>
            <h3>{category.description}</h3>
            <img src={category.imageSrc} alt="Category" />
            <Link to={`/products/${category._id}`}>Explore Category</Link>
            
          </div>
        ))
      )}
    </>
  );
}
