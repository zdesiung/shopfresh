// ========================================================
// 📦 helpers.ts
// Funciones utilitarias globales para el e-commerce moderno
// ========================================================

// ✅ Formatea el precio con moneda local (PEN por defecto)
export const formatPrice = (
  amount: number,
  currency: string = "PEN"
): string => {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

// ✅ Genera un ID único (ideal para productos o pedidos)
export const generateUID = (prefix: string = "id"): string => {
  return `${prefix}_${Math.random().toString(36).substring(2, 10)}_${Date.now()}`;
};

// ✅ Calcula el subtotal de los productos en el carrito
export const calculateSubtotal = (
  items: { price: number; quantity: number }[]
): number => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

// ✅ Calcula el total con impuestos o envío opcional
export const calculateTotal = (
  items: { price: number; quantity: number }[],
  taxRate: number = 0.0,
  shippingCost: number = 0
): number => {
  const subtotal = calculateSubtotal(items);
  const taxes = subtotal * taxRate;
  return subtotal + taxes + shippingCost;
};

// ✅ Convierte un texto a "slug" (para URLs limpias)
export const slugify = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// ✅ Trunca texto largo (útil para títulos o descripciones)
export const truncateText = (text: string, maxLength: number = 80): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

// ✅ Calcula porcentaje de descuento
export const calculateDiscount = (
  originalPrice: number,
  discountedPrice: number
): number => {
  if (originalPrice <= 0 || discountedPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};

// ✅ Valida email básico
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ✅ Simula una demora (útil para testing o animaciones)
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
