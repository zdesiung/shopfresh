"use client";
import React, { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import { payWithCard, generateQRCode } from "../lib/payments";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [method, setMethod] = useState<"card" | "yape" | "plin">("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  // 🧾 Evita continuar si el carrito está vacío
  if (!cart || cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">🛒 Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-4">
          Agrega productos antes de proceder al pago.
        </p>
        <a
          href="/tienda"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ir a la tienda
        </a>
      </div>
    );
  }

  const handlePayment = async () => {
    setLoading(true);
    try {
      if (method === "card") {
        // ⚙️ Aquí se integrará Culqi, Stripe, etc.
        const fakeToken = "tok_test_123"; // token simulado
        await payWithCard(fakeToken, Math.round(total * 100)); // centavos si la API lo requiere
      } else {
        // 📱 Genera QR para Yape o Plin
        const qr = generateQRCode(method, total);
        setQrUrl(qr);
        return; // detener flujo aquí, no marcar como "success" hasta que se confirme
      }

      // ✅ Pago exitoso
      setSuccess(true);
      clearCart();
    } catch (err: any) {
      console.error("Error en el pago:", err);
      alert("Error en el pago: " + (err?.message || "Intenta de nuevo"));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          ✅ ¡Pago exitoso!
        </h2>
        <p className="text-gray-700">
          Gracias por tu compra. Recibirás un correo con la confirmación.
        </p>
        <a
          href="/tienda"
          className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Volver a la tienda
        </a>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">🧾 Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 🛍️ Resumen de pedido */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Resumen</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>S/ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between border-t pt-2 font-bold">
            <span>Total</span>
            <span>S/ {total.toFixed(2)}</span>
          </div>
        </div>

        {/* 💳 Métodos de pago */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Método de pago</h3>

          <div className="space-y-2">
            {["card", "yape", "plin"].map((m) => (
              <label key={m} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === m}
                  onChange={() => {
                    setMethod(m as "card" | "yape" | "plin");
                    setQrUrl(null);
                    setSuccess(false);
                  }}
                />
                {m === "card"
                  ? "Tarjeta de crédito / débito"
                  : m === "yape"
                  ? "Yape (QR)"
                  : "Plin (QR)"}
              </label>
            ))}
          </div>

          {qrUrl && (
            <div className="mt-4 text-center">
              <p className="mb-2 font-medium text-gray-700">
                Escanea este código para pagar con {method.toUpperCase()}:
              </p>
              <img
                src={qrUrl}
                alt={`QR ${method}`}
                className="mx-auto border p-2 rounded-lg shadow-md"
              />
              <p className="text-gray-500 text-sm mt-2">
                Esperando confirmación...
              </p>
            </div>
          )}

          {!qrUrl && (
            <button
              disabled={loading}
              onClick={handlePayment}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Procesando..." : "Pagar ahora"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
