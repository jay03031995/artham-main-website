import React from "react";
import { motion } from "framer-motion";
import { DOCTORS } from "@/lib/content";

/**
 * Doctors — editorial portrait layout for the two founding physicians.
 * Not a "team page". A quiet acknowledgement — the people behind the tree.
 */
const Doctors = () => {
    return (
        <section
            id="doctors"
            data-testid="doctors-section"
            className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-arabian text-armadillo overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto z-10">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                        className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-burma mb-4"
                    >
                        Chapter V · The Hands
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="font-headline text-armadillo leading-[1.05] mb-6"
                        style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
                    >
                        The practitioners
                        <br />
                        <span className="italic text-burma">
                            who tend the tree.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-body text-armadillo/75 text-base md:text-lg leading-[1.9] max-w-xl"
                    >
                        Every philosophy needs people patient enough to live
                        it. Meet the two clinicians who anchor Artham&rsquo;s two
                        branches.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {DOCTORS.map((d, i) => (
                        <motion.article
                            key={d.id}
                            data-testid={`doctor-card-${d.id}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 1,
                                delay: 0.1 * i,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >
                            {/* Portrait — full figure visible. Container BG
                                matches the portrait's black studio backdrop
                                so the subject floats without any hard edge. */}
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-black">
                                <img
                                    src={d.image}
                                    alt={d.name}
                                    className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                <span className="absolute top-4 left-4 font-secondary text-[10px] uppercase tracking-[0.4em] text-arabian/90 bg-armadillo/60 backdrop-blur-sm px-3 py-1.5">
                                    {d.clinic}
                                </span>
                            </div>

                            {/* Meta */}
                            <p className="font-secondary text-[10px] uppercase tracking-[0.35em] text-burma mb-3">
                                {d.role}
                            </p>
                            <h3 className="font-headline text-3xl md:text-4xl text-armadillo mb-4">
                                {d.name}
                            </h3>
                            <p className="font-body text-armadillo/75 leading-[1.9] text-sm md:text-base max-w-xl">
                                {d.bio}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
