import React, {useState, useEffect} from "react"
import "./Product.css"
import {useCart} from "../../Contexts/CartContext"


export default function Product(props) {
  const {addItemToCart, removeItemFromCart} = useCart();
  const [product, setProduct]  = useState(props.item)


  useEffect(()=>{
    setProduct(props.item)
  },[props])
  

  return (
    <>
    <section className="product">
    <div className="Cart-Container">
      <div className="Cart-Items">
              <div className="image-box">
                <img src={product?.image}  /> 
              </div>
            <div className="description-container">
            <div className="about">
                <h1 className="title">{product?.name}</h1>
                <h3 className="subtitle">{product?.description}</h3>
              </div>
          <div className="counter-container">
              <div className="prices">
                <div className="amount">${product?.price}</div>
              </div>
              <div className="counter"> 
                  <div className="btn" onClick={()=>addItemToCart(product)}>+</div>
                  <div className="count">{product?.count}</div>
                  <div className="btn" onClick={()=>removeItemFromCart(product)}>-</div>
              </div>
            </div>
            </div>
      </div>
      </div>
    </section>
    </>
  )
}
