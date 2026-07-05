import React, { useEffect, useRef, useState } from "react";

/**
 * BgStripper — client-side background remover.
 *
 * Loads the source image into an off-screen canvas and turns every pixel
 * below a luminance threshold to alpha=0. Result is re-emitted as a data
 * URL and used as the <img> src, so the subject appears with a truly
 * transparent background on any parent surface (beige, dark, or otherwise).
 *
 * Notes:
 *  - Source must be same-origin OR served with permissive CORS. The Emergent
 *    asset host does return `access-control-allow-origin: *`, so this works.
 *  - Threshold defaults to 24 (nearly black). Increase carefully — going too
 *    high starts eroding dark garments / shadows on the subject.
 *  - `feather` softens the alpha edge to prevent a hard silhouette.
 */
const BgStripper = ({
    src,
    alt = "",
    className = "",
    style,
    threshold = 24,
    feather = 12,
    testId,
    onReady,
    ...rest
}) => {
    const [processedSrc, setProcessedSrc] = useState(null);
    const [fallback, setFallback] = useState(false);
    const cancelRef = useRef(false);

    useEffect(() => {
        cancelRef.current = false;
        setProcessedSrc(null);
        setFallback(false);

        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
            if (cancelRef.current) return;
            try {
                const canvas = document.createElement("canvas");
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const px = data.data;

                for (let i = 0; i < px.length; i += 4) {
                    const r = px[i];
                    const g = px[i + 1];
                    const b = px[i + 2];
                    // Rec. 709 luminance
                    const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;

                    if (y <= threshold) {
                        px[i + 3] = 0; // fully transparent
                    } else if (y <= threshold + feather) {
                        // soft edge — linearly ramp alpha up
                        const t = (y - threshold) / feather;
                        px[i + 3] = Math.round(t * 255);
                    }
                }

                ctx.putImageData(data, 0, 0);
                const url = canvas.toDataURL("image/png");
                if (!cancelRef.current) {
                    setProcessedSrc(url);
                    if (onReady) onReady();
                }
            } catch (e) {
                // Canvas tainted (CORS) — fall back to plain image.
                if (!cancelRef.current) setFallback(true);
            }
        };

        img.onerror = () => {
            if (!cancelRef.current) setFallback(true);
        };

        img.src = src;

        return () => {
            cancelRef.current = true;
        };
    }, [src, threshold, feather, onReady]);

    // While processing, render invisibly-preserved space using the raw image.
    if (!processedSrc && !fallback) {
        return (
            <img
                src={src}
                alt={alt}
                className={className}
                style={{ ...style, opacity: 0 }}
                data-testid={testId}
                {...rest}
            />
        );
    }

    return (
        <img
            src={fallback ? src : processedSrc}
            alt={alt}
            className={className}
            style={style}
            data-testid={testId}
            {...rest}
        />
    );
};

export default BgStripper;
