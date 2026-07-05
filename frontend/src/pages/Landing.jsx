import React, { useEffect } from "react";
import Hero from "@/sections/Hero";
import GrowthStory from "@/sections/GrowthStory";
import Philosophy from "@/sections/Philosophy";
import TheSplit from "@/sections/TheSplit";
import Doctors from "@/sections/Doctors";
import JourneyTimeline from "@/sections/JourneyTimeline";
import Statistics from "@/sections/Statistics";
import PatientJourney from "@/sections/PatientJourney";
import Footer from "@/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Landing = () => {
    useEffect(() => {
        document.title = "Artham — Meaningful Care. Beautifully Delivered.";
    }, []);

    return (
        <main data-testid="landing-page" className="relative bg-arabian">
            {/* 1. Hero — logo highlighted, minimalist */}
            <Hero />

            {/* 2. Growth Story — pinned tree (ported from reference) */}
            <GrowthStory />

            {/* 3. Philosophy — the roots / 4 values */}
            <Philosophy />

            {/* 4. The Split — two brand panels + icon rows + centre badge */}
            <TheSplit />

            {/* 5. Doctors — arch/monogram cards (ported from reference) */}
            <Doctors />

            {/* 6. Journey Timeline */}
            <JourneyTimeline />

            {/* 7. Statistics */}
            <Statistics />

            {/* 8. Patient Journey — Choose Your Care */}
            <PatientJourney />

            {/* 9. Footer */}
            <Footer />

            {/* Floating WhatsApp */}
            <WhatsAppFloat />
        </main>
    );
};

export default Landing;
