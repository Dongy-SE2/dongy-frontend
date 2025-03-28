import React from "react";

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button
        className={`px-4 py-2 rounded-lg transition-all ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  