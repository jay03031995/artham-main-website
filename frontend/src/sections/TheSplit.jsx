import React from "react";
import { motion } from "framer-motion";

/**
 * TheSplit — the pivot moment. The trunk divides into two branches.
 * Left branch → Aesthetique (light warm). Right branch → Orthocare (deep warm).
 * Both equal. Hover subtly emphasizes one, softens the other.
 */
const TheSplit = () => {
    const [hover, setHover] = React.useState(null); // 'aesth' | 'ortho' | null

    return (
        <section
            data-testid="the-split-section"
            className="relative py-24 md:py-36 px-6 md:px-12 bg-arabian text-armadillo overflow-hidden"
        >
            <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-burma mb-4"
                >
                    Chapter III · The Branches
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1 }}
                    className="font-headline text-burma leading-[1.05]"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
                >
                    Two branches.
                    <br />
                    <span className="italic text-armadillo">
                        One trunk of trust.
                    </span>
                </motion.h2>
            </div>

            {/* SVG branch schematic */}
            <div className="max-w-5xl mx-auto flex items-center justify-center">
                <svg
                    viewBox="0 0 800 340"
                    className="w-full h-auto"
                    fill="none"
                    aria-hidden
                >
                    {/* Trunk */}
                    <motion.path
                        d="M400 340 C 400 280, 400 240, 400 190"
                        stroke="#844d28"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                    {/* Left branch */}
                    <motion.path
                        d="M400 190 C 340 170, 260 140, 200 100 C 160 75, 130 60, 100 55"
                        stroke="#b8894a"
                        strokeWidth={hover === "ortho" ? 1 : 2}
                        style={{
                            opacity: hover === "ortho" ? 0.35 : 1,
                            transition: "all 500ms ease",
                        }}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 1.8,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                    />
                    {/* Right branch */}
                    <motion.path
                        d="M400 190 C 460 170, 540 140, 600 100 C 640 75, 670 60, 700 55"
                        stroke="#483f37"
                        strokeWidth={hover === "aesth" ? 1 : 2.4}
                        style={{
                            opacity: hover === "aesth" ? 0.35 : 1,
                            transition: "all 500ms ease",
                        }}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 1.8,
                            delay: 0.8,
                            ease: "easeOut",
                        }}
                    />
                    {/* Endpoints */}
                    <motion.circle
                        cx="100"
                        cy="55"
                        r={hover === "aesth" ? 10 : 7}
                        fill="#b8894a"
                        style={{ transition: "r 500ms ease" }}
                    />
                    <motion.circle
                        cx="700"
                        cy="55"
                        r={hover === "ortho" ? 10 : 7}
                        fill="#844d28"
                        style={{ transition: "r 500ms ease" }}
                    />
                </svg>
            </div>

            {/* Two intent tiles under the split */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 mt-14 md:mt-20">
                <button
                    data-testid="split-aesthetique-tile"
                    onMouseEnter={() => setHover("aesth")}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => {
                        const el = document.getElementById("aesthetique");
                        if (el)
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`text-left p-8 md:p-10 border transition-all duration-500 group ${
                        hover === "ortho"
                            ? "border-armadillo/10 opacity-50"
                            : "border-burma/25 hover:border-burma"
                    }`}
                    style={{ background: "rgba(184,137,74,0.05)" }}
                >
                    <p className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
                        Left Branch
                    </p>
                    <h3 className="font-headline text-3xl md:text-4xl text-burma mb-3">
                        Artham Aesthetique
                    </h3>
                    <p className="font-headline italic text-armadillo/80 text-base md:text-lg mb-4">
                        Skin · Hair · Face · Wellness
                    </p>
                    <p className="font-body text-armadillo/70 text-sm md:text-base leading-[1.8]">
                        Where skin remembers its own light — the natural,
                        gently drawn out.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-secondary text-[11px] uppercase tracking-[0.3em] text-burma group-hover:translate-x-1 transition-transform duration-500">
                        Follow this branch →
                    </span>
                </button>

                <button
                    data-testid="split-orthocare-tile"
                    onMouseEnter={() => setHover("ortho")}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => {
                        const el = document.getElementById("orthocare");
                        if (el)
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`text-left p-8 md:p-10 border transition-all duration-500 group ${
                        hover === "aesth"
                            ? "border-armadillo/10 opacity-50"
                            : "border-armadillo/40 hover:border-armadillo"
                    }`}
                    style={{ background: "rgba(72,63,55,0.05)" }}
                >
                    <p className="font-secondary text-[10px] uppercase tracking-[0.4em] text-armadillo mb-4">
                        Right Branch
                    </p>
                    <h3 className="font-headline text-3xl md:text-4xl text-armadillo mb-3">
                        Artham Orthocare
                    </h3>
                    <p className="font-headline italic text-burma/85 text-base md:text-lg mb-4">
                        Bone · Motion · Dignity
                    </p>
                    <p className="font-body text-armadillo/70 text-sm md:text-base leading-[1.8]">
                        From sports injuries and spine care to advanced joint
                        replacement — the study of structure.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-secondary text-[11px] uppercase tracking-[0.3em] text-armadillo group-hover:translate-x-1 transition-transform duration-500">
                        Follow this branch →
                    </span>
                </button>
            </div>
        </section>
    );
};

export default TheSplit;
