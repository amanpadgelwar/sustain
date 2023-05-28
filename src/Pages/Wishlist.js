import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '..';

export default function WishList( ) {
  const {wishList,removeFromWishList} = useContext(CartContext);
  const [wishListItems,setWishListItems]=useState(wishList)
  
  const handleRemove=(item)=>{
 removeFromWishList(item)

setWishListItems((prevWishListItem)=>prevWishListItem.filter((setWishListItems)=>setWishListItems.id !== item.id))
  }

  return (
    
    <div>
      <h3>Items in your wishList {wishListItems.length} </h3>
      {wishListItems.map((item) => (
        <div
          style={{
            border: "1px solid black",
            margin: "0.5rem",
            padding: "0.5rem"
          }}
        >
          <p>{item.name}</p>
         <p>{item.description}</p> 
          <p>{item.price}</p>
          <button onClick={() => handleRemove(item)}>Remove from WishList</button>
    </div>
    
    ))}
    
  </div>

      )}