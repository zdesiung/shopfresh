// components/WhatsAppButton.js
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "968108836"; // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! Me gustaría obtener más información."; // Mensaje predefinido
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" style={styles.icon} />
    </a>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    zIndex: 1000,
  },
  icon: {
    width: "30px",
    height: "30px",
  },
};

export default WhatsAppButton;
