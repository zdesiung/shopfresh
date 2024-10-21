// Importaciones para el Swiper
import Image from 'next/image';
import Link from 'next/link';
import Button from "@/components/ui/button";
import { ShoppingCart, Heart, User } from 'lucide-react';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Barra de navegación */}
      <nav className="bg-white shadow"> {/* Corregido "shad" a "shadow" */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  alt="Logo de FreshDesign"
                  className="logo-image"
                />
                <span className="ml-2 text-xl font-bold">FreshDesign</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/tienda" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Tienda
                </Link>
                <Link href="/nosotros" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Nosotros
                </Link>
                <Link href="/contacto" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sección Hero */}
      <section className="relative h-[600px]">
        <Image
          src="/bannertwo.jpg" 
          layout="fill" 
          objectFit="cover"
          alt="Imagen Hero"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a FreshDesign</h1>
            <p className="text-xl text-white mb-8">Descubre nuestra última colección de polos premium</p>
            <Button size="lg">Comprar Ahora</Button>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/wxF7GEC-cZLxxpQYk9LRPvY2UYhRdB1RM76oyu.jpeg",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/R7839TL-sUF494G2SUDAo1QYsdPt6uyjNvVfUl.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/LwIOQ9a-cIP4IwvDn6XSjPSNutYFQMp8nxbkyQ.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/r2S4rcf-fmq5uynRA0MTKr4hwDatoxVCPNqNUG.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/wxF7GEC-cZLxxpQYk9LRPvY2UYhRdB1RM76oyu.jpeg",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/R7839TL-sUF494G2SUDAo1QYsdPt6uyjNvVfUl.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/LwIOQ9a-cIP4IwvDn6XSjPSNutYFQMp8nxbkyQ.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/r2S4rcf-fmq5uynRA0MTKr4hwDatoxVCPNqNUG.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/wxF7GEC-cZLxxpQYk9LRPvY2UYhRdB1RM76oyu.jpeg",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/R7839TL-sUF494G2SUDAo1QYsdPt6uyjNvVfUl.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/LwIOQ9a-cIP4IwvDn6XSjPSNutYFQMp8nxbkyQ.png",
              "https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/r2S4rcf-fmq5uynRA0MTKr4hwDatoxVCPNqNUG.png"
            ].map((src, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image
                  src={src}
                  width={300}
                  height={300}
                  alt={`Producto ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Polo Clásico</h3>
                  <p className="text-gray-600 mb-4">S/ 199.99</p>
                  <div className="flex justify-between">
                    <Button size="sm">Añadir al Carrito</Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suscripción al Boletín */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Suscríbete a Nuestro Boletín</h2>
            <p className="text-xl text-white mb-8">Recibe las últimas actualizaciones sobre nuevos productos y promociones especiales</p>
            <form className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit" className="rounded-l-none">Suscribirse</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
              <p className="text-gray-400">FreshDesigns es tu destino para polos premium y accesorios de calidad.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tienda" className="text-gray-400 hover:text-white">Tienda</Link>
                </li>
                <li>
                  <Link href="/nosotros" className="text-gray-400 hover:text-white">Nosotros</Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-400 hover:text-white">Contacto</Link>
                </li>
                <li>
                  <Link href="/preguntas-frecuentes" className="text-gray-400 hover:text-white">Preguntas Frecuentes</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Conéctate con Nosotros</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.047 1.024.06 1.378.06 3.808s-.013 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.047-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.526C6.086 2.28 6.813 2.11 7.877 2.06 8.901 2.013 9.256 2 11.685 2h.63zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 2.44a3.722 3.722 0 110 7.444 3.722 3.722 0 010-7.444zM18.406 7.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.947 8.305a8.904 8.904 0 01-2.577.705 4.512 4.512 0 001.98-2.491 8.982 8.982 0 01-2.837 1.091 4.502 4.502 0 00-7.67 4.1 12.785 12.785 0 01-9.288-4.71 4.502 4.502 0 001.393 6.01 4.443 4.443 0 01-2.037-.562v.056a4.505 4.505 0 003.61 4.416 4.54 4.54 0 01-2.029.077 4.505 4.505 0 004.21 3.13 9.024 9.024 0 01-5.602 1.933 12.778 12.778 0 006.919 2.03c8.305 0 12.84-6.877 12.84-12.84 0-.195-.005-.39-.014-.584a9.184 9.184 0 002.257-2.347z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
