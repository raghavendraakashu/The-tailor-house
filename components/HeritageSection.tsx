'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeritageSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="min-h-screen py-24 md:py-48 px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-32 bg-background overflow-hidden">

            {/* Content Side */}
            <div className="flex-1 max-w-xl self-center md:self-start md:pt-24 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-8 leading-tight">
                        Rooted in <span className="italic text-accent">Tradition</span>. <br />
                        Refined through <br /> centuries.
                    </h2>

                    <div className="space-y-6 text-secondary text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            Our atelier carries forward the art of bespoke tailoring — where patience, precision, and pride define every stitch.
                        </p>
                        <p>
                            We believe that true luxury is not just in the fabric, but in the hands that shape it. Every garment is a dialogue between the master tailor and the cloth, crafted not for trends, but for generations.
                        </p>
                    </div>

                    <div className="mt-12 w-16 h-[1px] bg-white/20" />
                </motion.div>
            </div>

            {/* Image Side with Parallax */}
            <div className="flex-1 w-full relative aspect-[4/5] md:aspect-[3/4]">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/heritage.png"
                            alt="Master tailor stitching"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Subtle vignette/grain overlay could go here */}
                    </div>
                </motion.div>

                {/* Decorative Quote */}
                <motion.div
                    style={{ opacity }}
                    className="absolute -bottom-12 -left-12 md:-left-24 z-20 hidden md:block"
                >
                    <p className="text-9xl font-serif text-white/5 opacity-50 whitespace-nowrap select-none">
                        Craftsmanship
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default HeritageSection;
