import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

import ProductCard from "../components/ProductCard";
import OpenedDiaryFooter from "../components/OpenedDiaryFooter";
import { products } from "../data/products";
import collectionDiariesImg from "../images/collection-diaries-hero.jpg";

// Category preview images (opened model book)
import imgDiamond from "../images/Diamond.png";
import imgB5 from "../images/B5.png";
import imgA5 from "../images/A5.png";
import imgMage from "../images/Mage.png";
import imgEle from "../images/Ele.png";
import imgUni from "../images/Uni.png";
import imgExcu from "../images/Excu.png";

export default function Products() {
  useScrollReveal();

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [filterCategory, setFilterCategory] = useState(categoryParam || "all");
  const gridRef = useRef(null);
  const previewRef = useRef(null);

  // Sync state if URL query param changes
  useEffect(() => {
    if (categoryParam) {
      setFilterCategory(categoryParam);
    } else {
      setFilterCategory("all");
    }
  }, [categoryParam]);

  // After filterCategory changes, scroll to the products grid first
  // The opened image is shown BELOW the grid as a reference
  useEffect(() => {
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [filterCategory]);

  const handleFilter = (categoryId) => {
    setFilterCategory(categoryId);
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const categories = [
    { id: "all", name: "All", image: null },
    { id: "Executive Diary", name: "Executive Diary", image: imgExcu },
    { id: "Universe Diary", name: "Universe Diary", image: imgUni },
    { id: "Elegant Diary", name: "Elegant Diary", image: imgEle },
    { id: "Diamond Diary", name: "Diamond Diary", image: imgDiamond },
    { id: "Majestic Diary", name: "Majestic Diary", image: imgMage },
    { id: "A5 Journal", name: "A5 Journal", image: imgA5 },
    { id: "B5 Journal", name: "B5 Journal", image: imgB5 },
  ];

  const activeCategory = categories.find((c) => c.id === filterCategory);

  const filteredProducts = products.filter((p) => {
    return filterCategory === "all" || p.category === filterCategory;
  });

  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#26211E]">

      {/* ================= PHOTO BANNER ================= */}
      <section className="relative pt-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E8DDCB] shadow-2xl">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#26211E]">
              <img
                src={collectionDiariesImg}
                alt="Our Products 2027 Editions - Collection of Alfa Diaries"
                className="h-full w-full object-cover object-center transition duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26211E]/85 via-[#26211E]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#26211E]/40 via-transparent to-transparent" />
            </div>

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

                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">20+ Designs</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">120–160 GSM</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">Smyth-Sewn Lay-Flat</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur-md">Sivakasi Handcrafted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FILTER BAR — TEXT PILL BUTTONS ================= */}
      <section className="sticky top-20 z-40 mt-8 border-y border-[#E8DDCB] bg-[#F6F1E7]/95 px-4 py-4 backdrop-blur-md" id="filter-bar">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => handleFilter(c.id)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs font-bold tracking-wide transition-all duration-200 ${
                  filterCategory === c.id
                    ? "bg-[#C05A3E] text-white shadow-md scale-105 shadow-[#C05A3E]/25"
                    : "border border-[#E8DDCB] bg-white text-[#7D6B5A] hover:border-[#C05A3E]/50 hover:text-[#C05A3E] hover:bg-[#FDF5EC]"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>



      {/* ================= PRODUCTS GRID ================= */}
      <section ref={gridRef} className="px-6 py-12 sm:py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-semibold text-[#7D6B5A]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#26211E]">
                Showing {filteredProducts.length} {filterCategory === "all" ? "" : `${activeCategory?.name} `}diaries in stock
              </span>
              <span className="h-1 w-1 rounded-full bg-[#7D6B5A]/40" />
              <span>Sivakasi Atelier Archive</span>
            </div>
            <span>Browse our complete collection</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 lg:gap-10">
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
              <p className="text-base font-bold text-[#7D6B5A]">No diaries found in this collection.</p>
              <button
                onClick={() => handleFilter("all")}
                className="mt-4 rounded-full bg-[#C05A3E] px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#8F3720]"
              >
                Show All Folios
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ================= OPENED REFERENCE IMAGE (after grid, when category selected) ================= */}
      {filterCategory !== "all" && activeCategory?.image && (
        <section
          className="px-4 sm:px-6 lg:px-8 pb-10 pt-4"
          style={{ animation: "fadeSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="mx-auto max-w-5xl flex items-center justify-center">
            <img
              key={`ref-${activeCategory.id}`}
              src={activeCategory.image}
              alt={`${activeCategory.name} opened diary reference`}
              className="w-full object-contain"
              style={{
                maxHeight: "620px",
                imageRendering: "high-quality",
                animation: "zoomFadeIn 0.55s cubic-bezier(0.22,1,0.36,1) both",
              }}
              draggable={false}
            />
          </div>
        </section>
      )}

      {/* ================= OPENED DIARY FOOTER ================= */}
      <OpenedDiaryFooter />

      {/* ================= KEYFRAME ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomFadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </main>
  );
}