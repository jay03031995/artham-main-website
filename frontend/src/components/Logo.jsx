import React from "react";

// Actual Artham logo asset (uploaded by client — lotus + human figure, white on Burma Teak).
const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_artham-intro/artifacts/ktst3x2t_Untitled%20design%20%281%29.png";

// Logo rendered as an image tile. Because the source PNG is a solid Burma-Teak
// square with the white mark, we render it as an intentional tile — sharp,
// contained, and elegant on any background.
export const LotusMark = ({
    size = 64,
    className = "",
    rounded = "rounded-sm",
    alt = "Artham",
}) => {
    return (
        <img
            src={LOGO_URL}
            alt={alt}
            width={size}
            height={size}
            className={`${rounded} object-cover ${className}`}
            style={{ width: size, height: size }}
            loading="eager"
        />
    );
};

export const ArthamWordmark = ({ className = "", withDevanagari = true }) => {
    return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
            {withDevanagari && (
                <span
                    className="font-devanagari text-burma tracking-wide"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                    अर्थम्
                </span>
            )}
            <span
                className="font-headline text-burma tracking-[0.3em] uppercase"
                style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
            >
                Artham
            </span>
        </div>
    );
};
