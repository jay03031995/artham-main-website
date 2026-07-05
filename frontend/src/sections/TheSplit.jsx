import React from "react";
import { ASSETS } from "@/lib/content";
import BgStripper from "@/components/BgStripper";

/**
 * TheSplit — ported from client reference.
 *
 * Two full-width brand panels side by side (Aesthetique · Orthocare) with
 * a strong copy + photo split inside each panel, an icon row of specialties
 * below, and a central circular lotus badge overlapping the seam
 * ("One Philosophy. Endless Care.").
 *
 * Photos use BgStripper to remove the black studio background so the
 * subjects appear to float on the peach surface.
 */

const AESTHETIQUE_ICONS = [
    {
        label: "Skin",
        d: (
            <path d="M12 4 C 8.5 9, 6.5 12, 6.5 15 a5.5 5.5 0 0 0 11 0 C 17.5 12, 15.5 9, 12 4 Z" />
        ),
    },
    {
        label: "Hair",
        d: (
            <path d="M8 4 C 6 8, 10 10, 8 15 M12 4 C 10 8, 14 10, 12 15 M16 4 C 14 8, 18 10, 16 15 M6 19 h12" />
        ),
    },
    {
        label: "Face",
        d: (
            <>
                <circle cx="12" cy="12" r="8" />
                <path d="M9 10 v0.5 M15 10 v0.5 M9 15 C 10.5 16.5, 13.5 16.5, 15 15" />
            </>
        ),
    },
    { label: "Laser", d: <path d="M13 3 L7 13 h4 L11 21 L17 11 h-4 Z" /> },
    {
        label: "Anti Ageing",
        d: (
            <>
                <circle cx="12" cy="12" r="8" />
                <path d="M12 7 v5 l-3.5 2" />
            </>
        ),
    },
    {
        label: "Body",
        d: (
            <path d="M8 3.5 h8 M8 20.5 h8 M9 3.5 C 9 9, 15 10, 15 15.5 C 15 18, 14 20.5, 12 20.5 M15 3.5 C 15 9, 9 10, 9 15.5 C 9 18, 10 20.5, 12 20.5" />
        ),
    },
    {
        label: "Wellness",
        d: (
            <path d="M12 14 C 10.5 11, 10.5 7.5, 12 4.5 C 13.5 7.5, 13.5 11, 12 14 Z M4.5 15 C 7 19, 17 19, 19.5 15 M12 14 C 9 13, 6.5 11, 5.5 8 M12 14 C 15 13, 17.5 11, 18.5 8" />
        ),
    },
];

const ORTHOCARE_ICONS = [
    {
        label: "Spine",
        d: (
            <>
                <path d="M12 3 v18" />
                <circle cx="12" cy="6" r="1.8" />
                <circle cx="12" cy="10.5" r="1.8" />
                <circle cx="12" cy="15" r="1.8" />
                <circle cx="12" cy="19" r="1.8" />
            </>
        ),
    },
    {
        label: "Knee",
        d: (
            <>
                <path d="M7 4 L10.5 10.5 M7 20 L10.5 13.5" />
                <circle cx="12.5" cy="12" r="2.6" />
                <path d="M16 8 C 18 10, 18 14, 16 16" />
            </>
        ),
    },
    {
        label: "Hip",
        d: (
            <>
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 15 L9 21" />
            </>
        ),
    },
    {
        label: "Shoulder",
        d: (
            <>
                <path d="M5 12 A 7 7 0 0 1 19 12" />
                <circle cx="12" cy="12" r="2.6" />
                <path d="M12 15 v5" />
            </>
        ),
    },
    {
        label: "Sports Injury",
        d: (
            <>
                <circle cx="14.5" cy="5" r="2" />
                <path d="M14.5 8 L10.5 12 L13.5 15 L10.5 20 M4 10 h4 M3 14 h4" />
            </>
        ),
    },
    {
        label: "Arthroscopy",
        d: (
            <>
                <circle cx="9" cy="15" r="4.5" />
                <path d="M12.5 11.5 L20 4 M16.5 4 H20 V7.5" />
            </>
        ),
    },
    {
        label: "Joint Replacement",
        d: (
            <>
                <circle cx="9" cy="12" r="4.5" />
                <circle cx="15" cy="12" r="4.5" />
            </>
        ),
    },
];

const IconRow = ({ icons, label }) => (
    <div className="icon-row" aria-label={label}>
        {icons.map((icon) => (
            <div className="icon-item" key={icon.label}>
                <span className="ring">
                    <svg viewBox="0 0 24 24">{icon.d}</svg>
                </span>
                <span>{icon.label}</span>
            </div>
        ))}
    </div>
);

/**
 * Small SVG "cameo" placeholder that sits behind the subject image.
 * The subject image is background-stripped, so a warm cameo behind it
 * creates a soft, on-brand editorial surface (no hard black rectangle).
 */
const PanelCameo = ({ tone, opacity = 0.16 }) => (
    <svg
        className="ph-fallback"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
    >
        <rect width="400" height="500" fill="var(--summer-peach)" />
        <ellipse
            cx="180"
            cy="430"
            rx="340"
            ry="280"
            fill={tone}
            fillOpacity={opacity}
        />
        <ellipse
            cx="320"
            cy="90"
            rx="240"
            ry="190"
            fill={tone}
            fillOpacity={opacity * 0.55}
        />
    </svg>
);

const TheSplit = () => {
    return (
        <section
            className="split"
            id="brands"
            data-testid="the-split-section"
            aria-label="Our specialty brands"
        >
            <div className="split-container">
                <div className="split-head">
                    <span className="artham-overline">The Split</span>
                    <h2
                        className="artham-h2"
                        style={{ marginTop: "1.5rem" }}
                    >
                        One trunk.
                        <br />
                        <em>Two ways to flourish.</em>
                    </h2>
                </div>

                <div className="split-wrap">
                    <div className="split-panels">
                        {/* Aesthetique */}
                        <div
                            className="brand-panel brand-panel--gold"
                            id="aesthetique"
                            data-testid="chapter-aesthetique"
                            role="link"
                            tabIndex={0}
                            aria-label="Explore Artham Aesthetique"
                            onClick={() => {
                                const el =
                                    document.getElementById("patient-journey");
                                if (el)
                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                        >
                            <div className="panel-main">
                                <div className="panel-copy">
                                    <h3 className="brand-name">
                                        Artham<br />Aesthetique
                                    </h3>
                                    <p className="desc">
                                        Advanced aesthetic treatments that help
                                        you look confident, feel radiant and
                                        age gracefully.
                                    </p>
                                    <button
                                        type="button"
                                        data-testid="chapter-aesthetique-cta"
                                        className="btn-artham-primary"
                                        style={{ alignSelf: "flex-start" }}
                                    >
                                        Explore Aesthetique{" "}
                                        <span aria-hidden="true">→</span>
                                    </button>
                                </div>
                                <div className="panel-photo" aria-hidden="true">
                                    <PanelCameo
                                        tone="var(--coronation-gold)"
                                        opacity={0.16}
                                    />
                                    <BgStripper
                                        src={ASSETS.aestheticsHero}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <IconRow
                                icons={AESTHETIQUE_ICONS}
                                label="Aesthetique specialties"
                            />
                        </div>

                        {/* Orthocare */}
                        <div
                            className="brand-panel brand-panel--teak"
                            id="orthocare"
                            data-testid="chapter-orthocare"
                            role="link"
                            tabIndex={0}
                            aria-label="Explore Artham Orthocare"
                            onClick={() => {
                                const el =
                                    document.getElementById("patient-journey");
                                if (el)
                                    el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}
                        >
                            <div className="panel-main">
                                <div className="panel-copy">
                                    <h3 className="brand-name">
                                        Artham<br />Orthocare
                                    </h3>
                                    <p className="desc">
                                        Comprehensive orthopaedic care to
                                        restore movement, relieve pain and
                                        rebuild an active life.
                                    </p>
                                    <button
                                        type="button"
                                        data-testid="chapter-orthocare-cta"
                                        className="btn-artham-primary"
                                        style={{
                                            alignSelf: "flex-start",
                                            backgroundColor:
                                                "var(--coronation-gold)",
                                        }}
                                    >
                                        Explore Orthocare{" "}
                                        <span aria-hidden="true">→</span>
                                    </button>
                                </div>
                                <div className="panel-photo" aria-hidden="true">
                                    <PanelCameo
                                        tone="var(--burma-teak)"
                                        opacity={0.14}
                                    />
                                    <BgStripper
                                        src={ASSETS.orthocareHero}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <IconRow
                                icons={ORTHOCARE_ICONS}
                                label="Orthocare specialties"
                            />
                        </div>
                    </div>

                    <div className="center-badge" aria-hidden="true">
                        <div>
                            <img
                                className="emblem"
                                src={ASSETS.logoLight}
                                alt=""
                                style={{ mixBlendMode: "darken" }}
                            />
                            <p>
                                One Philosophy.
                                <em>Endless Care.</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheSplit;
