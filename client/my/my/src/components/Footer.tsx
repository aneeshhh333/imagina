import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand section */}
        <div className="footer-brand">
          <h2 className="footer-logo">IMAGINA</h2>
          <p className="footer-tagline">
            Transform your images with elegance and simplicity.
          </p>
        </div>

        {/* Navigation section */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#convert">Converter</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social section */}
        <div className="footer-socials">
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Github">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IMAGINA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
