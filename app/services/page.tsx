'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Bespoke Suits",
        subtitle: "The Pinnacle of Personalization",
        description: (
            <>
                <p className="mb-4">
                    Bespoke is the highest standard of tailoring, a term strictly reserved for garments constructed from the ground up. Unlike made-to-measure, which modifies an existing block, a bespoke suit from <strong className="text-white">The Tailor House</strong> starts with a blank paper pattern, drawn exclusively for your unique anatomy.
                </p>
                <p>
                    This is <strong className="text-white">custom tailoring</strong> in its purest form. We conduct multiple fittings—baste, forward, and financing—to refine the silhouette to millimeter precision. Using traditional horsehair canvas interlinings, we ensure your suit moulds to your body over time, becoming more comfortable with every wear. For those seeking the finest <strong className="text-white">bespoke suits in Bangalore</strong>, our process offers limitless customization, from the width of the lapel to the tension of the stitch. It is an experience of absolute control and uncompromising luxury.
                </p>
            </>
        ),
        image: "/images/suit-hero.png",
        link: "/services/bespoke-suits",
        linkText: "Explore Bespoke"
    },
    {
        title: "Wedding & Occasion Wear",
        subtitle: "Ceremonial Elegance",
        description: (
            <>
                <p className="mb-4">
                    Your wedding day requires a garment that transcends the ordinary—a piece that commands respect and exudes grace. We specialize in <strong className="text-white">wedding tailoring in Bangalore</strong>, creating ensembles that honor tradition while embracing contemporary sophistication.
                </p>
                <p>
                    Whether you require a classic three-piece tuxedo, a velvet bandhgala, or a regal sherwani, our approach remains the same: impeccable fit and exquisite detail. We understand the gravity of the occasion. Our consultants work closely with you to coordinate fabrics and tones that complement the wedding theme and ensuring you look effortless from the ceremony to the reception. Trust us to craft <strong className="text-white">made to measure menswear</strong> that will be admired in photographs for generations to come.
                </p>
            </>
        ),
        image: "/images/wedding-hero.png",
        link: "/services/wedding",
        linkText: "View Wedding Collection"
    },
    {
        title: "Made-to-Measure Formalwear",
        subtitle: "Everyday Distinction",
        description: (
            <>
                <p className="mb-4">
                    For the discerning professional, looking impeccable should be a daily standard, not an occasional luxury. Our Made-to-Measure service bridges the gap between ready-to-wear convenience and bespoke precision. It is the ideal entry point for those building a robust rotation of <strong className="text-white">custom suits in Bangalore</strong>.
                </p>
                <p>
                    We start with our house cut—a timeless, structured silhouette—and adapt it to your measurements. You select from our curated library of Italian and English fabrics, choosing the details that matter to you: buttons, linings, and pocket styles. The result is a garment that fits far superior to any off-the-rack alternative, delivered with greater speed than bespoke, yet retaining the hallmark quality of The Tailor House. It is the smartest way to elevate your professional presence.
                </p>
            </>
        ),
        image: "/images/suit-tuxedo.png",
        link: "/appointment", // Linking to appointment as there is no specific MTM page yet
        linkText: "Book a Consultation"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 md:px-12">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif mb-6"
                >
                    Our Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-secondary text-xl font-light max-w-2xl mx-auto"
                >
                    Comprehensive tailoring solutions for the modern gentleman.
                </motion.p>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto space-y-32">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
                    >
                        {/* Image */}
                        <div className="flex-1 w-full relative aspect-[3/4] md:aspect-[4/3] overflow-hidden rounded-sm group">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <div>
                                <h3 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">{service.subtitle}</h3>
                                <h2 className="text-3xl md:text-5xl font-serif text-foreground">{service.title}</h2>
                            </div>

                            <div className="text-secondary text-lg font-light leading-relaxed">
                                {service.description}
                            </div>

                            <div className="pt-4">
                                <Link
                                    href={service.link}
                                    className="inline-block border-b border-accent text-accent pb-1 hover:text-white hover:border-white transition-colors duration-300 tracking-wide uppercase text-sm"
                                >
                                    {service.linkText}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
