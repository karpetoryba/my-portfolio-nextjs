import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">About Me</h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Welcome to my portfolio! I'm a passionate web developer dedicated to creating
              beautiful and functional digital experiences.
            </p>
            
            <p>
              Throughout my journey, I've developed a strong interest in modern web technologies
              and best practices. I enjoy turning complex problems into simple, elegant solutions.
            </p>
            
            <p>
              My approach to development focuses on clean code, user experience, and continuous
              learning. I'm always excited to take on new challenges and explore emerging
              technologies.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-300">
            <h2 className="text-3xl font-semibold mb-4">Skills & Technologies</h2>
            <p className="text-lg">
              I work with a variety of technologies and tools to bring ideas to life.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
