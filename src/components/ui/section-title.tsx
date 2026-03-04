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
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2">{title}</h2>
                <h3 className="text-3xl md:text-4xl font-light uppercase flex items-center">
                    {subtitle} <span className='ml-4'><svg xmlns="http://www.w3.org/2000/svg" width="201" height="37" viewBox="0 0 201 37" fill="none">
                        <path d="M198.833 18.1667L199.894 19.2273C200.175 18.946 200.333 18.5645 200.333 18.1667C200.333 17.7688 200.175 17.3873 199.894 17.106L198.833 18.1667ZM157.167 16.6667C156.338 16.6667 155.667 17.3382 155.667 18.1667C155.667 18.9951 156.338 19.6667 157.167 19.6667V18.1667V16.6667ZM181.106 33.7727C180.52 34.3585 180.52 35.3082 181.106 35.894C181.692 36.4798 182.642 36.4798 183.227 35.894L182.167 34.8333L181.106 33.7727ZM183.227 0.43934C182.642 -0.146447 181.692 -0.146447 181.106 0.43934C180.52 1.02513 180.52 1.97487 181.106 2.56066L182.167 1.5L183.227 0.43934ZM198.833 18.1667V16.6667L157.167 16.6667V18.1667V19.6667L198.833 19.6667V18.1667ZM182.167 34.8333L183.227 35.894L199.894 19.2273L198.833 18.1667L197.773 17.106L181.106 33.7727L182.167 34.8333ZM198.833 18.1667L199.894 17.106L183.227 0.43934L182.167 1.5L181.106 2.56066L197.773 19.2273L198.833 18.1667ZM157.5 18.1667V16.6667H0V18.1667V19.6667H157.5V18.1667Z" fill="#C0B7E8" />
                    </svg></span>
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
