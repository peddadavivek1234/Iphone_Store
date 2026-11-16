
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Package,
  MapPin,
  CreditCard,
  ShoppingBag,
  ArrowRight,
  Truck,
  CalendarDays
} from "lucide-react";
import "./OrderSuccess.css";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(price) || 0);
};

const OrderSuccess = () => {
  const navigate = useNavigate();

  const savedOrder = localStorage.getItem("iStoreLastOrder");
  const order = savedOrder ? JSON.parse(savedOrder) : null;

  if (!order) {
    return (
      <div className="order-not-found">
        <Package size={55} />
        <h2>No Order Found</h2>
        <p>You haven't placed an order yet.</p>
        <Link to="/iphones" className="order-continue-btn">
          Start Shopping
        </Link>
      </div>
    );
  }

  const customer = order.customer || {};
  const items = order.items || [];

  const paymentLabels = {
    cod: "Cash on Delivery",
    upi: "UPI Payment",
    card: "Credit / Debit Card"
  };

  const formattedDate = new Date(order.orderDate).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  const handleContinueShopping = () => {
    navigate("/iphones");
  };

  return (
    <section className="order-success-page">
      <div className="order-success-container">
        <div className="success-hero">
          <div className="success-icon">
            <CheckCircle size={58} strokeWidth={1.7} />
          </div>

          <span className="success-eyebrow">ORDER CONFIRMED</span>

          <h1>Thank You for Your Order!</h1>

          <p>
            Your order has been placed successfully. We're getting your
            products ready for delivery.
          </p>

          <div className="order-status-badge">
            <span className="status-dot"></span>
            {order.status || "Order Placed"}
          </div>
        </div>

        <div className="order-id-card">
          <div>
            <span>ORDER ID</span>
            <h2>{order.orderId}</h2>
          </div>

          <div className="order-date">
            <CalendarDays size={19} />
            <div>
              <span>ORDER DATE</span>
              <strong>{formattedDate}</strong>
            </div>
          </div>
        </div>

        <div className="order-success-grid">
          <div className="order-success-main">
            <div className="success-detail-card">
              <div className="success-card-heading">
                <Package size={21} />
                <h2>Purchased Products</h2>
              </div>

              <div className="success-products">
                {items.map((item, index) => (
                  <div className="success-product" key={`${item.id}-${index}`}>
                    <div className="success-product-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="success-product-info">
                      <h3>{item.name}</h3>

                      <p>
                        {item.storage && item.storage !== "Standard"
                          ? `${item.storage} · `
                          : ""}
                        {item.color && item.color !== "Default"
                          ? `${item.color} · `
                          : ""}
                        Quantity: {item.quantity}
                      </p>

                      <strong>
                        {formatPrice(
                          Number(item.price) * Number(item.quantity || 1)
                        )}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="success-detail-card">
              <div className="success-card-heading">
                <MapPin size={21} />
                <h2>Delivery Address</h2>
              </div>

              <div className="success-address">
                <h3>{customer.fullName}</h3>
                <p>{customer.address}</p>

                {customer.landmark && (
                  <p>Landmark: {customer.landmark}</p>
                )}

                <p>
                  {customer.city}, {customer.state} - {customer.pincode}
                </p>

                <div className="success-contact-details">
                  <p>{customer.phone}</p>
                  <p>{customer.email}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="order-success-sidebar">
            <div className="success-detail-card">
              <div className="success-card-heading">
                <CreditCard size={21} />
                <h2>Payment Details</h2>
              </div>

              <div className="success-payment">
                <span>Payment Method</span>
                <strong>
                  {paymentLabels[order.paymentMethod] || order.paymentMethod}
                </strong>

                <span>Payment Status</span>
                <strong>
                  {order.paymentMethod === "cod"
                    ? "Pay on Delivery"
                    : "Not Processed"}
                </strong>
              </div>

              <div className="success-total-details">
                <div>
                  <span>Subtotal</span>
                  <strong>{formatPrice(order.subtotal)}</strong>
                </div>

                <div>
                  <span>Delivery Charge</span>
                  <strong>
                    {Number(order.deliveryCharge) === 0
                      ? "FREE"
                      : formatPrice(order.deliveryCharge)}
                  </strong>
                </div>

                <div className="success-grand-total">
                  <span>Total Paid / Due</span>
                  <strong>{formatPrice(order.totalAmount)}</strong>
                </div>
              </div>
            </div>

            <div className="success-delivery-card">
              <Truck size={25} />
              <div>
                <h3>Estimated Delivery</h3>
                <p>Usually within 3–5 business days.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="success-bottom-actions">
          <button
            type="button"
            className="success-shopping-btn"
            onClick={handleContinueShopping}
          >
            <ShoppingBag size={18} />
            Continue Shopping
            <ArrowRight size={17} />
          </button>

          <Link to="/" className="success-home-link">
            Back to Home
          </Link>
        </div>

        <div className="success-footer-message">
          <CheckCircle size={17} />
          <p>Thank you for shopping with iStore!</p>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
