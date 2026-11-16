
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, ShoppingBag, Truck } from "lucide-react";
import "./Checkout.css";
import { useCart } from "../../context/CartContext";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(price) || 0);
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const deliveryCharge = cartTotal >= 499 ? 0 : 99;
  const totalAmount = cartTotal + deliveryCharge;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setError("Your cart is empty. Please add products before checkout.");
      return;
    }

    const order = {
      orderId: `ISTORE${Date.now()}`,
      customer: formData,
      items: cartItems,
      subtotal: cartTotal,
      deliveryCharge,
      totalAmount,
      paymentMethod,
      orderDate: new Date().toISOString(),
      status: "Order Placed"
    };

    localStorage.setItem("iStoreLastOrder", JSON.stringify(order));

    clearCart();
    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <ShoppingBag size={54} />
        <h2>Your cart is empty</h2>
        <p>Add some products before proceeding to checkout.</p>
        <Link to="/iphones" className="checkout-shop-btn">
          Explore iPhones
        </Link>
      </div>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <div>
            <span className="checkout-eyebrow">SECURE CHECKOUT</span>
            <h1>Complete Your Order</h1>
            <p>Enter your delivery details and choose your payment method.</p>
          </div>

          <div className="checkout-secure">
            <Lock size={17} />
            Secure Checkout
          </div>
        </div>

        <form className="checkout-layout" onSubmit={handleSubmit}>
          <div className="checkout-left">
            <div className="checkout-card">
              <div className="checkout-section-heading">
                <span className="checkout-step-number">01</span>
                <div>
                  <h2>Delivery Details</h2>
                  <p>Where should we deliver your order?</p>
                </div>
              </div>

              <div className="checkout-form-grid">
                <div className="checkout-field full-width">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">Mobile Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    pattern="[6-9][0-9]{9}"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field full-width">
                  <label htmlFor="address">Complete Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="House number, street, area"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field full-width">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    id="landmark"
                    name="landmark"
                    type="text"
                    placeholder="Nearby landmark (optional)"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="city">City *</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="state">State *</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="pincode">PIN Code *</label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    placeholder="6-digit PIN code"
                    pattern="[0-9]{6}"
                    maxLength="6"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="checkout-card">
              <div className="checkout-section-heading">
                <span className="checkout-step-number">02</span>
                <div>
                  <h2>Payment Method</h2>
                  <p>Select how you would like to pay.</p>
                </div>
              </div>

              <div className="payment-options">
                <label className={`payment-option ${paymentMethod === "cod" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="payment-option-icon">₹</span>
                  <span className="payment-option-content">
                    <strong>Cash on Delivery</strong>
                    <small>Pay when your order arrives</small>
                  </span>
                  <span className="payment-radio"></span>
                </label>

                <label className={`payment-option ${paymentMethod === "upi" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="payment-option-icon">UPI</span>
                  <span className="payment-option-content">
                    <strong>UPI Payment</strong>
                    <small>Google Pay, PhonePe, Paytm</small>
                  </span>
                  <span className="payment-radio"></span>
                </label>

                <label className={`payment-option ${paymentMethod === "card" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="payment-option-icon">▣</span>
                  <span className="payment-option-content">
                    <strong>Credit / Debit Card</strong>
                    <small>Visa, Mastercard and RuPay</small>
                  </span>
                  <span className="payment-radio"></span>
                </label>
              </div>

              <p className="payment-note">
                Online payment options are for demonstration only. No payment will be processed.
              </p>
            </div>

            {error && <p className="checkout-error">{error}</p>}

            <button type="submit" className="place-order-btn">
              <Lock size={17} />
              Place Order · {formatPrice(totalAmount)}
            </button>

            <Link to="/cart" className="checkout-back-link">
              <ArrowLeft size={16} />
              Return to Cart
            </Link>
          </div>

          <aside className="checkout-right">
            <div className="checkout-card order-summary-card">
              <div className="order-summary-heading">
                <h2>Order Summary</h2>
                <span>{cartItems.reduce((sum, item) => sum + Number(item.quantity || 1), 0)} items</span>
              </div>

              <div className="checkout-items">
                {cartItems.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <div className="checkout-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="checkout-item-info">
                      <h3>{item.name}</h3>
                      <p>
                        {item.storage && item.storage !== "Standard" ? `${item.storage} · ` : ""}
                        {item.color && item.color !== "Default" ? `${item.color} · ` : ""}
                        Qty: {item.quantity}
                      </p>
                      <strong>
                        {Number(item.price) > 0
                          ? formatPrice(Number(item.price) * Number(item.quantity || 1))
                          : "Price on request"}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout-price-details">
                <div>
                  <span>Subtotal</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <div>
                  <span>Delivery</span>
                  <strong className={deliveryCharge === 0 ? "free-delivery" : ""}>
                    {deliveryCharge === 0 ? "FREE" : formatPrice(deliveryCharge)}
                  </strong>
                </div>

                <div className="checkout-total">
                  <span>Total Amount</span>
                  <strong>{formatPrice(totalAmount)}</strong>
                </div>
              </div>

              <div className="checkout-delivery-note">
                <Truck size={19} />
                <p>Delivery usually takes 3–5 business days.</p>
              </div>
            </div>

            <div className="checkout-help">
              <Lock size={18} />
              <div>
                <strong>Your information is secure</strong>
                <p>Your checkout details are saved locally for this demo.</p>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
