import React from 'react'
import Logo from "../images/logo.svg"
import "./Header.css"

export const Header = () => {
  const toggleNav = () => {
    document.querySelector(".nav-links").classList.toggle("hide")
    document.querySelector(".main-content").classList.toggle("menu-gradient")
  }

  return (
   <header className="main-header">     
      <nav className="main-nav container">
        <img src={Logo} alt=""/>
        <div className="hidden" onClick={toggleNav}></div>
        <ul className="nav-links small-nav hide">
          <li><a href="#about">About</a></li>
          <li><a href="#about">Discover</a></li>
          <li><a href="#about">Get started</a></li>
        </ul>
      </nav>
   </header>
  )
}

export default Header
