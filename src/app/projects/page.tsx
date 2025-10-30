import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with secure payments",
      image: "/img-home.png",
      link: "#",
      tech: ["React", "Next.js", "TypeScript"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Creative portfolio showcase for designers",
      image: "/img-home.png",
      link: "#",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Streamline your workflow with smart task organization",
      image: "/img-home.png",
      link: "#",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-neutral-600 mb-12">
          Here are some of my recent projects and works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
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
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
