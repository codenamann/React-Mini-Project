import React from "react";

const Button = ({ 
  children, 
  leftIcon, 
  rightIcon, 
  className = "", 
  ...props 
}) => {
  return (
    <button
      className={`inline-flex justify-center items-center gap-2 px-3 py-3 text-[#626262] bg-[#ebfffc] cursor-pointer hover:bg-[#d5e9e6] transition-colors ${className}`}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;
