import * as React from "react"
import "./CartCount.css"
import {useCart} from "../../Contexts/CartContext"

export default function CartCount() {
  const {totalProducts, totalPrice} = useCart();
  return (
    <section className="cartcount">
          <a href="#cart">Cart</a>
            <div className="text">Total Produts in cart:</div> 
            <div className="text countprice">{totalProducts}</div>
            <div className="text">Total Price in cart: </div>
            <div className="text countprice">${totalPrice}</div>
    </section>


  )
}
