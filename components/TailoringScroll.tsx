"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "1. The Measure",
        description:
            "Every journey begins with precision. We chart the contours of your frame to ensure a drape that feels like a second skin.",
        image: "/images/process-measure.png",
        alt: "Master tailor measuring client",
    },
    {
        id: 2,
        title: "2. The Cut",
        description:
            "Fabric shaped with intention. Our masters translate measurements into a unique paper pattern, cutting the cloth by hand.",
        image: "/images/process-cut.png",
        alt: "Cutting fabric",
    },
    {
        id: 3,
        title: "3. The Fit",
        description:
            "Refined through patience. Multiple fittings mold the garment to your posture, balancing comfort with structure.",
        image: "/images/process-fit.png",
        alt: "Bespoke fitting",
    },
    {
        id: 4,
        title: "4. The Finish",
        description:
            "Delivered without compromise. Hand-stitched buttonholes, monogramming, and final pressing complete the masterpiece.",
        image: "/images/process-finish.png",
        alt: "Finished suit",
    },
];

export default function TailoringScroll() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.min(Math.floor(latest * steps.length), steps.length - 1);
            setActiveStep(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#0A0A0A]">
            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">

                {/* LEFT — TEXT */}
                <div className="flex-1 flex items-center px-6 md:px-24 z-20 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-transparent">
                    <div className="max-w-lg relative h-[260px] md:h-[320px] w-full">

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{
                                    opacity: index === activeStep ? 1 : 0,
                                    y: index === activeStep ? 0 : 24,
                                    pointerEvents: index === activeStep ? "auto" : "none",
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <h3 className="text-accent text-sm md:text-base font-bold uppercase tracking-widest mb-4">
                                    The Process
                                </h3>

                                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                                    {step.title}
                                </h2>

                                <p className="text-secondary text-lg md:text-xl font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}

                        {/* Progress Bar */}
                        <div className="absolute -bottom-14 left-0 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-accent"
                                style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT — IMAGES */}
                <div className="flex-1 relative h-full w-full">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{
                                opacity: index === activeStep ? 1 : 0,
                                scale: index === activeStep ? 1 : 1.1,
                                zIndex: index === activeStep ? 10 : 0,
                            }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <Image
                                src={step.image}
                                alt={step.alt}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="50vw"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
