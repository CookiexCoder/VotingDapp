import React, { useState } from "react";
import "./LandingCss/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-d">D</span>
        <span className="logo-check">✔</span>
        <span className="logo-text">OTE</span>
      </div>

      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
        <button className="signup-btn">Sign up</button>
      </nav>

      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;