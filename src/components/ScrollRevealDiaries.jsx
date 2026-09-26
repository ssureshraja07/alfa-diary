import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Layers, 
  ArrowRight, 
  
  Compass, 
  Bookmark, 
  ShieldCheck, 
  
  SlidersHorizontal 
} from "lucide-react";
import { products } from "../data/products";

export default function ScrollRevealDiaries() {
  // Reveal modes the user can toggle between
  const [revealMode, setRevealMode] = useState("left-right"); // 'left-right' | 'flip-open' | 'cascade'

  const showcaseItems = [
    {
      ...products[0], // Classic Journal
      chapter: "Folio I",
      tagline: "The Everyday Terracotta Companion",
      description: "Forged in earthy terracotta leather and natural unbleached beige pages. Slides onto your desk ready to absorb your earliest morning inspirations.",
      coverColor: "#C05A3E",
      accentBg: "from-[#C05A3E]/15 to-[#F6F1E7]",
      paletteNotes: ["Terracotta Grain", "Oatmeal Beige", "Ivory Lines"],
      direction: "left",
    },
    {
      ...products[1], // Midnight Diary
      chapter: "Folio II",
      tagline: "The Dusty Blue Nocturne",
      description: "Wrapped in tranquil dusty blue bookcloth with silver-foil embossing. Glides into focus from the right side, built for evening contemplation.",
      coverColor: "#587989",
      accentBg: "from-[#587989]/15 to-[#F6F1E7]",
      paletteNotes: ["Dusty Slate Blue", "Crisp White", "Smoky Ribbon"],
      direction: "right",
    },
    {
      ...products[2], // Signature Journal
      chapter: "Folio III",
      tagline: "The Beige Linen Keepsake",
      description: "An heirloom archival volume bound with tactile woven beige flax and rust-tinted thread. Designed to outlast decades with zero page yellowing.",
      coverColor: "#E8DDCB",
      accentBg: "from-[#E8DDCB]/30 to-[#F6F1E7]",
      paletteNotes: ["Natural Beige Flax", "Terracotta Stitch", "Cream Vellum"],
      direction: "left",
    },
    {
      ...products[3], // Daily Planner
      chapter: "Folio IV",
      tagline: "The White Marble Minimalist",
      description: "Crisp white bonded leather casing accented with dusty blue typography and terracotta ribbon dividers. Structuring your 24 hours with clarity.",
      coverColor: "#FFFFFF",
      accentBg: "from-white to-[#E6EFF2]",
      paletteNotes: ["Pure White Casing", "Dusty Blue Grid", "Terracotta Bookmark"],
      direction: "right",
    },
    {
      ...products[4], // Travel Diary
      chapter: "Folio V",
      tagline: "The Explorer's Terracotta Odyssey",
      description: "Weather-resistant terracotta oilcloth with flexible spine. Slides in ready for passports, pressed wildflowers, rail tickets, and travel memories.",
      coverColor: "#8F3720",
      accentBg: "from-[#8F3720]/15 to-[#F6F1E7]",
      paletteNotes: ["Deep Terracotta", "Weathered Beige", "Sea Blue Ribbon"],
      direction: "left",
    },
    {
      ...products[5], // Minimal Notebook
      chapter: "Folio VI",
      tagline: "The Serene Dusty Blue Sketcher",
      description: "Heavyweight 160gsm sketch paper encased in muted dusty blue linen. Perfect for fountain pen ink washes, pencil sketches, and architectural schematics.",
      coverColor: "#375361",
      accentBg: "from-[#375361]/15 to-[#E6EFF2]",
      paletteNotes: ["Dark Dusty Blue", "Bleached White", "Clay Accents"],
      direction: "right",
    },
  ];

  // Ref container for observing elements
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".scroll-reveal-card");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [revealMode]);

  // Dynamic class getter based on reveal mode & direction
  const getAnimationClass = (direction, index) => {
    if (revealMode === "left-right") {
      return direction === "left" ? "reveal-init-left" : "reveal-init-right";
    }
    if (revealMode === "flip-open") {
      return "opacity-0 translate-y-12 rotate-[-5deg] scale-95 transition-all duration-700 ease-out";
    }
    // cascade
    return "opacity-0 translate-y-16 transition-all duration-700 ease-out";
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F1E7] via-[#EDE4D3]/50 to-[#F6F1E7] py-28 sm:py-36">
      
      {/* Decorative background geometry */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C05A3E]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-2/3 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#587989]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C05A3E]/20 bg-[#F9EFEA] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C05A3E]">
            <Sparkles size={14} />
            <span>Interactive Scroll Unveiling</span>
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#26211E] sm:text-5xl lg:text-6xl font-serif">
            Chapters Revealed as You Scroll
          </h2>

          <p className="mt-4 max-w-2xl text-base text-[#7D6B5A] sm:text-lg">
            Experience our diaries gliding dynamically from the left and right margins. Witness the interplay of warm terracotta, soft beige, serene dusty blue, and crisp white.
          </p>

          {/* Interactive Scroll Animation Mode Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#E8DDCB] bg-white p-1.5 shadow-sm">
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#7D6B5A]">
              <SlidersHorizontal size={14} className="text-[#C05A3E]" />
              Reveal Mode:
            </span>

            <button
              onClick={() => setRevealMode("left-right")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 ${
                revealMode === "left-right"
                  ? "bg-[#C05A3E] text-white shadow-md scale-105"
                  : "text-[#26211E] hover:bg-[#F6F1E7]"
              }`}
            >
              ⇄ Left & Right Wings
            </button>

            <button
              onClick={() => setRevealMode("flip-open")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 ${
                revealMode === "flip-open"
                  ? "bg-[#587989] text-white shadow-md scale-105"
                  : "text-[#26211E] hover:bg-[#F6F1E7]"
              }`}
            >
              📖 Book 3D Flip
            </button>

            <button
              onClick={() => setRevealMode("cascade")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 ${
                revealMode === "cascade"
                  ? "bg-[#26211E] text-white shadow-md scale-105"
                  : "text-[#26211E] hover:bg-[#F6F1E7]"
              }`}
            >
              ⇡ Floating Cascade
            </button>
          </div>
        </div>

        {/* ================= SCROLL REVEAL TIMELINE / DIARIES ================= */}
        <div ref={containerRef} className="relative mt-20 space-y-24 sm:space-y-32">
          
          {/* Central spine guideline running down the viewport */}
          <div className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden -translate-x-1/2 border-l-2 border-dashed border-[#C05A3E]/20 lg:block" />

          {showcaseItems.map((item, index) => {
            const isLeft = item.direction === "left";

            return (
              <div
                key={item.id}
                className={`scroll-reveal-card relative grid items-center gap-8 lg:grid-cols-12 lg:gap-14 ${getAnimationClass(
                  item.direction,
                  index
                )}`}
              >
                {/* Central Chapter Knot (Desktop only) */}
                <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C05A3E] bg-[#F6F1E7] text-xs font-black text-[#C05A3E] shadow-md">
                  0{index + 1}
                </div>

                {/* ================= DIARY IMAGE DISPLAY CARD ================= */}
                <div
                  className={`lg:col-span-6 ${
                    isLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#E8DDCB] bg-white p-5 sm:p-7 shadow-lg transition-all duration-500 hover:shadow-2xl">
                    
                    {/* Background tint gradient */}
                    <div className={`relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[2rem] bg-gradient-to-br ${item.accentBg} p-6 flex items-center justify-center`}>
                      
                      {/* Realistic book shadow overlay */}
                      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/10" />

                      {/* Cover color tag */}
                      <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-bold text-[#26211E] backdrop-blur-md">
                        <span 
                          className="h-2.5 w-2.5 rounded-full border border-black/20" 
                          style={{ backgroundColor: item.coverColor }}
                        />
                        <span>{item.category}</span>
                      </div>

                      {/* Direction indicator badge */}
                      <div className="absolute right-4 top-4 z-10 rounded-full bg-black/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#26211E]">
                        Revealed from {item.direction}
                      </div>

                      {/* Product Image with hover 3D tilt */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`h-4/5 max-h-72 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] transition duration-700 ease-out group-hover:scale-105 ${
                          isLeft ? "group-hover:rotate-1" : "group-hover:-rotate-1"
                        }`}
                      />

                      {/* View Details Button — navigates to products page */}
                      <Link
                        to="/products"
                        className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-[#26211E] px-4 py-2 text-xs font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#C05A3E] hover:scale-105"
                      >
                        <ArrowRight size={14} />
                        <span>View Details</span>
                      </Link>
                    </div>

                    {/* Palette Swatches Bar */}
                    <div className="mt-5 flex items-center justify-between border-t border-[#E8DDCB] pt-4 text-xs">
                      <div className="flex items-center gap-1 text-[#7D6B5A]">
                        <span className="font-bold text-[#26211E]">Harmonious Palette:</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.paletteNotes.map((note, nIdx) => (
                          <span
                            key={nIdx}
                            className="rounded-md border border-[#E8DDCB] bg-[#F6F1E7] px-2 py-0.5 text-[10px] font-semibold text-[#7D6B5A]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* ================= DIARY TEXT & EDITORIAL STORY ================= */}
                <div
                  className={`lg:col-span-6 ${
                    isLeft ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                  }`}
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[#C05A3E]/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#C05A3E]">
                        {item.chapter}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#7D6B5A]/40" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#587989]">
                        Scroll Arrival
                      </span>
                    </div>

                    <h3 className="text-3xl font-extrabold tracking-tight text-[#26211E] sm:text-4xl font-serif">
                      {item.name}
                    </h3>

                    <p className="text-sm font-semibold uppercase tracking-wider text-[#C05A3E]">
                      {item.tagline}
                    </p>

                    <p className="text-base leading-relaxed text-[#7D6B5A] sm:text-lg">
                      {item.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#26211E]">
                        <Bookmark size={15} className="text-[#C05A3E]" />
                        <span>Satin Ribbon Divider</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#26211E]">
                        <ShieldCheck size={15} className="text-[#587989]" />
                        <span>Archival Ink Safe</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#26211E]">
                        <Layers size={15} className="text-[#C05A3E]" />
                        <span>Lies 180° Completely Flat</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#26211E]">
                        <Compass size={15} className="text-[#587989]" />
                        <span>Reinforced Corners</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4">
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 rounded-full bg-[#C05A3E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition duration-300 hover:bg-[#8F3720] hover:shadow-lg"
                      >
                        <ArrowRight size={14} />
                        <span>View Product</span>
                      </Link>

                      <Link
                        to="/products"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#26211E] transition hover:text-[#C05A3E]"
                      >
                        <span>View in Store</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA after scroll reveal */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-3xl border border-[#E8DDCB] bg-white p-4 sm:p-6 shadow-md">
            <div className="text-left">
              <h4 className="text-lg font-bold text-[#26211E] font-serif">
                Can't decide on a cover tone?
              </h4>
              <p className="text-xs text-[#7D6B5A]">
                Explore our full spectrum of 20+ editions across terracotta, dusty blue, natural linen beige and chalk white.
              </p>
            </div>
            <Link
              to="/products"
              className="rounded-full bg-[#587989] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#375361]"
            >
              Browse Full Catalog
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
