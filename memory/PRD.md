# Artham Landing Page — PRD

## Original Problem Statement
Build a landing page for brand introduction — a Journey-style website for **Artham**.
- Tagline: "Where Science meets soulful Care"
- Two clinics:
  1. **Artham Aesthetique** — Skin and Wellness
  2. **Asthi Orthocare** — Complete Orthopedic Clinic with Joint Replacement
- No top menu / navigation.
- Footer with Logo, Address, and Phone (Call & WhatsApp).
  - Address: Lotus Plaza, near Mithaas Sweets, Hazipur, Sector 104, Noida, Uttar Pradesh 201304
  - Phone: 098119 97993 (Call & WhatsApp)
- Brand guidelines PDF provided (extracted & followed).

## User Personas
- Discerning wellness-seekers researching the Artham brand.
- Prospective patients considering aesthetic or orthopedic care.
- Referrals wanting quick contact/location info.

## Core Requirements (Static)
- Single-page brand introduction, museum-like scroll journey.
- Strict adherence to brand guidelines: Burma Teak (#844d28), Arabian White (#efdfc8), Armadillo (#483f37), Coronation Gold (#b8894a).
- Typography: Tiro Devanagari Hindi, Playfair Display, Poppins, Raleway, Montserrat.
- Prominent Devanagari "अर्थम्" alongside "Artham" wordmark.
- Two clinic chapter sections.
- Persistent WhatsApp floating button.
- CTAs (Book Consultation, Call Now) triggering WhatsApp / tel links.

## Architecture
- **Frontend only**: React + Tailwind (CRA/Craco). No backend interaction needed for this brand page.
- **Framer Motion** for scroll-driven animations.
- **Custom Lotus SVG mark** (stylised — user did not upload vector logo).
- Sections structured as separate components under `/app/frontend/src/sections/`.

## Implemented (2025-12-04)
- ✅ Hero section — Devanagari + wordmark + tagline + 2 CTAs + scroll indicator
- ✅ Brand Story (Chapter I — The Meaning) — bilingual, editorial two-column layout
- ✅ Lotus Interstitial (breathing room, parallax image)
- ✅ Philosophy (Chapter II — dark armadillo, 4 value cards with sticky headline)
- ✅ Aesthetique chapter (Chapter III — light, 6 services, dual CTAs)
- ✅ Orthocare interstitial (dark, parallax image)
- ✅ Asthi Orthocare chapter (Chapter IV — dark, reversed image layout, 6 services, dual CTAs)
- ✅ Closing CTA
- ✅ Footer — logo, brand name, tagline, both clinic names, full address, phone (tel: + wa.me), Devanagari watermark
- ✅ Floating WhatsApp button (persistent, animated, ping effect)
- ✅ Tailwind config extended with brand color tokens (burma/armadillo/arabian/gold) + brand font families
- ✅ Page title, meta description, theme color updated to Artham branding
- ✅ All interactive elements have `data-testid` attributes

## What Was Not Included
- The exact Artham vector logo (user only shared the PDF — a respectful stylised lotus SVG was created instead).
- Devanagari version "आस्थि" for Asthi (only the transliteration used).

## Prioritized Backlog (Future Enhancements)
- **P1**: Replace stylised lotus mark with the official Artham logo asset (upload the vector or high-res PNG).
- **P1**: Wire "Book Consultation" to a real appointment form or Calendly/Google Calendar integration.
- **P2**: Add short "Meet the practitioners" section with doctor profiles.
- **P2**: Individual sub-pages for each clinic (Aesthetique/Orthocare) with treatment details.
- **P2**: Instagram / Google Reviews embed to build trust and drive walk-in conversions.
- **P3**: Blog / editorial section ("Journal") aligned with the "quiet room" brand voice.
- **P3**: Multilingual toggle (English/Hindi).

## Next Action Items
1. User to share the official Artham logo vector to replace the placeholder mark.
2. Confirm real content for each clinic (services list, doctors, timings).
3. Decide on booking mechanism (form + email? Calendly? Google Calendar?).
