"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, Smartphone } from "lucide-react";

export default function PlinQR() {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 2500); // Simula confirmación después de 2.5s
  };

  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 w-full max-w-md mx-auto text-center shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center justify-center gap-2 mb-3">
        <Smartphone className="text-indigo-500 w-5 h-5" /> Pago con Plin
      </h2>

      {!confirmed ? (
        <>
          <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm">
            Escanea el código QR con tu app <b>Plin</b> para realizar el pago.
          </p>

          <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl inline-block mb-5">
            <Image
              src="/icons/plin.png"
              alt="Plin QR"
              width={180}
              height={180}
              className="rounded-lg select-none"
              priority
            />
          </div>

          <motion.button
            onClick={handleConfirmPayment}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 px-5 rounded-lg flex items-center justify-center gap-2 mx-auto"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Verificando...
              </>
            ) : (
              "He realizado el pago"
            )}
          </motion.button>
        </>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CheckCircle className="w-14 h-14 text-green-500 mb-3" />
          <h3 className="text-lg font-medium text-green-600 dark:text-green-400">
            ¡Pago confirmado!
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Gracias por tu compra con <b>Plin</b>.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
