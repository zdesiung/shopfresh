import { useState } from 'react';
import Image from 'next/image';
import { Button } from './Button'; // Asegúrate de que la ruta de importación sea correcta

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/bannertwo.jpg",
    "/bannerone.jpg",
    "/bannerthree.jpg"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative h-[600px]">
      <div className="relative w-full h-full transition-transform duration-500 ease-in-out">
        <Image
          src={images[currentIndex]}
          fill
          alt={`Imagen ${currentIndex + 1}`}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a la FreshDesign</h1>
            <p className="text-xl text-white mb-8">Descubre nuestra última colección de polos premium</p>
            <Button size="lg">Comprar Ahora</Button>
          </div>
        </div>
      </div>
      <button
        onClick={handlePrev}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        ⬅️
      </button>
      <button
        onClick={handleNext}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        ➡️
      </button>
      {/* Indicadores de posición (opcional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
