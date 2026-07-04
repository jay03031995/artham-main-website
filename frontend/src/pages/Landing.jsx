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
                imageUrl="https://images.pexels.com/photos/8101673/pexels-photo-8101673.jpeg"
                imageAlt="Warm-toned skincare and wellness aesthetic"
                tone="light"
            />

            {/* Filler between the two clinic chapters */}
            <Interstitial
                testId="interstitial-orthocare"
                quote="Alignment is not a destination. It is a way of moving through the world."
                attribution="On Orthocare"
                imageUrl="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg"
                imageAlt="A quiet, minimalist wellness interior"
                tone="dark"
            />

            {/* Chapter 2: Asthi Orthocare */}
            <ClinicChapter
                testId="chapter-orthocare"
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
                imageUrl="https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                imageAlt="Careful, precise physical therapy hands at work"
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
