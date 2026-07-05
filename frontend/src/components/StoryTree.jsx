import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * A single, cohesive SVG "Life of Artham" tree.
 * The paths are ordered from soil → seed → sprout → sapling → roots → trunk →
 * canopy → two branches. As the user scrolls the parent scene, each path
 * "draws" itself in sequence via stroke-dashoffset. GSAP ScrollTrigger drives
 * the timeline so it feels cinematic and unhurried.
 *
 * Palette adherence: only Burma Teak (#844d28), Armadillo (#483f37) and
 * Coronation Gold (#b8894a) are used, matching the brand tokens.
 */
export const StoryTree = ({ className = "" }) => {
    const svgRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        const root = rootRef.current;
        if (!svg || !root) return;

        // Prepare every "drawable" path.
        const paths = svg.querySelectorAll("[data-draw]");
        paths.forEach((p) => {
            const len = p.getTotalLength();
            p.style.strokeDasharray = `${len}`;
            p.style.strokeDashoffset = `${len}`;
        });

        // Prepare "fade-in" leafs.
        const leaves = svg.querySelectorAll("[data-leaf]");
        leaves.forEach((l) => {
            l.style.opacity = "0";
            l.style.transformOrigin = "center";
            l.style.transform = "scale(0.4)";
        });

        // Timeline driven by scroll.
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root,
                    start: "top top",
                    end: "+=280%",
                    scrub: 1.2,
                    pin: true,
                    anticipatePin: 1,
                },
                defaults: { ease: "power2.out" },
            });

            // Stage order: seed → sprout → sapling → roots → trunk → canopy → branches → leaves
            const order = [
                "seed",
                "sprout",
                "sapling",
                "roots",
                "trunk",
                "canopyL",
                "canopyR",
                "branchAesth",
                "branchOrtho",
            ];

            order.forEach((key, idx) => {
                const p = svg.querySelector(`[data-draw="${key}"]`);
                if (!p) return;
                tl.to(
                    p,
                    {
                        strokeDashoffset: 0,
                        duration: 1,
                    },
                    idx * 0.55
                );
            });

            // Leaf bloom near the end
            tl.to(
                leaves,
                {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: "back.out(1.6)",
                },
                "-=1.2"
            );

            // Chapter texts (fade in at their stage)
            const captions = root.querySelectorAll("[data-caption]");
            captions.forEach((c, i) => {
                tl.fromTo(
                    c,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    i * 0.55 + 0.3
                );
                tl.to(
                    c,
                    { opacity: 0, y: -10, duration: 0.4 },
                    (i + 1) * 0.55 + 0.15
                );
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={rootRef}
            className={`relative w-full h-screen overflow-hidden ${className}`}
            data-testid="story-tree-scene"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <svg
                    ref={svgRef}
                    viewBox="0 0 600 700"
                    className="w-[92vw] max-w-[720px] h-auto"
                    fill="none"
                    stroke="#844d28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* SOIL — static, subtle */}
                    <line
                        x1="60"
                        y1="600"
                        x2="540"
                        y2="600"
                        stroke="#483f37"
                        strokeWidth="0.6"
                        strokeDasharray="3 5"
                        opacity="0.5"
                    />

                    {/* 1. Seed — small oval below soil */}
                    <ellipse
                        data-draw="seed"
                        cx="300"
                        cy="612"
                        rx="8"
                        ry="5"
                        stroke="#844d28"
                        strokeWidth="1.6"
                    />

                    {/* 2. Sprout — first upward line */}
                    <path
                        data-draw="sprout"
                        d="M300 610 C 300 590, 296 575, 300 555"
                        strokeWidth="1.8"
                    />

                    {/* 3. Sapling — two first leaves */}
                    <path
                        data-draw="sapling"
                        d="M300 555 C 285 555, 274 545, 272 532 M300 555 C 315 555, 326 545, 328 532"
                        strokeWidth="1.4"
                    />

                    {/* 4. Roots — spread beneath soil */}
                    <path
                        data-draw="roots"
                        d="M300 610 C 260 640, 200 655, 130 660 M300 610 C 340 640, 400 655, 470 660 M300 610 C 300 655, 305 680, 320 695 M300 610 C 300 655, 295 680, 280 695"
                        strokeWidth="1.2"
                        opacity="0.85"
                    />

                    {/* 5. Trunk — main vertical curve up */}
                    <path
                        data-draw="trunk"
                        d="M300 555 C 296 500, 302 440, 300 380 C 298 340, 302 300, 300 260"
                        strokeWidth="2.4"
                    />

                    {/* 6. Canopy left half */}
                    <path
                        data-draw="canopyL"
                        d="M300 260 C 240 240, 190 210, 170 160 C 160 130, 175 100, 210 90 C 240 82, 275 100, 285 130"
                        strokeWidth="1.6"
                    />

                    {/* 7. Canopy right half */}
                    <path
                        data-draw="canopyR"
                        d="M300 260 C 360 240, 410 210, 430 160 C 440 130, 425 100, 390 90 C 360 82, 325 100, 315 130"
                        strokeWidth="1.6"
                    />

                    {/* 8. Branch — Aesthetique (leftward, softer) */}
                    <path
                        data-draw="branchAesth"
                        d="M300 320 C 260 315, 220 300, 190 275 C 170 258, 158 240, 155 220"
                        stroke="#b8894a"
                        strokeWidth="1.6"
                    />

                    {/* 9. Branch — Orthocare (rightward, stronger) */}
                    <path
                        data-draw="branchOrtho"
                        d="M300 320 C 340 315, 380 300, 410 275 C 430 258, 442 240, 445 220"
                        stroke="#483f37"
                        strokeWidth="1.9"
                    />

                    {/* Leaves — small ellipses along the canopy */}
                    {[
                        [200, 150],
                        [230, 120],
                        [175, 175],
                        [260, 105],
                        [300, 95],
                        [340, 105],
                        [400, 120],
                        [425, 150],
                        [370, 90],
                        [220, 195],
                        [380, 195],
                        [155, 210],
                        [445, 210],
                    ].map(([cx, cy], i) => (
                        <ellipse
                            key={i}
                            data-leaf
                            cx={cx}
                            cy={cy}
                            rx="6"
                            ry="10"
                            transform={`rotate(${(cx - 300) * 0.4} ${cx} ${cy})`}
                            fill="#b8894a"
                            opacity="0.85"
                        />
                    ))}

                    {/* Branch endpoint glow markers */}
                    <circle
                        cx="155"
                        cy="220"
                        r="4"
                        fill="#b8894a"
                        className="animate-pulse-glow"
                    />
                    <circle
                        cx="445"
                        cy="220"
                        r="4"
                        fill="#844d28"
                        className="animate-pulse-glow"
                    />
                </svg>
            </div>

            {/* Story captions revealed in sync with each stage */}
            <div className="absolute inset-x-0 bottom-14 md:bottom-24 flex items-center justify-center pointer-events-none">
                <div className="relative h-24 w-full max-w-4xl px-6 text-center">
                    {[
                        { title: "Seed", body: "A single idea — care, given meaning." },
                        { title: "Sprout", body: "The first breath of a philosophy." },
                        { title: "Sapling", body: "Two leaves — the future's shape." },
                        {
                            title: "Roots",
                            body: "Values planted deep. Patient first. Always.",
                        },
                        {
                            title: "Trunk",
                            body: "The steady spine — science, unhurried.",
                        },
                        { title: "Canopy", body: "A practice, matured and shading." },
                        {
                            title: "Canopy",
                            body: "Wide enough for every kind of care.",
                        },
                        {
                            title: "Aesthetique",
                            body: "One branch turns toward skin, hair, and light.",
                        },
                        {
                            title: "Orthocare",
                            body: "One branch turns toward bone, motion, and dignity.",
                        },
                    ].map((c, i) => (
                        <div
                            key={i}
                            data-caption
                            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                            style={{ opacity: 0 }}
                        >
                            <p className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-burma">
                                {c.title}
                            </p>
                            <p className="font-headline italic text-armadillo text-lg md:text-2xl leading-snug max-w-xl">
                                {c.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryTree;
