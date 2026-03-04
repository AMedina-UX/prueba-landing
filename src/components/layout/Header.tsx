'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full flex justify-between items-center px-4 py-6 md:py-8 md:px-20 z-50 relative">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-white to-[#c0b7e8] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-[#343045] font-black text-2xl">H</span>
                    </div>
                    <span className="text-3xl font-light text-gradient tracking-widest uppercase">Hydra</span>
                </div>
            </div>

            <nav className="hidden xl:flex items-center gap-8 text-sm font-bold">
                <a href="#about" className="hover:text-[#c0b7e8] transition-colors uppercase">About</a>
                <a href="#services" className="hover:text-[#c0b7e8] transition-colors uppercase">Services</a>
                <a href="#technologies" className="hover:text-[#c0b7e8] transition-colors uppercase">Technologies</a>
                <a href="#how-to" className="hover:text-[#c0b7e8] transition-colors uppercase">How To</a>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
                <Button variant="outline" className="px-6 py-3 text-xs tracking-wider">CONTACT US</Button>
                <Button variant="primary" className="px-6 py-3 text-xs tracking-wider">JOIN HYDRA</Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
                className="xl:hidden text-[#c0b7e8] hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#343045]/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center py-8 gap-6 xl:hidden shadow-2xl">
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-[#c0b7e8] transition-colors uppercase">About</a>
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-[#c0b7e8] transition-colors uppercase">Services</a>
                    <a href="#technologies" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-[#c0b7e8] transition-colors uppercase">Technologies</a>
                    <a href="#how-to" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold hover:text-[#c0b7e8] transition-colors uppercase">How To</a>

                    <div className="flex flex-col gap-4 mt-4 w-full px-8">
                        <Button variant="outline" className="w-full justify-center">CONTACT US</Button>
                        <Button variant="primary" className="w-full justify-center">JOIN HYDRA</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
