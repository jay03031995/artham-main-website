import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { LINKS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * GrowthStory — ported from the client's reference implementation.
 *
 * Pinned scroll scene: seed → roots → trunk → branches (+ canopy + labels).
 * Captions overlay on the left; the tree SVG renders on the right and
 * unfolds via stroke-dashoffset tweens tied to scroll progress.
 *
 * Colours strictly from brand tokens (Burma Teak, Coronation Gold, Armadillo).
 */
const CAPTIONS = [
    {
        overline: "01 · Purpose",
        title: (
            <>
                <em>It begins</em> with a seed.
            </>
        ),
        body:
            "Not a hospital. Not a clinic. An intention — that care could mean more.",
    },
    {
        overline: "02 · Roots",
        title: (
            <>
                Rooted in <em>what matters.</em>
            </>
        ),
        body:
            "Patient first. Clinical excellence. Compassion. Ethics. The roots hold everything that follows.",
    },
    {
        overline: "03 · Growth",
        title: (
            <>
                Purpose, <em>given form.</em>
            </>
        ),
        body:
            "From those roots rises Artham — a single trunk of philosophy, strong enough to carry many kinds of care.",
    },
    {
        overline: "04 · Branches",
        title: (
            <>
                One tree. <em>Two branches.</em>
            </>
        ),
        body:
            "Aesthetique and Orthocare — different disciplines, the same soul.",
    },
];

const GrowthStory = () => {
    const root = useRef(null);

    useEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const el = root.current;
        if (!el) return;

        if (reduced) {
            el.querySelectorAll(".draw").forEach((p) => {
                p.style.strokeDasharray = "none";
                p.style.strokeDashoffset = "0";
            });
            el.querySelectorAll(".growth-caption, .branch-label").forEach(
                (c) => {
                    c.style.position = "relative";
                    c.style.opacity = 1;
                }
            );
            return;
        }

        const ctx = gsap.context(() => {
            el.querySelectorAll(".draw").forEach((p) => {
                const L = p.getTotalLength();
                p.style.strokeDasharray = L;
                p.style.strokeDashoffset = L;
            });

            const captions = gsap.utils.toArray(".growth-caption", el);

            const tl = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: el,
                    start: "top top",
                    end: "+=350%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Stage 0 — Purpose / Seed
            tl.set("#t-seed", { transformOrigin: "50% 90%" }, 0)
                .from("#t-seed", { scale: 0, opacity: 0, duration: 0.08 }, 0.02)
                .from(
                    "#t-ground",
                    { scaleX: 0, transformOrigin: "50% 50%", duration: 0.08 },
                    0.02
                )
                .to(captions[0], { opacity: 1, duration: 0.05 }, 0.02)
                .to(captions[0], { opacity: 0, duration: 0.05 }, 0.2);

            // Stage 1 — Roots
            tl.to(
                "#t-roots .draw",
                { strokeDashoffset: 0, duration: 0.22, stagger: 0.02 },
                0.16
            )
                .from(
                    "#t-rootdots circle",
                    {
                        scale: 0,
                        transformOrigin: "50% 50%",
                        duration: 0.06,
                        stagger: 0.015,
                    },
                    0.3
                )
                .to(captions[1], { opacity: 1, duration: 0.05 }, 0.22)
                .to(captions[1], { opacity: 0, duration: 0.05 }, 0.44);

            // Stage 2 — Trunk
            tl.to("#t-seed", { opacity: 0, duration: 0.06 }, 0.42)
                .to(
                    "#t-trunk .draw",
                    { strokeDashoffset: 0, duration: 0.24 },
                    0.42
                )
                .to(captions[2], { opacity: 1, duration: 0.05 }, 0.46)
                .to(captions[2], { opacity: 0, duration: 0.05 }, 0.66);

            // Stage 3 — Branches, canopy, labels
            tl.to(
                "#t-branch-left .draw",
                { strokeDashoffset: 0, duration: 0.18, stagger: 0.03 },
                0.64
            )
                .to(
                    "#t-branch-right .draw",
                    { strokeDashoffset: 0, duration: 0.18, stagger: 0.03 },
                    0.64
                )
                .from(
                    "#t-canopy-left ellipse",
                    {
                        opacity: 0,
                        scale: 0.6,
                        transformOrigin: "50% 50%",
                        duration: 0.1,
                        stagger: 0.02,
                    },
                    0.8
                )
                .from(
                    "#t-canopy-right ellipse",
                    {
                        opacity: 0,
                        scale: 0.6,
                        transformOrigin: "50% 50%",
                        duration: 0.1,
                        stagger: 0.02,
                    },
                    0.8
                )
                .to(captions[3], { opacity: 1, duration: 0.05 }, 0.7)
                .to(".branch-label", { opacity: 1, duration: 0.08 }, 0.86);
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="growth"
            id="journey"
            ref={root}
            data-testid="growth-journey-section"
            aria-label="The Artham story — from seed to tree"
        >
            <div className="growth-stage">
                <div className="growth-captions">
                    {CAPTIONS.map((c, i) => (
                        <div
                            className="growth-caption"
                            key={i}
                            data-testid={`growth-caption-${i}`}
                        >
                            <span className="artham-overline">
                                {c.overline}
                            </span>
                            <h2 className="artham-h2">{c.title}</h2>
                            <p className="artham-body">{c.body}</p>
                        </div>
                    ))}
                </div>

                <div className="growth-art">
                    <div style={{ position: "relative", width: "min(560px, 100%)" }}>
                        <svg
                            id="tree-svg"
                            data-testid="story-tree-scene"
                            viewBox="0 0 800 900"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <line
                                id="t-ground"
                                x1="180"
                                y1="640"
                                x2="620"
                                y2="640"
                                stroke="var(--coronation-gold)"
                                strokeOpacity="0.5"
                            />
                            <g id="t-seed">
                                <ellipse
                                    cx="400"
                                    cy="627"
                                    rx="10"
                                    ry="14"
                                    fill="var(--burma-teak)"
                                />
                                <path
                                    d="M400 615 C 398 602, 393 593, 386 586"
                                    stroke="var(--burma-teak)"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M386 586 C 376 582, 368 585, 362 594 C 371 598, 380 594, 386 586 Z"
                                    fill="var(--coronation-gold)"
                                />
                            </g>
                            <g
                                id="t-roots"
                                stroke="var(--burma-teak)"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                fill="none"
                            >
                                <path
                                    className="draw"
                                    d="M400 640 C 382 686, 344 716, 298 748"
                                />
                                <path
                                    className="draw"
                                    d="M400 640 C 420 692, 462 722, 512 752"
                                />
                                <path
                                    className="draw"
                                    d="M400 640 C 396 700, 392 758, 388 812"
                                />
                                <path
                                    className="draw"
                                    d="M400 640 C 372 676, 332 688, 286 694"
                                    strokeOpacity="0.75"
                                />
                                <path
                                    className="draw"
                                    d="M400 640 C 430 672, 474 682, 522 686"
                                    strokeOpacity="0.75"
                                />
                                <path
                                    className="draw"
                                    d="M340 706 C 326 722, 306 732, 284 738"
                                    strokeOpacity="0.55"
                                    strokeWidth="1.6"
                                />
                                <path
                                    className="draw"
                                    d="M462 710 C 478 726, 498 734, 520 740"
                                    strokeOpacity="0.55"
                                    strokeWidth="1.6"
                                />
                            </g>
                            <g id="t-rootdots" fill="var(--coronation-gold)">
                                <circle cx="298" cy="748" r="4" />
                                <circle cx="512" cy="752" r="4" />
                                <circle cx="388" cy="812" r="4" />
                                <circle cx="286" cy="694" r="4" />
                            </g>
                            <g
                                id="t-trunk"
                                stroke="var(--armadillo)"
                                strokeLinecap="round"
                                fill="none"
                            >
                                <path
                                    className="draw"
                                    d="M400 640 C 395 560, 406 480, 398 400 C 395 358, 400 330, 400 308"
                                    strokeWidth="10"
                                />
                                <path
                                    className="draw"
                                    d="M400 620 C 404 560, 396 500, 402 440"
                                    strokeWidth="3"
                                    strokeOpacity="0.5"
                                />
                            </g>
                            <g
                                id="t-branch-left"
                                stroke="var(--coronation-gold)"
                                strokeLinecap="round"
                                fill="none"
                            >
                                <path
                                    className="draw"
                                    d="M400 316 C 362 268, 306 236, 246 196 C 226 183, 208 172, 192 160"
                                    strokeWidth="6"
                                />
                                <path
                                    className="draw"
                                    d="M318 244 C 300 232, 286 216, 278 198"
                                    strokeWidth="3"
                                />
                                <path
                                    className="draw"
                                    d="M262 206 C 250 218, 234 224, 216 224"
                                    strokeWidth="3"
                                />
                            </g>
                            <g
                                id="t-branch-right"
                                stroke="var(--burma-teak)"
                                strokeLinecap="round"
                                fill="none"
                            >
                                <path
                                    className="draw"
                                    d="M400 316 C 438 268, 494 236, 554 196 C 574 183, 592 172, 608 160"
                                    strokeWidth="6"
                                />
                                <path
                                    className="draw"
                                    d="M482 244 C 500 232, 514 216, 522 198"
                                    strokeWidth="3"
                                />
                                <path
                                    className="draw"
                                    d="M538 206 C 550 218, 566 224, 584 224"
                                    strokeWidth="3"
                                />
                            </g>
                            <g id="t-canopy-left" fill="var(--coronation-gold)">
                                <ellipse
                                    cx="196"
                                    cy="150"
                                    rx="52"
                                    ry="38"
                                    fillOpacity="0.28"
                                />
                                <ellipse
                                    cx="252"
                                    cy="182"
                                    rx="44"
                                    ry="30"
                                    fillOpacity="0.2"
                                />
                                <ellipse
                                    cx="216"
                                    cy="216"
                                    rx="34"
                                    ry="24"
                                    fillOpacity="0.16"
                                />
                            </g>
                            <g id="t-canopy-right" fill="var(--burma-teak)">
                                <ellipse
                                    cx="604"
                                    cy="150"
                                    rx="52"
                                    ry="38"
                                    fillOpacity="0.26"
                                />
                                <ellipse
                                    cx="548"
                                    cy="182"
                                    rx="44"
                                    ry="30"
                                    fillOpacity="0.18"
                                />
                                <ellipse
                                    cx="584"
                                    cy="216"
                                    rx="34"
                                    ry="24"
                                    fillOpacity="0.14"
                                />
                            </g>
                        </svg>

                        <a
                            href={LINKS.aesthetique}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="branch-label"
                            style={{ left: "2%", top: "4%" }}
                            aria-label="Open Artham Aesthetique website"
                        >
                            <small>Vertical 01</small>
                            <span>
                                Artham Aesthetique
                                <ExternalLink size={16} strokeWidth={1.5} />
                            </span>
                        </a>
                        <div
                            className="branch-label"
                            style={{ right: "2%", top: "4%", textAlign: "right" }}
                        >
                            <small>Vertical 02</small>Artham Orthocare
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStory;
