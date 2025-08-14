import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link">HOME</a>
          </li>
          <li className="navbar-item">
            <a href="#listings" className="navbar-link">LISTINGS</a>
          </li>
          <li className="navbar-item">
            <a href="#move" className="navbar-link">LET'S MOVE</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">ABOUT US</a>
          </li>
        </ul>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar