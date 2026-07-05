import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/content";

/**
 * A single animated statistic. Extracts the leading integer, animates it
 * from 0 → target, and preserves the rest of the label (like "+", "K").
 */
const StatItem = ({ value, label, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [displayed, setDisplayed] = useState(0);

    // Extract leading number (handles "10+", "25,000+", "02")
    const numeric = parseInt(value.replace(/[^\d]/g, ""), 10) || 0;
    const suffix = value.replace(/[\d,]/g, ""); // "+" or ""
    const showComma = /,/.test(value);

    useEffect(() => {
        if (!inView) return;
        const start = performance.now();
        const duration = 1600 + index * 100;
        let rafId;
        const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplayed(Math.round(numeric * eased));
            if (p < 1) rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [inView, numeric, index]);

    const formatted = showComma
        ? displayed.toLocaleString("en-IN")
        : String(displayed).padStart(numeric < 10 ? 2 : 0, "0");

    return (
        <motion.div
            ref={ref}
            data-testid={`stat-item-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.05 * index }}
            className="text-left"
        >
            <p
                className="font-headline text-burma leading-none"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
                {formatted}
                <span className="text-gold">{suffix}</span>
            </p>
            <div className="mt-4 h-px w-12 bg-gold" />
            <p className="mt-4 font-secondary text-xs md:text-sm uppercase tracking-[0.3em] text-armadillo">
                {label}
            </p>
        </motion.div>
    );
};

const Statistics = () => {
    return (
        <section
            data-testid="statistics-section"
            className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-arabian text-armadillo overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-burma mb-4"
                >
                    Chapter VII · Numbers, Quietly
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1 }}
                    className="font-headline text-armadillo leading-[1.05] mb-16 md:mb-24"
                    style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
                >
                    Small numbers.
                    <br />
                    <span className="italic text-burma">Long stories.</span>
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14 md:gap-x-12">
                    {STATS.map((s, i) => (
                        <StatItem
                            key={s.label}
                            value={s.value}
                            label={s.label}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
