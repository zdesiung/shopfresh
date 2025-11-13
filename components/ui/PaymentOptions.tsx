"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, QrCode } from "lucide-react";
import CulqiForm from "../payments/CulqiForm";
import YapeQR from "../payments/YapeQR";
import PlinQR from "../payments/PlinQR";

const paymentMethods = [
  {
    id: "card",
    name: "Tarjeta (Culqi)",
    icon: CreditCard,
    description: "Paga con tarjeta de crédito o débito de forma segura.",
  },
  {
    id: "yape",
    name: "Yape",
    icon: Smartphone,
    description: "Escanea el código QR desde tu app Yape.",
  },
  {
    id: "plin",
    name: "Plin",
    icon: QrCode,
    description: "Paga rápidamente escaneando el QR con Plin.",
  },
];

export default function PaymentOptions() {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");

  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-5">
        Métodos de Pago
      </h2>

      {/* Selección de método */}
      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition 
              ${
                selectedMethod === method.id
                  ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  : "border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}
          >
            <method.icon className="w-5 h-5" />
            <span className="font-medium">{method.name}</span>
          </button>
        ))}
      </div>

      {/* Descripción */}
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        {paymentMethods.find((m) => m.id === selectedMethod)?.description}
      </p>

      {/* Vista dinámica */}
      <motion.div
        key={selectedMethod}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-4"
      >
        {selectedMethod === "card" && <CulqiForm />}
        {selectedMethod === "yape" && <YapeQR />}
        {selectedMethod === "plin" && <PlinQR />}
      </motion.div>
    </motion.div>
  );
}
clear;
