import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Wedding Tailor in Bangalore | The Tailoring House",
    description:
        "Luxury wedding tailoring in Bangalore for grooms and special occasions. Handcrafted sherwanis, suits, and bespoke wedding attire.",
};

export default function WeddingTailorPage() {
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
                        Wedding Tailor in Bangalore
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Luxury wedding tailoring for grooms and special occasions.
                    </p>
                </div>
            </section>

            <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-lg text-muted-foreground mb-8">
                        Your wedding day demands perfection. As a premier wedding tailor in
                        Bangalore, The Tailoring House specializes in crafting exquisite bespoke
                        attire that blends traditional grandeur with contemporary elegance. Whether
                        you envision a regal sherwani or a sharp tuxedo, our master cutters ensure
                        you look your absolute best.
                    </p>

                    <h2 className="text-2xl font-playfair mb-4">
                        Our Wedding Services
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                        <li>Custom-designed Sherwanis and Bandhgalas</li>
                        <li>Bespoke Tuxedos and Three-Piece Suits</li>
                        <li>Personalized fittings for the Groom and Groomsmen</li>
                        <li>Premium Italian wools, velvets, and ceremonial silks</li>
                    </ul>

                    <p className="text-muted-foreground">
                        While we specialize in ceremonial wear, we also offer exceptional{" "}
                        <Link
                            href="/bespoke-suits-bangalore"
                            className="underline underline-offset-4 hover:text-foreground transition"
                        >
                            bespoke suits for other formal occasions
                        </Link>
                        , ensuring your wardrobe is complete for every event surrounding your big day.
                    </p>

                    <p className="mt-12 text-sm text-muted-foreground">
                        Visit{" "}
                        <Link href="/" className="underline underline-offset-4">
                            The Tailoring House
                        </Link>{" "}
                        to begin your journey.
                    </p>

                    <p className="mt-10 text-sm text-muted-foreground">
                        For formal and business wear, view our{" "}
                        <Link
                            href="/bespoke-suits-bangalore"
                            className="underline underline-offset-4"
                        >
                            bespoke suits in Bangalore
                        </Link>
                        .
                    </p>
                </div>
                <div className="relative h-[600px] w-full">
                    <Image
                        src="/images/wedding-sherwani.png"
                        alt="Wedding Sherwani and Suits"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </section>
        </main>
    );
}
