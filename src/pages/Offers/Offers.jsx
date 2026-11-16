
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Tag, Zap } from "lucide-react";
import "./Offers.css";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

const Offers = () => {
  const { addToCart } = useCart();
  const [addedProduct, setAddedProduct] = useState("");

  const offerProducts = useMemo(() => {
    return products.slice(0, 12).map((product, index) => {
      const discount = [10, 12, 15, 8, 18, 10, 14, 20, 12, 15, 8, 18][index];
      const originalPrice = Number(product.price) || 0;
      const offerPrice = Math.round(originalPrice * (1 - discount / 100));

      return {
        ...product,
        originalPrice,
        offerPrice,
        discount
      };
    }).filter((product) => product.originalPrice > 0);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(
      { ...product, price: product.offerPrice },
      { storage: "Standard", color: "Default" },
      1
    );

    setAddedProduct(product.id);

    setTimeout(() => {
      setAddedProduct("");
    }, 1800);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(price);

  return (
    <div className="offers-page">
      <section className="offers-hero">
        <div className="offers-hero-content">
          <span className="offers-eyebrow">
            <Zap size={15} /> EXCLUSIVE DEALS
          </span>

          <h1>
            Big Savings.
            <br />
            <span>Better Technology.</span>
          </h1>

          <p>
            Discover exciting deals on selected iPhones.
            Upgrade your everyday experience for less.
          </p>

          <a href="#offer-products" className="offers-hero-button">
            Explore Offers <ArrowRight size={18} />
          </a>

          <div className="offers-hero-note">
            <Tag size={16} />
            <span>Special prices on selected products</span>
          </div>
        </div>

        <div className="offers-hero-image">
          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000"
            alt="Premium smartphone offer"
          />
          <div className="offers-floating-card">
            <span>EXCLUSIVE DEALS</span>
            <strong>Up to 20% OFF</strong>
            <small>On selected products</small>
          </div>
        </div>
      </section>

      <section className="offers-benefits">
        <div>
          <Tag size={22} />
          <div>
            <h3>Special Discounts</h3>
            <p>Save on selected devices</p>
          </div>
        </div>

        <div>
          <ShoppingBag size={22} />
          <div>
            <h3>Easy Shopping</h3>
            <p>Simple and secure ordering</p>
          </div>
        </div>

        <div>
          <Zap size={22} />
          <div>
            <h3>Limited Deals</h3>
            <p>Explore our special prices</p>
          </div>
        </div>
      </section>

      <section className="offers-products-section" id="offer-products">
        <div className="offers-section-heading">
          <div>
            <span>DON'T MISS OUT</span>
            <h2>Today's Best Offers</h2>
            <p>Find your next iPhone at a special project offer price.</p>
          </div>

          <Link to="/iphones" className="offers-view-all">
            View All iPhones <ArrowRight size={17} />
          </Link>
        </div>

        <div className="offers-product-grid">
          {offerProducts.map((product) => (
            <div className="offer-product-card" key={product.id}>
              <div className="offer-discount-badge">
                {product.discount}% OFF
              </div>

              <Link
                to={`/product/${product.id}`}
                className="offer-product-image"
              >
                <img src={product.image} alt={product.name} loading="lazy" />
              </Link>

              <div className="offer-product-info">
                <span className="offer-product-tag">
                  {product.tag || "Special Offer"}
                </span>

                <Link
                  to={`/product/${product.id}`}
                  className="offer-product-name"
                >
                  {product.name}
                </Link>

                <p>{product.subtitle}</p>

                <div className="offer-price-row">
                  <strong>{formatPrice(product.offerPrice)}</strong>
                  <del>{formatPrice(product.originalPrice)}</del>
                </div>

                <div className="offer-saving">
                  You save {formatPrice(product.originalPrice - product.offerPrice)}
                </div>

                <button
                  className={`offer-add-button ${
                    addedProduct === product.id ? "added" : ""
                  }`}
                  onClick={() => handleAddToCart(product)}
                >
                  {addedProduct === product.id ? (
                    "Added to Cart ✓"
                  ) : (
                    <>
                      <ShoppingBag size={17} />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {offerProducts.length === 0 && (
          <div className="offers-empty">
            <h3>No offers available</h3>
            <p>Please check back later for special deals.</p>
          </div>
        )}
      </section>

      <section className="offers-bottom-banner">
        <div>
          <span>YOUR NEXT UPGRADE STARTS HERE</span>
          <h2>Find the iPhone that's right for you.</h2>
          <p>Explore our complete iPhone collection.</p>
        </div>

        <Link to="/iphones">
          Shop iPhones <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Offers;
