import React from "react";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Facebook,
    Instagram,
    MessageCircle,
    Phone,
} from "lucide-react";
import { ASSETS, CONTACT, BRAND, LINKS } from "@/lib/content";

const columns = [
    {
        title: "About",
        items: ["The Philosophy", "The Journey", "The Trunk", "Journal"],
    },
    {
        title: "Brands",
        items: ["Artham Aesthetique", "Artham Orthocare"],
    },
    {
        title: "Doctors",
        items: ["Dr. Omaima Jawed", "Dr. Manu Gautam"],
    },
    {
        title: "Blogs",
        items: ["On Skin", "On Alignment", "On Care", "All Notes"],
    },
];

const socialLinks = [
    {
        label: "Instagram",
        href: LINKS.social.instagram,
        Icon: Instagram,
    },
    {
        label: "Facebook",
        href: LINKS.social.facebook,
        Icon: Facebook,
    },
];

const Footer = () => {
    return (
        <footer
            data-testid="footer-section"
            className="relative bg-burma text-arabian pt-24 md:pt-32 pb-10 px-6 md:px-12 overflow-hidden"
        >
            {/* Devanagari watermark */}
            <div
                className="absolute -bottom-16 -right-16 font-devanagari text-arabian/[0.04] pointer-events-none select-none hidden md:block"
                style={{ fontSize: "16rem", lineHeight: 1 }}
                aria-hidden="true"
            >
                अर्थम्
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Top row — logo + signoff */}
                <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9 }}
                        className="md:col-span-5"
                    >
                        <img
                            src={ASSETS.logo}
                            alt="Artham"
                            className="w-28 md:w-32 h-auto mb-6"
                            style={{ mixBlendMode: "screen" }}
                        />
                        <h3 className="font-headline text-arabian text-2xl md:text-3xl mb-4 leading-tight">
                            {BRAND.tagline}.
                        </h3>
                        <p className="font-body text-arabian/70 text-sm md:text-base leading-[1.9] max-w-md">
                            One trunk of trust. Two branches of care.
                            <br />
                            An unhurried practice, in the heart of Noida.
                        </p>
                    </motion.div>

                    {/* Contact block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10"
                    >
                        <div data-testid="footer-address">
                            <h4 className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
                                Visit Us
                            </h4>
                            <address className="not-italic font-body text-arabian/85 text-sm md:text-base leading-[1.9]">
                                {CONTACT.address.line1},
                                <br />
                                {CONTACT.address.line2},
                                <br />
                                {CONTACT.address.line3}
                            </address>
                        </div>
                        <div data-testid="footer-contact">
                            <h4 className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
                                Reach Out
                            </h4>
                            <a
                                data-testid="footer-call-link"
                                href={`tel:${CONTACT.phoneIntl}`}
                                className="inline-flex items-center gap-3 font-headline text-arabian text-xl md:text-2xl mb-2 hover:text-gold transition-colors duration-300"
                            >
                                <Phone
                                    size={20}
                                    strokeWidth={1.6}
                                    aria-hidden="true"
                                />
                                {CONTACT.phone}
                            </a>
                            <p className="font-fine text-arabian/70 text-xs uppercase tracking-[0.2em] mb-6">
                                Call &nbsp;·&nbsp; WhatsApp
                            </p>
                            <a
                                data-testid="footer-whatsapp-link"
                                href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                                    "Hello Artham, I would like to know more."
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-secondary text-[11px] uppercase tracking-[0.3em] text-arabian border-b border-arabian/40 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
                            >
                                Message on WhatsApp
                                <MessageCircle
                                    size={15}
                                    strokeWidth={1.6}
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-arabian/20 mb-16" />

                {/* Nav columns */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                    {columns.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: 0.05 * i }}
                        >
                            <h4 className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-5">
                                {c.title}
                            </h4>
                            <ul className="space-y-3">
                                {c.items.map((item) => (
                                    <li key={item}>
                                        {item === "Artham Aesthetique" ? (
                                            <a
                                                href={LINKS.aesthetique}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 font-body text-sm text-arabian/80 hover:text-arabian transition-colors"
                                            >
                                                {item}
                                                <ExternalLink
                                                    size={14}
                                                    strokeWidth={1.6}
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        ) : (
                                            <span className="font-body text-sm text-arabian/80 hover:text-arabian transition-colors cursor-default">
                                                {item}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                    {/* Social column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                    >
                        <h4 className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-5">
                            Social
                        </h4>
                        <ul className="space-y-3">
                            {socialLinks.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 font-body text-sm text-arabian/80 hover:text-arabian transition-colors"
                                    >
                                        <Icon
                                            size={16}
                                            strokeWidth={1.6}
                                            aria-hidden="true"
                                        />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="h-px w-full bg-arabian/20 mb-8" />
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-arabian/60">
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
