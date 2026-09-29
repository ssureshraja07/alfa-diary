import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Calendar
} from "lucide-react";

import ScrollRevealDiaries from "../components/ScrollRevealDiaries";
import OpenedDiaryFooter from "../components/OpenedDiaryFooter";
import heroDiariesImg from "../images/diaries-2027-hero.jpg";

export default function Home() {




  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#26211E]">

      {/* ================= HERO SECTION (4+ 2027 DIARIES ON RIGHT BG) ================= */}
      <section className="relative min-h-[95vh] overflow-hidden pt-20 flex items-center">

        {/* Background Image: 4+ Diaries set on the right side of desk */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroDiariesImg}
            alt="4+ Luxury 2027 Alfa Diaries in terracotta, dusty blue, beige and white on oak desk"
            className="h-full w-full object-cover object-right md:object-center"
          />

          {/* Left-to-Right Soft Gradient: Keeps left side clean & readable for text, lets right side shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E7] via-[#F6F1E7]/90 sm:via-[#F6F1E7]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F6F1E7] via-transparent to-transparent" />
        </div>

        {/* Hero Content Grid: Left side text, leaving right side open to showcase diaries */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">

          <div className="max-w-2xl space-y-6">

            {/* 2027 New Collection Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C05A3E]/30 bg-white/95 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#C05A3E] shadow-sm backdrop-blur-md">
              <Calendar size={14} className="text-[#C05A3E]" />
              <span>New 2027 Edition Folios • In Stock Now</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl font-serif text-[#26211E]">
              WHERE YOUR
              <br />
              STORIES FIND
              <br />
              <span className="text-[#C05A3E]">
                SANCTUARY.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-[#7D6B5A] sm:text-lg">
              Alfa Diaries Pvt Ltd has been the only choice for those who understand that stationery is not just a necessity, but a companion, an object of joy and a personality statement.            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                className="group flex items-center gap-2 rounded-full bg-[#C05A3E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#8F3720] hover:shadow-xl"
              >
                <span>Explore 2027 Catalog</span>
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/products"
                className="flex items-center gap-2 rounded-full border border-[#7D6B5A]/30 bg-white/90 px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#26211E] shadow-sm transition hover:border-[#C05A3E] hover:text-[#C05A3E]"
              >
                <Palette size={15} className="text-[#587989]" />
                <span>View 2027 Lookbook</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCROLL REVEAL DIARIES (LEFT & RIGHT) ================= */}
      <ScrollRevealDiaries />
      {/* ================= OPENED DIARY FOOTER ================= */}
      <OpenedDiaryFooter />



    </main>
  );
}