import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white mt-50">
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
                <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-600 hover:text-black transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors">
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

