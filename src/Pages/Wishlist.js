import React from 'react';
import { useContext } from 'react';
import { CartContext } from '..';

export default function WishList( ) {
  const {wishList} = useContext(CartContext);

  

  return (
    
    <div>
      <h3>Items in your cart {wishList.length} </h3>
      {wishList.map((item) => (
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