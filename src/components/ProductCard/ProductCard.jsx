import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-image-wrapper">
        <span className="product-tag">{product.tag}</span>

        <Link
          to={`/product/${product.id}`}
          className="product-image-link"
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>

        <Link
          to={`/product/${product.id}`}
          className="product-quick-view"
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-subtitle">
          {product.subtitle}
        </p>

        <div className="product-pricing">
          {product.price !== null && product.price !== undefined ? (
            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>
          ) : (
            <strong>Price coming soon</strong>
          )}
        </div>

        <div className="product-card-actions">
          <Link
            to={`/product/${product.id}`}
            className="product-buy-button"
          >
            <ShoppingBag size={17} />
            Explore
          </Link>

          <Link
            to={`/product/${product.id}`}
            className="product-details-button"
          >
            View Details
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
