import React from "react";
import { motion } from "framer-motion";
import { LotusMark } from "@/components/Logo";

const Footer = () => {
    return (
        <footer
            data-testid="footer-section"
            className="relative bg-burma text-arabian py-20 md:py-28 px-6 md:px-12 overflow-hidden"
        >
            {/* Watermark */}
            <div
                className="absolute -bottom-24 -right-24 font-devanagari text-arabian/[0.04] pointer-events-none select-none hidden md:block"
                style={{ fontSize: "14rem", lineHeight: 1 }}
                aria-hidden="true"
            >
                अर्थम्
            </div>

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center"
                >
                    <LotusMark
                        size={72}
                        stroke="#efdfc8"
                        accent="#b8894a"
                        className="mb-6"
                    />
                    <div
                        className="font-devanagari text-arabian mb-1"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                    >
                        अर्थम्
                    </div>
                    <div className="font-headline uppercase tracking-[0.35em] text-arabian text-sm md:text-base">
                        Artham
                    </div>
                    <p className="mt-4 font-headline italic text-arabian/80 text-sm md:text-base">
                        Where Science meets Soulful Care.
                    </p>
                </motion.div>

                <div className="mt-16 h-px w-full bg-arabian/20" />

                <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-8">
                    {/* Clinics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, delay: 0.05 }}
                        className="text-center md:text-left"
                    >
                        <h4 className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
                            The Clinics
                        </h4>
                        <p className="font-headline italic text-arabian text-lg md:text-xl leading-relaxed">
                            Artham Aesthetique
                        </p>
                        <p className="font-fine text-arabian/70 text-xs uppercase tracking-[0.2em] mb-4">
                            Skin & Wellness
                        </p>
                        <p className="font-headline italic text-arabian text-lg md:text-xl leading-relaxed">
                            Asthi Orthocare
                        </p>
                        <p className="font-fine text-arabian/70 text-xs uppercase tracking-[0.2em]">
                            Complete Orthopedic Clinic
                        </p>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="text-center"
                        data-testid="footer-address"
                    >
                        <h4 className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
                            Visit Us
                        </h4>
                        <address className="not-italic font-body text-arabian/85 text-sm md:text-base leading-[1.9]">
                            Lotus Plaza,
                            <br />
                            near Mithaas Sweets, Hazipur,
                            <br />
                            Sector 104, Noida,
                            <br />
                            Uttar Pradesh 201304
                        </address>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, delay: 0.25 }}
                        className="text-center md:text-right"
                        data-testid="footer-contact"
                    >
                        <h4 className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
                            Reach Out
                        </h4>
                        <a
                            data-testid="footer-call-link"
                            href="tel:+919811997993"
                            className="block font-headline text-arabian text-xl md:text-2xl mb-2 hover:text-gold transition-colors duration-300"
                        >
                            098119 97993
                        </a>
                        <p className="font-fine text-arabian/70 text-xs uppercase tracking-[0.2em] mb-6">
                            Call &nbsp;·&nbsp; WhatsApp
                        </p>
                        <a
                            data-testid="footer-whatsapp-link"
                            href={`https://wa.me/919811997993?text=${encodeURIComponent(
                                "Hello Artham, I would like to know more."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-secondary text-[11px] uppercase tracking-[0.3em] text-arabian border-b border-arabian/40 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
                        >
                            Message on WhatsApp →
                        </a>
                    </motion.div>
                </div>

                <div className="mt-20 h-px w-full bg-arabian/20" />

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-arabian/60">
                    <p className="font-fine text-[11px] uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} Artham. All rights reserved.
                    </p>
                    <p className="font-fine italic text-[11px] tracking-wider">
                        Crafted in the spirit of quiet care.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
