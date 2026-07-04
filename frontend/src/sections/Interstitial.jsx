import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Interstitial = ({
    quote,
    attribution,
    imageUrl,
    imageAlt,
    tone = "light",
    testId,
}) => {
    const bg = tone === "light" ? "bg-arabian" : "bg-armadillo";
    const textColor = tone === "light" ? "text-burma" : "text-arabian";
    const quoteColor =
        tone === "light" ? "text-armadillo" : "text-arabian";

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section
            ref={ref}
            data-testid={testId}
            className={`relative py-24 md:py-40 px-6 md:px-12 lg:px-24 ${bg} overflow-hidden`}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className="md:col-span-5 order-2 md:order-1">
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`font-headline italic ${quoteColor} leading-[1.25]`}
                        style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                    >
                        &ldquo;{quote}&rdquo;
                    </motion.blockquote>
                    {attribution && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className={`mt-8 font-secondary text-xs uppercase tracking-[0.35em] ${textColor}/70`}
                        >
                            — {attribution}
                        </motion.p>
                    )}
                </div>

                <div className="md:col-span-7 order-1 md:order-2">
                    <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
                        <motion.img
                            style={{ scale, y }}
                            src={imageUrl}
                            alt={imageAlt}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interstitial;
