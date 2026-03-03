'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input, Textarea } from '@/components/ui/input';
import { motion } from 'framer-motion';

export function OptInSection() {
    return (
        <section className="w-full px-4 md:px-20 py-20 relative z-20 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full bg-gradient-to-b from-[#403a5f] via-[#312c46] to-[#211e2e] rounded-[60px] md:rounded-[100px] shadow-2xl p-10 md:p-24 flex flex-col items-center border border-[rgba(255,255,255,0.05)]"
            >
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-center tracking-wide">JOIN HYDRA</h2>
                <div className="w-[200px] md:w-[300px] h-px bg-gradient-to-r from-transparent via-[#c0b7e8] to-transparent mb-8 md:mb-6 opacity-40 shadow-[0_0_10px_rgba(192,183,232,0.8)]" />
                <h3 className="text-2xl md:text-4xl font-light mb-16 text-center text-gray-200">Let's Build Your VR Experience</h3>

                <form className="w-full max-w-5xl flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Phone Number" type="tel" />
                    </div>
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Tell Us Something..." rows={6} className="h-48" />

                    <div className="w-full flex justify-center mt-8">
                        <Button className="px-16 py-5 text-sm md:text-base tracking-wider shadow-xl shadow-[#c0b7e8]/10">SEND TO HYDRA</Button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
