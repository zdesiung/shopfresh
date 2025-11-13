// ===================================================
// 🔧 Utilidades globales para tu proyecto Next.js
// ===================================================

// ✅ Importa correctamente clsx y tailwind-merge
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 🧩 Combina múltiples clases CSS de forma segura y eficiente.
 * Usa clsx + tailwind-merge para evitar conflictos o duplicados en Tailwind.
 *
 * Ejemplo:
 * const buttonClass = cn("p-2", isActive && "bg-blue-500");
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
