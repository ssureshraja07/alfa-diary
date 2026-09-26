import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, Sparkles, BookOpen, Layers, Check, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

import ProductCard from "../components/ProductCard";

import OpenedDiaryFooter from "../components/OpenedDiaryFooter";
import { products } from "../data/products";
import collectionDiariesImg from "../images/collection-diaries-hero.jpg";

export default function Products() {
  useScrollReveal();

  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef(null);

  const handleFilter = (categoryId) => {
    setFilterCategory(categoryId);
    // Scroll to the top of the products grid
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const categories = [
    { id: "all", name: "All Folios" },
    { id: "Journal", name: "Journals" },
    { id: "Premium Diary", name: "Premium Diaries" },
    { id: "Planner", name: "Planners" },
    { id: "Travel", name: "Travel & Expedition" },
    { id: "Luxury", name: "Luxury Leather" },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = filterCategory === "all" || p.category === filterCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#26211E]">

      {/* ================= 1. PHOTO BANNER BELOW NAVBAR (LIKE QUALITY PAGE) ================= */}
      <section className="relative pt-20">
        
        {/* Full-width container with border and margin for editorial aesthetic */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E8DDCB] shadow-2xl">
            
            {/* Background Image of Diverse 2027 Diaries Collection */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#26211E]">
              <img
                src={collectionDiariesImg}
                alt="Our Products 2027 Editions - Collection of Alfa Diaries in terracotta, dusty blue, beige and leather"
                className="h-full w-full object-cover object-center transition duration-1000 ease-out hover:scale-105"
              />

              {/* Gentle Gradient Overlay for text contrast without obscuring the diaries */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26211E]/85 via-[#26211E]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#26211E]/40 via-transparent to-transparent" />
            </div>

            {/* Hero Text Overlay directly on the image */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16 text-white">
              <div className="max-w-3xl space-y-4">
                
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F6F1E7]/80 transition hover:text-white"
                >
                  <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
                  <span>Return to Home</span>
                </Link>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F6F1E7] backdrop-blur-md">
                  <Calendar size={14} className="text-[#E78A70]" />
                  <span>Alfa Diaries Pvt Ltd • 2027 Editions</span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-serif leading-tight text-white">
                  Our Products — 2027 Editions
                </h1>

                <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
                  Explore our complete collection of 2027 diaries, planners, and tactile notebooks crafted to satisfy every market segment and suit everyone's pocket.
                </p>

                {/* Quick Quality Specs on the Banner */}
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">
                    20+ Designs
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">
                    120–160 GSM
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">
                    Smyth-Sewn Lay-Flat
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">
                    Sivakasi Handcrafted
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FILTER & SEARCH BAR ================= */}
      <section className="reveal-on-scroll sticky top-20 z-40 mt-8 border-y border-[#E8DDCB] bg-[#F6F1E7]/92 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => handleFilter(c.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  filterCategory === c.id
                    ? "bg-[#C05A3E] text-white shadow-sm"
                    : "border border-[#E8DDCB] bg-white text-[#7D6B5A] hover:bg-[#EDE4D3]"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D6B5A]" />
            <input
              type="text"
              placeholder="Search by name, paper or binding..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#E8DDCB] bg-white py-2 pl-9 pr-4 text-xs text-[#26211E] placeholder-[#7D6B5A]/60 outline-none transition focus:border-[#C05A3E] focus:ring-1 focus:ring-[#C05A3E]"
            />
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section ref={gridRef} className="px-6 py-14 sm:py-20 scroll-mt-28">

        <div className="mx-auto max-w-7xl">

          <div className="reveal-on-scroll mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-semibold text-[#7D6B5A]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#26211E]">Showing {filteredProducts.length} 2027 diaries in stock</span>
              <span className="h-1 w-1 rounded-full bg-[#7D6B5A]/40" />
              <span>Sivakasi Atelier Archive</span>
            </div>
            <span>Browse our complete collection</span>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card-enter transition duration-300"
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-base font-bold text-[#7D6B5A]">
                No journals matched your search.
              </p>
              <button
                onClick={() => {
                  setFilterCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-[#C05A3E] px-5 py-2 text-xs font-bold text-white"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>

      </section>

      {/* ================= OPENED DIARY FOOTER ================= */}
      <OpenedDiaryFooter />



    </main>
  );
}