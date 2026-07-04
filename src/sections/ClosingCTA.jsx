import React from "react";
import { motion } from "framer-motion";

const ClosingCTA = () => {
    const handleBook = () => {
        const message = encodeURIComponent(
            "Hello Artham, I would like to book a consultation."
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
            data-testid="closing-cta-section"
            className="relative py-32 md:py-48 px-6 md:px-12 bg-arabian text-armadillo overflow-hidden"
        >
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-16 h-px bg-burma mx-auto mb-10 origin-center"
                />
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="font-secondary text-xs uppercase tracking-[0.4em] text-burma mb-8"
                >
                    Begin Your Chapter
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-headline text-burma leading-[1.05] mb-8"
                    style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
                >
                    Come, sit with us —
                    <br />
                    <span className="italic text-armadillo">
                        let the body be read.
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-body text-armadillo/80 text-base md:text-lg leading-[1.9] max-w-xl mx-auto mb-12"
                >
                    Whether it is a joint that has forgotten its rhythm, or a
                    skin that wishes to remember its own light — we are here,
                    unhurried, listening.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        data-testid="closing-book-btn"
                        onClick={handleBook}
                        className="bg-burma text-arabian px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-armadillo transition-colors duration-500"
                    >
                        Book a Consultation
                    </button>
                    <button
                        data-testid="closing-call-btn"
                        onClick={handleCall}
                        className="border border-burma text-burma px-9 py-4 font-secondary text-[11px] uppercase tracking-[0.3em] hover:bg-burma hover:text-arabian transition-colors duration-500"
                    >
                        Call · 098119 97993
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ClosingCTA;
