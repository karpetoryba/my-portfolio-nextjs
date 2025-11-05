"use client";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-neutral-200 bg-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-neutral-600">
              Creating beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-neutral-600 hover:text-black transition-colors cursor-pointer"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="text-neutral-600 hover:text-black transition-colors cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-neutral-600 hover:text-black transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/karpetoryba" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/karpetoryba/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:daria.karpenko@mail-esd.com"
                  className="text-neutral-600 hover:text-black transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

