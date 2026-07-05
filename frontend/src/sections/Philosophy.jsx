import React from "react";
import { motion } from "framer-motion";
import { VALUES } from "@/lib/content";

/**
 * Philosophy — four values, arranged like roots feeding the tree.
 * Editorial two-column with an ornamental root SVG.
 */
const Philosophy = () => {
    return (
        <section
            id="philosophy"
            data-testid="philosophy-section"
            className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-armadillo text-arabian overflow-hidden grain"
        >
            <div className="relative max-w-7xl mx-auto z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-6"
                >
                    Chapter II · The Roots
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="font-headline text-arabian leading-[1.05] mb-6"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
                >
                    Rooted in Purpose.
                    <br />
                    <span className="italic text-gold">Growing with Care.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-body text-arabian/75 max-w-xl leading-relaxed text-base md:text-lg mb-16 md:mb-20"
                >
                    Four values, planted deep. Nothing at Artham is offered
                    that isn&rsquo;t drawn from these.
                </motion.p>

                <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
                    {/* Root ornament */}
                    <div className="md:col-span-4 flex md:justify-start justify-center">
                        <svg
                            viewBox="0 0 260 320"
                            className="w-40 md:w-52 h-auto"
                            fill="none"
                            aria-hidden
                        >
                            <path
                                d="M130 20 C 128 60, 132 100, 130 150"
                                stroke="#efdfc8"
                                strokeWidth="1.5"
                                opacity="0.9"
                            />
                            <path
                                d="M130 150 C 90 180, 50 210, 30 260 M130 150 C 170 180, 210 210, 230 260 M130 150 C 130 200, 120 240, 100 280 M130 150 C 130 200, 140 240, 160 280"
                                stroke="#b8894a"
                                strokeWidth="1.1"
                                opacity="0.8"
                            />
                            <circle cx="130" cy="20" r="4" fill="#b8894a" />
                        </svg>
                    </div>

                    {/* Values grid */}
                    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
                        {VALUES.map((v, i) => (
                            <motion.div
                                key={v.no}
                                data-testid={`value-card-${i}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.05 * i,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-secondary text-[11px] tracking-[0.35em] text-gold">
                                        {v.no}
                                    </span>
                                    <span className="flex-1 h-px bg-arabian/20 group-hover:bg-gold transition-colors duration-500" />
                                </div>
                                <h3 className="font-headline italic text-3xl md:text-4xl text-arabian mb-4">
                                    {v.title}
                                </h3>
                                <p className="font-body text-arabian/70 leading-[1.8] text-sm md:text-base max-w-md">
                                    {v.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
