import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle: string;
    description?: string;
}

export function SectionTitle({ title, subtitle, description }: SectionTitleProps) {
    return (
        <div className="flex flex-col md:flex-row w-full mb-16 items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold uppercase">{title}</h2>
                <h3 className="text-3xl md:text-4xl font-light uppercase flex items-center">
                    {subtitle} <span className="hidden md:inline-block ml-4 flex-grow h-[1px] bg-white opacity-20 w-32"></span>
                </h3>
            </div>
            {description && (
                <p className="text-sm md:text-base text-gray-300 max-w-xl hidden md:block">
                    {description}
                </p>
            )}
        </div>
    );
}
