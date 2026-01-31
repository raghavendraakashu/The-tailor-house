'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const alterationsServices = [
    {
        title: "Precision Resizing",
        description: "Adjusting your existing garments to your current measurements. We ensure the balance and proportion remain intact.",
        image: "/images/process-measure.png",
    },
    {
        title: "Tapering & Restyling",
        description: "Modernize a classic silhouette. We can slim down trousers, suppress waists, and reshape lapels for a contemporary look.",
        image: "/images/process-cut.png",
    },
    {
        title: "Repair & Restoration",
        description: "Extending the life of your favorite pieces. From re-lining jackets to invisible mending of tears and moth holes.",
        image: "/images/process-finish.png",
    },
    {
        title: "Vintage Revitalizing",
        description: "Bbreathing new life into heirloom pieces. We delicately restore vintage fabrics and adjust fits for modern wear.",
        image: "/images/heritage.png",
    }
];

export default function AlterationsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/process-fit.png"
                    alt="Master Tailor Adjusting Fit"
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
                        Alterations & Fit
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-light tracking-wide"
                    >
                        The pursuit of perfection doesn't end at delivery.
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
                        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Refining Your Wardrobe</h2>
                        <p className="text-secondary font-light leading-relaxed">
                            A great suit is defined by its fit. Whether it's a new commission or a cherished piece from your wardrobe,
                            our master tailors apply the same bespoke standards to every adjustment.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                        {alterationsServices.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-neutral-800">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, 50vw"
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
