'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FabricWeaveCanvas from '@/canvas/FabricWeaveCanvas';

const FabricPhilosophy = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/fabric-texture.png"
                    alt="Luxury Fabric Macro"
                    fill
                    className="object-cover opacity-30"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Canvas Animation */}
            <FabricWeaveCanvas />

            {/* Content */}
            <div className="relative z-20 max-w-4xl text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="border-l-2 border-accent pl-8 md:pl-12 text-left"
                >
                    <p className="text-secondary uppercase tracking-widest text-sm mb-6">Philosophy</p>
                    <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-tight mb-8">
                        "Fabric is not chosen <br />
                        <span className="text-white/40 italic">— it is understood."</span>
                    </h2>
                    <p className="text-lg md:text-2xl font-light text-secondary max-w-2xl">
                        True luxury is felt, not announced. We select materials that breathe, move, and age with grace.
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default FabricPhilosophy;
