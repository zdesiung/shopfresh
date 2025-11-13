"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  from: "user" | "bot";
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ from, text }) => {
  const isUser = from === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex items-end gap-2 mb-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* 🧠 Avatar del bot */}
      {!isUser && (
        <Image
          src="/images/avatar2.png"
          alt="Asistente virtual"
          width={36}
          height={36}
          className="rounded-full border border-gray-300 shadow-sm"
        />
      )}

      {/* 💬 Burbuja del mensaje */}
      <div
        className={`px-4 py-2 max-w-[75%] rounded-2xl shadow-sm text-sm leading-relaxed break-words whitespace-pre-line ${
          isUser
            ? "bg-indigo-600 text-white rounded-br-none"
            : "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
        }`}
      >
        {/* ✅ Soporte para Markdown */}
        <ReactMarkdown
          components={{
            a: (props) => (
              <a
                {...props}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
            strong: (props) => (
              <strong {...props} className="font-semibold text-indigo-600 dark:text-indigo-400" />
            ),
          }}
        >
          {text}
        </ReactMarkdown>
      </div>

      {/* 👤 Avatar del usuario */}
      {isUser && (
        <Image
          src="/images/avatar2.png"
          alt="Usuario"
          width={36}
          height={36}
          className="rounded-full border border-gray-300 shadow-sm"
        />
      )}
    </motion.div>
  );
};

export default ChatMessage;
