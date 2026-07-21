import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ASSETS, BRAND } from "@/lib/content";

/**
 * Hero — Minimalist. Left-aligned editorial. Large whitespace.
 * The logo is the single visual anchor — no side illustration, no seed sprite.
 * The image is placed at the section level so mix-blend-mode:darken
 * can reach the section's bg-arabian directly (no isolated ancestor).
 */
const Hero = () => {
    const { scrollY } = useScroll();
    const yShift = useTransform(scrollY, [0, 500], [0, -50]);

    return (
        <section
            data-testid="hero-section"
            className="relative min-h-[100vh] flex items-center overflow-hidden bg-arabian"
        >
            {/* Ambient warm halo */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full bg-gradient-radial from-[#b8894a]/8 via-transparent to-transparent blur-3xl" />
            </div>

            {/* Editorial meta */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 font-secondary text-[10px] uppercase tracking-[0.4em] text-burma/50">
                Est. Noida
            </div>
            <div className="absolute top-8 right-8 md:top-12 md:right-12 font-secondary text-[10px] uppercase tracking-[0.4em] text-burma/50">
                A Living Philosophy
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-start text-left">
                {/*
                 * Logo — wrapped in an isolated blend context. The wrapper has
                 * the same beige as the section; because `isolation:isolate`
                 * confines the mix-blend-mode to this wrapper, `darken` here
                 * reliably strips the near-white PNG background, leaving only
                 * the copper lotus and Devanagari glyphs visible.
                 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-14 md:mb-16 select-none"
                    style={{
                        isolation: "isolate",
                        backgroundColor: "#efdfc8",
                    }}
                >
                    <img
                        data-testid="hero-logo"
                        src={ASSETS.logoLight}
                        alt="Artham — Lotus & Human, अर्थम्"
                        className="block w-[190px] md:w-[240px] lg:w-[260px] h-auto"
                        style={{ mixBlendMode: "darken" }}
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    style={{ y: yShift }}
                    className="w-full"
                >
                    {/* Micro-overline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.45em] text-burma mb-6"
                    >
                        Orthopedic · Aesthetic · Wellness
                    </motion.p>

                    {/* Headline */}
                    <motion.h1
                        data-testid="hero-headline"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="font-headline text-armadillo leading-[1.02] mb-8 max-w-3xl"
                        style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.25rem)" }}
                    >
                        Meaningful Care.
                        <br />
                        <span className="italic text-burma">
                            Beautifully Delivered.
                        </span>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="font-body text-armadillo/80 text-base md:text-lg leading-[1.9] max-w-xl mb-14"
                    >
                        Every great journey begins with purpose.{" "}
                        <span className="font-headline italic text-burma">
                            {BRAND.parent}
                        </span>{" "}
                        is the foundation from which exceptional healthcare
                        experiences grow.
                    </motion.p>

                    {/* Single CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.3 }}
                    >
                        <button
                            data-testid="hero-discover-btn"
                            onClick={() => {
                                const el = document.getElementById("journey");
                                if (el)
                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                            className="group bg-burma text-arabian px-10 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-armadillo transition-colors duration-500 inline-flex items-center gap-4"
                        >
                            Discover Our Story
                            <ArrowDown
                                size={16}
                                strokeWidth={1.6}
                                className="opacity-75 group-hover:translate-y-1 transition-transform duration-500"
                                aria-hidden="true"
                            />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="font-secondary text-[9px] uppercase tracking-[0.5em] text-burma/50">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-10 bg-burma/30"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
