import Image from "next/image";
import drunkSanta from "../../../public/Drunk_santa.png";
import Link from "next/link";
import { Github } from "lucide-react";
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

export default function ProjectsPage() {
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

  return (
    <>
      <main className="container mx-auto px-4 py-16">
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
      </main>
      <div className="mt-6 md:mt-8" />
      <Footer />
    </>
  );
}
