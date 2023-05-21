import React, {useState, useEffect} from "react"
import "./ProductDetails.css"
import { useParams } from "react-router-dom";
import {useProducts} from "../../Contexts/ProductsContext";
import Product from"../Product/Product";
import { Link } from "react-router-dom";
 


export default function ProductDetails() {
  const { productId } = useParams();
  const {SearchProductById} = useProducts();
  const [product,setProduct] = useState(SearchProductById(productId));
  const [noProduct,setNoProduct] = useState(true);

  useEffect(()=>{
    if(productId){
    let el = SearchProductById(productId);
    if(el){
      setProduct(el)
      setNoProduct(false)
    }}
  },[productId])

  return (
    <>
     <Link to={`/`}><span className="red">Back to list</span></Link>
    {!noProduct&&<Product key={product.key} product={product} size="bigCart"/>  }
    {noProduct&&<div>No Product with id {productId}</div>}
    </>
  )

}
