
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero section full-screen, edge-to-edge */}
      <section className="relative isolate w-full h-screen">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/img-home.png"
            alt="Hero"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1000px) 100vw, 2800px"
          />
          {/* overlay removed to avoid white glow */}
          <h1 className="absolute inset-x-4 bottom-16 z-10 select-none text-[20vw] font-black tracking-tighter leading-[0.9] text-black sm:inset-x-8 sm:bottom-20 sm:text-[14vw] md:text-[11vw] lg:text-[9vw]">
            Developpeur Web
          </h1>
        </div>
      </section>
    </main>
  );
}
