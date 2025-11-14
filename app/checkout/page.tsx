"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";
import { generateQRCode } from "../lib/payments";

const paymentMethods = ["card", "yape", "plin"] as const;
type PaymentMethod = typeof paymentMethods[number];

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  // Inicializar Culqi
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.Culqi.publicKey = process.env.NEXT_PUBLIC_CULQI_PUBLIC_KEY;
    }
  }, []);

  // Callback de Culqi
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.culqi = async () => {
        // @ts-ignore
        if (Culqi.token) {
          const token = Culqi.token.id;
          const email = Culqi.token.email;

          const res = await fetch("/api/culqi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              amount: totalPrice,
              token,
            }),
          });

          const data = await res.json();

          if (data.success && data.charge) {
            setSuccess(true);
            clearCart();
          } else {
            alert(data.message || "Error en el pago");
          }
        }
      };
    }
  }, [totalPrice, clearCart]);

  const handlePayment = async () => {
    setLoading(true);
    setSuccess(false);

    try {
      if (method === "card") {
        // @ts-ignore
        Culqi.settings({
          title: "Lutex VTop",
          currency: "PEN",
          description: "Pago de compra",
          amount: Math.round(totalPrice * 100),
        });

        // @ts-ignore
        Culqi.open();
        return;
      }

      const qr = generateQRCode(method, totalPrice);
      setQrUrl(qr);
    } catch (error) {
      console.error("Error procesando pago:", error);
      alert("Error procesando pago");
    } finally {
      setLoading(false);
    }
  };

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">🛒 Tu carrito está vacío</h2>
        <a href="/tienda" className="bg-blue-600 text-white px-4 py-2 rounded">
          Ir a la tienda
        </a>
      </div>
    );
  }

  if (success) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-green-600">
          ✔ ¡Pago realizado con éxito!
        </h2>
        <p>Gracias por tu compra.</p>
        <a
          href="/tienda"
          className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded"
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
        {/* Resumen */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Resumen del pedido</h3>

          {items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>S/ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="border-t pt-2 font-bold flex justify-between">
            <span>Total</span>
            <span>S/ {totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Método de pago</h3>

          <div className="space-y-2">
            {paymentMethods.map((m) => (
              <label key={m} className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === m}
                  onChange={() => {
                    setMethod(m);
                    setQrUrl(null);
                  }}
                />
                {m === "card"
                  ? "Tarjeta (Visa/Mastercard)"
                  : m === "yape"
                  ? "Yape (QR)"
                  : "Plin (QR)"}
              </label>
            ))}
          </div>

          {qrUrl && (
            <div className="mt-4 text-center">
              <p className="font-medium mb-2">
                Escanea para pagar con {method.toUpperCase()}
              </p>

              <Image
                src={qrUrl}
                alt="QR pago"
                width={240}
                height={240}
                className="mx-auto border p-2 rounded shadow"
              />
            </div>
          )}

          {!qrUrl && (
            <button
              disabled={loading}
              onClick={handlePayment}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading
                ? "Procesando..."
                : method === "card"
                ? "Pagar con tarjeta"
                : method === "yape"
                ? "Generar QR Yape"
                : "Generar QR Plin"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
