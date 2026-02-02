import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | The Tailoring House",
    description:
        "The Tailoring House is a bespoke tailoring brand crafting handcrafted suits, sherwanis, and formalwear with timeless elegance.",
};

export default function AboutPage() {
    return (
        <main className="px-6 py-24 max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair mb-6">
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

            <p className="text-lg text-muted-foreground">
                Each piece is made to measure, ensuring comfort, longevity, and an
                unmistakable presence.
            </p>
        </main>
    );
}
