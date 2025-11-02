import Link from "next/link";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  const email = "daria.karpenko@mail-esd.com";

  return (
    <>
      <main className="relative container mx-auto px-4 py-16">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft grid overlay with fade */}
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight">Contact</h1>
            {/* glowing underline */}
            <div className="mt-3 h-2 w-40 rounded-full bg-white/60 blur-md" />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-neutral-300/70">
              <div className="group rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </h3>
                <a 
                  href={`mailto:${email}`}
                  className="text-lg text-neutral-600 hover:text-black transition-colors"
                >
                  {email}
                </a>
              </div>

              <div className="group rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </h3>
                <Link 
                  href="https://www.linkedin.com/in/karpetoryba/" 
                  target="_blank"
                  className="text-lg text-neutral-600 hover:text-black transition-colors"
                >
                  linkedin.com/in/karpetoryba
                </Link>
              </div>

              <div className="group rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </h3>
                <Link 
                  href="https://github.com/karpetoryba" 
                  target="_blank"
                  className="text-lg text-neutral-600 hover:text-black transition-colors"
                >
                  github.com/karpetoryba
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-300/70">
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

