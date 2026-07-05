import React from "react";
import { motion } from "framer-motion";
import { JOURNEY_STAGES } from "@/lib/content";

/**
 * JourneyTimeline — dark immersive section with the five stages of the story.
 * Each stage reveals with subtle parallax as it enters the viewport.
 */
const JourneyTimeline = () => {
    return (
        <section
            data-testid="journey-timeline-section"
            className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-armadillo text-arabian overflow-hidden grain"
        >
            <div className="relative max-w-7xl mx-auto z-10">
                <div className="max-w-3xl mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                        className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-4"
                    >
                        Chapter VI · The Path
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="font-headline text-arabian leading-[1.05]"
                        style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
                    >
                        Our Journey,
                        <br />
                        <span className="italic text-gold">
                            told in five breaths.
                        </span>
                    </motion.h2>
                </div>

                {/* Timeline rail (desktop horizontal, mobile vertical) */}
                <div className="relative">
                    {/* Horizontal rail (md+) */}
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-arabian/20" />

                    <div className="grid md:grid-cols-5 gap-10 md:gap-6">
                        {JOURNEY_STAGES.map((s, i) => (
                            <motion.div
                                key={s.key}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1 * i,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative"
                                data-testid={`timeline-stage-${s.key}`}
                            >
                                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-6">
                                    {/* Node */}
                                    <div className="relative shrink-0">
                                        <span className="block w-3 h-3 rounded-full bg-gold" />
                                        <span className="absolute -inset-2 rounded-full border border-gold/40 animate-pulse-glow" />
                                    </div>

                                    <div className="md:mt-4 md:text-center">
                                        <p className="font-headline italic text-gold text-sm md:text-base mb-2">
                                            {String(i + 1).padStart(2, "0")} /
                                            05
                                        </p>
                                        <h3 className="font-headline text-arabian text-2xl md:text-3xl mb-3">
                                            {s.label}
                                        </h3>
                                        <p className="font-body text-arabian/70 text-sm leading-[1.8] max-w-[200px] md:mx-auto">
                                            {s.note}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyTimeline;
