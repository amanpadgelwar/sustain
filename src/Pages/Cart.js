import React from 'react';
import { useContext } from 'react';
import { CartContext } from '..';

export default function Cart({ cart }) {
  const {cartItems} = useContext(CartContext);
  // Add a check for undefined or non-array cart
  

  return (
    
    <div>
    <h2>Cart</h2>
   <h2>{cartItems} are in your cart</h2>

      
  
    </div>
  );
}
