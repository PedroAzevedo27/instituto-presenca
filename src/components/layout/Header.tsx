"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                isScrolled
                  ? "bg-primary-600 text-white"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              <Heart className="h-5 w-5" fill="currentColor" />
            </div>
            <div>
              <span
                className={`text-sm font-bold tracking-wider ${
                  isScrolled ? "text-primary-800" : "text-white"
                }`}
              >
                INSTITUTO
              </span>
              <span
                className={`block text-xs font-semibold tracking-widest ${
                  isScrolled ? "text-secondary-600" : "text-secondary-300"
                }`}
              >
                PRESENÇA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary-500 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#doe"
              className="rounded-full bg-secondary-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-secondary-600 hover:shadow-xl hover:-translate-y-0.5"
            >
              Doe Agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl animate-in slide-in-from-top">
            <nav className="flex flex-col px-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#doe"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-secondary-500 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-secondary-600"
              >
                Doe Agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
