'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate asset loading time or minimum wait for effect
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode='wait'>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0E0E0E]"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Content Container */}
                    <div className="relative overflow-hidden flex flex-col items-center">

                        {/* Animated Text */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col items-center gap-2"
                        >
                            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase">
                                Tailor House
                            </h1>
                            <div className="flex items-center gap-4 w-full justify-center">
                                <motion.div
                                    className="h-[1px] bg-accent w-0"
                                    animate={{ width: "40px" }} // width doesn't animate well with 'w', use number or string width
                                    style={{ width: 0 }}
                                    whileInView={{ width: 60 }} // Actually we are not scrolling.
                                // Use standard animate prop
                                />
                                <span className="text-xs text-accent uppercase tracking-[0.3em]">Est. 1984</span>
                                <motion.div className="h-[1px] bg-accent w-12" />
                            </div>
                        </motion.div>

                        {/* Loading Line */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-[1px] bg-white/20 w-full mt-8"
                            initial={{ scaleX: 0, transformOrigin: "left" }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
