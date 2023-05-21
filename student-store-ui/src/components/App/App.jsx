import React, {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar"
import Hero from "../Hero/Hero"
import Footer from "../Footer/Footer"
import Cart from "../Cart/Cart"
import About from "../About/About"
import "./App.css"
import axios from "axios";
import ProductList from"../ProductList/ProductList";
import ProductDetails from"../ProductDetails/ProductDetails";
import Product from"../Product/Product";
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
       <BrowserRouter>
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
       <div className="card greenBg noTop">
            <Hero />
          </div>
          <main>
          <div className="card">
            <Search />
          </div>
          <h3 id="sell">Best Selling Products</h3>
                <div className="card add_scroll">
                <Routes>
                            <Route path="/" element={ <ProductList />}/>
                            <Route exact path="/product/:productId" element={<ProductDetails />} />
                            <Route exact path="/cart" element={<Cart />} />
                            
              </Routes>
          </div>
          </main>
          <h3 id="about">About</h3>
          <div className="card">
            <About />
          </div>
          <h3 id="contactUs">Contact Us</h3>
          <div className="card">
            <Footer />
          </div>
        </div>
   </div>
   </BrowserRouter>
    </div>
  )
}
