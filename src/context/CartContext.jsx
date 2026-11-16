import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import products from "../data/products";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

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

const getUpdatedCart = () => {
  try {
    const savedCart = localStorage.getItem("iphoneStoreCart");

    if (!savedCart) return [];

    const parsedCart = JSON.parse(savedCart);

    if (!Array.isArray(parsedCart)) return [];

    return parsedCart.map((item) => {
      const latestProduct = products.find(
        (product) => String(product.id) === String(item.id)
      );

      if (!latestProduct) return item;

      return {
        ...item,
        ...latestProduct,
        cartItemId: item.cartItemId,
        storage: item.storage,
        color: item.color,
        quantity: Number(item.quantity || 1)
      };
    });
  } catch {
    return [];
  }
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getUpdatedCart);

  useEffect(() => {
    localStorage.setItem("iphoneStoreCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, options, quantity = 1) => {
    const cartItemId = `${product.id}-${options.storage}-${options.color}`;

    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.cartItemId === cartItemId
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.cartItemId === cartItemId
            ? {
                ...item,
                ...product,
                quantity: Number(item.quantity) + Number(quantity)
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...product,
          cartItemId,
          storage: options.storage,
          color: options.color,
          quantity: Number(quantity)
        }
      ];
    });
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) => item.cartItemId !== cartItemId
      )
    );
  };

  const updateQuantity = (cartItemId, quantity) => {
    const newQuantity = Number(quantity);

    if (!Number.isFinite(newQuantity) || newQuantity < 1) {
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total +
      getNumericPrice(item.price) * Number(item.quantity || 0),
    0
  );

  const hasUnpricedItems = cartItems.some(
    (item) => getNumericPrice(item.price) <= 0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        hasUnpricedItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
