import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg transition duration-200";
  const sizeStyles = size === "icon" ? "p-2 w-10 h-10 flex items-center justify-center" : "px-4 py-2";
  const variantStyles =
    variant === "ghost"
      ? "text-gray-600 hover:bg-gray-200"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};