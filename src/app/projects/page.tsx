import Image from "next/image";
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
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with secure payments and seamless user interface",
      image: "/img-home.png",
      link: "#",
      github: "#",
      tech: ["React", "Next.js", "TypeScript"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Creative portfolio showcase for designers with modern UI and smooth animations",
      image: "/img-home.png",
      link: "#",
      github: "#",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Streamline your workflow with smart task organization and team collaboration tools",
      image: "/img-home.png",
      link: "#",
      github: "#",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-neutral-600 mb-12">
            Here are some of my recent projects and works
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
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
                    <Button className="w-full" variant="default">
                      View Project
                    </Button>
                  </Link>
                  <Link href={project.github}>
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
