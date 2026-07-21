import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";
import { ASSETS, CONTACT, LINKS } from "@/lib/content";

/**
 * PatientJourney — "Choose Your Care Journey".
 * Two premium clickable cards. Entire card is clickable; opens WhatsApp
 * with a prefilled message for the chosen clinic (safe default until
 * external clinic URLs are provided).
 */
const PatientJourney = () => {
    const openWhatsApp = (clinic) => {
        const msg = encodeURIComponent(
            `Hello Artham, I'd like to begin my care journey with ${clinic}.`
        );
        window.open(
            `https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`,
            "_blank"
        );
    };

    const cards = [
        {
            id: "aesth",
            name: "Artham Aesthetique",
            oneLiner: "Skin, hair, face — the natural, drawn out.",
            image: ASSETS.aestheticsHero,
            testId: "patient-journey-aesth-card",
            href: LINKS.aesthetique,
            cta: "Visit Aesthetique",
            icon: ExternalLink,
        },
        {
            id: "ortho",
            name: "Artham Orthocare",
            oneLiner: "Bone, motion, dignity — restored with precision.",
            image: ASSETS.orthocareHero,
            testId: "patient-journey-ortho-card",
            cta: "Start My Journey",
            icon: MessageCircle,
        },
    ];

    return (
        <section
            id="patient-journey"
            data-testid="patient-journey-section"
            className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-arabian text-armadillo overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                        className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-burma mb-4"
                    >
                        Chapter VIII · Your Turn
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1 }}
                        className="font-headline text-burma leading-[1.05]"
                        style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
                    >
                        Choose Your
                        <br />
                        <span className="italic text-armadillo">
                            Care Journey.
                        </span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {cards.map((c, i) => {
                        const Icon = c.icon;

                        return (
                        <motion.a
                            key={c.id}
                            data-testid={c.testId}
                            href={c.href || "#contact"}
                            target={c.href ? "_blank" : undefined}
                            rel={c.href ? "noopener noreferrer" : undefined}
                            onClick={(event) => {
                                if (c.href) return;
                                event.preventDefault();
                                openWhatsApp(c.name);
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 1,
                                delay: 0.1 * i,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative overflow-hidden aspect-[5/6] text-left bg-black block"
                        >
                            {/* Image */}
                            <img
                                src={c.image}
                                alt={c.name}
                                className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                                loading="lazy"
                            />
                            {/* Warm overlay (bottom-only, so subject stays fully visible) */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

                            {/* Corner frames */}
                            <span className="absolute top-6 left-6 w-8 h-8 border-l border-t border-arabian" />
                            <span className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-arabian" />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                                <p className="font-secondary text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
                                    Begin with →
                                </p>
                                <h3 className="font-headline text-arabian text-3xl md:text-5xl leading-[1.05] mb-4">
                                    {c.name}
                                </h3>
                                <p className="font-headline italic text-arabian/85 text-base md:text-lg leading-relaxed max-w-md mb-8">
                                    {c.oneLiner}
                                </p>
                                <div className="inline-flex items-center gap-3 font-secondary text-[11px] uppercase tracking-[0.3em] text-arabian border-b border-arabian/40 pb-2 w-fit group-hover:border-gold group-hover:text-gold transition-colors duration-500">
                                    {c.cta}
                                    <Icon
                                        size={15}
                                        strokeWidth={1.6}
                                        className="opacity-75 group-hover:translate-x-1 transition-transform duration-500"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </motion.a>
                    );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PatientJourney;
