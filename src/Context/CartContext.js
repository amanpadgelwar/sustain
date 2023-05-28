import { createContext,useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart,setCart]=useState([]);
    const [wishList,setWishList]=useState([]);


    const  addToCart =item=>{
   setCart((cart)=>[...cart,item]);


    };

    const addToWishlist=item=>{
setWishList((wishList)=>[...wishList,item])

    }
    
  return (
    <CartContext.Provider
      value={{
        cart,addToCart,wishList,addToWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
