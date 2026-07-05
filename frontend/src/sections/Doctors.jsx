import React from "react";
import { DOCTORS } from "@/lib/content";
import BgStripper from "@/components/BgStripper";

/**
 * Doctors — ported from client reference.
 *
 * Two editorial cards on a Summer-Peach surface. The left cell layers:
 *  1. An SVG "cameo" (peach + tinted ellipse + italic monogram) as the
 *     always-present fallback / backdrop.
 *  2. On top, the actual doctor photograph via BgStripper — the black
 *     studio background is stripped at runtime so the subject appears to
 *     float on the peach cameo (no hard silhouette rectangle).
 * Right cell holds the brand tag, name, italic role, bio, and hairline.
 */
const TONES = {
    "dr-omaima-jawed": { tone: "var(--coronation-gold)", toneOpacity: 0.18 },
    "dr-manu-gautam": { tone: "var(--burma-teak)", toneOpacity: 0.14 },
};

const initials = (name) =>
    name
        .replace(/^Dr\.?\s*/, "")
        .split(/\s+/)
        .map((s) => s[0])
        .join("")
        .toUpperCase();

const Doctors = () => {
    return (
        <section
            className="doctors section-light"
            id="doctors"
            data-testid="doctors-section"
            aria-label="Our doctors"
        >
            <div className="container">
                <div className="doctors-head">
                    <span className="artham-overline">
                        The People Behind The Purpose
                    </span>
                    <h2
                        className="artham-h2"
                        style={{ marginTop: "1.5rem" }}
                    >
                        Hands that heal.
                        <br />
                        <em>Hearts that care.</em>
                    </h2>
                    <p className="artham-body" style={{ marginTop: "2rem" }}>
                        Every philosophy needs its practitioners. Meet the
                        specialists who turn Artham&rsquo;s promise into daily
                        practice.
                    </p>
                </div>

                <div className="doctors-grid">
                    {DOCTORS.map((d) => {
                        const tone =
                            TONES[d.id] || {
                                tone: "var(--burma-teak)",
                                toneOpacity: 0.14,
                            };
                        return (
                            <article
                                key={d.id}
                                className="doctor-card"
                                data-testid={`doctor-card-${d.id}`}
                            >
                                <div className="doctor-photo">
                                    {/* SVG cameo — always underneath as
                                        fallback + on-brand backdrop */}
                                    <svg
                                        className="ph-fallback"
                                        viewBox="0 0 300 400"
                                        preserveAspectRatio="xMidYMid slice"
                                        aria-hidden="true"
                                    >
                                        <rect
                                            width="300"
                                            height="400"
                                            fill="var(--summer-peach)"
                                        />
                                        <ellipse
                                            cx="150"
                                            cy="360"
                                            rx="240"
                                            ry="200"
                                            fill={tone.tone}
                                            fillOpacity={tone.toneOpacity}
                                        />
                                        <text
                                            x="150"
                                            y="200"
                                            textAnchor="middle"
                                            fontFamily="Playfair Display, serif"
                                            fontStyle="italic"
                                            fontSize="40"
                                            fill="var(--burma-teak)"
                                            fillOpacity="0.4"
                                        >
                                            {initials(d.name)}
                                        </text>
                                    </svg>
                                    {/* Actual portrait, black BG removed */}
                                    <BgStripper
                                        src={d.image}
                                        alt={`${d.name}, ${
                                            d.role.split("·")[0].trim()
                                        }`}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="doctor-info">
                                    <span className="artham-overline">
                                        {d.clinic}
                                    </span>
                                    <h3>{d.name}</h3>
                                    <p className="role">
                                        {d.role.split("·")[0].trim()}
                                    </p>
                                    <p className="bio">{d.bio}</p>
                                    <hr className="hairline-gold" />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
