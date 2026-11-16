
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">●</span>
              iStore
            </Link>

            <p>
              Discover the latest Apple products and accessories.
              Experience premium technology, quality and innovation
              with iStore.
            </p>

            <div className="footer-socials">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Shop</h3>
            <Link to="/iphones">All iPhones</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/offers">Special Offers</Link>
            <Link to="/cart">Shopping Cart</Link>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/iphones">Latest iPhones</Link>
            <Link to="/accessories">AirPods</Link>
            <Link to="/accessories">Apple Watch</Link>
          </div>

          <div className="footer-column">
            <h3>Customer Support</h3>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">My Cart</Link>
            <Link to="/checkout">Checkout</Link>
            <a href="mailto:support@istore.com">Email Support</a>
          </div>

          <div className="footer-contact">
            <h3>Get in Touch</h3>

            <a href="mailto:support@istore.com">
              <span>✉</span>
              support@istore.com
            </a>

            <a href="tel:+919876543210">
              <span>☎</span>
              +91 98765 43210
            </a>

            <p>
              <span>⌖</span>
              India
            </p>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} iStore. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms & Conditions</Link>
          </div>

          <p className="footer-made">
            Designed with care for technology lovers.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
