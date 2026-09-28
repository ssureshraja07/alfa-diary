import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  // Determine accent color based on number/id
  const isTerracotta = parseInt(product.number, 10) % 2 === 1;
  const accentColor = isTerracotta ? "#C05A3E" : "#587989";
  const bgTint = isTerracotta ? "bg-[#F9EFEA]" : "bg-[#E6EFF2]";

  return (
    <article className="group relative overflow-hidden rounded-[2.25rem] border border-[#E8DDCB] bg-white p-5 sm:p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* ================= PRODUCT IMAGE CONTAINER ================= */}
      <div className={`relative w-full aspect-[4/5] overflow-hidden rounded-[1.75rem] ${bgTint} p-4 sm:p-6 flex items-center justify-center`}>
        
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full max-h-[360px] sm:max-h-[400px] object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.18)] transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Category Pill */}
        <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#7D6B5A] shadow-sm backdrop-blur-md">
          {product.category}
        </div>

        {/* Hover Action Icon */}
        <div 
          className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full text-white opacity-0 shadow-xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ backgroundColor: accentColor }}
        >
          <ArrowUpRight size={20} />
        </div>

      </div>

      {/* ================= PRODUCT INFO ================= */}
      <div className="px-2 pb-2 pt-6">
        
        <div className="flex items-start justify-between gap-3">
          <div>
            <p 
              className="text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: accentColor }}
            >
              Hand-Bound Folio
            </p>

            <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-[#26211E] font-serif leading-snug">
              {product.name}
            </h3>
          </div>

          {product.price && (
            <span 
              className="pt-1 text-base sm:text-lg font-extrabold"
              style={{ color: accentColor }}
            >
              {product.price}
            </span>
          )}
        </div>

        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#7D6B5A] line-clamp-2">
          {product.description}
        </p>

        {/* Bottom Hover Line */}
        <div 
          className="mt-5 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: accentColor }}
        />

      </div>

    </article>
  );
}