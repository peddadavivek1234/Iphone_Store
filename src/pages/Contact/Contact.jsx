
import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>WE'RE HERE TO HELP</span>

          <h1>
            Let's start a
            <br />
            <span>conversation.</span>
          </h1>

          <p>
            Have questions about our products, orders or services?
            Our team is ready to help you with anything you need.
          </p>

          <a href="#contact-form" className="contact-hero-button">
            Contact Us <ArrowRight size={18} />
          </a>
        </div>

        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000"
            alt="Customer support team"
          />
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-info">
          <span className="contact-small-heading">GET IN TOUCH</span>

          <h2>We'd love to hear from you.</h2>

          <p className="contact-info-description">
            Whether you need product information, order assistance
            or technical support, feel free to reach out.
          </p>

          <div className="contact-info-list">
            <a href="mailto:support@istore.com" className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={21} />
              </div>

              <div>
                <h3>Email Us</h3>
                <p>support@istore.com</p>
              </div>
            </a>

            <a href="tel:+911234567890" className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={21} />
              </div>

              <div>
                <h3>Call Us</h3>
                <p>+91 12345 67890</p>
              </div>
            </a>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={21} />
              </div>

              <div>
                <h3>Visit Our Store</h3>
                <p>Vijayawada, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Clock size={21} />
              </div>

              <div>
                <h3>Business Hours</h3>
                <p>Monday – Saturday: 10 AM – 8 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-social-section">
            <h3>Follow Us</h3>

            <div className="contact-social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <span className="social-instagram">◎</span>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <span className="social-facebook">f</span>
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <span className="social-twitter">𝕏</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container" id="contact-form">
          <div className="contact-form-heading">
            <span>SEND US A MESSAGE</span>
            <h2>How can we help?</h2>
            <p>Fill out the form below and we'll get back to you.</p>
          </div>

          {submitted && (
            <div className="contact-success-message">
              <CheckCircle size={21} />
              <span>
                Your message has been submitted successfully!
              </span>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-input-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-input-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9+() -]{7,20}"
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Order Support">Order Support</option>
                  <option value="Returns and Refunds">Returns and Refunds</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-button">
              Send Message <Send size={17} />
            </button>
          </form>
        </div>
      </section>

      <section className="contact-bottom-banner">
        <div>
          <span>NEED PRODUCT ASSISTANCE?</span>
          <h2>We're always happy to help.</h2>
          <p>
            Explore our collection and discover your next favourite device.
          </p>
        </div>

        <a href="/iphones">
          Explore iPhones <ArrowRight size={18} />
        </a>
      </section>
    </div>
  );
};

export default Contact;
