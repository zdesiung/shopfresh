
     // components/Slider.js
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: '/bannertwo.jpg',
      title: 'Bienvenido a la FreshDesign',
      description: 'Descubre nuestra última colección de polos premium',
    },
    {
      id: 2,
      image: '/bannerone.jpg',
      title: 'Estilo y Confort',
      description: 'Encuentra la ropa perfecta para cada ocasión',
    },
    {
      id: 3,
      image: '/bannerthree.jpg',
      title: 'Calidad Garantizada',
      description: 'Ropa de alta calidad a precios accesibles',
    },
  ];

  return (
    <section className="relative h-[600px]">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <Image
                src={slide.image}
                layout="fill"
                objectFit="cover"
                alt={`Imagen Hero ${slide.title}`}
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <Button size="lg">Comprar Ahora</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
