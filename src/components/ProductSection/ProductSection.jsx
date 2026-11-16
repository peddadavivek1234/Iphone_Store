import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";
import { featuredProducts } from "../../data/products";
import "./ProductSection.css";

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-section-container">

        <div className="product-section-heading">
          <div>
            <span className="section-subtitle">OUR COLLECTION</span>
            <h2>Explore Our iPhones</h2>
            <p>Discover the latest iPhone collection.</p>
          </div>

          <Link to="/iphones" className="view-all-link">
            View All iPhones
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="product-section-bottom">
          <Link to="/iphones" className="view-all-button">
            Explore All iPhones
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
