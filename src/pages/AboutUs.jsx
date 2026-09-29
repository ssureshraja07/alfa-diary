import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Feather, 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen, 
  Sparkles, 
  Check, 
  Compass, 
  Palette, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Award 
} from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import OpenedDiaryFooter from "../components/OpenedDiaryFooter";
import aboutHeroImg from "../images/aboutus-atelier-craft.jpg";

export default function AboutUs() {
  useScrollReveal();
  const phoneNumbers = [
    { label: "+91 94433 74456", href: "tel:+919443374456" },
    { label: "+91 94875 24457", href: "tel:+919487524457" },
  ];

  const emailAddresses = [
    { label: "Ashwin.alfadiaries@gmail.com", href: "mailto:Ashwin.alfadiaries@gmail.com" },
    { label: "Alfadiaries@gmail.com", href: "mailto:Alfadiaries@gmail.com" },
  ];

  // Concise mix of What We Do, Our Products, and Quality
  const companyHighlights = [
    {
      icon: Layers,
      title: "What We Do",
      subtitle: "Automated Bind Setup",
      desc: "From signature Smyth-sewn threading to customized gold-foil embossing, we manufacture handcrafted stationery tailored to client specifications.",
      accent: "#C05A3E",
    },
    {
      icon: BookOpen,
      title: "Our Products",
      subtitle: "Diaries for Every Segment & Budget",
      desc: "Executive leather folios, daily dated planners, unbleached linen journals, and pocket travel notebooks designed to suit everyone's pocket.",
      accent: "#587989",
    },
    {
      icon: ShieldCheck,
      title: "Our Quality",
      subtitle: "Impeccable Workmanship & Archival Paper",
      desc: "Adhering to national and international standards. Printed on 120–160 GSM tree-free cotton rag sheets that never bleed or ghost.",
      accent: "#8F3720",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#26211E]">
      
      {/* ================= 1. PHOTO BANNER BELOW NAVBAR (MATCHING QUALITY & PRODUCTS) ================= */}
      <section className="relative pt-20">
        
        {/* Full-width container with border and margin */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E8DDCB] shadow-2xl">
            
            {/* Background Image of Master Craftsman Stitching Alfa Diaries */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#26211E]">
              <img
                src={aboutHeroImg}
                alt="Master craftsman stitching and hand-binding Alfa Diaries in workshop"
                className="h-full w-full object-cover object-center transition duration-1000 ease-out hover:scale-105"
              />

              {/* Gentle Gradient Overlay for text contrast without hiding the craftsman and Alfa Diaries books */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26211E]/85 via-[#26211E]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#26211E]/40 via-transparent to-transparent" />
            </div>

            {/* Text Overlay on Banner */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16 text-white">
              <div className="max-w-3xl space-y-4">
                
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F6F1E7]/80 transition hover:text-white"
                >
                  <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
                  <span>Return to Home</span>
                </Link>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F6F1E7] backdrop-blur-md">
                  <Feather size={14} className="text-[#E78A70]" />
                  <span>Sivakasi Atelier • Est. Handcrafted Excellence</span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-serif leading-tight text-white">
                  Alfa Diaries Pvt Ltd
                </h1>

                <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
                  Crafting stationery that is not just a necessity, but a companion, an object of joy, and a personality statement.
                </p>

                {/* Quick Blend Chips: What We Do • Our Products • Quality */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
                  <span className="rounded-full bg-white/20 px-3.5 py-1 font-semibold backdrop-blur-md">
                    ✦ What We Do: Custom Binding
                  </span>
                  <span className="rounded-full bg-white/20 px-3.5 py-1 font-semibold backdrop-blur-md">
                    ✦ Our Products: 2027 Editions
                  </span>
                  <span className="rounded-full bg-white/20 px-3.5 py-1 font-semibold backdrop-blur-md">
                    ✦ Quality: National & Global Standards
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= 2. PRIMARY ABOUT US & CONTACT SPREAD ================= */}
      <section className="reveal-on-scroll px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            
            {/* LEFT SIDE: About Us Statement + Mixed Highlights (What we do, Products, Quality) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="rounded-[2.5rem] border border-[#E8DDCB] bg-white p-8 sm:p-12 shadow-md space-y-6">
                
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C05A3E] text-white">
                    <BookOpen size={16} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C05A3E]">
                    Our Heritage & Philosophy
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#26211E] font-serif">
                  About Us
                </h2>

                {/* Exact Requested About Us Copy */}
                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#7D6B5A]">
                  <p>
                    We at <strong className="text-[#26211E]">Alfa Diaries Pvt Ltd</strong> ensure our family of customers to provide them with a wide variety of diaries to satisfy the needs of every market segment & suit everyone’s pocket.
                  </p>
                  <p>
                    <strong className="text-[#26211E]">Alfa Diaries Pvt Ltd</strong> has been the only choice for those who understand that stationery is not just a necessity, but a companion, an object of joy, and a personality statement.
                  </p>
                </div>

              </div>

              {/* 3 Mixed Summary Cards: What We Do, Products, Quality */}
              <div className="reveal-on-scroll reveal-delay-2 grid gap-4 sm:grid-cols-3">
                {companyHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E8DDCB] bg-white p-5 shadow-xs transition hover:shadow-md"
                    >
                      <span 
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white mb-3"
                        style={{ backgroundColor: item.accent }}
                      >
                        <Icon size={18} />
                      </span>
                      <h3 className="text-base font-bold font-serif text-[#26211E]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-bold text-[#C05A3E]">
                        {item.subtitle}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-[#7D6B5A]">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT SIDE: Get In Touch & Headquarters */}
            <div className="reveal-on-scroll reveal-delay-3 lg:col-span-5 rounded-[2.5rem] border border-[#587989]/30 bg-gradient-to-br from-[#375361] to-[#587989] p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-md">
                    <Phone size={16} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E78A70]">
                    Direct Correspondence
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white font-serif">
                  Get in touch!
                </h3>

                {/* Location Box */}
                <div className="mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/15">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-1 text-[#E78A70] shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6F1E7]/70 block">
                        Our Location:
                      </span>
                      <a
                        href="https://alfadiaries.in/contact-us.php#"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1.5 inline-flex items-start gap-1 text-sm font-semibold leading-relaxed text-white transition hover:text-[#E78A70]"
                      >
                        <span>Alfa Diaries Pvt Ltd 2/2230, Supreme Nagar, Behind Sakkammal Koil, Sivakasi - 626123.</span>
                        <ExternalLink size={14} className="shrink-0 mt-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Call Us Any Time */}
                <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/15">
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="mt-1 text-[#E78A70] shrink-0" />
                    <div className="w-full">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6F1E7]/70 block">
                        Call us any time:
                      </span>
                      <div className="mt-2 flex flex-col gap-1.5">
                        {phoneNumbers.map((phone) => (
                          <a
                            key={phone.label}
                            href={phone.href}
                            className="font-mono text-sm font-bold text-white transition hover:text-[#E78A70]"
                          >
                            {phone.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mail Us Any Time */}
                <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/15">
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="mt-1 text-[#E78A70] shrink-0" />
                    <div className="w-full">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6F1E7]/70 block">
                        Mail us any time:
                      </span>
                      <div className="mt-2 flex flex-col gap-1.5">
                        {emailAddresses.map((email) => (
                          <a
                            key={email.label}
                            href={email.href}
                            className="text-xs font-semibold text-white/95 transition hover:text-[#E78A70] break-all"
                          >
                            {email.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                <span>Pan-India Dispatch</span>
                <span className="font-mono font-semibold">Sivakasi, Tamil Nadu</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= OPENED DIARY FOOTER ================= */}
      <OpenedDiaryFooter />

    </main>
  );
}
