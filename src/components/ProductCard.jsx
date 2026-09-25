import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[#5f3b2f]/10 bg-[#f7ead9] p-4 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

      {/* ================= PRODUCT IMAGE ================= */}

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#dfb79f]">

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Number */}
        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-black tracking-[0.2em] text-white backdrop-blur-md">
          {product.number}
        </div>

        {/* 3D View Button */}
        <div className="absolute bottom-5 right-5 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-white text-slate-950 opacity-0 shadow-xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={20} />
        </div>

      </div>


      {/* ================= PRODUCT INFO ================= */}

      <div className="px-2 pb-2 pt-6">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#b65f48]">
              {product.category}
            </p>

            <h3 className="mt-2 text-xl font-black text-[#292421]">
              {product.name}
            </h3>

          </div>

          {product.price && (
            <span className="pt-1 text-sm font-black text-[#b65f48]">
              {product.price}
            </span>
          )}

        </div>


        <p className="mt-3 text-sm leading-6 text-[#6f6259]">
          {product.description}
        </p>


        {/* Bottom hover line */}
        <div className="mt-5 h-px w-0 bg-[#b65f48] transition-all duration-500 group-hover:w-full" />

      </div>

    </article>
  );
}