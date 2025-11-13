"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ Import necesario
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 🔹 LOGO */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png" // ✅ Ruta correcta dentro de /public/images/
              width={40}
              height={40}
              alt="Logo FreshDesign"
              className="rounded-md"
            />
            <span className="text-2xl font-bold text-blue-600">FreshDesign</span>
          </Link>

          {/* 🔹 MENU DESKTOP */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Tienda
            </Link>
            <Link href="/productos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              Productos
            </Link>
            <Link href="/contacto" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              Contacto
            </Link>
          </div>

          {/* 🔹 ICONOS */}
          <div className="flex items-center space-x-4">
            <Link href="/carrito" className="relative">
              <AiOutlineShoppingCart size={24} className="text-gray-700 dark:text-gray-200" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>

            {/* 🔹 BOTÓN MENÚ MÓVIL */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Productos
            </Link>
            <Link
              href="/ofertas"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Ofertas
            </Link>
            <Link
              href="/contacto"
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
