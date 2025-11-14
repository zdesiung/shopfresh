"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// 🧩 Tipo de producto en el carrito
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

// 🧠 Tipo que manejará el contexto
interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

// 🔧 Crear contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// 🧾 Provider global
export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart_items");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(items));
  }, [items]);

  // ➕ Agregar
  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  // ❌ Eliminar
  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Vaciar carrito
  const clearCart = () => setItems([]);

  // 🧮 Totales
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 🔥 Hook global
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
};
