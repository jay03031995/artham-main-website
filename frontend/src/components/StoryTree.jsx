import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { LINKS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * StoryTree — minimalist editorial tree, matching the client's reference sketch.
 *
 * Layout:
 *   Top-left  label: "VERTICAL 01 · Artham Aesthetique"
 *   Top-right label: "VERTICAL 02 · Artham Orthocare"
 *   Two thin diagonal branches diverging up from a single fork,
 *   each ending in a soft beige "cloud" cluster.
 *   Single vertical black trunk down to a soil hairline.
 *   A few thin roots below with small dots.
 *
 * On scroll, the elements gently draw / fade in — but very restrained
 * (~1s total, no long pin, no 9-stage timeline).
 */
const StoryTree = ({ className = "" }) => {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const paths = root.querySelectorAll("[data-draw]");
        paths.forEach((p) => {
            const len = p.getTotalLength();
            p.style.strokeDasharray = `${len}`;
            p.style.strokeDashoffset = `${len}`;
        });

        const clouds = root.querySelectorAll("[data-cloud]");
        const dots = root.querySelectorAll("[data-dot]");
        const labels = root.querySelectorAll("[data-label]");

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root,
                    start: "top 75%",
                    end: "bottom 40%",
                    scrub: 0.8,
                },
                defaults: { ease: "power2.out" },
            });

            tl.to(labels, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 }, 0);
            // trunk first, then branches, then roots, then clouds
            tl.to(
                root.querySelectorAll("[data-draw='trunk']"),
                { strokeDashoffset: 0, duration: 0.8 },
                0.1
            );
            tl.to(
                root.querySelectorAll("[data-draw='branchL'], [data-draw='branchR']"),
                { strokeDashoffset: 0, duration: 0.8, stagger: 0.05 },
                0.5
            );
            tl.to(
                root.querySelectorAll("[data-draw^='root']"),
                { strokeDashoffset: 0, duration: 0.6, stagger: 0.04 },
                0.7
            );
            tl.to(
                clouds,
                { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08 },
                0.9
            );
            tl.to(
                dots,
                { opacity: 1, scale: 1, duration: 0.4, stagger: 0.06 },
                1.0
            );
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={rootRef}
            data-testid="story-tree-scene"
            className={`relative w-full ${className}`}
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                {/* Header row — the two labelled verticals */}
                <div className="flex items-start justify-between mb-4 md:mb-8">
                    <a
                        href={LINKS.aesthetique}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-label
                        className="text-left"
                        style={{ opacity: 0, transform: "translateY(10px)" }}
                        aria-label="Open Artham Aesthetique website"
                    >
                        <p className="font-secondary text-[10px] uppercase tracking-[0.4em] text-armadillo/70 mb-2">
                            Vertical 01
                        </p>
                        <p className="font-headline italic text-armadillo/80 text-xl md:text-3xl inline-flex items-center gap-2 hover:text-burma transition-colors">
                            Artham Aesthetique
                            <ExternalLink
                                size={16}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                        </p>
                    </a>
                    <a
                        href={LINKS.orthocare}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-label
                        className="text-right"
                        style={{ opacity: 0, transform: "translateY(10px)" }}
                        aria-label="Open Artham Orthocare website"
                    >
                        <p className="font-secondary text-[10px] uppercase tracking-[0.4em] text-armadillo/70 mb-2">
                            Vertical 02
                        </p>
                        <p className="font-headline italic text-armadillo/80 text-xl md:text-3xl inline-flex items-center gap-2 justify-end hover:text-burma transition-colors">
                            Artham Orthocare
                            <ExternalLink
                                size={16}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                        </p>
                    </a>
                </div>

                {/* Tree SVG */}
                <div className="relative">
                    <svg
                        viewBox="0 0 600 700"
                        className="w-full h-auto"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Cloud clusters — soft beige circles at branch tips */}
                        <g data-cloud style={{ opacity: 0, transformOrigin: "165px 130px", transform: "scale(0.7)" }}>
                            <circle cx="150" cy="130" r="48" fill="#e6d0b0" opacity="0.55" />
                            <circle cx="200" cy="150" r="34" fill="#d9c0a0" opacity="0.35" />
                            <circle cx="185" cy="180" r="26" fill="#e6d0b0" opacity="0.45" />
                        </g>
                        <g data-cloud style={{ opacity: 0, transformOrigin: "435px 130px", transform: "scale(0.7)" }}>
                            <circle cx="450" cy="130" r="48" fill="#e6d0b0" opacity="0.55" />
                            <circle cx="400" cy="150" r="34" fill="#d9c0a0" opacity="0.35" />
                            <circle cx="415" cy="180" r="26" fill="#e6d0b0" opacity="0.45" />
                        </g>

                        {/* Left branch — Aesthetique tone (gold) */}
                        <path
                            data-draw="branchL"
                            d="M300 335 C 260 300, 220 260, 175 200"
                            stroke="#b8894a"
                            strokeWidth="2.2"
                        />
                        {/* Tiny leaflet hint on left branch */}
                        <path
                            data-draw="branchL"
                            d="M225 262 C 216 268, 210 278, 210 292"
                            stroke="#b8894a"
                            strokeWidth="1.4"
                            opacity="0.9"
                        />

                        {/* Right branch — Orthocare tone (deeper burma) */}
                        <path
                            data-draw="branchR"
                            d="M300 335 C 340 300, 380 260, 425 200"
                            stroke="#844d28"
                            strokeWidth="2.4"
                        />
                        {/* Tiny leaflet hint on right branch */}
                        <path
                            data-draw="branchR"
                            d="M375 262 C 384 268, 390 278, 390 292"
                            stroke="#844d28"
                            strokeWidth="1.4"
                            opacity="0.9"
                        />

                        {/* Fork junction — subtle warm dot */}
                        <circle cx="300" cy="335" r="3.5" fill="#483f37" />

                        {/* Trunk — single vertical, armadillo */}
                        <path
                            data-draw="trunk"
                            d="M300 335 C 302 400, 298 470, 300 555"
                            stroke="#483f37"
                            strokeWidth="4"
                        />

                        {/* Soil hairline */}
                        <line
                            x1="80"
                            y1="555"
                            x2="520"
                            y2="555"
                            stroke="#483f37"
                            strokeWidth="0.6"
                            opacity="0.35"
                        />

                        {/* Roots — thin fanning lines */}
                        <path
                            data-draw="root1"
                            d="M300 555 C 260 585, 220 605, 175 620"
                            stroke="#844d28"
                            strokeWidth="1.1"
                            opacity="0.85"
                        />
                        <path
                            data-draw="root2"
                            d="M300 555 C 280 590, 260 620, 235 645"
                            stroke="#483f37"
                            strokeWidth="0.9"
                            opacity="0.5"
                        />
                        <path
                            data-draw="root3"
                            d="M300 555 C 300 600, 302 640, 300 675"
                            stroke="#844d28"
                            strokeWidth="1.2"
                        />
                        <path
                            data-draw="root4"
                            d="M300 555 C 320 590, 340 620, 365 645"
                            stroke="#483f37"
                            strokeWidth="0.9"
                            opacity="0.5"
                        />
                        <path
                            data-draw="root5"
                            d="M300 555 C 340 585, 380 605, 425 620"
                            stroke="#844d28"
                            strokeWidth="1.1"
                            opacity="0.85"
                        />

                        {/* Root dots */}
                        {[
                            [175, 620],
                            [235, 645],
                            [300, 675],
                            [365, 645],
                            [425, 620],
                        ].map(([cx, cy], i) => (
                            <circle
                                key={i}
                                data-dot
                                cx={cx}
                                cy={cy}
                                r="3.5"
                                fill="#b8894a"
                                style={{
                                    opacity: 0,
                                    transformOrigin: `${cx}px ${cy}px`,
                                    transform: "scale(0.4)",
                                }}
                            />
                        ))}
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default StoryTree;
export { StoryTree };
