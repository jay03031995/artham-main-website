# Artham Landing Page — PRD

## Original Problem Statement
Build a premium, luxury healthcare brand landing page for **Artham** — the parent brand that unifies two specialty verticals (Artham Aesthetique · Artham Orthocare). The homepage is not a marketing page — it is a scroll-driven journey. Feel: Apple + Aesop + Aman Resorts + Mayo Clinic.

## User Personas
- Discerning healthcare seekers researching Artham.
- Prospective aesthetic-care or orthopedic patients.
- Journalists, partners, and referrers.

## Core Requirements
- Single-page journey. **No top navigation.**
- Storytelling arc: Purpose → Seed → Roots → Trunk → Branches → Care → Patient.
- Two equal specialty verticals; neither dominates.
- Two doctors: Dr. Omaima Jawed (Dermatologist / Aesthetique), Dr. Manu Gautam (Orthopedician / Orthocare).
- Strict adherence to existing CSS tokens (colors: Burma Teak, Arabian White, Armadillo, Coronation Gold, Summer Peach; fonts: Tiro Devanagari Hindi, Playfair Display, Poppins, Raleway, Montserrat).
- Footer with logo, address, phone (Call & WhatsApp).
- Floating WhatsApp button.

## Architecture
- **Frontend only**: React (CRA + Craco) + Tailwind + Framer Motion + GSAP ScrollTrigger.
- Section-per-file under `/app/frontend/src/sections/*`.
- Content constants centralised in `/app/frontend/src/lib/content.js`.
- Pinned/scrubbed scroll animation on the growth-journey tree scene.

## Sections Implemented (2025-12-05)
1. **Hero** — Logo highlighted first; headline "Meaningful Care. Beautifully Delivered."; subheadline; primary CTA "Discover Our Story"; seed SVG on the right.
2. **GrowthJourney** — Pinned GSAP ScrollTrigger scene: seed → sprout → sapling → roots → trunk → canopy L+R → branch Aesthetique → branch Orthocare; captions crossfade per stage.
3. **Philosophy** — Chapter II, dark Armadillo section, 4 values (Patient First, Clinical Excellence, Compassion, Ethical Care) around a root ornament.
4. **TheSplit** — Chapter III, trunk-to-branches SVG + two hover tiles (both equal; opposite fades on hover).
5. **BrandPanel (Aesthetique)** — Chapter IV Left Branch: 7 category leaves (Skin, Hair, Face, Laser, Anti-Ageing, Body, Wellness), CTA "Explore Artham Aesthetique", client-supplied lifestyle image.
6. **SharedPhilosophyBridge** — Circular element "One Philosophy. Infinite Care." with animated connector lines.
7. **BrandPanel (Orthocare)** — Chapter IV Right Branch: 7 category leaves (Spine, Knee, Hip, Shoulder, Sports Injury, Arthroscopy, Joint Replacement), CTA "Explore Artham Orthocare", client-supplied runner image.
8. **Doctors** — Chapter V, two large editorial portrait cards with role, clinic tag, and bio.
9. **JourneyTimeline** — Chapter VI, dark section, 5 stages (Seed, Roots, Growth, Branches, Future) with gold pulse nodes.
10. **Statistics** — Chapter VII, rAF-based animated counters (10+ Years, 25,000+ Lives, 50+ Experts, 02 Brands).
11. **PatientJourney** — Chapter VIII, "Choose Your Care Journey." — two clickable premium cards opening WhatsApp with prefilled message.
12. **Footer** — Editorial 5-column (About, Brands, Doctors, Blogs, Social) + address + tel + WhatsApp + Devanagari watermark.
13. **WhatsAppFloat** — Persistent floating button with ping-pulse.

## Assets
- New copper/gold Artham logo (transparent PNG) used in Hero + Footer.
- Aesthetique lifestyle image (woman skin/face) used in Aesthetique panel + Patient Journey card.
- Orthocare lifestyle image (runner with highlighted knee) used in Orthocare panel + Patient Journey card.
- Dr. Omaima Jawed portrait.
- Dr. Manu Gautam portrait.

## Testing
- Iteration 1 (initial museum-scroll build): **100% pass**.
- Iteration 2 (this major rewrite): **100% pass** across 17 checkpoints, desktop + mobile, zero console errors. Report: `/app/test_reports/iteration_2.json`.

## Prioritized Backlog
- **P1**: Wire "Explore …" CTAs to real sub-brand websites when Aesthetique and Orthocare microsites launch.
- **P1**: Replace WhatsApp booking with a proper appointment form (Cal.com / Google Calendar).
- **P2**: Add a Journal / editorial notes section (SEO + repeat-visitor value).
- **P2**: Full doctor sub-pages with clinical bios, publications, and appointment slots.
- **P3**: Multi-language toggle (EN / HI).
- **P3**: Instagram embed for social proof.

## Next Action Items
1. Provide the final URLs for Artham Aesthetique and Artham Orthocare websites when ready.
2. Confirm doctors' full clinical bios / years of experience / notable procedures if we should extend the doctor cards.
3. Optional: share hero lifestyle photography for the growth-journey scene if desired (currently uses editorial SVG).
