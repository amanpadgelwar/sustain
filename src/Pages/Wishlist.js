import React from 'react';

export default function Wishlist({ wishlist }) {
  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              {/* Add other relevant information */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}
