import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";

import "./Iphones.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

const categories = [
  "All",
  "Standard",
  "Pro",
  "Pro Max",
  "Mini",
  "Plus",
  "SE Series",
  "e Series",
  "Air",
  "Foldable"
];

const Iphones = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortOrder === "low-high") {
      result = [...result].sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      });
    }

    if (sortOrder === "high-low") {
      result = [...result].sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
      });
    }

    if (sortOrder === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [searchTerm, selectedCategory, sortOrder]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortOrder("default");
  };

  return (
    <main className="iphones-page">

      <motion.section
        className="iphones-hero"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="iphones-hero-label">
          THE COMPLETE COLLECTION
        </span>

        <h1>Find Your Perfect iPhone.</h1>

        <p>
          Explore our complete collection of iPhones.
          Discover the model that matches your lifestyle.
        </p>
      </motion.section>

      <section className="iphones-catalog">

        <div className="iphones-catalog-heading">
          <div>
            <span>OUR COLLECTION</span>
            <h2>All iPhones</h2>
          </div>

          <div className="iphones-count">
            {filteredProducts.length} Products
          </div>
        </div>

        <div className="iphones-toolbar">

          <div className="iphones-search">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search iPhone models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="iphones-sort">
            <SlidersHorizontal size={18} />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              aria-label="Sort products"
            >
              <option value="default">Default Sorting</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

        </div>

        <div className="iphones-categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="iphones-results-heading">
          <p>
            Showing <strong>{filteredProducts.length}</strong> iPhone models
          </p>

          {(searchTerm || selectedCategory !== "All" || sortOrder !== "default") && (
            <button
              type="button"
              className="clear-filters"
              onClick={clearFilters}
            >
              Clear Filters <X size={15} />
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div
            className="iphones-product-grid"
            layout
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </motion.div>
        ) : (
          <div className="iphones-empty">
            <Search size={45} />
            <h3>No iPhones Found</h3>
            <p>
              We couldn't find any iPhone matching your search.
            </p>

            <button onClick={clearFilters}>
              View All iPhones
            </button>
          </div>
        )}

      </section>

    </main>
  );
};

export default Iphones;
