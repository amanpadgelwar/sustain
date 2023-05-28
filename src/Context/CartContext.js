import { createContext,useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart,setCart]=useState([]);
    const [wishList,setWishList]=useState([]);


    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      
        if (existingItemIndex !== -1) {
          // Item already exists in the cart, update the quantity
          const updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity += 1;
          setCart(updatedCart);
        } else {
          // Item doesn't exist in the cart, add it with quantity 1
          setCart((cart) => [...cart, { ...item, quantity: 1 }]);
        }
      };
      
      const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
      };
      

    const addToWishlist=item=>{
setWishList((wishList)=>[...wishList,item])

    }
    
  return (
    <CartContext.Provider
      value={{
        cart,addToCart,wishList,addToWishlist,removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
