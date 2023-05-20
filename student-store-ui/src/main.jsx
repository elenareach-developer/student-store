import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import Product from "./components/Product/Product"
import "./globals.css"
import { CartProvider }from "./Contexts/CartContext"
import { ProductsProvider }from "./Contexts/ProductsContext"
let item = {id:2,
            title:"Bag Rad",
            count:"0" ,
            price: "2,84"
            }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
