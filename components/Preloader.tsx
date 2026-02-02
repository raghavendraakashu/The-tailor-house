'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Failsafe: If the preloader doesn't dismiss naturally, force it after a timeout
        // Also resets properly on hard refresh
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    // Ensure preloader dismisses if route changes (navigating between pages)
    useEffect(() => {
        if (isLoading) {
            setIsLoading(false);
            // Optional: keep it true if you want it to show on every nav, 
            // but usually we want to ensure it doesn't get stuck.
            // Here we imply: if navigation happens, content is ready, so dismiss.
            // But actually, for a "splash" screen, we just want it once.
            // If we are already loading, let the timer finish or user interaction dismiss?
            // Actually, safest pattern for "stuck" loader is to dismiss on path change.
        }
    }, [pathname]);

    return (
        <AnimatePresence mode='wait'>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0E0E0E]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Content Container */}
                    <div className="relative overflow-hidden flex flex-col items-center">

                        {/* Animated Text */}
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase">
                                Tailor House
                            </h1>
                            <div className="flex items-center gap-4 w-full justify-center">
                                <motion.div
                                    className="h-[1px] bg-accent"
                                    initial={{ width: 0 }}
                                    animate={{ width: 60 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                                <span className="text-xs text-accent uppercase tracking-[0.3em]">Est. 1984</span>
                                <motion.div
                                    className="h-[1px] bg-accent"
                                    initial={{ width: 0 }}
                                    animate={{ width: 60 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                            </div>
                        </div>

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
