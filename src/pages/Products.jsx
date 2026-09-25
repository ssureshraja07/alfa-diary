import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import ProductCard from "../components/ProductCard";
import Product3DModal from "../components/Product3DModal";
import { products } from "../data/products";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="min-h-screen bg-[#d99078] text-[#292421]">

      {/* ================= HEADER ================= */}

      <section className="relative overflow-hidden bg-[#292421] px-6 pb-24 pt-36 text-[#f5f0e6]">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d99078]/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-[#b65f48]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#f5f0e6]/70 transition hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition group-hover:-translate-x-1"
            />
            Back home
          </Link>

          <div className="mt-16 max-w-4xl">

            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d99078]">
              The complete collection
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              FIND YOUR
              <br />
              <span className="text-[#d99078]">
                NEXT CHAPTER.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#f5f0e6]/65 sm:text-lg">
              From everyday journals to premium executive diaries,
              find a notebook that feels like it was made for your story.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#8f4635]">
                Explore
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Every page starts somewhere.
              </h2>

            </div>

            <div className="text-sm font-medium text-[#624d44]">
              Showing all {products.length} products
            </div>

          </div>


         {/* ================= PRODUCT GRID ================= */}

<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

  {products.map((product, index) => (
    <div
      key={product.id}
      className="animate-[fadeIn_0.7s_ease-out_both]"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >

      {/* CLICK PRODUCT → 3D MODAL */}

      <div
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
  }}
  className="group cursor-pointer transition duration-500 hover:-translate-y-2"
>
  <ProductCard product={product} />
</div>
    </div>
  ))}

</div>


          {/* EXPLORE MORE */}

          <div className="mt-16 text-center">

            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-full bg-[#292421] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#f5f0e6] transition duration-300 hover:-translate-y-1 hover:bg-[#8f4635]"
            >
              Back to home

              <span className="text-lg transition group-hover:translate-x-2">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="bg-[#f5f0e6] px-6 py-28">

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#292421] px-8 py-16 text-center text-white sm:px-16 sm:py-20">

            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d99078]/20 blur-3xl" />

            <div className="relative">

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d99078]">
                Still looking?
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Your story needs
                <br />
                the right pages.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60">
                Take your time. Browse the collection and find
                the diary that feels right for your next chapter.
              </p>

              <Link
                to="/"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#f5f0e6] px-7 py-4 font-bold text-[#292421] transition duration-300 hover:-translate-y-1 hover:bg-[#d99078]"
              >
                Back to home

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= 3D MODAL ================= */}

      <Product3DModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </main>
  );
}   