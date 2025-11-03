import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/30 border-b border-neutral-100">
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-5 max-w-7xl">
        <Link href="/" className="text-2xl font-bold tracking-tight text-black hover:opacity-80 transition-opacity">
          Portfolio
        </Link>
        <ul className="flex items-center gap-10 text-base font-medium">
          <li>
            <Link 
              href="/about" 
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              About me
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-neutral-700 hover:text-black hover:font-bold transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


