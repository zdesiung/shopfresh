"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CartItem({
  id,
  name,
  image,
  price,
  quantity,
}: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncrease = () => updateQuantity(id, quantity + 1);
  const handleDecrease = () =>
    quantity > 1 ? updateQuantity(id, quantity - 1) : null;
  const handleRemove = () => removeFromCart(id);

  return (
    <motion.div
      className="flex items-center justify-between bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Imagen del producto */}
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="rounded-lg object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            {name}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            S/ {price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Controles de cantidad */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          disabled={quantity <= 1}
          className="p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          <Minus className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
        </button>

        <span className="text-sm font-medium w-6 text-center text-zinc-800 dark:text-white">
          {quantity}
        </span>

        <button
          onClick={handleIncrease}
          className="p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          <Plus className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
        </button>
      </div>

      {/* Botón eliminar */}
      <motion.button
        onClick={handleRemove}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 bg-red-100 dark:bg-red-900/40 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition"
      >
        <Trash2 className="w-4 h-4 text-red-500" />
      </motion.button>
    </motion.div>
  );
}
