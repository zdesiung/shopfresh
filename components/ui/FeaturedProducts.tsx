"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard"; // ✅ Asegúrate de que esta ruta sea correcta

// 🧠 Tipado para los props (ideal para TypeScript)
interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

interface FeaturedProductsProps {
  productos: Product[];
}

/**
 * 💎 Sección de productos destacados con animaciones fluidas
 * Ideal para el home del e-commerce moderno
 */
const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ productos }) => {
  // 🎞️ Variantes de animación para el contenedor e ítems
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Productos Destacados
        </motion.h2>

        {/* 🧩 Grid de productos con animaciones */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {productos.map((producto) => (
            <motion.div key={producto.id} variants={itemVariants}>
              <ProductCard
                name={producto.name}
                price={producto.price}
                image={producto.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
