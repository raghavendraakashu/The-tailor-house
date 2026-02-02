import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bespoke Suits in Bangalore | The Tailoring House",
    description:
        "Luxury bespoke suits in Bangalore, handcrafted for a perfect fit using premium fabrics and timeless tailoring techniques.",
};

export default function BespokeSuitsPage() {
    return (
        <main className="px-6 py-24 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6">
                Bespoke Suits in Bangalore
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
                At The Tailoring House, we create bespoke suits in Bangalore that reflect
                individuality, precision, and timeless elegance. Each suit is
                handcrafted to your measurements, ensuring a flawless fit and refined
                silhouette.
            </p>

            <h2 className="text-2xl font-playfair mb-4">
                Why Choose Our Bespoke Tailoring
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Fully hand-crafted, made-to-measure suits</li>
                <li>Premium wool, linen, and blended fabrics</li>
                <li>Personalized fittings and style consultation</li>
                <li>Ideal for business, weddings, and formal occasions</li>
            </ul>

            <p className="text-muted-foreground">
                If you are looking for a bespoke tailor in Bangalore who values
                craftsmanship and detail, The Tailoring House offers a truly personal
                tailoring experience.
            </p>
        </main>
    );
}
