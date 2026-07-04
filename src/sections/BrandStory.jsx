import React from "react";
import { motion } from "framer-motion";
import { ChapterMarker } from "@/components/ChapterMarker";

const BrandStory = () => {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    };

    return (
        <section
            data-testid="brand-story-section"
            className="relative overflow-hidden bg-[#F7F1E7] py-28 md:py-40 px-6 md:px-12 lg:px-24"
        >
            {/* Decorative background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#B8894A]/10 blur-[140px]" />
            </div>

            {/* Sanskrit watermark */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:block pointer-events-none select-none"
                style={{
                    fontSize: "22rem",
                    lineHeight: 1,
                    color: "rgba(139,90,43,.04)",
                }}
            >
                <span className="font-devanagari">अर्थ</span>
            </div>

            <div className="relative max-w-6xl mx-auto">

                <ChapterMarker
                    number="I"
                    label="The Meaning"
                    tone="dark"
                />

                <motion.h2
                    {...fadeUp}
                    className="mt-8 text-burma font-headline leading-[1.05]"
                    style={{
                        fontSize: "clamp(2.7rem,5vw,4.8rem)",
                    }}
                >
                    In Sanskrit,
                    <span className="font-devanagari italic text-armadillo">
                        {" "}अर्थ{" "}
                    </span>
                    means
                    <br className="hidden md:block" />
                    <span className="italic">
                        purpose, worth & essence.
                    </span>
                </motion.h2>

                {/* Premium Content Card */}

                <motion.div
                    {...fadeUp}
                    className="mt-16 rounded-[32px] border border-[#D9C6AA] bg-[#FCF8F2]/90 backdrop-blur-sm shadow-[0_25px_70px_rgba(139,90,43,0.08)] p-8 md:p-14"
                >
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16">

                        <div>

                            <p className="font-body text-lg md:text-xl leading-[2] text-armadillo/90">
                                Artham is not simply a clinic. It is a
                                thoughtfully designed space where every
                                consultation begins with listening and every
                                treatment begins with understanding.
                            </p>

                            <p className="mt-8 font-body text-lg md:text-xl leading-[2] text-armadillo/90">
                                We believe the body tells a story. Our role is
                                not merely to treat symptoms, but to understand
                                that story with patience, precision and care.
                            </p>

                        </div>

                        <div className="flex flex-col justify-between">

                            <p className="font-body text-lg md:text-xl leading-[2] text-armadillo/90">
                                Whether restoring movement through orthopedic
                                care or enhancing confidence through aesthetic
                                medicine, every decision is guided by evidence,
                                empathy and timeless craftsmanship.
                            </p>

                            <div className="mt-12 border-l-2 border-[#B8894A] pl-6">

                                <p className="font-headline italic text-burma text-2xl leading-relaxed">
                                    “True healing begins when science is guided
                                    by purpose and delivered with quiet care.”
                                </p>

                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BrandStory;