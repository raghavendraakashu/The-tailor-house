import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | The Tailoring House",
    description:
        "The Tailoring House is a bespoke tailoring brand crafting handcrafted suits, sherwanis, and formalwear with timeless elegance.",
};

export default function AboutPage() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div>
                    <h1 className="text-4xl md:text-5xl font-playfair mb-6">
                        About The Tailoring House
                    </h1>
                    <p className="text-lg text-muted-foreground mb-6">
                        The Tailoring House is a bespoke tailoring studio dedicated to timeless
                        craftsmanship, precision fitting, and refined elegance. Every garment
                        is handcrafted to reflect individuality, confidence, and legacy.
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                        From bespoke suits and wedding ensembles to ceremonial and formal wear,
                        our process blends traditional tailoring techniques with modern design
                        sensibilities.
                    </p>
                </div>
                <div className="relative h-[400px] md:h-[600px] w-full">
                    <Image
                        src="/images/heritage.png"
                        alt="Tailoring Heritage"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full md:order-last">
                    <Image
                        src="/images/process-measure.png"
                        alt="Bespoke Measurement Process"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-playfair mb-6">Precision in Every Stitch</h2>
                    <p className="text-lg text-muted-foreground">
                        Each piece is made to measure, ensuring comfort, longevity, and an
                        unmistakable presence. We believe that true luxury lies in the details—from
                        the selection of premium fabrics to the final hand-stitched finish.
                    </p>
                </div>
            </div>
        </main>
    );
}
