import React from "react";
import { motion } from "framer-motion";

/**
 * SharedPhilosophyBridge — the circular reminder placed between the two brand
 * panels. Animated connecting lines reinforce that both branches feed from
 * the same trunk.
 */
const SharedPhilosophyBridge = () => {
    return (
        <section
            data-testid="shared-philosophy-bridge"
            className="relative py-24 md:py-32 px-6 bg-arabian overflow-hidden"
        >
            <div className="relative max-w-5xl mx-auto flex items-center justify-center">
                {/* Connecting lines */}
                <svg
                    viewBox="0 0 800 200"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    fill="none"
                    aria-hidden
                >
                    <motion.line
                        x1="0"
                        y1="100"
                        x2="290"
                        y2="100"
                        stroke="#844d28"
                        strokeWidth="1"
                        strokeDasharray="2 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.5 }}
                    />
                    <motion.line
                        x1="510"
                        y1="100"
                        x2="800"
                        y2="100"
                        stroke="#844d28"
                        strokeWidth="1"
                        strokeDasharray="2 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    />
                </svg>

                {/* Circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex items-center justify-center"
                >
                    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-burma/40 flex flex-col items-center justify-center text-center px-6 bg-arabian">
                        {/* Ambient inner ring */}
                        <span className="absolute inset-3 rounded-full border border-gold/30" />
                        <span className="absolute inset-6 rounded-full border border-burma/10" />

                        <p className="font-secondary text-[10px] uppercase tracking-[0.35em] text-gold mb-3">
                            The Trunk
                        </p>
                        <p className="font-headline text-burma text-xl md:text-2xl leading-tight">
                            One Philosophy.
                        </p>
                        <p className="font-headline italic text-armadillo text-xl md:text-2xl leading-tight">
                            Infinite Care.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SharedPhilosophyBridge;
