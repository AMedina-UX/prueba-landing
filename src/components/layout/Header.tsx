import React from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="w-full flex justify-between items-center py-8 px-4 md:px-20 z-50 relative">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-white to-[#c0b7e8] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-[#343045] font-black text-2xl">H</span>
                    </div>
                    <span className="text-3xl font-light text-gradient tracking-widest uppercase">Hydra</span>
                </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
                <a href="#about" className="hover:text-[#c0b7e8] transition-colors uppercase">About</a>
                <a href="#services" className="hover:text-[#c0b7e8] transition-colors uppercase">Services</a>
                <a href="#technologies" className="hover:text-[#c0b7e8] transition-colors uppercase">Technologies</a>
                <a href="#how-to" className="hover:text-[#c0b7e8] transition-colors uppercase">How To</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
                <Button variant="outline" className="px-6 py-3 text-xs tracking-wider">CONTACT US</Button>
                <Button variant="primary" className="px-6 py-3 text-xs tracking-wider">JOIN HYDRA</Button>
            </div>
        </header>
    );
}
