# Artham — Typography & Colour Combo Guide
_For consistent use across the main website, sub-sites (Artham Aesthetique, Asthi Orthocare), print, and social._

---

## 1. Colour Palette

All colours are drawn directly from the Artham Brand Guidelines PDF. Do **not** introduce colours outside this palette.

### 1.1 Core Palette

| Token name          | Hex        | RGB              | Feel & Usage |
|---------------------|------------|------------------|--------------|
| **Burma Teak**      | `#844d28`  | 132 · 77 · 40    | Primary brand colour. Buttons, headlines, brand accents, logo tile background. Warm bronze — care & warmth. |
| **Arabian White**   | `#efdfc8`  | 239 · 223 · 200  | Primary background on light sections. Elegant, sophisticated, breathable. |
| **Armadillo**       | `#483f37`  | 72 · 63 · 55     | Dark backgrounds (Philosophy, Orthocare chapter), body text on light BG. Steadfastness & professionalism. |
| **Coronation Gold** | `#b8894a`  | 184 · 137 · 74   | Accent for hairlines, dot markers, hover/active states, editorial pull-quote borders. |
| **Summer Peach**    | `#f5e6d0`  | 245 · 230 · 208  | Optional lighter background variant of Arabian White (subtle section shifts). |
| **Ink Black**       | `#1a1512`  | 26 · 21 · 18     | Reserved for essential ultra-fine typography or icons. Use very sparingly. |
| **Pure Black**      | `#000000`  | 0 · 0 · 0        | Precision & contrast; use only where technically required (icons, form outlines). |

### 1.2 Approved Colour Combinations

Follow these exact pairings — they preserve legibility and brand feel.

| Combo | Background            | Foreground / Text          | Use For |
|-------|-----------------------|----------------------------|---------|
| **A** | Arabian White `#efdfc8` | Armadillo `#483f37`      | Default page body, brand story, aesthetique chapter |
| **B** | Armadillo `#483f37`   | Arabian White `#efdfc8`    | Philosophy section, orthocare chapter, dark interstitials |
| **C** | Burma Teak `#844d28`  | Arabian White `#efdfc8`    | Footer, primary CTA buttons |
| **D** | Arabian White `#efdfc8` | Burma Teak `#844d28`     | Headline colour on light sections, accent numerals |
| **E** | Any BG                | Coronation Gold `#b8894a`  | Small accents only — dots, hairlines, chapter numbers, hover glow |

### 1.3 Prohibited Combinations

Never do the following — they break the brand:

- ❌ Coronation Gold `#b8894a` as large body text on Arabian White (poor contrast).
- ❌ Burma Teak `#844d28` on Armadillo `#483f37` (both dark warm — muddy).
- ❌ Pure white `#ffffff` as page background (kills the warm editorial mood — use `#efdfc8`).
- ❌ Any purple/violet/blue accent colour.
- ❌ Gradients on dark backgrounds. Solid Armadillo only.

### 1.4 Opacity Ladder (for text-on-BG)

When you need softer text (secondary paragraphs, captions), use these opacity steps against the base colour — never a different colour.

| Purpose            | Opacity |
|--------------------|---------|
| Primary text       | 100%    |
| Body copy          | 85%     |
| Secondary / caption| 70%     |
| Tertiary / label   | 60%     |
| Watermark / decor  | 4–8%    |

---

## 2. Typography

Five typefaces total — assigned to specific roles. Never substitute or add new fonts.

### 2.1 Font Roles & Assignments

| Role                        | Typeface                    | Weight(s)     | Usage |
|-----------------------------|-----------------------------|---------------|-------|
| **Primary / Logo (Hindi)**  | Tiro Devanagari Hindi       | Regular       | `अर्थम्` wordmark, all Devanagari elements. Only for Devanagari script. |
| **Headlines (English)**     | Playfair Display            | 400 · 500 · 600 · SemiBold Italic | H1, H2, section headings, editorial pull quotes, italic accents. Never body copy. |
| **Body copy**               | Poppins                     | 300 · 400 · 500 | All paragraph text, descriptions, service labels. |
| **Fine print / Captions**   | Raleway                     | 300 · 400     | Subtext, address block, small taglines, image captions. |
| **UI / Buttons / Overlines**| Montserrat                  | 400           | Button labels, uppercase overlines, chapter labels, footer section titles. |

### 2.2 Type Scale (Responsive)

Tailwind-friendly scale — mobile → tablet → desktop.

| Level       | Font           | Size (mobile → desktop)                          | Extras |
|-------------|----------------|--------------------------------------------------|--------|
| **H1 Hero** | Playfair Display 600 | `text-4xl` → `text-5xl` → `text-6xl` / clamp(2.25rem, 5.5vw, 4rem) | Uppercase, tracking `0.2em` |
| **H2 Section** | Playfair Display 400/600 | `text-3xl` → `text-4xl` → `text-5xl` / clamp(2.4rem, 5vw, 4rem) | Mixed italic + roman |
| **H3 Card**  | Playfair Display 400 italic | `text-2xl` → `text-3xl` → `text-4xl` | Italic for value cards |
| **Body**    | Poppins 300/400 | `text-base` → `text-lg` (`0.95rem`–`1.125rem`)   | `leading-[1.9]` for editorial rhythm |
| **Small**   | Poppins 400 or Raleway 300 | `text-sm`                                | Meta info |
| **Overline / Label** | Montserrat 400 | `text-[10px]` → `text-xs`                | Uppercase, tracking `0.35em`–`0.4em` |
| **Devanagari** | Tiro Devanagari Hindi Regular | clamp(1.75rem, 3vw, 2.5rem) hero: clamp(2rem, 4vw, 3.25rem) | Never below `1.25rem` |

### 2.3 Typographic Rules

1. **Only one italic voice.** Italics belong to Playfair Display. Never italicise Poppins or Montserrat.
2. **Uppercase is a signal, not a style.** Reserve it for Montserrat labels, buttons, and section overlines with `tracking-[0.3em]` or wider.
3. **Devanagari always accompanies English.** Never orphan Devanagari `अर्थम्` — it should sit above or beside the English "Artham" wordmark.
4. **Line-height is generous.** Body copy: `1.8–1.9`. Headlines: `1.05–1.15`. This is intentional — the brand should breathe.
5. **Tracking (letter-spacing):**
   - Playfair headlines: `-0.01em` to `0` (tight, editorial).
   - Montserrat overlines: `0.3em`–`0.4em` (wide, quiet authority).
   - Raleway fine print: `0.2em`–`0.3em` uppercase.
6. **Never combine Poppins with body italic.** For emphasis inside body copy, wrap the phrase in Playfair Display italic (`<em class="font-headline italic">…</em>`).

### 2.4 Google Fonts Import

Single import URL covering all five families:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Poppins:wght@300;400;500&family=Raleway:wght@300;400;500&family=Tiro+Devanagari+Hindi&display=swap" rel="stylesheet">
```

### 2.5 CSS Custom Properties (Drop-In)

```css
:root {
  --burma-teak: #844d28;
  --arabian-white: #efdfc8;
  --armadillo: #483f37;
  --coronation-gold: #b8894a;
  --summer-peach: #f5e6d0;
  --ink: #1a1512;

  --font-devanagari: "Tiro Devanagari Hindi", serif;
  --font-headline:   "Playfair Display", serif;
  --font-body:       "Poppins", sans-serif;
  --font-fine:       "Raleway", sans-serif;
  --font-secondary:  "Montserrat", sans-serif;
}
```

### 2.6 Tailwind Config Snippet

```js
theme: {
  extend: {
    colors: {
      burma:     { DEFAULT: '#844d28' },
      armadillo: { DEFAULT: '#483f37' },
      arabian:   { DEFAULT: '#efdfc8' },
      gold:      { DEFAULT: '#b8894a' },
    },
    fontFamily: {
      devanagari: ['"Tiro Devanagari Hindi"', 'serif'],
      headline:   ['"Playfair Display"', 'serif'],
      body:       ['Poppins', 'sans-serif'],
      fine:       ['Raleway', 'sans-serif'],
      secondary:  ['Montserrat', 'sans-serif'],
    },
  }
}
```

---

## 3. Component Presets (for main website)

### 3.1 Primary Button (Filled)

```
Background: Burma Teak (#844d28)
Text:       Arabian White (#efdfc8)
Font:       Montserrat 400, uppercase, tracking 0.3em, size 11px
Padding:    px-9 py-4  (36px · 16px)
Corners:    sharp (rounded-none) or 2px (rounded-sm)
Hover:      Background → Armadillo (#483f37), 500ms colour transition
```

### 3.2 Secondary Button (Outline)

```
Background: transparent
Border:     1px Burma Teak/60
Text:       Burma Teak
Hover:      Background → Burma Teak, Text → Arabian White
```

### 3.3 Editorial Pull-Quote

```
Font:       Playfair Display italic, size 1.5rem–2rem
Colour:     Burma Teak on light BG · Arabian White on dark BG
Left border: 2px Coronation Gold, padding-left 24px
```

### 3.4 Chapter Marker

```
Roman numeral (Playfair italic) · thin gold rule · Montserrat 10px uppercase label 0.35em tracking
```

### 3.5 Footer

```
Background: Burma Teak
Everything: Arabian White with opacity ladder (100% headings → 60% divider)
Accent labels ("VISIT US", "REACH OUT"): Coronation Gold, Montserrat uppercase 10px 0.4em tracking
```

---

## 4. Voice & Content Rules

- **Never shout.** Use uppercase only for micro-labels and buttons.
- **One idea per section.** White space is a design element, not a gap to fill.
- **Sanskrit / Devanagari as anchor.** Use `अर्थम्`, `अस्थि`, `अर्थ` where meaningful — not decoratively.
- **Numbers as ordinals in Roman.** Chapter I, II, III, IV — never "01", "02".
- **Signature line.** Every long-form piece can close with the tagline or one of:
  - "Where Science meets Soulful Care."
  - "Aligning Movement, Enhancing Confidence."

---

## 5. Do & Don't (Quick Card)

| ✅ Do                                          | ❌ Don't                                       |
|------------------------------------------------|-----------------------------------------------|
| Use `#efdfc8` as the base page background      | Use pure white or grey backgrounds            |
| Pair Playfair (headlines) with Poppins (body)  | Set body copy in Playfair                     |
| Keep Devanagari `अर्थम्` beside English wordmark | Orphan Devanagari in isolation              |
| Wide letter-spacing on uppercase Montserrat    | Uppercase Playfair or Poppins                 |
| Coronation Gold for tiny accents only          | Coronation Gold for large text                |
| One brand colour dominant per section          | Multi-colour rainbow sections                 |

---

_Maintained by Artham brand. For questions on new applications, refer back to the original Brand Guidelines PDF and this document together._
