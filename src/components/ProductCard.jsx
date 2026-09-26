import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  // Determine accent color based on number/id
  const isTerracotta = parseInt(product.number, 10) % 2 === 1;
  const accentColor = isTerracotta ? "#C05A3E" : "#587989";
  const bgTint = isTerracotta ? "bg-[#F9EFEA]" : "bg-[#E6EFF2]";

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[#E8DDCB] bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      
      {/* ================= PRODUCT IMAGE CONTAINER ================= */}
      <div className={`relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ${bgTint} p-4 flex items-center justify-center`}>
        
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,0.15)] transition duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
        />

        {/* Number Badge */}
        <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-mono font-bold tracking-widest text-[#26211E] backdrop-blur-md">
          {product.number}
        </div>

        {/* Category Pill */}
        <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#7D6B5A] backdrop-blur-md">
          {product.category}
        </div>

        {/* Hover Action Icon */}
        <div 
          className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full text-white opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ backgroundColor: accentColor }}
        >
          <ArrowUpRight size={18} />
        </div>

      </div>

      {/* ================= PRODUCT INFO ================= */}
      <div className="px-2 pb-2 pt-5">
        
        <div className="flex items-start justify-between gap-3">
          <div>
            <p 
              className="text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: accentColor }}
            >
              Hand-Bound Folio
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#26211E] font-serif">
              {product.name}
            </h3>
          </div>

          {product.price && (
            <span 
              className="pt-1 text-sm font-extrabold"
              style={{ color: accentColor }}
            >
              {product.price}
            </span>
          )}
        </div>

        <p className="mt-2 text-xs leading-relaxed text-[#7D6B5A] line-clamp-2">
          {product.description}
        </p>

        {/* Bottom Hover Line */}
        <div 
          className="mt-4 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: accentColor }}
        />

      </div>

    </article>
  );
}