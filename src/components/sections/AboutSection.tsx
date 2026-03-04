'use client';

import React from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
    return (
        <section id="about" className="w-full px-4 md:px-20 py-20 relative">
            <SectionTitle
                title="INTRODUCTION"
                subtitle="TO HYDRA VR"
                description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-16 mt-16 md:mt-24">
                {/* About Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center lg:justify-start relative w-full"
                >
                    <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px]">
                        <div className="relative z-10 w-full h-full rounded-bl-[200px] md:rounded-bl-[240px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[100px] overflow-hidden shadow-[0_0_60px_rgba(192,183,232,0.15)]">
                            <Image
                                src="/images/about_vr.png"
                                alt="About Hydra VR"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-8 -right-8 w-full h-full shape-bg z-0 opacity-80" />
                    </div>
                </motion.div>

                {/* About Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <div className="md:hidden mb-6 flex flex-col items-center">
                        <h2 className="text-2xl font-bold uppercase">ABOUT</h2>
                        <h3 className="text-2xl font-light uppercase">HYDRA VR</h3>
                    </div>
                    <div className="hidden md:block mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">ABOUT</h2>
                        <h3 className="text-3xl md:text-4xl font-light uppercase">HYDRA VR</h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base md:text-md mb-8 md:mb-10 leading-relaxed text-left">
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </p>
                    <Button>LET'S GET IN TOUCH</Button>
                </motion.div>
            </div>
        </section>
    );
}
