"use client";

import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CartContext } from "./CartContext";
import { ShoppingBag } from "lucide-react";

export default function CartSummary() {
  const { cartItems, clearCart } = useContext(CartContext);

  // Calcular subtotal y total
  const subtotal = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems],
  );

  const total = useMemo(() => subtotal, [subtotal]); // puedes agregar impuestos o envío aquí

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="text-center py-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ShoppingBag className="mx-auto w-10 h-10 text-zinc-400 mb-2" />
        <p className="text-zinc-600 dark:text-zinc-400">
          Tu carrito está vacío.
        </p>
        <Link
          href="/tienda"
          className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-lg transition"
        >
          Ir a la tienda
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
        Resumen del Pedido
      </h2>

      <div className="border-t border-zinc-200 dark:border-zinc-700 pt-3 text-sm">
        <div className="flex justify-between py-2">
          <span className="text-zinc-500 dark:text-zinc-400">Subtotal</span>
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            S/ {subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-500 dark:text-zinc-400">Envío</span>
          <span className="text-zinc-500 dark:text-zinc-400">Gratis</span>
        </div>
        <div className="flex justify-between py-2 border-t border-zinc-200 dark:border-zinc-700 mt-2 pt-2">
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            Total
          </span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
            S/ {total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/checkout"
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 px-5 rounded-lg text-center"
        >
          Proceder al pago
        </Link>
        <button
          onClick={clearCart}
          className="flex-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition text-zinc-800 dark:text-white font-semibold py-2 px-5 rounded-lg"
        >
          Vaciar carrito
        </button>
      </div>
    </motion.div>
  );
}
