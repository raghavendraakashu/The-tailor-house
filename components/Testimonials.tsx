'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "An experience as refined as the garment itself.",
        author: "Arjun R.",
        role: "Groom"
    },
    {
        quote: "Tailoring that understands the occasion. Flawless fit.",
        author: "Vikram S.",
        role: "Entrepreneur"
    },
    {
        quote: "A rare patience for perfection. The craft speaks.",
        author: "Dev M.",
        role: "Architect"
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const nextParams = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevParams = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 md:py-32 px-6 flex flex-col items-center justify-center bg-background text-center relative overflow-hidden">
            {/* Decorative large quote mark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif text-white/5 pointer-events-none select-none">
                &rdquo;
            </div>

            <div className="relative z-10 max-w-3xl">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl md:text-5xl font-serif text-foreground leading-snug mb-8">
                            {testimonials[index].quote}
                        </h3>
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-accent uppercase tracking-widest text-sm font-bold">
                                {testimonials[index].author}
                            </p>
                            <p className="text-secondary text-xs">
                                {testimonials[index].role}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex gap-4 justify-center mt-12">
                    <button
                        onClick={prevParams}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-secondary"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextParams}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-secondary"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
