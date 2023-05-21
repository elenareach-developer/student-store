import * as React from "react"
import "./Search.css"
import {useProducts} from "../../Contexts/ProductsContext";

export default function Search() {
  const {ProductListWithSearch} = useProducts();
  const handleChange = (event) => {
    ProductListWithSearch(event.target.value)
  }
  return (
    <div className="home">
      <input type="text" id="myInput" onKeyUp={(e)=>handleChange(e)} placeholder="Search ..." />
    </div>
  )
}
