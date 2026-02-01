'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesGrid = () => {
    const services = [
        {
            title: "Bespoke Suits",
            description: "Individually measured. Impeccably balanced.",
            image: "/images/service-suit.png",
            alt: "Bespoke Suit",
            href: "/services/bespoke-suits"
        },
        {
            title: "Wedding & Occasion",
            description: "Crafted for moments that last a lifetime.",
            image: "/images/service-wedding.png",
            alt: "Wedding Sherwani",
            href: "/services/wedding"
        },
        {
            title: "Premium Fabrics",
            description: "Selected from the world’s finest mills.",
            image: "/images/service-fabrics.png",
            alt: "Luxury Fabrics",
            href: "/services/fabrics"
        },
        {
            title: "Alterations & Fit",
            description: "Perfection refined over time.",
            image: "/images/heritage.png",
            alt: "Precision Fitting",
            href: "/services/alterations"
        }
    ];

    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <span className="text-accent uppercase tracking-widest text-xs font-bold mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground">Curated Services</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-white/5">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>
                                <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                                <p className="text-secondary font-light text-sm">{service.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
