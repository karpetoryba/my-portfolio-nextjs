'use client';

import Link from "next/link";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const email = "daria.karpenko@mail-esd.com";
  const [headerVisible, setHeaderVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  const [availabilityVisible, setAvailabilityVisible] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setHeaderVisible(true), 80),
      setTimeout(() => setIntroVisible(true), 160),
      setTimeout(() => setLinksVisible(true), 260),
      setTimeout(() => setAvailabilityVisible(true), 360),
    ];

    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <>
      <main className="relative container mx-auto px-4 py-16">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft grid overlay with fade */}
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className={`mb-10 flex items-center justify-between transition-all duration-700 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight">Contact</h1>
              {/* glowing underline */}
              <div className="mt-3 h-2 w-40 rounded-full bg-white/60 blur-md" />
            </div>
            <a
              href="/Karpenko_Daria_CV_.png"
              download="Karpenko_Daria_CV_.png"
              className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/60 backdrop-blur-sm border border-neutral-200/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Download CV"
            >
              <span className="text-xl sm:text-2xl font-bold text-black animate-float">CV</span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
                Download CV
              </span>
            </a>
          </div>
          
          <div className="space-y-8">
            <div
              className={`transition-all duration-700 ease-out ${
                introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div
              className={`space-y-3 pt-8 transition-all duration-700 ease-out ${
                linksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a 
                href={`mailto:${email}`}
                className="group flex items-center justify-center gap-2 rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Mail className="h-4 w-4" />
                <span className="text-base font-medium">Email</span>
              </a>

              <Link 
                href="https://www.linkedin.com/in/karpetoryba/" 
                target="_blank"
                className="group flex items-center justify-center gap-2 rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-base font-medium">LinkedIn</span>
              </Link>

              <Link 
                href="https://github.com/karpetoryba" 
                target="_blank"
                className="group flex items-center justify-center gap-2 rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Github className="h-4 w-4" />
                <span className="text-base font-medium">GitHub</span>
              </Link>
            </div>
          </div>

          <div
            className={`mt-12 pt-8 transition-all duration-700 ease-out ${
              availabilityVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-3xl font-semibold mb-4">Availability</h2>
            <div className="rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
              <p className="text-lg text-neutral-600">
                Seeking a web developer apprenticeship for one year with a rhythm of 4 days in company, 1 day at school. 
                I typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

