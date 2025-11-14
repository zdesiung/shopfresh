import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// 🌍 Componentes globales
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ChatbotAI from "@/components/chatbot/chatbotAI";

// 🛒 Carrito (ruta corregida — AJÚSTALA si tu archivo está en /ui/)
import CartProvider from "@/components/cart/CartContext";

// 🪶 Fuentes locales optimizadas
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

// 🧠 Metadatos SEO
export const metadata: Metadata = {
  title: {
    default: "Fresh Design Store | Moda & Estilo",
    template: "%s | Fresh Design Store",
  },
  description:
    "Descubre la nueva generación de moda urbana. Diseños exclusivos, pagos rápidos con Yape, Plin o tarjeta. Desarrollado con Next.js, Tailwind y Strapi.",
  keywords: [
    "tienda online",
    "ecommerce",
    "moda urbana",
    "ropa streetwear",
    "yape",
    "plin",
    "culqi",
    "compras Perú",
    "Next.js e-commerce",
  ],
  authors: [{ name: "Master Design", url: "https://masterdesign.pe" }],
  openGraph: {
    title: "Fresh Design Store | Moda & Estilo",
    description:
      "Compra ropa urbana exclusiva y moderna. Pagos rápidos con Yape, Plin y tarjeta.",
    url: "https://masterdesign.pe",
    siteName: "Fresh Design Store",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/bannerone.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh Design Store Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Design Store",
    description:
      "Moda urbana premium con diseño exclusivo. Pagos rápidos y seguros.",
    images: ["/images/bannerone.jpg"],
    creator: "@masterdesign",
  },
  metadataBase: new URL("https://masterdesign.pe"),
  robots: {
    index: true,
    follow: true,
  },
};

// 🏗️ Layout global de la aplicación
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        {/* 🛒 Provider global del carrito */}
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ChatbotAI />
        </CartProvider>
      </body>
    </html>
  );
}
