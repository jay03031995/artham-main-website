import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ASSETS, BRAND } from "@/lib/content";
import { SeedSprite } from "@/components/SeedSprite";

/**
 * Hero — logo highlighted first. Left-aligned editorial layout.
 * Right side hosts a tiny seed emerging from soil (SVG). As user scrolls
 * onward, the next scene picks up and grows the tree.
 */
const Hero = () => {
    const { scrollY } = useScroll();
    const yShift = useTransform(scrollY, [0, 500], [0, -60]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section
            data-testid="hero-section"
            className="relative min-h-[100vh] flex items-center overflow-hidden bg-arabian"
        >
            {/* Ambient warm glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-radial from-[#b8894a]/12 via-transparent to-transparent blur-3xl" />
            </div>

            {/* Editorial corner meta */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 font-secondary text-[10px] uppercase tracking-[0.4em] text-burma/60">
                Est. Noida
            </div>
            <div className="absolute top-8 right-8 md:top-12 md:right-12 font-secondary text-[10px] uppercase tracking-[0.4em] text-burma/60">
                A Living Philosophy
            </div>

            <motion.div
                style={{ y: yShift, opacity }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 md:gap-16 items-center"
            >
                {/* LEFT — logo highlighted + copy */}
                <div className="md:col-span-7 flex flex-col items-start text-left">
                    {/* The logo is the first thing that lands, and it's large */}
                    <motion.img
                        data-testid="hero-logo"
                        src={ASSETS.logo}
                        alt="Artham — Lotus & Human, अर्थम्"
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2,
                        }}
                        className="w-[220px] md:w-[300px] lg:w-[340px] h-auto mb-10 md:mb-12 select-none"
                        draggable="false"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="font-secondary text-[11px] md:text-xs uppercase tracking-[0.4em] text-burma mb-6"
                    >
                        Orthopedic · Aesthetic · Wellness
                    </motion.p>

                    <motion.h1
                        data-testid="hero-headline"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.25 }}
                        className="font-headline text-armadillo leading-[1.05] mb-6"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
                    >
                        Meaningful Care.
                        <br />
                        <span className="italic text-burma">
                            Beautifully Delivered.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="font-body text-armadillo/85 text-base md:text-lg leading-[1.9] max-w-xl mb-10"
                    >
                        Every great journey begins with purpose.{" "}
                        <span className="font-headline italic text-burma">
                            {BRAND.parent}
                        </span>{" "}
                        is the foundation from which exceptional healthcare
                        experiences grow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.75 }}
                        className="flex items-center gap-6"
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
                            className="group bg-burma text-arabian px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-armadillo transition-colors duration-500 inline-flex items-center gap-3"
                        >
                            Discover Our Story
                            <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-500">
                                →
                            </span>
                        </button>
                        <span className="hidden sm:block font-fine text-armadillo/60 text-xs uppercase tracking-[0.3em]">
                            Scroll to Begin
                        </span>
                    </motion.div>
                </div>

                {/* RIGHT — seed emerging */}
                <div className="md:col-span-5 relative flex items-center justify-center min-h-[300px] md:min-h-[520px]">
                    <SeedSprite size={340} />
                </div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="font-secondary text-[9px] uppercase tracking-[0.4em] text-burma/60">
                    Begin the Journey
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-10 bg-burma/40"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
