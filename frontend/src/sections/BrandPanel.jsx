import React from "react";
import { motion } from "framer-motion";

/**
 * BrandPanel — used for both Artham Aesthetique and Artham Orthocare.
 * The visual tone (light vs deep) is switched via `tone` prop, but every
 * value stays inside the approved brand palette.
 *
 * Categories animate in individually — like leaves settling.
 */
const BrandPanel = ({
    anchorId,
    testId,
    chapter,
    label,
    name,
    tagline,
    description,
    categories,
    ctaLabel,
    imageUrl,
    imageAlt,
    tone = "light", // 'light' → Aesthetique | 'dark' → Orthocare
    reverse = false,
}) => {
    const bgClass = tone === "light" ? "bg-arabian" : "bg-armadillo";
    const textPrimary = tone === "light" ? "text-armadillo" : "text-arabian";
    const textAccent = tone === "light" ? "text-burma" : "text-gold";
    const bodyColor =
        tone === "light" ? "text-armadillo/80" : "text-arabian/75";
    const btn =
        tone === "light"
            ? "bg-burma text-arabian hover:bg-armadillo"
            : "bg-arabian text-armadillo hover:bg-gold";

    return (
        <section
            id={anchorId}
            data-testid={testId}
            className={`relative py-32 md:py-48 px-6 md:px-12 lg:px-24 ${bgClass} overflow-hidden scroll-mt-20`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                        className={`font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] ${textAccent} mb-4`}
                    >
                        {chapter} · {label}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className={`font-headline ${textPrimary} leading-[1.05]`}
                        style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
                    >
                        {name}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`font-headline italic ${textAccent} text-xl md:text-2xl mt-4`}
                    >
                        {tagline}
                    </motion.p>
                </div>

                <div
                    className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                        reverse ? "md:[direction:rtl]" : ""
                    }`}
                >
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`md:col-span-6 relative ${
                            reverse ? "md:[direction:ltr]" : ""
                        }`}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-black">
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className="absolute inset-0 w-full h-full object-contain object-bottom"
                                loading="lazy"
                            />
                            {/* Corner frames */}
                            <span
                                className={`absolute top-4 left-4 w-8 h-8 border-l border-t ${
                                    tone === "dark"
                                        ? "border-arabian"
                                        : "border-arabian"
                                }`}
                            />
                            <span
                                className={`absolute bottom-4 right-4 w-8 h-8 border-r border-b ${
                                    tone === "dark"
                                        ? "border-arabian"
                                        : "border-arabian"
                                }`}
                            />
                        </div>
                    </motion.div>

                    {/* Text + categories */}
                    <div
                        className={`md:col-span-6 ${
                            reverse ? "md:[direction:ltr]" : ""
                        }`}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 1 }}
                            className={`font-body ${bodyColor} leading-[1.9] text-base md:text-lg mb-10 max-w-xl`}
                        >
                            {description}
                        </motion.p>

                        {/* Categories as "leaves" */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-12">
                            {categories.map((c, i) => (
                                <motion.div
                                    key={c}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.05 * i,
                                    }}
                                    className="group flex items-center gap-3 py-2 border-b border-current/10 hover:border-current/40 transition-colors duration-500 cursor-default"
                                >
                                    <span
                                        className={`w-1 h-1 rounded-full ${
                                            tone === "dark" ? "bg-gold" : "bg-burma"
                                        } group-hover:scale-150 transition-transform duration-500`}
                                    />
                                    <span
                                        className={`font-secondary text-[11px] md:text-xs uppercase tracking-[0.25em] ${textPrimary}`}
                                    >
                                        {c}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            data-testid={`${testId}-cta`}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            onClick={() => {
                                const el = document.getElementById(
                                    "patient-journey"
                                );
                                if (el)
                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                            className={`${btn} px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 inline-flex items-center gap-3 group`}
                        >
                            {ctaLabel}
                            <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-500">
                                →
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPanel;
