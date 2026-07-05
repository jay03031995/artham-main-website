import React, { useEffect } from "react";
import Hero from "@/sections/Hero";
import GrowthStory from "@/sections/GrowthStory";
import Philosophy from "@/sections/Philosophy";
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

            {/* 2. Growth Story — pinned tree */}
            <GrowthStory />

            {/* 3. Philosophy — the roots / 4 values */}
            <Philosophy />

            {/* 4. Doctors — arch cards with photos */}
            <Doctors />

            {/* 5. Journey Timeline */}
            <JourneyTimeline />

            {/* 6. Statistics */}
            <Statistics />

            {/* 7. Patient Journey — Choose Your Care */}
            <PatientJourney />

            {/* 8. Footer */}
            <Footer />

            {/* Floating WhatsApp */}
            <WhatsAppFloat />
        </main>
    );
};

export default Landing;
