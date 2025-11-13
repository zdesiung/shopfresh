// components/ui/card.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, price }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={500} // Ajusta el ancho según tus necesidades
        height={400} // Ajusta la altura según tus necesidades
        className="w-full h-64 object-cover mb-4"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
