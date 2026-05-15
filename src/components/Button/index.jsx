import React from 'react';

function Button({ label, primary, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      className={`
        px-8 py-3
        rounded-full
        font-bold
        transition-all
        duration-300
        ease-in-out
        transform
        hover:scale-105
        active:scale-95
        shadow-lg
        ${primary ? 'bg-secondary-light hover:bg-opacity-90 text-white' : 'bg-accent-yellow hover:bg-yellow-400 text-primary-dark'}
        ${className || ''}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;