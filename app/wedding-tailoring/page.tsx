import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wedding Tailoring | The Tailoring House",
    description:
        "Luxury wedding tailoring with handcrafted bespoke suits and ceremonial wear. The Tailoring House creates made-to-measure garments for timeless celebrations.",
};

export default function WeddingTailoringPage() {
    return (
        <main className="px-6 py-24 max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair mb-6">
                Wedding Tailoring
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
                Weddings mark moments that last a lifetime. At The Tailoring House,
                wedding tailoring is approached with precision, patience, and respect
                for tradition. Every garment is crafted to complement the significance
                of the occasion.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
                From bespoke suits to ceremonial ensembles, our made-to-measure process
                ensures perfect fit, comfort, and elegance. Each detail — fabric,
                silhouette, and finish — is carefully considered.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
                Whether designed for intimate ceremonies or grand celebrations, our
                wedding garments are handcrafted to reflect personal style while
                maintaining timeless sophistication.
            </p>

            <p className="text-lg text-muted-foreground">
                A wedding outfit from The Tailoring House is more than attire — it is a
                reflection of legacy, craftsmanship, and enduring elegance.
            </p>
        </main>
    );
}
