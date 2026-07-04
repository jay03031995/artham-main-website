import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LotusMark } from "@/components/Logo";

const Hero = () => {
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            data-testid="hero-section"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-arabian px-6 py-24"
        >
            {/* Ambient soft glow */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            >
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-radial from-[#b8894a]/15 via-transparent to-transparent blur-3xl" />
            </motion.div>

            {/* Corner ornaments */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 font-secondary text-[10px] uppercase tracking-[0.4em] text-burma/60">
                Est. Noida
            </div>
            <div className="absolute top-8 right-8 md:top-12 md:right-12 font-secondary text-[10px] uppercase tracking-[0.4em] text-burma/60">
                A Journey · Not a Clinic
            </div>

            {/* Main hero content */}
            <motion.div
    style={{ opacity }}
    className="relative z-10 flex flex-col items-center text-center -translate-y-10 md:-translate-y-14"
>
<motion.div
    initial={{ opacity: 0, scale: 0.85, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
    }}
    className="mb-0 -mt-2"
>
    <LotusMark
        size={220}
        className="transition-all duration-700 hover:scale-[1.03]"
        alt="Artham — Orthopedic · Aesthetic · Wellness"
    />
</motion.div>

<motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
    }}
    className="font-devanagari text-burma -mt-10 mb-2"
    style={{
        fontSize: "clamp(2.7rem,4vw,4rem)",
        lineHeight: 1,
    }}
>
    अर्थम्
</motion.div>

                <motion.h1
                    data-testid="hero-brand-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.7,
                    }}
                    className="font-headline text-armadillo tracking-[0.28em] uppercase mb-4"
                    style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
                >
                    Artham
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.85 }}
                    className="font-secondary text-[11px] md:text-xs uppercase tracking-[0.4em] text-burma mb-8"
                >
                    Orthopedic · Aesthetic · Wellness
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1,
                    }}
                    className="w-36 h-px bg-gradient-to-r from-[#8b5a2b] to-[#a46d3d]/50 mb-8 origin-center"
                />

                <motion.p
                    data-testid="hero-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1.1,
                    }}
                    className="font-headline italic text-armadillo max-w-3xl leading-relaxed mb-4"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                >
                    Where Science meets Soulful Care.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="font-fine text-armadillo/70 text-sm md:text-base italic tracking-wide mb-12"
                >
                    Aligning Movement, Enhancing Confidence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1.3,
                    }}
                    className="mt-4 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row"
                >
                    <button
                        data-testid="hero-aesthetique-btn"
                        onClick={() => scrollToSection("aesthetique")}
                        className="group relative overflow-hidden bg-gradient-to-r from-[#8b5a2b] to-[#a46d3d] text-arabian px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-armadillo transition-colors duration-500"
                    >
                        <span className="relative z-10 inline-flex items-center gap-3">
                            Artham Aesthetique
                            <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-500">
                                →
                            </span>
                        </span>
                    </button>
                    <button
                        data-testid="hero-orthocare-btn"
                        onClick={() => scrollToSection("orthocare")}
                        className="group border border-burma/60 text-burma px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-gradient-to-r from-[#8b5a2b] to-[#a46d3d] hover:text-arabian transition-colors duration-500"
                    >
                        <span className="inline-flex items-center gap-3">
                            Asthi Orthocare
                            <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-500">
                                →
                            </span>
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="font-secondary text-[9px] uppercase tracking-[0.4em] text-burma/60">
                    Begin the Journey
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-10 bg-gradient-to-r from-[#8b5a2b] to-[#a46d3d]/40"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
