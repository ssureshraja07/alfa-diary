import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Feather, 
  BookOpen, 
  Clock, 
  ExternalLink 
} from "lucide-react";

export default function OpenedDiaryFooter() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const phoneNumbers = [
    { label: "+91 94875 24457", href: "tel:+919487524457" },
    { label: "+91 94433 74456", href: "tel:+919443374456" },
  ];

  const emailAddresses = [
    { label: "Ashwin.alfadiaries@gmail.com", href: "mailto:Ashwin.alfadiaries@gmail.com" },
    { label: "alfadiaries@gmail.com", href: "mailto:slfadiaries@gmail.com" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4500);
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#587989] py-20 px-4 sm:px-6 lg:px-8 text-[#26211E]">
      {/* Subtle background decorative shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#C05A3E]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#E8DDCB]/30 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section title introducing the opened diary */}
        <div className="mb-10 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            <Feather size={14} className="text-[#F6F1E7]" />
            <span>The Opened Folio & Epilogue</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-[#F6F1E7] font-serif">
            Alfa Diaries Pvt Ltd — Open Book
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
            A sanctuary of stationery. Discover our story on the left, and connect directly with our Sivakasi headquarters on the right.
          </p>
        </div>

        {/* ================= REALISTIC OPENED DIARY CONTAINER ================= */}
        <div className="relative mx-auto max-w-6xl">
          
          {/* Leather cover overhang / backing spread */}
          <div className="relative rounded-[2.5rem] bg-[#8F3720] p-3 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-[#C05A3E]">
            
            {/* Stitched leather perimeter detail */}
            <div className="rounded-[2rem] border border-dashed border-[#F6F1E7]/30 p-2 sm:p-3 bg-[#375361]/60">
              
              {/* Four brass filigree corner protectors */}
              <div className="pointer-events-none absolute top-4 left-4 h-10 w-10 border-t-4 border-l-4 border-[#E78A70] rounded-tl-xl opacity-90" />
              <div className="pointer-events-none absolute top-4 right-4 h-10 w-10 border-t-4 border-r-4 border-[#E78A70] rounded-tr-xl opacity-90" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-10 w-10 border-b-4 border-l-4 border-[#E78A70] rounded-bl-xl opacity-90" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b-4 border-r-4 border-[#E78A70] rounded-br-xl opacity-90" />

              {/* Silk Bookmark Ribbon draping through the center */}
              <div className="pointer-events-none absolute left-1/2 -top-5 z-30 -translate-x-1/2 flex flex-col items-center animate-ribbon">
                <div className="h-28 w-6 bg-gradient-to-b from-[#C05A3E] via-[#A8452A] to-[#8F3720] shadow-xl border-x border-[#F6F1E7]/30" />
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-[#8F3720]" />
              </div>

              {/* OPENED TWO-PAGE PAPER SPREAD */}
              <div className="relative grid md:grid-cols-2 rounded-[1.75rem] overflow-hidden bg-[#FDFBF7] shadow-inner">
                
                {/* Spine Crease / Gutter in the middle */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden md:block w-12 -translate-x-1/2 diary-spine-shadow border-x border-black/5" />

                {/* ================= LEFT PAGE: ABOUT US (EXACT TEXT) ================= */}
                <div className="relative p-7 sm:p-10 lg:p-12 paper-ruled flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8DDCB]">
                  
                  {/* Subtle Page Watermark */}
                  <div className="pointer-events-none absolute right-8 top-10 select-none opacity-5 font-serif text-8xl font-black text-[#C05A3E]">
                    ALFA
                  </div>

                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between border-b border-[#C05A3E]/20 pb-4">
                      <div className="flex items-center gap-2">
                        <BookOpen size={18} className="text-[#C05A3E]" />
                        <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#587989]">
                          Folio I • About Us
                        </span>
                      </div>
                      <span className="rounded bg-[#E6EFF2] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#375361]">
                        Pvt Ltd
                      </span>
                    </div>

                    {/* Company Branding */}
                    <div className="mt-6">
                      <h3 className="text-3xl font-extrabold tracking-tight text-[#26211E] font-serif">
                        Alfa Diaries Pvt Ltd
                      </h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-[#C05A3E]">
                        Stationery as a Personality Statement
                      </p>
                    </div>

                    {/* Exact User Requested About Us Copy */}
                    <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-[#7D6B5A]">
                      <p>
                        We at <strong>Alfa Diaries Pvt Ltd</strong> ensure our family of customers to provide them with wide Variety of diaries to satisfy the needs of every market segment & suit everyone’s pocket.
                      </p>
                      <p>
                        <strong>Alfa Diaries Pvt Ltd</strong> has been the only choice for those who understand that stationery is not just a necessity, but a companion, an object of joy and a personality statement.
                      </p>
                    </div>

                    {/* Quick navigation index */}
                    <div className="mt-7">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#587989]">
                        Atelier Navigation
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                        <Link to="/" className="rounded-lg bg-[#F6F1E7] px-3 py-1 text-[#26211E] transition hover:bg-[#C05A3E] hover:text-white">
                          Home
                        </Link>
                        <Link to="/products" className="rounded-lg bg-[#F6F1E7] px-3 py-1 text-[#26211E] transition hover:bg-[#C05A3E] hover:text-white">
                          Collection
                        </Link>
                        <Link to="/gallery" className="rounded-lg bg-[#F6F1E7] px-3 py-1 text-[#26211E] transition hover:bg-[#C05A3E] hover:text-white">
                          Gallery
                        </Link>
                        <Link to="/quality" className="rounded-lg bg-[#F6F1E7] px-3 py-1 text-[#26211E] transition hover:bg-[#C05A3E] hover:text-white">
                          Quality
                        </Link>
                        <Link to="/aboutus" className="rounded-lg bg-[#F6F1E7] px-3 py-1 text-[#26211E] transition hover:bg-[#C05A3E] hover:text-white">
                          About Us
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Left Page Footer */}
                  <div className="mt-8 border-t border-[#E8DDCB] pt-4 flex items-center justify-between text-xs text-[#7D6B5A]">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#C05A3E]" />
                      <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#587989]">PAGE 01</span>
                  </div>

                </div>


                {/* ================= RIGHT PAGE: GET IN TOUCH (EXACT CONTACT & LOCATION) ================= */}
                <div className="relative p-7 sm:p-10 lg:p-12 paper-ruled flex flex-col justify-between">
                  
                  {/* Antique Postal Stamp Badge */}
                  <div className="pointer-events-none absolute right-7 top-7 select-none">
                    <div className="h-14 w-14 rounded-full border-2 border-dashed border-[#C05A3E]/40 flex items-center justify-center rotate-12">
                      <div className="h-11 w-11 rounded-full bg-[#C05A3E]/10 flex flex-col items-center justify-center text-[8px] font-black uppercase text-[#C05A3E] text-center leading-tight">
                        <span>SIVAKASI</span>
                        <span>ALFA</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#C05A3E]/20 pb-4">
                      <div className="flex items-center gap-2">
                        <Mail size={18} className="text-[#C05A3E]" />
                        <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#587989]">
                          Folio II • Correspondence
                        </span>
                      </div>
                      <span className="rounded bg-[#F9EFEA] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#C05A3E]">
                        Get In Touch
                      </span>
                    </div>

                    <h4 className="mt-6 text-2xl font-bold text-[#26211E] font-serif">
                      Get in touch!
                    </h4>

                    {/* Official Location Box */}
                    <div className="mt-4 rounded-xl bg-[#F6F1E7] p-3.5 border border-[#E8DDCB] text-xs">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 text-[#C05A3E] shrink-0" />
                        <div>
                          <strong className="text-[#26211E] block">Our Location:</strong>
                          <a
                            href="https://alfadiaries.in/contact-us.php#"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-[#26211E] leading-relaxed transition hover:text-[#C05A3E]"
                          >
                            <span>Alfa Diaries Pvt Ltd 2/2230, Supreme Nagar, Behind Sakkammal Koil, Sivakasi - 626123.</span>
                            <ExternalLink size={12} className="shrink-0" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Call us any time */}
                    <div className="mt-3 rounded-xl bg-[#F6F1E7] p-3.5 border border-[#E8DDCB] text-xs">
                      <div className="flex items-start gap-2">
                        <Phone size={16} className="mt-0.5 text-[#587989] shrink-0" />
                        <div>
                          <strong className="text-[#26211E] block">Call us any time:</strong>
                          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                            {phoneNumbers.map((phone) => (
                              <a
                                key={phone.label}
                                href={phone.href}
                                className="font-mono font-bold text-[#26211E] transition hover:text-[#C05A3E]"
                              >
                                {phone.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mail us any time */}
                    <div className="mt-3 rounded-xl bg-[#F6F1E7] p-3.5 border border-[#E8DDCB] text-xs">
                      <div className="flex items-start gap-2">
                        <Mail size={16} className="mt-0.5 text-[#587989] shrink-0" />
                        <div>
                          <strong className="text-[#26211E] block">Mail us any time:</strong>
                          <div className="mt-1 flex flex-col gap-1">
                            {emailAddresses.map((email) => (
                              <a
                                key={email.label}
                                href={email.href}
                                className="font-medium text-[#26211E] transition hover:text-[#C05A3E] break-all"
                              >
                                {email.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                   
                  </div>

                  {/* Right Page Footer */}
                  <div className="mt-6 border-t border-[#E8DDCB] pt-3 flex items-center justify-between text-xs text-[#7D6B5A]">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Sparkles size={12} className="text-[#C05A3E]" />
                      Sivakasi, Tamil Nadu – 626123
                    </span>
                    <span className="font-mono text-xs font-bold text-[#587989]">PAGE 02</span>
                  </div>

                </div>

              </div>
            </div>

            {/* Bottom book binding imprint */}
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-between px-4 text-xs text-[#F6F1E7]/70">
              <p>© 2026 Alfa Diaries Pvt Ltd. All rights reserved.</p>
              <p className="mt-1 sm:mt-0 font-serif italic text-[#F6F1E7]/90">
                Bound with terracotta warmth, beige linen & dusty blue serenity.
              </p>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
