import React from "react";
import { motion } from "framer-motion";
import { ChapterMarker } from "@/components/ChapterMarker";

const BrandStory = () => {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    };

    return (
        <section
            data-testid="brand-story-section"
            className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-arabian text-armadillo overflow-hidden"
        >
            {/* Decorative Devanagari watermark */}
            <div
                className="absolute -right-10 top-1/2 -translate-y-1/2 font-devanagari text-burma/[0.04] pointer-events-none select-none hidden md:block"
                style={{ fontSize: "clamp(15rem, 25vw, 30rem)", lineHeight: 1 }}
                aria-hidden="true"
            >
                अर्थ
            </div>

            <div className="relative max-w-6xl mx-auto">
                <ChapterMarker number="I" label="The Meaning" tone="dark" />

                <motion.h2
                    {...fadeUp}
                    className="font-headline text-burma mt-10 mb-8 leading-[1.05]"
                    style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
                >
                    In Sanskrit,{" "}
                    <span className="italic font-devanagari text-armadillo">
                        अर्थ
                    </span>{" "}
                    means <br className="hidden md:block" />
                    <span className="italic">purpose, worth, essence.</span>
                </motion.h2>

                <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-16 md:mt-20">
                    <div className="md:col-span-5 md:col-start-2">
                        <motion.p
                            {...fadeUp}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1,
                            }}
                            className="font-body text-lg md:text-xl leading-[1.9] text-armadillo/90"
                        >
                            Artham is not a clinic. It is a considered space —
                            where the body is read as a{" "}
                            <em className="font-headline text-burma">
                                living narrative
                            </em>
                            , and every chapter is met with quiet expertise.
                        </motion.p>
                    </div>
                    <div className="md:col-span-5">
                        <motion.p
                            {...fadeUp}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.3,
                            }}
                            className="font-body text-lg md:text-xl leading-[1.9] text-armadillo/90"
                        >
                            We do not seek to fix flaws. We seek to restore
                            alignment — of bone, of skin, of the person who
                            walks in and the one who walks out.
                        </motion.p>
                        <motion.div
                            {...fadeUp}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.5,
                            }}
                            className="mt-10 pl-6 border-l-2 border-gold"
                        >
                            <p className="font-headline italic text-burma text-xl md:text-2xl leading-relaxed">
                                &ldquo;One idea, given room to breathe — the way
                                a quiet room makes you lower your own
                                voice.&rdquo;
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
