"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

const banners = [
  {
    id: 1,
    image: "/images/bannerone.jpg",
    title: "Colección Primavera 2025",
    subtitle: "Moda urbana con estilo exclusivo",
  },
  {
    id: 2,
    image: "/images/banner2.jpg",
    title: "Diseños Oversized",
    subtitle: "Comodidad y tendencia en una sola prenda",
  },
  {
    id: 3,
    image: "/images/banner3.jpg",
    title: "Royal Luxe Edition",
    subtitle: "La elegancia del streetwear moderno",
  },
];

export default function Banner() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        className="flex flex-col md:flex-row w-full h-[90vh] relative"
      >
        {banners.map((banner) => (
          <motion.div
            key={banner.id}
            variants={fadeUp}
            className="relative w-full h-full flex-shrink-0"
          >
            {/* Imagen con efecto parallax */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover brightness-[0.65]"
                priority
              />
            </motion.div>

            {/* Capa de contenido */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
              >
                {banner.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-200 max-w-2xl"
              >
                {banner.subtitle}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-white text-black rounded-2xl shadow-md hover:bg-gray-100 transition font-medium"
              >
                Ver colección
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Efecto de movimiento continuo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
