import React from "react";

export const Textarea = ({ placeholder, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="border border-gray-300 rounded p-2 w-full"
      {...props}
    />
  );
};
