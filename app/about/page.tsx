'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1"
                >
                    <span className="text-accent uppercase tracking-[0.2em] text-sm mb-4 block">Our Philosophy</span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                        Defined by <span className="italic text-secondary">Discipline</span>. <br />
                        Crafted for Character.
                    </h1>

                    <div className="space-y-6 text-secondary text-lg font-light leading-relaxed">
                        <p>
                            <strong className="text-white font-medium">The Tailor House</strong> was founded on a simple, immutable principle: that excellence is not an act, but a habit. In an era of fast fashion and fleeting trends, we stand as a bastion of permanence. We view tailoring not as a service, but as a discipline—a rigorous pursuit of the perfect line, the ideal drape, and the ultimate comfort.
                        </p>
                        <p>
                            Our journey began with a desire to bring world-class <strong className="text-white font-medium">bespoke suits to India</strong>, merging the structural integrity of British tailoring with the lightweight comfort required for our tropical climate. We believe that a suit should never constrain; it should liberate. It should empower the wearer, providing a silent confidence that fills the room before a word is spoken.
                        </p>
                        <p>
                            We are a team of master cutters, artisans, and stylists dedicated to the individual. We reject the "one size fits all" mentality. Instead, we treat every body as a unique canvas. Our heritage is built on long-standing relationships with our clients, many of whom have trusted us with their wardrobes for decades. When you choose The Tailor House, you are not just buying a garment; you are investing in a legacy of craftsmanship.
                        </p>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="order-1 md:order-2 relative aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden"
                >
                    <Image
                        src="/images/process-cut.png"
                        alt="Master Cutter at work"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </motion.div>
            </div>
        </main>
    );
}
