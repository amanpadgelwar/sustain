import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export default function ProductListingPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  

  
  

  const { addToCart } = useContext(CartContext);
 const {addToWishlist} =useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();

        const lowerCaseCategoryId = categoryId.toLowerCase();
        const categoryProducts = data.products.filter(
          (product) => product.categoryId.toLowerCase() === lowerCaseCategoryId
        );

        setFilteredProducts(categoryProducts);
      } catch (error) {
        console.error(error);
        setFilteredProducts([]);
      }
    };

    fetchProducts();
  }, [categoryId]);

  

  

  
 

  return (
    <>
      <h1>Filtered Products</h1>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <p>Image: {product.imageSrc}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            </div>
          ))}
        </ul>
      ) : (
        <p>No products found for the selected category.</p>
      )}
    </>
  );
}
