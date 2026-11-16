
import React, { useMemo, useState } from "react";
import {
  Search,
  ShoppingBag,
  Check,
  ArrowUpRight,
  SlidersHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Accessories.css";
import { useCart } from "../../context/CartContext";
import accessories from "../../data/accessories";

const Accessories = () => {
  const { addToCart, cartCount } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [addedProduct, setAddedProduct] = useState("");

  const categories = [
    "All",
    "AirPods",
    "Apple Watch",
    "Cases",
    "Chargers",
    "Cables"
  ];

  const filteredAccessories = useMemo(() => {
    let filtered = [...accessories];

    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === activeCategory
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "low-high") {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOption === "high-low") {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortOption === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [activeCategory, searchTerm, sortOption]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(Number(price) || 0);
  };

  const handleAddToCart = (product) => {
    addToCart(
      product,
      {
        storage: "Standard",
        color: "Default"
      },
      1
    );

    setAddedProduct(product.id);

    setTimeout(() => {
      setAddedProduct("");
    }, 1800);
  };

  return (
    <main className="accessories-page">
      <section className="accessories-hero">
        <div className="accessories-hero-content">
          <span className="accessories-eyebrow">
            COMPLETE YOUR APPLE EXPERIENCE
          </span>

          <h1>
            Accessories.
            <br />
            <span>Made to complement.</span>
          </h1>

          <p>
            Discover premium accessories designed to work beautifully
            with your Apple devices.
          </p>

          <Link to="/iphones" className="accessories-hero-btn">
            Explore iPhones
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="accessories-hero-image">
          <img
            src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=1000"
            alt="Premium wireless audio accessories"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/900x600/f5f5f7/555555?text=iStore+Accessories";
            }}
          />
        </div>
      </section>

      <section className="accessories-main">
        <div className="accessories-section-heading">
          <div>
            <span className="accessories-eyebrow">OUR COLLECTION</span>
            <h2>Explore Accessories</h2>
            <p>Find the perfect additions to your everyday technology.</p>
          </div>

          <Link to="/cart" className="accessories-cart-link">
            <ShoppingBag size={18} />
            View Cart
            <span>{cartCount}</span>
          </Link>
        </div>

        <div className="accessories-toolbar">
          <div className="accessories-search">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="accessories-sort">
            <SlidersHorizontal size={17} />

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="accessories-categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="accessories-results">
          <p>
            Showing <strong>{filteredAccessories.length}</strong> products
          </p>
        </div>

        {filteredAccessories.length > 0 ? (
          <div className="accessories-grid">
            {filteredAccessories.map((product) => (
              <article className="accessory-product-card" key={product.id}>
                <div className="accessory-product-image">
                  <Link
                    to={`/accessory/${product.id}`}
                    className="accessory-product-link"
                    aria-label={`View ${product.name} details`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          `https://placehold.co/600x600/f5f5f7/555555?text=${encodeURIComponent(product.name)}`;
                      }}
                    />
                  </Link>

                  {product.tag && (
                    <span className="accessory-product-tag">
                      {product.tag}
                    </span>
                  )}

                  <Link
                    to={`/accessory/${product.id}`}
                    className="accessory-quick-view"
                    aria-label={`View ${product.name}`}
                  >
                    <ArrowUpRight size={19} />
                  </Link>
                </div>

                <div className="accessory-product-info">
                  <span className="accessory-product-category">
                    {product.category}
                  </span>

                  <Link
                    to={`/accessory/${product.id}`}
                    className="accessory-product-name-link"
                  >
                    <h3>{product.name}</h3>
                  </Link>

                  <p className="accessory-product-description">
                    {product.subtitle}
                  </p>

                  <div className="accessory-product-bottom">
                    <strong>{formatPrice(product.price)}</strong>

                    <button
                      type="button"
                      className={`accessory-add-btn ${
                        addedProduct === product.id ? "added" : ""
                      }`}
                      onClick={() => handleAddToCart(product)}
                    >
                      {addedProduct === product.id ? (
                        <>
                          <Check size={16} />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={16} />
                          Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="accessories-no-results">
            <Search size={40} />
            <h3>No accessories found</h3>
            <p>Try another search term or select a different category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <section className="accessories-bottom-banner">
        <div>
          <span>THE iSTORE EXPERIENCE</span>
          <h2>Everything you need. All in one place.</h2>
          <p>
            Explore our collection and find accessories that complement
            your Apple devices.
          </p>
        </div>

        <Link to="/iphones">
          Shop iPhones
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Accessories;
