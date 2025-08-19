import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-semibold transition duration-300 
                 bg-[#FD6E0A]  border-2 border-[#FD6E0A] 
                 hover:bg-white hover:text-[#FD6E0A] ${className}`}
    >
      {children}
    </button>
  );
}
