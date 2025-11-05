import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="relative container mx-auto px-4 py-16">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft grid overlay with fade */}
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight">About Me</h1>
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
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm Daria Karpenko, a full-stack developer currently pursuing a Bachelor's degree in Web Development 
              at École Supérieure du Digital in Bordeaux. I specialize in building scalable applications 
              using modern JavaScript frameworks and cloud technologies.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-300/70">
            <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-200/70 shadow-sm">
                <h3 className="font-semibold mb-3">Frontend</h3>
                <ul className="space-y-1 text-neutral-600">
                  <li>React</li>
                  <li>React Native</li>
                  <li>Vue.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-200/70 shadow-sm">
                <h3 className="font-semibold mb-3">Backend</h3>
                <ul className="space-y-1 text-neutral-600">
                  <li>Node.js</li>
                  <li>NestJS</li>
                  <li>Express.js</li>
                  <li>MySQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-200/70 shadow-sm">
                <h3 className="font-semibold mb-3">Tools & Methods</h3>
                <ul className="space-y-1 text-neutral-600">
                  <li>Docker</li>
                  <li>GitHub / GitLab</li>
                  <li>Jira</li>
                  <li>Postman</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-300/70">
            <h2 className="text-3xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="group rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-neutral-600 font-medium">GardenUno • Périgueux, France</p>
                <p className="text-neutral-600 italic">Apr - Aug 2025</p>
                <ul className="mt-2 space-y-1 text-neutral-700">
                  <li>• Built Node.js backend architecture for production applications</li>
                  <li>• Developed MVP mobile app using React Native</li>
                  <li>• Managed Jira workflow and Agile sprint cycles</li>
                </ul>
              </div>
              <div className="group rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <p className="text-neutral-600 font-medium">Incubateur H24 • Périgueux, France</p>
                <p className="text-neutral-600 italic">Feb - Apr 2024</p>
                <ul className="mt-2 space-y-1 text-neutral-700">
                  <li>• Created company website using WordPress</li>
                  <li>• Implemented web scraping solutions for data collection</li>
                  <li>• Provided technical translations and project presentations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-300/70">
            <h2 className="text-3xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Bachelor Web Developer</h3>
                <p className="text-neutral-600 font-medium">École Supérieure du Digital • Bordeaux, France</p>
                <p className="text-neutral-600 italic">Sep 2023 - Aug 2026</p>
              </div>
              <div className="rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Bachelor of Law</h3>
                <p className="text-neutral-600 font-medium">Kuban State University • Krasnodar, Russia</p>
                <p className="text-neutral-600 italic">Sep 2019 - Aug 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
