import React, { createContext, useContext,useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const addItemsToProductList = async(items )=> {
        items.forEach((item)=>{
            item.count=0
        })
       await setProductList(items);
       };
       
    const updateItemInProductList=(item)=>{
        productList.forEach(el=>{
          if(el.id===item.id){
            el.count=item.count
            return;
          } })
        setProductList(productList)
    }
    const clearProductList=()=>{
        setProductList([])
    }

  

  const value = { productList,addItemsToProductList,  updateItemInProductList,clearProductList};

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};



export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


