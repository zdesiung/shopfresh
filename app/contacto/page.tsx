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
import { Button } from "@/components/ui/Button";
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

      {/* 📍 Sección de Contacto */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contáctanos</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Si deseas comunicarte con nosotros, puedes visitarnos o escribirnos
            directamente. ¡Estaremos encantados de atenderte!
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-4">
              <p className="text-lg text-gray-700">
                📍 <strong>Dirección:</strong> Lima, Perú — Distrito de Ate
                Vitarte
              </p>
              <p className="text-lg text-gray-700">
                📞 <strong>Teléfono:</strong> +51 968 108 836
              </p>
              <p className="text-lg text-gray-700">
                ✉️ <strong>Email:</strong> contacto@freshdesign.pe
              </p>
              <div className="flex space-x-4 mt-4">
                {[FaFacebookF, FaInstagram, FaYoutube, FaTiktok].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-3 bg-gray-800 text-white rounded-full hover:bg-blue-600 transition"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.813682663027!2d-76.947342!3d-12.015232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c65b2f2e9e6d%3A0x3d373f89aafc774!2sAte%20Vitarte%2C%20Lima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1697472189284!5m2!1ses!2spe"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
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
