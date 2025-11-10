import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-section">
        <img src={favicon} alt="Imagina logo" className="logo-icon" />
        <h1 className="logo-text">IMAGINA</h1>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>
        <Link to="/convert" className="nav-link" onClick={() => setMenuOpen(false)}>
          Converter
        </Link>
      </nav>
    </header>
  );
};

export default Header;
