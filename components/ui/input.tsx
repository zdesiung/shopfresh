// components/ui/input.tsx
import React from "react";

export const Input = ({ type, placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded p-2 w-full"
      {...props}
    />
  );
};
