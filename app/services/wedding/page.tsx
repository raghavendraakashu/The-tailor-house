'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const weddingCollections = [
    {
        title: "The Royal Sherwani",
        description: "Hand-embroidered masterpieces inspired by royal heritage. Intricate zardosi, velvet textures, and majestic silhouettes.",
        image: "/images/wedding-sherwani.png",
    },
    {
        title: "The Wedding Suit",
        description: "Impeccable three-piece suits in premium Italian wools. Designed to make you stand out on your most important day.",
        image: "/images/wedding-suit.png",
    },
    {
        title: "Reception Tuxedos",
        description: "Midnight blue and jet black tuxedos with satin details. The perfect evening look for the modern groom.",
        image: "/images/wedding-tuxedo.png",
    },
    {
        title: "The Trousseau",
        description: "A complete wardrobe curated for the groom. From engagement to reception, we ensure every look is perfect.",
        image: "/images/wedding-trousseau.png",
    },
    {
        title: "Father & Family",
        description: "Coordinated elegance for the father of the bride and groom. Timeless cuts that honor the occasion.",
        image: "/images/wedding-family.png",
    },
    {
        title: "Ceremonial Accessories",
        description: "The finishing touches. Safas, pocket squares, handcrafted mojris, and cufflinks to complete the ensemble.",
        image: "/images/wedding-accessories.png",
    }
];

export default function WeddingPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/wedding-hero.png"
                    alt="Luxury Wedding Atelier"
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
                        Wedding & Occasion
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-light tracking-wide"
                    >
                        Crafted for moments that last a lifetime.
                    </motion.p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {weddingCollections.map((item, index) => (
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
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif text-foreground mb-3">{item.title}</h3>
                                <p className="text-secondary font-light leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
