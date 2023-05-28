import React, { useContext, useState } from 'react';
import { CartContext } from '..';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);

  const handleIncrement = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
  };

  const handleDecrement = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
  };
  const handleRemove = (item) => {
    removeFromCart(item);
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div>
      <h3>Items in your cart: {cartItems.length}</h3>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => handleRemove(item)}>Remove from Cart</button>
          
        </div>
      ))}
    </div>
  );
}
