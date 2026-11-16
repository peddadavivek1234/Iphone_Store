import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-label">
            THE NEW GENERATION IS HERE
          </span>

          <h1>
            iPhone 17 Pro.
            <span> Beyond Powerful.</span>
          </h1>

          <p>
            Experience the next level of innovation with incredible
            performance, advanced cameras and a stunning design.
          </p>

          <div className="hero-buttons">
            <Link to="/iphones" className="hero-primary-btn">
              Buy Now
              <ArrowRight size={18} />
            </Link>

            <Link to="/iphones" className="hero-secondary-btn">
              Explore iPhone
            </Link>
          </div>

          <div className="hero-features">
            <div>
              <strong>256GB</strong>
              <span>Starting Storage</span>
            </div>

            <div>
              <strong>Pro</strong>
              <span>Performance</span>
            </div>

            <div>
              <strong>5G</strong>
              <span>Connectivity</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-image-circle"></div>

          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000"
            alt="Premium smartphone"
          />

          <div className="hero-image-text">
            <span>iPhone 17 Pro</span>
            <strong>Built for the extraordinary.</strong>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
