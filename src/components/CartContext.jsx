// CartContext.js
import React, { createContext, useState,useContext } from 'react';
import { Context } from './GlobeData';
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {loggedIn,LogIn} = useContext(Context);
  
  const addToCart = (product) => {
    console.log(!loggedIn+'status');
    if (!loggedIn) {
      alert('Please login to add items to cart.');
      return;
    }
    else
    {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === product.id);
          if (existingProduct) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
