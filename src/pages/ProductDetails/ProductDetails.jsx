import React, { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ShoppingBag,
  ArrowLeft,
  Minus,
  Plus,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw
} from "lucide-react";
import { motion } from "framer-motion";
import "./ProductDetails.css";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

const storageOptions = [
  "128GB",
  "256GB",
  "512GB",
  "1TB"
];

const colorOptions = [
  { name: "Black", value: "#222222" },
  { name: "White", value: "#eeeeee" },
  { name: "Blue", value: "#8daed3" },
  { name: "Green", value: "#9caf9b" },
  { name: "Pink", value: "#e9b9c6" },
  { name: "Purple", value: "#b9a9d5" },
  { name: "Silver", value: "#c8c9cc" },
  { name: "Gold", value: "#d6bd91" },
  { name: "Natural Titanium", value: "#aaa49a" },
  { name: "Desert Titanium", value: "#bd9c82" },
  { name: "Cosmic Orange", value: "#e87535" }
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedStorage, setSelectedStorage] = useState("128GB");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <Navigate to="/not-found" replace />;
  }

  const selectedColorData = colorOptions.find(
    (color) => color.name === selectedColor
  );

  const handleAddToCart = () => {
    addToCart(
      product,
      {
        storage: selectedStorage,
        color: selectedColor
      },
      quantity
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <main className="product-details-page">

      <div className="product-details-container">

        <Link to="/iphones" className="details-back-link">
          <ArrowLeft size={17} />
          Back to iPhones
        </Link>

        <div className="product-details-layout">

          <motion.div
            className="details-image-section"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="details-product-tag">
              {product.tag}
            </span>

            <div className="details-main-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="details-image-caption">
              <span>{product.name}</span>
              <span>Premium iPhone Collection</span>
            </div>
          </motion.div>

          <motion.div
            className="details-info-section"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="details-category">
              {product.category} COLLECTION
            </span>

            <h1>{product.name}</h1>

            <p className="details-subtitle">
              {product.subtitle}
            </p>

            <div className="details-price">
              {product.price !== null && product.price !== undefined ? (
                <>
                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>
                  <span>Starting price</span>
                </>
              ) : (
                <strong>Price on request</strong>
              )}
            </div>

            <div className="details-divider" />

            <div className="details-option-group">
              <div className="details-option-heading">
                <h3>Storage</h3>
                <span>{selectedStorage}</span>
              </div>

              <div className="storage-options">
                {storageOptions.map((storage) => (
                  <button
                    key={storage}
                    type="button"
                    className={
                      selectedStorage === storage ? "selected" : ""
                    }
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                    {selectedStorage === storage && (
                      <Check size={15} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="details-option-group">
              <div className="details-option-heading">
                <h3>Color</h3>
                <span>{selectedColor}</span>
              </div>

              <div className="color-options">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    className={
                      selectedColor === color.name ? "selected" : ""
                    }
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    aria-label={color.name}
                  >
                    {selectedColor === color.name && (
                      <Check
                        size={17}
                        color={
                          color.name === "White" ||
                          color.name === "Silver"
                            ? "#1d1d1f"
                            : "#ffffff"
                        }
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="details-option-group">
              <div className="details-option-heading">
                <h3>Quantity</h3>
              </div>

              <div className="details-quantity">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={17} />
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            <button
              type="button"
              className={`details-add-cart ${added ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check size={20} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={20} />
                  Add to Cart
                </>
              )}
            </button>

            <div className="details-benefits">
              <div>
                <Truck size={20} />
                <span>Delivery options available</span>
              </div>

              <div>
                <ShieldCheck size={20} />
                <span>Secure shopping experience</span>
              </div>

              <div>
                <RotateCcw size={20} />
                <span>Customer support available</span>
              </div>
            </div>

            <div className="details-description">
              <h3>Product Description</h3>
              <p>
                {product.subtitle} Explore the {product.name} and
                choose your preferred storage and color options.
                Product specifications and availability may vary
                by model.
              </p>
            </div>

            <Link to="/cart" className="details-cart-link">
              View Shopping Cart
            </Link>

          </motion.div>

        </div>

      </div>

    </main>
  );
};

export default ProductDetails;
