"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero section full-screen, edge-to-edge */}
      <section className="relative isolate w-full h-screen overflow-hidden">
        {/* Background accents - grid squares */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft grid overlay with fade */}
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="relative h-full w-full flex items-center justify-center">
          <Image
            src="/img-home.png"
            alt="Hero"
            fill
            priority
            className="object-contain -translate-y-6 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12"
            sizes="100vw"
          />
          {/* overlay removed to avoid white glow */}
          <div className="absolute left-28 right-4 bottom-16 z-10 select-none xs:left-36 xs:right-6 xs:bottom-20 sm:left-48 sm:right-8 sm:bottom-24 md:left-64 md:bottom-32">
            <p className="text-[20vw] font-black tracking-tighter leading-[0.9] text-black sm:text-[14vw] md:text-[12vw] lg:text-[9vw] mb-2">
              I'm&nbsp;&nbsp;&nbsp;a
            </p>
            <h1 className="text-[20vw] font-black tracking-tighter leading-[0.9] text-black sm:text-[14vw] md:text-[12vw] lg:text-[9vw] text-glow-white">
              Web Developer
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
