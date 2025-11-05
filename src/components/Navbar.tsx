"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/30 border-b border-neutral-100">
      <nav className="mx-auto flex w-full items-center justify-between px-4 sm:px-6 py-3 sm:py-5 max-w-7xl">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "home")}
          className="text-xl sm:text-2xl font-bold tracking-tight text-black hover:opacity-80 transition-opacity cursor-pointer"
        >
          Portfolio
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm lg:text-base font-medium">
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")}
              className="text-neutral-700 hover:text-black hover:font-bold transition-all cursor-pointer"
            >
              About me
            </a>
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
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-md">
          <ul className="flex flex-col px-4 py-4 gap-4">
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, "about")}
                className="block text-neutral-700 hover:text-black hover:font-bold transition-all py-2 cursor-pointer"
              >
                About me
              </a>
            </li>
            <li>
              <Link 
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="block text-neutral-700 hover:text-black hover:font-bold transition-all py-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-neutral-700 hover:text-black hover:font-bold transition-all py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}


