import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Compass, 
  Bookmark, 
  ShieldCheck, 
  Layers,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { products } from "../data/products";

export default function ScrollRevealDiaries() {
  const containerRef = useRef(null);

  // Exactly 6 representative books for the 6 core diary editions
  const showcaseItems = [
    {
      ...products[18], // Executive Diary (1st book)
      categoryTitle: "Executive Diary",
      chapter: "Chapter 01",
      tagline: "The Premium Executive Collection (5 Models)",
      accentBg: "from-[#C05A3E]/15 to-[#F6F1E7]",
      coverColor: "#C05A3E",
      direction: "left",
      itemCount: 5,
    },
    {
      ...products[17], // Universe Diary (2nd book)
      categoryTitle: "Universe Diary",
      chapter: "Chapter 02",
      tagline: "The Celestial Cosmic Collection (4 Models)",
      accentBg: "from-[#587989]/15 to-[#F6F1E7]",
      coverColor: "#587989",
      direction: "right",
      itemCount: 4,
    },
    {
      ...products[11], // Elegant Diary (3rd book)
      categoryTitle: "Elegant Diary",
      chapter: "Chapter 03",
      tagline: "The Refined Pastel & Ivory Collection (2 Models)",
      accentBg: "from-[#E8DDCB]/40 to-[#F6F1E7]",
      coverColor: "#B59475",
      direction: "left",
      itemCount: 2,
    },
    {
      ...products[9], // Majestic Diary (5th book)
      categoryTitle: "Majestic Diary",
      chapter: "Chapter 05",
      tagline: "The Royal Crest & Velvet Touch Collection (2 Models)",
      accentBg: "from-[#800020]/15 to-[#F6F1E7]",
      coverColor: "#800020",
      direction: "left",
      itemCount: 2,
    },
    {
      ...products[1], // Diamond Diary (6th book)
      categoryTitle: "Diamond Diary",
      chapter: "Chapter 06",
      tagline: "The Geometric Silver Laser Foil Collection (2 Models)",
      accentBg: "from-[#708090]/15 to-[#F6F1E7]",
      coverColor: "#4A5568",
      direction: "right",
      itemCount: 2,
    },
  ];

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
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F1E7] via-[#EDE4D3]/50 to-[#F6F1E7] py-24 sm:py-32">
      
      {/* Decorative background geometry */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C05A3E]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-2/3 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#587989]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C05A3E]/20 bg-[#F9EFEA] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C05A3E]">
            <Calendar size={13} />
            <span>2027 Editions • Curated 6 Lines</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#26211E] sm:text-5xl lg:text-6xl font-serif">
            Chapters Revealed as You Scroll
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#7D6B5A]">
             Click any edition below to open our full catalogue and browse that complete collection.
          </p>
        </div>

        {/* ================= SCROLL REVEAL 6 BOOKS ================= */}
        <div ref={containerRef} className="relative mt-16 sm:mt-24 space-y-24 sm:space-y-32">
          
          {/* Central spine guideline running down the viewport */}
          <div className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden -translate-x-1/2 border-l-2 border-dashed border-[#C05A3E]/20 lg:block" />

          {showcaseItems.map((item, index) => {
            const isLeft = item.direction === "left";
            const targetUrl = `/products?category=${encodeURIComponent(item.categoryTitle)}`;

            return (
              <div
                key={item.id}
                className={`scroll-reveal-card relative grid items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
                  isLeft ? "reveal-init-left" : "reveal-init-right"
                }`}
              >
                {/* Central Chapter Knot (Desktop only) */}
                <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C05A3E] bg-[#F6F1E7] text-xs font-black text-[#C05A3E] shadow-md">
                  0{index + 1}
                </div>

                {/* ================= DIARY IMAGE DISPLAY CARD ================= */}
                <div
                  className={`lg:col-span-6 flex ${
                    isLeft ? "lg:order-1 justify-center lg:justify-end" : "lg:order-2 justify-center lg:justify-start"
                  }`}
                >
                  <Link
                    to={targetUrl}
                    className="group relative block w-full max-w-[420px] sm:max-w-[450px] overflow-hidden rounded-[2.5rem] border border-[#E8DDCB] bg-white p-5 sm:p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Background tint gradient (Portrait Rectangle: X low, Y high) */}
                    <div className={`relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br ${item.accentBg} p-5 sm:p-6 flex items-center justify-center`}>
                      
                      {/* Realistic book shadow overlay */}
                      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/10" />

                      {/* Category Tag Badge */}
                      <div className="absolute left-4 top-4 sm:left-5 sm:top-5 z-10 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#26211E] backdrop-blur-md shadow-sm">
                        <span 
                          className="h-2.5 w-2.5 rounded-full border border-black/20" 
                          style={{ backgroundColor: item.coverColor }}
                        />
                        <span>{item.categoryTitle}</span>
                      </div>

                      {/* Count Badge on Right */}
                      <div className="absolute right-4 top-4 sm:right-5 sm:top-5 z-10 rounded-full bg-black/10 px-3 py-1 text-[11px] font-bold text-[#26211E] backdrop-blur-sm">
                        {item.itemCount} Designs
                      </div>

                      {/* Product Image with hover 3D tilt */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`h-[92%] w-[92%] sm:h-[95%] sm:w-[95%] max-h-[440px] sm:max-h-[480px] object-contain drop-shadow-[0_24px_35px_rgba(0,0,0,0.28)] transition duration-700 ease-out group-hover:scale-110 ${
                          isLeft ? "group-hover:rotate-1" : "group-hover:-rotate-1"
                        }`}
                      />

                      {/* View Details Button linking to filtered collections */}
                      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 flex items-center gap-2 rounded-full bg-[#26211E] px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold text-white shadow-xl transition-all duration-300 group-hover:bg-[#C05A3E] group-hover:scale-105">
                        <span>View {item.categoryTitle}</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Bottom Card Bar */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#E8DDCB] pt-3 text-xs">
                      <span className="font-semibold text-[#7D6B5A]">Click to view all {item.itemCount} models</span>
                      <span className="font-bold text-[#C05A3E] inline-flex items-center gap-1 group-hover:underline">
                        <span>Explore Series</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>

                  </Link>
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
                        {item.itemCount} Editions Available
                      </span>
                    </div>

                    {/* Clickable Heading linking to filtered category */}
                    <Link to={targetUrl} className="group/head block">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#26211E] font-serif transition group-hover/head:text-[#C05A3E]">
                        {item.categoryTitle}
                      </h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#C05A3E]">
                        Featured: {item.name}
                      </p>
                    </Link>

                    {/* 4 Technical Specifications (Cover, Deboss, Paper GSM, Inner) */}
                    {item.specs && (
                      <div className="grid grid-cols-2 gap-2 pt-1 max-w-md">
                        {item.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 rounded-xl border border-[#E8DDCB] bg-white/80 p-2.5 text-xs font-semibold text-[#26211E] shadow-sm backdrop-blur-sm"
                          >
                            <CheckCircle2 size={14} className="text-[#C05A3E] shrink-0" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features Checklist */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
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

                    {/* Filter Redirect CTA Button */}
                    <div className="pt-3">
                      <Link
                        to={targetUrl}
                        className="group inline-flex items-center gap-2 rounded-full bg-[#C05A3E] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition duration-300 hover:bg-[#8F3720] hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <span>View All {item.itemCount} {item.categoryTitle}s</span>
                        <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

       

      </div>
    </section>
  );
}
