import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Wedding Tailoring | The Tailoring House",
    description:
        "Luxury wedding tailoring with handcrafted bespoke suits and ceremonial wear. The Tailoring House creates made-to-measure garments for timeless celebrations.",
};

export default function WeddingTailoringPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <Image
                    src="/images/wedding-hero.png"
                    alt="Wedding Tailoring"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 max-w-4xl pt-20">
                    <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6">
                        Wedding Tailoring
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Handcrafted for timeless celebrations.
                    </p>
                </div>
            </section>

            <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
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
                </div>
                <div className="relative h-[500px] w-full">
                    <Image
                        src="/images/wedding-sherwani.png"
                        alt="Wedding Ceremonial Wear"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </section>
        </main>
    );
}
