import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Grid, 
  Columns, 
  Eye, 
  Box, 
  BookOpen, 
  ArrowLeft, 
  Tag, 
  Layers, 
  Palette 
} from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import { products } from "../data/products";
import Product3DModal from "../components/Product3DModal";
import OpenedDiaryFooter from "../components/OpenedDiaryFooter";

export default function Gallery() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("all");
  const [layoutMode, setLayoutMode] = useState("grid"); // 'grid' | 'masonry'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Categorize products for aesthetic filtering
  const galleryItems = products.map((item, idx) => {
    let colorTag = "terracotta";
    let colorHex = "#C05A3E";
    let colorName = "Earthen Terracotta";

    if (idx % 4 === 1) {
      colorTag = "dusty-blue";
      colorHex = "#587989";
      colorName = "Dusty Blue Bookcloth";
    } else if (idx % 4 === 2) {
      colorTag = "beige";
      colorHex = "#E8DDCB";
      colorName = "Natural Beige Linen";
    } else if (idx % 4 === 3) {
      colorTag = "white";
      colorHex = "#FFFFFF";
      colorName = "Chalk White Vellum";
    }

    return {
      ...item,
      colorTag,
      colorHex,
      colorName,
      gsm: idx % 2 === 0 ? "120 GSM" : "160 GSM Heavyweight",
      pages: 192 + (idx * 16),
      binding: "Smyth-Sewn Hand Binding",
      dimensions: "5.5 × 8.25 inches (A5)",
    };
  });

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.colorTag === activeFilter;
  });

  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#26211E]">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#375361] via-[#587989] to-[#8F3720] px-6 pt-36 pb-24 text-white">
        
        {/* Glow circles matching terracotta and beige */}
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-[#C05A3E]/30 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-0 h-96 w-96 rounded-full bg-[#E8DDCB]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F6F1E7]/80 transition hover:text-white"
          >
            <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
            <span>Return to Sanctuary</span>
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#F6F1E7] backdrop-blur-md">
              <Palette size={14} className="text-[#E78A70]" />
              <span>The Visual Lookbook & Folios</span>
            </div>

            <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl font-serif">
              A Palette of Terracotta, Blue & Cream.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/85">
              Explore our complete gallery of tactile diaries. Each volume photographed in its true material finish—from raw burnt sienna hides to calming dusty blue linens and archival beige papers.
            </p>
          </div>

          {/* Color Palette Indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3.5 py-2 text-xs font-semibold backdrop-blur-md">
              <span className="h-3 w-3 rounded-full bg-[#C05A3E] border border-white" />
              <span>Terracotta</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3.5 py-2 text-xs font-semibold backdrop-blur-md">
              <span className="h-3 w-3 rounded-full bg-[#E8DDCB] border border-white" />
              <span>Beige Linen</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3.5 py-2 text-xs font-semibold backdrop-blur-md">
              <span className="h-3 w-3 rounded-full bg-[#587989] border border-white" />
              <span>Dusty Blue</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3.5 py-2 text-xs font-semibold backdrop-blur-md">
              <span className="h-3 w-3 rounded-full bg-[#FFFFFF] border border-slate-300" />
              <span>White Paper</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTROLS & FILTER BAR ================= */}
      <section className="reveal-on-scroll sticky top-20 z-40 border-y border-[#E8DDCB] bg-[#F6F1E7]/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Editions" },
              { id: "terracotta", label: "Terracotta Earth" },
              { id: "dusty-blue", label: "Dusty Blue" },
              { id: "beige", label: "Beige Linen" },
              { id: "white", label: "White Archival" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-[#C05A3E] text-white shadow-sm"
                    : "border border-[#E8DDCB] bg-white text-[#7D6B5A] hover:bg-[#EDE4D3]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Layout Mode & Counter */}
          <div className="flex items-center justify-between sm:justify-end gap-4 text-xs font-semibold text-[#7D6B5A]">
            <span>Showing {filteredItems.length} diaries</span>
            <div className="flex items-center rounded-xl border border-[#E8DDCB] bg-white p-1">
              <button
                onClick={() => setLayoutMode("grid")}
                title="Grid layout"
                className={`rounded-lg p-1.5 transition ${
                  layoutMode === "grid"
                    ? "bg-[#C05A3E] text-white"
                    : "text-[#7D6B5A] hover:bg-[#F6F1E7]"
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setLayoutMode("masonry")}
                title="Masonry layout"
                className={`rounded-lg p-1.5 transition ${
                  layoutMode === "masonry"
                    ? "bg-[#C05A3E] text-white"
                    : "text-[#7D6B5A] hover:bg-[#F6F1E7]"
                }`}
              >
                <Columns size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= GALLERY DISPLAY ================= */}
      <section className="reveal-on-scroll reveal-delay-1 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          
          <div
            className={
              layoutMode === "grid"
                ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "columns-1 gap-8 sm:columns-2 lg:columns-3"
            }
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative mb-8 overflow-hidden rounded-[2rem] border border-[#E8DDCB] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Diary Visual Preview Area */}
                <div 
                  className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] p-6 flex items-center justify-center transition-colors duration-500"
                  style={{
                    backgroundColor: 
                      item.colorTag === "terracotta" ? "#F9EFEA" :
                      item.colorTag === "dusty-blue" ? "#E6EFF2" :
                      item.colorTag === "beige" ? "#F6F1E7" : "#FFFFFF"
                  }}
                >
                  {/* Category Chip */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-[10px] font-bold text-[#26211E] backdrop-blur-sm">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: item.colorHex }}
                    />
                    <span>{item.category}</span>
                  </div>

                  {/* Serial Number */}
                  <span className="absolute right-4 top-4 font-mono text-xs font-black text-[#7D6B5A]/60">
                    {item.number}
                  </span>

                  {/* Diary Image with realistic tilt */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                  />

                  {/* Hover Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#26211E] shadow-lg transition hover:bg-[#C05A3E] hover:text-white"
                    >
                      <Box size={14} />
                      <span>3D View</span>
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#26211E] font-serif">
                      {item.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-[#C05A3E]">
                      {item.gsm}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-[#7D6B5A] line-clamp-2">
                    {item.description}
                  </p>

                  {/* Specifications tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 text-[10px] font-semibold text-[#587989]">
                    <span className="rounded-md bg-[#F6F1E7] px-2 py-0.5">
                      {item.dimensions}
                    </span>
                    <span className="rounded-md bg-[#F6F1E7] px-2 py-0.5">
                      {item.pages} Pages
                    </span>
                    <span className="rounded-md bg-[#F6F1E7] px-2 py-0.5">
                      {item.colorName}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#E8DDCB] pt-4">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#C05A3E] transition hover:text-[#8F3720]"
                    >
                      <Eye size={14} />
                      <span>Examine 3D Model</span>
                    </button>

                    <Link
                      to="/products"
                      className="rounded-full bg-[#26211E] px-4 py-1.5 text-xs font-bold text-[#F6F1E7] transition hover:bg-[#C05A3E]"
                    >
                      Acquire
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ATELIER WORKSHOP SHOWCASE ================= */}
      <section className="border-t border-[#E8DDCB] bg-[#EDE4D3]/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C05A3E]">
                The Tactile Anthology
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#26211E] font-serif">
                Crafted by Hand, Tested with Every Pen.
              </h2>
              <p className="text-sm leading-relaxed text-[#7D6B5A]">
                Every photograph in our gallery represents hours of bookbinding discipline. We test our pages with dry ballpoints, wet fountain pen stubs, calligraphy dips, and water-soluble gouache paints. Zero bleeding, zero feathering.
              </p>
              <div className="pt-2">
                <Link
                  to="/aboutus"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C05A3E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#8F3720]"
                >
                  <BookOpen size={14} />
                  <span>Read the Artisan's Story</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-[#E8DDCB] bg-white p-6 shadow-sm space-y-2">
                <span className="text-2xl font-serif font-black text-[#C05A3E]">01. Soil & Skin</span>
                <h4 className="text-sm font-bold text-[#26211E]">Terracotta Vegetable Patina</h4>
                <p className="text-xs text-[#7D6B5A]">
                  Tanned with mimosa bark and chestnut leaves. Develops a warm golden sheen as your hands touch it.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E8DDCB] bg-white p-6 shadow-sm space-y-2">
                <span className="text-2xl font-serif font-black text-[#587989]">02. Coastal Hue</span>
                <h4 className="text-sm font-bold text-[#26211E]">Dusty Blue Bookcloth</h4>
                <p className="text-xs text-[#7D6B5A]">
                  Dyed in small batches reminiscent of the sea breeze along the Gulf of Mannar.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E8DDCB] bg-white p-6 shadow-sm space-y-2">
                <span className="text-2xl font-serif font-black text-[#7D6B5A]">03. Raw Fiber</span>
                <h4 className="text-sm font-bold text-[#26211E]">Unbleached Beige Linen</h4>
                <p className="text-xs text-[#7D6B5A]">
                  Woven from European flax fibers, giving every cover an authentic, coarse botanical grain.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E8DDCB] bg-white p-6 shadow-sm space-y-2">
                <span className="text-2xl font-serif font-black text-[#26211E]">04. Pure Vellum</span>
                <h4 className="text-sm font-bold text-[#26211E]">Crisp 120gsm White Sheets</h4>
                <p className="text-xs text-[#7D6B5A]">
                  Cotton rag paper with a micro-toothed surface designed to catch every nuance of your nib.
                </p>
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
