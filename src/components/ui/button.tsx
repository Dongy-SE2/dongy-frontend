import React from "react";
import { useFormStatus } from "react-dom";
import { Waveform } from "ldrs/react";
import 'ldrs/react/Waveform.css'

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const {pending} = useFormStatus();
    return (
      <>
      {pending && (
        <div className="px-10 flex flex-col items-center justify-center mb-3 ">
          <p className="text-black text-sm mb-2">Loading...</p>
          <Waveform size="20" speed="1" color="black" stroke="1" />
        </div>
      )}
      {!pending &&(
      <button
        className={`px-4 py-2 rounded-lg transition-all ${className}`}
        {...props}
      >
        {children}
      </button>)}
      </>
    );
  }
  