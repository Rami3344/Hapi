import React from 'react'
import "../style/Navbar.css"
import logo from "../assets/Logo.png"
function Navbar() {
  return (
    <div className='nav'>
      
      <div className='cont'>
        <img src={logo}/>
      <ul className='nav-list'>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#buy">BUY $HAPI</a></li>
        <li><a href="#road">ROADMAP</a></li>
        <li><a href="#white">WHITEPAPER</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
