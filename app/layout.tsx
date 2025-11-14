import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

// 🌍 Componentes globales
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ChatbotAI from "@/components/chatbot/chatbotAI";

// 🛒 Carrito
import CartProvider from "@/components/cart/CartContext";

// 🪶 Fuentes locales
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
    "Descubre la nueva generación de moda urbana. Diseños exclusivos, pagos rápidos con Yape, Plin o tarjeta.",
  metadataBase: new URL("https://masterdesign.pe"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        {/* Script CULQI correctamente integrado */}
        <Script
          src="https://checkout.culqi.com/js/v4"
          strategy="afterInteractive"
        />

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
