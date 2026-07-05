import React from "react";
import { StoryTree } from "@/components/StoryTree";

/**
 * GrowthJourney — the scroll-pinned section where the seed becomes a tree.
 * StoryTree handles all internal path-drawing / caption sequencing.
 */
const GrowthJourney = () => {
    return (
        <section
            id="journey"
            data-testid="growth-journey-section"
            className="relative bg-arabian"
        >
            {/* Intro banner above the pinned tree scene */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-10 md:pb-16 text-center">
                <p className="font-secondary text-[10px] md:text-xs uppercase tracking-[0.4em] text-burma mb-4">
                    Chapter I · The Journey
                </p>
                <h2 className="font-headline text-armadillo leading-[1.05]"
                    style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
                    From a single seed,
                    <br />
                    <span className="italic text-burma">a whole philosophy grew.</span>
                </h2>
                <p className="font-body text-armadillo/70 mt-8 text-base md:text-lg leading-[1.9] max-w-xl mx-auto">
                    Scroll gently. Watch the idea of Artham take root, rise,
                    and branch into the two forms of care it exists to offer.
                </p>
            </div>

            <StoryTree />
        </section>
    );
};

export default GrowthJourney;
