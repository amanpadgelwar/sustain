import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export default function ProductListingPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { categoryId } = useParams();

  const location = useLocation();
  const { cart: pageCart, onAddToCart: pageHandleAddToCart } = location.state || {};

  const [cart, setCart] = useState(pageCart || []);
  const [wishlist, setWishlist] = useState([]);

  const { addToCart } = useContext(CartContext);

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

  const handleAddToCart = (productId) => {
    // Find the selected product by ID
    const selectedProduct = filteredProducts.find((product) => product.id === productId);

    // Add the product to the cart state
    setCart((prevCart) => [...prevCart, selectedProduct]);
    if (pageHandleAddToCart) {
      pageHandleAddToCart(productId);
    }
  };

  const handleAddToWishlist = (productId) => {
    // Find the selected product by ID
    const selectedProduct = filteredProducts.find((product) => product.id === productId);

    // Add the product to the wishlist state
    setWishlist((prevWishlist) => [...prevWishlist, selectedProduct]);
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
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button>
            </div>
          ))}
        </ul>
      ) : (
        <p>No products found for the selected category.</p>
      )}
    </>
  );
}
