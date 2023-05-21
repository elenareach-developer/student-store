import React, {useState, useEffect} from "react"
import "./Product.css"
import {useCart} from "../../Contexts/CartContext";
import { Link } from "react-router-dom";


export default function Product(props) {
  const {addItemToCart, removeItemFromCart} = useCart();
  const [product, setProduct]  = useState(props.product)
  const [size, setSize] = useState("product " + props.size)


  useEffect(()=>{
    setProduct(props.product)
    setSize("product " + props.size)
  },[props])
  

  return (
    <>
    <section className={size}>
    <div className="Cart-Container">
      <div className="Cart-Items">
      
              <div className="image-box">
              <Link to={`/product/${product?.id}`}>
                <img src={product?.image} className="responsive" /> 
                </Link>
              </div>
            <div className="description-container">
            <div className="description">
                <h1 className="title">{product?.name}</h1>
                <h3 className="subtitle">{product?.description}</h3>
              </div>
          <div className="counter-container">
              <div className="prices">
                <div className="amount whiteText">${product?.price}</div>
              </div>
              <div className="counter"> 
                  <div className="btn" onClick={()=>addItemToCart(product)}>+</div>
                  <div className="count whiteText">{product?.count}</div>
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
