'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AppointmentCTA = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/cta-bg.png"
                    alt="Luxury Tailor Studio"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-serif text-white mb-6">
                        Begin Your <br /> <span className="italic text-accent">Bespoke Journey</span>
                    </h2>
                    <p className="text-secondary text-lg mb-12 font-light">
                        Private consultations by appointment only. <br />
                        Experience the art of tailoring in our private atelier.
                    </p>

                    <div className="flex flex-col items-center justify-center">
                        <CTAOptions />
                    </div>
                </motion.div>
            </div>

        </section >
    );
};

const CTAOptions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const containerVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                staggerChildren: 0.1,
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    if (!isOpen) {
        return (
            <button
                onClick={toggleOpen}
                className="px-10 py-5 bg-accent text-black font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 min-w-[240px]"
            >
                Book Appointment
            </button>
        );
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-4 min-w-[300px]"
        >
            <p className="text-white/60 text-sm mb-2 uppercase tracking-widest">Select Method</p>

            <motion.a
                variants={itemVariants}
                href="mailto:opuleanceelysian@gmail.com?subject=Bespoke%20Appointment%20Request"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium uppercase tracking-widest text-sm hover:bg-accent hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
            >
                <span>Email Us</span>
            </motion.a>

            <motion.a
                variants={itemVariants}
                href="https://wa.me/918431556694?text=I%20would%20like%20to%20inquire%20about%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium uppercase tracking-widest text-sm hover:bg-accent hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
            >
                <span>WhatsApp (+91 84315 56694)</span>
            </motion.a>

            <motion.a
                variants={itemVariants}
                href="https://wa.me/919902535408?text=I%20would%20like%20to%20inquire%20about%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium uppercase tracking-widest text-sm hover:bg-accent hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
            >
                <span>WhatsApp (+91 99025 35408)</span>
            </motion.a>

            <motion.button
                variants={itemVariants}
                onClick={toggleOpen}
                className="mt-4 text-xs text-white/40 uppercase tracking-widest hover:text-white transition-colors"
            >
                Cancel
            </motion.button>
        </motion.div>
    );
};


export default AppointmentCTA;
