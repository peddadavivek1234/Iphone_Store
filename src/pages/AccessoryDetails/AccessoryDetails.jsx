
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Check } from "lucide-react";
import "./AccessoryDetails.css";
import accessories from "../../data/accessories";
import { useCart } from "../../context/CartContext";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(price) || 0);
};

const AccessoryDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = accessories.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <div className="accessory-not-found">
        <h2>Accessory Not Found</h2>
        <p>The product you are looking for is unavailable.</p>
        <Link to="/accessories">Back to Accessories</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      product,
      {
        storage: "Standard",
        color: "Default"
      },
      quantity
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="accessory-details-page">
      <div className="accessory-details-container">
        <Link to="/accessories" className="accessory-back-link">
          <ArrowLeft size={17} />
          Back to Accessories
        </Link>

        <div className="accessory-details-layout">
          <div className="accessory-details-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="accessory-details-content">
            <span className="accessory-details-category">
              {product.category}
            </span>

            {product.tag && (
              <span className="accessory-details-tag">
                {product.tag}
              </span>
            )}

            <h1>{product.name}</h1>

            <p className="accessory-details-description">
              {product.subtitle ||
                `Discover the ${product.name}, designed to complement your Apple devices with quality, convenience and style.`}
            </p>

            <div className="accessory-details-price">
              {formatPrice(product.price)}
            </div>

            <div className="accessory-details-stock">
              <Check size={17} />
              Available for purchase
            </div>

            <div className="accessory-details-quantity">
              <span>Quantity</span>

              <div className="accessory-quantity-control">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="accessory-details-total">
              <span>Total Price</span>
              <strong>{formatPrice(Number(product.price) * quantity)}</strong>
            </div>

            <button
              type="button"
              className={`accessory-add-cart-btn ${added ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? <Check size={19} /> : <ShoppingBag size={19} />}
              {added ? "Added to Cart" : "Add to Cart"}
            </button>

            <div className="accessory-details-benefits">
              <div>
                <strong>Quality Products</strong>
                <span>Carefully selected accessories</span>
              </div>

              <div>
                <strong>Secure Shopping</strong>
                <span>Safe and simple checkout</span>
              </div>

              <div>
                <strong>Easy Ordering</strong>
                <span>Convenient online shopping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoryDetails;
