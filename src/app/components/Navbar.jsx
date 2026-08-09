"use client";

import { useState } from "react";
import Link from "next/link";
import { UserRound } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#7D7236]/15 bg-[#EFE0C2]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* =========================
            Logo / Profile
        ========================== */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3 text-[#0D0C22]"
        >
          {/* Profile Icon */}
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7D7236]/20 bg-[#FEFAF2] transition-colors duration-200 hover:bg-[#7D7236]">
            <UserRound
              size={18}
              strokeWidth={1.7}
              className="text-[#7D7236] transition-colors duration-200 hover:text-[#FEFAF2]"
            />
          </span>

          {/* Name */}
          <span className="font-playfair text-3xl font-medium italic tracking-tight transition-colors duration-200 hover:text-[#7D7236]">
            Israt Jahan Ela<span className="text-[#7D7236]">...</span>
          </span>
        </Link>

        {/* =========================
            Desktop Navigation
        ========================== */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[#0D0C22] transition-colors duration-200 hover:text-[#7D7236]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* =========================
            Mobile Menu Button
        ========================== */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7D7236]/20 bg-[#FEFAF2] text-[#0D0C22] transition-all duration-200 hover:bg-[#7D7236] hover:text-[#FEFAF2] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            /* Close Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* Menu Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* =========================
          Mobile Navigation
      ========================== */}
      <div
        className={`overflow-hidden bg-[#FBF4E4] transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 border-t border-[#7D7236]/10"
            : "max-h-0"
        }`}
      >
        <div className="px-6 py-5">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-[#7D7236]/10 py-4 text-base font-medium text-[#0D0C22] transition-colors duration-200 hover:text-[#7D7236]"
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </header>
  );
}