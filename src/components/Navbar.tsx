import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-black/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base font-semibold tracking-tight text-foreground">
          Portfolio
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a href="#about" className="text-foreground/80 transition-colors hover:text-foreground">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="text-foreground/80 transition-colors hover:text-foreground">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-foreground/80 transition-colors hover:text-foreground">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


