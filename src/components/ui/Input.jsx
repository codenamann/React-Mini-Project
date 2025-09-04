import React from 'react'

const Input = ({
    value,
    onChange,
    leftIcon,
    rightIcon,
    error,
    type = 'text',
    className = "",
    placeholder = 'Enter text..',
    ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      <div
        className={`flex items-center border rounded-4xl px-6 py-1 bg-[#ebfffc] 
        focus-within:ring-2 w-full h-12 text-[#626262] text-lg focus-within:ring-[#80eaff] ${className}`}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <input
          {...props}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 outline-none w-full bg-transparent h-full"
        />
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default Input