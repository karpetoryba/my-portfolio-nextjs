
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero section full-screen, edge-to-edge */}
      <section className="relative isolate w-full h-screen overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-center">
          <Image
            src="/img-home.png"
            alt="Hero"
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
          {/* overlay removed to avoid white glow */}
          <div className="absolute inset-x-4 bottom-8 z-10 select-none xs:inset-x-6 xs:bottom-12 sm:inset-x-8 sm:bottom-16 md:bottom-20">
            <p className="text-[20vw] font-black tracking-tighter leading-[0.9] text-black sm:text-[14vw] md:text-[12vw] lg:text-[9vw] mb-2">
              I'm
            </p>
            <h1 className="text-[20vw] font-black tracking-tighter leading-[0.9] text-black sm:text-[14vw] md:text-[12vw] lg:text-[9vw]">
              Developpeur Web
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
