import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ProductSection from "../../components/ProductSection/ProductSection";

const Home = () => {
  return (
    <main>
        <Hero />
        <ProductSection />

      <section className="home-promo">
        <div className="home-promo-container">

          <motion.div
            className="promo-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>LIMITED TIME OFFER</span>

            <h2>
              Upgrade Your World.
              <strong> Save More.</strong>
            </h2>

            <p>
              Discover amazing deals on selected iPhone models.
              Experience premium technology at exceptional prices.
            </p>

            <Link to="/offers" className="promo-btn">
              Explore Offers
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="promo-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=900"
              alt="Premium smartphone offer"
            />
          </motion.div>

        </div>
      </section>

      <section className="home-benefits">
        <div className="benefits-heading">
          <span>THE iSTORE ADVANTAGE</span>
          <h2>Shopping made better.</h2>
          <p>Premium products. Exceptional service. Every time.</p>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <Truck size={32} />
            <h3>Free Delivery</h3>
            <p>Enjoy free delivery on eligible orders.</p>
          </div>

          <div className="benefit-card">
            <ShieldCheck size={32} />
            <h3>Genuine Products</h3>
            <p>Shop with confidence and quality assurance.</p>
          </div>

          <div className="benefit-card">
            <Headphones size={32} />
            <h3>Expert Support</h3>
            <p>We are here to help whenever you need us.</p>
          </div>

          <div className="benefit-card">
            <CreditCard size={32} />
            <h3>Secure Payments</h3>
            <p>Simple and secure checkout experience.</p>
          </div>

        </div>
      </section>

      <section className="home-bottom-banner">
        <span>YOUR NEXT iPHONE AWAITS</span>
        <h2>Ready for something extraordinary?</h2>
        <p>Explore our collection and find your perfect iPhone.</p>

        <Link to="/iphones">
          Explore Collection
          <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
};

export default Home;
