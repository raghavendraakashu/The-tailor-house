import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wedding Tailor in Bangalore | The Tailoring House",
    description:
        "Luxury wedding tailoring in Bangalore for grooms and special occasions. Handcrafted sherwanis, suits, and bespoke wedding attire.",
};

export default function WeddingTailorPage() {
    return (
        <main className="px-6 py-24 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6">
                Wedding Tailor in Bangalore
            </h1>

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
                <a
                    href="/bespoke-suits-bangalore"
                    className="underline underline-offset-4"
                >
                    bespoke suits in Bangalore
                </a>
                .
            </p>
        </main>
    );
}
