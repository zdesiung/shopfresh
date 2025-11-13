"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ChatMessage from "./ChatMessage";
import chatbotConfig from "./chatbotConfig";
import Image from "next/image";
import { FaTimes, FaComments } from "react-icons/fa";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const response = chatbotConfig.find((msg) =>
        input.toLowerCase().includes(msg.trigger),
      );
      const botMsg = {
        from: "bot",
        text: response
          ? response.reply
          : "No estoy seguro, pero puedes escribirnos por WhatsApp 📱",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-lg z-50"
      >
        {open ? <FaTimes /> : <FaComments />}
      </motion.button>

      {/* Ventana del ChatBot */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-xl border overflow-hidden z-50 flex flex-col"
        >
          <div className="flex items-center gap-3 bg-gray-900 text-white px-4 py-3">
            <Image
              src="/icons/chatbot-avatar.png"
              width={36}
              height={36}
              alt="Asistente"
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">Asistente Virtual</p>
              <p className="text-xs opacity-80">En línea 💬</p>
            </div>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <ChatMessage key={i} from={msg.from} text={msg.text} />
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="border-t p-2 flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-800"
            >
              Enviar
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
