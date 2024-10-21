// components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'; // Añadido 'ghost' y 'outline' para tus variantes
  size?: 'sm' | 'md' | 'lg' | 'icon'; // Añadido tamaño
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', size = 'md' }) => {
  const baseStyle = 'rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Definición de estilos según variante
  const variantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400 focus:ring-gray-400',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100 focus:ring-blue-500', // estilo ghost
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500', // estilo outline
  };

  // Definición de tamaños
  const sizeStyle = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2', // para botones de icono
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]}`}>
      {children}
    </button>
  );
};

export default Button;
