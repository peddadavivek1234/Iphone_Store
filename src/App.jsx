import React from "react";
import { Routes, Route } from "react-router-dom";
import Iphones from "./pages/Iphones/Iphones";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CartProvider from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Accessories from "./pages/Accessories/Accessories";
import Offers from "./pages/Offers/Offers";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import AccessoryDetails from "./pages/AccessoryDetails/AccessoryDetails";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphones" element={<Iphones />} />
        <Route path="/accessories" element={<Accessories />}/>
        <Route path="/accessory/:id" element={<AccessoryDetails />}/>
        <Route path="/offers" element={<Offers />}/>
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/order-success" element={<OrderSuccess />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;