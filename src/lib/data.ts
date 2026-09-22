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
  lengthPrices?: Record<string, number>;
  closureOptions?: Array<{
    type: string;
    lengthPrices: Record<string, number>;
  }>;
  modelSpecs?: {
    closureType?: string;
    texture?: string;
    length?: string;
    density?: string;
    color?: string;
    styling?: string;
  };
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
      "An uncompromised single-origin reserve, preserved with absolute cuticle alignment, each creation is meticulously selected for its distinctive character and flawless integrity. A rare artifact of beauty, crafted to endure a lifetime.",
    accent: "Lifetime",
    years: "LIFETIME",
    color: "#2B1B12",
    image: "/products/editorial-model-2.jpg",
    priceFrom: 485000,
  },
  {
    slug: "signature",
    name: "Signature Collection",
    subtitle: "Signature",
    tagline: "LONG-TERM LUXURY",
    description:
      "The threshold of the absolute. Reserved exclusively for those who recognize that true distinction needs no announcement. Curated for immaculate density, fluid movement, and peerless structural longevity. Nothing rushed. Nothing overlooked. An effortless, commanding presence designed not merely to be worn, but to become entirely your own.",
    accent: "2 to 3+ Years",
    years: "2 to 3+ YEARS",
    color: "#3D2314",
    image: "/products/signature_page.jpeg",
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
    years: "12 to 18 MONTHS",
    color: "#57534E",
    image: "/products/aurelia-barrel-curl.jpeg",
    priceFrom: 145000,
  },
] as const;

export const products: Product[] = [
  {
    id: "signature-adewunmi",
    name: "The Adewunmi",
    collection: "signature",
    category: "Wigs",
    price: 1600000,
    image: "/products/ADEWUNMI.jpeg",
    images: ["/products/ADEWUNMI.jpeg"],
    lengths: ['26"', '28"', '30"'],
    lengthPrices: {
      '26"': 1600000,
      '28"': 1750000,
      '30"': 1900000,
    },
    closureOptions: [
      {
        type: "2x6 Lace Closure",
        lengthPrices: {
          '26"': 1600000,
          '28"': 1750000,
          '30"': 1900000,
        },
      },
      {
        type: "6x6 HD Lace Closure",
        lengthPrices: {
          '26"': 1900000,
          '28"': 2150000,
          '30"': 2300000,
        },
      },
      {
        type: "13x4 HD Frontal",
        lengthPrices: {
          '26"': 2250000,
          '28"': 2350000,
          '30"': 2550000,
        },
      },
    ],
    colors: ["Tangerine Dream (High-Saturation Vivid Orange)"],
    density: "Full Precision Density",
    texture: "Sleek Precision Cut",
    capSize: ["S", "M", "L", "XL"],
    description:
      "Make an unforgettable statement with our Tangerine Dream unit. This ultra-vibrant, vivid orange hair commands attention with high-saturation color.",
    longDescription:
      "Make an unforgettable statement with our Tangerine Dream unit. This ultra-vibrant, vivid orange hair commands attention with high-saturation color. Perfect for high-fashion photoshoots, exclusive events, or a complete style transformation.",
    details: [
      "Premium human hair",
      "Sleek, precision-cut bob",
      "Natural-looking movement and lustre",
      "High-saturation Tangerine Dream color",
      "Available in 2x6, 6x6 HD Lace, and 13x4 HD Frontal options",
      "Handcrafted preorder commission",
    ],
    modelSpecs: {
      closureType: "2x6 / 6x6 HD Lace Closure or 13x4 HD Frontal",
      texture: "100% Premium Human Hair (Sleek Precision Cut)",
      length: '26" - 30"',
      density: "Full Precision Density",
      color: "Tangerine Dream Vivid Orange",
      styling: "Sleek Precision-Cut Bob",
    },
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-argentine-bob",
    name: "The Argentine Bob",
    collection: "signature",
    category: "Wigs",
    price: 299000,
    originalPrice: 320000,
    image: "/products/THE_ARGENTINE_BOB.PNG",
    images: ["/products/THE_ARGENTINE_BOB.PNG"],
    lengths: ['6"', '8"', '10"', '12"'],
    lengthPrices: {
      '6"': 299000,
      '8"': 320000,
      '10"': 350000,
      '12"': 385000,
    },
    colors: ["Glass-Smooth Natural Black"],
    density: "Full, Natural-Looking Density",
    texture: "Silky Straight",
    capSize: ["S", "M", "L", "XL"],
    description:
      "A precisely crafted, ultra-sleek bob defined by its clean silhouette, immaculate movement, and naturally lustrous finish.",
    longDescription:
      "A precisely crafted, ultra-sleek bob defined by its clean silhouette, immaculate movement, and naturally lustrous finish. Designed for effortless sophistication, The Bob is cut to create a sharp yet feminine silhouette: minimal in expression, exceptional in detail.",
    details: [
      "Style: Sleek Blunt Bob",
      "Length: Chin-length",
      "Texture: Silky Straight",
      "Finish: High-shine, glass-smooth",
      "Density: Full, natural-looking density",
      "Appearance: Soft, polished, and exceptionally refined",
      "Collection: Signature Collection",
    ],
    modelSpecs: {
      closureType: "Customised Thin HD Lace Closure 5x5",
      texture: "100% Raw Silky Straight Hair",
      length: '10"',
      density: "Full 250g",
      color: "Glass-Smooth Natural Black",
      styling: "Middle Parting",
    },
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-caramel-wave-24",
    name: "The Signature Caramel Wave",
    collection: "signature",
    category: "Wigs",
    price: 1550000,
    image: "/products/caramel-wave.jpeg",
    images: ["/products/caramel-wave.jpeg"],
    lengths: ['18"', '20"', '22"', '24"'],
    lengthPrices: {
      '18"': 1550000,
      '20"': 1700000,
      '22"': 2100000,
      '24"': 2450000,
    },
    colors: ["Espresso Brown with Caramel Dimension"],
    density: "385g",
    texture: "Soft, Sculpted Waves",
    capSize: ["S", "M", "L"],
    description:
      "A masterclass in dimensional artistry, The Caramel Wave introduces warm, hand-painted golden highlights over a deep espresso foundation.",
    longDescription:
      "A masterclass in dimensional artistry, The Caramel Wave introduces warm, hand-painted golden highlights over a deep espresso foundation. Designed to frame the face with radiant warmth, it delivers dynamic movement and unmistakable allure.",
    details: [
      "Espresso Brown with Caramel Dimension",
      "Soft, Sculpted Waves",
      "Defined Centre Part",
      "Density: 385g",
      "Silky, Gloss-Luminous & Polished",
      "Full-Length with Cascading Movement",
      "Sophisticated, Timeless & Effortlessly Glamorous",
    ],
    modelSpecs: {
      closureType: "Customised Thin HD Lace Closure 5x5",
      texture: "Soft, Sculpted Waves",
      length: '24"',
      density: "385g",
      color: "Espresso Brown with Caramel Dimension",
      styling: "Centre Parting",
    },
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-velmorea-24",
    name: "The Velmoréa",
    collection: "signature",
    category: "Wigs",
    price: 1400000,
    image: "/products/velmorea.jpeg",
    images: ["/products/velmorea.jpeg"],
    lengths: ['20"', '22"', '24"'],
    lengthPrices: {
      '20"': 1400000,
      '22"': 1550000,
      '24"': 1700000,
    },
    colors: ["Rich Espresso-Black Finish"],
    density: "385g",
    texture: "Sleek Body with Sculpted Waves",
    capSize: ["S", "M", "L"],
    description:
      "A study in polished glamour, The Velmoréa is designed for an unmistakably luxurious presence.",
    longDescription:
      "A study in polished glamour, The Velmoréa is designed for an unmistakably luxurious presence. Engineered to capture effortless sophistication without appearing overworked, this unit transitions seamlessly from high-profile occasions to modern statement dressing.",
    details: [
      "Sleek body with sculpted waves",
      "Rich espresso-black finish",
      "Refined centre-part styling",
      "Density: 385g",
      "Signature Collection",
      "Fluid, Tangle-Free Movement with High Silhouette Retention",
    ],
    modelSpecs: {
      closureType: "Customised Thin HD Lace Closure 5x5",
      texture: "Sleek Body with Sculpted Waves",
      length: '24"',
      density: "385g",
      color: "Rich Espresso-Black Finish",
      styling: "Centre Parting",
    },
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "signature-adunni-26",
    name: "The Àdunnī",
    collection: "signature",
    category: "Wigs",
    price: 1700000,
    image: "/products/adunni.png",
    images: ["/products/adunni.png"],
    lengths: ['20"', '22"', '24"', '26"', '28"'],
    lengthPrices: {
      '20"': 1700000,
      '22"': 2100000,
      '24"': 2450000,
      '26"': 2600000,
      '28"': 2800000,
    },
    colors: ["Deep Natural-Black Finish"],
    density: "500g",
    texture: "Defined Voluminous Curls",
    capSize: ["S", "M", "L"],
    description:
      "A dramatic expression of natural texture and refined volume, The Àdunnī is designed for those who want presence without compromise.",
    longDescription:
      "A dramatic expression of natural texture and refined volume, The Àdunnī is designed for those who want presence without compromise.",
    details: [
      "Luxuriously long length",
      "Defined, voluminous curls",
      "Deep natural-black finish",
      "Density: 500g",
      "Softly framed hairline",
      "Rich, glossy texture",
      "Statement Signature Collection piece",
    ],
    modelSpecs: {
      closureType: "Customised Thin HD Lace Closure 5x5",
      texture: "Defined Voluminous Curls",
      length: '28"',
      density: "500g",
      color: "Deep Natural-Black Finish",
      styling: "Natural Parting",
    },
    inStock: true,
    featured: true,
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
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
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
    id: "essentials-wave-14",
    name: "Essentials Loose Wave 14″",
    collection: "essentials",
    category: "Wigs",
    price: 145000,
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1200&auto=format&fit=crop",
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
  },
  {
    id: "closure-oven-veil",
    name: "Oven Veil™ 13×6 HD Frontal",
    collection: "essentials",
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
    rating: 5,
  },
  {
    name: "Zainab A.",
    location: "London, UK",
    text: "I have never had a frontal melt this seamlessly. Oven Veil is not marketing - it truly disappears.",
    product: "Oven Veil™ Frontal",
    rating: 4,
  },
  {
    name: "Chloe M.",
    location: "Houston, US",
    text: "Signature Deep Curly survived my wedding, honeymoon and everyday life. Defined and so soft.",
    product: "Signature Deep Curly",
    rating: 5,
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
