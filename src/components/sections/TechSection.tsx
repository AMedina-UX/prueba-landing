'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const technologies = [
    { name: 'UNREAL ENGINE', image: '/images/tech_unreal.png' },
    { name: 'UNITY', image: '/images/tech_unity.png' },
    { name: 'OCULUS', image: '/images/tech_oculus.png' },
    { name: 'VIVE', image: '/images/tech_vive.png' }
];

export function TechSection() {
    const [currentTechIndex, setCurrentTechIndex] = useState(0);

    const nextTech = () => setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
    const prevTech = () => setCurrentTechIndex((prev) => (prev - 1 + technologies.length) % technologies.length);

    return (
        <section id="technologies" className="w-full px-4 md:px-20 py-10 md:py-20 mt-10 relative z-20">
            {/* Background Banner */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[300px] md:h-[350px] rounded-[100px] overflow-hidden flex flex-col items-center justify-center shadow-[0_0_60px_rgba(192,183,232,0.1)] border border-[rgba(255,255,255,0.05)]"
            >
                <div className="absolute inset-0 bg-[rgba(48,44,66,0.85)] z-10" />
                <Image
                    src="/images/tech_bg.png"
                    alt="Technology Background"
                    fill
                    className="object-cover z-0"
                />

                <div className="relative z-20 text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">TECHNOLOGIES & HARDWARE</h2>
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-light">USED BY HYDRA VR.</h3>
                </div>

                {/* Chevron Button */}
                <div className="absolute -bottom-8 w-16 h-16 rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] z-30 flex flex-col items-center justify-center cursor-pointer border-4 border-[#343045] shadow-[0_0_20px_rgba(192,183,232,0.4)] hover:scale-110 transition-transform">
                    <ChevronDown className="text-[#343045] w-8 h-8" strokeWidth={3} />
                </div>
            </motion.div>

            {/* Mobile Tech Carousel */}
            <div className="md:hidden flex items-center justify-between w-full mt-20 relative px-4">
                <button onClick={prevTech} className="z-30 w-10 h-10 rounded-full border-2 border-[rgba(192,183,232,0.3)] flex items-center justify-center hover:bg-[rgba(192,183,232,0.1)]"><ChevronLeft className="text-[#c0b7e8]" /></button>
                <div className="w-full overflow-hidden flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTechIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h4 className="text-3xl font-black tracking-widest text-[#c0b7e8]">
                                {technologies[currentTechIndex].name}
                            </h4>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button onClick={nextTech} className="z-30 w-10 h-10 rounded-full border-2 border-[rgba(192,183,232,0.3)] flex items-center justify-center hover:bg-[rgba(192,183,232,0.1)]"><ChevronRight className="text-[#c0b7e8]" /></button>
            </div>

            {/* Desktop Tech Logos */}
            <div className="hidden md:flex flex-wrap items-center justify-center lg:justify-between gap-12 lg:gap-20 mt-24 px-10">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center justify-center group"
                    >
                        <h4 className="text-3xl lg:text-4xl font-black tracking-widest text-[#c0b7e8] opacity-40 group-hover:opacity-100 transition-opacity">
                            {tech.name}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
