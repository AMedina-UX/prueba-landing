'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: 'SIMULATION',
        image: '/images/service_simulation.png',
        description: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
        title: 'EDUCATION',
        image: '/images/service_education.png',
        description: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
        title: 'SELF-CARE',
        image: '/images/service_selfcare.png',
        description: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
        title: 'OUTDOOR',
        image: '/images/service_outdoor.png',
        description: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.',
    }
];

export function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextService = () => setCurrentIndex((prev) => (prev + 1) % services.length);
    const prevService = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

    return (
        <section id="services" className="w-full px-4 md:px-20 py-20 relative z-20">
            <SectionTitle
                title="WHY BUILD"
                subtitle="WITH HYDRA?"
                description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />

            {/* Mobile Carousel View */}
            <div className="md:hidden flex flex-col items-center mt-12 w-full relative">
                <div className="flex items-center justify-between w-full px-4">
                    <button onClick={prevService} className="absolute left-0 z-30 w-12 h-12 rounded-full border-2 border-[rgba(192,183,232,0.3)] flex items-center justify-center hover:bg-[rgba(192,183,232,0.1)] transition-colors"><ChevronLeft className="text-[#c0b7e8]" /></button>
                    <div className="w-full max-w-[310px] mx-auto overflow-hidden px-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center bg-gradient-to-b from-[#433d60] to-[#211e2e] rounded-[40px] p-8 pb-10 shadow-2xl w-full"
                            >
                                <div className="w-[190px] h-[190px] rounded-full bg-[rgba(12,12,12,0.1)] border-[rgba(12,12,12,0.15)] border-[14px] mb-6 flex flex-col items-center justify-center overflow-hidden relative shadow-inner">
                                    <Image src={services[currentIndex].image} alt={services[currentIndex].title} fill className="object-cover rounded-full p-2" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-white text-center">{services[currentIndex].title}</h3>
                                <div className="w-[154px] h-px bg-[rgba(192,183,232,0.33)] mb-4" />
                                <p className="text-sm text-center text-gray-300 mb-8 max-w-[200px] leading-relaxed">
                                    {services[currentIndex].description}
                                </p>
                                <Button className="w-[154px] text-xs">TRY IT NOW</Button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <button onClick={nextService} className="absolute right-0 z-30 w-12 h-12 rounded-full border-2 border-[rgba(192,183,232,0.3)] flex items-center justify-center hover:bg-[rgba(192,183,232,0.1)] transition-colors"><ChevronRight className="text-[#c0b7e8]" /></button>
                </div>
            </div>

            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 justify-items-center">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center bg-gradient-to-b from-[#433d60] to-[#211e2e] rounded-[40px] p-8 pb-10 shadow-2xl hover:scale-[1.03] transition-transform duration-300 w-full max-w-[310px]"
                    >
                        {/* Image Wrapper */}
                        <div className="w-[219px] h-[219px] rounded-full bg-[rgba(12,12,12,0.1)] border-[rgba(12,12,12,0.15)] border-[14px] mb-8 flex flex-col items-center justify-center overflow-hidden relative shadow-inner">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover rounded-full p-2"
                            />
                        </div>

                        <h3 className="text-2xl font-bold uppercase mb-4 text-white">{service.title}</h3>

                        {/* Divider line */}
                        <div className="w-[154px] h-px bg-[rgba(192,183,232,0.33)] mb-4" />

                        <p className="text-sm text-center text-gray-300 mb-8 max-w-[200px] leading-relaxed">
                            {service.description}
                        </p>

                        <Button className="w-[154px] text-xs">TRY IT NOW</Button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
