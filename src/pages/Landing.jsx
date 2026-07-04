import React, { useEffect } from "react";
import Hero from "@/sections/Hero";
import BrandStory from "@/sections/BrandStory";
import Philosophy from "@/sections/Philosophy";
import Interstitial from "@/sections/Interstitial";
import ClinicChapter from "@/sections/ClinicChapter";
import ClosingCTA from "@/sections/ClosingCTA";
import Footer from "@/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Landing = () => {
    useEffect(() => {
        document.title = "Artham — Where Science meets Soulful Care";
    }, []);

    return (
        <main data-testid="landing-page" className="relative bg-arabian">
            <Hero />

            <BrandStory />

            {/* Museum-like breathing filler between chapters */}
            <Interstitial
                testId="interstitial-lotus"
                quote="The body is a living narrative. Read it slowly."
                attribution="The Artham Way"
                imageUrl="https://images.pexels.com/photos/27118568/pexels-photo-27118568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                imageAlt="A white lotus in bloom, symbolising natural alignment"
                tone="light"
            />

            <Philosophy />

            {/* Chapter 1: Artham Aesthetique */}
            <ClinicChapter
                testId="chapter-aesthetique"
                anchorId="aesthetique"
                number="III"
                chapterLabel="Chapter One — Aesthetique"
                subtitle="Artham · Aesthetique"
                name="Artham Aesthetique"
                tagline="Skin & Wellness — the natural, drawn out."
                description="Not a promise of change, but a return. Aesthetique is where skin remembers its own light — through evidence-led dermatology, holistic wellness, and treatments considered as carefully as they are delivered. Every session is a quiet conversation between science and the self."
                services={[
                    "Advanced Skin Care",
                    "Anti-Ageing",
                    "Laser & Lightwork",
                    "Hair Restoration",
                    "Body Contouring",
                    "Wellness Rituals",
                ]}
                imageUrl="/3.jpg"
                imageAlt="The Artham Aesthetique treatment room — warm-lit, considered, unhurried."
                tone="light"
            />

            {/* Filler between the two clinic chapters */}
            <Interstitial
                testId="interstitial-orthocare"
                quote="Alignment is not a destination. It is a way of moving through the world."
                attribution="On Orthocare"
                imageUrl="/2.jpg"
                imageAlt="A quiet, minimalist wellness interior"
                tone="dark"
            />

            {/* Chapter 2: Asthi Orthocare */}
            <ClinicChapter
                testId="chapter-orthocare"
                anchorId="orthocare"
                number="IV"
                chapterLabel="Chapter Two — Orthocare"
                subtitle="Asthi · अस्थि · Bone"
                name="Asthi Orthocare"
                tagline="Complete orthopedics — including joint replacement."
                description="Asthi, in Sanskrit, means bone. Orthocare is our study of structure — a full-spectrum orthopedic practice ranging from sports injuries and spine care to advanced joint replacement. Precision is the tool. Restoration of movement — and with it, dignity — is the work."
                services={[
                    "Joint Replacement",
                    "Sports Injuries",
                    "Spine Care",
                    "Arthroscopy",
                    "Fracture Management",
                    "Physiotherapy",
                ]}
                imageUrl="/4.jpeg"
                imageAlt="The Asthi Orthocare reception — the Artham lotus mark, physiotherapy suite visible beyond."
                tone="dark"
                reverse={true}
            />

            <ClosingCTA />

            <Footer />

            <WhatsAppFloat />
        </main>
    );
};

export default Landing;
