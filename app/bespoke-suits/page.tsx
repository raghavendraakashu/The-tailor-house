import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Bespoke Suits | The Tailoring House",
    description:
        "Handcrafted bespoke suits made to measure with timeless elegance. The Tailoring House creates luxury suits tailored for fit, comfort, and legacy.",
};

export default function BespokeSuitsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <Image
                    src="/images/suit-hero.png"
                    alt="Bespoke Suits"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 max-w-4xl pt-20">
                    <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6">
                        Bespoke Suits
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Handcrafted made-to-measure elegance.
                    </p>
                </div>
            </section>

            <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-lg text-muted-foreground mb-6">
                        The Tailoring House specializes in bespoke suits crafted through a
                        meticulous made-to-measure process. Every suit is individually designed
                        to reflect personal style, confidence, and timeless sophistication.
                    </p>

                    <p className="text-lg text-muted-foreground mb-6">
                        From fabric selection to precise hand finishing, each stage of tailoring
                        is guided by craftsmanship and attention to detail. No templates. No
                        shortcuts. Only garments shaped for you.
                    </p>

                    <p className="text-lg text-muted-foreground mb-6">
                        Our bespoke suits are designed for business, formal occasions, and
                        milestone moments, offering lasting comfort and refined elegance.
                    </p>

                    <p className="text-lg text-muted-foreground">
                        A bespoke suit from The Tailoring House is not just clothing — it is an
                        investment in presence, confidence, and enduring style.
                    </p>
                </div>
                <div className="relative h-[500px] w-full">
                    <Image
                        src="/images/process-measure.png"
                        alt="Bespoke Process"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </section>
        </main>
    );
}
