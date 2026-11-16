
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  ShieldCheck,
  Trash2,
  Truck
} from "lucide-react";
import "./Cart.css";
import { useCart } from "../../context/CartContext";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
};

const getNumericPrice = (price) => {
  if (typeof price === "number") {
    return Number.isFinite(price) ? price : 0;
  }

  if (typeof price === "string" && price.trim() !== "") {
    const parsedPrice = Number(price.replace(/[₹,\s]/g, ""));
    return Number.isFinite(parsedPrice) ? parsedPrice : 0;
  }

  return 0;
};

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    hasUnpricedItems
  } = useCart();

  const navigate = useNavigate();

  const calculatedTotal = cartItems.reduce((total, item) => {
    return (
      total +
      getNumericPrice(item.price) * Number(item.quantity || 0)
    );
  }, 0);

  if (cartItems.length === 0) {
    return (
      <section className="cart-empty">
        <div className="cart-empty-icon">
          <ShoppingBag size={42} />
        </div>

        <h1>Your bag is empty</h1>

        <p>
          Looks like you haven't added anything to your shopping bag yet.
        </p>

        <Link to="/iphones" className="cart-shop-button">
          Explore iPhones
          <ArrowRight size={18} />
        </Link>
      </section>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-container">

        <div className="cart-heading">
          <div>
            <span className="cart-eyebrow">YOUR SHOPPING BAG</span>
            <h1>Shopping Cart</h1>
            <p>{cartCount} items in your bag</p>
          </div>

          <button
            className="cart-clear-button"
            onClick={clearCart}
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        </div>

        <div className="cart-layout">

          <section className="cart-items-section">

            <div className="cart-items-header">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            <div className="cart-items-list">

              {cartItems.map((item) => {
                const itemPrice = getNumericPrice(item.price);
                const itemTotal = itemPrice * Number(item.quantity || 0);

                return (
                  <article
                    className="cart-item"
                    key={item.cartItemId}
                  >

                    <div className="cart-product">

                      <Link
                        to={`/product/${item.id}`}
                        className="cart-image"
                      >
                        <img src={item.image} alt={item.name} />
                      </Link>

                      <div className="cart-product-info">

                        <span className="cart-product-category">
                          {item.category}
                        </span>

                        <Link
                          to={`/product/${item.id}`}
                          className="cart-product-name"
                        >
                          {item.name}
                        </Link>

                        <p>Storage: {item.storage}</p>
                        <p>Color: {item.color}</p>

                        <span className="cart-mobile-price">
                          {itemPrice > 0
                            ? formatPrice(itemPrice)
                            : "Price on request"}
                        </span>

                        <button
                          className="cart-remove-mobile"
                          onClick={() => removeFromCart(item.cartItemId)}
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>

                      </div>
                    </div>

                    <div className="cart-quantity">

                      <button
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                        onClick={() =>
                          updateQuantity(
                            item.cartItemId,
                            Number(item.quantity) - 1
                          )
                        }
                      >
                        <Minus size={15} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        aria-label="Increase quantity"
                        onClick={() =>
                          updateQuantity(
                            item.cartItemId,
                            Number(item.quantity) + 1
                          )
                        }
                      >
                        <Plus size={15} />
                      </button>

                    </div>

                    <div className="cart-item-total">

                      <strong>
                        {itemPrice > 0
                          ? formatPrice(itemTotal)
                          : "Price on request"}
                      </strong>

                      <button
                        className="cart-remove-desktop"
                        onClick={() => removeFromCart(item.cartItemId)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

            <Link to="/iphones" className="cart-continue-link">
              <ArrowLeft size={17} />
              Continue Shopping
            </Link>

          </section>

          <aside className="cart-summary">

            <h2>Order Summary</h2>

            <div className="cart-summary-row">
              <span>Total Items</span>
              <strong>{cartCount}</strong>
            </div>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <div className="cart-summary-row">
              <span>Shipping</span>
              <strong>Calculated at checkout</strong>
            </div>

            <div className="cart-summary-row">
              <span>Taxes</span>
              <strong>Calculated at checkout</strong>
            </div>

            <div className="cart-summary-divider" />

            <div className="cart-summary-total">
              <span>Total Amount</span>
              <strong>{formatPrice(calculatedTotal)}</strong>
            </div>

            {hasUnpricedItems && (
              <p className="cart-price-notice">
                Some products have no confirmed price. They are excluded
                from the displayed amount and must be priced before checkout.
              </p>
            )}

            <button
              className="cart-checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </button>

            <div className="cart-benefit">
              <ShieldCheck size={19} />
              <span>Secure shopping experience</span>
            </div>

            <div className="cart-benefit">
              <Truck size={19} />
              <span>Delivery details at checkout</span>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default Cart;
