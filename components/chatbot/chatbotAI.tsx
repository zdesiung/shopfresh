"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { chatbotResponses, defaultResponse } from "./chatbotConfig";

interface Message {
  from: "user" | "bot";
  text: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function ChatbotAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "👋 ¡Hola! Soy Alexa, tu asistente virtual de Master Design 🛍️. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentBotText, setCurrentBotText] = useState("");
  const [useAvatar2, setUseAvatar2] = useState(true);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, currentBotText]);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("chatbot_messages", JSON.stringify(messages));
  }, [messages]);

  // Cargar historial al inicio
  useEffect(() => {
    const saved = localStorage.getItem("chatbot_messages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  // ✉️ Envío de mensaje del usuario
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input.toLowerCase().trim();
    setInput("");
    setIsTyping(true);

    await delay(700); // Pequeña pausa para efecto natural

    const match = chatbotResponses.find((r) =>
      userInput.includes(r.trigger.toLowerCase())
    );

    const fullResponse = match ? match.reply : defaultResponse;

    // Mostrar efecto de escritura gradual del bot
    await simulateTyping(fullResponse);
  };

  // 💬 Simula escritura del bot letra por letra
  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    setCurrentBotText("");
    setIsSpeaking(true);

    for (let i = 0; i < text.length; i++) {
      setCurrentBotText((prev) => prev + text[i]);
      await delay(18); // velocidad de escritura
    }

    setMessages((prev) => [...prev, { from: "bot", text }]);
    setCurrentBotText("");
    setIsTyping(false);
    setIsSpeaking(false);
  };

  return (
    <>
      {/* 🔘 Botón flotante */}
      {!isOpen && (
        <motion.button
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* 💬 Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.35 }}
            style={{
              maxHeight: "75vh", // 🔹 limita altura total a 75% del viewport
              height: "480px", // 🔹 altura estándar del chat
            }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 z-50 flex flex-col overflow-hidden"
          >
            {/* 🧠 Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 relative">
              <div className="flex items-center gap-3">
                {/* 👩 Avatar animado */}
                <motion.div
                  className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md"
                  animate={{ scale: [1, 1.02, 1], y: [0, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  <motion.img
                    src={
                      useAvatar2
                        ? "/images/avatar2.png"
                        : "/images/avatar2.png"
                    }
                    alt="Asistente Virtual Alexa"
                    className="w-full h-full object-cover"
                    animate={{
                      opacity: [1, 0.9, 1],
                      filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Parpadeo */}
                  <motion.div
                    className="absolute inset-0 bg-indigo-900"
                    style={{ transformOrigin: "top" }}
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 4,
                    }}
                  />
                  {/* Labios animados */}
                  {isSpeaking && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-3 bg-black/30"
                      style={{ borderRadius: "50% 50% 0 0" }}
                      animate={{
                        height: ["0.25rem", "0.6rem", "0.3rem"],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>

                <div>
                  <p className="font-semibold text-sm">Alexa — Asistente Virtual</p>
                  <p className="text-xs opacity-80">
                    {isSpeaking ? "Hablando..." : "Disponible para ayudarte"}
                  </p>
                </div>
              </div>

              {/* 🔁 Cambiar avatar */}
              <button
                onClick={() => setUseAvatar2((prev) => !prev)}
                aria-label="Cambiar avatar"
                className="absolute top-2 right-8 text-xs underline hover:opacity-80"
              >
                Cambiar
              </button>

              {/* ❌ Cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar chat"
                className="hover:opacity-80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 📜 Área de mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-zinc-50 dark:bg-zinc-800">
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} from={msg.from} text={msg.text} />
              ))}

              {/* Efecto de escritura en tiempo real */}
              {isTyping && currentBotText && (
                <ChatMessage from="bot" text={currentBotText} />
              )}

              {/* Indicador de escritura */}
              {isTyping && !currentBotText && (
                <motion.div
                  className="text-zinc-500 dark:text-zinc-400 text-sm italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 0.8,
                  }}
                >
                  Eva está escribiendo...
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* ✍️ Input */}
            <div className="flex items-center border-t border-zinc-200 dark:border-zinc-700 p-2 bg-white dark:bg-zinc-900">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none"
                placeholder="Escribe un mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <motion.button
                onClick={handleSend}
                className="ml-2 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>

            {/* 🟢 WhatsApp CTA */}
            <a
              href="https://wa.me/51968108836"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm text-white bg-green-600 hover:bg-green-700 py-2"
            >
              💬 Contactar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
