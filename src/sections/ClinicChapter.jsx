import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChapterMarker } from "@/components/ChapterMarker";

const ClinicChapter = ({
    number,
    chapterLabel,
    subtitle,
    name,
    tagline,
    description,
    services,
    imageUrl,
    imageAlt,
    tone = "light",
    reverse = false,
    testId,
    anchorId,
}) => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

    const bgClass = tone === "light" ? "bg-arabian" : "bg-armadillo";
    const textPrimary = tone === "light" ? "text-armadillo" : "text-arabian";
    const textAccent = tone === "light" ? "text-burma" : "text-gold";
    const borderClass =
        tone === "light" ? "border-armadillo/20" : "border-arabian/20";
    const btnPrimary =
        tone === "light"
            ? "bg-burma text-arabian hover:bg-armadillo"
            : "bg-arabian text-armadillo hover:bg-gold hover:text-armadillo";
    const btnOutline =
        tone === "light"
            ? "border border-burma text-burma hover:bg-burma hover:text-arabian"
            : "border border-arabian/60 text-arabian hover:bg-arabian hover:text-armadillo";

    const handleBook = () => {
        const message = encodeURIComponent(
            `Hello, I would like to book a consultation at ${name}.`
        );
        window.open(
            `https://wa.me/919811997993?text=${message}`,
            "_blank"
        );
    };

    const handleCall = () => {
        window.location.href = "tel:+919811997993";
    };

    return (
        <section
            ref={ref}
            id={anchorId}
            data-testid={testId}
            className={`relative py-32 md:py-48 px-6 md:px-12 lg:px-24 ${bgClass} overflow-hidden scroll-mt-20`}
        >
            <div className="max-w-7xl mx-auto">
                <ChapterMarker
                    number={number}
                    label={chapterLabel}
                    tone={tone === "light" ? "dark" : "light"}
                />

                <div
                    className={`mt-14 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                        reverse ? "md:[direction:rtl]" : ""
                    }`}
                >
                    {/* Text side */}
                    <div
                        className={`md:col-span-6 ${
                            reverse ? "md:[direction:ltr]" : ""
                        }`}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`font-secondary text-xs uppercase tracking-[0.35em] ${textAccent} mb-6`}
                        >
                            {subtitle}
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1,
                            }}
                            className={`font-headline ${textPrimary} leading-[1.05] mb-6`}
                            style={{
                                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                            }}
                        >
                            {name}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2,
                            }}
                            className={`font-headline italic ${textAccent} text-xl md:text-2xl mb-8`}
                        >
                            {tagline}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.3,
                            }}
                            className={`font-body ${textPrimary}/85 leading-[1.9] text-base md:text-lg mb-10 max-w-xl`}
                        >
                            {description}
                        </motion.p>

                        {/* Services list */}
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 1,
                                delay: 0.4,
                                staggerChildren: 0.08,
                            }}
                            className={`grid grid-cols-2 gap-x-8 gap-y-3 mb-12 border-t ${borderClass} pt-8`}
                        >
                            {services.map((s, i) => (
                                <motion.li
                                    key={s}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4 + i * 0.06,
                                    }}
                                    className={`font-secondary text-xs md:text-sm uppercase tracking-[0.2em] ${textPrimary}/80 flex items-center gap-3`}
                                >
                                    <span
                                        className={`w-1 h-1 rounded-full ${
                                            tone === "light"
                                                ? "bg-gold"
                                                : "bg-gold"
                                        }`}
                                    />
                                    {s}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button
                                data-testid={`${testId}-book-btn`}
                                onClick={handleBook}
                                className={`${btnPrimary} px-8 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] transition-colors duration-500`}
                            >
                                Book a Consultation
                            </button>
                            <button
                                data-testid={`${testId}-call-btn`}
                                onClick={handleCall}
                                className={`${btnOutline} px-8 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] transition-colors duration-500`}
                            >
                                Call Now
                            </button>
                        </motion.div>
                    </div>

                    {/* Image side */}
                    <div
                        className={`md:col-span-6 ${
                            reverse ? "md:[direction:ltr]" : ""
                        }`}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <motion.img
                                style={{ y: imageY, scale: imageScale }}
                                src={imageUrl}
                                alt={imageAlt}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/15 to-transparent pointer-events-none" />
                            {/* Elegant frame corners */}
                            <span
                                className={`absolute top-4 left-4 w-8 h-8 border-l border-t ${
                                    tone === "light"
                                        ? "border-arabian"
                                        : "border-arabian"
                                }`}
                            />
                            <span
                                className={`absolute bottom-4 right-4 w-8 h-8 border-r border-b ${
                                    tone === "light"
                                        ? "border-arabian"
                                        : "border-arabian"
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicChapter;
