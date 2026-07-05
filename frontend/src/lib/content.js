// Central asset & content constants for the Artham brand landing.
// Keep imports here so section files stay clean.

export const ASSETS = {
    // New brand logo (copper/bronze lotus + अर्थम् Devanagari). Transparent PNG.
    logo:
        "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/osgze0xv_Artham%20logo%20.png",

    // Editorial service imagery
    aestheticsHero:
        "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/jwf65cd5_Artham%20Aesthetics2%20PM.png",
    orthocareHero:
        "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/f282wo7v_Artham%20Orthocare.png",

    // Clinic interiors (kept for interstitials)
    clinicInterior1:
        "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/bxwex4yv_image.png",
    clinicInterior2:
        "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/0iw0g0dq_image.png",

    // Doctors
    drOmaima:
        "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/0yyw931m_omaima%20jawed.png",
    drManu:
        "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/7i797avs_MANU%20GAUTAM.png",
};

export const CONTACT = {
    phone: "098119 97993",
    phoneIntl: "+919811997993",
    whatsappNumber: "919811997993",
    address: {
        line1: "Lotus Plaza, near Mithaas Sweets",
        line2: "Hazipur, Sector 104",
        line3: "Noida, Uttar Pradesh 201304",
    },
};

export const BRAND = {
    parent: "Artham",
    parentDevanagari: "अर्थम्",
    tagline: "Where Science meets Soulful Care",
    subTagline: "Aligning Movement, Enhancing Confidence",
    verticals: [
        {
            key: "aesthetique",
            name: "Artham Aesthetique",
            oneLiner: "Skin, Hair, Face & Wellness — the natural, drawn out.",
        },
        {
            key: "orthocare",
            name: "Artham Orthocare",
            oneLiner: "Complete orthopedics — including joint replacement.",
        },
    ],
};

export const DOCTORS = [
    {
        id: "dr-omaima-jawed",
        name: "Dr. Omaima Jawed",
        role: "Dermatologist · Aesthetic Physician",
        clinic: "Artham Aesthetique",
        image: ASSETS.drOmaima,
        bio:
            "A dermatologist devoted to the quiet art of restoring skin's own light — leading Artham Aesthetique with an evidence-first, deeply personal approach to skin, hair, face and wellness.",
    },
    {
        id: "dr-manu-gautam",
        name: "Dr. Manu Gautam",
        role: "Orthopedician · Joint Replacement Surgeon",
        clinic: "Artham Orthocare",
        image: ASSETS.drManu,
        bio:
            "An orthopedic surgeon whose practice ranges from sports injuries and spine care to advanced joint replacement — anchoring Artham Orthocare with precision and dignity of movement.",
    },
];

export const AESTHETIQUE_CATEGORIES = [
    "Skin",
    "Hair",
    "Face",
    "Laser",
    "Anti-Ageing",
    "Body",
    "Wellness",
];

export const ORTHOCARE_CATEGORIES = [
    "Spine",
    "Knee",
    "Hip",
    "Shoulder",
    "Sports Injury",
    "Arthroscopy",
    "Joint Replacement",
];

export const VALUES = [
    {
        no: "01",
        title: "Patient First",
        body: "The person before the diagnosis. Every plan begins with a listening.",
    },
    {
        no: "02",
        title: "Clinical Excellence",
        body: "Evidence-led, precise, unhurried — the exactness the body deserves.",
    },
    {
        no: "03",
        title: "Compassion",
        body: "Attention that does not rush. Care that stays beyond the consultation.",
    },
    {
        no: "04",
        title: "Ethical Care",
        body: "No promise we cannot keep. No treatment the body does not need.",
    },
];

export const JOURNEY_STAGES = [
    { key: "seed", label: "Seed", note: "A single idea — care with meaning." },
    { key: "roots", label: "Roots", note: "Values planted deep, unmoving." },
    { key: "growth", label: "Growth", note: "The practice steadies, matures." },
    { key: "branches", label: "Branches", note: "Two specialty brands emerge." },
    { key: "future", label: "Future", note: "More journeys, one philosophy." },
];

export const STATS = [
    { value: "10+", label: "Years of Practice" },
    { value: "25,000+", label: "Lives Impacted" },
    { value: "50+", label: "Experts & Specialists" },
    { value: "02", label: "Specialty Brands" },
];
