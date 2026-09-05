# AGENTS.md

## Codebase Guidelines & AI Interaction Rules

This repository defines the digital experience and luxury house web application for **HAIR OVEN**.

All future code modifications, copy updates, and AI agent contributions must strictly follow the standards below:

---

### 1. Typography & Punctuation Rules
- **No Em-Dashes (`—`)**: Do not use em-dashes (`—`) anywhere across the site text, headings, badges, or code comments. Use clean periods, commas, colons, or standard spacing instead.
- **No Emojis**: Do not use emojis in UI copy, buttons, titles, navigation items, notifications, or text descriptions.
- **Serif & Luxury Tone**: Maintain the high-end luxury editorial aesthetic. Main headlines use `font-serif` with elegant line-heights and font weights.

### 2. Copywriting & Tone of Voice
- **No AI Generic Content**: Avoid buzzwords, generic fluff, synthetic marketing clichés, or boilerplates ("In today's fast-paced world", "Unlock your potential", "Game-changing", etc.).
- **Authentic Brand Voice**: Every sentence must sound intentional, grounded in faith, master craftsmanship, provenance, and reverence for the woman who wears HAIR OVEN.
- **Specific Italicization**: 
  - Phrases like *"HAIR OVEN began with a calling."* must be italicized (`<span className="italic font-normal">`).

### 3. Layout & Mobile Alignment
- Ensure all major section headings take a single line on desktop screens where requested (e.g. `INTRODUCING OVEN VEIL™` and `AN EXPRESSION OF ABSOLUTE LUXURY.`).
- Format paragraph texts cleanly with optimal max-width (`max-w-[65ch]`) and responsive text padding (`px-4 sm:px-0 text-center mx-auto`) so copy renders seamlessly across mobile devices and high-resolution displays.
- Keep generous but balanced vertical breathing room between elements and bottom screen edges.

### 4. Technical Stack & Development Practices
- **Framework**: Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion.
- **Design Token Palette**: Warm luxury brown (`#2B1B12`), sand cream (`#FFFCF8`, `#E0D5C5`), gold accents (`#B8860B`, `#D4AF37`, `#F3E5AB`).
- **Code Cleanliness**: Keep code modular, clean, and free of unused icons or extraneous imports.
