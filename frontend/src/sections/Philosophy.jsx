import React from "react";
import { motion } from "framer-motion";
import { ChapterMarker } from "@/components/ChapterMarker";

const Philosophy = () => {
    const values = [
        {
            no: "01",
            title: "Science",
            body: "Evidence-led, precise, unhurried. Every decision made with the exactness the body deserves.",
        },
        {
            no: "02",
            title: "Soul",
            body: "Attention that does not rush. A single voice, present, listening — before it speaks.",
        },
        {
            no: "03",
            title: "Alignment",
            body: "Of structure and softness, of function and feeling. The body brought back to itself.",
        },
        {
            no: "04",
            title: "Refinement",
            body: "Never forcing change. Enhancing what is already there — the natural, drawn out.",
        },
    ];

    return (
        <section
            data-testid="philosophy-section"
            className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-armadillo text-arabian overflow-hidden grain"
        >
            <div className="relative max-w-7xl mx-auto z-10">
                <ChapterMarker
                    number="II"
                    label="The Philosophy"
                    tone="light"
                />

                <div className="grid md:grid-cols-12 gap-10 md:gap-20 mt-12 md:mt-16 items-start">
                    <div className="md:col-span-5 md:sticky md:top-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="font-headline text-arabian leading-[1.05]"
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            }}
                        >
                            Two disciplines.
                            <br />
                            <span className="italic text-gold">
                                One quiet philosophy.
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.3,
                            }}
                            className="font-body text-arabian/70 mt-8 leading-relaxed text-base md:text-lg max-w-md"
                        >
                            Orthopedics and aesthetics live under one roof at
                            Artham. Not as departments — as two sides of the
                            same conversation about the body.
                        </motion.p>
                    </div>

                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.no}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.1 * i,
                                }}
                                data-testid={`value-card-${i}`}
                                className="group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-secondary text-xs tracking-[0.3em] text-gold">
                                        {v.no}
                                    </span>
                                    <span className="flex-1 h-px bg-arabian/20 group-hover:bg-gold transition-colors duration-500" />
                                </div>
                                <h3 className="font-headline italic text-3xl md:text-4xl text-arabian mb-4">
                                    {v.title}
                                </h3>
                                <p className="font-body text-arabian/70 leading-[1.8] text-sm md:text-base">
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
