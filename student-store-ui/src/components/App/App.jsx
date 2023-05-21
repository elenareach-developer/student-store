import React, {useEffect, useState} from "react"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios";
import ProductList from"../ProductList/ProductList";
import Search from"../Search/Search"
import Navbar from"../Navbar/Navbar"
import {useProducts} from "../../Contexts/ProductsContext";



export default function App() {
  const {addItemsToProductList} = useProducts();
  const [eror, setError] = useState();
  const [isFetching, setIsFetching] = useState(false)
     
  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get("http://localhost:3001/store");
        if (res?.data?.products) {
         await  addItemsToProductList(res.data.products);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="app">
     {/* <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
        {/*  <Navbar />
          <Sidebar />
          <Home />
        </main>
  </BrowserRouter>*/}
   <Sidebar />
  <div className="main">
       <Navbar />
       <div className="row">
          <div className="card">
            <Search />
          </div>
          <div className="card">
            <ProductList />
            </div>
        </div>
   </div>
    </div>
  )
}
