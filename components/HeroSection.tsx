'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Luxury Tailoring Atelier"
                    fill
                    priority
                    className="object-cover object-center opacity-60"
                    sizes="100vw"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">

                {/* Animated Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="w-24 h-[1px] bg-accent mb-8 origin-center"
                />

                {/* Headline */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-9xl font-serif text-foreground tracking-tight leading-none"
                    >
                        Bespoke. <span className="italic font-light text-secondary">By Design.</span>
                    </motion.h1>
                </div>

                {/* Subheading */}
                <div className="overflow-hidden mt-6 md:mt-8 max-w-2xl">
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                        className="text-lg md:text-2xl font-light text-secondary tracking-wide"
                    >
                        Tailoring crafted to your exact measure.
                    </motion.p>
                </div>

                {/* Luxury Copy / Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="absolute bottom-12 md:bottom-24 text-xs md:text-sm uppercase tracking-[0.2em] text-white/50"
                >
                    Measured. Cut. Finished by Hand.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSection;
