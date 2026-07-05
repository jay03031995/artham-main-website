import React, { useEffect } from "react";
import Hero from "@/sections/Hero";
import GrowthJourney from "@/sections/GrowthJourney";
import Philosophy from "@/sections/Philosophy";
import TheSplit from "@/sections/TheSplit";
import BrandPanel from "@/sections/BrandPanel";
import SharedPhilosophyBridge from "@/sections/SharedPhilosophyBridge";
import Doctors from "@/sections/Doctors";
import JourneyTimeline from "@/sections/JourneyTimeline";
import Statistics from "@/sections/Statistics";
import PatientJourney from "@/sections/PatientJourney";
import Footer from "@/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
    ASSETS,
    AESTHETIQUE_CATEGORIES,
    ORTHOCARE_CATEGORIES,
} from "@/lib/content";

const Landing = () => {
    useEffect(() => {
        document.title = "Artham — Meaningful Care. Beautifully Delivered.";
    }, []);

    return (
        <main data-testid="landing-page" className="relative bg-arabian">
            {/* 1. Hero — logo first */}
            <Hero />

            {/* 2. Growth journey — scroll-pinned tree */}
            <GrowthJourney />

            {/* 3. Philosophy — the roots */}
            <Philosophy />

            {/* 4. The Split — trunk divides */}
            <TheSplit />

            {/* 5. Artham Aesthetique — Chapter IV.a */}
            <BrandPanel
                anchorId="aesthetique"
                testId="chapter-aesthetique"
                chapter="Chapter IV"
                label="Left Branch"
                name="Artham Aesthetique"
                tagline="Skin. Hair. Face. Wellness."
                description="Not a promise of change, but a return. Aesthetique is where skin remembers its own light — through evidence-led dermatology, holistic wellness, and treatments considered as carefully as they are delivered."
                categories={AESTHETIQUE_CATEGORIES}
                ctaLabel="Explore Artham Aesthetique"
                imageUrl={ASSETS.aestheticsHero}
                imageAlt="A woman resting a hand near her face — the natural, drawn out."
                tone="light"
            />

            {/* 6. Shared Philosophy Bridge */}
            <SharedPhilosophyBridge />

            {/* 7. Artham Orthocare — Chapter IV.b */}
            <BrandPanel
                anchorId="orthocare"
                testId="chapter-orthocare"
                chapter="Chapter IV"
                label="Right Branch"
                name="Artham Orthocare"
                tagline="Bone. Motion. Dignity."
                description="Orthocare is our study of structure — a full-spectrum orthopedic practice ranging from sports injuries and spine care to advanced joint replacement. Precision is the tool. Restoration of movement is the work."
                categories={ORTHOCARE_CATEGORIES}
                ctaLabel="Explore Artham Orthocare"
                imageUrl={ASSETS.orthocareHero}
                imageAlt="An athletic figure in motion — the study of structure."
                tone="dark"
                reverse={true}
            />

            {/* 8. Doctors */}
            <Doctors />

            {/* 9. Journey Timeline */}
            <JourneyTimeline />

            {/* 10. Statistics */}
            <Statistics />

            {/* 11. Patient Journey — Choose Your Care */}
            <PatientJourney />

            {/* 12. Footer */}
            <Footer />

            {/* Floating WhatsApp */}
            <WhatsAppFloat />
        </main>
    );
};

export default Landing;
