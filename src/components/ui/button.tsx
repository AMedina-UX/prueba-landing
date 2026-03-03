import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    className?: string;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
    const baseStyles = "px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95";
    const primaryStyles = "bg-gradient-primary text-[#343045] hover:shadow-lg hover:shadow-[#c0b7e8]/20";
    const outlineStyles = "border-2 border-white text-white hover:bg-white hover:text-[#343045]";

    const variantStyles = variant === 'primary' ? primaryStyles : outlineStyles;

    return (
        <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
            {children}
        </button>
    );
}
