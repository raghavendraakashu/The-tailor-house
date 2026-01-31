'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const suits = [
    {
        title: "Business Suits",
        description: "Command respect with sharp lines, classic cuts, and premium wools designed for the boardroom.",
        image: "/images/suit-business.png",
    },
    {
        title: "Wedding & Ceremonial",
        description: "Make your special day unforgettable with bespoke sherwanis, tuxedos, and three-piece suits.",
        image: "/images/suit-wedding.png",
    },
    {
        title: "Tuxedos & Black Tie",
        description: "Timeless elegance for evening affairs. Satin lapels, perfect fits, and uncompromising style.",
        image: "/images/suit-tuxedo.png",
    },
    {
        title: "Casual & Linen",
        description: "Relaxed sophistication. Breathable linen and unstructured cuts for summer ease.",
        image: "/images/suit-linen.png",
    },
    {
        title: "Jodhpuri & Bandhgala",
        description: "The majesty of Indian royalty. Structured collars and intricate detailing for distinct presence.",
        image: "/images/suit-ethnic.png",
    },
    {
        title: "Overcoats & Outerwear",
        description: "Layer with luxury. Cashmere and wool blends tailored to fit perfectly over your suit.",
        image: "/images/suit-overcoat.png",
    }
];

export default function BespokeSuitsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/suit-hero.png"
                    alt="Bespoke Suit Atelier"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6"
                    >
                        The Bespoke Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-light tracking-wide"
                    >
                        Elegance for every occasion. Crafted to your exact measurements.
                    </motion.p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {suits.map((suit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-neutral-800">
                                    <Image
                                        src={suit.image}
                                        alt={suit.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif text-foreground mb-3">{suit.title}</h3>
                                <p className="text-secondary font-light leading-relaxed">{suit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
