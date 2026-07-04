import React from "react";

const LOGO_URL = `${process.env.PUBLIC_URL}/logo.png`;

export const LotusMark = ({
  size = 72,
  className = "",
  alt = "Artham",
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={LOGO_URL}
        alt={alt}
        width={size}
        height={size}
        loading="eager"
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "transparent",
          filter: "drop-shadow(0 10px 25px rgba(139, 90, 43, 0.12))",
          transition: "all .35s ease",
        }}
        className="select-none hover:scale-105"
      />
    </div>
  );
};

export const ArthamWordmark = ({
  className = "",
  withDevanagari = true,
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {withDevanagari && (
        <h1
          className="font-devanagari text-burma leading-none"
          style={{
            fontSize: "clamp(2.4rem,4vw,3.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          अर्थम्
        </h1>
      )}

      <span
        className="font-headline uppercase"
        style={{
          marginTop: "0.35rem",
          color: "#8B5A2B",
          fontSize: "clamp(.85rem,1vw,1rem)",
          letterSpacing: "0.55em",
          fontWeight: 500,
        }}
      >
        ARTHAM
      </span>
    </div>
  );
};