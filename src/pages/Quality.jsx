import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Award, 
  Sliders, 
  BookOpen, 
  Check 
} from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import OpenedDiaryFooter from "../components/OpenedDiaryFooter";
import heroImg from "../images/person-reading-hero.jpg";
import sideImg from "../images/person-reading-quality.jpg";

export default function Quality() {
  useScrollReveal();
  const qualityPillars = [
    {
      title: "National & International Standards",
      desc: "Strict quality control procedures practiced throughout cutting, binding, and finishing.",
    },
    {
      title: "High Workmanship & Durability",
      desc: "Heirloom craftsmanship built to remain sturdy, intact, and beautiful for decades.",
    },
    {
      title: "Perfect Printing on Every Sheet",
      desc: "Precision calibrated lines and grids produced by dedicated industry professionals.",
    },
    {
      title: "Standard & Custom Tailoring",
      desc: "Available in versatile standard formats or fully customized to bespoke specifications.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#26211E]">
      
      {/* ================= 1. PHOTO BELOW NAVBAR (HERO BANNER) ================= */}
      <section className="relative pt-20">
        
        {/* Full-width container with border and margin for editorial aesthetic */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E8DDCB] shadow-2xl">
            
            {/* Background Image of Person Reading Diary */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#26211E]">
              <img
                src={heroImg}
                alt="Person reading an open handcrafted diary by sunlit window"
                className="h-full w-full object-cover object-center transition duration-1000 ease-out hover:scale-105"
              />

              {/* Gradient Overlay in Terracotta & Dusty Blue tones */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26211E]/85 via-[#26211E]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C05A3E]/40 via-transparent to-[#587989]/30" />
            </div>

            {/* Hero Text Overlay */}
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
                  <ShieldCheck size={15} className="text-[#E78A70]" />
                  <span>Alfa Diaries Pvt Ltd • Quality Assurance</span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-serif leading-tight">
                  Quality Policy
                </h1>

                <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
                  Every product is crafted to be more than just visually captivating; it is an enduring specimen of impeccable quality, designed for lifetimes of reading and writing.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= 2. CONTENT (LEFT) & PHOTO (RIGHT) ================= */}
      <section className="reveal-on-scroll px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* ================= LEFT SIDE: EXACT QUALITY POLICY CONTENT ================= */}
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C05A3E] text-white">
                    <Award size={16} />
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#C05A3E]">
                    Our Uncompromising Standard
                  </span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#26211E] font-serif leading-tight">
                  Specimen of Impeccable Quality.
                </h2>
              </div>

              {/* Exact User-Requested Quality Policy Paragraphs */}
              <div className="space-y-5 rounded-[2rem] border border-[#E8DDCB] bg-white p-7 sm:p-10 shadow-sm leading-relaxed text-base sm:text-lg text-[#7D6B5A]">
                
                <p className="text-[#26211E] font-medium">
                  <strong>Quality is the foremost concern at Alfa Diaries Pvt Ltd</strong> and every possible step is taken to ensure that every product, besides being attractive, is also a specimen of impeccable quality.
                </p>

                <p>
                  We make sure that the workmanship is of high quality and long lasting, before delivering the product to our customers. For that purpose, we have adopted several quality control procedures adhering to the national as well as international quality control standards.
                </p>

                <p>
                  Each and every sheet in the diary is printing perfectly by the team of experienced and skilled professionals of the industry that works dedicatedly to offer excellent service for our valuable clients. Offered in standard sizes, our range can also be customized.
                </p>

              </div>

              {/* Quality Pillars Checklist */}
              <div className="reveal-on-scroll reveal-delay-2 grid gap-3 sm:grid-cols-2">
                {qualityPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E8DDCB] bg-[#F6F1E7] p-4 transition hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={17} className="mt-0.5 text-[#C05A3E] shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-[#26211E]">
                          {pillar.title}
                        </h4>
                        <p className="mt-1 text-xs text-[#7D6B5A] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customization Callout */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#587989] to-[#375361] p-5 text-white shadow-md">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E78A70] block">
                    Bespoke & Custom Sizes
                  </span>
                  <p className="text-sm font-medium text-white/90">
                    Need customized branding, foil monograms, or custom dimensions?
                  </p>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-[#C05A3E] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#8F3720]"
                >
                  Inquire Custom Orders
                </a>
              </div>

            </div>

            {/* ================= RIGHT SIDE: SECOND PHOTO OF PERSON READING DIARY ================= */}
            <div className="reveal-on-scroll reveal-delay-3 lg:col-span-5">
              
              <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-[#C05A3E] bg-white p-3 shadow-2xl">
                
                {/* Decorative border stitching effect */}
                <div className="overflow-hidden rounded-[2rem] border border-dashed border-[#7D6B5A]/30 bg-[#F6F1E7]">
                  
                  {/* Photo of person turning/reading diary page */}
                  <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={sideImg}
                      alt="Person reading and turning pages of an open handcrafted diary"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#26211E]/70 via-transparent to-transparent opacity-80" />

                    {/* Floating Quality Tag */}
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-md border border-[#E8DDCB]">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#C05A3E] animate-pulse" />
                        <span className="font-mono text-xs font-bold uppercase text-[#26211E]">
                          Individually Hand-Inspected
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#7D6B5A]">
                        Smooth page turning, zero ink bleeds, and tactile comfort in every session.
                      </p>
                    </div>

                  </div>

                </div>

                {/* Brass Corner Accents */}
                <div className="pointer-events-none absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-[#E78A70] rounded-tl-lg" />
                <div className="pointer-events-none absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-[#E78A70] rounded-tr-lg" />
                <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#E78A70] rounded-bl-lg" />
                <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#E78A70] rounded-br-lg" />

              </div>

              {/* Small caption below photo */}
              <p className="mt-4 text-center font-serif italic text-xs text-[#7D6B5A]">
                "Every sheet tested for durability, texture, and fountain-pen smoothness."
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= OPENED DIARY FOOTER ================= */}
      <OpenedDiaryFooter />

    </main>
  );
}
