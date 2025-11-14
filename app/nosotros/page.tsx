"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/ButtonTemp";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";

// 🖼️ Carrusel
const carouselImages = [
  "/images/bannerone.jpg",
  "/images/bannerthree.jpg",
  "/images/bannertwo.jpg",
];

// 📱 WhatsApp
const whatsappLink = "https://wa.me/+51968108836";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔁 Auto cambio del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );

  // 🎬 Variantes de animación
  const slideVariants = {
    enter: { opacity: 0, scale: 1.05, x: 50 },
    center: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2 } },
    exit: { opacity: 0, scale: 0.98, x: -50, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* 🧭 Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
               src="/images/logo.png"
              width={32}
              height={32}
              alt="Logo FreshDesign"
            />
            <span className="text-xl font-bold text-gray-800">FreshDesign</span>
          </Link>
          <div className="hidden sm:flex space-x-8">
            {["Tienda", "Nosotros", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-black text-sm font-medium transition"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            {[ShoppingCart, Heart, User].map((Icon, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                aria-label={Icon.name}
              >
                <Icon className="h-5 w-5 text-gray-700" />
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* 🎞️ Carrusel animado */}
      <section className="relative h-[600px] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentSlide]}
              fill
              className="object-cover brightness-90"
              alt={`Slide ${currentSlide + 1}`}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Texto con animación */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
          >
            Bienvenido a FreshDesign
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="text-lg md:text-xl text-gray-200 mb-6"
          >
            Descubre nuestra última colección de polos premium
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-transform hover:scale-105"
            >
              Comprar Ahora
            </Button>
          </motion.div>
        </motion.div>

        {/* Botones de control */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition"
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </section>

      {/* 👇 Nueva sección “Sobre Nosotros” */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 mb-8">
            En <strong>FreshDesign</strong>, creemos que la moda es una forma de
            expresión. Creamos polos exclusivos con identidad moderna,
            inspirados en el arte urbano y la calidad premium.
          </p>
          <Image
            src="/images/bannerone.jpg"
            alt="Sobre Nosotros"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg mx-auto object-cover"
          />
          <p className="text-gray-600 mt-8">
            Cada diseño cuenta una historia — desde la inspiración hasta la
            confección, trabajamos para ofrecer prendas con estilo y propósito.
          </p>
        </div>
      </section>

      {/* ✉️ Newsletter */}
      <section className="bg-blue-600 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">
            Suscríbete a Nuestro Boletín
          </h2>
          <p className="text-gray-200 mb-6">
            Recibe las últimas actualizaciones sobre nuevos productos y
            promociones exclusivas.
          </p>
          <form className="flex max-w-md mx-auto rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
              required
            />
            <Button type="submit" className="rounded-none">
              Suscribirse
            </Button>
          </form>
        </div>
      </section>

      {/* ⚓ Footer */}
      <footer className="bg-gray-800 text-gray-400 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Sobre Nosotros
            </h3>
            <p>
              FreshDesign es tu destino para polos premium y estilo moderno.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {["Tienda", "Nosotros", "Contacto", "Preguntas Frecuentes"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-white transition"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-3">
              {[
                FaFacebookF,
                FaYoutube,
                FaInstagram,
                FiX,
                FaPinterestP,
                FaTiktok,
              ].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="bg-black/40 p-3 rounded-full hover:bg-blue-500 transition"
                >
                  <Icon className="text-white w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* 💬 Botón WhatsApp */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-2xl bg-green-500 text-white"
        aria-label="Contáctanos por WhatsApp"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, -5, 5, 0],
          boxShadow: [
            "0 0 10px rgba(34,197,94,0.4)",
            "0 0 20px rgba(34,197,94,0.6)",
            "0 0 10px rgba(34,197,94,0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="text-white w-7 h-7" />
      </motion.a>
    </div>
  );
}
