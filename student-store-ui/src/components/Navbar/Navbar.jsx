import * as React from "react"
import "./Navbar.css"
import logo from "../../assets/codepath.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="leftNav">
          <img src={logo} alt="codepath logo" />
      </div>
      <div className="righNav">
        <a href="#about">About</a>
        <a href="#sell">Buy</a>
        <a href="#contactUs">Contact Us</a>
      </div>
    </nav>
  )
}

