import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
    return (
        <input
            className={`border-2 border-white bg-transparent rounded-full h-[72px] px-8 text-white placeholder:text-white/70 focus:outline-none focus:border-[#c0b7e8] transition-colors w-full ${className}`}
            {...props}
        />
    );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export function Textarea({ className = '', ...props }: TextareaProps) {
    return (
        <textarea
            className={`border-2 border-white bg-transparent rounded-[40px] p-8 text-white placeholder:text-white/70 focus:outline-none focus:border-[#c0b7e8] transition-colors w-full resize-none ${className}`}
            {...props}
        />
    );
}
