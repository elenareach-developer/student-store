import React, { createContext, useContext,useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [listWithSeatch, setListWithSearch] = useState([]);
  

    const addItemsToProductList = async(items )=> {
        items.forEach((item)=>{
            item.count=0
        })
       await setProductList(items);
       await setListWithSearch(items)
       };

    const SearchProductById = (itemId)=>{
      itemId = Number(itemId)
      let searchItem = productList.find(el=>{
        return el.id==itemId
      })
      return searchItem
    }
    
    const ProductListWithSearch = (search)=>{
      if(search.length>0){
      let searchArr = []
      search = search.toUpperCase()
      productList.forEach((el)=>{
          let setSearchDescription = (el.name+el.description+"").toUpperCase()
           if(setSearchDescription.includes(search)){
            searchArr.push(el)
            }   
      })
      setListWithSearch(searchArr);
    }else{
      setListWithSearch(productList);
    }
    }

    

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

  

  const value = { productList,listWithSeatch, SearchProductById, ProductListWithSearch, addItemsToProductList,  updateItemInProductList,clearProductList};

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};



export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


