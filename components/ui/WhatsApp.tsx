// WhatsApp.tsx
import React from "react";

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    // Aquí podrías agregar el enlace de WhatsApp o la acción que desees realizar.
    window.open("https://wa.me/968108836", "_blank"); // Reemplaza con el número de WhatsApp correcto
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contáctanos por WhatsApp"
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#25D366", // Color de WhatsApp
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      <WhatsApp />
      <span style={{ marginLeft: "8px" }}>Contáctanos</span>
    </button>
  );
};

export default WhatsAppButton;
