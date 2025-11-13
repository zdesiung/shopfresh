"use client";

import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CartContext } from "./CartContext"; // ✅ Correcto

export default function CartIcon() {
  const { cartItems } = useContext(CartContext);
  const controls = useAnimation();

  // Efecto animado cada vez que se agrega un producto
  useEffect(() => {
    if (cartItems.length > 0) {
      controls.start({
        scale: [1, 1.2, 1],
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.5 },
      });
    }
  }, [cartItems, controls]);

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/carrito" className="relative">
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.1 }}
        className="relative cursor-pointer p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
      >
        <ShoppingCart className="w-5 h-5 text-zinc-800 dark:text-white" />
        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md"
          >
            {itemCount}
          </motion.span>
        )}
      </motion.div>
    </Link>
  );
}
