import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Bespoke Suits in Bangalore | The Tailoring House",
    description:
        "Luxury bespoke suits in Bangalore, handcrafted for a perfect fit using premium fabrics and timeless tailoring techniques.",
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
                        Bespoke Suits in Bangalore
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Handcrafted for a perfect fit using premium fabrics and timeless tailoring techniques.
                    </p>
                </div>
            </section>

            <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
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

                    <p className="mt-12 text-sm text-muted-foreground">
                        Learn more about our craftsmanship at{" "}
                        <Link href="/" className="underline underline-offset-4">
                            The Tailoring House
                        </Link>
                        .
                    </p>

                    <p className="mt-10 text-sm text-muted-foreground">
                        Planning a special occasion? Explore our{" "}
                        <Link
                            href="/wedding-tailor-bangalore"
                            className="underline underline-offset-4"
                        >
                            wedding tailoring in Bangalore
                        </Link>
                        .
                    </p>
                </div>
                <div className="relative h-[600px] w-full">
                    <Image
                        src="/images/service-suit.png"
                        alt="Bespoke Suit Creation"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </section>
        </main>
    );
}
