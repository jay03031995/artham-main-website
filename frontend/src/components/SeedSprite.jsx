import React from "react";
import { motion } from "framer-motion";

/**
 * A tiny seed emerging from soil — used on hero right side.
 * Very restrained: soil hairline, seed with gentle upward tendril.
 */
export const SeedSprite = ({ className = "", size = 320 }) => {
    return (
        <motion.svg
            className={className}
            width={size}
            height={size * 1.25}
            viewBox="0 0 260 340"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.4 }}
            aria-hidden="true"
        >
            {/* Soft ambient halo */}
            <defs>
                <radialGradient id="halo" cx="50%" cy="65%" r="55%">
                    <stop offset="0%" stopColor="#b8894a" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#b8894a" stopOpacity="0" />
                </radialGradient>
            </defs>
            <ellipse cx="130" cy="230" rx="150" ry="110" fill="url(#halo)" />

            {/* Soil hairline */}
            <motion.line
                x1="30"
                y1="260"
                x2="230"
                y2="260"
                stroke="#483f37"
                strokeWidth="0.8"
                strokeDasharray="2 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.55 }}
                transition={{ duration: 1.4, delay: 0.6 }}
            />

            {/* Seed */}
            <motion.ellipse
                cx="130"
                cy="270"
                rx="10"
                ry="6"
                stroke="#844d28"
                strokeWidth="1.6"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.9,
                    delay: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "130px 270px" }}
            />

            {/* First upward tendril */}
            <motion.path
                d="M130 264 C 130 240, 126 220, 132 200"
                stroke="#844d28"
                strokeWidth="1.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 1.6, ease: "easeOut" }}
            />

            {/* Two tender leaves */}
            <motion.path
                d="M132 200 C 122 202, 112 196, 108 186"
                stroke="#b8894a"
                strokeWidth="1.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.6 }}
            />
            <motion.path
                d="M132 200 C 142 202, 152 196, 156 186"
                stroke="#b8894a"
                strokeWidth="1.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.9 }}
            />

            {/* Micro dots — ambient */}
            {[
                [70, 200],
                [200, 190],
                [50, 240],
                [220, 240],
                [95, 180],
                [180, 175],
            ].map(([cx, cy], i) => (
                <motion.circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="1.5"
                    fill="#b8894a"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{
                        duration: 4,
                        delay: 3 + i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                />
            ))}
        </motion.svg>
    );
};

export default SeedSprite;
