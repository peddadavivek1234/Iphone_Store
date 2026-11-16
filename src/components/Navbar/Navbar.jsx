import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Apple,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Apple size={27} />
          <span>iStore</span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/iphones" onClick={closeMenu}>iPhone</Link>
          <Link to="/accessories" onClick={closeMenu}>Accessories</Link>
          <Link to="/offers" onClick={closeMenu}>Offers</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <div className="navbar-actions">

          <Link
            to="/cart"
            className="nav-cart-link"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingBag size={23} />
            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
