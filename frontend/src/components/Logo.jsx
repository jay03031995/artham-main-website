import React from "react";

// Artham Lotus-with-figure inspired mark (custom SVG, not the exact brand asset).
// The user did not upload the vector logo — this is a respectful stylised version
// referencing the brand book (lotus symbolising alignment; figure at the centre).
export const LotusMark = ({
    size = 64,
    stroke = "#844d28",
    accent = "#b8894a",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            {/* Outer petals */}
            <path
                d="M60 20 C50 40 42 55 42 70 C42 82 50 92 60 92 C70 92 78 82 78 70 C78 55 70 40 60 20 Z"
                stroke={stroke}
                strokeWidth="1.2"
                fill="none"
            />
            {/* Left petal */}
            <path
                d="M28 42 C32 55 40 66 52 74 C56 68 54 60 48 54 C42 48 34 44 28 42 Z"
                stroke={stroke}
                strokeWidth="1.2"
                fill="none"
            />
            {/* Right petal */}
            <path
                d="M92 42 C88 55 80 66 68 74 C64 68 66 60 72 54 C78 48 86 44 92 42 Z"
                stroke={stroke}
                strokeWidth="1.2"
                fill="none"
            />
            {/* Outer arc / cradle */}
            <path
                d="M18 78 Q60 108 102 78"
                stroke={accent}
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
            />
            {/* Human figure (head + body) */}
            <circle cx="60" cy="52" r="4" fill={stroke} />
            <path
                d="M60 58 L60 78 M52 66 L68 66"
                stroke={stroke}
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
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
