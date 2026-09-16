import React from "react";
import { CartContext } from "./cart-context";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartIds, setCartIds] = React.useState<string[]>([]);

  const addToCart = (id: string) =>
    setCartIds((ids) => (ids.includes(id) ? ids : [...ids, id]));

  const removeFromCart = (id: string) =>
    setCartIds((ids) => ids.filter((x) => x !== id));

  const clearCart = () => setCartIds([]);

  return (
    <CartContext.Provider
      value={{ cartIds, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};