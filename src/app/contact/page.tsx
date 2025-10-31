import Link from "next/link";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  const email = "daria.karpenko@mail-esd.com";

  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Contact</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-neutral-300">
              <div>
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

              <div>
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

              <div>
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

          <div className="mt-16 pt-8 border-t border-neutral-300">
            <h2 className="text-2xl font-semibold mb-4">Availability</h2>
            <p className="text-lg text-neutral-600">
              Seeking a web developer apprenticeship for one year with a rhythm of 4 days in company, 1 day at school. 
              I typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

