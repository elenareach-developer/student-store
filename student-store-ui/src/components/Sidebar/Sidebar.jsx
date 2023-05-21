import * as React from "react"
import "./Sidebar.css"
import CartCount from "../CartCount/CartCount"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <CartCount />
    </section>


  )
}
