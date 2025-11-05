"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import drunkSanta from "../../public/Drunk_santa.png";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollBlur, setScrollBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Начинаем затемнение после 20% прокрутки экрана
      const startFade = windowHeight * 0.2;
      // Полное исчезновение при прокрутке на 80% экрана
      const endFade = windowHeight * 0.8;
      
      if (scrollPosition <= startFade) {
        setScrollOpacity(1);
        setScrollBlur(0);
      } else if (scrollPosition >= endFade) {
        setScrollOpacity(0);
        setScrollBlur(20);
      } else {
        // Плавный переход между startFade и endFade
        const progress = (scrollPosition - startFade) / (endFade - startFade);
        setScrollOpacity(1 - progress);
        setScrollBlur(progress * 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Вызываем сразу для начальной позиции

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const projects = [
    {
      id: 1,
      title: "Blog",
      description: "A blog website with a modern UI and a secure login system",
      image: "/Blog.png",
      link: "#",
      github: "https://github.com/karpetoryba/new_Forum_nextjs",
      tech: ["Next.js", "TypeScript", "Prisma","TypeScript" ],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Creative portfolio showcase for designers with modern UI",
      image: "/Portfolio_web.png",
      link: "https://portfolio.karpenkodaria.com/",
      github: "https://github.com/karpetoryba/my-portfolio-nextjs",
      tech: ["Next.js", "TypeScript"],
    },
    {
      id: 3,
      title: "Drunk-santa",
      description: "A Christmas game where you must catch snowflakes",
      image: drunkSanta,
      link: "https://drunk-santa.karpenkodaria.com/",
      github: "https://github.com/ethan-frot/Drunk-Santa",
      tech: ["Next.js", "Prisma", "TypeScript", "Phaser 3" , "Docker Compose", "Supabase JS"],
    },
  ];

  const email = "daria.karpenko@mail-esd.com";

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
      <section id="about" className="relative container mx-auto px-4 py-16">
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

      {/* Projects section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto mb-8 md:mb-12">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-neutral-600 mb-12">
            Here are some of my recent projects and works
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Link href={project.link} className="flex-1">
                    <Button 
                      className="w-full bg-neutral-200/50 backdrop-blur-sm text-black hover:bg-neutral-300/60 active:scale-[0.98] transition-all duration-200" 
                      variant="default"
                    >
                      View Project
                    </Button>
                  </Link>
                  <Link href={project.github}>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="group bg-neutral-200/50 backdrop-blur-sm hover:scale-110 active:scale-95 transition-transform duration-200"
                    >
                      <Github className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="relative container mx-auto px-4 py-16">
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

            <div className="space-y-3 pt-8 border-t border-neutral-300/70">
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
      </section>

      <Footer />
    </>
  );
}
