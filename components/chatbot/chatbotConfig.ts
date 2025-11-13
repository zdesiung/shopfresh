// components/chatbot/chatbotConfig.ts

export interface ChatbotResponse {
  trigger: string;
  reply: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  // 💬 SALUDOS Y BIENVENIDA
  {
    trigger: "hola",
    reply:
      "👋 ¡Hola! Soy Alexa, tu asistente virtual de **FreshDesign** 🛍️. ¿Quieres conocer nuestros polos, tallas o promociones? 💫",
  },
  {
    trigger: "buenas",
    reply:
      "👋 ¡Bienvenido/a! Soy Alexa de FreshDesign. ¿Te gustaría ver nuestros polos, promociones o catálogo completo?",
  },

  // 💰 PRECIOS Y PRODUCTOS
  {
    trigger: "precio",
    reply:
      "💎 Nuestros precios varían según el modelo y material. Los polos premium comienzan desde **S/199.99**. ¿Quieres que te muestre los más vendidos?",
  },
  {
    trigger: "producto",
    reply:
      "👕 Tenemos una amplia variedad: **polos básicos, estampados, deportivos y de edición limitada**. ¿Te muestro algunos modelos?",
  },
  {
    trigger: "modelos",
    reply:
      "✨ Nuestros modelos más populares son: **Clásico, Marinero, Manga, Cobra y Urban Fit**. Todos con acabados premium y excelente durabilidad. ¿Deseas ver las imágenes?",
  },
  {
    trigger: "colores",
    reply:
      "🎨 Contamos con una amplia gama: **blanco, negro, azul royal, gris, rojo y verde militar**. También tenemos tonos personalizados según temporada 🌈. ¿Qué color te interesa?",
  },
  {
    trigger: "material",
    reply:
      "🧵 Nuestros polos están confeccionados con **algodón pima, jersey premium y mezclas elásticas** para máximo confort y durabilidad.",
  },

  // 📏 TALLAS Y GUÍA
  {
    trigger: "talla",
    reply:
      "📏 Tenemos tallas en **S, M, L, XL y XXL**. Si me dices tu estatura o contextura, puedo ayudarte a elegir la ideal 😉.",
  },
  {
    trigger: "guía de tallas",
    reply:
      "📐 Claro, tenemos una guía de tallas detallada. Por ejemplo, si mides 1.70m y tienes contextura media, la talla **M** sería perfecta.",
  },

  // 💸 PAGOS Y MÉTODOS
  {
    trigger: "pago",
    reply:
      "💳 Aceptamos **Yape, Plin, tarjetas de crédito y débito**. También puedes pagar contra entrega en Lima Metropolitana 🚀.",
  },
  {
    trigger: "yape",
    reply:
      "💜 ¡Claro! Aceptamos pagos con **Yape, Plin y tarjeta**. El proceso es 100% seguro y rápido ⚡.",
  },
  {
    trigger: "plin",
    reply:
      "💜 ¡Por supuesto! Puedes pagar con **Plin, Yape o tarjeta** sin ningún recargo adicional 💫.",
  },

  // 🚚 ENVÍOS Y DELIVERY
  {
    trigger: "envío",
    reply:
      "🚚 Realizamos envíos a **todo el Perú** con entrega entre **1 y 3 días hábiles**. También puedes recoger en tienda si prefieres 🏬.",
  },
  {
    trigger: "delivery",
    reply:
      "📦 Ofrecemos delivery express en Lima y envíos nacionales. ¿Deseas saber el costo de envío a tu ciudad?",
  },

  // 🎁 PROMOCIONES Y DESCUENTOS
  {
    trigger: "promoción",
    reply:
      "🎉 ¡Esta semana tenemos hasta **25% de descuento** en polos básicos premium! ¿Te gustaría ver los modelos en promoción?",
  },
  {
    trigger: "oferta",
    reply:
      "🔥 ¡Aprovecha! Tenemos **ofertas especiales** por tiempo limitado. ¿Quieres que te muestre los productos en descuento?",
  },
  {
    trigger: "descuento",
    reply:
      "🎁 Sí, tenemos descuentos en varios modelos. También puedes combinar con envío gratis a partir de S/199 🚚✨.",
  },

  // 🛍️ CATÁLOGO Y VISTA DE PRODUCTOS
  {
    trigger: "catálogo",
    reply:
      "📘 Aquí tienes nuestro **catálogo principal de polos premium** 👕. Puedes visitar la tienda completa [aquí](/tienda) o pedirme que te muestre los modelos destacados.",
  },
  {
    trigger: "catálogo de polos",
    reply:
      "👕 Estos son algunos de nuestros **modelos más populares**:\n\n1️⃣ Polo Clásico – S/199.99\n2️⃣ Polo Marinero – S/179.99\n3️⃣ Polo Manga – S/249.99\n4️⃣ Polo Cobra – S/299.99\n\n✨ Puedes ver las imágenes y más detalles en el catálogo visual o decirme: *‘ver catálogo completo’*.",
  },
  {
    trigger: "ver catálogo",
    reply:
      "📸 ¡Perfecto! Te muestro ahora una selección de nuestros polos más vendidos. Si te gusta alguno, puedo llevarte directo al carrito o WhatsApp 🛍️.",
  },
  {
    trigger: "mostrar productos",
    reply:
      "🛒 Aquí tienes los productos más destacados de **FreshDesign**. Puedes ver más en la sección [Tienda](/tienda) o pedirme sugerencias según color y talla.",
  },
  {
    trigger: "ver modelos",
    reply:
      "✨ Contamos con varios estilos de polos: **Clásico, Sport, Urban y Edición Limitada**. Todos disponibles en tallas S a XXL. ¿Te muestro los diseños?",
  },

  // 🕒 HORARIOS Y CONTACTO
  {
    trigger: "horario",
    reply:
      "⏰ Atendemos de **lunes a sábado de 9:00 AM a 7:00 PM**. También puedes comprar online las 24 horas 🛍️.",
  },
  {
    trigger: "contacto",
    reply:
      "📱 Puedes comunicarte con nosotros por WhatsApp 👉 https://wa.me/51968108836. ¡Te atenderemos encantados!",
  },
  {
    trigger: "whatsapp",
    reply:
      "💬 Escríbenos por WhatsApp al **968108836** o haz clic aquí 👉 https://wa.me/51968108836 para asistencia inmediata.",
  },

  // ❤️ DESPEDIDAS Y CIERRE
  {
    trigger: "gracias",
    reply:
      "💖 ¡Con gusto! Si necesitas más ayuda, aquí estaré para atenderte en todo momento 😊.",
  },
  {
    trigger: "adiós",
    reply:
      "👋 ¡Hasta pronto! Gracias por visitar **FreshDesign**. Vuelve cuando quieras 💫.",
  },
  {
    trigger: "chau",
    reply:
      "👋 ¡Nos vemos pronto! Gracias por confiar en **FreshDesign** 💙.",
  },
];

// 🧠 Respuesta por defecto cuando no hay coincidencias
export const defaultResponse =
  "🤔 No estoy segura de entenderte. Puedo ayudarte con **precios, tallas, promociones, pagos, envíos o catálogo de polos**. ¿Sobre qué te gustaría saber?";
