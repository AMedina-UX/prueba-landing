'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, PhoneCall, Mail, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
    const [currentContactIndex, setCurrentContactIndex] = useState(0);

    const contactInfo = [
        { icon: <MapPin className="text-[#c0b7e8] w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />, title: 'Pay Us a Visit', text: 'Union St, Seattle, WA 98101, United States' },
        { icon: <PhoneCall className="text-[#c0b7e8] w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />, title: 'Give Us a Call', text: '(110) 1111-1010' },
        { icon: <Mail className="text-[#c0b7e8] w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />, title: 'Send Us a Message', text: 'Contact@HydraVTech.com' }
    ];

    const nextContact = () => setCurrentContactIndex((prev) => (prev + 1) % contactInfo.length);
    const prevContact = () => setCurrentContactIndex((prev) => (prev - 1 + contactInfo.length) % contactInfo.length);

    return (
        <section className="relative w-full px-4 md:px-20 pt-10 pb-20">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.2] mb-6 md:mb-8">
                        <span className="text-gradient-alt">Dive</span> Into The Depths<br />
                        Of <span className="text-gradient">Virtual Reality</span>
                    </h1>
                    <p className="text-gray-300 md:text-[1rem] mb-10 max-w-lg hidden md:block leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>
                    <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
                        <Button className="pl-6 md:pl-8 pr-4 md:pr-6 text-xs md:text-base py-3 md:py-4">
                            <span className="flex items-center gap-2 md:gap-4">
                                BUILD YOUR WORLD
                            </span>
                        </Button>
                        <div className="hidden lg:flex w-12 h-12  border-[rgba(192,183,232,0.3)] items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                            <ArrowRight className="text-[#c0b7e8] w-12 h-12" />
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center lg:justify-end relative mb-8 lg:mb-0"
                >
                    {/* Background lines */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] z-[-1] pointer-events-none hidden md:block">
                        <img src="/images/bg-lines.png" alt="" className="w-full h-full object-contain opacity-60" />
                    </div>

                    <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px]">
                        {/* The shape backgrounds behind the image */}

                        <div className="relative z-10 w-full h-full rounded-bl-[200px] md:rounded-bl-[240px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[100px] overflow-hidden border-[15px] border-[rgba(0,0,0,0.2)] ">
                            <Image
                                src="/images/hero_vr_user.png"
                                alt="VR User interacting with environment"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Contact Info Strip */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full mt-16 md:mt-24 relative z-20"
            >
                <div className="w-full bg-gradient-to-r from-[rgba(58,52,86,0.95)] to-[#211e2e] rounded-full py-6 md:py-8 px-8 md:px-12 flex items-center shadow-2xl shadow-black/40 border border-white/5 backdrop-blur-sm relative">

                    {/* Mobile Carousel View */}
                    <div className="md:hidden flex items-center justify-between w-full h-full">
                        <button onClick={prevContact} className="text-[#c0b7e8] shrink-0 hover:scale-110 active:scale-95 transition-transform"><ChevronLeft size={32} /></button>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentContactIndex}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-4 text-left max-w-[220px]"
                            >
                                <div className="shrink-0">{contactInfo[currentContactIndex].icon}</div>
                                <div className="overflow-hidden">
                                    <h4 className="font-bold text-sm sm:text-lg mb-1 truncate">{contactInfo[currentContactIndex].title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-300 truncate">{contactInfo[currentContactIndex].text}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <button onClick={nextContact} className="text-[#c0b7e8] shrink-0 hover:scale-110 active:scale-95 transition-transform"><ChevronRight size={32} /></button>
                    </div>

                    {/* Desktop/Tablet View */}
                    <div className="hidden md:flex justify-between items-center w-full">
                        {contactInfo.map((info, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex items-center gap-6 flex-1 justify-center px-4">
                                    {info.icon}
                                    <div>
                                        <h4 className="font-bold text-lg xl:text-xl mb-1">{info.title}</h4>
                                        <p className="text-sm text-gray-300">{info.text}</p>
                                    </div>
                                </div>
                                {idx < contactInfo.length - 1 && (
                                    <div className="w-px h-20 bg-[rgba(192,183,232,0.15)] shrink-0" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
