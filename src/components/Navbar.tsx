import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <nav className="mx-auto flex w-full items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-black">
          Portfolio
        </Link>
        <ul className="flex items-center gap-8 text-lg">
          <li>
            <a href="#about" className="text-black transition-colors hover:text-black">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="text-black transition-colors hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black transition-colors hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


