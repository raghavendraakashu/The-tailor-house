import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bespoke Suits | The Tailoring House",
    description:
        "Handcrafted bespoke suits made to measure with timeless elegance. The Tailoring House creates luxury suits tailored for fit, comfort, and legacy.",
};

export default function BespokeSuitsPage() {
    return (
        <main className="px-6 py-24 max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair mb-6">
                Bespoke Suits
            </h1>

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
        </main>
    );
}
