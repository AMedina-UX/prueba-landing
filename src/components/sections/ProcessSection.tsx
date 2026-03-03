'use client';

import React from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { motion } from 'framer-motion';

const processes = [
    { id: '01', title: '3D Conception', subtitle: '& Design' },
    { id: '02', title: 'Interaction', subtitle: 'Design' },
    { id: '03', title: 'VR World', subtitle: 'User Testing' },
    { id: '04', title: 'Hydra VR', subtitle: 'Deploy' },
];

export function ProcessSection() {
    return (
        <section id="how-to" className="w-full px-4 md:px-20 py-20 relative z-20 mt-10">
            <SectionTitle
                title="HOW WE BUILD"
                subtitle="WITH HYDRA VR?"
                description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />

            <div className="relative mt-32 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-4">
                {/* Connection Line (hidden on mobile) */}
                <div className="hidden lg:block absolute top-[99px] left-0 w-full h-[3px] bg-gradient-to-r from-[rgba(192,183,232,0.1)] via-[#c0b7e8] to-[rgba(192,183,232,0.1)] z-0 shadow-[0_0_15px_rgba(192,183,232,0.5)]" />

                {processes.map((process, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex flex-col items-center relative z-10 group cursor-pointer"
                    >
                        {/* Number Circle */}
                        <div className="w-[198px] h-[198px] rounded-full bg-[rgba(12,12,12,0.1)] border-[rgba(192,183,232,0.2)] border-[14px] flex items-center justify-center mb-10 shadow-xl shadow-[#c0b7e8]/5 group-hover:scale-110 group-hover:border-[rgba(192,183,232,0.5)] transition-all duration-300 backdrop-blur-sm">
                            <div className="w-[159px] h-[159px] rounded-full bg-gradient-to-r from-[#8176af] to-[#c0b7e8] flex items-center justify-center shadow-inner shadow-black/30">
                                <span className="text-6xl font-bold text-[#343045] drop-shadow-md">{process.id}</span>
                            </div>
                        </div>

                        {/* Title with arrow */}
                        <div className="flex items-start gap-4 h-16 group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-[#c0b7e8] text-2xl mt-1">→</div>
                            <div className="font-bold text-xl md:text-2xl text-white">
                                <p className="hover:text-[#c0b7e8] transition-colors">{process.title}</p>
                                <p className="hover:text-[#c0b7e8] transition-colors">{process.subtitle}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
