
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080b12]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-black tracking-[0.2em] text-white"
        >
          ALFA DIARY<span className="text-cyan-300">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">

          <a
            href="/products"
            className="transition hover:text-cyan-300"
          >
            Collection
          </a>

          <a
            href="/#story"
            className="transition hover:text-cyan-300"
          >
            Story
          </a>

          <a
            href="/#contact"
            className="transition hover:text-cyan-300"
          >
            Contact
          </a>

          <Link
            to="/products"
            className="rounded-full bg-white px-5 py-2.5 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Shop
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
        >
          <span className="text-xl">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#080b12]/95 transition-all duration-300 md:hidden ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-7 text-sm font-bold text-slate-300">

          <a
            href="/#collection"
            onClick={closeMenu}
            className="transition hover:text-cyan-300"
          >
            Collection
          </a>

          <a
            href="/#story"
            onClick={closeMenu}
            className="transition hover:text-cyan-300"
          >
            Story
          </a>

          <a
            href="/#contact"
            onClick={closeMenu}
            className="transition hover:text-cyan-300"
          >
            Contact
          </a>

          <Link
            to="/products"
            onClick={closeMenu}
            className="rounded-full bg-white px-5 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Shop
          </Link>

        </div>
      </div>
    </nav>
  );
}

