export type Product = {
  id: string;
  name: string;
  collection: "private" | "signature" | "essentials";
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  lengths: string[];
  colors: string[];
  density: string;
  texture: string;
  capSize: string[];
  description: string;
  longDescription: string;
  details: string[];
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
};

export const collections = [
  {
    slug: "private",
    name: "Private Collection",
    subtitle: "Raw Reserve",
    tagline: "THE HEIRLOOM INVESTMENT",
    description:
      "Entirely unprocessed single-donor hair with fully intact cuticles. The ultimate heirloom - a lifetime companion.",
    accent: "Lifetime",
    years: "LIFETIME",
    color: "#2B1B12",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 485000,
  },
  {
    slug: "signature",
    name: "Signature Collection",
    subtitle: "Signature",
    tagline: "LONG-TERM LUXURY",
    description:
      "Exceptional high-density virgin hair designed for long-term luxury. Refined, resilient, remarkable.",
    accent: "2–3+ Years",
    years: "2–3+ YEARS",
    color: "#3D2314",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 285000,
  },
  {
    slug: "essentials",
    name: "Essentials Collection",
    subtitle: "Essentials",
    tagline: "EFFORTLESS EVERYDAY",
    description:
      "High-quality everyday human hair crafted for dependable beauty and effortless rotation.",
    accent: "Everyday Versatile",
    years: "12–18 MONTHS",
    color: "#57534E",
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 145000,
  },
] as const;

export const products: Product[] = [
  {
    id: "signature-caramel-wave-24",
    name: "The Signature Caramel Wave",
    collection: "signature",
    category: "Wigs",
    price: 345000,
    originalPrice: 385000,
    image: "/products/caramel-wave.jpeg",
    images: ["/products/caramel-wave.jpeg"],
    lengths: ['18"', '20"', '22"', '24"', '26"'],
    colors: ["Espresso Brown with Caramel Dimension"],
    density: "250%",
    texture: "Soft, Sculpted Waves",
    capSize: ["S", "M", "L"],
    description:
      "A masterclass in dimensional artistry, THE CARAMEL WAVE introduces warm, hand-painted golden highlights over a deep espresso foundation.",
    longDescription:
      "A masterclass in dimensional artistry, THE CARAMEL WAVE introduces warm, hand-painted golden highlights over a deep espresso foundation. Designed to frame the face with radiant warmth, it delivers dynamic movement and unmistakable allure.",
    details: [
      "Espresso Brown with Caramel Dimension",
      "Soft, Sculpted Waves",
      "Defined Centre Part",
      "Silky, Gloss-Luminous & Polished",
      "Full-Length with Cascading Movement",
      "Luxuriously Full with Natural Flow",
      "Sophisticated, Timeless & Effortlessly Glamorous",
    ],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-velmorea-24",
    name: "The Velmoréa",
    collection: "signature",
    category: "Wigs",
    price: 365000,
    originalPrice: 395000,
    image: "/products/velmorea.jpeg",
    images: ["/products/velmorea.jpeg"],
    lengths: ['20"', '22"', '24"', '26"'],
    colors: ["Rich Espresso-Black Finish"],
    density: "250%",
    texture: "Sleek Body with Sculpted Waves",
    capSize: ["S", "M", "L"],
    description:
      "A study in polished glamour, THE VELMORÉA is designed for an unmistakably luxurious presence.",
    longDescription:
      "A study in polished glamour, THE VELMORÉA is designed for an unmistakably luxurious presence. Engineered to capture effortless sophistication without appearing overworked, this unit transitions seamlessly from high-profile occasions to modern statement dressing.",
    details: [
      "Sleek body with sculpted waves",
      "Rich espresso-black finish",
      "Refined centre-part styling",
      "Full, luxurious density",
      "Signature Collection",
      "Fluid, Tangle-Free Movement with High Silhouette Retention",
    ],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-adunni-26",
    name: "The Àdunnī",
    collection: "signature",
    category: "Wigs",
    price: 375000,
    originalPrice: 410000,
    image: "/products/adunni.png",
    images: ["/products/adunni.png"],
    lengths: ['20"', '22"', '24"', '26"', '28"'],
    colors: ["Deep Natural-Black Finish"],
    density: "250%",
    texture: "Defined Voluminous Curls",
    capSize: ["S", "M", "L"],
    description:
      "A dramatic expression of natural texture and refined volume, THE ÀDUNNĪ is designed for those who want presence without compromise.",
    longDescription:
      "A dramatic expression of natural texture and refined volume, THE ÀDUNNĪ is designed for those who want presence without compromise.",
    details: [
      "Luxuriously long length",
      "Defined, voluminous curls",
      "Deep natural-black finish",
      "Exceptional fullness and density",
      "Softly framed hairline",
      "Rich, glossy texture",
      "Statement Signature Collection piece",
    ],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-aurelia-barrel-curl-24",
    name: "Aurelia Barrel Curl",
    collection: "signature",
    category: "Wigs",
    price: 355000,
    originalPrice: 390000,
    image: "/products/aurelia-barrel-curl.jpeg",
    images: ["/products/aurelia-barrel-curl.jpeg"],
    lengths: ['18"', '20"', '22"', '24"'],
    colors: ["Precision Honey Brown & Chestnut Highlights"],
    density: "250%",
    texture: "Defined Barrel Curls",
    capSize: ["S", "M", "L"],
    description:
      "Elevate your style with this high-end, statement-making lace front wig. Designed for a flawless, natural appearance.",
    longDescription:
      "Elevate your style with this high-end, statement-making lace front wig. Designed for a flawless, natural appearance, it is the ultimate protective style for photoshoots, special events, or everyday glam.",
    details: [
      "Seamlessly blends into any skin tone.",
      "Defined barrel curls that hold shape and movement without weighing down.",
      "Flexible parting versatility.",
      "Precision coloring meets defined volume for an uncompromised luxury look.",
    ],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-honey-ash-bronzed-wave-24",
    name: "The Honey-Ash Bronzed Wave",
    collection: "signature",
    category: "Wigs",
    price: 385000,
    originalPrice: 420000,
    image: "/products/honey-ash-bronzed-wave.jpeg",
    images: ["/products/honey-ash-bronzed-wave.jpeg"],
    lengths: ['20"', '22"', '24"', '26"'],
    colors: ["Warm Honey & Ash Blonde Highlights"],
    density: "250%",
    texture: "Hollywood S-Waves",
    capSize: ["S", "M", "L"],
    description:
      "A seamless blend of warm honey and ash blonde tones, styled in effortless Hollywood waves.",
    longDescription:
      "A seamless blend of warm honey and ash blonde tones, styled in effortless Hollywood waves. Masterfully toned ash and golden-honey blonde highlights woven over a dark root for maximum depth.",
    details: [
      "Dimensional sophistication",
      "Masterfully toned ash and golden-honey blonde highlights woven over a dark root for maximum depth.",
      "Long, luxurious length",
      "Soft, cascading S-waves engineered to maintain bounce, body, and high-shine fluid movement.",
      "Private Signature Collection",
    ],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "private-bone-straight-20",
    name: "Raw Bone Straight 20″",
    collection: "private",
    category: "Wigs",
    price: 485000,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    ],
    lengths: ['14"', '16"', '18"', '20"', '22"', '24"'],
    colors: ["Natural Black", "Natural Brown", "Jet Black"],
    density: "250%",
    texture: "Bone Straight",
    capSize: ["S", "M", "L"],
    description: "Single-donor raw hair, completely unprocessed. Cuticles intact, aligned.",
    longDescription:
      "Our most exclusive offering. Single-donor raw hair that has never been chemically processed. Each strand retains its natural cuticle alignment for unparalleled silkiness, movement and longevity. Investment-grade hair that becomes more beautiful with time.",
    details: ["Single donor", "Unprocessed", "Intact cuticles", "Oven Veil™ lace", "Lifetime with care"],
    inStock: true,
    featured: true,
  },
  {
    id: "private-body-wave-22",
    name: "Raw Body Wave 22″",
    collection: "private",
    category: "Wigs",
    price: 520000,
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    ],
    lengths: ['18"', '20"', '22"', '24"'],
    colors: ["Natural Black", "Natural Brown"],
    density: "250%",
    texture: "Body Wave",
    capSize: ["M", "L"],
    description: "Voluminous raw body wave with natural luster.",
    longDescription: "Oceanic waves crafted from unprocessed single-donor hair. Bouncy, full and eternally elegant.",
    details: ["Raw single-donor", "Natural wave pattern", "High density"],
    inStock: true,
    featured: true,
  },
  {
    id: "signature-curly-18",
    name: "Signature Deep Curly 18″",
    collection: "signature",
    category: "Wigs",
    price: 325000,
    originalPrice: 365000,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    ],
    lengths: ['14"', '16"', '18"', '20"'],
    colors: ["Natural Black", "Chocolate", "Honey Brown"],
    density: "230%",
    texture: "Deep Curly",
    capSize: ["S", "M", "L"],
    description: "High-density virgin deep curls. Defined, soft, enduring.",
    longDescription: "Our signature curl - tight, juicy and meticulously defined. Virgin hair curated for longevity and movement.",
    details: ["Virgin high-density", "Defined curl", "2-3+ years lifespan"],
    inStock: true,
    bestseller: true,
  },
  {
    id: "signature-straight-16",
    name: "Signature Silky Straight 16″",
    collection: "signature",
    category: "Bundles",
    price: 285000,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    ],
    lengths: ['12"', '14"', '16"', '18"', '20"'],
    colors: ["Natural Black", "Jet Black"],
    density: "220%",
    texture: "Silky Straight",
    capSize: ["M", "L"],
    description: "Liquid movement. Glass-like shine without heaviness.",
    longDescription: "Refined straight hair with natural swing. Lightweight yet full.",
    details: ["Virgin", "Silky finish", "Tangle-resistant"],
    inStock: true,
  },
  {
    id: "essentials-wave-14",
    name: "Essentials Loose Wave 14″",
    collection: "essentials",
    category: "Wigs",
    price: 145000,
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop",
    ],
    lengths: ['12"', '14"', '16"', '18"'],
    colors: ["Natural Black", "Brown", "Blonde"],
    density: "180%",
    texture: "Loose Wave",
    capSize: ["S", "M", "L"],
    description: "Dependable everyday beauty. Soft waves, effortless rotation.",
    longDescription: "Perfect for daily wear. Beautiful, resilient and crafted for versatility.",
    details: ["Human hair", "Everyday density", "Easy maintenance"],
    inStock: true,
  },
  {
    id: "essentials-bob-10",
    name: "Essentials Blunt Bob 10″",
    collection: "essentials",
    category: "Wigs",
    price: 165000,
    image:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=800&auto=format&fit=crop",
    ],
    lengths: ['8"', '10"', '12"', '14"'],
    colors: ["Natural Black", "Jet Black", "Wine"],
    density: "200%",
    texture: "Blunt Cut Straight",
    capSize: ["S", "M"],
    description: "Precision bob. Editorial edge for the modern woman.",
    longDescription: "A sharp, confident silhouette. Cut and crafted for polish.",
    details: ["Blunt cut", "Natural parting", "Lightweight cap"],
    inStock: true,
    bestseller: true,
  },
  {
    id: "closure-oven-veil",
    name: "Oven Veil™ 13×6 HD Frontal",
    collection: "signature",
    category: "Closures & Frontals",
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    ],
    lengths: ['12"', '14"', '16"'],
    colors: ["Transparent", "Medium Brown", "Dark Brown"],
    density: "N/A",
    texture: "Ultra-sheer lace",
    capSize: ["One Size"],
    description: "Our proprietary ultra-sheer lace. The invisible hairline.",
    longDescription: "Mimics skin texture. Melts seamlessly. Truly undetectable.",
    details: ["Ultra-sheer", "Pre-plucked", "Bleached knots"],
    inStock: true,
    featured: true,
  },
  {
    id: "bundle-raw-3",
    name: "Raw Bundles Trio (18″–22″)",
    collection: "private",
    category: "Bundles",
    price: 385000,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
    ],
    lengths: ["18-22"],
    colors: ["Natural Black"],
    density: "N/A",
    texture: "Natural Straight",
    capSize: ["N/A"],
    description: "Three raw single-donor bundles for a full install.",
    longDescription: "Matched donor, matched texture. Consistency you can feel.",
    details: ["3 bundles", "Single donor", "Unprocessed"],
    inStock: true,
  },
];

export const testimonials = [
  {
    name: "Amara O.",
    location: "Lagos, NG",
    text: "The Private Collection is unlike anything I have owned. Five years and it still moves like new. Worth every kobo.",
    product: "Raw Bone Straight 20″",
  },
  {
    name: "Zainab A.",
    location: "London, UK",
    text: "I have never had a frontal melt this seamlessly. Oven Veil is not marketing - it truly disappears.",
    product: "Oven Veil™ Frontal",
  },
  {
    name: "Chloe M.",
    location: "Houston, US",
    text: "Signature Deep Curly survived my wedding, honeymoon and everyday life. Defined and so soft.",
    product: "Signature Deep Curly",
  },
];

export const craftsmanship = [
  { title: "Donor selection", desc: "Single-donor sourcing. Consistency from root to tip." },
  { title: "Cuticle alignment", desc: "Intact, aligned cuticles for silkiness and longevity." },
  { title: "Density", desc: "Up to 250% density. Full without bulk." },
  { title: "Movement", desc: "Natural swing. Hair that behaves like hair." },
  { title: "Construction", desc: "Hand-tied, ventilated, balanced." },
  { title: "Longevity", desc: "Years, not months. Heirloom-grade." },
  { title: "Quality control", desc: "Inspected strand by strand before dispatch." },
];

export const ovenVeilSteps = [
  { k: "01", t: "Texture", d: "Ultra-sheer Swiss lace mimicking natural skin pores." },
  { k: "02", t: "Construction", d: "Hand-ventilated, single-knotted for realism." },
  { k: "03", t: "Hairline", d: "Pre-plucked, micro-bleached. No harsh lines." },
  { k: "04", t: "Fit", d: "Ear-to-ear 13×6 with elastic balance." },
  { k: "05", t: "Result", d: "Melts. Disappears. Becomes you." },
];
