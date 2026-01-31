'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fabrics = [
    {
        title: "Super 150s Wool",
        description: "The gold standard for business suits. Exceptional drape, natural breathability, and a soft, luxurious hand.",
        image: "/images/fabric-wool.png",
    },
    {
        title: "Egyptian Cotton",
        description: "Crisp, cool, and undeniably smooth. The perfect foundation for our bespoke shirting collection.",
        image: "/images/fabric-texture.png",
    },
    {
        title: "Irish Linen",
        description: "Sourced from the finest mills in Ireland. A summer essential known for its unique texture and cooling properties.",
        image: "/images/fabric-texture.png",
    },
    {
        title: "Pure Silk & Velvet",
        description: "For evening wear that commands attention. Rich lusters and deep piles for tuxedos and sherwanis.",
        image: "/images/fabric-texture.png",
    },
    {
        title: "Vicuna & Cashmere",
        description: "The rarest fibers on earth. Unmatched softness and warmth for overcoats and winter jacketing.",
        image: "/images/fabric-texture.png",
    },
    {
        title: "Technical Performance",
        description: "Modern innovation meets classic tailoring. Water-resistant, wrinkle-free, and high-stretch fabrics for travel.",
        image: "/images/fabric-texture.png",
    }
];

export default function FabricsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/fabric-texture.png"
                    alt="Luxury Fabric Rolls"
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
                        Premium Fabrics
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-light tracking-wide"
                    >
                        Sourced from the world's most prestigious mills.
                    </motion.p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-16 text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">The Material Difference</h2>
                        <p className="text-secondary font-light leading-relaxed">
                            A bespoke garment begins with the fabric. We curate our collection from legendary mills like
                            Loro Piana, Zegna, and Holland & Sherry to ensure your commission looks and feels exceptional.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {fabrics.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-neutral-800">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
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
