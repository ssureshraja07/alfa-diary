import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Feather, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Palette, 
  Eye, 
  Compass, 
  Calendar, 
  CheckCircle2, 
  Bookmark 
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import Product3DModal from "../components/Product3DModal";
import ScrollRevealDiaries from "../components/ScrollRevealDiaries";
import OpenedDiaryFooter from "../components/OpenedDiaryFooter";
import { products } from "../data/products";
import heroDiariesImg from "../images/diaries-2027-hero.jpg";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const homeProducts = products.slice(0, 8);

  const filteredProducts = activeCategory === "all"
    ? homeProducts
    : homeProducts.filter((p) => p.category?.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#26211E]">
      
      {/* ================= HERO SECTION (4+ 2027 DIARIES ON RIGHT BG) ================= */}
      <section className="relative min-h-[95vh] overflow-hidden pt-20 flex items-center">
        
        {/* Background Image: 4+ Diaries set on the right side of desk */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroDiariesImg}
            alt="4+ Luxury 2027 Alfa Diaries in terracotta, dusty blue, beige and white on oak desk"
            className="h-full w-full object-cover object-right md:object-center"
          />

          {/* Left-to-Right Soft Gradient: Keeps left side clean & readable for text, lets right side shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E7] via-[#F6F1E7]/90 sm:via-[#F6F1E7]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F1E7] via-transparent to-transparent" />
        </div>

        {/* Hero Content Grid: Left side text, leaving right side open to showcase diaries */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
          
          <div className="max-w-2xl space-y-6">
            
            {/* 2027 New Collection Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C05A3E]/30 bg-white/95 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#C05A3E] shadow-sm backdrop-blur-md">
              <Calendar size={14} className="text-[#C05A3E]" />
              <span>New 2027 Edition Folios • In Stock Now</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl font-serif text-[#26211E]">
              WHERE YOUR
              <br />
              STORIES FIND
              <br />
              <span className="text-[#C05A3E]">
                SANCTUARY.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-[#7D6B5A] sm:text-lg">
              Crafted for 2027 in our Sivakasi atelier. Choose from rich terracotta leather, tranquil dusty blue linen, raw beige cloth, and chalk white vellum—all hand-bound with archival lay-flat stitching.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                className="group flex items-center gap-2 rounded-full bg-[#C05A3E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#8F3720] hover:shadow-xl"
              >
                <span>Explore 2027 Folios</span>
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/gallery"
                className="flex items-center gap-2 rounded-full border border-[#7D6B5A]/30 bg-white/90 px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#26211E] shadow-sm transition hover:border-[#C05A3E] hover:text-[#C05A3E]"
              >
                <Palette size={15} className="text-[#587989]" />
                <span>View 2027 Lookbook</span>
              </Link>
            </div>

            {/* Key Quality Micro-badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-[#7D6B5A]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C05A3E]" />
                <span>120–160 GSM Cotton Rag</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#587989]" />
                <span>180° Lay-Flat Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E8DDCB] border border-black/20" />
                <span>National & International Standards</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= COLOR STORY BANNER ================= */}
      <section className="border-y border-[#E8DDCB] bg-white py-8 px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C05A3E] text-white">
              <Palette size={16} />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#26211E]">
              The Four 2027 Colorways:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-bold text-[#7D6B5A]">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-[#C05A3E] shadow-xs" />
              <span>Terracotta (Gold 2027 Stamp)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-[#587989] shadow-xs" />
              <span>Dusty Blue (Silver 2027 Plaque)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-[#E8DDCB] border border-black/20 shadow-xs" />
              <span>Beige Linen (2027 Ribbon)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-white border border-slate-300 shadow-xs" />
              <span>Pure White (2027 Embossed)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCROLL REVEAL DIARIES (LEFT & RIGHT) ================= */}
      <ScrollRevealDiaries onSelectProduct={setSelectedProduct} />

      

      {/* ================= ARTISANAL CRAFT SHOWCASE ================= */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C05A3E]">
                The Anatomy of a Forever Journal
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-[#26211E] font-serif leading-tight">
                Designed to Be Touched, Written, and Cherished.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#7D6B5A]">
                Standard notebooks crack at the spine within months. Alfa Diaries are constructed with Smyth-sewn signatures, allowing each page to open flat without stress on the paper fibres.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-[#E8DDCB] bg-[#F6F1E7]/50 p-4">
                  <span className="font-mono text-xs font-bold text-[#C05A3E]">01 / SPINE</span>
                  <h4 className="mt-1 font-bold text-sm text-[#26211E]">Smyth-Sewn Signatures</h4>
                  <p className="mt-1 text-xs text-[#7D6B5A]">Woven with pure waxed linen thread.</p>
                </div>
                <div className="rounded-2xl border border-[#E8DDCB] bg-[#F6F1E7]/50 p-4">
                  <span className="font-mono text-xs font-bold text-[#587989]">02 / PAPER</span>
                  <h4 className="mt-1 font-bold text-sm text-[#26211E]">120 GSM Cotton Vellum</h4>
                  <p className="mt-1 text-xs text-[#7D6B5A]">Feather-resistant to fountain pen inks.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/aboutus"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C05A3E] transition hover:text-[#8F3720]"
                >
                  <span>Learn more about our Sivakasi workshop</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[2.5rem] border border-[#E8DDCB] bg-gradient-to-br from-[#F9EFEA] via-[#E8DDCB] to-[#E6EFF2] p-8 sm:p-12 shadow-inner">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-[#C05A3E]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#26211E]">
                      The Bookbinder's Promise
                    </span>
                  </div>

                  <p className="font-serif italic text-xl sm:text-2xl text-[#26211E] leading-relaxed">
                    "A blank page is not merely paper; it is an open horizon waiting for the rhythm of your honest thoughts."
                  </p>

                  <div className="border-t border-[#7D6B5A]/20 pt-4 flex items-center justify-between text-xs text-[#7D6B5A]">
                    <span className="font-semibold">— Alfa Diaries Pvt Ltd</span>
                    <span className="font-mono font-bold text-[#587989]">Sivakasi, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= OPENED DIARY FOOTER ================= */}
      <OpenedDiaryFooter />

      {/* ================= 3D PREVIEW MODAL ================= */}
      <Product3DModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </main>
  );
}