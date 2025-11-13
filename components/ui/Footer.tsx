import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} desing fresh. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
