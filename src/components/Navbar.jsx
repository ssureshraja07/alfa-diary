import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import alfaLogo from "../images/alfa_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // When user presses Back from #contact, scroll page to top
  useEffect(() => {
    const handlePop = () => {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { name: "Collection", path: "/products" },
    { name: "Quality", path: "/quality" },
    { name: "About Us", path: "/aboutus" },
  ];

  const isActive = (path) => location.pathname === path;

  /**
   * Smart nav handler — if already on the same page, scroll to top.
   * If on a different page, navigate there (React Router scrolls to top by default).
   * This fixes: Contact scroll → click Home → should go to top of Home.
   */
  const handleNavClick = (e, path) => {
    closeMenu();
    if (location.pathname === path) {
      // Already on this page — prevent React Router (it would do nothing),
      // clear any hash, and scroll to top manually
      e.preventDefault();
      window.history.replaceState(null, "", path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // else: let <Link> do its normal navigation
  };

  /**
   * Contact handler — scrolls to #contact on the CURRENT page.
   * Pushes history entries so Back → top of same page.
   */
  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();

    const currentPath = window.location.pathname;
    // Push current page (no hash) so Back = page top
    window.history.pushState({ scrollY: 0 }, "", currentPath);
    // Push #contact as current entry
    window.history.pushState({ section: "contact" }, "", currentPath + "#contact");

    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#E8DDCB] bg-[#F6F1E7]/85 backdrop-blur-lg transition-all duration-300 shadow-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Brand Logo — also uses smart nav */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center transition hover:opacity-90"
        >
          <img
            src={alfaLogo}
            alt="Alfa Diaries Logo"
            className="h-16 w-auto object-contain"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.12))" }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#7D6B5A] md:flex">

          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className={`transition duration-200 ${
              isActive("/") ? "text-[#C05A3E]" : "hover:text-[#C05A3E]"
            }`}
          >
            Home
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`transition duration-200 ${
                isActive(link.path)
                  ? "text-[#C05A3E]"
                  : "hover:text-[#C05A3E]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Contact — scrolls to footer on current page */}
          <button
            type="button"
            onClick={handleContactClick}
            className="transition duration-200 hover:text-[#587989] cursor-pointer bg-transparent border-none p-0 font-bold uppercase tracking-wider text-[#7D6B5A]"
          >
            Contact
          </button>

          {/* Call to Action Button */}
          <Link
            to="/products"
            className="group flex items-center gap-1.5 rounded-full bg-[#C05A3E] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#8F3720] hover:shadow-lg"
          >
            <span>Explore Shop</span>
            <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-xl border border-[#E8DDCB] bg-white text-[#26211E] transition hover:border-[#C05A3E] hover:text-[#C05A3E] md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`overflow-hidden border-t border-[#E8DDCB] bg-[#F6F1E7] transition-all duration-300 md:hidden ${
          open
            ? "max-h-[380px] opacity-100 py-6"
            : "max-h-0 border-transparent opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 text-sm font-bold text-[#26211E]">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className={`transition py-1 ${isActive("/") ? "text-[#C05A3E]" : "hover:text-[#C05A3E]"}`}
          >
            Home
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`transition py-1 ${
                isActive(link.path) ? "text-[#C05A3E]" : "hover:text-[#C05A3E]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Contact */}
          <button
            type="button"
            onClick={handleContactClick}
            className="transition py-1 text-left text-[#7D6B5A] hover:text-[#587989] bg-transparent border-none cursor-pointer font-bold"
          >
            Contact
          </button>

          <Link
            to="/products"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-[#C05A3E] px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#8F3720]"
          >
            Explore Complete Collection
          </Link>
        </div>
      </div>
    </nav>
  );
}