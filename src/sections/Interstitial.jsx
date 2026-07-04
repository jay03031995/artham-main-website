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
    const ref = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);

    const isLight = tone === "light";

    return (
        <section
            ref={ref}
            data-testid={testId}
            className={`relative overflow-hidden py-28 md:py-36 px-6 md:px-12 ${
                isLight ? "bg-[#E9DED8" : "bg-[#2C2826]"
            }`}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8894A]/8 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">

                <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-14 lg:gap-20 items-center">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-20 h-[2px] bg-[#B8894A] mb-10" />

                        <blockquote
                            className={`font-headline italic leading-[1.25] ${
                                isLight
                                    ? "text-[#2E2926]"
                                    : "text-[#F7F2EA]"
                            }`}
                            style={{
                                fontSize: "clamp(2rem,4vw,3.6rem)",
                            }}
                        >
                            “{quote}”
                        </blockquote>

                        <p
                            className={`mt-10 uppercase tracking-[0.45em] text-xs ${
                                isLight
                                    ? "text-[#8B5A2B]"
                                    : "text-[#D7B27D]"
                            }`}
                        >
                            {attribution}
                        </p>

                        <div className="mt-10 w-14 h-px bg-[#B8894A]" />
                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            style={{
                                scale,
                                y,
                            }}
                            className="relative"
                        >
                            {/* Background Accent */}

                            <div className="absolute -right-5 -bottom-5 w-full h-full rounded-[30px] bg-[#C8A36B]/20" />

                            <div className="relative overflow-hidden rounded-[30px] border border-[#D9C6AA] bg-white p-3 shadow-[0_25px_60px_rgba(0,0,0,.08)]">

                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    loading="lazy"
                                    className="w-[320px] md:w-[360px] lg:w-[390px] h-[430px] object-cover rounded-[22px]"
                                />

                            </div>

                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Interstitial;