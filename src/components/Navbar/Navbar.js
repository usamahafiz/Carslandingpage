import React from 'react'
import './Navbar.css'

const Navbar = () =>{
  return(
    <div className="nav">
      <div className="nav-logo">Cars Garage</div>
      <ul className="nav-menu">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <div className="nav-contact">Contact</div>
      </ul>
    </div>
  )
} 



export default  Navbar
