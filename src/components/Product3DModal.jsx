import { X } from "lucide-react";
import Diary3DViewer from "./Diary3DViewer";

export default function Product3DModal({
  product,
  onClose,
}) {

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
      onClick={onClose}
    >

      {/* MODAL */}
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[#f5f0e6] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#292421] text-white transition duration-300 hover:rotate-90 hover:bg-[#8f4635]"
          aria-label="Close"
        >
          <X size={20} />
        </button>


        <div className="grid md:grid-cols-2">

          {/* ================= 3D VIEW ================= */}

          <div className="relative bg-[#d99078]/20">

            <div className="absolute left-6 top-6 z-10">

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8f4635]">
                3D Preview
              </p>

              <p className="mt-1 text-xs text-[#624d44]">
                Drag to rotate • Scroll to zoom
              </p>

            </div>


            <Diary3DViewer product={product} />

          </div>


          {/* ================= PRODUCT INFO ================= */}

          <div className="flex flex-col justify-center px-7 py-12 sm:px-12">

            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#8f4635]">
              Product Preview
            </p>


            <h2 className="mt-4 text-4xl font-black leading-tight text-[#292421] sm:text-5xl">
              {product.name}
            </h2>


            <p className="mt-5 text-base leading-7 text-[#624d44]">
              {product.description ||
                "A beautifully crafted diary designed for your ideas, memories and everyday stories."}
            </p>


            {/* Price */}

            <div className="mt-8 flex items-center gap-4">

              <span className="text-3xl font-black text-[#8f4635]">
                {product.price}
              </span>

              <span className="rounded-full bg-[#d99078]/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#8f4635]">
                Premium
              </span>

            </div>


            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={onClose}
                className="rounded-full bg-[#292421] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#8f4635]"
              >
                Continue exploring
              </button>

              <button
                onClick={onClose}
                className="rounded-full border border-[#292421]/20 px-7 py-4 text-sm font-bold text-[#292421] transition duration-300 hover:border-[#292421]"
              >
                Close
              </button>

            </div>


            {/* Small hint */}

            <div className="mt-12 border-t border-[#292421]/10 pt-6">

              <p className="text-xs font-medium leading-6 text-[#624d44]/70">
                ✦ Move your mouse or finger around the diary to explore
                the design from different angles.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}