import axios from "axios";

export const payWithCard = async (token: string, amount: number) => {
  // En producción: enviar a tu backend que llama a Culqi / Stripe
  // Aquí ejemplo de POST a backend:
  const url = process.env.NEXT_PUBLIC_BACKEND_URL || "/api/payments/card";
  const resp = await axios.post(url, { token, amount });
  return resp.data;
};

export const generateQRCode = (method: "yape" | "plin", amount: number) => {
  const base = "https://api.qrserver.com/v1/create-qr-code/";
  const data =
    method === "yape"
      ? `Yape://pay?recipient=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&amount=${amount}`
      : `Plin://pay?recipient=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&amount=${amount}`;
  return `${base}?size=200x200&data=${encodeURIComponent(data)}`;
};
