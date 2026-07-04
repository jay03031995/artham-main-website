import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LotusMark } from "@/components/Logo";

const Hero = () => {
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const handleCall = () => {
        window.location.href = "tel:+919811997993";
    };

    const handleBook = () => {
        const message = encodeURIComponent(
            "Hello Artham, I would like to book a consultation."
        );
        window.open(
            `https://wa.me/919811997993?text=${message}`,
            "_blank"
        );
    };

    return (
        <section
            data-testid="hero-section"
            className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-arabian"
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
                className="relative z-10 flex flex-col items-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.4,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2,
                    }}
                >
                    <LotusMark
                        size={80}
                        stroke="#844d28"
                        accent="#b8894a"
                        className="mb-8 md:mb-10"
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
                    className="font-devanagari text-burma mb-3"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
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
                    className="font-headline text-armadillo tracking-[0.2em] uppercase mb-8"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                >
                    Artham
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1,
                    }}
                    className="w-24 h-px bg-burma/50 mb-8 origin-center"
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
                    className="font-headline italic text-armadillo max-w-2xl leading-relaxed mb-14"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                >
                    Where Science meets Soulful Care.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 1.3,
                    }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button
                        data-testid="hero-book-consultation-btn"
                        onClick={handleBook}
                        className="group relative overflow-hidden bg-burma text-arabian px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-armadillo transition-colors duration-500"
                    >
                        <span className="relative z-10">
                            Book a Consultation
                        </span>
                    </button>
                    <button
                        data-testid="hero-call-now-btn"
                        onClick={handleCall}
                        className="group border border-burma/60 text-burma px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-burma hover:text-arabian transition-colors duration-500"
                    >
                        Call Now
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
                    className="w-px h-10 bg-burma/40"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
