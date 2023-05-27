import React from 'react';

export default function Cart({ cart }) {
  // Add a check for undefined or non-array cart
  if (!cart || !Array.isArray(cart)) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              {/* Add other relevant information */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
