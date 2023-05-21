import React,{useState,useEffect} from "react"
import "./ProductList.css"
import {useProducts} from "../../Contexts/ProductsContext";
import Product from"../Product/Product";
import { Link } from "react-router-dom";


export default function ProductList(props) {
  const {listWithSeatch} = useProducts();
  const [search, setSearch] = useState(props.search||"")
  const [isSearch, setIsSearch] = useState(props.search?true:false)

  useEffect(()=>{
    setSearch(props.search)
    setIsSearch(props.search?true:false)
  })
  return (
    <>
          <div className="products-container">
            { listWithSeatch?.map((el) =>(
              <Link to={`/product/${el.id}`}>
                <Product key={el.key} product={el} size="smallCart"/> 
              </Link>    
          ))}
      </div>
  </>
  )
}
