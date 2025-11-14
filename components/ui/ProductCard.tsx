"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button } from "./ButtonTemp";

// ✅ Tipado estricto para las props
interface ProductCardProps {
  name: string;
  price: number | string; // admite número o texto, por seguridad
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  // ❤️ Maneja favoritos
  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

  // 🧮 Asegura que el precio se muestre correctamente aunque llegue como string
  const formattedPrice = (() => {
    const numericPrice =
      typeof price === "number" ? price : parseFloat(price.toString().replace(/[^\d.-]/g, ""));
    return isNaN(numericPrice) ? "0.00" : numericPrice.toFixed(2);
  })();

  return (
    <div
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md 
                 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* 🖼️ Imagen del producto */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority
        />

        {/* ❤️ Botón de favorito */}
        <button
          onClick={toggleFavorite}
          aria-label={isFavorited ? "Quitar de favoritos" : "Agregar a favoritos"}
          className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md 
                     hover:scale-110 transition-transform duration-200"
        >
          {isFavorited ? (
            <AiFillHeart className="text-red-500" size={22} />
          ) : (
            <AiOutlineHeart className="text-gray-500 dark:text-gray-300" size={22} />
          )}
        </button>
      </div>

      {/* 🧾 Detalles del producto */}
      <div className="p-5 flex flex-col items-start justify-between h-40">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">
            S/ {formattedPrice}
          </p>
        </div>

        {/* 🛒 Botón principal */}
        <Button
          variant="primary"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg mt-3 transition-all duration-300"
        >
          Añadir al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
