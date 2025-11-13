"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CreditCard } from "lucide-react";

// Función simulada: en producción se conecta con el endpoint de tu API o Culqi
async function processCulqiPayment(data: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.cardNumber.startsWith("4")) resolve({ status: "ok" });
      else reject({ message: "Tarjeta rechazada. Intenta con otra." });
    }, 2000);
  });
}

export default function CulqiForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await processCulqiPayment({
        cardNumber,
        expiry,
        cvv,
        name,
      });

      if (response.status === "ok") {
        setMessage("✅ Pago realizado con éxito. ¡Gracias por tu compra!");
      }
    } catch (err: any) {
      setMessage(`❌ ${err.message || "Error al procesar el pago"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto border border-zinc-200 dark:border-zinc-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
        <CreditCard className="w-5 h-5 text-indigo-500" /> Pago con Tarjeta
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Nombre completo
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Número de tarjeta
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
            placeholder="1234 5678 9012 3456"
            className="w-full mt-1 p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Fecha Exp.
            </label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              maxLength={5}
              placeholder="MM/AA"
              className="w-full mt-1 p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="w-24">
            <label className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              CVV
            </label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength={4}
              placeholder="***"
              className="w-full mt-1 p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: 0.97 }}
          className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" /> Procesando...
            </>
          ) : (
            "Pagar ahora"
          )}
        </motion.button>
      </form>

      {message && (
        <motion.p
          className={`mt-4 text-center text-sm ${
            message.includes("✅") ? "text-green-600" : "text-red-500"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
}
