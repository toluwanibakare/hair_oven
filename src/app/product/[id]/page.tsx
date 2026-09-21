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
  const [fittingOption, setFittingOption] = useState<number>(0); // 0 = None, 1 = Studio, 2 = Home Visit
  const [processingTime, setProcessingTime] = useState<number>(0); // 0 = 9-10 days, 1 = 5 days (+203700 NGN)
  const [qty, setQty] = useState(1);

  // File Upload states
  const [hairlineFileName, setHairlineFileName] = useState("");
  const [styleRefFileName, setStyleRefFileName] = useState("");

  // Modals
  const [capSizeModalOpen, setCapSizeModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState<string | null>("story");

  // Reviews state
  const [userRating, setUserRating] = useState(5);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const [reviewsList, setReviewsList] = useState([
    {
      author: "Nadine V.",
      date: "September 14, 2026",
      rating: 5,
      comment: "The Argentine Bob is absolute perfection. Glass-like shine and the lace melting into skin is completely invisible. Masterpiece quality.",
    },
    {
      author: "Dr. Kemi A.",
      date: "August 28, 2026",
      rating: 5,
      comment: "Incredible density and precision. The craftsmanship of Hair Oven is unmatched. Will be placing my next bespoke preorder soon.",
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
  const fittingPrices = [0, 182600, 507200];
  const processingPrices = [0, 203700];

  const unitTotalNGN = basePrice + fittingPrices[fittingOption] + processingPrices[processingTime];
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

        {/* Global Preorder Banner Notification */}
        <div className="mb-10 bg-[#2B1B12] text-[#E8DDC9] border border-[#D4AF37]/40 p-4 sm:p-5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping shrink-0" />
            <div>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#F3E5AB] font-semibold block">
                HANDCRAFTED PREORDER COMMISSION
              </span>
              <p className="text-xs text-[#E8DDC9]/90 mt-0.5">
                All Hair Oven creations are custom handcrafted on preorder. Dispatch in 5 – 10 working days. No immediate shipping.
              </p>
            </div>
          </div>
          <Link
            href="/heirloom-guide#fit-policies"
            className="shrink-0 text-[10px] tracking-[0.16em] uppercase text-[#D4AF37] underline underline-offset-4 hover:text-white"
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
              <div className="absolute top-5 left-5 bg-[#2B1B12]/90 backdrop-blur text-[#D4AF37] border border-[#D4AF37]/40 text-[9px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 z-20">
                PREORDER UNIT
              </div>
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
              <div className="flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
                <span>{product.collection.toUpperCase()} COLLECTION</span>
                <span>•</span>
                <span>BESPOKE PREORDER</span>
              </div>
              <h1 className="font-serif text-[36px] sm:text-[46px] leading-[0.95] text-[#2B1B12] mt-2 font-light">
                {product.name}
              </h1>

              <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-relaxed font-serif italic border-l-2 border-[#B8860B] pl-4">
                "{product.description}"
              </p>
            </div>

            {/* Live Dynamic Price & Taxes */}
            <div className="pt-4 border-t border-[#2B1B12]/10 flex items-baseline justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-bold text-[#2B1B12] tracking-tight">
                    {formatPrice(unitTotalNGN)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm sm:text-base text-[#A8A29E] line-through font-normal">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C] mt-1 font-medium">
                  Taxes Included • Preorder Handcrafted Unit
                </div>
              </div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#B8860B] font-semibold bg-[#EDE6D6]/40 px-3 py-1 border border-[#2B1B12]/10">
                Preorder Commission
              </span>
            </div>

            {/* Model & Unit Specifications Breakdown */}
            {product.modelSpecs && (
              <div className="bg-[#EDE6D6]/30 border border-[#2B1B12]/10 p-5 rounded-sm space-y-2.5 text-xs">
                <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#B8860B] mb-1">
                  Model Specifications
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[#2B1B12]">
                  <div>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Closure Type</span>
                    <span className="font-medium text-xs">{selectedClosureType || product.modelSpecs.closureType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Texture</span>
                    <span className="font-medium text-xs">{product.modelSpecs.texture}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Length</span>
                    <span className="font-medium text-xs">{selectedLength || product.modelSpecs.length}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Density</span>
                    <span className="font-medium text-xs">{product.modelSpecs.density}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Colour</span>
                    <span className="font-medium text-xs">{product.modelSpecs.color}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] block">Hair Styling</span>
                    <span className="font-medium text-xs">{product.modelSpecs.styling}</span>
                  </div>
                </div>
              </div>
            )}

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
                <div className="grid grid-cols-4 gap-2">
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

              {/* Delivery & Fitting Options */}
              <div className="pt-3 border-t border-[#2B1B12]/10 space-y-3">
                <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12]">
                  Private Fitting & Atelier Consultation
                </label>
                <select
                  value={fittingOption}
                  onChange={(e) => setFittingOption(parseInt(e.target.value))}
                  className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] focus:outline-none focus:border-[#B8860B] rounded-sm font-medium"
                >
                  <option value={0}>None (Standard Delivery)</option>
                  <option value={1}>At our St. Johns Wood Studio (+ {formatPrice(182600)})</option>
                  <option value={2}>Home Visit - London Zone 1-4 (+ {formatPrice(507200)})</option>
                </select>
              </div>

              {/* Processing Time */}
              <div className="space-y-3">
                <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12]">
                  Preorder Processing Time
                </label>
                <select
                  value={processingTime}
                  onChange={(e) => setProcessingTime(parseInt(e.target.value))}
                  className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] focus:outline-none focus:border-[#B8860B] rounded-sm font-medium"
                >
                  <option value={0}>9 - 10 Working Days (Standard Preorder)</option>
                  <option value={1}>5 Working Days Express Preorder (+ {formatPrice(203700)})</option>
                </select>
              </div>

              {/* Add to Cart Action Bar */}
              <div className="pt-4 flex flex-col gap-3">
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
                      onClick={() => setQty(qty + 1)}
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

            {/* Concise Product Description & Story */}
            <div className="pt-6 border-t border-[#2B1B12]/10 space-y-4">
              <h3 className="font-serif text-xl text-[#2B1B12]">About The Creation</h3>
              <p className="text-xs text-[#57534E] leading-relaxed font-normal">
                {product.longDescription}
              </p>
            </div>

            {/* Details Accordion */}
            <div className="pt-2 border-t border-[#2B1B12]/10">
              <div className="border border-[#2B1B12]/10 bg-white rounded-sm">
                <button
                  onClick={() => setOpenDetail(openDetail === "details" ? null : "details")}
                  className="w-full p-4 flex justify-between items-center text-left text-xs font-serif text-[#2B1B12]"
                >
                  <span>Product Specs & Highlights</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B8860B] transition-transform ${
                      openDetail === "details" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDetail === "details" && (
                  <div className="p-4 pt-0 text-xs text-[#57534E] leading-6 space-y-2 border-t border-[#2B1B12]/05">
                    {product.details.map((d, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-[#B8860B]">•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
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
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
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
    </div>
  );
}
