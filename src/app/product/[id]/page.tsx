"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products, type Product } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { useLanguage } from "@/context/language-context";
import {
  Heart,
  Minus,
  Plus,
  ChevronDown,
  MessageCircle,
  Upload,
  Ruler,
  Star,
  X,
  Check,
  Calendar,
  Sparkles,
  Info,
} from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";
import { ProductCard } from "@/components/product-card";

export default function ProductPage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id === params.id) || products[0];
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [selectedLength, setSelectedLength] = useState(product?.lengths[0] || '10"');
  const [selectedClosureType, setSelectedClosureType] = useState(
    product?.closureOptions?.[0]?.type || "2x6 Lace Closure"
  );
  const [capSize, setCapSize] = useState("Medium (22-22.5\")");
  const [closureColor, setClosureColor] = useState("Transparent HD");
  const [hasMeasurements, setHasMeasurements] = useState<"yes" | "no">("no");
  const [measurementEarToEar, setMeasurementEarToEar] = useState("");
  const [measurementCircumference, setMeasurementCircumference] = useState("");
  const [measurementForeheadToNape, setMeasurementForeheadToNape] = useState("");
  const [processingTime, setProcessingTime] = useState<number>(0); // 0 = 10-14 days, 1 = 1-5 days (+203700 NGN)
  const [qty, setQty] = useState(1);

  // File Upload states
  const [hairlineFileName, setHairlineFileName] = useState("");
  const [styleRefFileName, setStyleRefFileName] = useState("");

  // Modals
  const [capSizeModalOpen, setCapSizeModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState<string | null>("story");

  // Out of stock product request state
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [requestName, setRequestName] = useState("");
  const [requestEmail, setRequestEmail] = useState("");
  const [requestPhone, setRequestPhone] = useState("");
  const [requestNotes, setRequestNotes] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Reviews state
  const [userRating, setUserRating] = useState(5);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const [reviewsList, setReviewsList] = useState([
    {
      author: "Dr. Kemi A. (Lagos, NG)",
      date: "September 18, 2026",
      rating: 5,
      comment: "The precision cut and density are unbelievable. I wore this to a 3-day wedding weekend in Lagos heat and it stayed glass-sleek the entire time. No tangling, no fuss.",
    },
    {
      author: "Zainab A. (London, UK)",
      date: "September 10, 2026",
      rating: 5,
      comment: "My hairstylist in London was genuinely blown away by how thin and undetectable the lace is. Melted into my skin effortlessly without extra tinting.",
    },
    {
      author: "Ngozi E. (Abuja, NG)",
      date: "August 28, 2026",
      rating: 5,
      comment: "Hair Oven is the only brand I trust for raw hair now. The hair retains its natural shine and weight even after multiple washes. Worth every single kobo.",
    },
  ]);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 text-center">
        <div className="font-serif text-3xl">{t.product.notFound}</div>
        <Link
          href="/shop"
          className="mt-6 inline-flex h-11 px-8 bg-[#2B1B12] text-white items-center text-[11px] tracking-[0.16em] uppercase"
        >
          {t.product.backToShop}
        </Link>
      </div>
    );
  }

  // Calculate dynamic unit price based on closure type & length tier
  const activeClosureObj = product?.closureOptions?.find((c) => c.type === selectedClosureType) || product?.closureOptions?.[0];
  const basePrice = activeClosureObj
    ? (activeClosureObj.lengthPrices[selectedLength] || product.price)
    : (product?.lengthPrices?.[selectedLength] || product.price);

  // Add-on prices in NGN
  const processingPrices = [0, 203700];

  const unitTotalNGN = basePrice + processingPrices[processingTime];
  const grandTotalNGN = unitTotalNGN * qty;

  const wished = isInWishlist(product.id);

  // Related Products (exclude current product)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewText.trim()) return;
    setReviewsList([
      {
        author: reviewAuthor.trim(),
        date: "Just now",
        rating: userRating,
        comment: reviewText.trim(),
      },
      ...reviewsList,
    ]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setReviewModalOpen(false);
      setReviewAuthor("");
      setReviewText("");
    }, 1200);
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] pb-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-8 lg:py-14">
        {/* Breadcrumb Navigation */}
        <div className="flex gap-2 text-[10px] tracking-[0.16em] uppercase text-[#78716C] mb-8 font-medium">
          <Link href="/" className="hover:text-[#2B1B12]">
            {t.product.home}
          </Link>{" "}
          <span>/</span>
          <Link href="/shop" className="hover:text-[#2B1B12]">
            {t.product.shop}
          </Link>{" "}
          <span>/</span>
          <span className="text-[#2B1B12]">{product.name}</span>
        </div>

        {/* Minimalist Preorder Notice */}
        <div className="mb-8 pb-3 border-b border-[#2B1B12]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#57534E]">
          <span>
            Every creation is custom crafted on commission. Standard dispatch: 10 – 14 working days (Express available: 1 – 5 working days).
          </span>
          <Link
            href="/heirloom-guide#fit-policies"
            className="text-[10px] tracking-[0.16em] uppercase text-[#B8860B] font-semibold hover:underline shrink-0"
          >
            Preorder Protocol →
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Product Images Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#2B1B12] rounded-sm border border-[#2B1B12]/10 shadow-sm">
              <WatermarkImage
                src={product.images[activeImg] || product.image}
                alt={product.name}
                containerClassName="absolute inset-0 w-full h-full"
                imageClassName="w-full h-full object-cover"
                watermarkSize="lg"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-5 right-5 w-10 h-10 grid place-items-center rounded-full bg-white/90 backdrop-blur z-20 hover:scale-105 transition-transform shadow-md"
              >
                <Heart className={`w-4 h-4 ${wished ? "fill-[#B8860B] text-[#B8860B]" : "text-[#2B1B12]"}`} />
              </button>
              {(!product.inStock || product.stockCount === 0) ? (
                <div className="absolute top-5 left-5 bg-[#2B1B12] text-[#FFFCF8] border border-[#D4AF37]/40 text-[9px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 z-20 shadow-lg">
                  OUT OF STOCK
                </div>
              ) : (
                <div className="absolute top-5 left-5 bg-[#2B1B12]/90 backdrop-blur text-[#D4AF37] border border-[#D4AF37]/40 text-[9px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 z-20">
                  {product.stockCount <= 2 ? `ONLY ${product.stockCount} LEFT IN ATELIER` : `IN STOCK (${product.stockCount} AVAILABLE)`}
                </div>
              )}
            </div>

            {/* Thumbnail Selection */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pt-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-24 overflow-hidden border ${
                      activeImg === i ? "border-[#B8860B] ring-2 ring-[#B8860B]/20" : "border-[#2B1B12]/10 opacity-70"
                    } transition-all`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Bespoke Customisation & Order Panel */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
                <span>{product.collection.toUpperCase()} COLLECTION</span>
                <span>•</span>
                {(!product.inStock || product.stockCount === 0) ? (
                  <span className="text-[#991B1B] bg-[#FEF2F2] px-2 py-0.5 border border-[#FCA5A5]/30">OUT OF STOCK • REQUEST ONLY</span>
                ) : (
                  <span>IN STOCK ({product.stockCount} REMAINING)</span>
                )}
              </div>
              <h1 className="font-serif text-[36px] sm:text-[46px] leading-[0.95] text-[#2B1B12] mt-2 font-light">
                {product.name}
              </h1>

              <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-relaxed font-serif italic border-l-2 border-[#B8860B] pl-4">
                "{product.description}"
              </p>
            </div>

            {/* Live Dynamic Price & Taxes */}
            <div className="pt-4 border-t border-[#2B1B12]/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-4xl font-bold text-[#2B1B12] tracking-tight">
                    {formatPrice(unitTotalNGN)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs sm:text-base text-[#A8A29E] line-through font-normal">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C] mt-1 font-medium">
                  Taxes Included • Preorder Handcrafted Unit
                </div>
              </div>
              {(!product.inStock || product.stockCount === 0) ? (
                <span className="self-start sm:self-auto text-[10px] tracking-[0.16em] uppercase text-[#991B1B] font-semibold bg-[#FEF2F2] px-3 py-1 border border-[#FCA5A5]/40">
                  Out of Stock
                </span>
              ) : (
                <span className="self-start sm:self-auto text-[10px] tracking-[0.16em] uppercase text-[#B8860B] font-semibold bg-[#EDE6D6]/40 px-3 py-1 border border-[#2B1B12]/10">
                  {product.stockCount} Left in Reserve
                </span>
              )}
            </div>

            {/* Model & Creation Specifications Breakdown */}
            <div className="bg-[#f9f6f1] border border-[#2B1B12]/10 p-5 rounded-sm space-y-3 text-xs">
              <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#B8860B]">
                Model & Creation Specifications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-[#2B1B12]">
                <div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Closure / Cap Type</span>
                  <span className="font-medium text-xs">
                    {selectedClosureType || product.modelSpecs?.closureType || product.closureOptions?.[0]?.type || "HD Lace Closure"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Texture</span>
                  <span className="font-medium text-xs">{product.modelSpecs?.texture || product.texture}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Length</span>
                  <span className="font-medium text-xs">{selectedLength || product.modelSpecs?.length || product.lengths[0]}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Density</span>
                  <span className="font-medium text-xs">{product.modelSpecs?.density || product.density}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Colour / Tone</span>
                  <span className="font-medium text-xs">{product.modelSpecs?.color || product.colors[0]}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Styling</span>
                  <span className="font-medium text-xs">{product.modelSpecs?.styling || "Signature Custom Finish"}</span>
                </div>
              </div>

              {/* Merged Product Details & Highlights */}
              {product.details && product.details.length > 0 && (
                <div className="pt-3 border-t border-[#2B1B12]/10 space-y-1.5">
                  <div className="text-[9px] tracking-[0.18em] uppercase text-[#78716C] font-semibold">
                    Key Highlights & Details
                  </div>
                  <div className="space-y-1.5 text-xs text-[#57534E]">
                    {product.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#B8860B] font-bold">•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tailor Your Look Customisations Form */}
            <div className="space-y-5 pt-2">
              <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#2B1B12] pb-2 border-b border-[#2B1B12]/10">
                Tailor Your Customisations
              </div>

              {/* Closure / Frontal Type Selector if product has closureOptions */}
              {product.closureOptions && product.closureOptions.length > 0 && (
                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-2">
                    Select Closure / Frontal Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {product.closureOptions.map((opt) => (
                      <button
                        key={opt.type}
                        type="button"
                        onClick={() => setSelectedClosureType(opt.type)}
                        className={`h-11 px-3 border text-center transition-all flex flex-col justify-center items-center font-semibold text-xs ${
                          selectedClosureType === opt.type
                            ? "bg-[#2B1B12] text-[#FFFCF8] border-[#2B1B12] shadow-sm"
                            : "bg-white text-[#2B1B12] border-[#2B1B12]/15 hover:border-[#B8860B]"
                        }`}
                      >
                        <span>{opt.type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Length Selection */}
              <div>
                <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-2">
                  Select Hair Length
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {product.lengths.map((l) => {
                    const priceForL = activeClosureObj
                      ? (activeClosureObj.lengthPrices[l] || product.price)
                      : (product.lengthPrices?.[l] || product.price);
                    return (
                      <button
                        key={l}
                        type="button"
                        onClick={() => setSelectedLength(l)}
                        className={`h-11 px-3 border text-center transition-all flex flex-col justify-center items-center ${
                          selectedLength === l
                            ? "bg-[#2B1B12] text-[#FFFCF8] border-[#2B1B12] shadow-sm"
                            : "bg-white text-[#2B1B12] border-[#2B1B12]/15 hover:border-[#B8860B]"
                        }`}
                      >
                        <span className="text-xs font-semibold">{l}</span>
                        <span className={`text-[10px] font-bold ${selectedLength === l ? "text-[#D4AF37]" : "text-[#B8860B]"}`}>{formatPrice(priceForL)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cap Size Selector with "Check your cap size" Interactive Link */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12]">
                    Cap Size
                  </label>
                  <button
                    type="button"
                    onClick={() => setCapSizeModalOpen(true)}
                    className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold hover:underline inline-flex items-center gap-1.5"
                  >
                    <Ruler className="w-3.5 h-3.5" /> Check your cap size
                  </button>
                </div>

                <select
                  value={capSize}
                  onChange={(e) => setCapSize(e.target.value)}
                  className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] focus:outline-none focus:border-[#B8860B] rounded-sm font-medium"
                >
                  <option value='Extra Large (24-25" circumference)'>Extra Large (24-25" circumference)</option>
                  <option value='Large (23-24" circumference)'>Large (23-24" circumference)</option>
                  <option value='Medium (22-22.5" circumference)'>Medium (22-22.5" circumference)</option>
                  <option value='Small (20-21.5" circumference)'>Small (20-21.5" circumference)</option>
                </select>
              </div>

              {/* Closure Colour Selection */}
              <div>
                <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-2">
                  Closure Colour / HD Tone
                </label>
                <select
                  value={closureColor}
                  onChange={(e) => setClosureColor(e.target.value)}
                  className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] focus:outline-none focus:border-[#B8860B] rounded-sm font-medium"
                >
                  <option value="Transparent HD">Transparent HD Lace</option>
                  <option value="Light Brown HD">Light Brown HD</option>
                  <option value="Medium Brown HD">Medium Brown HD</option>
                  <option value="Dark Brown HD">Dark Brown HD</option>
                </select>
              </div>

              {/* Measurements & Preferences (Uploads & Direct Inputs) */}
              <div className="pt-3 border-t border-[#2B1B12]/10 space-y-4">
                <div className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#2B1B12]">
                  Measurements & Custom Preferences
                </div>
                <p className="text-[11px] text-[#78716C]">
                  Don't worry if you don't have exact numbers now. Our atelier team will contact you via email or WhatsApp if required.
                </p>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1.5">
                    Do you have your exact head measurements?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-xs text-[#2B1B12] cursor-pointer">
                      <input
                        type="radio"
                        name="measurements"
                        value="yes"
                        checked={hasMeasurements === "yes"}
                        onChange={() => setHasMeasurements("yes")}
                        className="accent-[#2B1B12]"
                      />
                      <span>Yes, I have measurements</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-[#2B1B12] cursor-pointer">
                      <input
                        type="radio"
                        name="measurements"
                        value="no"
                        checked={hasMeasurements === "no"}
                        onChange={() => setHasMeasurements("no")}
                        className="accent-[#2B1B12]"
                      />
                      <span>No (Atelier Standard Sizing)</span>
                    </label>
                  </div>
                </div>

                {hasMeasurements === "yes" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div>
                      <span className="block text-[9px] tracking-[0.12em] uppercase text-[#78716C] mb-1">
                        Circumference (in)
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. 22.5"
                        value={measurementCircumference}
                        onChange={(e) => setMeasurementCircumference(e.target.value)}
                        className="w-full h-9 px-3 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                      />
                    </div>
                    <div>
                      <span className="block text-[9px] tracking-[0.12em] uppercase text-[#78716C] mb-1">
                        Ear to Ear (in)
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. 13.5"
                        value={measurementEarToEar}
                        onChange={(e) => setMeasurementEarToEar(e.target.value)}
                        className="w-full h-9 px-3 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                      />
                    </div>
                    <div>
                      <span className="block text-[9px] tracking-[0.12em] uppercase text-[#78716C] mb-1">
                        Forehead to Nape (in)
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. 14.0"
                        value={measurementForeheadToNape}
                        onChange={(e) => setMeasurementForeheadToNape(e.target.value)}
                        className="w-full h-9 px-3 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                      />
                    </div>
                  </div>
                )}

                {/* Hairline Photo Upload */}
                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1.5">
                    Hairline Photo Reference (Optional)
                  </label>
                  <label className="flex items-center justify-between border border-dashed border-[#2B1B12]/30 bg-white p-3 cursor-pointer hover:border-[#B8860B] transition-colors rounded-sm">
                    <div className="flex items-center gap-2 text-xs text-[#57534E]">
                      <Upload className="w-4 h-4 text-[#B8860B]" />
                      <span>{hairlineFileName || "Choose file or drop hairline photo to upload"}</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setHairlineFileName(e.target.files?.[0]?.name || "")}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Styling Photo Upload */}
                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1.5">
                    Preferred Styling Photo Reference (Optional)
                  </label>
                  <label className="flex items-center justify-between border border-dashed border-[#2B1B12]/30 bg-white p-3 cursor-pointer hover:border-[#B8860B] transition-colors rounded-sm">
                    <div className="flex items-center gap-2 text-xs text-[#57534E]">
                      <Upload className="w-4 h-4 text-[#B8860B]" />
                      <span>{styleRefFileName || "Choose file or drop style photo reference to upload"}</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setStyleRefFileName(e.target.files?.[0]?.name || "")}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Processing & Delivery Time */}
              <div className="space-y-3 pt-3 border-t border-[#2B1B12]/10">
                <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12]">
                  Preorder Dispatch & Delivery Timeline
                </label>
                <select
                  value={processingTime}
                  onChange={(e) => setProcessingTime(parseInt(e.target.value))}
                  className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] focus:outline-none focus:border-[#B8860B] rounded-sm font-medium"
                >
                  <option value={0}>10 – 14 Working Days (Standard Preorder Dispatch)</option>
                  <option value={1}>1 – 5 Working Days (Express Preorder Dispatch + {formatPrice(203700)})</option>
                </select>
              </div>

              {/* Add to Cart / Out of Stock Request Action Bar */}
              <div className="pt-4 flex flex-col gap-3">
                {(!product.inStock || product.stockCount === 0) ? (
                  <div className="space-y-3">
                    <div className="p-4 bg-[#2B1B12]/05 border border-[#2B1B12]/10 rounded-sm text-xs text-[#57534E] space-y-1">
                      <div className="font-semibold text-[#2B1B12] text-[11px] tracking-[0.14em] uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#78716C]" /> THIS CREATION IS CURRENTLY OUT OF STOCK
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        You can request a priority atelier commission for this piece. Our concierge team will source matching single-donor hair and confirm your custom creation date.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setRequestModalOpen(true)}
                      className="w-full h-12 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <span>REQUEST THIS PIECE</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {product.stockCount <= 2 && (
                      <div className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-pulse" />
                        ONLY {product.stockCount} UNIT{product.stockCount > 1 ? "S" : ""} LEFT IN STOCK — RESERVE YOUR CREATION NOW
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#2B1B12]/20 bg-white">
                        <button
                          type="button"
                          onClick={() => setQty(Math.max(1, qty - 1))}
                          className="w-10 h-12 grid place-items-center hover:bg-[#2B1B12]/5"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-10 text-center text-xs font-semibold">{qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(Math.min(product.stockCount, qty + 1))}
                          className="w-10 h-12 grid place-items-center hover:bg-[#2B1B12]/5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          for (let i = 0; i < qty; i++)
                            addToCart(product, { length: selectedLength, color: closureColor });
                        }}
                        className="flex-1 h-12 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors shadow-md flex items-center justify-center gap-2"
                      >
                        <span>PREORDER UNIT</span>
                        <span>•</span>
                        <span className="font-bold text-sm tracking-tight text-[#F3E5AB]">{formatPrice(grandTotalNGN)}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Consultation Booking Link */}
                <div className="text-center pt-2">
                  <a
                    href="https://wa.me/2348051332551?text=Hi%20HAIR%20OVEN%2C%20I%20would%20like%20to%20book%20a%20private%20wig%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#57534E] hover:text-[#2B1B12] inline-flex items-center gap-1.5"
                  >
                    Need expert assistance selecting your look?{" "}
                    <span className="text-[#B8860B] font-semibold underline underline-offset-4">
                      Book a Private Consultation
                    </span>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-20 pt-16 border-t border-[#2B1B12]/10">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <h2 className="font-serif text-3xl text-[#2B1B12]">Client Reviews</h2>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-[#B8860B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B8860B]" />
              ))}
              <span className="text-xs font-semibold text-[#2B1B12] ml-2">5.0 / 5.0</span>
            </div>
            <p className="text-xs text-[#78716C] mt-2">
              Verified Atelier Reviews from HAIR OVEN Clients
            </p>
            <button
              onClick={() => setReviewModalOpen(true)}
              className="mt-5 h-11 px-8 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.16em] uppercase font-semibold hover:bg-[#B8860B] transition-colors"
            >
              Write a Review
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
            {reviewsList.map((rev, idx) => (
              <div key={idx} className="p-6 bg-[#EDE6D6]/20 border border-[#2B1B12]/10 rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#B8860B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B8860B]" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C]">{rev.date}</span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed italic">"{rev.comment}"</p>
                <div className="text-[11px] font-semibold text-[#2B1B12] tracking-wider uppercase">
                  {rev.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "You May Also Like" Related Products Grid */}
        <div className="mt-20 pt-16 border-t border-[#2B1B12]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold block">
                CURATED SELECTIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2B1B12] mt-1">You May Also Like</h2>
            </div>
            <Link
              href="/shop"
              className="text-[11px] tracking-[0.16em] uppercase text-[#2B1B12] hover:text-[#B8860B] underline underline-offset-4"
            >
              Explore Full Collection →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Cap Size Guide Modal */}
      {capSizeModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFCF8] text-[#2B1B12] border border-[#2B1B12]/20 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative rounded-sm max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setCapSizeModalOpen(false)}
              className="absolute top-5 right-5 text-[#78716C] hover:text-[#2B1B12]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              Atelier Sizing Guide
            </div>
            <h3 className="font-serif text-2xl mt-1 text-[#2B1B12] font-light">
              Check Your Cap Size
            </h3>
            <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
              Use a flexible measuring tape wrapped around your head hairline to determine your exact cap size.
            </p>

            <div className="mt-6 space-y-3 text-xs">
              <div className="p-3 border border-[#2B1B12]/10 bg-[#EDE6D6]/30 flex justify-between items-center">
                <div>
                  <span className="font-semibold block">Small</span>
                  <span className="text-[11px] text-[#78716C]">20 – 21.5 inches (51-54 cm)</span>
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">Petite</span>
              </div>

              <div className="p-3 border border-[#2B1B12]/10 bg-[#EDE6D6]/30 flex justify-between items-center">
                <div>
                  <span className="font-semibold block">Medium (Standard)</span>
                  <span className="text-[11px] text-[#78716C]">22 – 22.5 inches (55-57 cm)</span>
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">Most Popular</span>
              </div>

              <div className="p-3 border border-[#2B1B12]/10 bg-[#EDE6D6]/30 flex justify-between items-center">
                <div>
                  <span className="font-semibold block">Large</span>
                  <span className="text-[11px] text-[#78716C]">23 – 24 inches (58-61 cm)</span>
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">Voluminous</span>
              </div>

              <div className="p-3 border border-[#2B1B12]/10 bg-[#EDE6D6]/30 flex justify-between items-center">
                <div>
                  <span className="font-semibold block">Extra Large</span>
                  <span className="text-[11px] text-[#78716C]">24 – 25 inches (61-63 cm)</span>
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">Bespoke</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B1B12]/10 text-center">
              <Link
                href="/heirloom-guide#fit-policies"
                onClick={() => setCapSizeModalOpen(false)}
                className="text-xs text-[#B8860B] font-semibold underline underline-offset-4 uppercase tracking-wider"
              >
                View Complete Heirloom Sizing Protocol →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Write a Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFCF8] text-[#2B1B12] border border-[#2B1B12]/20 max-w-md w-full p-6 sm:p-8 shadow-2xl relative rounded-sm">
            <button
              onClick={() => setReviewModalOpen(false)}
              className="absolute top-5 right-5 text-[#78716C] hover:text-[#2B1B12]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              Client Feedback
            </div>
            <h3 className="font-serif text-2xl mt-1 text-[#2B1B12] font-light">
              Write a Review
            </h3>
            <p className="text-xs text-[#57534E] mt-1">
              Share your experience with {product.name}.
            </p>

            {reviewSubmitted ? (
              <div className="mt-6 p-4 bg-[#B8860B]/15 border border-[#B8860B]/40 text-center text-xs text-[#2B1B12] font-semibold">
                Thank you! Your review has been published.
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="mt-5 space-y-4">
                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2 text-[#B8860B]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= userRating ? "fill-[#B8860B]" : "text-[#A8A29E]"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1">
                    Your Name / Client Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor V."
                    value={reviewAuthor}
                    onChange={(e) => setReviewAuthor(e.target.value)}
                    className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1">
                    Your Review
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the hair texture, density, lace invisibility, and overall experience..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full p-3 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Out of Stock Product Request Modal */}
      {requestModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFCF8] text-[#2B1B12] border border-[#2B1B12]/20 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative rounded-sm max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setRequestModalOpen(false);
                setRequestSubmitted(false);
              }}
              className="absolute top-5 right-5 text-[#78716C] hover:text-[#2B1B12]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] tracking-[0.22em] uppercase text-[#B8860B] font-semibold">
              Atelier Request Concierge
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl mt-1 text-[#2B1B12] font-light">
              Request {product.name}
            </h3>
            <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
              This unit is currently out of stock. Submit your request below to initiate a private atelier reserve for this creation.
            </p>

            {requestSubmitted ? (
              <div className="mt-6 p-6 bg-[#f9f6f1] border border-[#B8860B]/40 text-center space-y-3 rounded-sm">
                <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 text-[#B8860B] mx-auto grid place-items-center">
                  <Check className="w-5 h-5" />
                </div>
                <div className="font-serif text-xl text-[#2B1B12]">Request Received</div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Thank you, <span className="font-semibold text-[#2B1B12]">{requestName}</span>. Your request for <span className="font-semibold text-[#2B1B12]">{product.name}</span> has been logged with our Concierge team. We will contact you via WhatsApp / Email shortly with custom creation timelines and availability.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setRequestModalOpen(false);
                    setRequestSubmitted(false);
                  }}
                  className="mt-4 px-6 h-10 bg-[#2B1B12] text-white text-[10px] tracking-[0.16em] uppercase font-semibold hover:bg-[#B8860B] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!requestName.trim() || !requestEmail.trim()) return;
                  setRequestSubmitted(true);
                }}
                className="mt-6 space-y-4 text-xs"
              >
                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={requestName}
                    onChange={(e) => setRequestName(e.target.value)}
                    className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B] font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@example.com"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1 font-semibold">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={requestPhone}
                      onChange={(e) => setRequestPhone(e.target.value)}
                      className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B] font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1 font-semibold">
                      Requested Hair Length
                    </label>
                    <select
                      value={selectedLength}
                      onChange={(e) => setSelectedLength(e.target.value)}
                      className="w-full h-11 px-3 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] focus:outline-none focus:border-[#B8860B] font-medium"
                    >
                      {product.lengths.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1 font-semibold">
                      Cap Size
                    </label>
                    <select
                      value={capSize}
                      onChange={(e) => setCapSize(e.target.value)}
                      className="w-full h-11 px-3 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] focus:outline-none focus:border-[#B8860B] font-medium"
                    >
                      <option value='Medium (22-22.5")'>Medium (22-22.5")</option>
                      <option value='Small (20-21.5")'>Small (20-21.5")</option>
                      <option value='Large (23-24")'>Large (23-24")</option>
                      <option value='Extra Large (24-25")'>Extra Large (24-25")</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#78716C] mb-1 font-semibold">
                    Custom Requests & Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify preferred lace tone, density adjustments, or dispatch urgency..."
                    value={requestNotes}
                    onChange={(e) => setRequestNotes(e.target.value)}
                    className="w-full p-3 bg-white border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>SUBMIT PIECE REQUEST</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
