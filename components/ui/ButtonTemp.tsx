"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

/**
 * 💎 Botón universal con animación y variantes.
 * Incluye soporte para modo oscuro, accesibilidad y framer-motion.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700",
    ghost:
      "text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:ring-blue-300 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        variants[variant],
        disabled || isLoading ? "opacity-60 cursor-not-allowed" : "",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin h-4 w-4 border-2 border-t-transparent border-white rounded-full" />
      ) : (
        children
      )}
    </motion.button>
  );
};
