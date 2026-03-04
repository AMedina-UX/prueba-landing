import React from 'react';

export function Footer() {
    return (
        <footer className="w-full px-4 md:px-20 py-10 md:py-20 relative z-20">
            {/* Separator lines */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0 pb-10 md:pb-20">
                {/* Logo Block */}
                <div className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#8176af] to-[#c0b7e8] rounded-[30px] flex items-center justify-center shadow-[0_0_30px_rgba(192,183,232,0.3)] rotate-45 border-4 border-[rgba(52,48,69,0.5)]">
                        <span className="text-white font-black text-5xl -rotate-45 block">H</span>
                    </div>
                </div>

                {/* Mobile Separator */}
                <div className="lg:hidden w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-[rgba(192,183,232,0.5)] to-transparent" />

                <div className="hidden lg:block w-px h-48 bg-gradient-to-b from-transparent via-[rgba(192,183,232,0.5)] to-transparent" />

                {/* Nav Links */}
                <div className="flex flex-col gap-6 font-bold text-center lg:text-left">
                    <a href="#about" className="hover:text-[#c0b7e8] transition-colors uppercase">ABOUT</a>
                    <a href="#services" className="hover:text-[#c0b7e8] transition-colors uppercase">SERVICES</a>
                    <a href="#technologies" className="hover:text-[#c0b7e8] transition-colors uppercase">TECHNOLOGIES</a>
                    <a href="#how-to" className="hover:text-[#c0b7e8] transition-colors uppercase">HOW TO</a>
                    <a href="#" className="hover:text-[#c0b7e8] transition-colors uppercase">JOIN HYDRA</a>
                </div>

                {/* Mobile Separator */}
                <div className="lg:hidden w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-[rgba(192,183,232,0.5)] to-transparent" />

                <div className="hidden lg:block w-px h-48 bg-gradient-to-b from-transparent via-[rgba(192,183,232,0.5)] to-transparent" />

                {/* Aux Links */}
                <div className="flex flex-col gap-6 font-bold text-center lg:text-left text-gray-300">
                    <a href="#" className="hover:text-[#c0b7e8] hover:text-white transition-colors uppercase">F.A.Q</a>
                    <a href="#" className="hover:text-[#c0b7e8] hover:text-white transition-colors uppercase">SITEMAP</a>
                    <a href="#" className="hover:text-[#c0b7e8] hover:text-white transition-colors uppercase">CONDITIONS</a>
                    <a href="#" className="hover:text-[#c0b7e8] hover:text-white transition-colors uppercase">LICENSES</a>
                </div>

                {/* Mobile Separator */}
                <div className="lg:hidden w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-[rgba(192,183,232,0.5)] to-transparent" />

                <div className="hidden lg:block w-px h-48 bg-gradient-to-b from-transparent via-[rgba(192,183,232,0.5)] to-transparent" />

                {/* Social Links */}
                <div className="flex flex-col items-center lg:items-start gap-8">
                    <p className="font-bold uppercase tracking-wider">SOCIALIZE WITH HYDRA</p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer transition-transform shadow-[0_0_15px_rgba(255,255,255,0.4)]"><span className="text-[#343045] font-bold text-xs">FB</span></div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer transition-transform"><span className="text-[#343045] font-bold text-xs">TW</span></div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer transition-transform"><span className="text-[#343045] font-bold text-xs">IN</span></div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer transition-transform"><span className="text-[#343045] font-bold text-xs">YT</span></div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer transition-transform"><span className="text-[#343045] font-bold text-xs">IG</span></div>
                    </div>
                    <button className="mt-4 px-8 py-4 rounded-full font-bold text-xs tracking-wider bg-gradient-to-r from-[#8176af] to-[#c0b7e8] text-[#343045] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(192,183,232,0.3)]">
                        BUILD YOUR WORLD
                    </button>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c0b7e8] to-transparent opacity-20 my-10" />

            <p className="text-center text-xs md:text-sm font-bold tracking-[0.2em] text-gray-300">
                2026 © HYDRA LANDING PAGE - CREATED WITH AGENT
            </p>
        </footer>
    );
}
