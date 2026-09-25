import { X, Sparkles, Box, Check, Bookmark, Layers, ShieldCheck } from "lucide-react";
import Diary3DViewer from "./Diary3DViewer";

export default function Product3DModal({
  product,
  onClose,
}) {

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >

      {/* MODAL CONTAINER */}
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#E8DDCB] bg-[#FDFBF7] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 grid h-10 w-10 place-items-center rounded-full bg-[#26211E] text-white shadow-md transition duration-300 hover:rotate-90 hover:bg-[#C05A3E]"
          aria-label="Close"
        >
          <X size={18} />
        </button>


        <div className="grid md:grid-cols-2">

          {/* ================= 3D VIEW ================= */}
          <div className="relative bg-gradient-to-br from-[#F9EFEA] via-[#E8DDCB]/40 to-[#E6EFF2] p-4 flex flex-col justify-between">

            <div className="absolute left-6 top-6 z-10">
              <div className="flex items-center gap-1.5 rounded-full border border-[#C05A3E]/30 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C05A3E] backdrop-blur-md">
                <Box size={13} />
                <span>Real-Time 3D Folio</span>
              </div>
              <p className="mt-1.5 text-[11px] font-medium text-[#7D6B5A]">
                Drag to rotate • Pinch / Scroll to inspect
              </p>
            </div>

            <Diary3DViewer product={product} />

            <div className="text-center text-[10px] font-semibold text-[#7D6B5A]/80 pb-2">
              ✦ Rendered with realistic leather cover & cotton page block
            </div>
          </div>


          {/* ================= PRODUCT DETAILS ================= */}
          <div className="flex flex-col justify-between p-7 sm:p-10">

            <div>
              <div className="flex items-center justify-between border-b border-[#E8DDCB] pb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C05A3E]">
                  {product.category || "Artisan Folio"}
                </span>
                <span className="font-mono text-xs font-bold text-[#587989]">
                  NO. {product.number}
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold text-[#26211E] font-serif sm:text-4xl">
                {product.name}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#7D6B5A]">
                {product.description ||
                  "A meticulously hand-bound diary crafted with unbleached cotton rag paper and natural tanned cover."}
              </p>

              {/* Specs Pills */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs">
                <div className="flex items-center gap-2 rounded-xl border border-[#E8DDCB] bg-white p-2.5">
                  <Bookmark size={15} className="text-[#C05A3E]" />
                  <span className="font-medium text-[#26211E]">Satin Ribbon Marker</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E8DDCB] bg-white p-2.5">
                  <Layers size={15} className="text-[#587989]" />
                  <span className="font-medium text-[#26211E]">180° Lay-Flat Smyth</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E8DDCB] bg-white p-2.5">
                  <ShieldCheck size={15} className="text-[#C05A3E]" />
                  <span className="font-medium text-[#26211E]">120 GSM Acid-Free</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E8DDCB] bg-white p-2.5">
                  <Sparkles size={15} className="text-[#587989]" />
                  <span className="font-medium text-[#26211E]">Fountain Pen Safe</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 border-t border-[#E8DDCB] pt-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D6B5A]">
                    Folio Availability:
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>In Stock at Atelier</span>
                  </div>
                </div>

                <span className="text-2xl font-black text-[#C05A3E] font-serif">
                  {product.price || "₹1,490"}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex-1 rounded-full bg-[#C05A3E] py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-[#8F3720]"
                >
                  Inscribe Order in Diary
                </a>

                <button
                  onClick={onClose}
                  className="rounded-full border border-[#E8DDCB] bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#26211E] transition hover:bg-[#F6F1E7]"
                >
                  Close
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}