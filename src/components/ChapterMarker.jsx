import React from "react";
import { motion } from "framer-motion";

export const ChapterMarker = ({ number, label, tone = "dark" }) => {
    const color = tone === "dark" ? "text-armadillo" : "text-arabian";
    const borderColor =
        tone === "dark" ? "border-armadillo/30" : "border-arabian/30";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex items-center gap-5 ${color}`}
        >
            <span
                className={`font-headline italic text-xl md:text-2xl ${color}`}
            >
                {number}
            </span>
            <span
                className={`flex-1 border-t ${borderColor} max-w-[80px]`}
                aria-hidden="true"
            />
            <span className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.35em]">
                {label}
            </span>
        </motion.div>
    );
};
