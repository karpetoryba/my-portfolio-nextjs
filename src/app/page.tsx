"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollBlur, setScrollBlur] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading after 20% of screen scroll
      const startFade = windowHeight * 0.2;
      // Complete disappearance at 80% of screen scroll
      const endFade = windowHeight * 0.8;
      
      if (scrollPosition <= startFade) {
        setScrollOpacity(1);
        setScrollBlur(0);
      } else if (scrollPosition >= endFade) {
        setScrollOpacity(0);
        setScrollBlur(20);
      } else {
        // Smooth transition between startFade and endFade
        const progress = (scrollPosition - startFade) / (endFade - startFade);
        setScrollOpacity(1 - progress);
        setScrollBlur(progress * 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call immediately for initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for About section animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      });
    }, observerOptions);

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Intersection Observer for Projects section animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsProjectsVisible(true);
        }
      });
    }, observerOptions);

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <>
      {/* Hero section full-screen, edge-to-edge */}
      <section id="home" className="relative isolate w-full h-screen overflow-hidden">
        {/* Background accents - grid squares */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft grid overlay with fade */}
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="relative h-full w-full flex items-center justify-center">
          <div 
            className="relative w-full h-full transition-all duration-300 ease-out"
            style={{
              opacity: scrollOpacity,
              filter: `blur(${scrollBlur}px)`,
            }}
          >
          <Image
            src="/img-home.png"
            alt="Hero"
            fill
            priority
            className="object-contain -translate-y-6 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12"
            sizes="100vw"
          />
          </div>
          {/* overlay removed to avoid white glow */}
          <div 
            className="hidden sm:block absolute left-28 right-4 bottom-16 z-10 select-none xs:left-36 xs:right-6 xs:bottom-20 sm:left-48 sm:right-8 sm:bottom-24 md:left-64 md:bottom-32 transition-opacity duration-300"
            style={{ opacity: scrollOpacity }}
          >
            <p className="text-[20vw] font-black tracking-tighter leading-[0.9] text-black sm:text-[14vw] md:text-[12vw] lg:text-[9vw] mb-2">
              I'm&nbsp;&nbsp;&nbsp;a
            </p>
            <h1 className="text-[20vw] font-black tracking-tighter leading-[0.9] text-black sm:text-[14vw] md:text-[12vw] lg:text-[9vw] text-glow-white">
              Web Developer
            </h1>
          </div>
        </div>
      </section>

      {/* About section */}
      <section 
        id="about" 
        className={`relative container mx-auto px-4 py-16 transition-all duration-1000 ease-out ${
          isAboutVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
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
      </section>

      {/* View Projects section */}
      <section 
        id="projects" 
        className={`relative container mx-auto px-4 py-20 md:py-24 overflow-hidden transition-all duration-1000 ease-out ${
          isProjectsVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-neutral-200/20 via-neutral-100/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-neutral-300/15 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-neutral-200/15 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Content */}
            <div className="text-center mb-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                View Projects
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Explore my recent work and projects. Each project represents a unique challenge and creative solution.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="/projects">
                <Button 
                  className="w-full bg-neutral-300/70 backdrop-blur-sm text-black hover:bg-neutral-400/70 active:scale-[0.98] transition-all duration-200 px-8 py-6 text-lg font-semibold"
                  variant="default"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
