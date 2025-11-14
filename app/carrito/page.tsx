"use client";

import { useCart } from "@/components/ui/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function CarritoPage() {
  // 🟢 items ES TU "cart"
  const { items: cart, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">🛒 Tu Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Tu carrito está vacío 😔</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image ?? "/placeholder.png"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <p className="text-xl font-semibold mb-4">Total: ${totalPrice.toFixed(2)}</p>

            <Button onClick={clearCart} variant="outline" className="mr-3">
              Vaciar Carrito
            </Button>

            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Finalizar Compra
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
