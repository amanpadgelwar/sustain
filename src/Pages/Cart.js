import React from 'react';
import { useContext } from 'react';
import { CartContext } from '..';

export default function Cart( ) {
  const {cart} = useContext(CartContext);

  

  return (
    
    <div>
      <h3>Items in your cart {cart.length} </h3>
      {cart.map((item) => (
        <div
          style={{
            border: "1px solid black",
            margin: "0.5rem",
            padding: "0.5rem"
          }}
        >
          <p>{item.name}</p>
         <p>{item.description}</p> 
          {item.price}
          
    </div>
    
    ))}
    
  </div>

      )}