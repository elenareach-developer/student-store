import React, { createContext, useContext,useState } from 'react';
import {useProducts} from"./ProductsContext"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const {updateItemInProductList} = useProducts();

  const addItemToCart = itemAdd => {

   let item  = isItemOnCart(itemAdd)?isItemOnCart(itemAdd):itemAdd;
   item.count++;
    setCartItems([...cartItems, item]);
    updateItemInProductList(item)

  };

  const removeItemFromCart = itemRemove => {
    let isItem = isItemOnCart(itemRemove)
    if(isItem?.count>0){
      isItem.count--;
      updateItemInProductList(isItem)
      if(isItem.count>0){
          setCartItems([...cartItems, isItem]);
        }else{
          setCartItems(cartItems.filter(item => item.id !== isItem.id));
        }
  }
  };
  const isItemOnCart = isItem =>{
    return cartItems.find(item => item.id == isItem.id)
  }
  
  const getItem = item=>{
    let isItem =  isItemOnCart(item)
    return isItem?isItem:item
  }

  const value = { cartItems, isItemOnCart, getItem, addItemToCart, removeItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


