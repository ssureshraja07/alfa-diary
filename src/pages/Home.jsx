import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Product3DModal from "../components/Product3DModal";
import { products } from "../data/products";

function Diary() {
  const diary = useRef();

  useFrame((state) => {
    if (!diary.current) return;

    diary.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.12;

    diary.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.04;
  });

  return (
    <group ref={diary} rotation={[0.15, -0.25, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.8, 0.35, 5]} />
        <meshStandardMaterial color="#8f4635" roughness={0.45} />
      </mesh>

      <mesh
        position={[0, 0.22, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[3.55, 0.18, 4.75]} />
        <meshStandardMaterial color="#f5f0df" roughness={0.9} />
      </mesh>

      <mesh position={[0, 0.33, 0]}>
        <boxGeometry args={[0.04, 0.025, 4.5]} />
        <meshStandardMaterial color="#c8bfa9" />
      </mesh>

      <mesh position={[1.2, 0.42, 0]}>
        <boxGeometry args={[0.12, 0.04, 2.4]} />
        <meshStandardMaterial color="#d99078" />
      </mesh>
    </group>
  );
}

function Pen() {
  return (
    <group
      rotation={[0.15, 0.2, -0.65]}
      position={[3.2, 0.5, 1]}
    >
      <mesh castShadow>
        <cylinderGeometry args={[0.08, 0.08, 4.2, 24]} />
        <meshStandardMaterial
          color="#292421"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 2.15, 0]}>
        <coneGeometry args={[0.08, 0.35, 24]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function Desk() {
  return (
    <mesh receiveShadow position={[0, -0.8, 0]}>
      <boxGeometry args={[14, 0.35, 10]} />
      <meshStandardMaterial color="#21180f" roughness={0.65} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={3}
        castShadow
      />

      <pointLight
        position={[-4, 3, 2]}
        intensity={2}
        color="#d99078"
      />

      <Environment preset="city" />

      <Float
        speed={1.2}
        rotationIntensity={0.25}
        floatIntensity={0.4}
      >
        <Diary />
      </Float>

      <Float
        speed={1.5}
        rotationIntensity={0.4}
        floatIntensity={0.5}
      >
        <Pen />
      </Float>

      <Desk />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

export default function Home() {
  const homeProducts = products.slice(0, 10);

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#d99078] text-[#292421]">

      {/* ================= HERO ================= */}

      <section className="relative h-screen overflow-hidden bg-[#292421] text-white">

        <div className="absolute inset-0">
          <Canvas
            shadows
            camera={{
              position: [0, 5, 10],
              fov: 45,
            }}
          >
            <Scene />
          </Canvas>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#292421]/30 via-transparent to-[#292421]" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto w-full max-w-7xl px-6">

            <div className="max-w-2xl">

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#d99078]">
                A new way to write
              </p>

              <h1 className="text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                WRITE
                <br />
                YOUR
                <br />
                <span className="text-[#d99078]">
                  STORY.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-7 text-[#f5f0e6]/70 sm:text-lg">
                Premium diaries and stationery designed for ideas,
                memories, plans and everything in between.
              </p>

              <Link
                to="/products"
                className="mt-8 inline-flex rounded-full bg-[#f5f0e6] px-7 py-4 font-bold text-[#292421] transition duration-300 hover:-translate-y-1 hover:bg-[#d99078]"
              >
                Explore Collection
              </Link>

            </div>

          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">

          <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
            Scroll to explore
          </div>

          <div className="mx-auto mt-3 h-12 w-px animate-pulse bg-[#d99078]" />

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section
        id="collection"
        className="bg-[#d99078] py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          {/* TOP */}

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#8f4635]">
                The collection
              </p>

              <h2 className="mt-4 text-5xl font-black tracking-tight text-[#292421]">
                Made to be written in.
              </h2>

              <p className="mt-4 max-w-xl text-[#624d44]">
                Explore our carefully selected collection of diaries,
                journals and notebooks.
              </p>

            </div>

            {/* Explore more */}

            <Link
              to="/products"
              className="group inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#292421]/20 px-6 py-3 text-sm font-bold text-[#292421] transition duration-300 hover:-translate-y-1 hover:border-[#292421] hover:bg-[#292421] hover:text-[#f5f0e6]"
            >
              Explore more
              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>


          {/* 10 PRODUCTS */}

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {homeProducts.map((product, index) => (

              <div
                key={product.id}
                className="animate-[fadeIn_0.7s_ease-out_both]"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >

                {/* CLICK → 3D MODAL */}

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="group block w-full text-left transition duration-500 hover:-translate-y-3"
                >

                  <div className="overflow-hidden rounded-[2rem] bg-[#f5f0e6] p-4 shadow-sm transition duration-500 hover:shadow-2xl">

                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#ead9ca]">

                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-[#ead9ca]">

                          <div className="relative h-56 w-40 rotate-[-8deg] rounded-lg bg-[#292421] shadow-2xl transition duration-700 group-hover:rotate-0 group-hover:scale-105">

                            <div className="absolute inset-4 rounded border border-[#d99078]/30" />

                          </div>

                        </div>
                      )}

                    </div>


                    {/* DETAILS */}

                    <div className="flex items-center justify-between px-2 pb-2 pt-5">

                      <div>

                        <h3 className="font-black text-[#292421]">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#624d44]">
                          Premium notebook
                        </p>

                      </div>

                      {product.price && (
                        <span className="font-black text-[#8f4635]">
                          {product.price}
                        </span>
                      )}

                    </div>

                  </div>

                </button>

              </div>

            ))}

          </div>


          {/* BOTTOM EXPLORE MORE */}

          <div className="mt-16 text-center">

            <Link
              to="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-[#292421] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#f5f0e6] transition duration-300 hover:-translate-y-1 hover:bg-[#8f4635]"
            >
              Explore more products
              <span className="text-lg transition group-hover:translate-x-2">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#292421] py-32"
      >

        <div className="mx-auto max-w-4xl px-6">

          <div className="rotate-[-2deg] rounded-[2rem] bg-[#f5f0e6] p-8 text-[#292421] shadow-2xl sm:p-14">

            <p className="font-serif text-2xl italic">
              Dear writer,
            </p>

            <h2 className="mt-8 text-4xl font-black sm:text-6xl">
              Have something
              <br />
              to say?
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#624d44]">
              We'd love to hear from you. Ask us about our products,
              custom diaries, bulk orders or simply tell us what
              you're writing next.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="rounded-full bg-[#292421] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#8f4635]"
              >
                Get in touch
              </Link>

              <Link
                to="/products"
                className="rounded-full border border-[#292421]/20 px-7 py-4 font-bold transition hover:border-[#292421]"
              >
                Visit our collection
              </Link>

            </div>

            <p className="mt-16 font-serif text-lg italic text-[#624d44]/60">
              Until the next chapter...
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-[#292421] px-6 py-12 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:items-center">

          <div className="text-center md:text-left">

            <div className="text-xl font-black tracking-tight">
              DIARY<span className="text-[#d99078]">.</span>
            </div>

            <p className="mt-2 text-sm text-white/40">
              Write it. Keep it. Remember it.
            </p>

          </div>

          <div className="text-center">

            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d99078]">
              Visit / Contact
            </p>

            <p className="mt-3 text-sm leading-6 text-white/60">
              12, Main Street,
              <br />
              Thoothukudi, Tamil Nadu – 628001
            </p>

            <a
              href="tel:+919876543210"
              className="mt-3 inline-block text-sm font-bold text-white transition hover:text-[#d99078]"
            >
              +91 98765 43210
            </a>

          </div>

          <div className="flex justify-center gap-6 text-sm font-medium text-white/50 md:justify-end">

            <a
              href="#"
              className="transition hover:text-[#d99078]"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-[#d99078]"
            >
              WhatsApp
            </a>

            <Link
              to="/products"
              className="transition hover:text-[#d99078]"
            >
              Store
            </Link>

          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © 2026 DIARY. All rights reserved.
        </div>

      </footer>


      {/* ================= 3D MODAL ================= */}

      <Product3DModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </main>
  );
}