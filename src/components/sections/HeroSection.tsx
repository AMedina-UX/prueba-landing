'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="relative w-full px-4 md:px-20 pt-10 pb-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
                        <span className="text-gradient-alt">Dive</span> Into The Depths<br />
                        Of <span className="text-gradient">Virtual Reality</span>
                    </h1>
                    <p className="text-gray-300 md:text-lg mb-10 max-w-lg hidden md:block leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>
                    <div className="flex items-center gap-6">
                        <Button className="pl-8 pr-6">
                            <span className="flex items-center gap-4">
                                BUILD YOUR WORLD
                            </span>
                        </Button>
                        <div className="w-12 h-12 rounded-full border-2 border-[rgba(192,183,232,0.3)] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                            <ArrowRight className="text-[#c0b7e8] w-5 h-5" />
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center lg:justify-end relative"
                >
                    <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]">
                        {/* The shape backgrounds behind the image */}
                        <div className="absolute inset-0 shape-bg scale-105 z-0 transform translate-y-4 -translate-x-4 shadow-[0_0_80px_rgba(129,118,175,0.3)]" />
                        <div className="relative z-10 w-full h-full rounded-bl-[200px] md:rounded-bl-[240px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[100px] overflow-hidden border-[15px] border-[rgba(52,48,69,0.5)] shadow-2xl">
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
                className="w-full mt-24 relative z-20"
            >
                <div className="w-full bg-gradient-to-r from-[rgba(58,52,86,0.95)] to-[#211e2e] rounded-full py-8 px-12 flex flex-col md:flex-row justify-between items-center shadow-2xl shadow-black/40 border border-white/5 gap-8 md:gap-0 backdrop-blur-sm">
                    <div className="flex items-center gap-6">
                        <MapPin className="text-[#c0b7e8] w-12 h-12" strokeWidth={1.5} />
                        <div>
                            <h4 className="font-bold text-xl mb-1">Pay Us a Visit</h4>
                            <p className="text-sm text-gray-300">Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-20 bg-[rgba(192,183,232,0.15)] shrink-0" />

                    <div className="flex items-center gap-6">
                        <PhoneCall className="text-[#c0b7e8] w-12 h-12" strokeWidth={1.5} />
                        <div>
                            <h4 className="font-bold text-xl mb-1">Give Us a Call</h4>
                            <p className="text-sm text-gray-300">(110) 1111-1010</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-20 bg-[rgba(192,183,232,0.15)] shrink-0" />

                    <div className="flex items-center gap-6">
                        <Mail className="text-[#c0b7e8] w-12 h-12" strokeWidth={1.5} />
                        <div>
                            <h4 className="font-bold text-xl mb-1">Send Us a Message</h4>
                            <p className="text-sm text-gray-300">Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
